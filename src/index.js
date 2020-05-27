import renderSvg from './render-svg';
import move from './move';
import getPanel from './panel';
import earth from './earth';
import moon from './moon';
import iss from './iss';
import ship1 from './ship';

import getHelpCalc from './helpCalc';

document.onLoad = loadApp;

var app = function(deps){

  var state = {
    timeSpeed: 1, // new
    width: 2000, // (m)
    time: 0, // time passed (s)
    zoom: 1,
    play: true,
    secondSkip: 0.1, // each time loop timming (s)
    ref: 'earth'
  }

  var objs = deps.objs;
  var helpCalc = deps.getHelpCalc()
  var move = deps.move(helpCalc);
  var renderSvg = deps.renderSvg(helpCalc);
  var ship1Data = deps.ship1(helpCalc);
  var ship1 = ship1Data.objList[0];
  var panel = deps.getPanel(helpCalc, state, ship1);

  move.init(objs);
  renderSvg.create(objs, state.zoom, getRefObj(objs), state.ref);
  renderSvg.createOne(ship1Data, state.zoom, getRefObj(objs)), state.ref;

  document.onclick = verifyClick;
  document.onkeydown = verifyKey;

  loop();

  function loop() {
    setTimeout(function() {
      if (!state.play) return;
      state.time += (state.secondSkip * state.timeSpeed);

      move.move(state.secondSkip, state.timeSpeed);
      renderSvg.update(objs, state.zoom, getRefObj(objs), state.ref);

      ship1Data.burstUpdate(state.secondSkip, state.timeSpeed);
      move.moveOne(ship1, state.secondSkip, state.timeSpeed, [objs.earth.objList[2],objs.moon.objList[0]]);
      renderSvg.updateOne(ship1Data, state.zoom, getRefObj(objs), state.ref);
      panel.update();

      if (ship1.position.crash) {
        modalOpen('ship crashed. Reload game.')
        return;
      }
      
      if (!checkTimeOut()) loop();
    }, 1000 * state.secondSkip);
  }

  function checkTimeOut() {
    var d0 = new Date(0, 0, 0, 0, 0, 0, 0);
    var d = new Date(0, 0, 0, 0, 0, 0, 0);
    d.setSeconds(state.time);
    var days = parseInt((d - d0) / (1000 * 60 * 60 * 24));
    
    if (days > 365) {
      modalOpen('Exausted fuel after 1 year of flight. Reload game.');
      return true;
    }
    return false;
  }

  function verifyClick(e) {
    if(e.target.nodeName == 'A') {
      var realLink = e.target.href
      var action = realLink
        .replace(window.location.origin+'/#/', '')
        .replace(window.location.search, '');

      if (!['file:','http:'].includes(action.substring(0,5))) {
        e.preventDefault();

        if (action === 'timePlay') playStop();
        else if (action === 'zoomMinus') zoomMultiply(2);
        else if (action === 'zoomPlus') zoomMultiply(.5);
        else if (action === 'timePlus') timeMultiply(2);
        else if (action === 'timeMinus') timeMultiply(.5);
        else if (action === 'modalClose') modalClose();
      }
    }
  }

  function verifyKey(e) {
    var keyCode = e.code;
    if (keyCode === 'KeyP') playStop();
    else if (keyCode === 'ArrowUp') ship1Data.addPitch(10);
    else if (keyCode === 'ArrowDown') ship1Data.addPitch(-10);
    else if (keyCode === 'KeyA') ship1Data.addBurstTNext(1);
    else if (keyCode === 'KeyZ') ship1Data.addBurstTNext(-1);
    else if (keyCode === 'Minus') zoomMultiply(2);
    else if (keyCode === 'Equal') zoomMultiply(.5);
    else if (keyCode === 'Period') timeMultiply(2);
    else if (keyCode === 'Comma') timeMultiply(.5);
    else if (keyCode === 'KeyV') setRef();
    else if (keyCode.substring(0,5) === 'Digit') {
      ship1Data.setBurstANext(keyCode.replace('Digit', ''))
    }
    if (!state.play) return;

    if (keyCode === 'Space') {
      ship1Data.burstStart();
    }
  }

  function getRefObj(objs) {
    var obj = 'hey';
    if (state.ref === 'earth') obj = objs.earth.objList[2];
    else obj = objs.moon.objList[0];
    return obj;
  }

  function setRef() {
    if (state.ref === 'earth') state.ref = 'moon';
    else state.ref = 'earth';
  }

  function playStop() {
    state.play = !state.play;
    document.getElementById('time').style.color = state.play ? 'white' : 'red';
    panel.update('timePlay');
    if (state.play) loop();
  }

  function zoomMultiply(times) {
    state.zoom *= times;
    state.zoom = Math.max(state.zoom, 1);
    renderSvg.update(objs, state.zoom, getRefObj(objs), state.ref);
    renderSvg.updateOne(ship1Data, state.zoom, getRefObj(objs), state.ref);
  }

  function timeMultiply(times) {
    var timeSpeed = state.timeSpeed * times;
    if (timeSpeed < 1) timeSpeed = 1;
    if (timeSpeed > 1000000) timeSpeed = 1000000;
    state.timeSpeed = parseInt(timeSpeed);
    panel.update('timeSpeed');
  }

  function modalClose() {
    var classList = document.getElementById('modal').classList;
    classList.remove('modalOpen');
    classList.add('modalClosed');
    document.getElementById('modalcontent').innerText = '';
  }

  function modalOpen(msg) {
    var classList = document.getElementById('modal').classList;
    classList.remove('modalClosed')
    classList.add('modalOpen');
    document.getElementById('modalcontent').innerText = msg
  }
}

var loadApp = (function() {

  var deps = {
    renderSvg: renderSvg,
    move: move,
    ship1: ship1,
    getPanel: getPanel,
    objs: {
      earth: earth,
      moon: moon,
      iss: iss,
    },
    getHelpCalc: getHelpCalc
  }

  app(deps);
})()


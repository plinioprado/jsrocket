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
    width: 4000, // (m)
    play: true,
    timerStart: 0,
    timerSkip: 0,
    timer: 0,
    timeSpeed: 1, // * n means n times faster
    timeSkip: 0.1, // each time loop timming (s)
    time: 0, // time passed (s)
    ship1: null,
    render: null
  }

  var objs = deps.objs;
  var helpCalc = deps.getHelpCalc()
  var move = deps.move(helpCalc);
  var render = deps.render(helpCalc);
  var ship1Data = deps.ship1(helpCalc);
  var ship1 = ship1Data.objList[0];
  var panel = deps.getPanel(helpCalc, state, ship1);

  render.init(state)
  ship1Data.init(state)
  move.init(objs);

  render.create(objs, getRefObj(objs), state.render);
  render.createOne(ship1Data, getRefObj(objs), state.render);

  document.onclick = verifyClick;
  document.onkeydown = verifyKey;

  state.timerStart = Date.now();
  loop();

  function loop() {
    setTimeout(function() {
      // starts updating time because tracks how long this loop takes
      state.time += (state.timeSkip * state.timeSpeed);

      // game over
      if (ship1.position.crash) modalOpen('ship crashed. Reload game.');
      if (ship1.position.crash || !state.play || checkTimeOut()) return;

      // move and render
      move.move(state.timeSkip, state.timeSpeed);
      ship1Data.burstUpdate(state.timeSkip, state.timeSpeed);
      move.moveOne(ship1, state.timeSkip, state.timeSpeed, [objs.earth.objList[2],objs.moon.objList[0]], state);
      renderUpdate();
      panel.update();

      // skip for next regular loop
      state.timer = Date.now() - state.timerStart;
      var timerNext = Math.floor((state.timer + 1000 * state.timeSkip) / 100) * 100;
      state.timerSkip = timerNext - state.timer;

      loop();
    }, state.timerSkip);
  }

  function renderUpdate() {
    render.update(objs, getRefObj(objs), state.render);
    render.updateOne(ship1Data, getRefObj(objs), state.render);
    render.updateTrail(ship1Data, getRefObj(objs), state.render, state.ship1);
  }

  function checkTimeOut() {
    if ((state.time/(60 * 60 * 24)) > 365) {
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
    else if (keyCode === 'KeyT') ship1Data.showTrail(state.ship1);
    else if (keyCode === 'KeyV') state.render.refId = render.setRef(state.render.refId);
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
    if (state.render.refId === 'earth') obj = objs.earth.objList[2];
    else obj = objs.moon.objList[0];
    return obj;
  }

  function playStop() {
    state.play = !state.play;
    document.getElementById('time').style.color = state.play ? 'white' : 'red';
    panel.update('timePlay');
    if (state.play) loop();
  }

  function zoomMultiply(times) {
    state.render.zoom *= times;
    state.render.zoom = Math.max(state.render.zoom, 1);
    if (!state.play) renderUpdate();
  }

  function timeMultiply(times) {
    var timeSpeed = state.timeSpeed * times;
    if (timeSpeed < 1) timeSpeed = 1;
    if (timeSpeed > 2000) timeSpeed = 2000;
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
    render: renderSvg,
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


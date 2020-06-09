
let renderSvg = (helpCalc) => {

  const init = (initState, refObjs) => {
    initState.render = {
      refId: 'earth',
      refObjs: refObjs,
      zoom: 1,
      canvasNode: null,
      initState: null
    }
    initState.render.canvasNode  = document.getElementById('canvas'),
    initState.render.viewCenter = getViewCenter(initState.render.canvasNode);
  }

  const create = (objs, refObjs, stateRender) => {
    let keys = Object.keys(objs);
    keys.forEach(key => {
      let obj = objs[key];
      if (obj.objList) {
        obj.objList.forEach(obj => {
          createObj(stateRender.canvasNode, obj);
        })
      }
    });
    update(objs, refObjs, stateRender);
  }

  const createOne = (obj, refObjs, stateRender) => {
    obj.objList.forEach(obj => {
      createObj(stateRender.canvasNode, obj);
      if (obj.id === 'shipBurst') stateRender.burstNode = document.getElementById(obj.id);

    })
    updateObj(obj.objList[0], refObjs, stateRender)
  }

  const updateOne = (obj, refObjs, stateRender, ship1) => {
    updateObj(obj.objList[0], refObjs, stateRender, ship1);
  }

  const updateTrail = (obj, refObj, stateRender, ship1, stateShip1) => {
    obj.objList[6].render.display = stateShip1.trail.display;
    const points = stateShip1.trail.points;
    const shipDec = obj.objList[0].position.dec;

    const trim = getTrim(stateRender.zoom, refObj, stateRender.refId, stateRender.canvasNode, shipDec);
    let newPoints = '';
    for (let i = 0; i < points.length; i+=2) {
      const cart = helpCalc.fromPolar({
        r: points[i], 
        dec: points[i + 1]
      });
      const x = stateRender.viewCenter.x + trim.x + cart.x / stateRender.zoom;
      const y = stateRender.viewCenter.y + trim.y - cart.y / stateRender.zoom
      newPoints += (x + ',' + y + ' ')
    }
    obj.objList[6].render.points = newPoints;
    updateObj(obj.objList[6], refObj, stateRender, ship1);
  }

  const update = (objs, refObj, stateRender, ship1) => { // xxx
    let keys = Object.keys(objs);
    keys.forEach(key => {
      let obj = objs[key];
      obj.objList.forEach(obj => {
        updateObj(obj, refObj, stateRender, ship1);
      })
    });
  }

  const setRef = (renderState) => {
    const keys = Object.keys(renderState.refObjs);
    let index = keys.indexOf(renderState.refId);
    if (++index >= keys.length) index = 0;
    return keys[index];
  }

  function createObj(canvasNode, obj) {
    let parentNode;
    let svgns = 'http://www.w3.org/2000/svg';
    let newNode = document.createElementNS(svgns, obj.render.format);
    
    // Core attibutes
    if (obj.id) newNode.setAttributeNS(null, 'id', obj.id);

    // Element attibutes
    if (obj.render.stdDeviation) newNode.setAttributeNS(null, 'stdDeviation', obj.render.stdDeviation);
    if (obj.render.clipPath) newNode.setAttributeNS(null, 'clip-path', obj.render.clipPath);
    if (obj.render.filter) newNode.setAttributeNS(null, 'filter', obj.render.filter);
    if (obj.render.points) newNode.setAttributeNS(null, 'points', obj.render.points);
    if (obj.render.x || obj.render.x === 0) newNode.setAttributeNS(null, 'x', obj.render.x);
    if (obj.render.y || obj.render.y === 0) newNode.setAttributeNS(null, 'y', obj.render.y);
    if (obj.render.width || obj.render.width === 0) newNode.setAttributeNS(null, 'width', obj.render.width);
    if (obj.render.height || obj.render.height === 0) newNode.setAttributeNS(null, 'height', obj.render.height);
    if (obj.render.cx) newNode.setAttributeNS(null, 'cx', obj.render.cx);
    if (obj.render.cy) newNode.setAttributeNS(null, 'cy', obj.render.cy);
    if (obj.render.rx) newNode.setAttributeNS(null, 'rx', obj.render.rx);
    if (obj.render.ry) newNode.setAttributeNS(null, 'ry', obj.render.ry);
    // y, y, width and height may be updated in updateObj(), transform will

    //Presentation attibutes
    if (obj.render.display) newNode.setAttributeNS(null, 'display', obj.render.display);
    if (obj.render.color) newNode.setAttributeNS(null, 'fill', obj.render.color);
    if (obj.render.stroke) newNode.setAttributeNS(null, 'stroke', obj.render.stroke);
    if (obj.render.strokeDasharray) newNode.setAttributeNS(null, 'stroke-dasharray', obj.render.strokeDasharray);
    // display may be updated in updateObj()

    if (obj.render.parentId) {
      parentNode = document.getElementById(obj.render.parentId);
    } else {
      let canvasSvgNode = getSvgCanvasNode(canvasNode);
      canvasNode.appendChild(canvasSvgNode);
      parentNode = canvasSvgNode;
    }

    parentNode.appendChild(newNode);
  }

  function updateObj(obj, refObj, stateRender, ship1) {
    let node = document.getElementById(obj.id);
    let viewCenter = stateRender.viewCenter;
    const shipDec = ship1 ? ship1.position.dec : 0; // create con't call with ship1
    const cart = helpCalc.fromPolar({
      r: obj.position ? obj.position.r : null,
      dec: obj.position ? obj.position.dec : null
    });
    const zoom = stateRender.zoom;
    const trim = getTrim(zoom, refObj, stateRender.refId, stateRender.canvasNode, shipDec);
    const svgTag = obj.render.format;
    if (svgTag === 'circle') {
      node.setAttributeNS(null, 'cx', (viewCenter.x + trim.x + cart.x / zoom));
      node.setAttributeNS(null, 'cy', (viewCenter.y + trim.y - cart.y / zoom));
      node.setAttributeNS(null, 'r', Math.max(2, obj.r / zoom));
    } else if (svgTag === 'rect') {
      const widthPx = Math.max(2, obj.width / zoom);
      const heightPx = Math.max(2, obj.height / zoom);
      node.setAttributeNS(null, 'x', (viewCenter.x + trim.x - cart.x/zoom - (widthPx / 2)));
      node.setAttributeNS(null, 'y', (viewCenter.y + trim.y - cart.y / zoom));
      node.setAttributeNS(null, 'width', widthPx);
      node.setAttributeNS(null, 'height', heightPx);
    } else if (obj.id === 'ship1Trail') {
      node.setAttributeNS(null, 'display', obj.render.display ? 'block' : 'none');
      node.setAttributeNS(null, 'points', obj.render.points);
    } else if (obj.id === 'ship1') {
      const x = (viewCenter.x + trim.x + cart.x/zoom - 5);
      const y = (viewCenter.y + trim.y - cart.y / zoom - 10);
      const pitch = obj.position.pitchDec;
      const transform = `translate(${x},${y}) rotate(${pitch},5,5)`;
      const visibility = obj.position.burst.a > 0 ?  'visible' : 'hidden';
      node.setAttributeNS(null, 'transform', transform);
      if (stateRender.burstNode) stateRender.burstNode.setAttributeNS(null, 'visibility', visibility);
    }
  }

  function getSvgCanvasNode(canvasNode) {
    var canvasSvgNode;

    for (let i = 0; i < canvasNode.children.length; i++) {
      if (canvasNode.children[i].id === 'canvasSvg') canvasSvgNode = canvasNode.children[i];
    }

    if (!canvasSvgNode) {
      let svgns = 'http://www.w3.org/2000/svg';
      canvasSvgNode = document.createElementNS(svgns, 'svg');
      canvasSvgNode.setAttributeNS(null, 'id', 'canvasSvg');
      canvasSvgNode.setAttributeNS(null, 'width', '100%');
      canvasSvgNode.setAttributeNS(null, 'height', '100%');      
    }

    return canvasSvgNode;
  }

  function getViewCenter(canvasNode) {
    return {
      y: canvasNode.offsetHeight / 2,
      x: canvasNode.offsetWidth / 2
    }
  }

  function getTrim(zoom, refObj, refId, canvasNode, shipDec) {
    const refCar = helpCalc.fromPolar({r: refObj.position.r, dec: refObj.position.dec})
    const canvasMinSize = Math.min(canvasNode.offsetWidth, canvasNode.offsetHeight) * zoom
    const refObjWidth = refObj.r * 2;

    let trim;
    const ratio = refObjWidth/canvasMinSize;
    const closeMinRatio = refId === 'moon' ? 1 : 5;
    if (ratio > closeMinRatio) { // close, surface on botton
      trim = {
        x: -refCar.x / zoom,
        y: refCar.y / zoom + refObj.r / zoom + 200
      }
    } else if (ratio < 1) { // distant, center
      trim = {x: -refCar.x / zoom, y: refCar.y / zoom}
    } 
    else {
      trim = { // intermediate
        x: -refCar.x / zoom,
        y: refCar.y / zoom + refObj.r / zoom + 20
      }
      if (shipDec > 45 && shipDec <= 135) trim = {x: -trim.y, y: -trim.x} // right
      else if (shipDec > 135 && shipDec <= 225) trim = {x: trim.x, y: -trim.y} // bottom
      else if (shipDec > 225 && shipDec <= 325) trim = {x: trim.y, y: trim.x}; // left
    }
    return trim;
  }

  return {
    create,
    createOne,
    init,
    setRef,
    update,
    updateOne,
    updateTrail
  }
}

export default renderSvg;
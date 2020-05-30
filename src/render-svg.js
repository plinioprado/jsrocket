
let renderSvg = (helpCalc) => {

  let canvasNode;
  let viewCenter;
  let burstNode;
  let shipDec;

  init()

  function init() {
    canvasNode = document.getElementById('canvas');
    viewCenter = getViewCenter(canvasNode);
  }

  let create = (objs, zoom, refObjs, refId) => {
    let keys = Object.keys(objs);
    keys.forEach(key => {
      let obj = objs[key];
      if (obj.objList) {
        obj.objList.forEach(obj => {
          createObj(canvasNode, obj);
        })
      }
    });
    update(objs, zoom, refObjs, refId);
  }

  const createOne = (obj, zoom, refObjs, refId) => {
    obj.objList.forEach(obj => {
      createObj(canvasNode, obj);
    })
    
    updateObj(obj.objList[0], zoom, refObjs, refId)
  }

  const updateOne = (obj, zoom, refObjs, refId,) => {
    updateObj(obj.objList[0], zoom, refObjs, refId);
    shipDec = obj.objList[0].position.dec;
  }

  const updateTrail = (obj, zoom, refObjs, refId, state) => {
    obj.objList[6].render.display = state.ship1.trail.display;
    const points = state.ship1.trail.points;
    const trim = getTrim(zoom, refObjs, refId);
    let newPoints = '';
    for (let i = 0; i < points.length; i+=2) {
      const cart = helpCalc.fromPolar({
        r: points[i], 
        dec: points[i + 1]
      });
      const x = viewCenter.x + trim.x + cart.x / zoom;
      const y = viewCenter.y + trim.y - cart.y / zoom
      newPoints += (x + ',' + y + ' ')
    }
    obj.objList[6].render.points = newPoints;
    updateObj(obj.objList[6], zoom, refObjs, refId);
  }

  const update = (objs, zoom, refObjs, refId) => {
    let keys = Object.keys(objs);
    keys.forEach(key => {
      let obj = objs[key];

      if (obj.renderType === 'svg') updateObj(obj, zoom, refObjs, refId);
      obj.objList.forEach(obj => {
        updateObj(obj, zoom, refObjs, refId);
      })
    });
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
    if (obj.id === 'shipBurst') burstNode = newNode;
  }

  function updateObj(obj, zoom, refObjs, refId) {
    let node = document.getElementById(obj.id);

    const cart = helpCalc.fromPolar({
      r: obj.position ? obj.position.r : null,
      dec: obj.position ? obj.position.dec : null
    });
    const trim = getTrim(zoom, refObjs, refId);
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
      burstNode.setAttributeNS(null, 'visibility', visibility);
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

  function getTrim(zoom, refObjs, refId) {
    const refCar = helpCalc.fromPolar({r: refObjs.position.r, dec: refObjs.position.dec})
    const canvasMinSize = Math.min(canvasNode.offsetWidth, canvasNode.offsetHeight) * zoom
    const refObjWidth = refObjs.r * 2;
    
    let trim;
    const ratio = refObjWidth/canvasMinSize;
    const closeMinRatio = refId === 'moon' ? .5 : 5;
    if (ratio > closeMinRatio) { // close, surface on botton
      trim = {
        x: -refCar.x / zoom,
        y: refCar.y / zoom + refObjs.r / zoom + 200
      } 
    } else if (ratio < .5 || refId === 'moon') { // distant, center
      trim = {x: -refCar.x / zoom, y: refCar.y / zoom}
    } 
    else {
      trim = { // intermediate
        x: -refCar.x / zoom,
        y: refCar.y / zoom + refObjs.r / zoom + 20
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
    update,
    updateOne,
    updateTrail
  }
}

export default renderSvg;
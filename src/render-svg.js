
let renderSvg = (helpCalc) => {

  let canvasNode;
  let viewCenter;
  let burstNode;

  init()

  function init() {
    canvasNode = document.getElementById('canvas');
    viewCenter = getViewCenter(canvasNode);
  }

  let create = (objs, zoom) => {
    // called at init
    
    let keys = Object.keys(objs); // children before to hender behind
    keys.forEach(key => {
      let obj = objs[key];
      if (obj.objList) {
        obj.objList.forEach(obj => {
          createObj(canvasNode, obj);
        })
      }
    });
    update(objs, zoom);
  }

  const createOne = (obj, zoom) => {
    // called at init

    obj.objList.forEach(obj => {
      createObj(canvasNode, obj);
    })
    
    updateObj(obj.objList[0], zoom)
  }

  const updateOne = (obj, zoom) => {
    updateObj(obj.objList[0], zoom)
  }

  const update = (objs, zoom) => {
    // called at init and each loop iteracion
    if (!viewCenter) viewCenter = getViewCenter(canvasNode);
    
    let keys = Object.keys(objs);
    keys.forEach(key => {
      let obj = objs[key];
      if (obj.renderType === 'svg') updateObj(obj, zoom);

      obj.objList.forEach(obj => {
        updateObj(obj, zoom);
      })
    });
  }

  let updateOne = (objList, zoom) => {
    // called at init and loop

    if (!viewCenter) viewCenter = getViewCenter(canvasNode);
    objList.forEach(obj => {
      updateObj(obj, zoom, viewCenter);
    })
  }

  function createObj(canvasNode, obj) {

    let parentNode;
    let svgns = 'http://www.w3.org/2000/svg';
    let newNode = document.createElementNS(svgns, obj.render.format);
    if (obj.id) newNode.setAttributeNS(null, 'id', obj.id);

    // let keys = Object.keys(obj.render); // option to below
    // for (let i = 0; i < keys.length; i++) {
    // 	if (keys[i] !== 'format' && keys[i] !== 'parentId') {
    // 		//newNode.setAttributeNS(null, keys[i], obj.render[keys[i]]);
    // 	}
    // }
    
    if (obj.render.color) newNode.setAttributeNS(null, 'fill', obj.render.color);
    if (obj.render.stroke) newNode.setAttributeNS(null, 'stroke', obj.render.stroke);
    if (obj.render.strokeDasharray) newNode.setAttributeNS(null, 'stroke-dasharray', obj.render.strokeDasharray);
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
    // y, y, width and height may be assigned in updateObj(), transform will

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

  function updateObj(obj, zoom) {
    const cart = helpCalc.fromPolar({
      r: obj.position.r,
      dec: obj.position.dec
    });

    const trim = getTrim(zoom);

    const svgTag = obj.render.format;
    let node = document.getElementById(obj.id);
    if (svgTag === 'circle') {
      let rPx = Math.max(2, obj.r / zoom);

      node.setAttributeNS(null, 'cx', (viewCenter.x + trim.x + cart.x / zoom));
      node.setAttributeNS(null, 'cy', (viewCenter.y + trim.y - cart.y / zoom));
      node.setAttributeNS(null, 'r', rPx);
    } else if (svgTag === 'rect') {
      const widthPx = Math.max(2, obj.width / zoom);
      const heightPx = Math.max(2, obj.height / zoom);

      node.setAttributeNS(null, 'x', (viewCenter.x + trim.x - cart.x/zoom - (widthPx / 2)));
      node.setAttributeNS(null, 'y', (viewCenter.y + trim.y - cart.y / zoom));
      node.setAttributeNS(null, 'width', widthPx);
      node.setAttributeNS(null, 'height', heightPx);
    } else if (obj.id === 'ship1') {
      const x = (viewCenter.x + trim.x + cart.x/zoom - 10);
      const y = (viewCenter.y + trim.y - cart.y / zoom - 10);
      const pitch = obj.position.pitchDec;
      const transform = `translate(${x},${y}) rotate(${pitch})`;
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

  function getTrim(zoom) {

    var trimY = 6378100;
    if (zoom <10000 ) trimY = 6378100 + 200 * zoom ;
    if (zoom > 100000 / 2 ) trimY = 6378100 / 2;
    if (zoom > 100000 ) trimY = 0;

    let trim = {
      x: 0 / zoom,
      y: trimY  / zoom
    }
    return trim;
  }

  return {
    create,
    createOne,
    update,
    updateOne
  }
}

export default renderSvg;
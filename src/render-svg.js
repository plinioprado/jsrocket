let renderSvg = function() {

  let create = (canvasNode, objs, zoom) => {
    // handles static properties

    let keys = Object.keys(objs);
    keys.forEach(key => {
      let obj = objs[key];
      if (obj.children) {
        obj.children.forEach(obj => {
          createObj(canvasNode, obj);
        })
      }
      if (obj.renderType === 'svg') createObj(canvasNode, objs[key])
    });
  }

  let update = (canvasNode, objs, zoom) => {
    // handles dynamic properties

    let keys = Object.keys(objs);
    keys.forEach(key => {
      let obj = objs[key];
      let viewCenter = getViewCenter(canvasNode, obj, zoom);
      if (obj.renderType === 'svg') updateObj(obj, zoom, viewCenter);
      if (obj.children) {
        obj.children.forEach(obj => {
          updateObj(obj, zoom, viewCenter);
        })
      }
    });
  }

  function createObj(canvasNode, obj) {
    let canvasSvgNode = getSvgCanvasNode(canvasNode);
    canvasNode.appendChild(canvasSvgNode);

    let svgns = 'http://www.w3.org/2000/svg';
    let newNode = document.createElementNS(svgns, 'circle');
    newNode.setAttributeNS(null, 'id', obj.id);
    newNode.setAttributeNS(null, 'r', 0); // will be set in update
    newNode.setAttributeNS(null, 'fill', obj.render.color);
    canvasSvgNode.appendChild(newNode);
  }

  function updateObj(obj, zoom, viewCenter) {
    let node = document.getElementById(obj.id);
    node.setAttributeNS(null, 'cx', viewCenter.x);
    node.setAttributeNS(null, 'cy', viewCenter.y);
    node.setAttributeNS(null, 'r', obj.r / zoom);
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

  function getViewCenter(canvasNode, obj, zoom) {
    return {
      y: canvasNode.offsetHeight / 2 + obj.r / zoom,
      x: canvasNode.offsetWidth / 2
    }
  }

  return {
    create,
    update
  }
}

export default renderSvg;
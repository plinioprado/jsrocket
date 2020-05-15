let renderSvg = function() {

  let create = (canvasNode, objs) => {
    // handles static properties

    let keys = Object.keys(objs); // children before to hender behind
    keys.forEach(key => {
      let obj = objs[key];
      if (obj.children) {
        obj.children.forEach(obj => {
          createObj(canvasNode, obj);
        })
      }
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
    let newNode = document.createElementNS(svgns, obj.render.format);
    newNode.setAttributeNS(null, 'id', obj.id);
    newNode.setAttributeNS(null, 'fill', obj.render.color);

    canvasSvgNode.appendChild(newNode);
  }

  function updateObj(obj, zoom, viewCenter) {
    const cart = fromPolar({
      r: obj.position.r,
      dec: obj.position.dec
    });

    const svgTag = obj.render.format;
    let node = document.getElementById(obj.id);
    node.setAttributeNS(null, 'cx', viewCenter.x - cart.x / zoom);
    node.setAttributeNS(null, 'cy', viewCenter.y - cart.y / zoom);
    if (svgTag === 'circle') {
      node.setAttributeNS(null, 'cx', viewCenter.x - cart.x / zoom);
      node.setAttributeNS(null, 'cy', viewCenter.y - cart.y / zoom);
      node.setAttributeNS(null, 'r', obj.r / zoom);
    } else if (svgTag === 'rect') {
      const widthPx = Math.max(2,obj.width / zoom);
      const heightPx = Math.max(2,obj.height / zoom);
      node.setAttributeNS(null, 'x', viewCenter.x - cart.x/zoom - widthPx / 2);
      node.setAttributeNS(null, 'y', viewCenter.y - cart.y / zoom);
      node.setAttributeNS(null, 'width', widthPx);
      node.setAttributeNS(null, 'height', heightPx);
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

  function getViewCenter(canvasNode, obj, zoom) {
    return {
      y: canvasNode.offsetHeight / 2 + obj.r / zoom,
      x: canvasNode.offsetWidth / 2
    }
  }

  function fromPolar(polar) {
    return {
      x: polar.r * Math.sin(polar.dec * Math.PI/180),
      y: polar.r * Math.cos(polar.dec * Math.PI/180)
    }
  }

  return {
    create,
    update
  }
}

export default renderSvg;
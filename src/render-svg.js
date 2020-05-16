let renderSvg = () => {

  let canvasNode;

  let create = (objs) => {
    // called at init

    canvasNode = document.getElementById('canvas');

    let keys = Object.keys(objs); // children before to hender behind
    keys.forEach(key => {
      let obj = objs[key];
      if (obj.objList) {
        obj.objList.forEach(obj => {
          createObj(canvasNode, obj);
        })
      }
    });
  }

  let update = (objs, zoom) => {
    // called at init and each loop iteracion

    let keys = Object.keys(objs);
    keys.forEach(key => {
      let obj = objs[key];
      let viewCenter = getViewCenter(canvasNode, obj, zoom);
      if (obj.renderType === 'svg') updateObj(obj, zoom, viewCenter);
      obj.objList.forEach(obj => {
        updateObj(obj, zoom, viewCenter);
      })
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

		const trim = {
			x: 0 / zoom,
			y: 6378100  / zoom //
		}

    const svgTag = obj.render.format;
    let node = document.getElementById(obj.id);
    if (svgTag === 'circle') {
			let rPx = Math.max(2, obj.r / zoom);
      node.setAttributeNS(null, 'cx', viewCenter.x + trim.x + cart.x / zoom);
      node.setAttributeNS(null, 'cy', viewCenter.y + trim.y - cart.y / zoom);
			node.setAttributeNS(null, 'r', rPx);
    } else if (svgTag === 'rect') {
      const widthPx = Math.max(2, obj.width / zoom);
      const heightPx = Math.max(2, obj.height / zoom);
      node.setAttributeNS(null, 'x', viewCenter.x + trim.x - cart.x/zoom - widthPx / 2);
      node.setAttributeNS(null, 'y', viewCenter.y + trim.y - cart.y / zoom);
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
      y: canvasNode.offsetHeight / 2,
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
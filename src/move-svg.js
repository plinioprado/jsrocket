let moveSvg = () => {

  let data = [];

  function init(objs) {
    // called at init

    let keys = Object.keys(objs);
    for (let i = 0; i < keys.length; i++) {
      let objList = objs[keys[i]].objList;
      for (let j = 0; j < objList.length; j++) {
        let obj = objList[j];
        if (obj.position.vR || obj.position.vDec) { // will move
          const newData = obj.position;
          newData.id = obj.id;
          data = [...data, newData];
        }
      }
    }
  }

  const move = (timeSpeed) => {
    // called at init and each loop iteracion

    for (let i = 0; i < data.length; i++) {
      let position = data[i];
      position.r += position.vR * .1 * timeSpeed;
      position.dec += position.vDec * .1 * timeSpeed;
    }
  }

  return {
    init,
    move
  }
}

export default moveSvg
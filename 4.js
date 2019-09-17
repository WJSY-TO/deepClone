let obj = {}
function clone(target){
  if(typeof target === 'object'){
      let cloneTarget = {};
      //性能开销
      for(const key in target){
        cloneTarget[key] = clone(target[key]);
      }
      return cloneTarget;
  }else{
      return target;
  }
}
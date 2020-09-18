let cache = {};

function cacheFunction(fn) {
  return function(n){
    if(cache[n]){
      console.log("cached result");
      return cache[n]
    }
    else{
      console.log("result not in cache");
      cache[n]=fn(n);
      return cache[n];
    }
  }
  
}


export {
  cacheFunction,
};

function sumFibs(num) {
  let p = 1;
  let q = 1;
  let newVal;
  let sum = 0;
  for(let i=0; i<=num;++i){
    newVal = p + q;
    p = q;
    q = newVal;
    if(newVal%2!=0 && newVal<=num){
      console.log(newVal);
      sum+=newVal;
    }

  }
  return sum+2; //accounting for the first two 1's
  }

function cacheFunction() {}

export { sumFibs, cacheFunction };

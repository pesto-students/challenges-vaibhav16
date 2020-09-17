function sumFibs(num) {
  let p = 1;
  let q = 1;
  let newVal;
  let sum = 0;
  for (let i = 0; i <= num; ++i) {
    newVal = p + q;
    p = q;
    q = newVal;
    if (newVal % 2 != 0 && newVal <= num) {
      sum += newVal;
    }

  }

  return sum + 2; //accounting for the first two 1's
}

let cache = {};

function cacheFunction(n) {
  if (cache[n]) {
    return cache[n];
  }
  else {
    cache[n] = sumFibs(n);
    return cache[n]
  }

}



export { sumFibs, cacheFunction };

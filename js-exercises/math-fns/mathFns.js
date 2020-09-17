// You can use the function from the `Math` module.
var sqrt = (num) =>{
  return Math.sqrt(num);
}

var power = (num,pow) =>{
  return Math.pow(num,pow);
}

var round = (num) =>{
  return Math.round(num);
}

// Don't change the exported names. 
export {
  sqrt,
  power,
  round,
};

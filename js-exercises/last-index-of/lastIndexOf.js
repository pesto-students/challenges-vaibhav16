
function lastIndexOf(x,...args) {
  let pos = -1;
  for(let i=0;i<args.length;++i){
    if(args[i]==x){
      pos=i;
    }
  }
  return pos;
}

console.log(lastIndexOf(2,4,4,44,2,5));

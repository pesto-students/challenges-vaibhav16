
function balancedBraces(args) {
  let stack = [];
  let json = {
    '(':')',
    '[': ']',
    '{': '}'
  }
  for(let i=0;i<args.length;++i){
    if(args[i]=="(" || args[i]=="{" || args[i]=="[" ){
      stack.push(args[i])
    }
    else if(args[i]==")" || args[i]=="}" || args[i]=="]" ){
      let last = stack.pop();
      if(args[i]!=json[last]){
        return false;
      }
    }
  }

  console.log(stack);

  if(stack.length!=0)
  return false;

  return true;
}


console.log(balancedBraces("if(a==b x = y;"));


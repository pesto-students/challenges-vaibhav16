var flipped = (function(arr) {
    let len = arr.length;
    for(let i=0;i<len/2;++i){
        let temp = arr[i];
        arr[i]=arr[len-i-1];
        arr[len-i-1] = temp;

    }
    return arr;

  });

  let x = flipped([1,2,3,4]);
  console.log(x);

  export {flipped}
var flipped = (function(arr) {
    if(arr){
        let len = arr.length;
        for(let i=0;i<len/2;++i){
            let temp = arr[i];
            arr[i]=arr[len-i-1];
            arr[len-i-1] = temp;
    
        }
        return arr;
    }
    return [];
  });


  export {flipped}
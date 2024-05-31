// declare function

function  canPay(arr , number) {

     let add =0 ;
     
    if(arr.length >= 1){

        for(let i=0 ; i<arr.length;i++){

            add = add + arr[i];
    
        }


        if(add >= number ){
            return true ; 
      }
  
      else {
          return false;
      }
    }
   
    return 'please do not enter empty array  array '
   
      
}

console.log(canPay(['w'],18))
console.log(canPay([1,2,5], 10))
console.log(canPay([1,5,5],10))
console.log(canPay([1,1,2],7))
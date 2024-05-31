

//  declare function 

function cubeNumber(value) {

    let result;

    if( typeof value === 'number'){
         result = Math.pow(value,3);
    }

    else{
        return ('Enter a number')
    }

     return result ;

}

let result= (cubeNumber(2))

console.log(result);
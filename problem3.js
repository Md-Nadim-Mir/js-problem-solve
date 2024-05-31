// declare a function 

function sortMaker( arr) {

    // both positive 
     if(arr[0] >=0 && arr[1] >=0){

        let temp ;

        if(arr[1]>arr[0]){
            temp=arr[0];
            arr[0]=arr[1];
            arr[1]=temp;
        }

        else if(arr[1]<arr[0]) {
            return arr;
        }

        else {
                 return 'equal'

        }

     }

    //  any negative value
    else {
        return 'invalid input'
    }

      return arr;
}

console.log(sortMaker([2,3]))
console.log(sortMaker([4, 2]))
console.log(sortMaker([4,4]))
console.log(sortMaker([1,2] ))
console.log(sortMaker([4,-2]))
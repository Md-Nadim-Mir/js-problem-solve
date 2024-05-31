// declare a function

 function findAddress(address){

    if(Object.keys(address).length == 3){
        let fullAddress = address.street+',' + address.house + ',' + address.society;
        return fullAddress;
    }

    else if (Object.keys(address).length==2){
        let fullAddress = address.street + ',' + '__' + ','+ address.society ;
        return fullAddress;
    }

    else{
        let fullAddress = address.street + ',' + '__' + ','+ '__' ;
        return fullAddress;
    }

   
 }

//  input 1
  let address = {
    street: 10, 
    house: '15A',
    society: 'Earth Perfect'
  }
    
 console.log(findAddress(address))

//  input 2
  let address2 = {
    street: 10, 
    society: 'Earth Perfect'
  }
    
 console.log(findAddress(address2))


 //  input 3
 let address3 = {
    street: 10
  }
    
 console.log(findAddress(address3))



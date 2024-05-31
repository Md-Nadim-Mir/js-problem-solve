// declare a function

function matchFinder(string1, string2){


    // validate string
    if(typeof string1 === 'string'  && typeof string2 === 'string' ) {

        if(string1.includes(string2)){
            return(true)
        }

        else{
            return(false) ;
        }
    }
    
    else {
        return('please enter a string type value');
    }

   
}

console.log(matchFinder('John Doe', 'ohn'))
console.log(matchFinder('JavaScript', 'Code'))
console.log(matchFinder('Peter Parker', 'Pen'))
console.log(matchFinder('Peter Parker','pet'))



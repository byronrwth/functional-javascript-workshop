function countWords1(inputWords) {
    //index = 0;
    var count = 0;
    x = {};
    return inputWords.reduce(function(x, b) {
        

        if ( !x[b] ) {
            x[b] = 1 ;
            console.log(" x["+b+"] = 1  " );
        }
        else {
            x[b]++ ;
            console.log("x["+b+ "]  = " + x[b]);
        }

        //console.log("x = " + x);
        
        return x;

    },{} );  // this initial value {} is the key !! else x keeps as 1st input string object from inputWords e.g. x='sunt'

    //return x;

    // return inputWords.reduce( function(a,b) {
    //     console.log("a = " + a);
    //     console.log("b = " + b);
    //     return a ;}  );
    //return inputWords.reduce( function(a, b) {return 1; )  ;
}
/*
Basic: Reduce(So far the most “complicated” method: a callback and an optional initial value. The callback function takes in 4 arguments: prev, curr, index and arr(the array itself). But it is not complex. Just a while and you will get it–prev is the previously returned value or initial value/first item for the first call; curr is the current item; index is the index and arr is itself)
*/
function countWords_solution(arr) {
  return arr.reduce(function(countMap, word) {
    countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
    return countMap
  }, {}) // second argument to reduce initialises countMap to {}
}

module.exports = countWords

function countWords(inputWords) {
  return inputWords.reduce(function(resultObj, word) {
    resultObj[word] = ++resultObj[word] || 1;
    return resultObj;
  }, {});
}

module.exports = countWords1
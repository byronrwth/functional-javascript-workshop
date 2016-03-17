function countWords(inputWords) {
    //return [0,1,2,3].reduce( function(a,b) {return a+b ;}  );
  return inputWords.reduce( function(x) {return x+1;} ) ;
}

module.exports = countWords
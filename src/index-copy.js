
// write a function on the Array prototype
// called groupBy(callback) that takes a callback
// function.

//For each item in groupBy, callback's
//arguments will be (value, index, array).

// The value returned by the callback becomes the
// key for the original value in a new collection.

// i.e.
//
// [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
//      return (v%2 === 0) ? 'even' : 'odd'
// })
//
// //--> { odd: [1,3,5,7,9], even: [2,4,6,8,10] }
//
Array.prototype.groupBy = function(callback){
    var newGroups = {};
    for (var i = 0; i < this.length; i++) {
      var currentItem = this[i];
      var result = callback(currentItem, i, this);
      if (typeof newGroups[result] === 'undefined'){
        newGroups[result] = [currentItem];
      } else{
        newGroups[result].push(currentItem);
      }
  }
      return newGroups;
}

var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var letterTypes = letters.groupBy(function(v, i, arr){
  return (v === "A" || v === "E" || v === "I" || v=== "O" || v=== "U")? 'vowel' : 'consonant';
})
console.log (letterTypes);
var groups = [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
     return (v%2 === 0) ? 'even' : 'odd'
  // if (v%2 === 0){
  //   return 'even';
  // } else{
  //   return 'odd';
  // }
})

console.log(groups);
//--> { odd: [1,3,5,7,9], even: [2,4,6,8,10] }

var peeps = [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
    //  return (v%2 === 0) ? 'even' : 'odd'
  if ((v%3) === 0){
    return 'divisible3';
  } else if (v%2 === 0){
    return 'divisible2';
  } else{
    return 'indivisble';
  }
})

console.log(peeps);

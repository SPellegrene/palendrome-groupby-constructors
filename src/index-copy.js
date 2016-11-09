
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



var groups = [1,2,3,4,5,6,7,8,9,10].groupBy(function(v, i, arr){
     return (v%2 === 0) ? 'even' : 'odd'
})

console.log(groups);
//--> { odd: [1,3,5,7,9], even: [2,4,6,8,10] }

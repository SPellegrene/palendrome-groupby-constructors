// utility for logging
if(!log)
    var log = function(){ console.log([].slice.call(arguments)) }

var FILL_ME_IN

// predefined variables
var whatIsThis = function(a, b) {
    return [this, a, b].join(',')
}

var inAnObject = {
    name: 'inAnObject',
    test1: whatIsThis,
    anotherObject: {
        name: 'anotherObject',
        test2: whatIsThis
    }
}

var inAFunction = function(a, b) {
    this.name = 'Sally'
    whatIsThis(a, b)
}

inAFunction.prototype.test3 = whatIsThis

var trickyTricky = {
    name: 'trickyTricky',
    why: 'does this work?',
    what: 'is going on here?'
}

var confusing = {
    name: 'confusing',
    state: 'Alaska',
    city: 'Anchorage'
}

/**
 * THE PROBLEMS
 */
// console.log(newObject2.test3('C', 'D'));
console.assert(whatIsThis('hello', 'world') === "[object Window],hello,world")

//Beacuse 'this' is not defined it is a defaulted to the global object. Also a,b are representative of
//'hello world' and they are joined to the string with a comma seperating them.


console.assert(window.whatIsThis('hello', 'world') === "[object Window],hello,world")

//whatIsThis is defined as being within the global window.

console.assert(inAnObject.test1('face', 'book') === "[object Object],face,book")

// Becuase 'test1' is a child object within the parent object

console.assert(inAnObject.anotherObject.test2('twitter', 'book') === "[object Object],twitter,book")

// Becuase anotherObject is a child object within the parent object inAnObject

console.assert(whatIsThis.call() === '[object Window],,')

// whatIsThis is in the global scope as well as .call. Also, .call is not given any arguments, therefore
// it is simply two arguments.

console.assert(whatIsThis.call(trickyTricky) === '[object Object],,')

//the key of trickyTricky is the child object of trickyTricky, which is the parent property, and no
//arguments were passed through.

console.assert(whatIsThis.call(trickyTricky, 'nice', 'job') === '[object Object],nice,job')

// trickyTricky is an object within the parent object with the same name.

console.assert(whatIsThis.call(confusing) === '[object Object],,')

//

console.assert(whatIsThis.call(confusing, 'hello') === '[object Object],hello,')

// I get why it is object object, but not why there needs to be a comma after the hello

console.assert(whatIsThis.apply(trickyTricky) === '[object Object],,')

// whatIsThis returns an array and the definition of .apply is: an array of things to use as arguments

console.assert(whatIsThis.apply(confusing, ['nice', 'job']) === '[object Object],nice,job')

//takes the given array and places them within the confusing variable and seperates with comma.

// console.assert(whatIsThis.apply(confusing, 'nice', 'job') === FILL_ME_IN)
// error: CreateListFromArrayLike called on non-object(…)


console.assert(inAFunction('what will', 'happen?') === undefined)

//I think it is because this.name is hardcoded and equal to Sally. Therefore Sally
//is not entered and it becomes undefined.

// try{
//     console.assert(inAFunction.test3('A', 'B') === 'undefined')
// } catch(e){
//     log(e)
// }

// error: inAFunction.test3 is not a a function. ???

// var newObject = new inAFunction('what will', 'happen?')
// console.assert(newObject.name === ')
// // // Once you've figured out what the output is, answer here in a comment: Why is this so?
//
// var newObject2 = new inAFunction('what will', 'happen?')
// console.assert(newObject2.test3('C', 'D') === '[object Object],Sally')
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//
// console.assert(inAnObject.test1.call(trickyTricky, 'face', 'book') === FILL_ME_IN)
// // Once you've figured out what the output is, answer here in a comment: Why is this so?
//
// console.assert(inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']) === FILL_ME_IN)
// // Once you've figured out what the output is, answer here in a comment: Why is this so?

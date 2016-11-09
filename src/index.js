
// Write a function isPalindrome(x)
// that returns true if x is a palindrome,
// otherwise false.
//
// Palindromes are words that are the same
// going forwards and backwards. Examples:
//
// i
// dod
// meeteem
// TrickirT

function isPalindrome(str){
  var palindrome = {};

  for (var i = 0; i < str.length; i++) {
    var newWord = str[i].toLowerCase();
    if (newWord !== str[str.length - i - 1])
    return false;
  }
  return true;
}

console.log(isPalindrome('racecar'));

// tests

console.assert( isPalindrome("tacocat") === true )
console.assert( isPalindrome("Tacocat") === false )
console.assert( isPalindrome("racecar") === true )
console.assert( isPalindrome("cowboy") === false )

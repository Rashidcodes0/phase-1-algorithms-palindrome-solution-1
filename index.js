function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}






function isPalindrome(word) {
  // Write your algorithm here

  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}


/* 
  Add your pseudocode here
  1. Convert the input string to an array of characters
2. Initialize two pointers at the start and end of the array
3. While the pointers haven't crossed:
   . If the characters at the pointers don't match, return false
   . Move the pointers towards each other
4. Return true

*/

/*
  Add written explanation of your solution here
  The isPalindrome function determines whether a given string is a palindrome, It does this by:
  *Converting the input string to an array of characters.
  *Initializing two pointers, one at the start of the array and one at the end.
  *Iterating through the array, comparing the characters at the pointers and moving the pointers towards each other.
  *If any characters don't match, the function returns false.
  *If all characters match, the function returns true.



*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

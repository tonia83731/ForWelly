// Method 1
// eslint-disable-next-line no-unused-vars
function reverseString(str){
  return str.split('').reverse().join('')
}

// Method 2
// function reverseString2(str){
//   return str.split('').reduce((reversed, char) => char + reversed, '');
// }
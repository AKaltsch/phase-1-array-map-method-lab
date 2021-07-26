const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

// const titleCased = turorials.map(function (item) {
//   newArr = []
//   return item
//     .split(' ')
//     .map((word) => word[0].toUpperCase() + word.slice(1))
//     .join(' ');
//   newArr.push(item)


// })

// function titleCased() {
//   return tutorials.map(titleCase)
// }

// function titleCased() {
//   return tutorials.map(str => titleCase(str))
// }

// function titleCase(str) {
//   let strLowerCase = str;
//   let wordArr = strLowerCase.split(" ").map(function(currentValue) {
//       return currentValue[0].toUpperCase() + currentValue.substr(1);
//   });

//   return wordArr.join(" ");
// }

// console.log(titleCase('what is the difference between event capturing and bubbling?'))

// console.log(titleCased(tutorials))

// // function titleCases(item) {

// // }

// ------------------------------------------------------------------

function titleCased() {
  return tutorials.map(lines => {
    let words = lines.split(' ')
    let capWords = words.map(word =>{
      return word[0].toUpperCase() + word.slice(1)
    })
    let capString = capWords.join(' ')
    return capString
  })
}
titleCased()













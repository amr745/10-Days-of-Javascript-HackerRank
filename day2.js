//Conditional Statements: If-Else

// function getGrade(score) {
//     let grade;
//     if (25 < score && score <= 30) {
//          grade = "A"
//     } else if (20 < score && score <= 25) {
//          grade = "B"
//     } else if (15 < score && score <= 20) {
//          grade = "C"
//     } else if (10 < score && score <= 15) {
//          grade = "D"
//     } else if (5 < score && score <= 10) {
//          grade = "E"
//     } else if (0 <= score && score <= 5) {
//          grade = "F"
//     }
    
//     return grade;
// }

// console.log(getGrade(20))

//Conditional Statements: Switch

// function getLetter(s) {
//     let letter;
//     switch (true) {
//         case "aeiou".includes(Array.from(s)[0]):
//             letter = "A";
//           break;
//          case "bcdfg".includes(Array.from(s)[0]):
//              letter = "B";
//            break;
//         case "hjklm".includes(Array.from(s)[0]):
//             letter = "C";
//           break;
//         case "npqrstvwxyz".includes(Array.from(s)[0]):
//             letter = "D";
//       }
    
//       return letter;
// }

// console.log(getLetter("nope"))

//Loops

function vowelsAndConsonants(s) {
    for (let i = 0; i < s.length; i++) {
        if ("aeiou".includes(Array.from(s)[i])) {
            console.log((s)[i])
        }
    }

    for (let i = 0; i < s.length; i++) {
        if ("bcdfghjklmnpqrstvwxyz".includes(Array.from(s)[i])) {
            console.log((s)[i])
        }
    }
}
vowelsAndConsonants("javascriptloops")
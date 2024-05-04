// Makes it shorter to write the code
// Another one is the use of "this" keyword. Which we will see in the later classes

let userName = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
      'Name is ' +
      userName +
      ', age is ' +
      userAge +
      ' and the user has hobbies: ' +
      userHasHobby
    );
  }


  // If function only wants to return the value
  const add = (a, b) => a + b

  console.log(add(3,2));
  console.log(summarizeUser(userName, age, hasHobbies));
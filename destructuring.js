const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  }
};

// This is a way to do it
const printName = (person) => {
  console.log(person.name)
}


// But here is the destructuring in JS

// const printName = ({ name }) => {
//   console.log(name);
// };

printName(person);

// const { name, age } = person;
// console.log(name, age);

// const hobbies = ['Sports', 'Cooking'];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);


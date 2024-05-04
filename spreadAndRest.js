const person = {
    name: 'Max',
    age: 29,
    greet() {
      console.log('Hi, I am ' + this.name);
    }
  };
  
  const copiedPerson = { ...person };
  console.log(copiedPerson);
  
  const hobbies = ['Sports', 'Cooking'];
  // copiedHobbies = ['sports', 'Cooking']
  // LOOKS LIKE THE COPYING. 
  // const copiedHobbies = [hobbies];
  // console.log('This is copiedHobbies',copiedHobbies)

  const copiedArray = [...hobbies];
  console.log(copiedArray);
  


  // HERE the arguments are fixed and cannot be dynamic.
  const toArray1 = (arg1, arg2, arg3, arg4) => {
    return [arg1, arg2, arg3, arg4];
  };

  console.log(toArray(1, 2, 3, 4));

  // REST OPERATOR.
  const toArray = (...args) => {
    return args;
  };
  
  console.log(toArray(1, 2, 3, 4));

  // * IF WE ARE USING TO PULL THE VALUES FROM THE ARRAY THEN IT IS THE SPREAD OPERATOR.
  // * ELSE IF WE ARE USING TO PUSH THE VALUES INTO THE ARRAY THEN IT IS THE REST OPERATOR.

  // * NOTE: IT WORKS ON BOTH ARRAY AND OBJECTS.
const fetchData = (statement) => {

  // Promise is an object that may produce a value in the future. It provides a way of asynchronously returning a value
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(statement);
    }, 1500);
  });
  return promise;
};


// This is the async function. Which is a function that returns a value in the future and does not blocks the code execution 




setTimeout(() => {
  console.log('Timer is done!');

  // Then is called on the promise
  fetchData('Done 1')
    .then(text => {
      console.log(text);
      return fetchData('Done 2');
    })
    .then(text2 => {
      console.log(text2);
    });
}, 2000);

// There is also a way to do it using async/await. Which we will see in the later classes. 

// This is synchronous code because it happens in the same time. It does not blocks the code execution
console.log(`Hello!`);
console.log('Hi!');

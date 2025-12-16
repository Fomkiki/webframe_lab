//Asynchronous - 1

/*const fs = require('fs');
console.log("Start reading file...");
// Read the file using a callback
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:", data);
});
console.log("File read request sent...");*/



//Synchronous - 2

/*const fs = require('fs').promises;
async function readFileExample() {
  console.log("Start reading file...");
  try {
    	const data = await fs.readFile('example.txt', 'utf8');
    	console.log("File contents:", data);
  } catch (err) {
    	console.error("Error reading file:", err);
  }
  	console.log("File read completed");
}
readFileExample();

*/

// use Promise - 3

function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 finished");
    }, 20);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 finished");
    }, 10);
  });
}

Promise.all([task1(), task2()])
  .then((results) => {
    console.log("All tasks completed");
    console.log(results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

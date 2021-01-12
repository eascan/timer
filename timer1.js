// turning user input in node into an array 
const array = process.argv.slice(2);

// sorting ascending, making sure sorting numerically
const arraySorted = array.sort((a, b) => (a - b));



const timer = numbers => {
  
  // if array is empty, function should stop
  if (numbers === []) {
    return;
  }
  
  for (const num of numbers) {
    // if input is a negative number, we skip it
    // input is not a number, skip it
    
    if (Number(num) > 0 && Number(num) !== NaN) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(num) * 1000);
    } else {
      continue;
    }
  }
}

timer(arraySorted);

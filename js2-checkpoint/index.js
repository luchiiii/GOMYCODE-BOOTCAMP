//String Manipulation function

//function that reverses a given string.

const name = (str) => str.split("").reverse().join("");

//function that counts the number of characters in a string.

const numOfChar = (str) => str.split("").filter((char) => char !== "").length;

//a function that capitalizes the first letter of each word in a sentence.
const capitalise = (str) => str[0].toUpperCase() + str.slice(1);

//SECTION 2 -ARRAY FUNCTIONS
//functions to find the maximum and minimum values in an array of numbers.

function setMini(A) {
  let mini = Infinity;
  for (let i = 0; i < A.length; i++) {
    if (A[i] < mini) {
      mini = A[i];
    }
  }
  return mini;
}

function setMaxi(A) {
  let maxi = -Infinity;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > maxi) {
      maxi = A[i];
    }
  }
  return maxi;
}

//function that calculates the sum of all elements in an array.

const sumArrays = function (nums) {
  let sum = 0;
  for (let i = 0; i <= nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

//function that filters out elements from an array based on a given condition.
const arrFilter = (arr) =>
  arr.filter(function (num) {
    return num > 8;
  });

//SECTION 3- MATHEMATICAL FUNCTIONS
//Write a function to calculate the factorial of a given number.
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

//Create a function to check if a number is prime or not.
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

//function to generate the Fibonacci sequence up to a given number of terms.
function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

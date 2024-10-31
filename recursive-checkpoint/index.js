//Ticket Pricing
function ticket(age) {
  if (age <= 12) {
    return "$10";
  } else if (age <= 17) {
    return "$15";
  } else {
    return "$20";
  }
}

//leap year
function leapYear(year) {
  return year % 4 === 0 ? "Leap Year" : "Not a Leap Year";
}

//Section 2
//palindrome
function isPalindrome(word) {
  //Base case: if the word is empty or has one character, it is a palindrome
  if (word.length <= 1) {
    return true;
  }

  // Check if the first and last characters are the same
  if (word[0].toLowerCase() !== word[word.length - 1].toLowerCase()) {
    return false;
  }

  //Recursively check the substring excluding the first and last characters
  return isPalindrome(word.slice(1, word.length - 1));
}

//Fibonacci
function fibonacci(n) {
  // Handle negative input
  if (n < 0) {
    throw new Error("n must be non-negative");
  }

  // Base cases
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  // Recursive case: calculate sum of (n-1)th and (n-2)th Fibonacci numbers
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Print the first 10 Fibonacci numbers
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}

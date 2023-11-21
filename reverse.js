// let str = "oddfo";
// let isPalindrome = true; // Assume it's a palindrome by default

// for (let i = 0; i < Math.floor(str.length / 2); i++) {
//   if (str[i] !== str[str.length - 1 - i]) {
//     isPalindrome = false; // If a non-matching pair is found, mark it as not a palindrome
//     break; // Exit the loop early
//   }
// }

// if (isPalindrome) {
//   console.log("It's a palindrome");
// } else {
//   console.log("Not a palindrome");
// }
let str = 'carens';
let i = 0;
let j = str.length - 1;

while (i < j) {
    if (str[i] == str[j]) {
        i++;
        j--;
    } else {
        console.log("Not palindrome");
        break; // Exit the loop if a mismatch is found
    }
}

if (i >= j) {
    console.log("Palindrome");
}

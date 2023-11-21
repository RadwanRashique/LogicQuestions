function Input(array) {
    let Vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let isVowel = false; // Initialize a flag for the current letter

        for (let j = 0; j < Vowels.length; j++) {
            if (array[i] === Vowels[j]) {
                isVowel = true; // If the letter is a vowel, set the flag to true
                break; // No need to continue checking for other vowels
            }
        }

        result.push(isVowel ? 1 : 0); // Push 1 if it's a vowel, otherwise push 0
    }

    console.log(result);
}

const array = ['e', 'a', 'g', 'h', 'i', 'o'];

Input(array);




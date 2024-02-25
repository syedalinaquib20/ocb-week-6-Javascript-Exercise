// get list of all 5 letter words
const allWords = require('./words');

// has these letters
const hasLetters = ['e','s','i']; 

// must not has these letters
const mustNotHaveLetters = ['r', 'a','d','y','b','l','u','v'];

// must have selected letters in these positions
const mustHaveLettersInPosition = ['s','p','i',,'e']

// not in these positions
const mustNotHaveLettersInPosition = [,'e',,'c','s']

const filterWords = (words, hasLetters, mustNotHaveLetters, mustHaveLettersInPosition, mustNotHaveLettersInPosition) => {
    return words.filter(word => {
        // Check for presence of required letters 
        if(!hasLetters.every(letter => word.includes(letter))) return false; 

        // Check for absence of forbidden letters
        if (!mustNotHaveLetters.every(letter => !word.includes(letter))) return false;

        // Check for letters in specified positions
        for (let i=0; i<mustHaveLettersInPosition.length; i++) {
            if (mustHaveLettersInPosition[i] !== undefined && word[i] !== mustHaveLettersInPosition[i]) return false;
        }

        // Check for letters not in specified positions
        for (let i=0; i<mustNotHaveLettersInPosition; i++) {
            if (mustNotHaveLettersInPosition[i] !== undefined && word[i] === mustNotHaveLettersInPosition[i]) return false;
        }

        // If all checks passed
        return true;
    });
};

const filteredWords = filterWords(allWords, hasLetters, mustNotHaveLetters, mustHaveLettersInPosition, mustNotHaveLettersInPosition);
console.log(filteredWords);
console.log('Possible words:', filteredWords.length);

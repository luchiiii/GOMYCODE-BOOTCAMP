const numOfChar = (str) => str.split("").filter((char) => char !== " ").length;

//number of words in a sentence

const numSentence = (sent) => sent.split(" ").filter((char) => char !== "").length;

//number of vowels in a sentence
const numsOfVowels = function (sentence){
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for(let i = 0; i < sentence.length; i++){
        if(vowels.includes(sentence[i].toLowerCase())){
            count ++;
        }
    }
    return count;
}





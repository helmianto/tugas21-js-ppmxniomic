const word = "Saya belajar masak nasi goreng";

function replace(words, wordToReplace, newWord){
    console.log(words.replace(wordToReplace, newWord));
}

console.log(word);
replace(word, 'masak', 'makan');
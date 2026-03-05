const palindromes = function (sentence) {

    sentence = sentence.toLowerCase().replaceAll(" ", "").replaceAll(".", "").replaceAll(",", "").replaceAll("!", "").replaceAll("?", "");

    backwardSentence  = sentence.split("").reverse().join("");

    return backwardSentence === sentence;
};

// Do not edit below this line
module.exports = palindromes;

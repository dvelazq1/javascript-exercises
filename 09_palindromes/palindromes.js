const palindromes = function (text) {
    text = text.replaceAll(" ", "");
    const regex = /[$-/:-?{-~!"^_`\[\]]/g
    text = text.replaceAll(regex, "");
    text = text.toLowerCase();
    originalText = text;
    originalText = originalText.toLowerCase();
    text = text.split("").reverse().join("");
    if (text === originalText){
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

//global variables
    //all possible characters
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeral = "0123456789";
    var symbol = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    //length contents and passwordText
    var length = "";
    var contents = "";
    var passwordText = "";

//links generate button in HTML to JS
    var generateBtn = document.querySelector("#generate");

//functions to prompt length and included symbols

function lengthPrompt() {
    length = Number(window.prompt("Password length (8-128 characters)?", "8"));
    if ((length < 8 || length > 128 ) || isNaN(length)){
        window.alert("Please choose a valid length, between 8 and 128 characters")
        lengthPrompt();
    }
    
    return length;
};

function contentsPrompt() {
    var incAlpha = window.confirm("Would you like lower-case lettters in your password?");
    var incCap = window.confirm("Would you like capital letters in your password?");
    var incNum = window.confirm("Would you like numbers in your password?");
    var incSym = window.confirm("Would you like symbols in your password?");
    incAlpha ? (contents += alpha) : "";
    incCap ? (contents += cap) : ""; 
    incNum ? (contents += numeral) : "";
    incSym ? (contents += symbol) : "";
    if (!incAlpha && !incCap && !incNum && !incSym) {
        window.alert("Please select at least one type of character to include")
        contentsPrompt();
    }
    return contents;
};

//function to write password
function writePassword() {
    for (let i = 0; i < length; i++) {
        passwordText += contents.charAt(Math.floor(Math.random() * contents.length)
        );
    }
    return passwordText;
};

//do all the things function which is attached to button
function generatePassword() {
    passwordText = "";
    contents = "";
    lengthPrompt();
    contentsPrompt();
    writePassword();
    //puts passwordText into the HTML text box
    document.getElementById("password").innerHTML = passwordText;
    return passwordText;
};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


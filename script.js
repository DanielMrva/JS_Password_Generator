//global variables
    //all possible characters
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeral = "0123456789";
    var symbol = "!#$%&'()*+,-./:;<=>?@^_`{}~";
    //length contents and passwordText
    var incAlpha = "";
    var incCap = "";
    var incNum = "";
    var incSym = "";
    var length = "";
    var contents = "";
    var passwordText = "";
    

//links generate button in HTML to JS
    var generateBtn = document.querySelector("#generate");

//functions to prompt length and included symbols

function lengthPrompt() {
    length = Number(window.prompt("Password length (8-128 characters)?", "8"));
    if ((length < 8 || length > 128 ) || isNaN(length) || !Number.isInteger(length)) {
        window.alert("Please choose a valid length, between 8 and 128 characters")
        lengthPrompt();
    }
    
    return length;
};

function contentsPrompt() {
    incAlpha = window.confirm("Would you like lower-case lettters in your password?");
    incCap = window.confirm("Would you like capital letters in your password?");
    incNum = window.confirm("Would you like numbers in your password?");
    incSym = window.confirm("Would you like symbols in your password?");
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

function checkPassword () {
    if ((incAlpha && !/(?=.*?[a-z])/.test(passwordText)) || (incCap && !/(?=.*?[A-Z])/.test(passwordText)) || (incNum && !/[0-9]/.test(passwordText)) || (incSym && !/(?=.[!#$%&'()*+,-./:;<=>?@^_`{}~])/.test(passwordText))) {
        window.alert("You lost the password lottery and did not receive a requested character")
        generatePassword();
    }
    return;    
}

//do all the things function which is attached to button
function generatePassword() {
    passwordText = "";
    contents = "";
    lengthPrompt();
    contentsPrompt();
    writePassword();
    checkPassword();
    //puts passwordText into the HTML text box
    document.getElementById("password").innerHTML = passwordText;
    return passwordText;
};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

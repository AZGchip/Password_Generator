// strings and password
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "12345678901234567890123456";
var special = "!@#$%^&*()_+=<>?/!@#$%^&*(";
var masterString = "";
var password = "";
var goodPass = 0
//user input values
var dig = 64
var low = 0
var upp = 0
var num = 0
var spe = 0
var inputBox = document.getElementById("textInput")


//User checkbox input functions
function checkLow(checkbox) {
    if (checkbox.checked) {
        low = 1;
    }
    else { low = 0 }
}
function checkUpp(checkbox) {
    if (checkbox.checked) {
        upp = 1;
    }
    else { upp = 0 }
}
function checkNum(checkbox) {
    if (checkbox.checked) {
        num = 1;
    }
    else { num = 0 }
}
function checkSpe(checkbox) {
    if (checkbox.checked) {
        spe = 1;
    }
    else { spe = 0 }
}
// updates slider and DIG
function updateInput(val) {
    document.getElementById("textInput").value = val;
    dig = parseInt(val)
}

function updateSlider(valu){
    document.getElementById("slider").value = valu;
}
var show = document.getElementById("passbox")
document.getElementById("passbut").addEventListener("click",ShowGenerator)
function ShowGenerator(){
    show.setAttribute("style","display:block;");
    
}
// to clipboard
function clipB(){
 var copyclip = document.getElementById("passwordholder");
 copyclip.select();
 copyclip.setSelectionRange(0, 130);
 document.execCommand("copy");
}

function passwordGen() {
    var total = low + upp + num + spe
    goodPass = 0;
    while (goodPass === 0) {
        password = "";
        masterString = "";
        // string combiner
        if (low === 1) {
            masterString += lower;
        }
        if (upp === 1) {
            masterString += upper;
        }
        if (num === 1) {
            masterString += number;
        }
        if (spe === 1) {
            masterString += special;
        }
        if (total === 0) {
            document.getElementById("passwordholder").value = "Please select at least one box";
            return "no password";
        }
        //while loop selects one random character from MASTERSTRING and adds it to PASSWORD. Loop stops when PASSWORD string length = DIG
        while (password.length < dig) {
            password += masterString[Math.floor(Math.random() * masterString.length)]
        }
        //check if contains at least one of each selected characters.
        if (inPassword(lower) + inPassword(upper) + inPassword(number) + inPassword(special) === total) {
            document.getElementById("passwordholder").value = password;
            goodPass++;
        }
        else {
            console.log("password does not include all requested. looping");
        }
    }
}

function inPassword(string) {
    for (var i = 0; i < string.length; i++) {
        var contain = password.includes(string[i])
        if (contain) {
            return 1;
        }
    }
    return 0;
}







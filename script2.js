// strings and password
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "12345678901234567890123456";
var special = "!@#$%^&*()_+=<>?/!@#$%^&*(";
var masterString = "";
var password = "";
var goodPass = 0
//user input values
var dig = 8
var low = 1
var upp = 1
var num = 1
var spe = 0
var total = low + upp + num + spe
function passwordGen(){
// string combiner
if (low === 1) {
    masterString += lower
}
if (upp === 1) {
    masterString += upper
}
if (num === 1) {
    masterString += number
}
if (spe === 1) {
    masterString += special
}
//while loop selects one random character from MASTERSTRING and adds it to PASSWORD. Loop stops when PASSWORD string length = DIG
while (password.length < dig) {
    password += masterString[Math.floor(Math.random() * masterString.length)]
}
//check if contains
if ( inPassword(lower) + inPassword(upper) + inPassword(number) + inPassword(special) === total ) {
    console.log(password)
}


function inPassword(string) {
    for (var i = 0; i < string.length; i++) {
        var contain = password.includes(string[i])
        if (contain) {
            i = string.length;
            return 1
        }


    }
}

}





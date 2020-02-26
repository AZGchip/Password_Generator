// strings and password
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var special = "!@#$%^&*()_+=<>?/";
var masterString = "";
var password = "";
var goodPass = 0
//user input values
var dig = 8
var low = 1
var upp = 0
var num = 1
var spe = 0

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
//while loop 
while (password.length < dig) {
    password += masterString[Math.floor(Math.random() * masterString.length)]
}
//check if contains
if (low === 1) {
    
}
function inPassword() {
    for (var i = 0; i < lower.length; i++) {
        var contain = password.includes(lower[i])
        if (contain) {
            i = lower.length;
        }
        if (!contain && i === lower.length){
            goodPass++
        }
    }
}
    

console.log(password)



// 8 - 128 character selector
function updateInput(val) {
    document.getElementById("textInput").value = val;
}
// the scrambler
var digt = 1

var low = true
var upp = false
var num = false
var spe = false
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "x", "t", "u", "v", "w", "x", "y", "z"]
var numbr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specl = ["!", "@", "#", "$", "%", "^", "&", "*", "="]
var rand = [0, 1, 2, 3]
var select
var confirmSelect = 0
// main loop
for (var digt; digt > 0; digt--) {
    // selects randomly from RAND. sets CONFIRMSELECT to 1
    confirmSelect++
    for (var confirmSelect; confirmSelect > 0; confirmSelect--) {

        var select = rand[Math.floor((Math.random() * rand.length))];
        console.log(select);

        if (select === 0 && low == true || select === 1 && upp == true || select === 2 && num == true || select === 3 && spe == true) {
           
            console.log("true")
        }
        else {
            console.log("negative")
            confirmSelect++
        }
    }

}
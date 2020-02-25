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
var birand = [0, 1]
var bi
var select
var confirmSelect = 0
var selitem
// main loop
for (var digt; digt > 0; digt--) {
    // selects randomly from RAND. sets CONFIRMSELECT to 1
    confirmSelect++
    for (var confirmSelect; confirmSelect > 0; confirmSelect--) {

        var select = rand[Math.floor((Math.random() * rand.length))];
        console.log(select);
        // somewhat inefficient user input vs array selection verification. (seems better than listing 16 possibility arrays ¯\_(ツ)_/¯ )
        if (select === 0 && low == true || select === 1 && upp == true || select === 2 && num == true || select === 3 && spe == true) {

            console.log("true")
        }
        else {
            console.log("negative")
            confirmSelect++
        }
    }
    // if SELECT is 0 or 1, randomly selects letter and randomly decides if its uppercase if both are selected
    if (select === 0 && low == true || select === 1 && upp == true) {
        var selitem = alpha[Math.floor((Math.random() * alpha.length))];
        if (upp == true && low == true) {
            var bi = birand[Math.floor((Math.random() * birand.length))];
            if (bi === 1) {
                var selitem = selitem.toLocaleUpperCase();
                console.log("upper")
            }
        }
        else if (select === 1 && low == false) {
            var selitem = selitem.toLocaleUpperCase();

        }
        else {

        }
    }
    else if (select === 2 && num == true) {
        var selitem = numbr[Math.floor((Math.random() * numbr.length))];
    }
    else if (select === 3 && spe == true) {
        var selitem = specl[Math.floor((Math.random() * specl.length))];
    }




}
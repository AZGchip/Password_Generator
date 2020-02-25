// 8 - 128 character selector
function updateInput(val) {
    document.getElementById("textInput").value = val;
}
// character amount and type boolians
var digt = 124;
var low = false;
var upp = false;
var num = false;
var spe = false;
// character arrays
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "x", "t", "u", "v", "w", "x", "y", "z"];
var numbr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specl = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "+"];
var rand = [0, 1, 2, 3];
var birand = [0, 1];
var bi;
var select;
var confirmSelect = 0;
var selitem;
var password = "";

// main loop
for (var digt; digt > 0; digt--) {
    // selects randomly from RAND. sets CONFIRMSELECT to 1
    confirmSelect++
    for (var confirmSelect; confirmSelect > 0; confirmSelect--) {
        var select = rand[Math.floor((Math.random() * rand.length))];
        // somewhat inefficient user input vs random array selection verification. (seems better than listing 16 possibility arrays ¯\_(ツ)_/¯ )
        if (select === 0 && low == true || select === 1 && upp == true || select === 2 && num == true || select === 3 && spe == true) {
        }
        // fail-safe loop stop if all boolians false
        else if (low == false && upp == false && num == false && spe == false) {
            confirmSelect = 0;
            digt = 0;
            selitem = "";
            password = "Please check at least one box.";
        }
        else {
            confirmSelect++
        }
    }
    // if SELECT is 0 or 1, randomly selects letter 
    if (select === 0 && low == true || select === 1 && upp == true) {
        var selitem = alpha[Math.floor((Math.random() * alpha.length))];
        // if upper and lower are true, randomly selects upper or lower
        if (upp == true && low == true) {
            var bi = birand[Math.floor((Math.random() * birand.length))];
            if (bi === 1) {
                selitem = selitem.toLocaleUpperCase();
            }
        }
        // if only upper is true, changes SELITEM to uppercase
        else if (select === 1 && low == false) {
            selitem = selitem.toLocaleUpperCase();
        }
        // if lower is the only selection do nothing to SELITEM   
    }
    else if (select === 2 && num == true) {
        var selitem = numbr[Math.floor((Math.random() * numbr.length))];
    }
    else if (select === 3 && spe == true) {
        var selitem = specl[Math.floor((Math.random() * specl.length))];
    }
    // adds SELITEM to PASSWORD string
    password += selitem;
}
console.log(password);
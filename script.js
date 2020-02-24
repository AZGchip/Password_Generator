// 8 - 128 character selector
function updateInput(val) {
    document.getElementById("textInput").value = val;
}
// the scrambler
var digt = 8
var low = true
var upp = false
var num = false
var spe = false
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","x","t","u","v","w","x","y","z"]
var numbr = ["1","2","3","4","5","6","7","8","9"]
var specl = ["!","@","#","$","%","^","&","*","="]
// main loop
for (var digt; digt < 0; digt--){


    get_random = function (list) {
        return list[Math.floor((Math.random()*list.length))];
      } 
    
}
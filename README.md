This repo creates a password one character at a time from a loop. the generated characters are added to the string "password" until the specified password length is met.
script.js is unused in the final draft in favor of script2.js, a simplified and less inefficient way of generating the password string.
script2.js is not without its flaws though. script2.js adds strings together based on input and draws a character randomly from the "master string".
this works best if all strings connected are equal in length, as it makes the probability equal in the random draw.
unfortunatly the characters from each string are not equal in length, making probability favor the longer strings.
I lessened the impact of this by repeating the string's contents until it matched the longer strings. doing this did however increase the 
probablity of some characters that were repeated more than others in their string.

script.js did remove the probability bias by randomly selecting arrays to be used, but became increasingly ineffcient the less character arrays were selected.
as it would randomly select an array even if it was not selected by the user. it would then try again until it picked a valid array.

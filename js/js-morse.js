
// ╚(•⌂•)╝ //

var userInput = prompt("Please enter a message you'd like translated");

var arrInput = userInput.toLowerCase().split("");;

var output = "";

function translation () {


	var alphabet = {
    	'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
    	'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
    	'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
    	'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
    	'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
    	'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
    	'y': '-.--',  'z': '--..',  ' ': '/',
    	'1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    	'5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    	'9': '----.', '0': '-----', 
	}


	for (var i=0; i<arrInput.length; i++) {
		output += alphabet[arrInput[i]];
	}

}		



	translation();
	
	document.getElementById('result').innerHTML = output;





/*
Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
Example

//input "hello world!"
//output
"!dlrow olleh"
*/

function balikString(input) {
  var output = ""
  for (var i = input.length-1; i >= 0; i--) {
    output = output + input[i]
  } return console.log(output);
}

balikString("Hello World!")

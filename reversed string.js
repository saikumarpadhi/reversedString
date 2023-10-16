var string = "This is a sunny day";

//reverse string
var reverseallstrings = reverseWord(string,"");
console.log(reverseallstrings);

var output = reverseWord(reverseallstrings," ");
console.log(output);

function reverseWord(string,separator){
  return string.split(separator).reverse().join(separator);
}
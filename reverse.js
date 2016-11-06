

var input = process.argv.slice(2)


function reverse(word) {
  var results = "";
  for (var i = word.length - 1; i >= 0; i -= 1){
    results += word[i];
  }
  return results;
}

function reverseAndPrintWord(word){
  var reversed = reverse(word);
  console.log(reversed);
}

input.forEach(reverseAndPrintWord);
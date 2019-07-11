var input = "5555+-";
var total = 0;
var numberStack = [];
for (var i = 0; i < input.length; i++) {
  if (isNaN(parseInt(input[i]))) {
    updateTotal(input[i], total);
  } else {
    numberStack.push(parseInt(input[i]));
  }
}

function updateTotal(operator) {
  var int1 = numberStack.pop();
  var int2 = numberStack.pop();
  switch (operator) {
    case "+":
      total = total + (int1 + int2);
      break;

    case "-":
      total = total - (int1 + int2);
      break;
  }
}

console.log(total);

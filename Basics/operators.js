function calc(x, y, opr) {
  switch (opr) {
    case "+":
      console.log(x + y);
      break;
    case "-":
      console.log(x - y);
      break;
    case "*":
      console.log(x * y);
      break;
    case "/":
      console.log(x / y);
      break;
    case "%":
      console.log(x % y);
      break;
    case "--":
      console.log(x--);
      break;
    case "++":
      console.log(x++);
      break;
    case "**":
      console.log(x ** y);
      break;
    case "==":
      console.log(x == y);
      break;
    case "===":
      console.log(x === y);
      break;
    case "!==":
      console.log(x !== y);
      break;
    case "&&":
      console.log(x < 6 && y > 6);
      break;
    case "||":
      console.log(x < 6 || y > 6);
      break;
    case "!":
      console.log(!(x < 6));
      break;
  }
}

calc(5, 3, "-");

const num = parseInt(123.234);
const char = parseInt("A");
const num1 = Number(123);
console.log(num + " " + isNaN(char) + " " + num1);
function evalExample() {
  const expression = "2+3*4";
  const result = eval(expression);
  console.log(result);
}
evalExample();
const url = "https://www.google .com";
const encodeurl = encodeURI(url);
console.log(encodeurl);

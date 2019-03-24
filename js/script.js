var side1 = parseFloat(prompt("enter 1st number"));
var side2 = parseFloat(prompt("enter 2nd number"));
var side3 = parseFloat(prompt("enter 3rd number"));

 var pass = function (a, b, c){

return a+b>c && b+c>a && c+a>b
 }
 if (pass(side1,side2,side3)&& side1==side2 && side2==side3){
 alert("equilateral triangle")
 }
 else if(pass(side1,side2,side3) && side1===side2 || side2===side3 || side1===side3){
 alert("isoceles triangle")
 }
 else if (pass(side1,side2,side3) && side1!=side2!=side3){
 alert ("scalene triangle")
 } else {
  alert("NO TRIANGLE")
}

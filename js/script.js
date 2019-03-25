function check(a,b,c){
  if (a+b>c && c+b>a && a+c>b && a==b && b==c)
    alert("equilateral triangle")
 else if (a+b>c && c+b>a && a+c>b && a==b || b==c ||a==c)
   alert("Isosceles triangle")
 else if (a+b>c && c+b>a && a+c>b && a!=b!=c)
  alert("Scalene Triangle")
   else
  alert("NO TRIANGLE")   


}

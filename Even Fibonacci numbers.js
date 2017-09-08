function fibo2(num, s1, s2, sum0){
  var sum = sum0;
  var sb = s2;
  s2+=s1;
  s1=sb;
  if(s2<num){
    if (s2 % 2 === 0){
      //console.log("yes!")
      sum+=s2;
    }
    //console.log("s2= "+ s2);
    //console.log("sum= "+ sum);
    return fibo2(num, s1, s2, sum);
  } else {
      return sum;
  }
}
//fibo(10, 1, 2);

function t(number){
  var total = 0;
  for (var i = number - 1; i > 0; i--){
    if (i % 3 == 0 || i % 5 == 0){
    console.log(i);
    total = total + i;
    }
  }
  return total;
}
//t(1000)

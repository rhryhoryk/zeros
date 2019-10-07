module.exports = function zeros(expression) {
  var arr = expression.split('*');
  var five = 0;
  // var two = 0;

  var result = 0;

  for (var i = 0; i < arr.length; i++) {

    var arrF = [];
    if (arr[i].includes('!!')) {
      if(parseInt(arr[i]) % 2 === 0) {
        for (var n = 2; n <= parseInt(arr[i]); n +=2) {
          arrF.push(n);};
      } 
      else {
        for (var n = 1; n <= parseInt(arr[i]); n +=2) {
          arrF.push(n);};
      }
    } 
    else {
      for (var n = 1; n <= parseInt(arr[i]); n++) {
        arrF.push(n);
      }
    };
    

    for (var j = 0; j < arrF.length; j++) {
      var n5 = arrF[j]
      if (n5 % 25 === 0 ) {
        five += 2
      } else if (n5 % 5 === 0) {
          five++
          n5 /= 5;
      } 
    }

    // console.log('result '+result);
    // console.log('five '+five);
    // console.log('two '+two);
    // console.log(arrFuck)
  }

  result += five;
  // result += two;
  return result;
}

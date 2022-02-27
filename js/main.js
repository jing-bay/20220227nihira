//問題１
const array = [2, 4, 7, 5, 4, 3, 8];

const new_array = array.filter(function(val, i, array){
	return (array.indexOf(val) === i);
});

console.log(new_array); 

//問題２
function LeapYear(year){
  if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let checkYear = 2020;
if(LeapYear(checkYear)){
  console.log(checkYear + '年はうるう年です');
}else{
  console.log(checkYear + '年はうるう年ではありません');
}
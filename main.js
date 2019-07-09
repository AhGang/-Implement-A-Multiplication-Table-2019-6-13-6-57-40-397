'use strict';

function compareNumbers(start,end){
  if(start > end){
    return false;
  }else{
    return true;
  }
}
function isInTheRange(start,end){
  if( start <= 0 || start > 1000 || end <= 0 || end > 1000){
    return false;
  }else{
  return true;
  }
}
function createMultiplyTable(start,end){
  var result = '';
  let isCompareCorrect = compareNumbers(start,end)
  let isNumbersInTheRange = isInTheRange(start,end)
  if( !isCompareCorrect || !isNumbersInTheRange){
    return null;
  }else{
   
   for(let i = start;  i <= end; i++){
     for(let j =  start; j <= i;j++){
      result=result.concat(j + '*' + i + '=' + (i*j) + '  ');
      
     }
     if(i <end){
       result = result.concat('\n');
     }
   }
   return result;
 }
}
module.exports = createMultiplyTable;

'use strict';


function getMultiplicationString(start,end){
  var result = '';
 if(start > end || start < 0 || start > 1000 || end < 0 || end > 1000){
    return null;
 }else{
   
   for(let i = start;  i <= end; i++){
     for(let j =  start; j <= i;j++){
      result=result.concat(i + '*' + j + '=' + (i*j) + '  ');
      
     }
     result = result.concat(' \n');
   }
   return result;
 }
}
console.log(getMultiplicationString(2,4));

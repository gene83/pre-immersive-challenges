module.exports = function reverseMessage(str) {
  /*  string lowercase
   string.split 
   reverse array
   loop through and capitalize
   join array
   */

   let lowStr = str.toLowerCase();
   let lowArr = lowStr.split('');
   lowArr.reverse();

   for (let i = 0; i < lowArr.length; i++){
     if ((lowArr[i-1] === ' ' || i === 0) && 
     'abcdefghijklmnopqrstuvwxyz'.includes(lowArr[i])) {
      let capLetter = lowArr[i].toUpperCase();
      lowArr.splice(i, 1, capLetter);
     }
   }

  return lowArr.join('');
}

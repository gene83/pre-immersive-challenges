module.exports = function evenLadderPattern(num) {
  let ladder = ''
  if (num === 0 || num === 1 || Math.sign(num) === -1) {
    return ''
  } else if( num%2 === 0) {
    for (let i = 2; i <= num; i += 2) {
      for (let j = 0; j < i; j++) {
        ladder += i;
      }
      if( i < num ) {
        ladder += '\n';
      } 
    }
  } else if( num%2 === 1) {
    let highestEven = num - 1
    for (let i = 2; i <= highestEven; i += 2) {
      for (let j = 0; j < i; j++) {
        ladder += i;
      }
      if( i < highestEven ) {
        ladder += '\n';
      }
    } 
  } else {
    return 'Not an Integer';
  }
  return ladder;
}
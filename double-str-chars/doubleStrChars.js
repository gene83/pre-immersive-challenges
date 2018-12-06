module.exports = function doubleStrChars(str) {
    let doubleStr = '';
    if (typeof str === 'string') {
        let array = str.split('');
        for (let i = 0; i < array.length; i++) {
        let currentChar = array[i];
         doubleStr += (currentChar + currentChar)
        }
    } else {
     return "not a string!"
     }
     return doubleStr
}

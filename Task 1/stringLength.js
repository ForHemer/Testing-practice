function stringLength(str) {
    if ((typeof str === 'undefined') || (str === null)) {
        return "String undefined";    
    }
      
    if (str.length === 0) {
        return 'String is empty';
    }
    
    if (str.length > 10) {
        return 'String length is to long';
    }

    return str.length;
}

module.exports = stringLength;
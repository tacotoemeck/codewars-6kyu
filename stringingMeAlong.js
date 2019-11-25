function createMessage(str) {
    return function (newStr) {

        if (newStr == undefined) {
            return str;

        }
        return createMessage(str + ' ' + newStr);
    }

}
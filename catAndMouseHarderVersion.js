catMouse = (x, j) => {
    let mouse = x.indexOf('m');
    let cat = x.indexOf('C');
    let dog = x.indexOf('D');
    let indexArr = [mouse, cat].sort();
    let subArr = x.substring(indexArr[0], indexArr[1]).split('');

    if (dog < 0 || cat < 0 || mouse < 0) return "boring without all three";

    else if (subArr.length > j) return "Escaped!";

    else if (subArr.length <= j) {
        if (subArr.includes('D') === false) {
            return "Caught!"
        } else return "Protected!"
    };

};
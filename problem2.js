function matchFinder(string1, string2) {
    if (typeof string1 == 'string' && typeof string2 == 'string') {
        let temp = string1.includes(string2);
        return temp;
    }
    else {
        return "The input is invalid!";
    }

}

let temp2 = matchFinder('iqbal', 'bac');
console.log(temp2);
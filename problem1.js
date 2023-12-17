function cubeNumber(number) {

    if (typeof number === 'number') {
        return Math.abs(Math.pow(number, 3));
    }
    else {
        return "The input is invalid!";
    }
}

const inpNum = cubeNumber('4');
console.log(inpNum);
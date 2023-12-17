function canPay(changeArray, totalDue) {

    if (changeArray.length !== 0) {
        let sum = 0;
        for (let i = 0; i < changeArray.length; i++) {
            sum = sum + changeArray[i];
        }

        if (sum >= totalDue) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "The input is invalid!";
    }

}
let see = canPay([1,3,4,2], 10);
console.log(see);
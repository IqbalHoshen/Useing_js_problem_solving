function sortMaker(arr) {
    if (arr[0] > 0 && arr[1] > 0) {
        if (arr[0] < arr[1]) {
            let temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
            return arr;
        }
        else if (arr[0] == arr[1]) {
            return "equal";
        }
        else {
            return arr;
        }

    }
    else {
        return "Invalid Input!";
    }

}

const take = sortMaker([2, 3]);
console.log(take);
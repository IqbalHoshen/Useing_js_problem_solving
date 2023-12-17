function findAddress(obj) {
    let temp = Object.keys(obj);

    let a = temp.includes('street');
    let b = temp.includes('house');
    let c = temp.includes('society');

    if (a != true) {
        obj.street = '__';
    }
    if (b != true) {
        obj.house = '__';
    }
    if (c != true) {
        obj.society = '__';
    }
    return obj.street + ',' + obj.house + ',' + obj.society;
}

const temp1 = findAddress(
    {
        street: '10',
        house: '15A',
        society: 'Earth Perfect'

    }
);
console.log(temp1);
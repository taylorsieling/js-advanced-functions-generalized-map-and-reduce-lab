function map(array, callback) {
    let newArray = [];
    array.forEach(element => {
        newArray.push(callback(element));
    });
    return newArray
}

function reduce(array, callback, startingPoint) {
    let total = startingPoint != undefined ? startingPoint : 0;
    let value = array.every(Boolean)
    array.forEach(element => {
        total = callback(total, element)
    })
    if (total) {return total} else {return value}
}
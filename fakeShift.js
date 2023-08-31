function fakeShift(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    const cuttingPart = arr[0];
    for(let i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i + 1];
    }
    arr.length--;
    return cuttingPart;
}

const array = [2, 5, 6];
console.log(fakeShift(array));
console.log(array);
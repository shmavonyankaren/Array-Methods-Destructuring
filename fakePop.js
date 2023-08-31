function fakePop(arr) {
    const cuttingPart = arr[arr.length - 1];
    arr.length--;
    return cuttingPart;
}

const array = [3, 5, 6];

console.log(fakePop(array));
console.log(array);
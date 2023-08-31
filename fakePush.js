function fakePush(arr, ...addingParts) {
    for(let i = arr.length, j = 0; j < addingParts.length; i++, j++) {
        arr[i] = addingParts[j];
    }   
    return arr.length;
}

const array = [3, 5, 6];

console.log(fakePush(array, 7, 2, 5));
console.log(array);
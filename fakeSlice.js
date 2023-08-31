function fakeSlice(arr, start, end = arr.length) {
    let newArr = [];

    if(start === undefined && end === arr.length) {
        return arr;
    }
    if(end < 0) {
        end = arr.length + end;
    }
    if(start < 0) {
        end = arr.length; 
        start = arr.length + start;
    }

    for(let i = start, j = 0; i < end; i++, j++) {
        newArr[j] = arr[i];
    }
    return newArr;
}	

let data = [0, 1, 2, 3, 4, 5, 6];

console.log(fakeSlice(data));
 function fakeFlat(arr, depth = 1){
    const newArr = [];
    function flatten(arr, currentDepth) {
        for (const val of arr) {
            if (Array.isArray(val) && currentDepth < depth) {
                flatten(val, currentDepth + 1);
            } else {
                newArr.push(val);
            }
        }
    }
  
    flatten(arr, 0);
    return newArr;
};

const data = [1, [2, 3], [4, [5, 6]]];

console.log(data);
console.log(fakeFlat(data)); // [1, 2, 3, 4, [5, 6]]
console.log(data);
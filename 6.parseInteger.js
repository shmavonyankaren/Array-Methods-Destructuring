function parseInteger(arr) {
    return arr
            .map(val => {
                return +val;
            })
            .map(val => {
                if(val) {
                return val;
                }
                
                return null;
            });
}

console.log(parseInteger(["1", "2", "34"])); // [1, 2, 34];
console.log(parseInteger(["1", "px", "2323"])); // [1, null, 2323];
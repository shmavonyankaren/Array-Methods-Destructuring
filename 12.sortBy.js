function sortBy(arr, par = "Asc") {
    let newArr = arr.toSorted((a, b) => a - b);
    if(par === "Asc") {
        return newArr;
    }
    if(par === "Desc") {
        return newArr.reverse();
    }
}
  
console.log(sortBy([7, 8, 11, 66])); // [66, 11, 8, 7]
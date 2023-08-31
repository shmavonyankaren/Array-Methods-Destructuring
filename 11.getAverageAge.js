const users = [ 
    { 
      username: "Yuri Gagarin", 
      lang: "ru", 
      age: 56, 
    }, 
    { 
      username: "Nil Armstrong", 
      lang: "ENG", 
      age: 54, 
    }, 
]; 
  
function getAverageAge(arr) {
    return  arr.reduce((aggr, val) => {
                return aggr + val.age;
            }, 0) / arr.length;
}
  
console.log(getAverageAge(users)); // 55
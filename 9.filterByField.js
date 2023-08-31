const users = [ 
    { 
        username: "Yuri Gagarin", 
        lang: "ru", 
        isAstronaut: true, 
    }, 
    { 
        username: "Nil Armstrong", 
        lang: "ENG", 
        isAstronaut: true, 
    }, 
    { 
        username: "Elon Musk", 
        isAstronaut: false, 
    }, 
]; 
  
function filterByField(arr, par) {
    return arr.filter(val => val[par])
}
    
      
console.log(filterByField(users, "isAstronaut"));
const users = [ 
    { 
        username: "Yuri Gagarin", 
        lang: "ru", 
    }, 
    { 
        username: "Nil Armstrong", 
        lang: "ENG", 
    }, 
]; 
  
function filterUsers(arr) {
    return arr.filter(val => val.lang !== "ru")
}
  
console.log(filterUsers(users)); // [{ username: "Nil Armstrong, lang: "ENG" }]
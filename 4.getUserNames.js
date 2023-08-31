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

function getUserNames(arr) {
    return arr.map(val => {
        return val.username;
    });
}
    
    
console.log(getUserNames(users)); // ['Yuri Gagarin', 'Nil Armstrong']
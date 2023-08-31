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

function getUsernameLengths(arr) {
    return arr.map(val => {
        return val.username.length;
    })
}

console.log(getUsernameLengths(users)); // [12, 13]

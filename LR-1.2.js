class User {
    constructor(name, password) {
        this.name = name
        this.password = password
    }

    // getName() {
    //     return this.#username
    // }
}

let users = []
let names =[] 
// lg
let passwords = []  
// pwd


btn1.onclick = function() {
    register()  
}
btn2.onclick = function() {
    login()  
}

function register() {
    let name = document.getElementById("lg")
    let password = document.getElementById("pwd")

    const user = new User(name, password)
    users.push(user)

    let nametf = 1
    let passtf = 0
    
    for(let i = 0; i <=names.length; i++) {
        if(name.value === names[i]) {
            nametf = 0
        }
    }

    for (let i = 0; i < passwords.length; i++){
        if(password.length>=4 && password.length<=12 )
            passtf = 1
            else alert("Error")
        
       }

    if(nametf == 1 && passtf == 1) {
        names.push(parseInt(name.value))
        passwords.push(parseInt(password.value))
    }
        else 
        alert("Ошибка регистрации")
        
        console.log(names, passwords)


            console.log(users)

    };

    function login() {
        let name = document.getElementById("lg")
        let password = document.getElementById("pwd")
        let tf = 0
        for(let i = 0; i <= names.length && i <=passwords.length; i++) {
            if (name.value === names[i] && password === passwords[i])
                tf = 1
        }
        if(tf === 1)
            alert("Вход выполнен")
            else
                alert("Ошибка")
    }
    


// }






    // name.value = localStorage.getItem('name');
    // name.oninput = () => {
    //   localStorage.setItem('name', name.value)
    // };
    // password.value = localStorage.getItem('password');
    // password.oninput = () => {
    //   localStorage.setItem('password', password.value)
    // };

    // for(let i=0; i<localStorage.length; i++) {
    //     let name = localStorage.name(i);
    //     alert(`${name}: ${localStorage.getItem(name)}`);
    //     }

    // for(let i=0; i<localStorage.length; i++) {
    //     let password = localStorage.password(i);
    //     alert(`${password}: ${localStorage.getItem(password)}`);
    //     }
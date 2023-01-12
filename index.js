// let users = []
let logins =[] 
// log
let passwords = []  
// pwd


btn1.onclick = function() {
    register()  
}

function register() {
    let login = document.getElementById("lg")
    let password = document.getElementById("pwd")

    for (let i = 0; i < passwords; i++){
        if(passwords.length>=4 && passwords.length<=12 ){
        passwords.push(parseInt(pwd.value))
        }
        // logins.push(parseInt(log.value))
        else alert("Error")
       }

       console.log(logins, passwords)

}



// btn2.onclick = function() {
   
// }
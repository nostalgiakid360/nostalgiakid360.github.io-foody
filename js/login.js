let button1 = document.getElementById("btn-login");
let loginMsg = document.getElementById("login-msg");
let input = document.getElementById("input-login")
let messageEl =document.getElementById("login-msg")

let inputLogin = document.getElementsByTagName("input");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let welcomeMsg =  document.getElementById("message")




let database = [
    {
            email : "nostalgia@yahoo.com",
            password : "revolution360"
    },
    {
            email : "graciou@gmail.com",
            password : "evolution160"
    },
    {
            email : "shinebandmusic@gmail.com",
            password : "laptop360"
    },
    {
            email : "outsourceglobal@gmail.com",
            password : "revo"
    }
    
    ]



function isUserInput(email,password){
        for(let i=0;i < database.length;i++){
                if(database[i].email === email
                 && database[i].password === password){
                    return true;
                 }

        }
        return false;
    }

 function signIn(email,password){
         // welcomeMsg.textContent = "welcome" + email
         if(isUserInput(email,password)){       
                 
                console.log("correct!!")
         }else{
                 alert("wrong username and password")
         }
}
//declare variables

let input = document.getElementById("inputText");
let button = document.getElementById("btn-el");
let messageEl = document.getElementById("message-el");
let showtime = document.getElementById("showtime");
let userInput = input.value;
let errorMsg = document.getElementById("error-el");

let image = document.getElementById("image");
let title = document.getElementById("header");

let yamPourage  = 'lorem Working as a call center representative taught me how to communicate more effectively and make sound decisions. As a result of this, I was able to be productive at my previous job, which resulted in benefits. On the other hand, I was able to micromanage and handle difficult team tasks even when the team leader was unavailable. As a result, my team gained a reputation for being the best'
let friedRice = 'Fried Rice Because of how difficult and challenging the work was, and I had only been there for a short time with a team that was not among the best, I was able to raise the teams flag to a higher level, which impressed';
let egusi = 'Egusi Soup I taught myself to be more focused and diligent in my work and helping others. This is because helping others is an important quality for developing skills. A happy work environment can reduce stress and improve health';
let pepperSoup = 'Pepper Soup has a great flavour that remains one of the fresh tasting pepper soup in afriacan'
let isiEwu = ' isi ewu nkwobi has been the sumptous delicacy of africa When colleagues support each other and work as a team, it often enables productivity. Being focused also allows me to avoid being biased in my work.'

function getInputValue(){
        let userInput = input.value;
        messageEl.style.color = "green";
        image.style.color = "black";
        

        if(userInput.lenght > 0 && userInput == NaN){
                messageEl.textContent = "please the character typed must be more than 3";
                messageEl.style.color = " pink"

        }else{
     
                        if(userInput === "Yam Pourage"){
                        
                                header.textContent =  input.value;
                                image.style.background = "none";
                                image = image.textContent += yamPourage;
                
                        }else if(userInput === "isi-ewu" || userInput === "isi ewu"){ 
                                header.textContent =  input.value;
                                image.style.background = "none";
                                image = image.textContent += isiEwu;
                                messageEl.textContent ="";
                                input.value = " ";
                        
                                
                        }else if(userInput === "egusi soup"){ 
                                header.textContent =  input.value;
                                image.style.background = "none";
                                image = image.textContent += egusi;
                                messageEl.textContent =""

                        }else if(userInput === "pepper soup"){ 
                                header.textContent =  input.value;
                                image.style.background = "none";
                                image = image.textContent += pepperSoup;

                        }else if(userInput === "fried rice"){ 
                                header.textContent =  input.value;
                                image.style.background = "none";
                                image = image.textContent += friedRice;
                                

                }else {
                        
                        let MSG = messageEl.textContent = "Please provide recipe found on this list " ;
                        messageEl.style.color= "red"
                }
        
   
     
}

return userInput = " ";

}


















/*
button.addEventListener("click",function(){
       
                input.style.borderColor = "red";
                input.style.borderWidth = "3px";
                messageEl.textContent = "!!!You must signIn first before getting access!!!";
                showtime.style.visibility = "visible";

       
    
})



input.addEventListener("keypress",function(event){
        if(input.value.length > 0){
        messageEl.textContent = "!!!You must signIn first before getting access!!!";
        input.style.borderColor = "red";
        input.style.borderWidth = "3px";
        showtime.style.visibility = "visible";
       
        }else{
                messageEl.textContent = "";
        }
})


*/

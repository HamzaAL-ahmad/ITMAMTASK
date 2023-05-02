
function valdate(){

    let password =document.getElementById('password').value;
    let cPassword=document.getElementById('confirm-password').value; 
           
    if(password!=cPassword){
        
        window.alert("Password dosn't match");
    } 
}



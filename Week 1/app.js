let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let email=document.getElementById("email"); 
function submit(){
    
    if (fname.value === ''){
        alert("Please fill all the fields");
    }
        else{
            if(lname.value === ''){
                alert("Please fill all the fields");}
                else{
                    if(email.value === '' ){
                        alert("Please fill all the fields");}
                       
                    }
                }
      
if(fname.value !== '' && lname.value !== '' && email.value !== ''){
    alert("Form Submitted Successfully");}
}



function validateform(){
    var firstname=document.myform.firstname.value;
   var lastname=document.myform.lastname.value; 
   var Email=document.myform.Email.value; 
  var Telephone=document.myform.Telephone.value;
   
 
   if (firstname==null || firstname==""){ 
  alert("firstname can't be blank"); 
   return false; 
 }
   if (lastname==null || lastname==""){ 
   alert("lastname can't be blank"); 
   return false; 
    }
  if (Email==null || Email==""){ 
   alert("Email can't be blank"); 
   return false; 
   }
 if (Telephone==null || Telephone==""){ 
   alert("Telephone can't be blank"); 
   return false; 
  }
}

//This JS script is related to the form in HTML

//, this JS script will determine whether the information you enter is wrong. If there is an error, the corresponding error will appear. When all the information is confirmed to be correct, click the button to jump to the mailbox
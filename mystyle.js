
 var slideIndex = 1;
 showDivs(slideIndex);
 function plusDivs(n) {
 showDivs(slideIndex += n);
 }
 
 function currentDiv(n) {
 showDivs(slideIndex = n);
 }
 function showDivs(n) {
  var i;
 var x = document.getElementsByClassName("mySlides");
 var dots = document.getElementsByClassName("demo");
 if (n > x.length) {slideIndex = 1}  if (n < 1) {slideIndex = x.length}
 for (i = 0; i < x.length; i++) { x[i].style.display = "none";  }
 for (i = 0; i < dots.length; i++) {
 dots[i].className = dots[i].className.replace(" w3-white", ""); }
 x[slideIndex-1].style.display = "block"; 
 dots[slideIndex-1].className += " w3-white";
 }


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
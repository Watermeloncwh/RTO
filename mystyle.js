var t = null;
t = setTimeout(time, 1000); 
function time() {
  clearTimeout(t); 
  dt = new Date();
  var y = dt.getFullYear();
  var mt = dt.getMonth() + 1;
  var day = dt.getDate();
  var h = dt.getHours(); 
  var m = dt.getMinutes(); 
  var s = dt.getSeconds(); 
  document.querySelector(".showTime").innerHTML =
    "Present time：" +
    day +
    "/" +
    mt +
    "/" +
    y +
    "---" +
    h +
    ":" +
    m +
    ":" +
    s;
  t = setTimeout(time, 1000); 
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
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
var btn1=document.querySelector("#btn1")

var h2=document.querySelector("h2")
flag=0

btn1.addEventListener("click",function(){
   if(flag==0){
   
    h2.innerHTML="Friends"
    h2.style.color="green"
     flag=1
     btn1.innerHTML="REMOVE"
}
else{
    h2.innerHTML="Stranger"
    h2.style.color="red"
     flag=0
     btn1.innerHTML="ADD FRIEND"
}


})






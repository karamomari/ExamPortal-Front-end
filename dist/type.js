         // to regster and go courses
         let email=document.getElementById('inputemail')
         let pass=document.getElementById('inputpassworf')
         let buttoregister=document.getElementById('login')
         let nameuser="";
         let form=document.getElementById("formLogin")
//------------------------------------------------------------------------------ 
       email.addEventListener("click",function(){
        email.value=localStorage.getItem('username')
       
       })


         form.addEventListener('submit', (event) => {
       event.preventDefault();
       let isValid = true;
       if (email.value == '' || pass.value == '') {
           isValid = false;
           email.style.borderColor = 'red';
           pass.style.borderColor = 'red';
       }
   
       if (isValid) {
           //to save user name
          let a=document.getElementById('check1')
               if(a.checked==true){
                   localStorage.clear()
           localStorage.setItem("username",email.value)
               }
           
           //login sccess
               // if(((email.value).toLocaleLowerCase()=="karamomari20010@gmail.com" &&
               //  (pass.value).toLocaleLowerCase()=="123456789" )  || (email.value).toLocaleLowerCase()=="k" ){ عشان اذا بدي اخصص ايميل معين
                document.getElementById('toHi').textContent="Hello"+" :"+localStorage.getItem('username')
              document.getElementById('register')?.classList.add("displaynone")
              document.getElementById('pageenterquizoo')?.classList.add("displayblock")
               //  }
           
        }
         });
  /*______________________________________________________________________*/













           // to courses and go quiz
           const element =document.getElementById("startquiz");
         //------------------------------------------------------------------------------ 
           element.addEventListener("click", function a() {

    document.getElementById("question")?.classList.add("displayblock")
    document.getElementById("qs4")?.classList.add("displaynone")
    document.getElementById("qs2")?.classList.add("displaynone")
    document.getElementById("qs3")?.classList.add("displaynone")
  
      var towMinutes = 60 * 2.5 ,
          // display = document.querySelector('#time');
          display=document.getElementById("time")
      startTimer(towMinutes, display);
  
             });
        
 /*______________________________________________________________________*/










             
             // to timerin quiz
             function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {

        diff = duration - (((Date.now() - start) / 1000) );

        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;


        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            markss(arraymark)
            $('.modal').modal({show:true});
   
        }
    };
  
    timer();
    setInterval(timer, 1000);
             }
 /*______________________________________________________________________*/






            const next =document.getElementById("butnext");
            // to navigate between questions
            next.addEventListener("click", function() {
    numberofqustion+=1;

if(numberofqustion==1){
  document.getElementById('qustion1')?.classList.add("displayblock")
  pusharraymark(numberofqustion);


}
else if(numberofqustion==2){
 document.getElementById('qustion1')?.classList.remove("displayblock")
  document.getElementById('qustion2')?.classList.add('displayblock')
  document.getElementById('qustion1')?.classList.add("displaynone")
  pusharraymark(numberofqustion);


}

else if(numberofqustion==3){
  document.getElementById('qustion2')?.classList.remove('displayblock')
  document.getElementById('qustion3')?.classList.add('displayblock')
  document.getElementById('qustion1')?.classList.add("displaynone")
  pusharraymark(numberofqustion);

  
}
else if(numberofqustion==4){

  document.getElementById('qustion3')?.classList.remove('displayblock')
  document.getElementById('qustion4')?.classList.add('displayblock')
  document.getElementById('qustion1')?.classList.add("displaynone")
  pusharraymark(numberofqustion);


}
else if(numberofqustion==5){
 
  document.getElementById('qustion4')?.classList.remove('displayblock')
  document.getElementById('qustion5')?.classList.add('displayblock')
  document.getElementById('qustion1')?.classList.add("displaynone")
  pusharraymark(numberofqustion);

 
}
else if(numberofqustion==6){

  document.getElementById('qustion5')?.classList.remove('displayblock')
  document.getElementById('qustion6')?.classList.add('displayblock')
  document.getElementById('qustion1')?.classList.add("displaynone")
  pusharraymark(numberofqustion);

}
else{
document.getElementById('qustion6')?.classList.remove("displayblock")
  document.getElementById('qustion1')?.classList.add("displayblock")
  numberofqustion=1;
}


            });
 /*______________________________________________________________________*/








         const finsh =document.getElementById("finsh");
         // to finshed quiz
         finsh.addEventListener("click", function() {
    if(numberofqustion==6){
      markss(arraymark)
      $('.modal').modal({show:true});
      
      // finsh.className.add(displaynone);
      // document.getElementById('pageenterquizoo')?.classList.add("displayblock");

    }
    else{
      alert("pleas compelet quiz")
    }
          }) 
 /*______________________________________________________________________*/











     // to calculate the result
      var numberofqustion =1;
       let arraymark=[];
       //------------------------------------------------------------------------------ 
        function  pusharraymark(numberofqustion){

    let y=  document.getElementById('answer')
    arraymark[numberofqustion]=y.value
       document.getElementById('answer').value="";
        }
   
       function markss(arraymark){
       var mark=0;
      
     
   arraymark[0]=undefined
   arraymark[1]=undefined
       let ans=[undefined,undefined,'a','d','a','a','b','c']
   for(let i=2;i<=8;i++){
   
       if(arraymark[i] == ans[i]){
           mark +=1;
       }
   }
   console.log(ans)
   console.log(arraymark)
   document.getElementById('finalmark').textContent=mark;;
     }
 /*______________________________________________________________________*/





// to model
function ree() {
  
    document.getElementById("question")?.classList.remove("displayblock")
  
    document.getElementById("qs2")?.classList.add("displayblock")
    document.getElementById("qs3")?.classList.add("displayblock")
    document.getElementById("qs4")?.classList.add("displayblock")

}














/* note :
result
image regiser in md
href to icon and my quiz
another courses
navqustion in page quiz
error in powershell (compile ts to js)
*/ 











  















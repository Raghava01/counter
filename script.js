let increment=()=>{
    let num=document.getElementById("value");
   let newval= num.textContent;
   newval++;
   newval<=20?num.innerHTML=newval:alert('Number should not be graterThan 20');
   num.classList.remove('animateClick');
   void num.offsetWidth; 
  num.classList.add('animateClick');
  


};

let decrement=()=>{
    let num=document.getElementById("value");
    let newval= num.textContent;
    newval--;
   newval>=0?num.innerHTML=newval:alert('Number should be graterThan 0');
 
   num.classList.remove('animateClick');
   void num.offsetWidth; 
  num.classList.add('animateClick');

};

let reset=()=>{
    let num=document.getElementById("value");
   
   num.innerHTML=0;
   num.classList.remove('animateClick');
   void num.offsetWidth; 
  num.classList.add('animateClick');

};
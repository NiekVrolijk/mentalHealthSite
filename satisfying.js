const img = document.getElementById("satisfyinggif1");

let times = 0

img.onclick = function(){
    times++
    switch(times){
    case 1:
        
        img.src = "satisfying/2.gif";
        
        break;
    case 2:
        
        img.src = "satisfying/3.gif";
        
        break;
    case 3:
       
        img.src = "satisfying/4.gif";
        
        break;
    case 4:
        
        img.src = "satisfying/5.gif";
        
        break;
    case 5:
  
        img.src = "satisfying/6.gif";
      
        break;
    case 6:
        
        img.src = "satisfying/7.gif";
     
        break;
    case 7:
       
        img.src = "satisfying/8.gif";
       
        break;
    case 8:
        
        img.src = "satisfying/9.gif";
        
        break;
    case 9:
        
        img.src = "satisfying/10.gif";
        
        break;
    case 10:
      
        img.src = "satisfying/11.gif";
        
        break;
    case 11:
       
        img.src = "satisfying/12.gif";
        
        break;
    case 12:
      
        img.src = "satisfying/13.gif";
        
        break;
    default:
        img.src = "satisfying/1.gif";
        times=0
        break;

}
}



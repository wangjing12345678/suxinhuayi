window.onload=function () {
	

      // let banner=document.querySelectorAll(".banner img");
      // console.log(banner);
      // let dot=document.querySelectorAll(".btns li");
      // console.log(dot);
      // let left=document.querySelector(".btnleft");
      // console.log(left);
      // let right=document.querySelector(".btnright");
      // console.log(right);
      // let home3=document.querySelector(".banner");
      // let width1=1920;
      // roll(banner,dot,left,right,width1,home3,2000);
       mySwiper.el.onmouseover=function () {
        mySwiper.autoplay.stop();
    }   
    mySwiper.el.onmouseout=function(){
        mySwiper.autoplay.start();
    } 
      mySwiper1.el.onmouseover=function () {
        mySwiper1.autoplay.stop();
    }   
    mySwiper1.el.onmouseout=function(){
        mySwiper1.autoplay.start();
    } 


    let head=document.querySelector(".head");
    console.log(head);
    let nav1=document.querySelectorAll(".nav-1 li a");
    console.log(nav1);
    let bodytop;
    window.onscroll=function(){
        bodytop=document.body.scrollTop||document.documentElement.scrollTop;
        if(bodytop>200){
          head.style.background="#fff";
        for(let i=1;i<nav1.length;i++){
          nav1[i].style.color="black";
        }
       head.style.border="1px solid #ccc";
        }else if(bodytop<200){
          head.style.background="rgba(0,0,0,0.15)";
          for(let i=1;i<nav1.length;i++){
          nav1[i].style.color="#fff";
         }
        head.style.border=0;
        }
      }




}
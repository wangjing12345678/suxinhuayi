         function change(banner,dots,home,next,prev,second){
				let num=0;
	      		dots[0].classList.add("active");
	      		banner[0].style.zIndex=10;
	      		for(let i=0;i<dots.length;i++){
	      		     dots[i].onclick=function () {
	      				for(let j=0;j<banner.length;j++){
	      					banner[j].style.zIndex=1;
	      					dots[j].classList.remove("active");
      
	      				}
	      				banner[i].style.zIndex=10;
	      				dots[i].classList.add("active");
	      				num=i;
	      			}
	      		}
      
	      		let t=setInterval(move,second);
	      		function move(){
	      			num++;
	      			if(num==banner.length){
	      				num=0;
	      			}
	      			for(let j=0;j<banner.length;j++){
	      					banner[j].style.zIndex=1;
	      					dots[j].classList.remove("active");
      
	      				}
	      			banner[num].style.zIndex=10;
	      			dots[num].classList.add("active");
	      		}
	      		home.onmouseover=function(){
	      			clearInterval(t);
	      		}
	      		home.onmouseout=function(){
	      			t=setInterval(move,second);
	      		}
      
	      		next.onclick=function(){
	      			move();
	      		}
	      		function movel(){
	      			num--;
	      			if(num<0){
	      				num=banner.length-1;
	      			}
	      			for(let j=0;j<banner.length;j++){
	      					banner[j].style.zIndex=1;
	      					dots[j].classList.remove("active");
      
	      				}
	      			banner[num].style.zIndex=10;
	      			dots[num].classList.add("active");
	      		}
	      		prev.onclick=function(){
	      			movel();
	      		}
	      		  window.onblur=function(){
               	clearInterval(t);
               }
               window.onfocus=function() {
               	t=setInterval(move,second);
               }
			}


                  //左右移动

			   function roll(banner,dot,prev,right,widths,home,second){
                        // 鼠标移入
                        let next=0;
                        let now=0;
                         let t;
                        banner[0].style.left=0;
                        dot[0].classList.add("active");
                        for(let i=0;i<banner.length;i++){
                           dot[i].onclick=function(){
                                for(let j=0;j<dot.length;j++){
                                        banner[j].style.left=widths+"px";
                                        dot[j].classList.remove("active");
                                }
                                banner[i].style.left=0;
                                dot[i].classList.add("active");
                                now=i;
                                next=i;
                           }
                        }
                        //自动播放
                        t=setInterval(move,second);
                        function move(){
                                next++;
                                if(next==banner.length){
                                        next=0;
                                }
                                banner[now].style.left=0;
                                banner[next].style.left=widths+"px"
                                animate(banner[now],{left:-widths},function(){
                                        dot[now].classList.remove("active");
                                })
                                animate(banner[next],{left:0},function(){
                                        for(let j=0;j<dot.length;j++){
                                                dot[j].classList.remove("active");
                                        }
                                        dot[next].classList.add("active");
                                })
                                now=next;
                        }
                        home.onmouseover=function(){
                                clearInterval(t);
                        }
                        home.onmouseout=function(){
                                t=setInterval(move,second);
                        }

                        right.onclick=function(){
                                move();
                        }
                        function movel(){
                                next--;
                                if(next<0){
                                        next=banner.length-1
                                }
                                banner[now].style.left=0;
                                banner[next].style.left=-widths+"px";
                                animate(banner[now],{left:widths},function(){
                                        dot[now].classList.remove("active");
                                })
                                animate(banner[next],{left:0},function(){
                                        for(let j=0;j<dot.length;j++){
                                                dot[j].classList.remove("active");
                                        }
                                        dot[next].classList.add("active");
                                })
                                now=next;
                        }
                        prev.onclick=function(){
                                movel();
                        }
                          window.onblur=function(){
                        	clearInterval(t);
                        }
                        window.onfocus=function() {
                        	t=setInterval(move,second);
                        }
    }

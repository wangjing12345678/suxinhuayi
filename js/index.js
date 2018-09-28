window.onload=function () {
	let text=document.querySelector("textarea");
	console.log(text);
	let num=document.querySelector(".text span");
	console.log(num);
	let btn=document.querySelector("button");
	console.log(btn);
	let ul=document.querySelector(".mainzuo ul");
	console.log(ul);
	// console.log(ul.innerHTML);
	let input=document.querySelector(".xingming input");
	console.log(input);
	// let con=document.querySelector("")
	//随着输入的内容,字数实时变化
	text.oninput=function(){
		let textnum=this.value.length;
		num.innerHTML=textnum
	}
	btn.onclick=function(){
		if(input.value!==""&& text.value!==""){
		
		let con=text.value;
		let name=input.value;
		let str=`
		 <li>
                   <div><i class="iconfont icon-ren"></i></div>
                   <div class="mingzi">
                       <h4>${name}
                           <div class="shijian">2018-01-04 16:18:53</div>
                       
                       </h4>
                       <p>${con}</p>
                   </div>
               </li>  `
	    ul.innerHTML+=str;
	    input.value="";
	    text.value="";
	    num.innerHTML="0";
	    }else{
	    	alert("不能为空");
	    }
	}



	

}
$(function(){
	// let text=$("textarea");
	// console.log(text);
	// let num=$(".text span");
	// console.log(num);
	// let btn=$("button");
	// console.log(btn);
	// let ul=$(".mainzuo ul");
	// console.log(ul);
	// // console.log(ul.innerHTML);
	// let input=$(".xingming input").eq(0);
	// console.log(input);
	// text.bind('input propertychange',function(){
	// 	let textnum=$(this).val().length;
	// 	console.log(textnum);
	// 	num.html(textnum);

	// })
	// btn.click(function(){
	// 	if(input.val()!=="" && text.val()!==""){
	// 	let con=text.val();
	// 	let name=input.val();
	// 	let str=`
	// 	<li>
 //                   <div class="touxiang"><i class="iconfont icon-ren"></i></div>
 //                   <div class="mingzi">
 //                       <h4>${name}
 //                           <div class="shijian">2018-01-04 16:18:53</div>
                       
 //                       </h4>
 //                       <p>${con}</p>
 //                   </div>
 //               </li>
	// 	`
	// 	ul.append(str);
	// 	input.val("");
	//     text.val("");
	//     num.html(0);
	//     }else{
	//     	alert("不能为空");
	//     }

	// })
	// $(".touxiang").click(function(){
	// 	$(this).parent().remove();
	// })

	let inputs=$(".mainyou>.xingming:nth-child(1) input");
	console.log(inputs);
	let textarea=$(".jianyi");
	console.log(textarea);
	let btn=$(".tijiao");
	console.log(btn);
	let spans=$(".text span");
	console.log(spans);
	let ul=$(".mainzuo ul")
	textarea.bind('input propertychange',function(){
		let lengths=textarea.val().length;
		console.log(lengths);
		spans.html(lengths);
	})

	btn.click(function(){
		if(inputs.val()!==""&&textarea.val()!==""){
		   let name=inputs.val();
		   let con=textarea.val();
		   let str=`
		   <li>
                  <div class="touxiang"><i class="iconfont icon-ren"></i></div>
                  <div class="mingzi">
                      <h4>${name}
                          <div class="shijian">2018-01-04 16:18:53</div>
                   
                      </h4>
                      <p>${con}</p>
                  </div>
              </li>
   
		   `
		   ul.append(str);
		   inputs.val("");
		   textarea.val("");
		   spans.html(0);

		}else{
			alert("为空");

		}
		

	})



});
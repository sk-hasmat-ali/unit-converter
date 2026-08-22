let convertBtn=document.getElementById("convert-btn")
let inputEle=document.getElementById("input-ele")
let lengthEle=document.getElementById("length-ele")
convertBtn.addEventListener("click",function(){
    let value=Number(inputEle.value)
     let  feet=(value*3.28).toFixed(3)
    let meter=(value/3.28).toFixed(3)
     lengthEle.textContent=`${value}meter = ${feet}feet || ${value}feet = ${meter}meters  `

})

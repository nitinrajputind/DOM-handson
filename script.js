// Question :1

let question1=document.querySelector("#text")
question1.innerHTML="Hello prepbytes friends"
console.log(question1.innerHTML)


// Question :2
let question2 = document.getElementsByTagName("h1")
question2[1].innerHTML="Hello Friends"
console.log(question2[1].innerHTML)

// Question :3
let question3 = document.querySelector(".box")
question3.innerHTML="Element class has a box content return by js"
console.log(question3.innerHTML)

// Question :4
let changetext =document.querySelector("#changetext")
let change = true
changetext.addEventListener("click",()=>{
    if(change){
        changetext.innerHTML="Hello World"
        change=false
    }
    else{
        changetext.innerHTML="Hello"
        change=true
    }
})
// question :5
let changecontent = document.querySelector("#changecontent")
console.log(changecontent.innerHTML)
let btn = document.querySelector(".btn-1")
console.log(btn)
btn.addEventListener("click",()=>{
    if(change){
        changecontent.innerHTML="Welcome to Prepbytes"
        change = false
    }
    else{
        changecontent.innerHTML= "Hello World"
        change = true
    }

})






let count =true;
var textchange = document.getElementsByClassName("change")
console.log(textchange)
textchange[0].addEventListener("click",()=>{
    // textchange[0].innerHTML="hello world";
    // textchange[0].style.color="red";
    // textchange[0].style.fontSize="60px";

    if(count){
        textchange[0].innerHTML="hello world";
        textchange[0].style.color="red";
        textchange[0].style.fontSize="60px";
        count=false;
    }
    else{
        textchange[0].innerHTML="same condition"
        textchange[0].style.color="blue";
        textchange[0].style.fontSize="10px"
        count=true
    }
})
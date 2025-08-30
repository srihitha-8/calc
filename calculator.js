let result = document.getElementById("resultEl");
const buttons = document.querySelectorAll(".num");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    result.value += button.value; // use button.value, not buttons.value
  });
});
const clear=document.getElementById("clear")
clear.addEventListener("click",function(){
    result.value=''
})
const answer=document.getElementById("answer")
answer.addEventListener("click",function(){
    try{
        result.value=eval(result.value)}
    catch{result.value="Error"}
})
let item1=document.querySelectorAll('.item');

//To check turns
let counter = 0;
function checkTurn(){
if(counter%2 === 0){
    counter++;
    return true;
}else{
    counter++;
    return false
}
}

//To check if  box is empty
function checkEmpty(item){
if(item.innerText.trim().length === 0){
    return true;
}else
return false;
}

item1.addEventListener("click", checkEmpty(item1) ){
    if(checkTurn)//(bool to check turn)
        {
            item1.innerText = "O";

        }
        else
        item1.innertext = "X";
}
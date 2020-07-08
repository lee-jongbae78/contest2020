const title = document.querySelector("#title");
//const name = prompt("이름을 입력하세요!");

//title.innerHTML = name + "님" + " 안녕하세요";

const BASE_COLOR = "green";
const OTHER_COLOR = "red";


function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else{
        title.style.color =  BASE_COLOR;

    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();
const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

const connectedDate = new Date();

function showClock(){
    const currentDate = new Date();
    const divClock = document.getElementById("divClock");

    const result = Math.ceil((currentDate - connectedDate)/1000);

        
    divClock.innerText = "운동 시간  : "+ result +"초가 지났습니다.";
        
    setTimeout(showClock,1000);
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); //초기화 방지
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);

}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `안녕하세요 ${text} 님` ;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
        showClock();
    }
}

function init(){
    loadName();
    localStorage.setItem("strangth", 0);
}

init();
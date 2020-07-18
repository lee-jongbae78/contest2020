const point = document.querySelector(".point");

const STRANGTH_01 = "strangth";

function askForPoint(){
    const STRANGTH_01 = localStorage.setItem("strangth", 10);
}

function paintpoint(text){
    point.innerText = `체력이 ${text} 점` + '  올랐습니다.' ;
}

function getpoint(){
    const strangth = localStorage.getItem(STRANGTH_01);
    if(strangth === null){
        askForPoint();
    } else {
        paintpoint(localStorage.getItem("strangth"));
    }

}

function init(){
    localStorage.setItem("strangth", 50);
    getpoint();

}

init();
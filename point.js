const point = document.querySelector(".point");

const strangth = 0;

function init(){
    loadName();
    localStorage.setItem("strangth", 10);
    localStorage.getItem("strangth");
}

init();
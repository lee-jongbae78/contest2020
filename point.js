const point = document.querySelector(".point");

const STRANGTH_01 = "strangth1";
const STRANGTH_02 = "strangth2";
const STRANGTH_03 = "strangth3";
const STRANGTH_04 = "strangth4";


function askForPoint(){
    const STRANGTH_01 = localStorage.setItem("strangth1", 0);
    const STRANGTH_02 = localStorage.setItem("strangth2", 0);
    const STRANGTH_03 = localStorage.setItem("strangth3", 0);
    const STRANGTH_04 = localStorage.setItem("strangth4", 0);

}

function paintpoint(text1, text2, text3, text4){
    point.innerText = `근지구력이 ${text1} 점 / ` + `심폐지구력이 ${text2} 점 / `+ `유연성이 ${text3} 점 / `+ `신체 구성이 ${text4} 점` + '  올랐습니다.' ;
}

function getpoint(){
    const strangth1 = localStorage.getItem(STRANGTH_01);
    const strangth2 = localStorage.getItem(STRANGTH_02);
    const strangth3 = localStorage.getItem(STRANGTH_03);
    const strangth4 = localStorage.getItem(STRANGTH_04);

    if(strangth1 === null || strangth2 === null || strangth3 === null || strangth4 === null ) {
        askForPoint();
    } else {
        const strangth1 = localStorage.strangth1 ++  ;
        const strangth2 = localStorage.strangth2 ++  ;
        const strangth3 = localStorage.strangth3 ++  ;
        const strangth4 = localStorage.strangth4 ++  ;

        paintpoint(localStorage.getItem("strangth1"),localStorage.getItem("strangth2"),localStorage.getItem("strangth3"),localStorage.getItem("strangth4") );
    }

}

function init(){
    getpoint();

}

init();
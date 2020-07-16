const connectedDate = new Date();


function showClock(){
    const currentDate = new Date();
    const divClock = document.getElementById("divClock");
        
    const result = Math.ceil((currentDate - connectedDate)/1000);

        
    divClock.innerText = "운동 시간  "+ result;
    divClock.innerText +="초가 지났습니다.";
        
    setTimeout(showClock,1000);
}

showClock();
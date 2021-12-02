//Библиотеки, задание 3
let N = 3;

function RanBool(max) {
    if(Math.random() <= 0.5)
        return false;
    else
        return true;
}

let attemptCount = 3;
let prizeCount = 5;

function green(cell){
    if(attemptCount != 0){
        cell.style.background = 'green';
        attemptCount--;
    }
    else
        alert("Попытки исчерпаны");
    document.getElementById('infoBox').innerHTML = 'Количество попыток: ' + attemptCount;
}

function red(cell){
    if(attemptCount != 0){
        cell.style.background = 'red';
        attemptCount--;
    }
    else
        alert("Попытки исчерпаны");
    document.getElementById('infoBox').innerHTML = 'Количество попыток: ' + attemptCount;
}

function create(N){
    let tableCell = "";
    
    for(let i = 0; i < N; i++){
        tableCell += "<div style = 'width: 320px; height: 100px; display:inline-block;'>";
        for(let j = 0; j < N; j++){
            if(prizeCount != 0){
                if(RanBool(2)){
                    tableCell += "<div id = 'green' onclick=green(this) style = 'width: 100px; height: 100px; display:inline-block; cursor: pointer;border: 1px dashed Black; background-color: grey'></div>";
                }
                else
                    tableCell += "<div id = 'red' onclick=red(this) style = 'width: 100px; height: 100px; display:inline-block; cursor: pointer;border: 1px dashed Black; background-color: grey'></div>";
                prizeCount--;
            }
            else
                tableCell += "<div id = 'red' onclick=red(this) style = 'width: 100px; height: 100px; display:inline-block; cursor: pointer;border: 1px dashed Black; background-color: grey'></div>";
        }
        tableCell += "</div>";
    }
    
    document.getElementById('box').innerHTML = tableCell;
    
    document.getElementById('infoBox').innerHTML = 'Количество попыток: ' + attemptCount;
}

create(N);
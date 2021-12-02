//Библиотеки, задание 2

function createY(arr){
    for(let i=-5; i<5; i+=0.01){
        if(i>=1){
            y.push(5/i);
        } else{
            y.push(i*i-4*i);
        }
    }

    return arr;
}
function createX(arr){
    for(let i=-5; i<5; i+=0.01){
        arr.push(i);
    }

    return arr;
}

let ctx = document.getElementById('myChart').getContext('2d');
let y=[];
y=createY(y);
let x=[];
x=createX(x);
let chart = new Chart(ctx, {
// Тип графика
type: 'line',
 
// Создание графиков
data: {
    // Точки графиков
    labels: x,
    // График
    datasets: [{
        label: 'График функции', // Название
        backgroundColor: 'transparent', // Цвет закраски
        borderColor: 'red', // Цвет линии
        data: y // Данные каждой точки графика
    }]
},
 
// Настройки графиков
options: {}
});
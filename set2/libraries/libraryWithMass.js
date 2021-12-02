//Библиотеки, задание 1

function showMass(arr){
    document.writeln(arr+"<br \/>");
}

function findMin(arr){
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min)
            min = arr[i];
    }
    document.writeln("Минимум = "+min+"<br \/>");
}

function findMax(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max)
            max = arr[i];
    }
    document.writeln("Максимум = "+max+"<br \/>");
}

function findAverage(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum+=arr[i];
    }
    sum/=arr.length;
    document.writeln("Среднее арифметическое = "+sum+"<br \/>");
}

function clone(arr){
    let new_arr = [];
    for(let i = 0; i < arr.length; i++){
        new_arr[i] = arr[i];
    }
    document.writeln("Новый массив = "+new_arr+"<br \/>");
    return new_arr;
}
//События, задание 4

let bookList = [
    { 
        article: "1", 
        autor: "Терри Пратчетт",
        name: "Мор, ученик Смерти",
        info: "Смерть берёт себе в ученики простодушного юношу"
    },
    {
        article: "2",
        autor: "Арчибальд Кронин", 
        name: "Замок Броуди",
        info: "История о деспотичном главе семейства, сходящим с ума от власти и безнаказанности"
    },
    {
        article: "3",
        autor: "Энтони Бёрджесс", 
        name: "Заводной апельсин",
        info: "Остросоциальный роман о взрослении, насилии и ответственности"
    }
];

function drawTable(bookList){
    let html = '<table border="2" style = "border-collapse: collapse; width: 100%">';
    
    html += '<tr>';
    html += '<td>Артикул</td>';
    html += '<td>Автор</td>';
    html += '<td>Название</td>';
    html += '<td>Описание</td>';
    html += '</tr>';
    
    for(let i = 0; i < bookList.length; i++)
    {
        html += '<tr>';
        html += '<td>' + bookList[i].article + '</td>';
        html += '<td>' + bookList[i].autor + '</td>';
        html += '<td>' + bookList[i].name + '</td>';
        html += '<td>' + bookList[i].info + '</td>';
        html += '</tr>';
    }

    document.getElementById('container').innerHTML = html + '</table>';
}

drawTable(bookList);
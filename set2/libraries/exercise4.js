//библиотеки, задание 4
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
    
    let newtable = document.createElement("table");
    let html = '<table border="1" style = "border-collapse: collapse; width: 100%">';
    
    html += '<tr>';
    html += '<td><button type="button" data-action="sortArticle" onClick="sortArticle();">Артикул</button></td>';
    html += '<td><button type="button" data-action="sortAuthor" onClick="sortAuthor();">Автор</button></td>';
    html += '<td><button type="button" data-action="sortName" onClick="sortName();">Название</button></td>';
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
    
    document.getElementById('myTable').innerHTML = html + '</table>';
}

drawTable(bookList);
let flagSortArticle = false;
let flagSortAuthor = false;
let flagSortName = false;

function sortArticle(){
    if(flagSortArticle == false){
        for (let i = 0, endI = bookList.length - 1; i < endI; i++) {
            for (let j = 0, endJ = endI - i; j < endJ; j++) {
                if (bookList[j].article < bookList[j + 1].article) {
                    let swap = bookList[j];
                    bookList[j] = bookList[j + 1];
                    bookList[j + 1] = swap;
                }
            }
        }
        flagSortArticle = true;
    }
    
    else{
        for (let i = 0, endI = bookList.length - 1; i < endI; i++) {
            for (let j = 0, endJ = endI - i; j < endJ; j++) {
                if (bookList[j].article > bookList[j + 1].article) {
                    let swap = bookList[j];
                    bookList[j] = bookList[j + 1];
                    bookList[j + 1] = swap;
                }
            }
        }
        flagSortArticle = false;
    }

    drawTable(bookList);
}

function sortAuthor(){    
    if(flagSortAuthor == false){
        function SortAutorTop(x, y){
            if (x.autor < y.autor) {return -1;}
            if (x.autor > y.autor) {return 1;}
            return 0;
        }
        bookList = bookList.sort(SortAutorTop);
        drawTable(bookList);
        flagSortAuthor = true;
    }
    
    else{
        function SortAutorBot(x, y){
            if (x.autor < y.autor) {return 1;}
            if (x.autor > y.autor) {return -1;}
            return 0;
        }
        bookList = bookList.sort(SortAutorBot);
        drawTable(bookList);
        flagSortAuthor = false;
    }
}

function sortName(){
    if(flagSortName == false){
        function SortNameTop(x, y){
            if (x.name < y.name) {return -1;}
            if (x.name > y.name) {return 1;}
            return 0;
        }
        bookList = bookList.sort(SortNameTop);
        drawTable(bookList);
        flagSortName = true;
    }
    
    else{
        function SortNameBot(x, y){
            if (x.name < y.name) {return 1;}
            if (x.name > y.name) {return -1;}
            return 0;
        }
        bookList = bookList.sort(SortNameBot);
        drawTable(bookList);
        flagSortName = false;
    }
}
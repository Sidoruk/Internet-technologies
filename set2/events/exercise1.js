//События, задание 1
let box = document.getElementsByTagName("div");
for (let i = 0; i < box.length; i++){
    box[i].onclick = function() {
        if (this.style.backgroundColor == "")
            this.style.backgroundColor = "green";
        else 
            this.style.backgroundColor = ""
    };
}
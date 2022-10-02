let string = "";

let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=> {
    button.addEventListener("click", (e)=> {
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector(".inputValue").value = string;
        }
        else if(e.target.innerHTML == "Clear All"){
            string = "";
            document.querySelector(".inputValue").value = string;

        }
        else{
        string = string + e.target.innerHTML;
        document.querySelector(".inputValue").value = string;
        }
    })
})
let buttons = document.querySelectorAll(".button");
let input = document.getElementById("input");

let str = "";

let arr = Array.from(buttons);
input.value = str;
arr.forEach( button =>{
    button.addEventListener("click", (e) => {
          
        if(e.target.innerText ==="="){
            str = eval(str);
            input.value = str;
        }
        else if(e.target.innerText === "AC"){
            str = "";
            input.value = str;
        }
        else if(e.target.innerText === "DEL"){
            str = str.slice(0,-1);
            input.value = str;
        }

        else{
            console.log(e.target);
            str = str + e.target.innerText;
            input.value = str;
        }
        

    
        });
}    );

     document.addEventListener("keydown", (e) => {
    let key = e.key;

    
    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "%" ||
        key === "."
    ) {
        str += key;
        input.value = str;
    }

    
    else if (key === "Enter") {
        try {
            str = eval(str);
            input.value = str;
        } catch {
            input.value = "Error";
            str = "";
        }
    }

    
    else if (key === "Backspace") {
        str = str.slice(0, -1);
        input.value = str;
    }

    else if (key === "Escape") {
        str = "";
        input.value = "";
    }
});

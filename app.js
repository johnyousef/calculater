const toolbar = document.querySelector(".toolbar_container");
const input_text = document.querySelector(".input_text");

toolbar.addEventListener("click", (e) => {
    console.log(e);
    // if it's a number 
    if (e.target.attributes[0].textContent.includes("number")) {
        // just type it
        input_text.textContent += e.target.attributes[1].textContent;
    }
    // if its an opration
    else if (e.target.attributes[0].textContent.includes("operation")){
        // if there is not already an opration
        if (!(input_text.textContent.includes("/") || input_text.textContent.includes("*") || input_text.textContent.includes("-") || input_text.textContent.includes("+"))) {
            // type it
            input_text.textContent += e.target.attributes[1].textContent;            
        }
    }
});


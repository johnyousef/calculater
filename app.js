const toolbar = document.querySelector(".toolbar_container");
const input_text = document.querySelector(".input_text");
const output_text = document.querySelector(".output_text")

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
    // if pressed clear all button
    else if (e.target.attributes[0].textContent === "clear_all") {
        // clear all
        input_text.textContent = "";
        output_text.textContent = "";
    }
    // if pressed enter button
    else if (e.target.attributes[0].textContent === "enter") {
        // calculate
        console.log(calculate(input_text.textContent));
        output_text.textContent = calculate(input_text.textContent);        
        
    }
});

function calculate(expression) {
    if (expression.includes("+")) {
        return add(expression);        
    }
    else if (expression.includes("-")) {
        return subtract(expression); 
    }    
    else if (expression.includes("*")) {
        return multiply(expression);
    }
    else if (expression.includes("/")) {
        return divide(expression);
    }
}

function add(expression) {
    let num_arr = expression.split("+");    
    return parseInt(num_arr[0]) + parseInt(num_arr[1]);
}

function subtract(expression) {
    let num_arr = expression.split("-");    
    return parseInt(num_arr[0]) - parseInt(num_arr[1]);   
}

function multiply(expression) {
    let num_arr = expression.split("*");    
    return parseInt(num_arr[0]) * parseInt(num_arr[1]);      
}

function divide(expression) {
    let num_arr = expression.split("/");    
    return parseInt(num_arr[0]) / parseInt(num_arr[1]);   
}
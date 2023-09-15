
console.log("2020".split(/[-*/+]+/));
console.log(parseFloat("2"));

const toolbar = document.querySelector(".toolbar_container");
const input_text = document.querySelector(".input_text");
const output_text = document.querySelector(".output_text");
let answer = null;

toolbar.addEventListener("click", (e) => {
    console.log(e);
    // if it's a number 
    if (e.target.attributes[0].textContent.includes("number")) {
        // just type it
        input_text.textContent += e.target.attributes[1].textContent;
    }
    // if its an opration
    else if (e.target.attributes[0].textContent.includes("operation")){
        // if there is not an opration
        if (!(input_text.textContent.includes("/") || input_text.textContent.includes("*") || input_text.textContent.includes("-") || input_text.textContent.includes("+"))) {
            // type it
            input_text.textContent += e.target.attributes[1].textContent;            
        }
        // if there is an answer
        else if (input_text.textContent.split(/[-*/+]+/)[1].length > 0) {
            answer = calculate(input_text.textContent);
            console.log(answer);
            if (!(isNaN(answer))) {
                output_text.textContent = ""; 
                input_text.textContent = `${answer}${e.target.attributes[1].textContent}`;
            }else {
                alert("can't calculate with NAN");
                output_text.textContent = "";
                input_text.textContent = "";
            }
        }
    }
    else if (e.target.attributes[0].textContent === "decimal") {
        let input_numbers = input_text.textContent.split(/[-*/+]+/);
        if (!isNaN(parseInt(input_numbers[input_numbers.length - 1])) && !input_numbers[input_numbers.length - 1].includes(".")){
            input_text.textContent += ".";
        }
    }
    // if pressed enter button
    else if (e.target.attributes[0].textContent === "enter") {
        // calculate
        answer = Math.round(calculate(input_text.textContent)*10000000)/10000000;
        console.log(answer);
        output_text.textContent = answer;        
        
    }
    // if pressed clear all button
    else if (e.target.attributes[0].textContent === "clear_all") {
        // clear all
        input_text.textContent = "";
        output_text.textContent = "";
    }
    // if pressed delete button
    else if (e.target.attributes[0].textContent === "delete") {
        // delete the last num/oper
        let tmp = input_text.textContent;

        tmp = tmp.split("");
        tmp.pop()
        tmp = tmp.join("")
        
        input_text.textContent = tmp;
        output_text.textContent = "";
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
    return parseFloat(num_arr[0]) + parseFloat(num_arr[1]);
}

function subtract(expression) {
    let num_arr = expression.split("-");    
    return parseFloat(num_arr[0]) - parseFloat(num_arr[1]);   
}

function multiply(expression) {
    let num_arr = expression.split("*");    
    return parseFloat(num_arr[0]) * parseFloat(num_arr[1]);      
}

function divide(expression) {
    let num_arr = expression.split("/");    
    return parseFloat(num_arr[0]) / parseFloat(num_arr[1]);   
}
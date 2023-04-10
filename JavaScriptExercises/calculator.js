let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let result = document.getElementById("result")
function btn() {
    
    if (firstNumber.value == false) {
        alert("Ошибка. Попробуйте ввести другое число")
    }
    else if (secondNumber.value == false) {
        alert("Ошибка. Попробуйте ввести другое число")
        
}

else {
    result.innerHTML = firstNumber.value * secondNumber.value
}
}




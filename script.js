function calculatenum() {
    const num1Element = document.getElementById("input1")
    const num2Element = document.getElementById("input2")
    const resultElement = document.getElementById("result")
    const sum = parseInt(num1Element.value) + parseInt(num2Element.value)

    resultElement.innerText= ` ${sum}`
}
function reset(){
    const num1Element = document.getElementById("input1")
    num1Element.value= ""

    const num2Element = document.getElementById("input2")
    num2Element.value= ""

    const resultElement = document.getElementById("result")
    resultElement.innerText= ""
}
"use strict";

let aMostrar = ""
let operacion = []

// Funcion creada para pasarsela al evento y que coja el valor del boton
function onclick() {
    if(this.innerHTML == "+" || this.innerHTML == "-" || this.innerHTML == "*" || this.innerHTML == "/"){
        aMostrar += " " + this.innerHTML + " ";
    }else{
        aMostrar += this.innerHTML;
    }
    if(this.innerHTML == "C"){
        aMostrar = ""
        operacion = []
    }
    document.getElementById("display").innerHTML = aMostrar;
    if(this.innerHTML === "="){
            let resultado
            operacion = aMostrar.split(" ")
            let ultimo = operacion[operacion.length - 3]
            if(ultimo === "+" || ultimo === "-" || ultimo === "*" || ultimo === "/"){
                document.getElementById("display").innerHTML = "ERROR"
            }else {
                aMostrar = ""
                for (let i = 0; i < operacion.length; i++) {
                    switch (operacion[i]) {
                        case "+":
                            resultado = parseInt(operacion[i - 1]) + parseInt(operacion[i + 1])
                            operacion[i + 1] = resultado
                            break
                        case "-":
                            resultado = parseInt(operacion[i - 1]) - parseInt(operacion[i + 1])
                            operacion[i + 1] = resultado
                            break
                        case "*":
                            resultado = parseInt(operacion[i - 1]) * parseInt(operacion[i + 1])
                            operacion[i + 1] = resultado
                            break
                        case "/":
                            resultado = parseInt(operacion[i - 1]) / parseInt(operacion[i + 1])
                            operacion[i + 1] = resultado
                            break
                        default:
                            break
                    }
                }
                document.getElementById("display").innerHTML = resultado
                operacion = []
            }
    }
}
// Funcion que coje el valor del boton al ser pulsado
function main(){
    let botones = document.querySelectorAll(".boton");
    botones.forEach(boton => {
        boton.addEventListener("click", onclick)
    });
}

main();

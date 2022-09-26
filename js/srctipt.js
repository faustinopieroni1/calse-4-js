//---FUNCIONES

//--Declaracion: Se declara usando el principio camelCase y luego se usasn (), entre los[] se pone el comando a ejecutar en todas las lineas donde se haga el llamado de la funcion "saludar"

/* function saludar(){
    alert("Hola")
}

//--Llamado: Se pone el nombre y los (). Mientrsd no dr ls invoque no se usara

saludar() */

//---FUNCIONES CON PARAMETROS

//--Parametros: Son variables que se declaran en los () y sus valores se asignan en la llamada

//-Funcion con un parametro

/* function bienvenida(nombre){
alert("Bienvenido/a " + nombre)
}

bienvenida("Ana")
bienvenida("Esteban")
bienvenida("Javier") */

//-Funcion con varios parametros

/* function bienvenida(nombre, apellido) {
    alert("Bienvenido/a " + nombre + " " + apellido)
}

bienvenida("Ana", "Sosa")
bienvenida("Esteban", "Lopez")
bienvenida("Javier", "Illia") */

//-Funcion matematica con variable "let" declarada anteriormete

/* let resultado = 0 //-> Es para que se almacene el valor de la suma fuera del "Micromundo" de la fuction

function suma(a, b){
    let resultado = a + b
    alert("Su resultado es: " + resultado)
}

suma(10, 10)
suma(10, 15) */

//-Funcion matematica con variable "let" NO declarada anteriormete

/* function suma(a, b) {
    return a + b
}

let resultado = suma(5 , 10) 
alert("Su resultado es " + resultado) */

//-Funcion calculadora + switch

function calculadora(primerNumero, operacion, segundoNumero) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero
            break2

        case "-":
            return primerNumero - segundoNumero
            break

        case "*":
            return primerNumero * segundoNumero
            break
        case "/":
            return primerNumero / segundoNumero
            break

        default:
            return 0
            break
    }
}

//ParseInt  propiedad se agrega al prompt para que no concatene valores numericos
let primerNumero = parseInt(prompt("Ingrese un numero"))
let operacion = prompt("Operacion")
let segundoNumero = parseInt(prompt("Ingrese un numero"))

let resultadoCalculadora = calculadora(primerNumero, operacion, segundoNumero)//->Guarfo el valor de la operacion
alert("Resultado = " + resultadoCalculadora)

function main(){
    /*Crea un programa que muestre por pantalla si un número introducido por el
    usuario es mayor o menor que 10*/

    function ejercicio_1(){
        var numero = prompt("Introduce un número")

        if (numero>10){
            alert("El número es mayor que 10")
        }
        else if (numero<10){
            alert("El número es menor que 10")
        }
        else if (numero==10){
            alert("El número es menor que 10")
        }
        else{
            alert("No es un número")
        }       
    }

    ejercicio_1()

    /*Crea un programa que muestre por pantalla si una palabra que introduzca el
    usuario contiene la letra b minúscula.
    Pista: String.includes(texto)*/

    function ejercicio_2(){
        var palabra = prompt("Introduce una palabra")
        palabra = palabra.toLowerCase()

        if (palabra.includes("b")==true){
            alert("Tiene una b")
        }
        else{
            alert("No tiene una b")
        }
    }

    ejercicio_2()

    /*Crea un programa que muestre por pantalla si el usuario es mayor o no de 18
    años, introduciendo su fecha de nacimiento.
    Pista: Date.GetFullYear()*/

    function ejercicio_3(){
        var ano = prompt("Introduce tu año de nacimiento")
        var fecha_actual = new Date()
        var ano_actual = fecha_actual.getFullYear()

        if (ano_actual-ano<18){
            alert("Eres menor de 18 años")
        }
        else{
            alert("Eres mayor de 18 años")
        }
    }

    ejercicio_3()

    /*Crea un programa que muestre por pantalla una selección de productos al
    usuario (3 o 4) y dependiendo de lo que escriba el usuario, se muestre el
    precio del producto.
    Ej.: Leche
    Cacao
    Avellanas
    Azucar
    “Cacao”
    El cacao vale 2 €*/

    function ejercicio_4(){
        var producto = prompt("Elige alguno de estos productos para saber su precio: QUESO - PASTA - AGUA")
        producto = producto.toUpperCase()

        switch(producto){
        case "QUESO":
            alert("El precio son 3€")
            break
        case "PASTA":
            alert("El precio son 0.90€")
            break
        case "AGUA":
            alert("El precio son 0.25€")
            break
        default:
            alert("No está disponible")
        }
    }

    ejercicio_4()

    /*Crea un programa que muestre por pantalla distintas figuras geométricas
    (triángulo, rectángulo, pentágono y hexágono). Según lo que escoja el
    usuario, se le pedirá que introduzca unos valores clave para calcular el área
    de la figura seleccionada. Mostrar por pantalla el resultado.*/

    function ejercicio_5(){
        var figura = prompt("Elige una figura para calcular su área: TRIANGULO - RECTANGULO - PENTAGONO - HEXAGONO")
        figura = figura.toUpperCase()

        if (figura=="TRIANGULO"){
            var base = prompt("Introduce la base")
            var altura = prompt("Introduce la altura")
            alert("Área = "+base*altura/2)
        }
        else if (figura=="RECTANGULO"){
            var base = prompt("Introduce la base")
            var altura = prompt("Introduce la altura")
            alert("Área = "+base*altura)
        }
        else if (figura=="PENTAGONO"){
            var apotema = prompt("Introduce el apotema")
            var lado = prompt("Introduce el lado")
            alert("Área = "+lado*5*apotema/2)
        }
        else if (figura=="HEXAGONO"){
            var apotema = prompt("Introduce el apotema")
            var lado = prompt("Introduce el lado")
            alert("Área = "+lado*6*apotema/2)
        }
        else{
            alert("No está disponible")
        }  
    }

    ejercicio_5()

    /*Crea un programa que pida una frase al usuario y comprueba si en esa frase
    contiene alguna b o v. Si existe una b, buscar si tiene alguna p la frase. Si
    tiene v, buscar si tiene u. Estas cláusulas no son excluyentes. Mostrar por
    pantalla si son ciertos todos los casos.
    Pista: Se pueden concatenar múltiples operaciones lógicas. Ej: (A & B) & (C &
    D)*/

    function ejercicio_6(){
        var frase = prompt("Introduce una frase")
        frase = frase.toLowerCase()

        if (frase.includes("b"||"v")){
            if (frase.includes("b")){
                alert("La frase tiene b")
                if (frase.includes("p")){
                    alert("...y también tiene p")
                    
                }
            }
            if (frase.includes("v")){
                alert("La frase tiene v")
                if (frase.includes("u")){
                    alert("...y también tiene u")
                    
                }
            }
        }
        else{
            alert("La frase no contiene ni b ni v")
        }
    }

    ejercicio_6()

    /*Crea un programa que calcule si un número dado por el usuario es par o
    impar y lo muestre por pantalla.
    Pista: El módulo o resto de la división indica si un número es par o no.*/

    function ejercicio_7(){
        var numero = prompt("Introduce un número")
        
        if(numero%2==0){
            alert("El número introducido es par")
        }
        else{
            alert("El número introducido es impar")
        }
    }

    ejercicio_7()

    /*Crea un programa que pida una cadena de texto al usuario. Calcular si la
    cadena contiene un número de caracteres par o impar y mostrarlo por
    pantalla.
    Pista: Las cadenas de texto tienen la propiedad .length que devuelve el
    tamaño.*/

    function ejercicio_8(){
        var text = prompt("Introduce una cadena de texto")
        
        if(text.length%2==0){
            alert("La cadena de texto tiene un número de caracteres par")
        }
        else{
            alert("La cadena de texto tiene un número de caracteres impar")
        }
    }

    ejercicio_8()

}


/*Crea un programa que unifique todos los ejercicios anteriores, por orden
numérico.*/

main()
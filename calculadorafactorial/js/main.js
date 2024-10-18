//Script de JavaScript para calcular el factorial al cargar la página -->

window.onload = function () { //Esta línea indica que el código dentro de la función se ejecutará cuando la página web se haya cargado completamente.
    // 1. Se declara una variable booleana para controlar el bucle
    let numeroValido = false;

    // 2. Se inicia un bucle while que continuará mientras numeroValido sea falso
    while (!numeroValido) { //bucle de verdad o falso mas comodo q un for y la exclamacion lo invierte

        // 3. Se solicita al usuario que ingrese un número
        const numero = prompt("Ingrese un número entero positivo:");//se usa la const en ves de var para q la variable no sea modificable una vez ingreasado el valor por

        // 4. Se valida si el número ingresado es válido
        if (numero == null || isNaN(numero) || numero < 0 || numero == '') { //condicion verdadero y falso if else .
            // caso 1: numero == null lo q quiere decir q no hay ningun numero y cancela este hara saltar la alerta.
            // caso 2: isnan se refiere a q si la variable ingresada no es un numero y es cualquier otra cosa saltara la alarma.
            // caso 3: numero es menor a 0 dando por hecho q es un negativo salatara una alerta para pedir positivos.
            // caso 4: numero == '' lo q quiere decir q no hay ningun numero y acepta este hara saltar la alerta.
            alert("Por favor, ingrese un número entero positivo.");
        } else {
            // Si el número es válido, se llama a la función calcularFactorial
            calcularFactorial(numero);
            // Se cambia el valor de numeroValido a true para salir del bucle
            numeroValido = true;
        }
    }
};

function calcularFactorial(n) { //llamar a la funcion calcular factorial y poner como variable n
    let factorial = 1; // factorial sea 1 en un bloque de codigo.

    document.getElementById("pasos").innerHTML = ""; // Limpiar el contenido previo

    for (let i = 2; i <= n; i++) { //hace un ciclo de bucles en cuanto la condicion se vuelva falsa se detiene.
        document.getElementById("pasos").innerHTML += "<p>" + factorial + " x " + i + " = " + (factorial * i) + "</p>";//inner html nos sirve para poder llamar culaquier elemento del codigo html a un script 
        factorial = factorial * i; // Acumula el producto en factorial después de mostrar el paso += es esencial para construir el contenido HTML de forma incremental,
    }

    // Mostrar el resultado final
    document.getElementById("pasos").innerHTML += "El factorial de " + n + " es: " + factorial; //getelement by id realiza lo q viene siendo un mensaje a una clase mostrando el contenido en la pagina.
}

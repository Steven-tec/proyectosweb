//ingrese un numero por teclado y verifique si el nuemero es perfecto o no sabiendo q un numero perfecto es la suma de sus divisiores excluyendo el mismo numero 

var numero1 = prompt("Ingrese el numero del q quiere saber si es perfecto");
var sumadivisores=0;

for (i = 1; i < numero1; i++) {
    if (numero1 % i== 0) {

        sumadivisores=sumadivisores+i        
        
    }
}

if (sumadivisores == numero1) {

    document.write(+ numero1+ " es un numero perfecto")
    
} else{
    
    document.write(+ numero1+ " no es un numero perfecto")
}





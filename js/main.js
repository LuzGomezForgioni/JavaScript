// Primer ejemplo
let nombre = prompt("Ingrese su nombre:")

let usuario = prompt("Hola " + nombre + "! Ingrese si, si quiere saber las tablas, de lo contrario ingrese no.")

while ( usuario == "si") {
    let num = prompt("Ingrese un numero del 1 al 10 para conocer la tabla.")

    for (let i = 1; i <=10; i++){
        let tabla = num * i;
        console.log(`${num} x ${i} = ${tabla}`);
    }
    let validacion = prompt("Ingrese si para saber otra tabla, de lo contrario ingrese no.")
    if (validacion == "si") {    
    }else{
        break
    }
}


// Segundo ejemplo
let gradosC = prompt("Ingresa la temperatura en °C:");
let gradosF = gradosC + " grados Celcius son " + (gradosC * 1.8 + 32) + " grados Fahrenheit .";
alert(gradosF);


// Tercer ejemplo
let repetir = parseInt(prompt("Elija cuantas veces se repita este mensaje entre 1 y 50"))
for (let i = 1; i <= 50; i++){
    if (repetir){
    console.log ("Este mesaje se repite " + repetir + " veces");
    } else if (i === 1) {
        console.log("Este mensaje se repite " + repetir, " vez");
    } else {
        console.log("Este mensaje no se repite");
    }
}

// ejercicio 1 
let bateria = 15;
if (bateria <20) {
    console.log("bateria baja, conectar al cargador")
}

// ejercicio 2
let totalcompra = 55000;
if (totalcompra >=50000 ) {
    console.log("tienes envio gratis")
}

//el¿jecicio 3 
let numero =7;
if (numero % 2==0) {
    console.log("el numero es par")
} else {
    console.log("el numero es impar");
}

//elercicio 4 
let nota =3.5;
if (nota >=3) {
    console.log("aprobado");
} else {
    console.log("reprobado");
}

//ejercicio 5 
let a = 10; 
let b = 10;
if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
} else {
    console.log("son iguales");
}

//elercicio 6 
let temp =18;
if (temp <10) {
    console.log("hace frio");
} else if (temp >=10 && temp <=24) {
    console.log("clima templado");
} else {
    console.log("hace calor")
}

//ejercicio 7
let notafinal = 85;
if (notafinal < 0 || notafinal > 100) {
    console.log("nota invalida");
} else if (notafinal >= 90) {
    console.log("A");
} else if (notafinal >=80) {
    console.log("B");
} else if (notafinal >=70) {
    console.log("C");
} else if (notafinal >=60) {
    console.log("D");
} else {
    console.log("F");
}

//ejercicio 8 
let edad = 20;
let tienentrada = true;
if (edad <=18) {
    console.log("no puedes entrar");
} else {
    if (tienentrada) {
        console.log("bienvenido");
} else {
    console.log("debe comprar una entrada");
} 
}

//elercicio 9 
let usuario ="admin";
let contrasena ="1234";
if (usuario === "admin") {
    if (contrasena === "1234") {
        console.log("acceso concedido");
    } else {
        console.log("contrasena incorrecta");
    }
} else {
    console.log("usuario no encontrado");
}


//ejercicio 10 
let compra = 120000;
let escliente = true;
let descuento = 0;

if (compra > 100000) {
    if (escliente) {
        descuento = 0.20;
    } else {
        descuento = 0.10;
    }
} else {
    if (escliente) {
        descuento = 0.05;
    } else {
        descuento = 0;
    }
}

let montoDescuento = compra * descuento;
let totalpagar = compra - montoDescuento;
console.log("descuento aplicado: " + (descuento * 100) + "%");
console.log("totaal a pagar: " + totalpagar);

















    
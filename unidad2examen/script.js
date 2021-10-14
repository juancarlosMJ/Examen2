"use strict";
var examen = /** @class */ (function () {
    function examen() {
    }
    examen.prototype.actividad1 = function () {
        console.log("Hola Mundo");
    };
    examen.prototype.actividad2 = function () {
        var cadena = "Hola Mundo:D";
        console.log(cadena);
    };
    examen.prototype.actividad3 = function (nombre) {
        nombre = prompt("Cual es  tu nombre :p");
        nombre = console.log("Hola " + nombre);
        return nombre;
    };
    examen.prototype.actividad4 = function (nombre, numero) {
        nombre = prompt("Cual es  tu nombre");
        numero = prompt("Tu numero es ");
        numero = parseInt(numero);
        for (var i = 0; i < numero; i++) {
            document.write(nombre);
        }
    };
    examen.prototype.actividad6 = function (edad) {
        edad = prompt("ingrese tu edad");
        if (edad >= 18) {
            alert("Eres mayor de edad");
        }
        else {
            alert("Eres menor de edad");
        }
    };
    examen.prototype.actividad8 = function (numero) {
        numero = prompt("ingrese una palabra");
        for (var i = 0; i < 10; i++) {
            document.write(numero);
        }
    };
    examen.prototype.actividad9 = function (años) {
        años = prompt("años cumplidos");
        for (var i = 0; i < años; i++) {
            document.write((i + 1) + " Años ");
        }
    };
    examen.prototype.actividad7 = function (password, contraseña) {
        contraseña = "admin";
        password = prompt("Ingresa la contraseña");
        password = password.toLowerCase();
        if (contraseña == password) {
            console.log("La contraseña es correcta");
        }
        else {
            alert("La contraseña es incorrecta");
        }
    };
    examen.prototype.actividad5 = function (nombre) {
        nombre = prompt("cuales tu nombre");
        for (var i = 0; i < 3; i++) {
            document.write(nombre.toLowerCase());
            document.write(nombre.toUpperCase());
        }
    };
    return examen;
}());
var ejercicio = new examen();
ejercicio.actividad5();

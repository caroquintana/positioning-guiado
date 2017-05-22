//Trayéndonos los elementos que utilizaremos
var contenedor = document.getElementsByClassName('contenedor')[0];
var rosa = document.getElementById('rosa');
var azul = document.getElementById('azul');
var verde = document.getElementById('verde');
var amarillo = document.getElementById('amarillo');

// propiedades de la caja contenedora
contenedor.style.position = 'relative';
contenedor.style.background = 'DarkGray';
contenedor.style.width = '600px';
contenedor.style.padding = '50px';

// propiedades caja azul
azul.style.position = 'absolute';
azul.style.top = '250px';
azul.style.right = '0';

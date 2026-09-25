// 1. Definimos el tiempo inicial en 60 segundos
let tiempoRestante = 60;

// 2. Usamos setInterval para ejecutar un bloque de código cada 1000 milisegundos (1 segundo)
const intervalo = setInterval(() => {
    
    // Si el tiempo es mayor a cero, mostramos el número actual y restamos uno
    if (tiempoRestante > 0) {
        console.log("Tiempo restante: " + tiempoRestante);
        tiempoRestante--;
    } 
    // Cuando el contador llega exactamente a cero
    else {
        console.log("¡Despegue!"); // Mensaje final
        clearInterval(intervalo);   // Detenemos el temporizador para que el programa termine
    }

}, 1000);
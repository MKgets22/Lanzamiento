const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const mainContainer = document.getElementById('mainContainer');
const cardPanel = document.getElementById('cardPanel');

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    let tiempoRestante = 60;
    timerDisplay.textContent = tiempoRestante;
    timerDisplay.style.color = "#ffffff";

    const intervalo = setInterval(() => {
        if (tiempoRestante > 0) {
            tiempoRestante--;
            timerDisplay.textContent = tiempoRestante;

            // Alerta visual cuando quedan 10 segundos o menos
            if (tiempoRestante <= 10) {
                timerDisplay.style.color = "#ef4444"; // Alerta en rojo
            }
        } else {
            timerDisplay.textContent = "¡IGNICIÓN Y DESPEGUE!";
            timerDisplay.style.fontSize = "32px";
            timerDisplay.style.color = "#22c55e";
            
            // Activamos los efectos visuales en toda la pantalla al despegar
            mainContainer.classList.add('screen-shake');
            cardPanel.classList.add('screen-flash');

            clearInterval(intervalo);

            // Reinicio automático después de unos segundos de animación
            setTimeout(() => {
                mainContainer.classList.remove('screen-shake');
                cardPanel.classList.remove('screen-flash');
                timerDisplay.style.fontSize = "75px";
                timerDisplay.style.color = "#ffffff";
                timerDisplay.textContent = "60";
                startBtn.disabled = false;
            }, 5000);
        }
    }, 1000);
});
#  Secuencia de Lanzamiento Espacial

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Status-Completado-success?style=for-the-badge" alt="Status">
</p>

Una aplicación web interactiva de cuenta regresiva espacial desarrollada con tecnologías web modernas. Cuenta con un diseño inmersivo, controles dinámicos de tiempo y efectos visuales de temblor (*shake*) y destello de ignición al llegar el contador a cero.

---

##  Vista Previa del Proyecto

> **Pantalla Principal (Espera de Lanzamiento)**
> ![Pantalla Principal](https://via.placeholder.com/800x450/020024/00d4ff?text=Panel+de+Lanzamiento+-+60s)<img width="959" height="416" alt="Captura de pantalla 2026-09-27 191435" src="https://github.com/user-attachments/assets/50d081b3-4210-4783-9a4f-08b3a820eff6" />


> **Efecto de Despegue (Alerta)**
> ![Despegue](https://via.placeholder.com/800x450/090979/22c55e?text=¡IGNICIÓN+Y+DESPEGUE!)<img width="959" height="408" alt="Captura de pantalla 2026-09-27 19" src="https://github.com/user-attachments/assets/146a1261-56c1-408e-ab95-fd6f90346a1c" />


---

##  Características Principales

* **Diseño Espacial Minimalista:** Fondo con gradiente personalizado y efecto de cristal esmerilado (*backdrop-filter*).
* **Control de Estados en Tiempo Real:** Bloqueo inteligente de botones para evitar conflictos durante la ejecución del temporizador.
* **Sistema de Alertas Dinámicas:** Cambio automático a color de advertencia al entrar en los últimos 10 segundos.
* **Animaciones CSS Avanzadas:** Temblores de pantalla y efectos de destello simulando la fuerza de un despegue real.
* **Completamente Responsive:** Adaptado perfectamente para dispositivos móviles, tablets y escritorios.

---

##  Estructura del Repositorio

El código fuente está modularizado en tres archivos independientes para mantener buenas prácticas de desarrollo:

```text
├── index.html    # Estructura semántica de la interfaz y footer
├── style.css     # Estilos visuales, gradientes espaciales y animaciones (@keyframes)
└── script.js     # Lógica de intervalos, gestión de DOM y efectos de despegue

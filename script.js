/* ============================================================
   SCRIPT.JS — Página de Regalo
   ============================================================ */

// ============================================================
// INSTRUCCIÓN: CAMBIA ESTA FECHA por la fecha real de su aniversario
// Formato: "YYYY-MM-DDTHH:MM:SS" (Año-Mes-DíaTHora:Minuto:Segundo)
// Ejemplo: si empezaron el 14 de febrero de 2022 a las 8 de la noche:
//          "2022-02-14T20:00:00"
// ============================================================
const START_DATE = "2024-06-19T10:00:00";

// ============================================================
// CONTADOR DE TIEMPO
// ============================================================
function updateCounter() {
  const start = new Date(START_DATE);
  const now = new Date();
  const diff = now - start;

  if (diff < 0) {
    document.getElementById("days").textContent = "000";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours   = Math.floor(totalMinutes / 60);
  const totalDays    = Math.floor(totalHours / 24);

  const seconds = totalSeconds % 60;
  const minutes = totalMinutes % 60;
  const hours   = totalHours % 24;
  const days    = totalDays;

  document.getElementById("days").textContent    = String(days).padStart(3, "0");
  document.getElementById("hours").textContent   = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCounter();
setInterval(updateCounter, 1000);

// ============================================================
// REVEAL ON SCROLL (Intersection Observer)
// ============================================================
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Pequeño delay escalonado para los elementos del mismo grupo
        const siblings = entry.target.parentElement.querySelectorAll(".reveal");
        let delay = 0;
        siblings.forEach((el, i) => {
          if (el === entry.target) delay = i * 80;
        });

        setTimeout(() => {
          entry.target.classList.add("visible");
        }, delay);

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ============================================================
// SMOOTH SCROLL para botones de anchor
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ============================================================
// PARALLAX SUAVE en el hero (solo desktop, evitar en móvil)
// ============================================================
const hero = document.getElementById("hero");

function handleParallax() {
  // Solo en pantallas >= 768px para no afectar rendimiento móvil
  if (window.innerWidth < 768) return;

  const scrollY = window.scrollY;
  const heroHeight = hero.offsetHeight;

  if (scrollY < heroHeight) {
    // Mueve el background a la mitad de velocidad de scroll
    hero.style.backgroundPositionY = `calc(50% + ${scrollY * 0.4}px)`;
  }
}

window.addEventListener("scroll", handleParallax, { passive: true });

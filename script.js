class WebApp {
    constructor() {
        this.progressBar = document.getElementById('progress-bar');
        this.revealElements = document.querySelectorAll('.reveal');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            this.updateProgressBar();
            this.handleScrollReveal();
        });
        this.handleScrollReveal(); // Ejecución inicial
    }

    updateProgressBar() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        this.progressBar.style.width = `${scrolled}%`;
    }

    handleScrollReveal() {
        const triggerBottom = window.innerHeight * 0.85;

        this.revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    }
}

// Instanciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new WebApp();
    console.log("🚀 WebApp Pro inicializada");
});
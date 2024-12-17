document.addEventListener("DOMContentLoaded", () => {
    setInterval(particles, 300);

    function particles() {
        const div = document.querySelector("div");
        const particle = document.createElement("span");

        let size = Math.random() * 50;
        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particle.style.top = Math.random() * (innerHeight - 50) + "px";
        particle.style.left = Math.random() * (innerWidth - 50) + "px";

        
        particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        div.appendChild(particle);

        if (div.childElementCount > 100) div.firstChild.remove();

        let lifetime = 2000 + Math.random() * 1000;
        setTimeout(() => particle.remove(), lifetime);
    }
});

// XP System for Portfolio Interaction
let xp = localStorage.getItem('xp') || 0;

function updateXP() {
    document.getElementById("xp-bar").value = xp;
    if (xp >= 50) document.getElementById("projects").classList.remove("locked");
    if (xp >= 100) document.getElementById("contact").classList.remove("locked");
}

function earnXP(amount) {
    xp = Math.min(100, parseInt(xp) + amount);
    localStorage.setItem('xp', xp);
    updateXP();
}

// Call updateXP on page load
updateXP();

// Adding GSAP animations
gsap.from("h2", { opacity: 0, y: -50, duration: 1, stagger: 0.2 });
gsap.from("button", { opacity: 0, scale: 0.8, duration: 1, delay: 0.5 });

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// Close the menu after tapping a link (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});
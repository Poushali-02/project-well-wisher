document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
    // Get username from session storage (or backend)
    document.getElementById("username").textContent = localStorage.getItem("username") || "User";
});


function showGuideline() {
    let guideline = document.getElementById("guideline-section");
    
    // Show the section with animation
    guideline.style.display = "block";
    
    // Smooth scroll to the guideline section
    guideline.scrollIntoView({ behavior: "smooth" });
    
    // Add animation after a short delay
    setTimeout(() => {
        guideline.classList.add("active");
    }, 200);
}

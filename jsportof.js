// script.js

function showSection(sectionId) {
    // Masquer toutes les sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Afficher la section sélectionnée
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Afficher la section "about" par défaut au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
});
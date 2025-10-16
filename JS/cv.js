const buttons = document.querySelectorAll('.btn-details');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const detail = button.nextElementSibling;

        //  Ferme toutes les autres descriptions
        document.querySelectorAll('.details').forEach(d => {
            if (d !== detail) {
                d.style.display = 'none';
                const otherButton = d.previousElementSibling;
                if (otherButton && otherButton.classList.contains('btn-details')) {
                    otherButton.innerHTML = 'Détails';
                }
            }
        });

        if (detail.style.display === 'none' || detail.style.display === '') {
            /*detail.style.display = 'block';
            button.innerHTML = 'Masquer';*/
            openDetail(detail,button);
        } else {
            /*detail.style.display = 'none';
            button.innerHTML = 'Détails';*/
            closeDetail(detail,button);

        }

        // ---- Fonction pour ouvrir progressivement ----
        function openDetail(detail, button) {
            detail.style.display = 'block';
            detail.style.overflow = 'hidden';
            detail.style.height = '0px';
            button.textContent = 'Masquer';

            const fullHeight = detail.scrollHeight; // hauteur réelle du contenu
            let currentHeight = 0;

            const interval = setInterval(() => {
                if (currentHeight < fullHeight) {
                    currentHeight += 5; // vitesse d’agrandissement (plus petit = plus lent)
                    detail.style.height = currentHeight + 'px';
                } else {
                    clearInterval(interval);
                    detail.style.height = 'auto'; // libère la hauteur
                }
            }, 10); // durée entre chaque étape (10 ms = fluide)
        }

        // ---- Fonction pour fermer progressivement ----
        function closeDetail(detail, button) {
            let currentHeight = detail.scrollHeight;
            button.textContent = 'Détails';

            const interval = setInterval(() => {
                if (currentHeight > 0) {
                    currentHeight -= 5; // vitesse de fermeture
                    detail.style.height = currentHeight + 'px';
                } else {
                    clearInterval(interval);
                    detail.style.display = 'none';
                    detail.style.height = '0px';
                }
            }, 10);
        }
    });
});


const tooltipElements = document.querySelectorAll('.tooltip');


tooltipElements.forEach(el => {
    const tooltipBox = document.createElement('div');
    tooltipBox.className = 'tooltip-box-js';
    tooltipBox.textContent = el.getAttribute('data-tooltip');
    document.body.appendChild(tooltipBox);

    el.addEventListener('mouseenter', () => {
        tooltipBox.style.display = 'block';
        tooltipBox.style.opacity = 1;
    });

    el.addEventListener('mousemove', (e) => {
        // Positionnement du tooltip légèrement à droite et en dessous du curseur
        tooltipBox.style.left = e.pageX + 15 + 'px';
        tooltipBox.style.top = e.pageY + 15 + 'px';
    });

    el.addEventListener('mouseleave', () => {
        tooltipBox.style.display = 'none';
        tooltipBox.style.opacity = 0;
    });
});


// Données compétences + niveau (1 à 5)
const skillsData = [
    { name: "Java", selector: ".compt .tooltip[data-tooltip*='Java']", level: 5 },
    { name: "JavaScript", selector: ".compt .tooltip[data-tooltip*='JavaScript']", level: 4 },
    { name: "Python", selector: ".compt .tooltip[data-tooltip*='Python']", level: 4 },
    { name: "SQL", selector: ".compt .tooltip[data-tooltip*='SQL']", level: 4 },
    { name: "HTML", selector: ".compt .tooltip[data-tooltip*='HTML']", level: 4 },
    { name: "CSS", selector: ".compt .tooltip[data-tooltip*='CSS']", level: 4 },
    { name: "Oracle", selector: ".compt .tooltip[data-tooltip*='Oracle']", level: 4 },
    { name: "MySQL", selector: ".compt .tooltip[data-tooltip*='MySQL']", level: 4 },
    { name: "PostgreSQL", selector: ".compt .tooltip[data-tooltip*='PostgreSQL']", level: 3 },
    { name: "Git", selector: ".compt .tooltip[data-tooltip*='Git']", level: 5 },
    { name: "Docker", selector: ".compt .tooltip[data-tooltip*='Docker']", level: 4 },
    { name: "Gradle", selector: ".compt .tooltip[data-tooltip*='Gradle']", level: 3 },
    { name: "VS Code", selector: ".compt .tooltip[data-tooltip*='VS Code']", level: 5 },
    { name: "IntelliJ IDEA", selector: ".compt .tooltip[data-tooltip*='IntelliJ IDEA']", level: 5 },
    { name: "MATLAB", selector: ".compt .tooltip[data-tooltip*='MATLAB']", level: 4 },
    { name: "RStudio", selector: ".compt .tooltip[data-tooltip*='RStudio']", level: 4 },
    { name: "POO", selector: ".compt .tooltip[data-tooltip*='POO']", level: 5 },
    { name: "Machine Learning", selector: ".compt .tooltip[data-tooltip*='Machine Learning']", level: 4 },
    { name: "NLP", selector: ".compt .tooltip[data-tooltip*='NLP']", level: 3 },
    { name: "Développement web", selector: ".compt .tooltip[data-tooltip*='Développement web']", level: 5 },
    { name: "Analyse de données", selector: ".compt .tooltip[data-tooltip*='Analyse de données']", level: 4 }
];

skillsData.forEach(skill => {
    const span = document.querySelector(skill.selector);
    if (span) {
        // Créer les étoiles
        const stars = document.createElement('span');
        stars.className = 'stars';
        stars.style.color = 'gold';
        stars.style.marginLeft = '5px'; // espace après le texte
        stars.textContent = "★".repeat(skill.level);

        // Insérer les étoiles **après** le span
        span.parentNode.insertBefore(stars, span.nextSibling);
    }
});

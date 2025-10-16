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
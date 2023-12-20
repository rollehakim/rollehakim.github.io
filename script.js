document.addEventListener('DOMContentLoaded', function () {
    const mapSection = document.querySelector('.map');
    const messageBox = document.createElement('div');

    messageBox.className = 'message-box';

    mapSection.addEventListener('click', function (event) {
        const target = event.target;
        if (target.tagName === 'AREA') {
            const title = target.dataset.text || 'Aucun titre défini';
            const description = target.dataset.description || 'Aucune description définie';
            showMessage(title, description);
        }
    });


    function showMessage(title, description) {
        // Remplace les sauts de ligne par des balises <br>
        const formattedDescription = description.replace(/\n/g, '<br>');
        messageBox.innerHTML = `<h2>${title}</h2><p>${formattedDescription}</p>`;
        messageBox.style.display = 'block';
        mapSection.appendChild(messageBox);
    }

});
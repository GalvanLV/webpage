const menuButton = document.getElementById('menu__button');
const menu = document.querySelector('.menu');
const menuContent = document.querySelector('.menu__content');

// menu transformation + button transformation
menuButton.addEventListener('click', function() {
    // if menu is expanded
    if (menu.classList.contains('expanded')) {
        // hide elements
        menuContent.style.transition = 'visibility 0s 0.2s, opacity 0.2s ease-out';
        menuContent.style.visibility = 'hidden';
        menuContent.style.opacity = '0';

        // hide menu with delay
        setTimeout(function() {
            menu.classList.remove('expanded');
            menuButton.classList.remove('open');
        }, 200);
    
    // if menu is compact
    } else {
        // expand menu
        menu.classList.add('expanded');

        setTimeout(function() {
            // show elements with delay
            menuContent.style.transition = 'visibility 0s 0s, opacity 0.2s ease-in';
            menuContent.style.visibility = 'visible';
            menuContent.style.opacity = '1';
        }, 300);

        // change button color
        menuButton.classList.add('open');
    }

    // Cambiar el texto del botón dependiendo del estado
    if (menu.classList.contains('expanded')) {
        menuButton.textContent = 'Close menu';  // Cuando el menú está abierto
    } else {
        menuButton.textContent = 'Open menu';  // Cuando el menú está cerrado
    }
});

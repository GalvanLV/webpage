const menuButton = document.getElementById('menu__button');
const menu = document.querySelector('.menu');
const menuContent = document.querySelector('.menu__content');

// menu transformation + button transformation
menuButton.addEventListener('click', function() {
    // menu is expanded
    if (menu.classList.contains('expanded')) {
        // hide elements
        menuContent.style.transition = 'visibility 0s 0.2s, opacity 0.2s ease-out';
        menuContent.style.visibility = 'hidden';
        menuContent.style.opacity = '0';

        // hide menu
        setTimeout(function() {
            menu.classList.remove('expanded');
        }, 200);

        // change button
        menuButton.textContent = 'Open menu';
        menuButton.classList.remove('selected');
    // menu is not expanded
    } else {
        // expand menu
        menu.classList.add('expanded');

        // show elements
        setTimeout(function() {
            menuContent.style.transition = 'visibility 0s 0s, opacity 0.2s ease-in';
            menuContent.style.visibility = 'visible';
            menuContent.style.opacity = '1';
        }, 200);

        // change button
        menuButton.textContent = 'Close menu';
        menuButton.classList.add('selected');
    }
});

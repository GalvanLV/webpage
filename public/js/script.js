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
            menuContent.style.transition = 'visibility 0s 2s, opacity 0.2s ease-in';
            menuContent.style.visibility = 'visible';
            menuContent.style.opacity = '1';
        }, 200);
        // change button
        menuButton.textContent = 'Close menu';
        menuButton.classList.add('selected');
    }
});

const submenuLinks = document.querySelectorAll('.submenu__link');
const menuLinks = document.querySelectorAll('.menu__link');
const submenu = document.querySelector('.submenu');
const dynamicContent = document.getElementById('dynamicContent');
const main = document.querySelector('.main');

import { contentData } from './submenuContent.js';

// submenu transition
function handleContentTransition(link, contentKey) {
    // start fade main
    main.classList.add('change');

    setTimeout(() => {
        if (contentData[contentKey]) {
            // update content
            dynamicContent.innerHTML = contentData[contentKey] || '<h2>No Content</h2><p>Content not available.</p>';
            // change "selected" link
            submenuLinks.forEach(link => link.classList.remove('selected'));
            menuLinks.forEach(link => link.classList.remove('selected'));
            link.classList.add('selected');
            // hide/move submenu
            submenu.classList.add('change');
            // show new content
            dynamicContent.classList.add('visible');
            // end fade main
            main.classList.remove('change');
        } else {
            // If no matching content key, navigate to the link's href
            window.location.href = link.getAttribute('href');
        }
    }, 200); // Timeout matches the CSS transition duration
}

// submenu links
submenuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const contentKey = this.getAttribute('data-content');
        handleContentTransition(this, contentKey);
    });
});

// menu links
menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        const contentKey = this.getAttribute('href').replace('.html', '');

        // Check if contentKey exists in the data
        if (contentData[contentKey]) {
            e.preventDefault(); // Prevent navigation if content is handled dynamically
            handleContentTransition(this, contentKey);
        } else {
            e.preventDefault(); // Prevent default navigation initially
            main.classList.add('change'); // Start fade-out effect

            // Wait for the duration of the fade-out effect before navigating
            setTimeout(() => {
                // Navigate after the fade-out effect
                window.location.href = this.getAttribute('href');
            }, 200); // Match the transition time
        }
    });
});
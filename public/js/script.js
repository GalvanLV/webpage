import { contentData } from './submenuData.js';

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

// submenu transition
function handleContentTransition(link, contentKey) {
    // start fade main
    submenu.classList.add('change');
    setTimeout(() => {
        if (contentData[contentKey]) {
            // update content
            dynamicContent.innerHTML = contentData[contentKey] || '<h2>No Content</h2><p>Content not available.</p>';
            // change "selected" link
            submenuLinks.forEach(link => link.classList.remove('selected'));
            link.classList.add('selected');
            // show new content
            dynamicContent.classList.add('change');
        } else {
            // if no matching content key, navigate to link href
            window.location.href = link.getAttribute('href');
        }
        // hide/move submenu
        submenu.classList.add('change');
        dynamicContent.classList.add('change');
    }, 200);
    setTimeout(() => {
        dynamicContent.classList.add('change');
    }, 200);
}

const submenuDescriptions = document.querySelectorAll('.submenu__description');

// submenu links
submenuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const contentKey = this.getAttribute('data-content');
        // hide all submenu__description
        handleContentTransition(this, contentKey);
        submenuDescriptions.forEach(description => {
            description.classList.add('change');
        });
    });
});

// menu links
menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        const contentKey = this.getAttribute('href').replace('.html', '');
        // check if contentKey exists
        if (contentData[contentKey]) {
            e.preventDefault();
            handleContentTransition(this, contentKey);
        } else {
            e.preventDefault();
            // fade-out
            main.classList.add('change');
            // wait for fade-out
            setTimeout(() => {
                // go to .html
                window.location.href = this.getAttribute('href');
            }, 200);
        }
    });
});
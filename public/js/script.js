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

const submenuLinks = document.querySelectorAll('.submenu__link');
const submenu = document.querySelector('.submenu');
const dynamicContent = document.getElementById('dynamicContent');
const main = document.querySelector('.main');

// submenu content
const contentData = {
    about: '<h2>About Me</h2><p>This is the about section.</p>',
    experience: '<h2>Experience</h2><p>This is the experience section.</p>',
    skills: '<h2>Skills</h2><p>This is the skills section.</p>',
    projects: '<h2>Projects</h2><p>This is the projects section.</p>',
};

// submenu transition
function handleContentTransition(link, contentKey) {
    // start fade main
    main.classList.add('change');

    setTimeout(() => {
        // update content
        dynamicContent.innerHTML = contentData[contentKey];
        // change "selected" link
        submenuLinks.forEach(link => link.classList.remove('selected'));
        link.classList.add('selected');
        // hide/move submenu
        submenu.classList.add('change');
        // show new content
        dynamicContent.classList.add('visible');
        // end fade main
        main.classList.remove('change');
    }, 300); // Timeout matches the CSS transition duration
}

// submenu links
submenuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const contentKey = this.getAttribute('data-content');
        handleContentTransition(this, contentKey);
    });
});
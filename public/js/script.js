const submenuData = {
    'home': ['about me'],
    'projects': ['origin', 'hasu production', 'Values', 'Careers'],
    'info': ['Consulting', 'Development', 'Design', 'Support'],
    'contact': ['Email', 'Phone', 'Address', 'Social Media']
};

const detailData = {
    'about me': window.aboutMeData,
    
    'origin': window.originData,
    'hasu production': ['Future Outlook', 'Innovation', 'Leadership Goals', 'Community Impact'],
    'Values': ['Integrity', 'Excellence', 'Collaboration', 'Customer Focus'],
    'Careers': ['Job Openings', 'Internships', 'Culture', 'Benefits'],

    'Consulting': ['Strategy', 'Analysis', 'Planning', 'Execution'],
    'Development': ['Web Development', 'Mobile Apps', 'Custom Solutions', 'Maintenance'],
    'Design': ['UI/UX', 'Prototyping', 'Branding', 'Graphics'],
    'Support': ['Technical Assistance', 'Customer Service', 'Knowledge Base', 'FAQs'],

    'Email': ['General Inquiries', 'Support Contact', 'Media Contact', 'Feedback'],
    'Phone': ['Main Line', 'Support Line', 'Sales Contact', 'Emergency Contact'],
    'Address': ['Headquarters', 'Branches', 'PO Box', 'Directions'],
    'Social Media': ['Facebook', 'Twitter', 'LinkedIn', 'Instagram']
};

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el enlace "home" en el menú y le añade la clase "selected"
    const homeLink = document.querySelector('[data-id="home"]');
    homeLink.classList.add('selected');

    // Asegura que el submenu para "home" se genera correctamente
    submenuData['home'].forEach(submenuId => {
        const item = document.createElement('div');
        item.textContent = submenuId;
        item.classList.add('submenu__link');
        item.setAttribute('data-id', submenuId); // Establece el atributo 'data-id'
        item.onclick = () => showDetail(null, submenuId);
        submenu.appendChild(item);
        
        // Añade la clase 'selected' al submenu 'about me'
    });

    // Muestra el detalle de 'about me' automáticamente al cargar la página
    const aboutMeLink = document.querySelector('[data-id="about me"]');
    aboutMeLink.click();
    aboutMeLink.classList.add('selected');
});

// item.onclick = () => showDetail(submenuId);
// showDetail('about me');

const menuButton = document.getElementById('menu__button');
const menu = document.querySelector('.menu');
const menuContent = document.querySelector('.menu__content');

                    //menu expansion + menu button modification
menuButton.addEventListener('click', function() {
    // if is expanded
    if (menu.classList.contains('expanded')) {
        menuContent.classList.toggle('expanded');
        setTimeout(function() {
            menu.classList.toggle('expanded');
        }, 200);
        menuButton.textContent = 'open menu';
        menuButton.classList.remove('selected');
    // if not expanded
    } else {
        menu.classList.toggle('expanded');
        setTimeout(function() {
            menuContent.classList.toggle('expanded');
        }, 200);
        menuButton.textContent = 'close menu';
        menuButton.classList.add('selected');
    }
});

const submenu = document.getElementById('submenu');
const detail = document.getElementById('detail');
const wavesContainer = document.getElementById('waves__container');

                    // submenu visible + menu link modification
function showSubmenu(event, menuId) {   
    // reset both submenu and detail
    submenu.classList.remove('change');
    detail.classList.remove('change');

    detail.innerHTML = '';
    submenu.innerHTML = '';
    submenuData[menuId].forEach(submenuId => {
        const item = document.createElement('div');
        item.textContent = submenuId;
        item.classList.add('submenu__link');
        item.setAttribute('data-id', submenuId);
        item.onclick = (event) => showDetail(event, submenuId);
        submenu.appendChild(item);
    });

    // remove 'selected' from all menu links
    document.querySelectorAll('.menu__link').forEach(link => {
        link.classList.remove('selected');
    });
    // add 'selected' to current menu link
    event.target.classList.add('selected');
    
    // close menu
    menuButton.click();
}

                    // detail visible + submenu link modification
function showDetail(event, submenuId) {
    submenu.classList.add('change');
    detail.classList.add('change');

    detail.innerHTML = '';   



    // Crear el div con la clase 'detail__content'
    const detailContent = document.createElement('div');
    detailContent.classList.add('detail__content');



    if (typeof detailData[submenuId] === 'string') {
        // chain ---> HTML inyection
        detailContent.innerHTML = detailData[submenuId];
    } else {
        // array ---> list
        detailContent.innerHTML = detailData[submenuId]
            .map(detailId => `<div>${detailId}</div>`)
            .join('<br>');
    }



    detail.appendChild(detailContent); // Agregar el div al contenedor principal

    // Forzar la animación de fade-in con un pequeño retraso
    setTimeout(() => {
        detailContent.classList.add('change'); // Activar la clase que hará el fade-in
    }, 500);



    // remove 'selected' from all submenu links
    document.querySelectorAll('.submenu__link').forEach(link => {
        link.classList.remove('selected');
    });
    // add 'selected' to current submenu link
    event.target.classList.add('selected');
}

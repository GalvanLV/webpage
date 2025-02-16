const submenuData = {
    'home': ['about me'],
    'projects': ['Mission', 'Vision', 'Values', 'Careers'],
    'info': ['Consulting', 'Development', 'Design', 'Support'],
    'contact': ['Email', 'Phone', 'Address', 'Social Media']
};

const detailData = {
    'about me': `
    <img src="/assets/images/profile.jpg" alt="profile image" class="about__image">
        <p>
        Galvan Lopez<br><br><br>
        

        Fullstack Web Developer with a strong passion for design, known for my organized and structured approach. My journey into web development has been shaped by a unique blend of experiences in architecture, design, and technology.<br>
        I spent three years immersed in architecture school, where I developed a deep appreciation for structure, aesthetics, and problem-solving. This foundation was further enriched by a year in a design school, followed by another year specializing in game design and development. These diverse experiences laid the groundwork for my true passion: creating clean, functional, and visually appealing digital solutions.<br>
        My most significant milestone came during my time at O'clock School, where I honed my skills as a fullstack web developer. Here, I mastered the art of writing clean, efficient, and maintainable code—a reflection of my innate organizational skills and my belief that well-structured code is the backbone of great development.<br><br>
        
        While I strive for a balanced expertise in both front-end and back-end development, my heart leans towards design and the front-end. I love crafting user experiences that are not only functional but also visually engaging.<br>
        My work is driven by a desire to blend creativity with technical precision, ensuring that every project I undertake reflects both beauty and practicality.<br><br>
        
        Beyond my passion for web development, sports have always been a big part of my life. I've always been an energetic and active person, participating in various sports across different disciplines. I have played team sports such as handball and rugby, as well as water sports like surfing and windsurfing. Additionally, I have a strong love for snow sports, especially skiing and snowboarding, and I have also practiced athletics independently.<br><br>

        Languages have also played a crucial role in my personal growth. I have been learning English since I was a child. In high school, I chose to study French, expanding my linguistic abilities. Beyond formal education, I have had the privilege of traveling extensively across Europe and North America, immersing myself in different cultures and practicing languages. I even spent many summers living with foreign families to further improve my language skills. These experiences shaped my global perspective and adaptability.<br>
        In 2018, I took my international experience a step further by living in London, England, and since 2023, I have been residing in Paris, France. These moves have reinforced my passion for cultural exchange and communication, making me not only a developer with a strong technical and creative foundation but also a global citizen eager to learn and grow.<br><br>

        I would also like to express my gratitude to the following individuals, as their websites have served as inspiration and reference points for creating my own:<br><br>

        
        <a href="https://p5aholic.me/">             Keita Yamada</a><br>
        <a href="https://production-hasu.work/">    Production Hasu</a><br>
        <a href="https://codepen.io/wodniack/">     Antoine Wodniack</a><br>
        <a href="https://brittanychiang.com/">      Brittany Chiang</a><br>
        </p>
    `,
    'Mission': ['Core Purpose', 'Inspiration', 'Objectives', 'Sustainability'],
    'Vision': ['Future Outlook', 'Innovation', 'Leadership Goals', 'Community Impact'],
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
    // Aseguramos que el "home" esté seleccionado al cargar
    const homeLink = document.querySelector('.menu__link[data-id="home"]');
    
    if (homeLink) {
        homeLink.classList.add('selected');
        // Llamamos a showSubmenu como si fuera un clic en home
        showSubmenu({target: homeLink}, 'home');
    }
});

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
        item.onclick = () => showDetail(submenuId);
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
function showDetail(submenuId) {
    // select content
    const submenu = document.getElementById('submenu');
    const detail = document.getElementById('detail');

    setTimeout(() => {    
        detail.innerHTML = '';   
        if (typeof detailData[submenuId] === 'string') {
            // chain ---> HTML inyection
            detail.innerHTML = detailData[submenuId];
        } else {
            // array ---> list
            detail.innerHTML = detailData[submenuId].map(detailId => `<div>${detailId}</div>`).join('<br>');
        }
        detail.style.opacity = '1';  // Hacer visible el contenido
    }, 500);
    
    submenu.classList.add('change');
    detail.classList.add('change');

    // remove 'selected' from all submenu links
    document.querySelectorAll('.submenu__link').forEach(link => {
        link.classList.remove('selected');
    });
    // add 'selected' to current submenu link
    event.target.classList.add('selected');
}
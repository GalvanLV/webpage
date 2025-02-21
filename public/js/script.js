const submenuData = {
    'home': ['about me'],
    'projects': ['o\'rigin', 'coming soon'],
    'info': ['experience', 'skills', 'upcoming', 'contact'],
};

const detailData = {
                    // --- home ---
    'about me':
    `
        <img src="/assets/media/profile.webp" alt="profile image" class="about__image">
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

                    // --- projects ---
    'o\'rigin':
    `
        <h1 class="project__title">O'rigin</h1>

        <p class="project__slogan">
            Pour découvrir et préserver<br>
            l'histoire de votre famille
        </p>
        <br><br><br><br>

        <p>
            O'rigin is a project developed by AMADI Moustoifa (Product Owner), DALLARI Nicolas (Lead Developer), MICHEL Anthony (Scrum Master), and myself, Lopez Galvan (Git Master), as the final project of our Full-Stack Web Developer training at O’clock.<br>
            The project was built using HTML, CSS, JavaScript, and PHP, with Symfony as the core framework. It was developed over the course of one month, structured into weekly sprints to assess progress, evaluate completed and pending objectives, reanalyze the situation, and allocate tasks for the following week.<br>
            Throughout the development process, we maintained constant communication, working collaboratively and keeping each other updated. At the end of each day, we held team meetings to review individual progress and align our efforts.<br>
            Our workflow was structured as follows:<br>
            - Week 1: Brainstorming, wireframing, defining user stories (both for the client and the back office), designing the user flow, database modeling (MCD), route planning, and drafting the project specifications.<br>
            - Weeks 2 & 3: Development phase—building the platform and delivering a Minimum Viable Product (MVP).<br>
            - Week 4: Debugging, refining functionalities, and ensuring a polished final version.
            <br><br>
        </p>

        <h3 class="selected">demo</h3>
        <div class="project__video">
            <iframe
                src="https://www.youtube.com/embed/C17qhryJjkE" 
                title="O'rigin - Demo" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        <br><br>

        <h3 class="selected">homepage</h3>
        <img src="assets/media/origin/main.webp" alt="image" class="project__image">
        <img src="assets/media/origin/arbres_du_jour.webp" alt="image" class="project__image">
        <br><br>
        
        <h3 class="selected">connexion & profil</h3>
        <img src="assets/media/origin/connexion.webp" alt="image" class="project__image">
        <img src="assets/media/origin/senregistrer.webp" alt="image" class="project__image">
        <img src="assets/media/origin/profil.webp" alt="image" class="project__image">
        <img src="assets/media/origin/arbre_visualiser.webp" alt="image" class="project__image">
        <img src="assets/media/origin/arbre_modifier.webp" alt="image" class="project__image">
        <br><br>

        <h3 class="selected">back office</h3>
        <img src="assets/media/origin/gestion_utilisateurs.webp" alt="image" class="project__image">
        <img src="assets/media/origin/gestion_arbres.webp" alt="image" class="project__image">
        <br><br>
    `,
    'coming soon': 
    `
        <h2 class="project__title">Property Management</h2>
        <br><br>
        <p>
            This project involves the development of an application designed to efficiently manage property-owned apartments.<br>
            The system will feature an interface that allows property owners to access and manage their apartment data using CRUD operations (Create, Read, Update, Delete). In addition, the application will be backed by a comprehensive database that stores critical information, including tenant details, apartment specifications, monthly receipts, expenses, repairs, and contracts, ensuring seamless management and tracking of all relevant property-related data.<br>
            One of the future features to be implemented is the ability to automatically generate monthly receipts based on the data stored in the database, which will take into account applicable taxes.
        </p>
        <br><br><br><br>

        <h2 class="project__title">Repair & Installation Company</h2>
        <br>
        <p>
            This project involves the development of a website for a client who has founded a company specializing in electrical and plumbing repairs and installations. The website aims to showcase the company’s expertise, providing potential customers with easy access to key information about the services offered.<br>
            While some design details are still being finalized, the core sections of the website will include the following: a Home Page, which will serve as an introduction to the business and highlight its main offerings; a Gallery of Previous Work, where visitors can view a portfolio of completed projects, showcasing the company’s skill and professionalism; and a Contact Page, providing essential contact information, an inquiry form, and location details for easy customer communication.<br><br>

            This website will serve as an essential tool for establishing an online presence and promoting the company’s services to a broader audience.<br>
            As the project progresses, additional features may be incorporated to further enhance the user experience and offer more in-depth information about the company’s repair and installation solutions.
        </p>
        <br><br><br><br>

        <h2 class="project__title">Task Management</h2>
        <br>
        <p>
            This project involves the development of a simple task management application, designed to help users organize their tasks effectively. The application will offer a basic interface where users can view and manage their tasks either through a calendar layout or a straightforward task list. It will include essential CRUD (Create, Read, Update, Delete) functionality, allowing users to easily create new tasks, view their existing tasks, modify details of ongoing tasks, and delete tasks that are no longer needed. The goal is to create a user-friendly tool for managing daily tasks and improving productivity, with a focus on simplicity and efficiency.
            <br><br><br><br>
        </p>
        <br><br><br><br>
    `,

                    // --- info ---
    'experience': 
    `
        <h2>pending to fill</h2>
    `,
    'skills': 
    `
        <h2>frontend development</h2>
        <ul>
            <li><p class="skill__li">HTML5, CSS3 & RESPONSIVE WEB DESIGN</p> Modern and adaptive web interfaces.</li>
            <li><p class="skill__li">ADVANCED CSS</p> Styles, animations, and advanced transitions.</li>
            <li><p class="skill__li">JAVASCRIPT & DOM</p> Web interactivity, event handling, and form validation.</li>
            <li><p class="skill__li">BOOTSTRAP</p> Responsive design and rapid prototyping.</li>
            <li><p class="skill__li">GIT</p> Version control and collaboration in development environments.</li>
        </ul><br>

        <h2>backend development</h2>
        <ul>
            <li><p class="skill__li">PHP & OOP</p> Web application development with server logic and object-oriented programming.</li>
            <li><p class="skill__li">FORM MANAGEMENT</p> Secure processing and validation of user data.</li>
            <li><p class="skill__li">CRUD & WEB SECURITY</p> Database management, security best practices, and permission handling.</li>
            <li><p class="skill__li">API & AJAX</p> Asynchronous interactions with servers.</li>
        </ul><br>

        <h2>databases</h2>
        <ul>
            <li><p class="skill__li">SQL & RELATIONAL DATABASES</p> Design, querying, and modeling of SQL databases.</li>
            <li><p class="skill__li">PDO (PHP DATA OBJECTS)</p> Secure database connections with PDO in PHP.</li>
            <li><p class="skill__li">PROJECT MANAGEMENT & DBMS</p> Database administration and collaboration on projects.</li>
        </ul><br>

        <h2>software architecture</h2>
        <ul>
            <li><p class="skill__li">MVC</p> Design and development of web applications.</li>
            <li><p class="skill__li">PHP DEPENDENCIES & COMPOSER</p> Library and dependency management.</li>
            <li><p class="skill__li">SEO & URL REWRITING</p> Web search engine optimization.</li>
        </ul><br>

        <h2>methodologies & quality control</h2>
        <ul>
            <li><p class="skill__li">AGILE METHODS (SCRUM/KANBAN)</p> Project management using agile methodologies.</li>
            <li><p class="skill__li">CODE QUALITY CONTROL</p>Clean, efficient, and maintainable code through best practices and reviews.</li>
        </ul><br>

        <h2>systems & content management</h2>
        <ul>
            <li><p class="skill__li">CMS (WORDPRESS)</p> Customization and management of web content.</li>
            <li><p class="skill__li">HOSTING & DEPLOYMENT</p> Environment configuration and project deployment.</li>
        </ul><br>

        <h2>backend frameworks</h2>
        <ul>
            <li><p class="skill__li">SYMFONY</p> Web application development with the framework.</li>
            <li><p class="skill__li">MICRO-FRAMEWORKS</p> Development of lightweight and fast applications.</li>
            <li><p class="skill__li">ORM</p> Data mapping between the database and objects in the code.</li>
        </ul>
    `,
    'upcoming': 
    `
        <h2 class="project__title">React.js</h2>
        <br>
        <p>
            Although my specialization has been in Symfony, I am eager to acquire new skills in React.js to strengthen my frontend development knowledge. To achieve this, I am currently undertaking two courses. One is a 49-hour course offered by O'clock School and the second is a comprehensive 55-hour course on Udemy.<br><br>

            At O'clock School, I will gain a solid foundation in the React.js ecosystem, learning the essential principles and tools that drive modern frontend development. This course provides a comprehensive introductio.<br>
            The 55-hour course on Udemy not only reinforces the fundamentals I will learn at O'clock but also will dive deeper into advanced concepts such as React Hooks and the MERN stack (MongoDB, Express, React, Node.js).<br><br>

            By combining both courses, I aim to strengthen my frontend capabilities and gain practical experience with React.js and related technologies.
            <br><br><br><br>
        </p>
        <br><br><br><br>
    `,
    'contact':
    `
        <!-- mail -->
        <a href="mailto:lopezvalderrama.galvan@gmail.com" class="submenu__link">mail</a><br>
        <!-- linkedin -->
        <a href="https://www.linkedin.com/in/galvan-lopez-valderrama-2737342b5/" class="submenu__link" target="_blank" rel="noopener noreferrer">linkedin</a><br>
        <!-- github -->
        <a href="https://github.com/GalvanLV" class="submenu__link" target="_blank" rel="noopener noreferrer">github</a><br>
        <!-- instagram -->
        <a href="https://www.instagram.com/sadgalvan/" class="submenu__link" target="_blank" rel="noopener noreferrer">instagram</a><br>
    `,

};

                    //  page loaded with home selected + about me selected + about me detail
document.addEventListener('DOMContentLoaded', function() {
    // add selected to home
    const homeLink = document.querySelector('[data-id="home"]');
    homeLink.classList.add('selected');

    // get home submenu content
    submenuData['home'].forEach(submenuId => {
        const item = document.createElement('div');
        item.textContent = submenuId;
        item.classList.add('submenu__link');
        item.setAttribute('data-id', submenuId);
        item.onclick = () => showDetail(null, submenuId);
        submenu.appendChild(item); 
    
        // show about me content and add selected
    const aboutMeLink = document.querySelector('[data-id="about me"]');
    aboutMeLink.click();
    aboutMeLink.classList.add('selected');
    });
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
    // submenu and detail width
    submenu.classList.remove('change');
    detail.classList.remove('change');
    // empty submenu and detail content
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
    // submenu and detail width
    submenu.classList.add('change');
    detail.classList.add('change');
    // empty detail content
    detail.innerHTML = '';

    // create div class detail__content
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

    // add detail content
    detail.appendChild(detailContent);
    // fade-in with width transition delay
    setTimeout(() => {
        detailContent.classList.add('change');
    }, 500);
    // remove 'selected' from all submenu links
    document.querySelectorAll('.submenu__link').forEach(link => {
        link.classList.remove('selected');
    });
    // add 'selected' to current submenu link
    event.target.classList.add('selected');
}


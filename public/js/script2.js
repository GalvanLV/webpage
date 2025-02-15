const submenuData = {
    'home': ['Overview', 'Team', 'History', 'News'],
    'projects': ['Mission', 'Vision', 'Values', 'Careers'],
    'info': ['Consulting', 'Development', 'Design', 'Support'],
    'contact': ['Email', 'Phone', 'Address', 'Social Media']
};

const detailData = {
    'Overview': ['Introduction', 'Timeline', 'Achievements', 'Goals'],
    'Team': ['CEO', 'CTO', 'Developers', 'Designers'],
    'History': ['Foundation', 'Milestones', 'Growth', 'Future Plans'],
    'News': `
        <h2>Latest News</h2>
        <p>Welcome to our news section. Here you'll find the latest updates and stories.</p>
        <ul>
        <li><strong>Event 1:</strong> Launch of our new product.</li>
        <li><strong>Event 2:</strong> Company reaches 1 million users.</li>
        <li><strong>Event 3:</strong> New office opening in New York.</li>
        </ul>
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
    const clickedLink = event.target;
    clickedLink.classList.add('selected');
    
    // close menu
    menuButton.click();

}

                    // detail visible + submenu link modification
function showDetail(submenuId) {
    const submenu = document.getElementById('submenu');
    const detail = document.getElementById('detail');
    
    detail.innerHTML = '';   
    if (typeof detailData[submenuId] === 'string') {
        // chain ---> HTML inyection
        detail.innerHTML = detailData[submenuId];
    } else {
        // array ---> list
        detail.innerHTML = detailData[submenuId].map(detailId => `<div>${detailId}</div>`).join('<br>');
    }
    
    submenu.classList.add('change');
    detail.classList.add('change');

    // remove 'selected' from all submenu links
    document.querySelectorAll('.submenu__link').forEach(link => {
        link.classList.remove('selected');
    });
    // add 'selected' to current submenu link
    const clickedLink = event.target;
    clickedLink.classList.add('selected');
}
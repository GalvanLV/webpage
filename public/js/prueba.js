const submenuData = {
    'home': ['Overview', 'Team', 'History', 'News'],
    'about': ['Mission', 'Vision', 'Values', 'Careers'],
    'services': ['Consulting', 'Development', 'Design', 'Support'],
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


function showSubmenu(menuId) {
  const submenu = document.getElementById('submenu');
  const detail = document.getElementById('detail');
  
  // Reset both submenu and detail
  submenu.classList.remove('half-width');
  detail.classList.remove('visible');
  detail.innerHTML = '';

  submenu.innerHTML = '';
  submenuData[menuId].forEach(submenuId => {
    const item = document.createElement('div');
    item.textContent = submenuId;
    item.classList.add('submenu-item');
    item.onclick = () => showDetail(submenuId);
    submenu.appendChild(item);
  });
}

function showDetail(submenuId) {
    const submenu = document.getElementById('submenu');
    const detail = document.getElementById('detail');
    
    detail.innerHTML = '';

    if (typeof detailData[submenuId] === 'string') {
        // Inyección de HTML si el contenido es una cadena
        detail.innerHTML = detailData[submenuId];
    } else {
        // Generación de lista si el contenido es un array
        detail.innerHTML = detailData[submenuId].map(detailId => `<div>${detailId}</div>`).join('<br>');
    }
    
    submenu.classList.add('half-width');
    detail.classList.add('visible');
}
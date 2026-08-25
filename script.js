// ১. স্কিলগুলোর Array
const mySkills = ["HTML5", "CSS3", "JavaScript (Basic)", "Responsive Design"];

// ২. প্রজেক্টের Array (পরে নতুন প্রজেক্ট এলে এখানে Object আকারে যোগ করবেন)
const myProjects = [
    {
        title: "Upcoming Project 1",
        description: "প্রজেক্টের বিবরণ পরে লিখবেন।"
    },
    {
        title: "Upcoming Project 2",
        description: "প্রজেক্টের বিবরণ পরে লিখবেন।"
    }
];

// HTML-এ স্কিলগুলো লোড করার ফাংশন
function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    mySkills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'card';
        skillCard.innerHTML = `<h3>${skill}</h3>`;
        skillsContainer.appendChild(skillCard);
    });
}

// HTML-এ প্রজেক্টগুলো লোড করার ফাংশন
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    myProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// পেজ লোড হলে ফাংশনগুলো কল হবে
window.onload = () => {
    loadSkills();
    loadProjects();
};
// Hamburger Menu Toggle Logic
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

// ৩ দাগের বাটনে ক্লিক করলে মেনু খুলবে/বন্ধ হবে
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// মেনুর যেকোনো লিঙ্কে ক্লিক করলে মেনুটি অটোমেটিক বন্ধ হয়ে যাবে
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

// ডিসপ্লের যেকোনো জায়গায় ক্লিক করলে সাইডবার বন্ধ হওয়ার লজিক
window.addEventListener('click', (e) => {
    // যদি মেনু খোলা থাকে এবং ক্লিক করা জায়গাটি মেনু কিংবা মেনু টগল (☰ বাটন) এর ভেতরে না হয়
    if (navList.classList.contains('active')) {
        if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
            navList.classList.remove('active');
        }
    }
});
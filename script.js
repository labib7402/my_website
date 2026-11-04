// ১. স্কিলগুলোর Array
const mySkills = ["HTML5", "CSS3", "JavaScript (Basic)", "Responsive Design"];

// ২. প্রজেক্টের Array (পরে নতুন প্রজেক্ট এলে এখানে Object আকারে যোগ করবেন)
const myProjects = [
    {
        title: "WINTER SHOP BD",
        src: "https://winter-shop-sjoi.vercel.app/"
    },
    {
        title: "Upcoming Project 2",
        description: "প্রজেক্টের বিবরণ পরে লিখবেন।",
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
    const url = "https://winter-shop-sjoi.vercel.app/"
    myProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'card';
        projectCard.innerHTML = `
            <h2>${project.title}</h2>
            <a href=${project.src}>My website</a>
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

// মেনু টগল বাটনে ক্লিক করলে মেনু খুলবে/বন্ধ হবে এবং আইকন বদলাবে
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // যদি মেনু active থাকে তাহলে ক্রস (×) দেখাবে, নাეთরে থ্রি-ডট (☰) দেখাবে
    if (navList.classList.contains('active')) {
        menuToggle.innerHTML = '&times;';
    } else {
        menuToggle.innerHTML = '&#9776;';
    }
});

// মেনুর যেকোনো লিঙ্কে ক্লিক করলে মেনু বন্ধ হয়ে যাবে এবং আইকন ঠিক হয়ে যাবে
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuToggle.innerHTML = '&#9776;';
    });
});

// ডিসপ্লের যেকোনো জায়গায় ক্লিক করলে সাইডবার বন্ধ হওয়ার লজিক
window.addEventListener('click', (e) => {
    if (navList.classList.contains('active')) {
        if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
            navList.classList.remove('active');
            menuToggle.innerHTML = '&#9776;';
        }
    }
});

// ডিসপ্লের যেকোনো জায়গায় ক্লিক করলে সাইডবার বন্ধ হওয়ার লজিক
window.addEventListener('click', (e) => {
    if (navList.classList.contains('active')) {
        if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
            navList.classList.remove('active');
        }
    }
});
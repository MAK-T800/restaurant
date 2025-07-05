import loadHome from './homepage';
import loadMenu from './menu';
import loadContact from './contact';

console.log('Bella Vista Restaurant website is running!');

const content = document.getElementById('content');

function clearContent() {
    content.innerHTML = '';
}

function setActiveTab(activeButton) {
    // Remove active class from all buttons
    document.querySelectorAll('nav button').forEach(btn => {
        btn.classList.remove('active');
    });
    // Add active class to clicked button
    activeButton.classList.add('active');
}

// Load home page initially
clearContent();
loadHome();

// Get tab buttons
const homeTab = document.getElementById('home-tab');
const menuTab = document.getElementById('menu-tab');
const contactTab = document.getElementById('contact-tab');

// Add event listeners for tab switching
homeTab.addEventListener('click', () => {
    clearContent();
    setActiveTab(homeTab);
    loadHome();
});

menuTab.addEventListener('click', () => {
    clearContent();
    setActiveTab(menuTab);
    loadMenu();
});

contactTab.addEventListener('click', () => {
    clearContent();
    setActiveTab(contactTab);
    loadContact();
});

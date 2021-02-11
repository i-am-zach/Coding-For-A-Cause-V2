let navOpen = false;

const navMenu = document.getElementById('navMenu');
const navButton = document.getElementById('navToggleButton');
const navCloseIcon = document.getElementById('navCloseIcon');
const navOpenIcon = document.getElementById('navOpenIcon');

function toggleNavbar() {
    console.log("Toggle navbar!");
    if(navOpen) {
        // Close the navbar
        navMenu.classList.add('hidden');
        navOpen = !navOpen;

        navOpenIcon.classList.remove('hidden');
        navCloseIcon.classList.add('hidden');
    } else {
        // Open the navbar
        navMenu.classList.remove('hidden');
        navOpen = !navOpen;

        navOpenIcon.classList.add('hidden');
        navCloseIcon.classList.remove('hidden');
    }
}

navButton.onclick = (_) => toggleNavbar();

console.log(navButton);
console.log("CFC.js");
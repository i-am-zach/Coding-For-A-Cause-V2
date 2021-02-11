// NAVBAR LOGIC
let navOpen = false;

const navMenu = document.getElementById('navMenu');
const navButton = document.getElementById('navToggleButton');
const navCloseIcon = document.getElementById('navCloseIcon');
const navOpenIcon = document.getElementById('navOpenIcon');

function toggleNavbar() {
    console.log("Toggle navbar!");
    if(navOpen) {
        // Close the navbar
        navOpen = !navOpen;

        navMenu.classList.add('hidden');
        navMenu.classList.remove('flex');

        navOpenIcon.classList.remove('hidden');
        navCloseIcon.classList.add('hidden');
    } else {
        // Open the navbar
        navOpen = !navOpen;

        navMenu.classList.remove('hidden');
        navMenu.classList.add('flex');

        navOpenIcon.classList.add('hidden');
        navCloseIcon.classList.remove('hidden');
    }
}

navButton.onclick = (_) => toggleNavbar();
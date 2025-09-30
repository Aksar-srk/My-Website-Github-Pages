document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('header ul');

    // Toggles the mobile navigation menu
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Close the menu when a link is clicked (for better mobile UX)
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });
});
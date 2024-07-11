document.addEventListener('DOMContentLoaded', () => {
    const navbarBurgers = Array.from(document.querySelectorAll('.navbar-burger'));
    if (navbarBurgers.length > 0) {
        navbarBurgers.forEach(burger => {
            burger.addEventListener('click', () => {
                const target = burger.dataset.target;
                const menu = document.getElementById(target);
                burger.classList.toggle('is-active');
                menu.classList.toggle('is-active');
            });
        });
    }
});
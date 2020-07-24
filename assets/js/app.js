// Navbar button hide and show

let navOpen = document.querySelector('.navbar-open');
let navClose = document.querySelector('.navbar-close');


function toggleBtn() {
    if (navClose.classList.contains('d-none')) {
        navClose.classList.remove('d-none');
        navOpen.classList.add('d-none');
    } else {
        navClose.classList.add('d-none');
        navOpen.classList.remove('d-none');
    }
}


navOpen.addEventListener('click', toggleBtn);
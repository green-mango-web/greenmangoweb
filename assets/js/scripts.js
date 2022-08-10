const hamburger = document.querySelector('.hamburger');
const dd = document.querySelector('.dropdown');

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    dd.classList.toggle('is-vis')
});

// dropdown.addEventListener('click', function () {
//     this.classList.toggle('is-vis');
// });

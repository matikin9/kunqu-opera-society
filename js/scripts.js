document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-link').forEach(function(nav_link) {
        nav_link.addEventListener('click', function(event) {
            document.querySelector('.nav-link.active').classList.remove('active');
            nav_link.classList.add('active');
        });
    });

    let myCarouselElement = document.querySelector('#carouselPhotos');

    let carousel = new bootstrap.Carousel(myCarouselElement);
});


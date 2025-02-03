document.addEventListener('DOMContentLoaded', function () {
    // Lazy Loading of Images
    const images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        // Add more images here
    ];

    const galleryContainer = document.querySelector('.gallery-container');
    images.forEach(src => {
        const img = document.createElement('img');
        img.setAttribute('data-src', src);
        img.setAttribute('alt', 'Gallery Image');
        img.classList.add('lazy');
        galleryContainer.appendChild(img);
    });

    const lazyLoadImages = () => {
        const lazyImages = document.querySelectorAll('.lazy');
        lazyImages.forEach(img => {
            if (img.getBoundingClientRect().top <= window.innerHeight) {
                img.src = img.getAttribute('data-src');
                img.classList.remove('lazy');
            }
        });
    };

    window.addEventListener('scroll', lazyLoadImages);
    lazyLoadImages();

    // Modal for Image Enlargement
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close-modal');

    galleryContainer.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() === 'img') {
            modal.style.display = 'flex';
            modalImg.src = e.target.src;
        }
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Form Validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('All fields are required.');
        } else {
            alert('Message sent successfully!');
            form.reset();
        }
    });
});

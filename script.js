// Smooth Scrolling for Navbar Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-opacity-75', 'shadow');
    } else {
        navbar.classList.remove('bg-opacity-75', 'shadow');
    }
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));

// Form Validation and Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let name = document.querySelector('input[placeholder="Your Name"]').value.trim();
    let email = document.querySelector('input[placeholder="Your Email"]').value.trim();
    let message = document.querySelector('textarea').value.trim();
    
    if (!name || !email || !message) {
        alert('Please fill out all fields before submitting.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
});

// Email Validation Function
function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

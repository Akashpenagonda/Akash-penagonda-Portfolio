// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Animate timeline items on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

function showTimelineItems() {
    const triggerBottom = window.innerHeight / 5 * 4;

    timelineItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
            item.classList.add('active');
            // Adding delay for each item for staggered animation effect
            item.style.transitionDelay = `${index * 0.2}s`;
        }
    });
}

window.addEventListener('scroll', showTimelineItems);
showTimelineItems(); // Trigger on load

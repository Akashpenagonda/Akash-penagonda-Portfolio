var typed = new Typed(".text", {
    strings: ["FrontEnd Developer","Python Full Stack Developer", "Editor", ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});


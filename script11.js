document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const scrollElements = document.querySelectorAll(".scroll-reveal");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= 
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutOfView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutOfView(el)) {
            hideScrollElement(el);
        }
    });
}

window.addEventListener("scroll", () => { 
    handleScrollAnimation();
});

document.addEventListener("DOMContentLoaded", () => {
    handleScrollAnimation();
});

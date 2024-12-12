import gsap from 'gsap';

//gsap.to('.gradient-ball', { scale: 1.2, duration: 5, repeat: -1, yoyo: true, stagger: .7 });

const tl = gsap.timeline({ repeat: -1,});

tl.to('.blue', { x: -600, duration: 3, ease: "sine.inOut",})
tl.to('.orange', { x: 600, duration: 3,ease: "sine.inOut",}, '<')
tl.set('.blue', { zIndex: -3,})
tl.to('.blue', { x: 0, duration: 5, ease: "sine.inOut",})
tl.to('.orange', { x: 0, duration: 5, ease: "sine.inOut" }, '<')

tl.timeScale(.5);

gsap.from('.hero h1', {duration: .7, y: -25, opacity: 0, ease: "power1.Out", delay: 0,});
gsap.from('.hero-text p', {duration: .7, y: -25, opacity: 0, ease: "power1.Out", delay: .5,});
gsap.from('.header', {duration: 1, y: -100, opacity: 0, ease: "power1.Out", delay: 1,});

//gsap.from('.textfield-container', {duration: 1, y: -25, opacity: 0, ease: "power1.Out", delay: 1.3,});
gsap.from('.textfield-container', {duration: .5, scale: 0, ease: "bounce", delay: 1.3,});


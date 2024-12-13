import gsap from 'gsap';
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);


const tl = gsap.timeline({ repeat: -1,});

tl.to('.blue', { x: -600, duration: 3, ease: "sine.inOut",})
tl.to('.orange', { x: 600, duration: 3,ease: "sine.inOut",}, '<')
tl.set('.blue', { zIndex: -4,})
tl.to('.blue', { x: 0, duration: 5, ease: "sine.inOut",})
tl.to('.orange', { x: 0, duration: 5, ease: "sine.inOut" }, '<')

tl.timeScale(.5);

gsap.from('.hero h1', {duration: .7, y: -25, opacity: 0, ease: "power1.Out", delay: 0,});
gsap.from('.hero-text p', {duration: .7, y: -25, opacity: 0, ease: "power1.Out", delay: .5,});
gsap.from('.header', {duration: 1, y: -100, opacity: 0, ease: "power1.Out", delay: 1,});

gsap.from('.textfield-container', {duration: .5, scale: 0, ease: "bounce", delay: 1.3,});

const follower = document.querySelector(".cursor-black-ball");
Observer.create({
    target: window,
    type: "pointer", 
    onMove: (e) => {
        // Animate the follower element to the new mouse position
        gsap.to(follower, {
          duration: .7,  // Duration of the animation
          x: e.x - follower.offsetWidth / 2,  // Center the follower on the mouse
          y: e.y - follower.offsetHeight / 2,  // Center the follower on the mouse
        })
    },
  });


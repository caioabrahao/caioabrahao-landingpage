import gsap from 'gsap';
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(Observer);


const tl = gsap.timeline({ repeat: -1,});

tl.to('.blue', { x: -600, duration: 3, ease: "sine.inOut",})
tl.to('.orange', { x: 600, duration: 3,ease: "sine.inOut",}, '<')
tl.set('.blue', { zIndex: -4,})
tl.to('.blue', { x: 0, duration: 5, ease: "sine.inOut",})
tl.to('.orange', { x: 0, duration: 5, ease: "sine.inOut" }, '<')

tl.timeScale(.5);
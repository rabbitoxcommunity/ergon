gsap.registerPlugin(ScrollTrigger)
const scrollDivs = document.querySelectorAll(".scroll-div");

const tl = gsap.timeline({
  defaults: { duration: 1, ease: 'none' },
  scrollTrigger: {
    trigger: ".text-anim",
    pin: true,
    start: 'top top',
    end: '+=3000',
    scrub: 0.3,
    onUpdate(self) {
      if (self.direction === -1 && self.progress > 0.85) {
        self.scroll(self.start);
      }
      // console.log(self.progress);
    }
  }
}).to('.sliderWrap h1', {
  autoAlpha: 1,
  // they should appear all within 1 sec = total duration
  duration: 0.015,
  stagger: 0.25
}, 0)
  .to('.sliderWrap h1', {
    autoAlpha: 0,
    duration: 0.015,
    stagger: 0.25
  }, 0.12)


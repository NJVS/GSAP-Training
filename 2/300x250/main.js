document.addEventListener('DOMContentLoaded', () => {

  // options
  const showFrame = { autoAlpha: 1, duration: 0.1 }
  const show = { autoAlpha: 0, duration: 0.3 }; // reversed
  const showText = { autoAlpha: 0, y: 10, stagger: 0.1, duration: 0.3 } // reverse 
  const hide = { autoAlpha: 0, delay: 2 };
  const delay = '<+0.5';
  const textDelay = '+=1';

  // animate
  const mainTimeline = gsap.timeline();

  mainTimeline
    // frame 1
    .to('.frame1', showFrame, '1')
    .to('.f1_seal', { scale: 1.1, x: -10, y: -10, duration: 4 })
    .from('.f1_bg', { scale: 1.5, x: -10, y: -10, duration: 4 }, '<')
    .from('.f1_text', { autoAlpha: 0, stagger: 0.5, duration: 0.1 }, delay)

    // frame 2
    .to('.frame2', showFrame)
    .from('.f2_text1', showText, delay)
    .to('.f2_text1', hide)
    .from('.f2_text2', showText, delay)
    .to('.frame2 > *:not(:first-child)', hide, delay)

    // frame 3
    .to('.frame3', showFrame)
    .from('.f3_logo', show)
    .from('.f3_text', showText, delay)
    .from('.f3_btn', show, delay)

})
document.addEventListener('DOMContentLoaded', () => {

  // timeline and opts
  const mainTimeline = gsap.timeline();
  const bannerSize = document.querySelector('#banner').offsetWidth,
        distance = bannerSize * 2,
        nextFrameDelay = 1.75,
        nextFrame = { x: distance,duration: 0.3, ease: 'linear', delay: nextFrameDelay },
        showRibbon = { x: 0, ease: 'linear', duration: 0.2 }

  // pre-set
  mainTimeline
    .set('.main_logo', { autoAlpha: 0 })
    .set('.frame1 .ribbon', { x: '-100%' })
    .set('.frame2 .ribbon', { x: '-100%' })
    .set('.frame5 .ribbon', { x: '-100%' })


  // animate
  mainTimeline
    // common
    .to('#banner', { autoAlpha: 1 }, 1)
    .to('.main_logo', { autoAlpha: 1, duration: 0.3 })
    // frame 1
    .to('.frame1 .ribbon', showRibbon)
    .to('.frame1 rect', nextFrame)
    // frame 2
    .to('.frame2 .ribbon', showRibbon, '<=0.1')
    .to('.frame2 rect', nextFrame)
    // frame 3
    .to('.frame3 rect', nextFrame)
    // frame 4
    .to('.frame4 rect', nextFrame)
    // frame 5
    .to('.frame5 .ribbon', showRibbon, '<=0.1')
});
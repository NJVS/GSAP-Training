document.addEventListener('DOMContentLoaded', () => {

  const mainTimeline = gsap.timeline();

  // set
  mainTimeline
    .set('.main_logo', { autoAlpha: 0 })
    .set('.frame:not(.frame3, .frame4) .ribbon', { x: '-100%' })

  // add
  mainTimeline
    // frame1 in
    .to('#banner', { autoAlpha: 1, delay: 0.75 })
    // logo in
    .to('.main_logo', {autoAlpha: 1})
    // frame1 ribbon in
    .to('.frame1 .ribbon', { x: 0, ease: 'power4.out' })
    // frame1 out
    .to('#frame1_mask rect', 0.75, { x: '115%', ease: 'power4.in' }, '+=1.25')
    // frame2 ribbon in
    .to('.frame2 .ribbon', 0.5, { x: 0, ease: 'power4.out' },)
    // frame2 out
    .to('#frame2_mask rect', 0.75, { x: '115%', ease: 'power4.in' }, '+=1.25')
    // frame3 out
    .to('#frame3_mask rect', 0.75, { x: '115%', ease: 'power4.in' }, '+=1.75')
    // frame4 out
    .to('#frame4_mask rect', 0.75, { x: '115%', ease: 'power4.in' }, '+=1.75')
    // frame4 ribbon in
    .to('.frame5 .ribbon', 0.5, { x: 0, ease: 'power4.out' })
})
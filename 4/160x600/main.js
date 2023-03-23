document.addEventListener('DOMContentLoaded', () => {

  const mainTimeline = gsap.timeline({
    paused: true,
  });

  // sets
  mainTimeline
    .set('#banner', { autoAlpha: 0 })
    .set('.text image', { autoAlpha: 0, y: 20 })
    .set('.rect-top rect', { y: '-100%' })
    .set('.specialoffer rect', { autoAlpha: 0 })
    .set('.specialoffer .border-left', { x: 66, scaleY: 0.1 })
    .set('.specialoffer .border-right', { x: -66, scaleY: 0.1 })
    .set('.specialoffer image', { scale: 0, transformOrigin: "50% 50%" })
    .set('.button image', { autoAlpha: 0 })

  // add
  mainTimeline
    .to('#banner', { autoAlpha: 1, delay: 1 })
    .add(f1Timeline, '+=0')
    .add(f2Timeline, '+=3.5')
    .add(f3Timeline, '+=3.5')
    .add(f4Timeline, '+=3.5')

  // play
  mainTimeline.play()
})



// OPTS
const rectSpeed = 0.75
const rectStagger = 0.1;
const rectYPositions = ['80.5%', '74.5%', '68.5%']
const rectInOutProps = {
  y: index => rectYPositions[index],
  stagger: rectStagger,
  ease: 'power4.inOut'
}
const rectTopProps = {
  y: 0,
  stagger: rectStagger,
  delay: 0.75
}
const textProps = {
  y: 0,
  stagger: 0.2,
  autoAlpha: 1
}
const frameOutProps = {
  y: '100%',
  stagger: rectStagger,
  ease: 'power4.inOut',
}




// FRAME 1
const f1Timeline = () => {
  return gsap.timeline()
    // outer rect
    .to('.frame1 .rect-outer rect', rectSpeed, rectInOutProps, `<+0.2`)
    // inner rect
    .to('.frame1 .rect-inner rect', rectSpeed, rectInOutProps, `<+0.2`)
    // text
    .to('.frame1 .t1 image', 0.3, textProps, `<+0.2`)
    // rect top (close)
    .to('.frame1 .rect-top rect', rectSpeed * 0.5, rectTopProps)
    // heading (large text)
    .to('.frame1 .t2 image', 0.3, textProps, `<+0.5`)
}

// FRAME 2
const f2Timeline = () => {
  return gsap.timeline()
    // frame1 out
    .to('.frame1 .rect-mask rect', frameOutProps)
    
    // frame2 in
    // outer rect
    .to('.frame2 .rect-outer rect', rectSpeed, rectInOutProps, `<+0.2`)
    // inner rect
    .to('.frame2 .rect-inner rect', rectSpeed, rectInOutProps, `<+0.2`)
    // rect top (close)
    .to('.frame2 .rect-top rect', rectSpeed * 0.5, rectTopProps)
    // text
    .to('.frame2 .t1 image', 0.3, textProps, `<+0.5`)
}

// FRAME 3
const f3Timeline = () => {
  return gsap.timeline()
    // frame2 out
    .to('.frame2 .rect-mask rect', frameOutProps)
    
    // frame3 in
    // outer rect
    .to('.frame3 .rect-outer rect', rectSpeed, rectInOutProps, `<+0.2`)
    // inner rect
    .to('.frame3 .rect-inner rect', rectSpeed, rectInOutProps, `<+0.2`)
    // text sub 1 (New Streaming)
    .to('.frame3 .t1 image', 0.3, textProps, `<+0.2`)
    // top rect
    .to('.frame3 .rect-top rect', rectSpeed * 0.5, rectTopProps)
    // text sub 2 (Netflix)
    .to('.frame3 .t2 image', 0.3, textProps, '<+0.2')
}

// FRAME 4
const f4Timeline = () => {
  return gsap.timeline()
    // frame3 out
    .to('.frame3 .rect-mask rect', frameOutProps)
    
    // frame4 in
    // outer rect
    .to('.frame4 .rect-outer rect', rectSpeed, rectInOutProps, `<+0.2`)
    // heading
    .to('.frame4 .t1 image', 0.3, textProps)
    // attr
    .to('.frame4 .t2 image', 0.3, textProps)
    // specialoffer show border
    .set('.frame4 .specialoffer rect', { autoAlpha: 1 })
    // specialoffer border scale(height)
    .to('.frame4 .specialoffer rect', 0.2, { y: -15, scaleY: 1 })
    // specialoffer border back to original position
    .to('.frame4 rect', 0.3, { x: 0 })
    // specialoffer zoom no delay
    .to('.frame4 .specialoffer image', 0.3, { scale: 1 }, '<')
    // buttob show
    .to('.frame4 .button image', { autoAlpha: 1 })
    // button
    .to('.frame4 .button image', 0.1, { scale: 1.1, transformOrigin: "50% 50%", repeat: 1, yoyo: true })

    // mid text
    // button
}
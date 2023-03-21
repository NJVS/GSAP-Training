const frames = [
  'img01.jpg',
  'img02.jpg',
  'img03.jpg',
  'img04.jpg',
  
  ['img05.jpg', 'txt01.png', 'txt02.png', 'btn.png']
]

document.addEventListener('DOMContentLoaded', () => {
  // importing assets dynamicaly
  const banner = document.querySelector('#banner'); // main element
  const frameContainer = banner.querySelector('.frames_container'); // frames container

  frames.forEach(item => {
    if (typeof item === 'string' || item instanceof String) {
      // console.log(item)
      frameContainer.append(createImage(item));
    } else if (Array.isArray(item)) {
      // create container element
      const multipleFramesContainer = document.createElement('div');
      multipleFramesContainer.className = 'multi_frame';

      // another loop
      item.forEach(i => {
        multipleFramesContainer.append(createImage(i));
      })

      frameContainer.append(multipleFramesContainer);

    } else {
      console.log(`Invalid frame value: ${item}`);
    }
  });


  // GSAP animation timeline
  const mainTimeline = gsap.timeline();
  const frameImgElements = document.querySelectorAll('.frame_img');
  const frameTextElements = document.querySelectorAll('.frame_txt');
  const frameBtnElement = document.querySelector('.frame_btn');

  mainTimeline.from([...frameImgElements], {
    duration: 0.5,
    stagger: 2,
    autoAlpha: 0,
  });

  mainTimeline.from('.frame_txt', {
    duration: 0.2,
    stagger: 0.2,
    y: '30%',
    autoAlpha: 0,
  })
  mainTimeline.from('.frame_btn', {
    delay: 0.2,
    duration: 0.2,
    autoAlpha: 0, 
  })
  mainTimeline.to('.frame_btn', {
    delay: 0.1,
    duration: 0.1,
    scale: 1.1,
  })
  mainTimeline.to('.frame_btn', {
    delay: 0,
    duration: 0.1,
    scale: 1,
  })
  
});

function createImage(name) {
  const imgElement = document.createElement('img');
  imgElement.src = `./assets/${name}`;
  imgElement.className = (name.includes('txt')) ? 'frame_txt' : (name.includes('btn')) ? 'frame_btn' : 'frame_img';

  return imgElement;
}
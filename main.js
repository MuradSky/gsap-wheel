import gsap from 'gsap';

import './style.css';

gsap.registerPlugin(InertiaPlugin);

let requestStop = false;
let fullSpins = 10;
let stopRotation = 0;
let loopIteration = 0;

let startWheel = null;
let loopWheel = null;
let stopWheel = null;
let reset = null;

const stop = () =>
  gsap.to('.spinner', {
    inertia: {
      rotation: gsap.getProperty('.spinner', 'rotation') + stopRotation + 13.2,
    },
    duration: stopRotation / 360,
    paused: true,
    onComplete() {
      setTimeout(() => {
        stopWheel.kill();
        stopWheel = null;
        loopWheel.kill();
        loopWheel = null;
        startWheel.kill();
        startWheel = null;
        requestStop = false;
        loopIteration = 0;
        fullSpins = 10;
        gsap.to('.spinner', {
          rotation: 0,
          duration: 0,
        });
      }, 3000);
    },
  });

const loop = () =>
  gsap.to('.spinner', {
    rotation: '+=360',
    ease: 'none',
    duration: 0.2,
    onComplete: () => {
      if (loopIteration >= fullSpins && requestStop) {
        stopWheel = stop();
        stopWheel.play();
      } else {
        loopIteration++;
        loopWheel.play(0);
      }
    },
    paused: true,
  });

const start = () =>
  gsap.to('.spinner', {
    rotation: '+=360',
    ease: 'power1.in',
    duration: 1,
    onComplete: () => {
      loopWheel = loop();
      loopWheel.play();
    },
    paused: true,
  });

document.querySelector('#play').addEventListener('click', () => {
  startWheel = start();
  startWheel.play();
});
document.querySelector('.sectors').addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (btn) {
    stopRotation = 360 + Number(btn.dataset.deg);
    requestStop = true;
  }
});

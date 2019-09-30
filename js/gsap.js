function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var timeline = new TimelineMax();

// timeline.from("div", 2, {
//   x: () => randomInt(0, window.innerWidth),
//   y: () => randomInt(0, window.innerHeight)
// });

timeline.to("div", 2, {
  repeat: 99999,
  yoyo: true,
  // ease: Bounce.easeOut,
  x : window.innerWidth / 2,
  y : window.innerHeight / 2,
  scale: () => randomFloat(0.5, 8),
  rotation: () => randomInt(200, 709)
});

// TweenMax.to("div:nth-child(2n+1)", 1, {
//   ease: Back.easeOut.config(1.7),
//   scale: () => randomFloat(0.5, 2),
//   rotation: () => randomInt(200, 709),
//   x: () => randomInt(0, window.innerWidth),
//   y: () => randomInt(0, window.innerHeight / 2),
//   background: "green",
//   opacity: 1,
// });

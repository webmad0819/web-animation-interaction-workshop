function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let shuffle = array => array.sort(() => Math.random() - 0.5);

var timeline = new TimelineMax();

timeline.to("div:nth-child(2n)", 2, {
  repeat: 99999,
  yoyo: true,
  ease:  Bounce.easeOut,
  scale: () => randomFloat(0.5, 12),
  rotation: () => randomInt(200, 709),
  y: () => randomInt(0, 200),
  x: () => randomInt(200, window.innerWidth),
  background: "red",
  opacity: 0.8,
});

TweenMax.to("div:nth-child(2n+1)", 0, {
  ease: Back.easeOut.config(1.7),
  scale: () => randomFloat(0.5, 2),
  rotation: () => randomInt(200, 709),
  y: () => randomInt(0, 0),
  x: () => randomInt(200, window.innerWidth),
  background: "green",
  opacity: 0,
});

// Dani Vicario - test experiment (canvas)- Mon 30 Sep 2019 22:38:24 CEST
const globalCompositeOperationModes = {
  "source-over": "source-over",
  "source-in": "source-in",
  "source-out": "source-out",
  "source-atop": "source-atop",
  "destination-over": "destination-over",
  "destination-in": "destination-in",
  "destination-out": "destination-out",
  "destination-atop": "destination-atop",
  lighter: "lighter",
  copy: "copy",
  xor: "xor",
  multiply: "multiply",
  screen: "screen",
  overlay: "overlay",
  darken: "darken",
  lighten: "lighten",
  "color-dodge": "color-dodge",
  "color-burn": "color-burn",
  "hard-light": "hard-light",
  "soft-light": "soft-light",
  difference: "difference",
  exclusion: "exclusion",
  hue: "hue",
  saturation: "saturation",
  color: "color",
  luminosity: "luminosity",
};

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** @type HTMLCanvasElement */
var canvasDOMEl = document.getElementById("canvas");

/** @type CanvasRenderingContext2D */
var ctx = canvasDOMEl.getContext("2d");

var w = window.innerWidth;
var h = window.innerHeight;
var w2 = w / 2;
var h2 = h / 2;

var PI = Math.PI;
var PI_DOUBLE = 2 * Math.PI;
var PI_HALF = Math.PI / 2;

canvasDOMEl.setAttribute("height", window.innerHeight);
canvasDOMEl.setAttribute("width", window.innerWidth);

// TweenMax.to("div:nth-child(2n+1)", 1, {
//   ease: Back.easeOut.config(1.7),
//   scale: () => randomFloat(0.5, 2),
//   rotation: () => randomInt(200, 709),
//   x: () => randomInt(0, window.innerWidth),
//   y: () => randomInt(0, window.innerHeight / 2),
//   background: "green",
//   opacity: 1,
// });

class X {
  constructor(idx, x, y) {
    this.s = {
      x: x,
      y: y,
      size: 15,
    };

    var tl = new TimelineMax({
      //   duration: 4.5,
      //   ease: Circ.easeOut,
      //   repeat: 10,
      //   yoyo: true
    });

    let t = 5;
    let s = idx % 2 ? 40 : 10;

    idx % 2
      ? tl.to(this.s, 0, { color: "#ffffff55", size: s / 2 })
      : tl.to(this.s, 0, { color: "#00ff0044", size: s, ease: Power4.easeOut });

    // .to(this.s, t, { color: "green", x: 300, y: 400, size: 100, ease: Elastic.easeOut.config(1, 1.3 / 2) });
  }
}

class T {
  constructor(r) {
    let fff = 5;
    this.xs = Array(Math.round(360 / fff))
      .fill()
      .map((x, idx) => new X(idx, r * Math.cos((idx * fff * PI) / 180) + w2, r * Math.sin((idx * fff * PI) / 180) + h2));
  }
}

let ts = Array(100)
  .fill()
  .map((x, idx) => new T((idx + 130) * 2.5));

TweenLite.ticker.addEventListener("tick", function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ts.forEach((t, idx2) => {
    t.xs.forEach((x, idx) => {
      //   ctx.lineWidth = .5;
      ctx.strokeStyle = `#fff`;
      ctx.fillStyle = x.s.color;
      ctx.beginPath();
      ctx.arc(x.s.x, x.s.y, x.s.size - idx2 / 5, 0, PI_DOUBLE);
      ctx.fill();
      //   ctx.stroke();
      ctx.closePath();
    });
  });
});

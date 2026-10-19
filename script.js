/* ==========================================================================
   A LITTLE UNIVERSE CALLED MALAIKA
   ==========================================================================
   EDIT EVERYTHING YOU WANT TO PERSONALIZE RIGHT HERE.
   Only change the text inside the quotes. Keep the commas and brackets.
   - stars.messages : add or remove lines freely (one per clickable star)
   - memory.cards   : 4 cards, replace with real words only you would write
   - finale.letter  : one string per paragraph; signature is separate
   ========================================================================== */

const CONFIG = {
  pageTitle: "A Little Universe Called Malaika",
  herName: "Malaika",

  intro: {
    line: "Psst, Angel... someone made a tiny universe with you in mind. Curious? ✨",
    button: "Come on in, my angel 🪽"
  },

  
stars: {
  hint: "Tap the glowing stars, Angel. Each one has a little poem for you. ✨",
  discoverNeeded: 10,

  messages: [
    "Little angel, soft and bright,\nYou make this world feel warm and light. 💗",

    "Among the stars that fill the sky,\nI send a little wish up high. ✨",

    "Keep shining in your own sweet way,\nMay joy find you every day. 🌷",

    "If smiles could shine across the night,\nYours would make the stars look bright. 🌟",

    "A thousand stars, a sky so blue,\nThis little universe was made for you. 💫",

    "A shooting star goes rushing by,\nI send a little wish up high. 🌠",

    "When days are cloudy, skies are grey,\nI hope a smile finds you today. 🩷",

    "Little angel, here's your clue:\nThis star has a secret wish for you. 😉",

    "The moon may sleep, the stars may glow,\nMay happy moments find you wherever you go. 🌙",

    "No magic wand, no fairy spell,\nJust little wishes sent to wish you well. ✨",

    "Dream big dreams and reach up high,\nThere's so much beauty in your sky. 🌌",

    "One tiny star, one little rhyme,\nA little happiness, anytime. 💗",

    "The universe is wide and blue,\nBut here's a little corner just for you. 🪽",

    "May laughter find you every day,\nAnd chase your little clouds away. ☀️",

    "A rose may bloom, the stars may shine,\nAnd this small wish is yours and mine. 🌹",

    "If stars could write a message true,\nThey'd send a thousand smiles to you. 💌",

    "Keep your hopes and let them fly,\nLike little stars across the sky. 💫",

    "Here's a secret from the night:\nYou deserve good things and light. 🌷",

    "The planets spin, the comets race,\nBut kindness always has its place. 🌎",

    "One final star before you go,\nKeep being you and let your light glow. 💖"
  ],

  afterHeart:
    "Surprise, Angel! Every little star came together to make a heart just for you. 💗",

  next: "Follow the stardust 🌹"
},


  garden: {
    hint: "Psst... Angel, there's a rose waiting for you. Tap it to reveal its secret. 🌹",
    message: "A little rose, just for you. Because even the smallest things can carry a little thoughtfulness. And this one comes with a tiny reminder: you deserve beautiful moments, too. 🌷",
    next: "Open your little surprises ✨"
  },

  memory: {
    title: "Four little notes for my angel",
    hint: "Tap each card. They have something to tell you. 💌",
    cards: [
      {
        title: "Angel reminder 🪽",
        text: "You deserve kindness, patience, happiness, and people who appreciate the person you are."
      },
      {
        title: "Smile check! 😄",
        text: "This is your friendly reminder to relax your shoulders, take a little breath, and give that smile a chance."
      },
      {
        title: "A tiny confession ✨",
        text: "I could have sent an ordinary message, but apparently my imagination decided to build you an entire universe."
      },
      {
        title: "Official universe rule 🌙",
        text: "No being too hard on yourself, okay, Angel? You deserve the same kindness you give to others."
      }
    ],
    next: "Let's develop some magic 📸"
  },

  gallery: {
    title: "A gallery of tiny happiness",
    hint: "Tap each picture to reveal its little message. 💗",
    items: [
      {
        src: "",
        art: "moon",
        caption: "A little moonlight for the nights when you need some calm. 🌙"
      },
      {
        src: "",
        art: "rose",
        caption: "A tiny rose, carrying a whole lot of thoughtfulness. 🌹"
      },
      {
        src: "",
        art: "stars",
        caption: "A constellation made of little wishes for your happiness. ✨"
      }
    ],
    next: "One last little adventure 💗"
  },

  heart: {
    hint: "Angel, move your finger across the glowing heart, then tap its center. 💫",
    message: "Plot twist! You have unlocked the universe's official happiness generator. Its only job is to remind you that you deserve good things. 💗",
    next: "Unlock your final surprise 🎁"
  },

  finale: {
    subtitle: "A tiny universe, made with care for one very special angel. 🪽",

    letter: [
      "Dear Malaika, my little angel, 🪽✨",
      "If you have made it all the way here, congratulations! You have officially explored your very own little universe. I hope you enjoyed the stars, the rose, the little surprises, and that heart that was waiting just for you. 💗",
      "I wanted to make you something a little different. Not just another message on a screen, but a tiny world where every click reveals something thoughtful and every little detail has a reason to be there: you.",
      "You know what, Angel? Even the universe needed a little help looking this magical today. So I gave it some stars, a garden, a glowing heart, and one very important mission: to make you smile. 🌹",
      "And if you're smiling right now, then mission accomplished! If you're not smiling yet, please inform the universe immediately. I may need to add more stars, a few extra roses, or perhaps an entire galaxy of cuteness. 😂✨",
      "But jokes aside, I hope you always remember that you deserve kindness, happiness, peaceful days, and little moments that remind you how special you are. Never forget to be gentle with yourself, even on the days when life feels a little difficult.",
      "I made this little universe for you, Malaika, because sometimes a simple thought deserves a little extra creativity. And honestly, seeing this project come to life was worth it just for the possibility of bringing a smile to your face.",
      "Now, your final mission is very simple: keep smiling, my angel. 🪽",
      "And one last thing... look closely at the stars. They have a tiny secret for you. 😉"
    ],

    signature: "With a little universe of good wishes, — Asfandyar 💫",
    closing: "P.S. Angel, your smile is the secret achievement of this entire universe. ✨💗",
    replay: "One more little adventure? ↺"
  },

  soundOn: "Sound on 🎵",
  soundOff: "Sound off"
};

   /* ======================= END OF CONFIGURATION ======================= */

(() => {
'use strict';

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const TAU = Math.PI * 2;
const rnd = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const wrap = (v, m) => ((v % m) + m) % m;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const get = (o, p) => p.split('.').reduce((a, k) => a && a[k], o);
const heartPt = t => { const s = Math.sin(t);
  return [16 * s * s * s / 17, -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) / 17 - .17]; };
const heartPath = (c, x, y, s) => { c.beginPath(); c.moveTo(x, y + s * .35);
  c.bezierCurveTo(x - s * 1.1, y - s * .3, x - s * .5, y - s, x, y - s * .45);
  c.bezierCurveTo(x + s * .5, y - s, x + s * 1.1, y - s * .3, x, y + s * .35); c.closePath(); };

let timers = [];
const later = (fn, ms) => timers.push(setTimeout(fn, reduce ? 0 : ms));
const clearTimers = () => { timers.forEach(clearTimeout); timers = []; };

function Cv(el) {
  const c = { el, ctx: el.getContext('2d'), w: 0, h: 0 };
  c.fit = () => { const r = el.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2);
    c.w = r.width; c.h = r.height; el.width = Math.round(r.width * d); el.height = Math.round(r.height * d);
    c.ctx.setTransform(d, 0, 0, d, 0, 0); };
  return c;
}

$$('[data-cfg]').forEach(el => { el.textContent = get(CONFIG, el.dataset.cfg); });
document.title = CONFIG.pageTitle;
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const wordsHTML = t => t.split(' ').map((w, i) => `<span class="w" style="--i:${i}">${esc(w)}</span>`).join(' ');
$('.lead').innerHTML = wordsHTML($('.lead').textContent);

/* ---------- optional sound (synthesized, off by default, starts only on click) ---------- */
const snd = {
  ctx: null, master: null, on: false,
  init() {
    const A = window.AudioContext || window.webkitAudioContext; if (!A) return false;
    const c = this.ctx = new A();
    this.master = c.createGain(); this.master.gain.value = 0; this.master.connect(c.destination);
    const pad = c.createGain(); pad.gain.value = .045;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1100;
    pad.connect(lp); lp.connect(this.master);
    [110, 164.81, 220, 277.18, 329.63].forEach((f, i) => {
      const o = c.createOscillator(); o.type = i % 2 ? 'triangle' : 'sine';
      o.frequency.value = f; o.detune.value = (i - 2) * 5; o.connect(pad); o.start(); });
    const lfo = c.createOscillator(), lg = c.createGain();
    lfo.frequency.value = .12; lg.gain.value = .02; lfo.connect(lg); lg.connect(pad.gain); lfo.start();
    return true;
  },
  toggle() {
    if (!this.ctx && !this.init()) return false;
    this.on = !this.on; const c = this.ctx;
    if (this.on) { c.resume(); this.master.gain.setTargetAtTime(.6, c.currentTime, .7); }
    else { this.master.gain.setTargetAtTime(0, c.currentTime, .25); setTimeout(() => { if (!this.on) c.suspend(); }, 1200); }
    return true;
  },
  chime(i = 0) {
    if (!this.on) return;
    const c = this.ctx, t = c.currentTime, o = c.createOscillator(), g = c.createGain();
    o.type = 'sine'; o.frequency.value = [523.25, 587.33, 659.25, 783.99, 880, 987.77, 1046.5, 1174.66][i % 8];
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.16, t + .02);
    g.gain.exponentialRampToValueAtTime(.0001, t + 1.8);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + 1.9);
  }
};
const soundBtn = $('#sound');
const paintSound = () => { soundBtn.textContent = snd.on ? CONFIG.soundOn : CONFIG.soundOff; soundBtn.setAttribute('aria-pressed', snd.on); };
soundBtn.addEventListener('click', () => {
  if (!snd.toggle()) { soundBtn.disabled = true; soundBtn.textContent = 'Sound unavailable'; return; }
  paintSound();
});
paintSound();

/* ---------- persistent background: stars, hearts, sparks, finale gather ---------- */
const bg = Cv($('#bg'));
let T = 0, bgStars = [], bgHearts = [], sparks = [], tmx = 0, tmy = 0, mx = 0, my = 0, bright = 1, brightT = 1;
const gather = { on: false, t: 0, list: [], tx: 0, ty: 0 };
let shoot = null, nextShoot = 5000;
const newHeart = init => ({ x: Math.random(), y: init ? Math.random() : 1.1, s: rnd(6, 13), v: rnd(.012, .03), p: rnd(0, TAU), a: rnd(.1, .26) });

function bgLayout() {
  bg.fit();
  const n = Math.round(clamp(bg.w * bg.h / 7000, 60, 190));
  bgStars = Array.from({ length: n }, () => ({ x: Math.random(), y: Math.random(), z: rnd(.2, 1), p: rnd(0, TAU), s: rnd(.5, 1.5) }));
  bgHearts = Array.from({ length: 7 }, () => newHeart(true));
}
addEventListener('pointermove', e => {
  tmx = e.clientX / innerWidth - .5; tmy = e.clientY / innerHeight - .5;
  if (!reduce && Math.random() < .45) sparks.push({ x: e.clientX, y: e.clientY, vx: rnd(-.3, .3), vy: rnd(-.3, .3), l: 0, m: rnd(500, 900), r: rnd(.6, 1.7), c: '255,205,228' });
}, { passive: true });

function burst(x, y, n = 40, cols = ['255,158,192', '255,220,160', '190,160,255']) {
  for (let i = 0; i < n; i++) {
    const a = rnd(0, TAU), v = rnd(.6, 4.2);
    sparks.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, l: 0, m: rnd(900, 1800), r: rnd(.8, 2.6), c: cols[i % cols.length] });
  }
}
function startGather() {
  if (reduce) return;
  const r = $('#fName').getBoundingClientRect(), cols = ['255,170,205', '255,225,170', '200,170,255'];
  gather.tx = r.left + r.width / 2; gather.ty = r.top + r.height / 2; gather.t = 0; gather.on = true;
  gather.list = Array.from({ length: 150 }, (_, i) => ({ sx: rnd(0, bg.w), sy: rnd(0, bg.h), d: rnd(0, 1700), dur: rnd(2200, 3200),
    sw: rnd(-2.2, 2.2), r: rnd(.8, 2.2), c: cols[i % 3] }));
}

function bgFrame(dt) {
  const c = bg.ctx, w = bg.w, h = bg.h, f = dt / 16.67;
  mx += (tmx - mx) * .04; my += (tmy - my) * .04; bright += (brightT - bright) * .015;
  c.clearRect(0, 0, w, h); c.globalCompositeOperation = 'source-over';
  for (const s of bgStars) {
    const x = wrap(s.x * w + (reduce ? 0 : T * .004 * s.z) - mx * 46 * s.z, w), y = wrap(s.y * h - my * 30 * s.z, h);
    const tw = reduce ? .8 : .55 + .45 * Math.sin(T / 700 + s.p);
    c.fillStyle = `rgba(255,238,250,${Math.min(1, tw * s.z * bright)})`;
    c.beginPath(); c.arc(x, y, s.s * (.5 + s.z * .6), 0, TAU); c.fill();
  }
  for (const q of bgHearts) {
    if (!reduce) q.y -= q.v * dt / 1000;
    if (q.y < -.1) Object.assign(q, newHeart(false));
    c.fillStyle = `rgba(255,122,168,${q.a})`;
    heartPath(c, q.x * w + (reduce ? 0 : Math.sin(T / 1800 + q.p) * 14), q.y * h, q.s); c.fill();
  }
  c.globalCompositeOperation = 'lighter';
  for (const s of sparks) {
    s.l += dt; s.x += s.vx * f; s.y += s.vy * f; s.vx *= Math.pow(.985, f); s.vy = s.vy * Math.pow(.985, f) + .01 * f;
    c.fillStyle = `rgba(${s.c},${Math.max(0, 1 - s.l / s.m)})`; c.beginPath(); c.arc(s.x, s.y, s.r, 0, TAU); c.fill();
  }
  if (sparks.length) sparks = sparks.filter(s => s.l < s.m);
  if (!reduce) {
    if (!shoot && T > nextShoot) { const a = rnd(.35, .6); shoot = { x: rnd(.2, 1) * w, y: rnd(0, .35) * h, vx: -Math.cos(a) * 11, vy: Math.sin(a) * 11, l: 0 }; }
    if (shoot) {
      shoot.l += dt; shoot.x += shoot.vx * f; shoot.y += shoot.vy * f;
      const al = 1 - shoot.l / 1100, tx = shoot.x - shoot.vx * 9, ty = shoot.y - shoot.vy * 9, g = c.createLinearGradient(shoot.x, shoot.y, tx, ty);
      g.addColorStop(0, `rgba(255,240,250,${Math.max(0, al)})`); g.addColorStop(1, 'rgba(255,240,250,0)');
      c.strokeStyle = g; c.lineWidth = 1.6; c.beginPath(); c.moveTo(shoot.x, shoot.y); c.lineTo(tx, ty); c.stroke();
      if (al <= 0) { shoot = null; nextShoot = T + rnd(6000, 13000); }
    }
  }
  if (gather.on) {
    gather.t += dt;
    for (const p of gather.list) {
      const u = clamp((gather.t - p.d) / p.dur, 0, 1); if (u <= 0 || u >= 1) continue;
      const e = u < .5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2, ang = (1 - e) * p.sw;
      const dx = p.sx - gather.tx, dy = p.sy - gather.ty;
      const x = gather.tx + (dx * Math.cos(ang) - dy * Math.sin(ang)) * (1 - e), y = gather.ty + (dx * Math.sin(ang) + dy * Math.cos(ang)) * (1 - e);
      c.fillStyle = `rgba(${p.c},${Math.sin(u * Math.PI) * .95})`; c.beginPath(); c.arc(x, y, p.r * (1 + e), 0, TAU); c.fill();
    }
    const g = clamp((gather.t - 2400) / 2400, 0, 1), a = g * (1 - clamp((gather.t - 5200) / 2600, 0, 1)) * .5;
    if (a > .01) {
      const r = 60 + g * 170, gr = c.createRadialGradient(gather.tx, gather.ty, 0, gather.tx, gather.ty, r);
      gr.addColorStop(0, `rgba(255,170,205,${a})`); gr.addColorStop(1, 'rgba(255,170,205,0)');
      c.fillStyle = gr; c.beginPath(); c.arc(gather.tx, gather.ty, r, 0, TAU); c.fill();
    }
    if (gather.t > 9000) gather.on = false;
  }
  c.globalCompositeOperation = 'source-over';
}

/* ---------- WebGL nebula (falls back to the CSS gradient if WebGL is unavailable) ---------- */
const MOODS = [.1, .35, .55, .5, .6, .8, 1];
const GL = (() => {
  const stub = { mood: 0, heart: 0, dark: 0, pulse() {}, draw() {}, resize() {} };
  const cv = $('#gl'); let gl = null;
  try { gl = cv.getContext('webgl', { alpha: false, antialias: false, powerPreference: 'low-power' }); } catch (e) { gl = null; }
  if (!gl) { cv.hidden = true; return stub; }
  const FS = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uR,uM;uniform float uT,uMood,uDark,uHeart,uPulse;
float hs(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float ns(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hs(i),hs(i+vec2(1.,0.)),f.x),mix(hs(i+vec2(0.,1.)),hs(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*ns(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
float dc(vec2 v){return dot(v,v);}
float heart(vec2 p){p.x=abs(p.x);if(p.y+p.x>1.)return sqrt(dc(p-vec2(.25,.75)))-sqrt(2.)/4.;return sqrt(min(dc(p-vec2(0.,1.)),dc(p-.5*max(p.x+p.y,0.))))*sign(p.x-p.y);}
void main(){
  vec2 uv=gl_FragCoord.xy/uR;vec2 p=(gl_FragCoord.xy-.5*uR)/min(uR.x,uR.y);
  float t=uT*.035;vec2 q=p*1.4+uM*.12;
  float f=fbm(q+vec2(t,-t*.6));float g=fbm(q*1.7+f*1.5+vec2(-t*1.3,t));
  vec3 col=mix(vec3(.015,.025,.08),vec3(.05,.09,.26),smoothstep(.15,.85,f));
  col+=vec3(.34,.15,.55)*smoothstep(.45,.95,g)*(.3+.3*uMood);
  col+=vec3(1.,.34,.55)*pow(smoothstep(.5,1.,g*f*1.9),2.)*(.12+.38*uMood);
  col+=vec3(.4,.1,.32)*pow(1.-uv.y,3.)*.3;
  if(uHeart>.001){
    vec2 hp=(p+vec2(0.,.27))*2.3/(1.+.03*sin(uT*2.4));
    float d=heart(hp);
    col+=vec3(1.,.4,.62)*exp(-max(d,0.)*4.)*uHeart*.5+vec3(.62,.5,1.)*exp(-abs(d)*16.)*uHeart*.5;
  }
  col+=vec3(1.,.5,.7)*uPulse*exp(-length(p)*2.2)*.7;
  col*=1.-.7*dot(uv-.5,uv-.5);
  col*=1.-uDark*.55;
  col+=(hs(gl_FragCoord.xy+uT)-.5)/200.;
  gl_FragColor=vec4(col,1.);
}`;
  const sh = (t, src) => { const o = gl.createShader(t); gl.shaderSource(o, src); gl.compileShader(o); return gl.getShaderParameter(o, gl.COMPILE_STATUS) ? o : null; };
  const v = sh(gl.VERTEX_SHADER, 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}'), f = sh(gl.FRAGMENT_SHADER, FS);
  if (!v || !f) { cv.hidden = true; return stub; }
  const pr = gl.createProgram(); gl.attachShader(pr, v); gl.attachShader(pr, f); gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { cv.hidden = true; return stub; }
  gl.useProgram(pr);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'a'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const U = n => gl.getUniformLocation(pr, n), uR = U('uR'), uT = U('uT'), uM = U('uM'), uMood = U('uMood'), uDark = U('uDark'), uHeart = U('uHeart'), uPulse = U('uPulse');
  let m = 0, h = 0, d = 0, pu = 0, lost = false;
  cv.addEventListener('webglcontextlost', e => { e.preventDefault(); lost = true; cv.hidden = true; });
  const o = {
    mood: 0, heart: 0, dark: 0,
    pulse() { pu = 1; },
    resize() { cv.width = Math.max(2, Math.round(innerWidth * .5)); cv.height = Math.max(2, Math.round(innerHeight * .5));
      gl.viewport(0, 0, cv.width, cv.height); gl.uniform2f(uR, cv.width, cv.height); },
    draw(dt) {
      if (lost) return;
      m += (o.mood - m) * .02; h += (o.heart - h) * .02; d += (o.dark - d) * .02; pu = Math.max(0, pu - dt / 1500);
      gl.uniform1f(uT, reduce ? 8 : T / 1000); gl.uniform2f(uM, mx, -my);
      gl.uniform1f(uMood, m); gl.uniform1f(uHeart, h); gl.uniform1f(uDark, d); gl.uniform1f(uPulse, pu);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
  };
  return o;
})();

/* ---------- scene manager ---------- */
let cur = 0, busy = false;
const dots = [];
function paint() {
  dots.forEach((d, i) => { d.className = i < cur ? 'done' : i === cur ? 'now' : '';
    if (i === cur) d.setAttribute('aria-current', 'step'); else d.removeAttribute('aria-current'); });
  $('#pLabel').textContent = `Scene ${cur + 1} of ${dots.length}`;
}
function go(n) {
  if (busy) return; busy = true;
  const from = scenes[cur], to = scenes[n];
  from.el.classList.remove('on');
  setTimeout(() => {
    from.el.hidden = true; to.el.hidden = false; cur = n; GL.mood = MOODS[n];
    if (to.layout) to.layout(); if (to.enter) to.enter();
    paint(); void to.el.offsetWidth; to.el.classList.add('on'); to.el.scrollTop = 0;
    if (n > 0) { to.el.setAttribute('tabindex', '-1'); to.el.focus({ preventScroll: true }); }
    busy = false;
  }, reduce ? 0 : 700);
}
function restart() {
  clearTimers(); scenes.forEach(s => s.reset && s.reset());
  document.body.classList.remove('finale'); brightT = 1; gather.on = false; go(0);
}
const reveal = (el, text) => { if (text != null) el.textContent = text; el.innerHTML = wordsHTML(el.textContent); el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); };
const hide = el => { el.classList.remove('pop'); el.textContent = ''; };

/* ---------- SCENE 1: the mysterious beginning ---------- */
const S0 = { el: $('#s0') };
$('#enter').addEventListener('click', e => {
  const r = e.currentTarget.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2, 70); GL.pulse(); go(1);
});

/* ---------- SCENE 2: a little magic ---------- */
const S1 = (() => {
  const el = $('#s1'), cv = Cv($('#cStars')), hint = $('#starHint'), msg = $('#starMsg'), next = $('#toGarden');
  const M = CONFIG.stars.messages, N = M.length, NODES = Math.max(20, N * 2), NEED = Math.min(CONFIG.stars.discoverNeeded, N);
  const list = Array.from({ length: NODES }, (_, k) => ({ k, msg: -1, f: false, p: rnd(0, TAU), x: 0, y: 0, hx: 0, hy: 0 }));
  M.forEach((_, i) => { list[Math.round(i * NODES / N)].msg = i; });
  let found = 0, phase = 0, formed = 0, shown = false;
  const heartAt = (k, w, h) => { const [x, y] = heartPt(k / NODES * TAU), sc = Math.min(w, h) * .31; return [w / 2 + x * sc, h * .4 + y * sc]; };

  function place() {
    const w = cv.w, h = cv.h, pts = [];
    list.forEach(s => {
      let x, y, t = 0;
      do { x = rnd(.07, .93) * w; y = rnd(.1, .7) * h; t++; } while (t < 40 && pts.some(q => Math.hypot(q[0] - x, q[1] - y) < 54));
      pts.push([x, y]); s.hx = s.x = x; s.hy = s.y = y;
    });
  }
  function show(text) { reveal(msg, text); }
  function pick(s) {
    const r = cv.el.getBoundingClientRect();
    if (!s.f) { s.f = true; found++; }
    show(M[s.msg]); snd.chime(s.msg); burst(r.left + s.x, r.top + s.y, 18);
    if (phase === 0) hint.textContent = `${found} of ${NEED} stars found`;
    if (phase === 0 && found >= NEED) { phase = .5; later(() => { phase = 1; hint.textContent = ''; }, 1800); }
  }
  cv.el.addEventListener('pointerdown', e => {
    const r = cv.el.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    let best = null, bd = matchMedia('(pointer:coarse)').matches ? 46 : 32;
    for (const s of list) { if (s.msg < 0) continue; const d = Math.hypot(s.x - x, s.y - y); if (d < bd) { bd = d; best = s; } }
    if (best) pick(best);
  });
  cv.el.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return; e.preventDefault();
    const s = list.find(q => q.msg >= 0 && !q.f) || list.find(q => q.msg >= 0); if (s) pick(s);
  });
  next.addEventListener('click', () => go(2));

  return {
    el,
    layout() { cv.fit(); place(); },
    reset() { found = 0; phase = 0; formed = 0; shown = false; list.forEach(s => { s.f = false; });
      next.hidden = true; hide(msg); hint.textContent = CONFIG.stars.hint; },
    frame(dt) {
      const c = cv.ctx, w = cv.w, h = cv.h; c.clearRect(0, 0, w, h);
      if (phase === 1) { formed = Math.min(1, formed + dt / (reduce ? 1 : 3600));
        if (formed >= 1 && !shown) { shown = true; show(CONFIG.stars.afterHeart); next.hidden = false; } }
      const e = formed < .5 ? 2 * formed * formed : 1 - Math.pow(-2 * formed + 2, 2) / 2;
      for (const s of list) {
        const [tx, ty] = heartAt(s.k, w, h), fl = reduce ? 0 : Math.sin(T / 1400 + s.p) * 5 * (1 - e);
        s.x = s.hx + (tx - s.hx) * e + fl; s.y = s.hy + (ty - s.hy) * e + fl * .6;
      }
      if (formed > 0) {
        c.save(); c.lineWidth = 1.6; c.strokeStyle = 'rgba(255,150,190,.65)'; c.shadowColor = 'rgba(255,110,170,.9)'; c.shadowBlur = 12;
        c.beginPath(); const top = Math.min(NODES, Math.ceil(formed * NODES));
        for (let k = 0; k <= top; k++) { const s = list[k % NODES]; if (k) c.lineTo(s.x, s.y); else c.moveTo(s.x, s.y); }
        c.stroke(); c.restore();
        const [cx, cy] = [w / 2, h * .4], gr = c.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w, h) * .34);
        gr.addColorStop(0, `rgba(255,120,170,${formed * .18})`); gr.addColorStop(1, 'rgba(255,120,170,0)');
        c.fillStyle = gr; c.fillRect(0, 0, w, h);
      }
      c.globalCompositeOperation = 'lighter';
      for (const s of list) {
        const inter = s.msg >= 0, pul = reduce ? 1 : .75 + .25 * Math.sin(T / 500 + s.p);
        const r = inter ? (s.f ? 5 : 4.2) * pul : 1.6, col = s.f ? '255,220,160' : inter ? '255,236,248' : '200,190,255';
        const g = c.createRadialGradient(s.x, s.y, 0, s.x, s.y, r * 5);
        g.addColorStop(0, `rgba(${col},${inter ? .9 : .45})`); g.addColorStop(1, `rgba(${col},0)`);
        c.fillStyle = g; c.beginPath(); c.arc(s.x, s.y, r * 5, 0, TAU); c.fill();
        if (inter) { const L = r * (2.6 + pul); c.strokeStyle = `rgba(${col},.85)`; c.lineWidth = 1; c.beginPath();
          c.moveTo(s.x - L, s.y); c.lineTo(s.x + L, s.y); c.moveTo(s.x, s.y - L); c.lineTo(s.x, s.y + L); c.stroke(); }
      }
      c.globalCompositeOperation = 'source-over';
    }
  };
})();

/* ---------- SCENE 3: the secret garden ---------- */
const S2 = (() => {
  const el = $('#s2'), cv = Cv($('#cGarden')), rose = $('#rose'), msg = $('#gMsg'), next = $('#toMemory'), hint = $('#gHint');
  let stems = [], flies = [], petals = [], opened = false;
  const newPetal = init => ({ x: rnd(0, cv.w), y: init ? rnd(-cv.h, cv.h) : rnd(-30, -10), vx: rnd(-.3, .3), vy: rnd(.3, .8),
    rot: rnd(0, TAU), vr: rnd(-.03, .03), s: rnd(5, 10), wrap: true, a: rnd(.35, .75) });

  const rings = [[6, 0, 1, 'g1', 0], [5, 36, .74, 'g2', .12], [4, 20, .5, 'g3', .24]];
  $('#head').innerHTML = rings.map(([n, off, s, g, d]) => Array.from({ length: n }, (_, k) =>
    `<path class="pt" style="--r:${off + k * 360 / n}deg;--s:${s};--d:${d}" fill="url(#${g})" d="M0 0C-32 -14 -34 -64 0 -84C34 -64 32 -14 0 0Z"/>`).join('')).join('')
    + '<circle r="7" fill="#ffe3a8"/>';

  function drawRose(c, x, y, r, col) {
    const g = c.createRadialGradient(x, y, 0, x, y, r * 3.2);
    g.addColorStop(0, `rgba(${col},.35)`); g.addColorStop(1, `rgba(${col},0)`);
    c.fillStyle = g; c.beginPath(); c.arc(x, y, r * 3.2, 0, TAU); c.fill();
    c.strokeStyle = 'rgba(255,255,255,.22)'; c.lineWidth = 1; c.fillStyle = `rgba(${col},.82)`;
    for (let k = 0; k < 5; k++) { const a = k * TAU / 5; c.beginPath();
      c.ellipse(x + Math.cos(a) * r * .42, y + Math.sin(a) * r * .42, r * .62, r * .5, a, 0, TAU); c.fill(); c.stroke(); }
    c.fillStyle = 'rgba(120,20,70,.55)'; c.beginPath(); c.arc(x, y, r * .38, 0, TAU); c.fill();
    c.strokeStyle = 'rgba(255,255,255,.35)'; c.beginPath(); c.arc(x, y, r * .22, .5, TAU - .9); c.stroke();
  }
  rose.addEventListener('click', () => {
    if (opened) return; opened = true;
    rose.classList.add('open'); rose.setAttribute('aria-pressed', 'true'); hint.textContent = ''; snd.chime(4);
    const r = rose.getBoundingClientRect(), cr = cv.el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height * .36;
    for (let i = 0; i < 36; i++) { const a = rnd(0, TAU), v = rnd(1, 3.2);
      petals.push({ x: cx - cr.left, y: cy - cr.top, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 1, rot: rnd(0, TAU), vr: rnd(-.06, .06), s: rnd(5, 10), wrap: false, a: .8 }); }
    burst(cx, cy, 40); GL.pulse();
    later(() => reveal(msg, CONFIG.garden.message), 1100); later(() => { next.hidden = false; }, 3400);
  });
  next.addEventListener('click', () => go(3));

  return {
    el,
    layout() {
      cv.fit(); const w = cv.w, n = clamp(Math.round(w / 120), 4, 10), cols = ['255,110,160', '255,150,190', '200,120,255', '255,190,150'];
      stems = Array.from({ length: n }, (_, i) => ({ x: (i + .5 + rnd(-.25, .25)) * w / n, len: rnd(.16, .34) * cv.h, r: rnd(11, 20), p: rnd(0, TAU), col: cols[i % 4] }));
      flies = Array.from({ length: w < 600 ? 28 : 48 }, () => ({ x: rnd(0, w), y: rnd(0, cv.h), vx: rnd(-.2, .2), vy: rnd(-.25, .1), p: rnd(0, TAU), r: rnd(1, 2.2) }));
      petals = Array.from({ length: w < 600 ? 14 : 26 }, () => newPetal(true));
    },
    reset() { opened = false; rose.classList.remove('open'); rose.setAttribute('aria-pressed', 'false');
      hide(msg); next.hidden = true; hint.textContent = CONFIG.garden.hint; },
    frame(dt) {
      const c = cv.ctx, w = cv.w, h = cv.h, f = dt / 16.67, m = reduce ? 0 : 1; c.clearRect(0, 0, w, h);
      for (const s of stems) {
        const sw = Math.sin(T / 1700 + s.p) * 10 * m, bx = s.x, by = h + 4, tx = s.x + sw, ty = h - s.len, qx = s.x + sw * .3 - 8, qy = h - s.len * .55;
        c.strokeStyle = 'rgba(70,180,140,.55)'; c.lineWidth = 2.4; c.beginPath(); c.moveTo(bx, by); c.quadraticCurveTo(qx, qy, tx, ty); c.stroke();
        for (let k = 0; k < 3; k++) {
          const u = .28 + k * .25, iu = 1 - u, side = k % 2 ? 1 : -1;
          c.save(); c.translate(iu * iu * bx + 2 * iu * u * qx + u * u * tx, iu * iu * by + 2 * iu * u * qy + u * u * ty);
          c.rotate(-side * .5 + Math.sin(T / 1300 + s.p + k) * .15 * m); c.fillStyle = 'rgba(60,170,130,.4)';
          c.beginPath(); c.ellipse(side * 11, 0, 12, 4.5, 0, 0, TAU); c.fill(); c.restore();
        }
        drawRose(c, tx, ty, s.r, s.col);
      }
      for (const p of petals) {
        p.x += (p.vx + Math.sin(T / 900 + p.rot) * .3 * (p.wrap ? 1 : 0)) * f * m; p.y += p.vy * f * m; p.rot += p.vr * f * m;
        if (!p.wrap) { p.vx *= .995; p.vy = p.vy * .995 + .02 * f; }
        if (p.y > h + 20 || p.x < -30 || p.x > w + 30) { if (p.wrap) { p.y = -20; p.x = rnd(0, w); } else p.dead = true; }
        c.fillStyle = `rgba(255,140,180,${p.a})`; c.beginPath(); c.ellipse(p.x, p.y, p.s, p.s * .55, p.rot, 0, TAU); c.fill();
      }
      if (petals.some(p => p.dead)) petals = petals.filter(p => !p.dead);
      c.globalCompositeOperation = 'lighter';
      for (const q of flies) {
        q.x = wrap(q.x + (q.vx + Math.sin(T / 900 + q.p) * .15) * f * m, w); q.y = wrap(q.y + (q.vy + Math.cos(T / 1100 + q.p) * .12) * f * m, h);
        const a = .35 + .65 * (reduce ? .7 : .5 + .5 * Math.sin(T / 600 + q.p));
        c.fillStyle = `rgba(255,226,160,${a * .16})`; c.beginPath(); c.arc(q.x, q.y, q.r * 5, 0, TAU); c.fill();
        c.fillStyle = `rgba(255,240,200,${a})`; c.beginPath(); c.arc(q.x, q.y, q.r, 0, TAU); c.fill();
      }
      c.globalCompositeOperation = 'source-over';
    }
  };
})();

/* ---------- SCENE 4: a little memory of you ---------- */
const S3 = (() => {
  const el = $('#s3'), box = $('#cards'), next = $('#toHeart'), seen = new Set(), cards = CONFIG.memory.cards;
  cards.forEach((cd, i) => {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'card';
    b.setAttribute('aria-pressed', 'false'); b.setAttribute('aria-label', `${cd.title}. Tap to open.`);
    b.innerHTML = '<span class="in"><span class="face front"><span class="gem" aria-hidden="true">✦</span><span class="ct"></span></span><span class="face back"></span></span>';
    $('.ct', b).textContent = cd.title; $('.back', b).textContent = cd.text;
    b.addEventListener('click', () => {
      const on = b.classList.toggle('flipped'); b.setAttribute('aria-pressed', on);
      b.setAttribute('aria-label', on ? `${cd.title}: ${cd.text}` : `${cd.title}. Tap to open.`);
      if (on) { const r = b.getBoundingClientRect(); snd.chime(i * 2); burst(r.left + r.width / 2, r.top + r.height / 2, 14); }
      seen.add(i); if (seen.size === cards.length) next.hidden = false;
    });
    box.appendChild(b);
  });
  next.addEventListener('click', () => go(4));
  return { el, reset() { seen.clear(); next.hidden = true; $$('.card', box).forEach(b => { b.classList.remove('flipped'); b.setAttribute('aria-pressed', 'false'); }); } };
})();

/* ---------- SCENE 5: little pictures (drawn illustrations, or your own photos) ---------- */
const ART = {
  moon: () => `<svg viewBox="0 0 200 200"><defs><linearGradient id="am" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#101a4a"/><stop offset="1" stop-color="#5a2a6e"/></linearGradient><mask id="mm"><rect width="200" height="200" fill="#fff"/><circle cx="136" cy="62" r="32" fill="#000"/></mask></defs><rect width="200" height="200" fill="url(#am)"/><g fill="#fff"><circle cx="30" cy="30" r="1.4"/><circle cx="72" cy="18" r="1"/><circle cx="160" cy="34" r="1.6"/><circle cx="178" cy="92" r="1"/><circle cx="46" cy="84" r="1.2"/><circle cx="96" cy="48" r="1"/></g><circle cx="118" cy="72" r="36" fill="#ffe9bd" mask="url(#mm)"/><path d="M0 172Q50 142 100 166T200 152V200H0Z" fill="#0b0d26"/></svg>`,
  rose: () => `<svg viewBox="0 0 200 200"><defs><radialGradient id="ar" cx=".5" cy=".4" r=".75"><stop offset="0" stop-color="#4a1a55"/><stop offset="1" stop-color="#0b0d26"/></radialGradient><radialGradient id="ap" cx=".5" cy=".6" r=".6"><stop offset="0" stop-color="#ff9ec0"/><stop offset="1" stop-color="#c92f6a"/></radialGradient></defs><rect width="200" height="200" fill="url(#ar)"/><path d="M100 120C96 150 104 170 100 198" stroke="#3fa07c" stroke-width="4" fill="none"/><path d="M100 160C80 148 66 156 64 164C80 172 94 170 100 160Z" fill="#2f8a6a"/><g fill="url(#ap)" stroke="rgba(255,255,255,.25)"><circle cx="100" cy="88" r="34"/><circle cx="86" cy="80" r="24"/><circle cx="114" cy="80" r="24"/><circle cx="100" cy="100" r="24"/></g><path d="M88 84Q100 66 112 84Q100 96 88 84ZM92 90Q100 80 108 90" fill="none" stroke="#fff" stroke-opacity=".4"/></svg>`,
  stars: () => { const pts = Array.from({ length: 14 }, (_, k) => { const [x, y] = heartPt(k / 14 * TAU); return [(100 + x * 66).toFixed(1), (98 + y * 66).toFixed(1)]; });
    return `<svg viewBox="0 0 200 200"><defs><radialGradient id="as" cx=".5" cy=".45" r=".75"><stop offset="0" stop-color="#3a1a5a"/><stop offset="1" stop-color="#080a22"/></radialGradient></defs><rect width="200" height="200" fill="url(#as)"/><polygon points="${pts.map(q => q.join(',')).join(' ')}" fill="rgba(255,120,170,.12)" stroke="#ff9ec0" stroke-width="1.2" stroke-linejoin="round"/><g fill="#fff8e8">${pts.map(q => `<circle cx="${q[0]}" cy="${q[1]}" r="2.4"/>`).join('')}</g><g fill="#fff" opacity=".7"><circle cx="24" cy="30" r="1.2"/><circle cx="170" cy="26" r="1.4"/><circle cx="182" cy="150" r="1"/><circle cx="20" cy="160" r="1.2"/></g></svg>`; }
};
const SG = (() => {
  const el = $('#sg'), box = $('#polas'), next = $('#toHeartG'), seen = new Set(), items = CONFIG.gallery.items;
  items.forEach((it, i) => {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'pola';
    b.style.setProperty('--tilt', [-4, 3, -2][i % 3] + 'deg'); b.style.setProperty('--i', i);
    b.setAttribute('aria-label', `Picture ${i + 1}. Touch to develop it.`);
    b.innerHTML = '<span class="ph"></span><span class="cap"></span>';
    $('.ph', b).innerHTML = (ART[it.art] || ART.moon)(); $('.cap', b).textContent = it.caption;
    if (it.src) { const im = new Image(); im.alt = ''; im.onload = () => { $('.ph', b).replaceChildren(im); }; im.src = it.src; }
    b.addEventListener('click', () => {
      b.classList.add('dev'); b.setAttribute('aria-label', it.caption); seen.add(i); snd.chime(i * 2 + 1);
      const r = b.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, 22);
      if (seen.size === items.length) next.hidden = false;
    });
    box.appendChild(b);
  });
  next.addEventListener('click', () => go(5));
  return { el, reset() { seen.clear(); next.hidden = true; $$('.pola', box).forEach(b => b.classList.remove('dev')); } };
})();

/* ---------- SCENE 6: the interactive heart ---------- */
const S4 = (() => {
  const el = $('#s4'), cv = Cv($('#cHeart')), msg = $('#hMsg'), next = $('#toFinale'), hint = $('#hHint');
  const COLS = ['255,122,168', '255,158,192', '255,122,168', '190,150,255', '255,220,160'];
  let P = [], side = 320, px = -999, py = -999, loose = 0, flash = 0, done = false;

  function build() {
    const n = side < 340 ? 480 : 760, sc = side * .46, c0 = side / 2; P = [];
    for (let i = 0; i < n; i++) {
      const [x, y] = heartPt(rnd(0, TAU)), k = Math.random() < .55 ? 1 + rnd(-.05, .03) : Math.sqrt(Math.random()) * .95;
      P.push({ hx: c0 + x * sc * k, hy: c0 + y * sc * k, x: c0 + rnd(-.3, .3) * side, y: c0 + rnd(-.3, .3) * side, vx: 0, vy: 0,
        r: rnd(.7, 2), c: COLS[Math.random() * COLS.length | 0], p: rnd(0, TAU), st: Math.random() < .14 });
    }
  }
  const rel = e => { const r = cv.el.getBoundingClientRect(); return [(e.clientX - r.left) * side / r.width, (e.clientY - r.top) * side / r.height]; };
  function boom() {
    loose = 1.5; flash = 1; const c0 = side / 2;
    for (const p of P) { const dx = p.x - c0, dy = p.y - c0, d = Math.hypot(dx, dy) || 1, s = rnd(3, 9) * side / 460; p.vx += dx / d * s; p.vy += dy / d * s; }
    const r = cv.el.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, 110, ['255,140,180', '255,220,160', '255,255,255', '200,160,255']);
    const fl = $('#flash'); fl.classList.remove('go'); void fl.offsetWidth; fl.classList.add('go');
    snd.chime(5); snd.chime(7); GL.pulse();
    if (!done) { done = true; hint.textContent = '';
      later(() => reveal(msg, CONFIG.heart.message), 900); later(() => { next.hidden = false; }, 3400); }
  }
  cv.el.addEventListener('pointermove', e => { [px, py] = rel(e); });
  cv.el.addEventListener('pointerdown', e => { [px, py] = rel(e); if (Math.hypot(px - side / 2, py - side / 2) < side * .22) boom(); });
  ['pointerleave', 'pointerup', 'pointercancel'].forEach(n => cv.el.addEventListener(n, () => { px = py = -999; }));
  cv.el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); boom(); } });
  next.addEventListener('click', () => go(6));

  return {
    el,
    layout() { side = Math.round(clamp(Math.min(innerWidth * .92, innerHeight * .5), 220, 460));
      cv.el.style.width = cv.el.style.height = side + 'px'; cv.fit(); build(); },
    reset() { done = false; loose = 0; flash = 0; px = py = -999; hide(msg); next.hidden = true; hint.textContent = CONFIG.heart.hint; },
    frame(dt) {
      const c = cv.ctx, f = Math.min(dt / 16.67, 2.5), c0 = side / 2, beat = reduce ? 1 : 1 + .028 * Math.sin(T / 320);
      const kk = .045 * clamp(1 - loose, .08, 1), R = side * .2;
      loose = Math.max(0, loose - dt / 2400); flash = Math.max(0, flash - dt / 1400);
      c.clearRect(0, 0, side, side); c.globalCompositeOperation = 'lighter';
      if (!done) { const rr = 26 + (reduce ? 0 : Math.sin(T / 500) * 5), g = c.createRadialGradient(c0, c0, 0, c0, c0, rr);
        g.addColorStop(0, 'rgba(255,230,240,.5)'); g.addColorStop(1, 'rgba(255,230,240,0)'); c.fillStyle = g; c.beginPath(); c.arc(c0, c0, rr, 0, TAU); c.fill(); }
      if (flash > 0) { const g = c.createRadialGradient(c0, c0, 0, c0, c0, side * .7);
        g.addColorStop(0, `rgba(255,170,205,${flash * .6})`); g.addColorStop(1, 'rgba(255,170,205,0)'); c.fillStyle = g; c.fillRect(0, 0, side, side); }
      const dm = Math.pow(loose > .05 ? .95 : .87, f);
      for (const p of P) {
        p.vx += (c0 + (p.hx - c0) * beat - p.x) * kk * f; p.vy += (c0 + (p.hy - c0) * beat - p.y) * kk * f;
        const dx = p.x - px, dy = p.y - py, d = Math.hypot(dx, dy);
        if (d < R && d > .1) { const s = Math.pow(1 - d / R, 2) * 3.2 * f; p.vx += dx / d * s; p.vy += dy / d * s; }
        p.vx *= dm; p.vy *= dm; p.x += p.vx * f; p.y += p.vy * f;
        const tw = .55 + .45 * Math.sin(T / 380 + p.p), rr = p.r * (1 + loose * .9);
        c.fillStyle = `rgba(${p.c},${tw})`; c.beginPath(); c.arc(p.x, p.y, rr, 0, TAU); c.fill();
        if (p.st && loose > .15) { const L = rr * 4 * loose; c.strokeStyle = `rgba(255,240,250,${tw * loose})`; c.lineWidth = .8; c.beginPath();
          c.moveTo(p.x - L, p.y); c.lineTo(p.x + L, p.y); c.moveTo(p.x, p.y - L); c.lineTo(p.x, p.y + L); c.stroke(); }
      }
      c.globalCompositeOperation = 'source-over';
    }
  };
})();

/* ---------- SCENE 6: the final reveal ---------- */
const S5 = (() => {
  const el = $('#s5'), nm = $('#fName'), sub = $('#fSub'), lt = $('#letter'), cl = $('#fClose'), rep = $('#replay'), skip = $('#skip');
  nm.setAttribute('aria-label', CONFIG.herName);
  nm.innerHTML = [...CONFIG.herName].map((ch, i) => `<span aria-hidden="true" style="--i:${i}"></span>`).join('');
  $$('span', nm).forEach((s, i) => { s.textContent = [...CONFIG.herName][i]; });
  const paras = CONFIG.finale.letter.map(t => { const p = document.createElement('p'); p.textContent = t; lt.appendChild(p); return p; });
  const sig = document.createElement('p'); sig.className = 'sig'; sig.textContent = CONFIG.finale.signature; lt.appendChild(sig); paras.push(sig);
  const parts = [nm, sub, lt, cl, rep];

  function showAll() {
    clearTimers(); gather.on = false; el.classList.add('compact');
    parts.forEach(x => x.classList.add('show')); paras.forEach(p => p.classList.add('show')); skip.hidden = true;
  }
  skip.addEventListener('click', showAll);
  rep.addEventListener('click', restart);

  return {
    el,
    enter() {
      document.body.classList.add('finale'); brightT = 1.9; skip.hidden = false; GL.dark = 1; GL.heart = 1;
      later(startGather, 900);
      later(() => nm.classList.add('show'), 4300);
      later(() => sub.classList.add('show'), 6200);
      later(() => { el.classList.add('compact'); lt.classList.add('show'); }, 7800);
      paras.forEach((p, i) => later(() => p.classList.add('show'), 8600 + i * 1100));
      const end = 8600 + paras.length * 1100;
      later(() => cl.classList.add('show'), end + 600);
      later(() => { rep.classList.add('show'); skip.hidden = true; }, end + 1800);
    },
    reset() { GL.dark = 0; GL.heart = 0; el.classList.remove('compact'); parts.forEach(x => x.classList.remove('show')); paras.forEach(p => p.classList.remove('show')); skip.hidden = true; }
  };
})();

/* ---------- start ---------- */
const scenes = [S0, S1, S2, S3, SG, S4, S5];
scenes.forEach(() => { const li = document.createElement('li'); $('#progress ol').appendChild(li); dots.push(li); });
S1.reset(); S2.reset(); S4.reset();
GL.resize(); bgLayout(); paint(); S0.el.classList.add('on');

let raf = 0, last = performance.now();
function loop(now) {
  raf = requestAnimationFrame(loop);
  const dt = Math.max(0, Math.min(now - last, 50)); last = now; T += dt;
  GL.draw(dt); bgFrame(dt); const s = scenes[cur]; if (s.frame) s.frame(dt);
}
raf = requestAnimationFrame(loop);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { cancelAnimationFrame(raf); raf = 0; }
  else if (!raf) { last = performance.now(); raf = requestAnimationFrame(loop); }
});
let rz; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => { GL.resize(); bgLayout(); const s = scenes[cur]; if (s.layout) s.layout(); }, 150); });
})();

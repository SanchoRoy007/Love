// Typewriter effect
const typewriter = document.getElementById('typewriter');
const welcomeText = "Hey Love, This Page is Just for You 💌";
let i = 0;
function typeEffect() {
  if (i < welcomeText.length) {
    typewriter.innerHTML += welcomeText.charAt(i);
    i++;
    setTimeout(typeEffect, 70);
  }
}
typeEffect();

// Floating hearts animation
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function Heart(x, y, size, speed) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
  this.alpha = 1;
  this.update = function () {
    this.y -= this.speed;
    this.alpha -= 0.003;
  };
  this.draw = function () {
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = "rgba(255, 105, 180, 0.8)";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(this.x + this.size / 2, this.y - this.size,
                      this.x + this.size, this.y + this.size / 3,
                      this.x, this.y + this.size);
    ctx.bezierCurveTo(this.x - this.size, this.y + this.size / 3,
                      this.x - this.size / 2, this.y - this.size,
                      this.x, this.y);
    ctx.fill();
    ctx.globalAlpha = 1;
  };
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < 0.2) {
    hearts.push(new Heart(Math.random() * canvas.width, canvas.height, 20 + Math.random() * 10, 1 + Math.random()));
  }
  hearts.forEach((heart, i) => {
    heart.update();
    heart.draw();
    if (heart.alpha <= 0) hearts.splice(i, 1);
  });
  requestAnimationFrame(animate);
}
animate();

// Random love messages with typing
const messages = [
  "You're my sunshine on cloudy days ☀️",
  "Your strength amazes me every day 💪",
  "I wish I could hug you right now 🤗",
  "You're my favorite human being ❤️",
  "Pain will fade, but our love stays 🌹",
  "You're not alone, I’m with you always 🫂"
];

function showLoveMessage() {
  const loveText = document.getElementById("loveText");
  loveText.textContent = "";
  let msg = messages[Math.floor(Math.random() * messages.length)];
  let index = 0;
  function type() {
    if (index < msg.length) {
      loveText.textContent += msg.charAt(index);
      index++;
      setTimeout(type, 50);
    }
  }
  type();
}

// Pop-up
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Music play trigger
function startMusic() {
  const music = document.getElementById("bgMusic");
  music.play().then(() => {
    document.getElementById("playMusicBtn").style.display = "none";
  }).catch(err => {
    alert("Click the button to enable background music 🎶");
  });
}

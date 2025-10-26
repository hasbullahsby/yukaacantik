const CREDENTIALS = { username: 'yuka', password: 'yuka123' };

const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logout');
const toggleMusicBtn = document.getElementById('toggleMusic');
const bgAudio = document.getElementById('bgAudio');
const loginBox = document.getElementById('loginBox');
const resultBox = document.getElementById('resultBox');
const greeting = document.getElementById('greeting');
const subGreeting = document.getElementById('subGreeting');
const couplePhoto = document.getElementById('couplePhoto');

function setLoggedIn(name) {
  sessionStorage.setItem('loggedInName', name);
}

function clearLogin() {
  sessionStorage.removeItem('loggedInName');
}

function showResult(name) {
  greeting.textContent = `Hai, ${name}!`;
  subGreeting.textContent = 'Selamat menikmati momen ini — dari hasby untuk yuka ✨';
  loginBox.style.display = 'none';
  resultBox.style.display = 'block';
  bgAudio.play().catch(() => {});
}

function showLogin() {
  loginBox.style.display = 'block';
  resultBox.style.display = 'none';
  clearLogin();
  bgAudio.pause();
  bgAudio.currentTime = 0;
}

loginBtn.addEventListener('click', () => {
  const u = document.getElementById('username').value.trim();
  const p = document.getElementById('password').value;
  if (u === CREDENTIALS.username && p === CREDENTIALS.password) {
    setLoggedIn(u);
    showResult(u);
  } else {
    alert('Username atau password salah. Coba: yuka / yuka123');
  }
});

document.getElementById('logout').addEventListener('click', showLogin);
document.getElementById('toggleMusic').addEventListener('click', () => {
  if (bgAudio.paused) bgAudio.play();
  else bgAudio.pause();
});

function fillDemo() {
  document.getElementById('username').value = CREDENTIALS.username;
  document.getElementById('password').value = CREDENTIALS.password;
}

window.addEventListener('load', () => {
  const name = sessionStorage.getItem('loggedInName');
  if (name) showResult(name);
});

couplePhoto.addEventListener('click', () => {
  subGreeting.textContent = 'Kamu spesial — ingat selalu momen ini ❤️';
});

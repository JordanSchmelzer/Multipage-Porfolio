// DOM Elements

const defaultButton = document.getElementById('theme-default');
const summerButton = document.getElementById('theme-summer');
const coolButton = document.getElementById('theme-cool');
const dirtButton = document.getElementById('theme-dirt');
const body = document.body;

// Apply chaced theme on page reload

const theme = localStorage.getItem('theme');

if (theme){
  body.classList.add(theme);
}

// Button Event Handlers

defaultButton.onclick = () => {
  //body.className = '';
  body.className = 'theme-default';
  localStorage.setItem('theme','theme-default');
}

summerButton.onclick = () => {
  body.className ='theme-summer';
  localStorage.setItem('theme','theme-summer');
}

coolButton.onclick = () => {
  body.className = 'theme-cool';
  localStorage.setItem('theme','theme-cool');
}

dirtButton.onclick = () => {
  body.className = 'theme-dirt';
  localStorage.setItem('theme','theme-dirt');
}
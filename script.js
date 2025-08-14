// script.js
const themeSwitch = document.getElementById('theme-switch');
const langSwitch = document.getElementById('lang-switch');

themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});

langSwitch.addEventListener('change', () => {
  const lang = langSwitch.value;
  document.querySelectorAll('[data-pt]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});

// Tema light/dark
const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});

// Multi-idioma PT/EN
const langSwitch = document.getElementById('lang-switch');
langSwitch.addEventListener('change', () => {
  const lang = langSwitch.value;
  document.querySelectorAll('[data-pt]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});

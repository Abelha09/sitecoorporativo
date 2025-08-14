// Switch Light/Dark
const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Switch language
const langSelect = document.getElementById('langSelect');
langSelect.addEventListener('change', (e) => {
  const lang = e.target.value;
  document.querySelectorAll('[data-pt]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
});

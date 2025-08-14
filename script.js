// Theme switch
const themeBtn = document.getElementById('theme-switch');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
});

// Language switch
const langSelect = document.getElementById('lang-switch');
langSelect.addEventListener('change', () => {
  const lang = langSelect.value;
  document.querySelectorAll('[data-pt]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});

// Form submit (simulação)
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Mensagem enviada! Obrigado.');
});

// Theme switch
const themeBtn = document.getElementById('theme-switch');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});

// Language switch
const langSelect = document.getElementById('lang-switch');
langSelect.addEventListener('change', () => {
    const lang = langSelect.value;
    document.querySelectorAll('[data-pt]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
});

// Inicializa idioma
document.querySelectorAll('[data-pt]').forEach(el => {
    el.textContent = el.getAttribute('data-pt');
});

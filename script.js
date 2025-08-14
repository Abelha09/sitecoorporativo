// Tema light/dark
const themeBtn = document.getElementById('theme-switch');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});

// Switch de idioma
const langSelect = document.getElementById('lang-switch');
langSelect.addEventListener('change', () => {
    const lang = langSelect.value;
    document.querySelectorAll('[data-pt]').forEach(el => {
        el.innerText = el.dataset[lang];
        if(el.placeholder) el.placeholder = el.dataset[lang];
    });
});

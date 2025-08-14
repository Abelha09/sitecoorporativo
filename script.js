// Tema light/dark
const themeBtn = document.getElementById('theme-switch');
themeBtn.addEventListener('click', () => {
    if(document.body.classList.contains('light')) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        themeBtn.innerText = '☀️';
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        themeBtn.innerText = '🌙';
    }
});

// Switch de idioma
const langSelect = document.getElementById('lang-switch');
langSelect.addEventListener('change', () => {
    const lang = langSelect.value;
    document.querySelectorAll('[data-pt]').forEach(el => {
        if(el.placeholder !== undefined) {
            el.placeholder = el.dataset[lang];
        } else {
            el.innerText = el.dataset[lang];
        }
    });
});

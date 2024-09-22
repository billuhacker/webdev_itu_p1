
let translations;

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        translations = data; // Assign fetched data to the translations variable
        switchLanguage('en'); // Load default language
    })
    .catch(error => console.error('Error fetching the JSON data:', error));

// Function to switch language
function switchLanguage(language) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    switchLanguage(selectedLanguage);
});


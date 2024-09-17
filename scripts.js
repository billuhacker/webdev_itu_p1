
const translations = {
    en: {
        'profile-title': 'Professional Profile',
        'profile-description': "Hi, I'm Muhammad Bilawal, a passionate Computer Science student with a strong interest in web development,",
        'skills-title': 'Skills',
        'soft-skills-title': 'Soft Skills',
        'soft-skill-1': 'Teamwork',
        'soft-skill-2': 'Communication',
        'soft-skill-3': 'Problem-Solving',
        'hard-skills-title': 'Hard Skills',
        'hard-skill-1': 'Web Development',
        'hard-skill-2': 'JavaScript',
        'hard-skill-3': 'Python',
    },
    ar: {
        'profile-title': 'الملف الشخصي المهني',
        'profile-description': "مرحبًا! أنا محترف ذو مجموعة واسعة من المهارات والإنجازات.",
        'skills-title': 'المهارات',
        'soft-skills-title': 'المهارات الشخصية',
        'soft-skill-1': 'العمل الجماعي',
        'soft-skill-2': 'الاتصال',
        'soft-skill-3': 'حل المشكلات',
        'hard-skills-title': 'المهارات التقنية',
        'hard-skill-1': 'تطوير الويب',
        'hard-skill-2': 'جافا سكريبت',
        'hard-skill-3': 'بايثون',
    },
    fr: {
        'profile-title': 'Profil Professionnel',
        'profile-description': "Bonjour! Je suis un professionnel avec un large éventail de compétences et d'accomplissements.",
        'skills-title': 'Compétences',
        'soft-skills-title': 'Compétences Douces',
        'soft-skill-1': 'Travail d\'équipe',
        'soft-skill-2': 'Communication',
        'soft-skill-3': 'Résolution de Problèmes',
        'hard-skills-title': 'Compétences Techniques',
        'hard-skill-1': 'Développement Web',
        'hard-skill-2': 'JavaScript',
        'hard-skill-3': 'Python',
    },
    ur: {
        'profile-title': 'پروفیشنل پروفائل',
        'profile-description': 'ہیلو! میں ایک پیشہ ور ہوں جس میں وسیع مہارتوں اور کامیابیوں کا حامل ہوں۔',
        'skills-title': 'صلاحیتیں',
        'soft-skills-title': 'نرم صلاحیتیں',
        'soft-skill-1': 'ٹیم ورک',
        'soft-skill-2': 'رابطہ',
        'soft-skill-3': 'مسئلہ حل کرنا',
        'hard-skills-title': 'سخت صلاحیتیں',
        'hard-skill-1': 'ویب ڈویلپمنٹ',
        'hard-skill-2': 'جاوا اسکرپٹ',
        'hard-skill-3': 'پائیتھن',
    }
};

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


switchLanguage('en');

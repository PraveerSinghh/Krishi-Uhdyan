// Define the translations for different languages
const translations = {
    en: {
        title: "Krishi Udhyan",
        chooseLanguage: "Choose Language:",
        inputDetails: "Input Details",
        uploadSoilReport: "Upload Your Soil Report",
        location: "Location:",
        budget: "Budget:",
        dateSeason: "Date/Season:",
        bplQuestion: "Do you come under BPL?",
        yes: "Yes",
        no: "No",
        submit: "Submit",
        clickToUpload: "Click to Upload PDF",
        selectedFile: "Selected File: "
    },
    hi: {
        title: "कृषि उद्यान",
        chooseLanguage: "भाषा चुनें:",
        inputDetails: "इनपुट विवरण",
        uploadSoilReport: "अपनी मृदा रिपोर्ट अपलोड करें",
        location: "स्थान:",
        budget: "बजट:",
        dateSeason: "तारीख/मौसम:",
        bplQuestion: "क्या आप बीपीएल के तहत आते हैं?",
        yes: "हाँ",
        no: "नहीं",
        submit: "जमा करें",
        clickToUpload: "पीडीएफ अपलोड करने के लिए क्लिक करें",
        selectedFile: "चयनित फ़ाइल: "
    }
    // Add more languages here if needed
};

// Function to change the language
function changeLanguage() {
    const language = document.getElementById("language").value;

    // Update all the text content according to the selected language
    document.title = translations[language].title;
    document.querySelector('h1').textContent = translations[language].title;
    document.querySelector('label[for="language"]').textContent = translations[language].chooseLanguage;
    document.querySelector('h2').textContent = translations[language].inputDetails;
    document.querySelector('legend').textContent = translations[language].uploadSoilReport;
    document.querySelector('label[for="location"]').textContent = translations[language].location;
    document.querySelector('label[for="budget"]').textContent = translations[language].budget;
    document.querySelector('label[for="dateSeason"]').textContent = translations[language].dateSeason;
    document.querySelector('label[for="bpl-Yes"]').textContent = translations[language].bplQuestion;
    document.querySelector('label[for="bplYes"]').textContent = translations[language].yes;
    document.querySelector('label[for="bplNo"]').textContent = translations[language].no;
    document.querySelector('.interactive-button').textContent = translations[language].submit;
    document.querySelector('.upload-label p').textContent = translations[language].clickToUpload;
}

// Show uploaded file name
function showFileName() {
    const input = document.getElementById('soilReport');
    const fileName = input.files[0].name;
    const language = document.getElementById("language").value; // Get selected language
    document.getElementById('fileName').textContent = translations[language].selectedFile + fileName;
}

// Apply smooth transition on page load
window.onload = function() {
    document.body.classList.add('loaded');
};

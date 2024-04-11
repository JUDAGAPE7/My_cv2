const buttonlanguage = document.getElementById('language-toggle');
const currentLang = window.location.href.includes('ingles.html')
buttonlanguage.checked = currentLang

buttonlanguage.addEventListener('change', changePage);


function changePage() {
    if (buttonlanguage.checked) {
    
        window.location.href = 'ingles.html';
    } else {
        window.location.href = 'index.html';
     
    }
}


export default changePage;
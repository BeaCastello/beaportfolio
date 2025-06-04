const acceptBtn = document.getElementById('acceptBtn');
const rejectBtn = document.getElementById('rejectBtn');
const consentBox = document.getElementById('consentBox');


acceptBtn.addEventListener('click', () => {
    localStorage.setItem('consentGiven', 'true');
    consentBox.style.display = 'none';

});


rejectBtn.addEventListener('click', () => {
    localStorage.setItem('consentGiven', 'false');
    window.location.href = 'https://www.google.com'; 
});


window.onload = () => {
    const consent = localStorage.getItem('consentGiven');
    if (consent === 'true') {
        consentBox.style.display = 'none';

    } else if (consent === 'false') {
        window.location.href = 'https://www.google.com';
    } else {
        consentBox.style.display = 'block';
    }
};


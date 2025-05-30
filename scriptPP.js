const acceptBtn = document.getElementById('acceptBtn');
    const rejectBtn = document.getElementById('rejectBtn');
    const consentBox = document.getElementById('consentBox');
    const mainContent = document.getElementById('mainContent');

  
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('consentGiven', 'true');
      consentBox.style.display = 'none';
      mainContent.style.display = 'block';
    });

  
    rejectBtn.addEventListener('click', () => {
      localStorage.setItem('consentGiven', 'false');
      window.location.href = 'https://www.google.com'; 
    });

    
    window.onload = () => {
      const consent = localStorage.getItem('consentGiven');
      if (consent === 'true') {
        consentBox.style.display = 'none';
        mainContent.style.display = 'block';
      } else if (consent === 'false') {
        window.location.href = 'https://www.google.com';
      } else {
        consentBox.style.display = 'block';
      }
    };
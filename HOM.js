window.onload = function() {
    document.getElementById('tableagl').style.display = 'none';
    document.getElementById('mekanik').style.display = 'none';
    document.getElementById('elektrik').style.display = 'none';
};
// Tabloları gizle/göster
function toggleTable(id) {
    var table = document.getElementById(id);
    if (table.style.display === "none") {
        table.style.display = "block";
    } else {
        table.style.display = "none";
    }
}

// Form gönderme işlemi ve başarı mesajı
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Formun sayfayı yenilemesini engelle

        // Mevcut bir mesaj varsa temizle
        let existingMessage = form.querySelector('.success-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Başarı mesajını oluştur
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.innerHTML = `
            Başarıyla Gönderildi! 
            <button type="button" class="close-btn">Kapat</button>
        `;

        form.appendChild(successMessage);

        // Kapatma butonuna olay ekle
        const closeBtn = successMessage.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            successMessage.remove(); // Mesajı DOM'dan kaldır
        });

        // Mesajın görünümünü 5 saniye sonra otomatik olarak gizle
        setTimeout(() => {
            successMessage.remove(); // Mesajı DOM'dan kaldır
        }, 5000);
    });
});
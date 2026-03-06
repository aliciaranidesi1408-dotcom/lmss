document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // PASSWORD UPDATES:
    // admin@sekolah.sch.id  -> passwordbaru
    // ibu_aurel@gmail.com   -> 123456
    const users = {
        'admin@sekolah.sch.id':  { pw: 'passwordbaru', target: 'dashboard-admin.html' },
        'kepsek@sekolah.sch.id': { pw: 'kepsek',       target: 'dashboard-kepsek.html' },
        'irwan@gmail.com':       { pw: '123456',        target: 'dashboard-guru.html' },
        'aurel@gmail.com':       { pw: 'aurel',         target: 'dashboard-siswa.html' },
        'ibu_aurel@gmail.com':   { pw: '123456',        target: 'dashboard-orangtua.html' },
    };

    const userData = users[email];

    if (userData && userData.pw === password) {
        window.location.href = userData.target;
    } else {
        showErrorModal("Email atau Password salah! Silakan periksa kembali data Anda.");
    }
});

const modal   = document.getElementById("errorModal");
const span    = document.getElementsByClassName("close-btn")[0];
const closeBtn = document.getElementById("closeModalBtn");

function showErrorModal(message) {
    document.getElementById("errorMessage").innerText = message;
    modal.style.display = "block";
}

[span, closeBtn].forEach(btn => {
    btn.onclick = function() {
        modal.style.display = "none";
    };
});

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
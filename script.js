// ========== GLOBAL VARIABLES ==========
// ════════════════════════════════
//  LMS ADMIN — main.js
// ════════════════════════════════

// ── PAGE TITLES ──
const pageTitles = {
  dashboard:   ['Dashboard Admin',        'Kelola struktur sekolah dengan mudah'],
  guru:        ['Data Guru',              'Kelola seluruh data tenaga pengajar'],
  siswa:       ['Data Siswa',             'Kelola seluruh data peserta didik'],
  kelas:       ['Data Kelas',             'Kelola kelas dan wali kelas'],
  mapel:       ['Data Mata Pelajaran',    'Kelola kurikulum dan mata pelajaran'],
  enrollment:  ['Atur Enrollment',        'Hubungkan guru, siswa, kelas dan mata pelajaran'],
  monitoring:  ['Monitoring User',        'Pantau aktivitas seluruh pengguna'],
  pengaturan:  ['Pengaturan Sistem',      'Konfigurasi aplikasi dan profil sekolah'],
};

// ── NAVIGATION ──
function showPage(name, el) {
  // hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // show target
  const target = document.getElementById('page-' + name);
  if (target) target.classList.add('active');

  // update nav active state
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (el) el.classList.add('active');

  // update topbar title
  const t = pageTitles[name] || [name, ''];
  const titleEl    = document.getElementById('page-title');
  const subtitleEl = document.getElementById('page-subtitle');
  if (titleEl)    titleEl.textContent    = t[0];
  if (subtitleEl) subtitleEl.textContent = t[1];
}

// ── ACCORDION ──
function toggleAcc(header) {
  const body   = header.nextElementSibling;
  const isOpen = body.classList.contains('open');
  header.classList.toggle('open', !isOpen);
  body.classList.toggle('open',   !isOpen);
}

// ── MODAL ──
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}

function closeModalOutside(event, id) {
  if (event.target === document.getElementById(id)) closeModal(id);
}

// ── HAPUS (DELETE) CONFIRM ──
let pendingHapusLabel = '';

function confirmHapus(label) {
  pendingHapusLabel = label;
  const msgEl = document.getElementById('confirm-msg');
  if (msgEl) {
    msgEl.textContent = `Apakah Anda yakin ingin menghapus "${label}"? Data yang dihapus tidak dapat dikembalikan.`;
  }
  openModal('modal-confirm');
}

function doHapus() {
  closeModal('modal-confirm');
  showToast(`"${pendingHapusLabel}" berhasil dihapus`, 'error');
  addActivity(`Data dihapus: ${pendingHapusLabel}`, 'Oleh Admin Sekolah • Baru saja', 'del');
}

// ── SAVE DATA ──
function saveData(modalId, successMsg) {
  closeModal(modalId);
  showToast(successMsg, 'success');
  addActivity('Data baru berhasil disimpan', 'Oleh Admin Sekolah • Baru saja', 'add');
}

// ── TOAST ──
function showToast(msg, type = 'success') {
  const icon    = type === 'success' ? 'fa-check-circle' : 'fa-times-circle';
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fas ${icon}"></i> ${msg}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ── ACTIVITY FEED ──
function addActivity(title, sub, type) {
  const icons = {
    add:  '<i class="fas fa-plus"></i>',
    edit: '<i class="fas fa-pencil"></i>',
    del:  '<i class="fas fa-trash"></i>',
  };
  const feed = document.getElementById('activity-feed');
  if (!feed) return;

  const item = document.createElement('div');
  item.className = 'activity-item';
  item.innerHTML = `
    <div class="act-icon ${type}">${icons[type] || icons.add}</div>
    <div class="act-body">
      <h4>${title}</h4>
      <p>${sub}</p>
    </div>`;
  feed.insertBefore(item, feed.firstChild);

  // keep max 6 items
  while (feed.children.length > 6) feed.lastChild.remove();
}

// ── FILTER TABLE ──
function filterTable(input, tableId) {
  const q = input.value.toLowerCase();
  const table = document.getElementById(tableId);
  if (!table) return;
  table.querySelectorAll('tbody tr').forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
}

// ── ENROLLMENT ──
let enrollCount = 3;

function addEnrollment() {
  const selects = document.querySelectorAll('#page-enrollment select');
  if (selects.length < 3) return;

  const guru  = selects[0].value;
  const mapel = selects[1].value;
  const kelas = selects[2].value;
  enrollCount++;

  const tbody = document.getElementById('tbody-enrollment');
  if (!tbody) return;

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td class="enroll-table-td">${enrollCount}</td>
    <td class="enroll-table-td">${guru}</td>
    <td class="enroll-table-td"><span class="row-code">${mapel}</span></td>
    <td class="enroll-table-td">${kelas}</td>
    <td class="enroll-table-td">
      <button class="btn-del" onclick="confirmHapus('Enrollment ini')">
        <i class="fas fa-trash"></i> Hapus
      </button>
    </td>`;
  tbody.appendChild(tr);
  showToast(`Enrollment ${guru} → ${mapel} (${kelas}) berhasil!`, 'success');
}

// ── TOGGLE SWITCH ──
function toggleSwitch(el) {
  el.classList.toggle('on');
}

// ── INIT: open last accordion on dashboard load ──
document.addEventListener('DOMContentLoaded', () => {
  // auto-open "Mata Pelajaran" accordion
  const headers = document.querySelectorAll('.accordion-header');
  if (headers.length > 0) {
    const last = headers[headers.length - 1];
    last.click();
  }
});
let currentDeleteCallback = null;
let currentDeleteMessage = '';

// Data akun untuk demo login
const accounts = {
  'admin@smkn1.sch.id': { pw: 'admin123', name: 'Admin Sekolah', role: 'Admin' },
  'kepsek@smkn1.sch.id': { pw: 'kepsek123', name: 'Kepala Sekolah', role: 'Kepala Sekolah' },
  'guru@smkn1.sch.id': { pw: 'guru123', name: 'Ahmad Hidayat', role: 'Guru' },
  'siswa@smkn1.sch.id': { pw: 'siswa123', name: 'Budi Santoso', role: 'Siswa' },
  'orangtua@smkn1.sch.id': { pw: 'ortu123', name: 'Orang Tua', role: 'Orang Tua' }
};

// ========== PAGE NAVIGATION ==========
function showPage(pageId, element) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show selected page
  document.getElementById('page-' + pageId).classList.add('active');
  
  // Update active state in sidebar
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  if (element) {
    element.classList.add('active');
  }
  
  // Update title
  const titles = {
    'dashboard': 'Dashboard Admin',
    'guru': 'Data Guru',
    'siswa': 'Data Siswa',
    'kelas': 'Data Kelas',
    'mapel': 'Data Mata Pelajaran',
    'enrollment': 'Atur Enrollment',
    'monitoring': 'Monitoring User',
    'pengaturan': 'Pengaturan Sistem'
  };
  
  const subtitles = {
    'dashboard': 'Kelola struktur sekolah dengan mudah',
    'guru': 'Kelola seluruh data tenaga pengajar',
    'siswa': 'Kelola seluruh data peserta didik',
    'kelas': 'Kelola kelas dan wali kelas',
    'mapel': 'Kelola kurikulum dan mata pelajaran',
    'enrollment': 'Hubungkan guru, siswa, kelas dan mata pelajaran',
    'monitoring': 'Pantau aktivitas dan akses seluruh pengguna sistem',
    'pengaturan': 'Konfigurasi aplikasi dan profil sekolah'
  };
  
  document.getElementById('page-title').textContent = titles[pageId] || 'Dashboard Admin';
  document.getElementById('page-subtitle').textContent = subtitles[pageId] || 'Kelola struktur sekolah dengan mudah';
}

// ========== ACCORDION ==========
function toggleAcc(header) {
  header.classList.toggle('open');
  const body = header.nextElementSibling;
  body.classList.toggle('open');
}

// ========== MODALS ==========
function openModal(modalId) {
  document.getElementById(modalId).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('open');
  document.body.style.overflow = 'auto';
}

function closeModalOutside(event, modalId) {
  if (event.target.classList.contains('modal-overlay')) {
    closeModal(modalId);
  }
}

// ========== TOAST NOTIFICATIONS ==========
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
  
  toast.innerHTML = `
    <i class="fas ${icon}"></i>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'toastIn 0.3s reverse';
    setTimeout(() => {
      container.removeChild(toast);
    }, 300);
  }, 3000);
}

// ========== CONFIRM DELETE ==========
function confirmHapus(itemName) {
  currentDeleteMessage = itemName;
  document.getElementById('confirm-msg').textContent = 
    `Apakah Anda yakin ingin menghapus ${itemName}?`;
  openModal('modal-confirm');
}

function doHapus() {
  closeModal('modal-confirm');
  showToast(`${currentDeleteMessage} berhasil dihapus!`, 'success');
}

// ========== FILTER TABLE ==========
function filterTable(searchInputId, tableId) {
  const input = document.getElementById(searchInputId);
  const filter = input.value.toUpperCase();
  const table = document.getElementById(tableId);
  const tr = table.getElementsByTagName('tr');
  
  for (let i = 1; i < tr.length; i++) {
    let found = false;
    const td = tr[i].getElementsByTagName('td');
    for (let j = 0; j < td.length; j++) {
      if (td[j]) {
        const txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          found = true;
          break;
        }
      }
    }
    tr[i].style.display = found ? '' : 'none';
  }
}

function filterTableKelas() {
  const filter = document.getElementById('filter-kelas').value;
  const table = document.getElementById('tbl-siswa');
  const tr = table.getElementsByTagName('tr');
  
  for (let i = 1; i < tr.length; i++) {
    if (!filter) {
      tr[i].style.display = '';
      continue;
    }
    const kelasTd = tr[i].getElementsByTagName('td')[3]; // Kolom kelas
    if (kelasTd) {
      const kelas = kelasTd.textContent || kelasTd.innerText;
      tr[i].style.display = kelas === filter ? '' : 'none';
    }
  }
}

function filterTableRole() {
  const filter = document.getElementById('filter-role').value;
  const table = document.getElementById('tbl-monitor');
  const tr = table.getElementsByTagName('tr');
  
  for (let i = 1; i < tr.length; i++) {
    if (!filter) {
      tr[i].style.display = '';
      continue;
    }
    const roleTd = tr[i].getElementsByTagName('td')[1]; // Kolom role
    if (roleTd) {
      const role = roleTd.textContent || roleTd.innerText;
      tr[i].style.display = role.includes(filter) ? '' : 'none';
    }
  }
}

// ========== TOGGLE SWITCH ==========
function toggleSwitch(element) {
  element.classList.toggle('on');
  const setting = element.id.replace('toggle-', '');
  const isOn = element.classList.contains('on');
  showToast(`Pengaturan ${setting} diubah menjadi ${isOn ? 'ON' : 'OFF'}`, 'success');
}

// ========== SAVE FUNCTIONS ==========
function simpanGuru() {
  closeModal('modal-guru');
  showToast('Data guru berhasil disimpan!', 'success');
}

function simpanSiswa() {
  closeModal('modal-siswa');
  showToast('Data siswa berhasil disimpan!', 'success');
}

function simpanKelas() {
  closeModal('modal-kelas');
  showToast('Data kelas berhasil disimpan!', 'success');
}

function simpanMapel() {
  closeModal('modal-mapel');
  showToast('Mata pelajaran berhasil disimpan!', 'success');
}

function simpanJurusan() {
  closeModal('modal-jurusan');
  showToast('Jurusan berhasil disimpan!', 'success');
}

function simpanProfil() {
  showToast('Profil sekolah berhasil disimpan!', 'success');
}

function ubahPassword() {
  const passBaru = document.getElementById('password-baru').value;
  const passKonfirm = document.getElementById('password-konfirmasi').value;
  
  if (!passBaru || !passKonfirm) {
    showToast('Password tidak boleh kosong!', 'error');
    return;
  }
  
  if (passBaru !== passKonfirm) {
    showToast('Konfirmasi password tidak cocok!', 'error');
    return;
  }
  
  showToast('Password berhasil diubah!', 'success');
  document.getElementById('password-baru').value = '';
  document.getElementById('password-konfirmasi').value = '';
}

// ========== ENROLLMENT ==========
function addEnrollment() {
  const guru = document.getElementById('enroll-guru').value;
  const mapel = document.getElementById('enroll-mapel').value;
  const kelas = document.getElementById('enroll-kelas').value;
  
  showToast(`Enrollment berhasil: ${guru} - ${mapel} - ${kelas}`, 'success');
}

// ========== LOGOUT ==========
function logout() {
  localStorage.removeItem('lms_user');
  window.location.href = 'index.html';
}

// ========== LOGIN FUNCTION ==========
function doLogin() {
  const email  = document.getElementById('emailInput').value.trim();
  const pw     = document.getElementById('passwordInput').value;
  const btn    = document.getElementById('loginBtn');
  const emailEl = document.getElementById('emailInput');
  const pwEl    = document.getElementById('passwordInput');

  hideError();
  emailEl.classList.remove('error-field');
  pwEl.classList.remove('error-field');

  if (!email || !pw) {
    showError('Email dan password tidak boleh kosong.');
    if (!email) emailEl.classList.add('error-field');
    if (!pw)    pwEl.classList.add('error-field');
    return;
  }

  btn.classList.add('loading');

  setTimeout(() => {
    btn.classList.remove('loading');
    const acc = accounts[email];

    if (!acc || acc.pw !== pw) {
      showError('Email atau password salah. Coba klik akun demo di bawah.');
      emailEl.classList.add('error-field');
      pwEl.classList.add('error-field');
      setTimeout(() => {
        emailEl.classList.remove('error-field');
        pwEl.classList.remove('error-field');
      }, 1400);
      return;
    }

    // ── SUCCESS ──
    // Simpan data user ke localStorage agar bisa dipakai di dashboard
    localStorage.setItem('lms_user', JSON.stringify({
      email: email,
      name: acc.name,
      role: acc.role
    }));

    document.getElementById('successMsg').textContent =
      `Halo, ${acc.name}! (${acc.role}) — mengalihkan ke dashboard…`;

    const overlay = document.getElementById('successOverlay');
    overlay.classList.add('show');
    setTimeout(() => {
      document.getElementById('progressFill').style.width = '100%';
    }, 120);

    // REDIRECT BERDASARKAN ROLE
    setTimeout(() => {
      let dashboardUrl = '';

      // Mapping role ke file dashboard
      const roleToFile = {
        'Admin': 'dashboard-admin.html',
        'Kepala Sekolah': 'dashboard-kepsek.html',
        'Guru': 'dashboard-guru.html',
        'Siswa': 'dashboard-siswa.html',
        'Orang Tua': 'dashboard-orangtua.html',
        'Alumni': 'dashboard-siswa.html' // alumni bisa ke dashboard siswa
      };

      // Cari file berdasarkan role
      dashboardUrl = roleToFile[acc.role] || 'index.html';
      
      // Redirect ke dashboard
      window.location.href = dashboardUrl;
    }, 2100);
  }, 1300);
}

// Helper functions untuk login
function hideError() {
  // Implement if needed
}

function showError(message) {
  alert(message); // Simple fallback
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', function() {
  // Check if user is logged in (for dashboard pages)
  const user = localStorage.getItem('lms_user');
  if (user) {
    const userData = JSON.parse(user);
    // Update user info in sidebar
    const avatar = document.querySelector('.user-avatar');
    const userName = document.querySelector('.user-info h4');
    const userRole = document.querySelector('.user-info p');
    
    if (avatar && userData.name) {
      const initials = userData.name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();
      avatar.textContent = initials;
    }
    if (userName && userData.name) userName.textContent = userData.name;
    if (userRole && userData.role) userRole.textContent = userData.role;
  }
  
  // Open first accordion by default
  const firstAccordion = document.querySelector('.accordion-header');
  if (firstAccordion) {
    firstAccordion.classList.add('open');
    firstAccordion.nextElementSibling.classList.add('open');
  }
});
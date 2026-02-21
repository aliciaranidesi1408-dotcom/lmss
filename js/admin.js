'use strict';
const Store = {
  guru: [
    { id: 1, nama: 'Ahmad Hidayat',     nip: '19850101',   email: 'ahmad@smkn1.sch.id',  hp: '081234567890', mapel: 'Basis Data',       status: 'Aktif',    kelas: 'XI RPL 1, 2', alamat: 'Jl. Merdeka No. 10', bg: '#16a34a', initials: 'AH' },
    { id: 2, nama: 'Siti Rahmawati',    nip: '19900205',   email: 'siti@smkn1.sch.id',   hp: '081298765432', mapel: 'Pemrograman Web',  status: 'Aktif',    kelas: 'XI RPL 2',    alamat: 'Jl. Sudirman No. 5', bg: '#0ea5e9', initials: 'SR' },
    { id: 3, nama: 'Budi Prasetyo',     nip: '19881115',   email: 'budi@smkn1.sch.id',   hp: '081356789012', mapel: 'Matematika',       status: 'Aktif',    kelas: 'XII RPL 1',   alamat: 'Jl. Pahlawan No. 3', bg: '#f59e0b', initials: 'BP' },
  ],
  siswa: [
    { id: 1, nama: 'Budi Santoso',      nisn: '0011234567', kelas: 'XI RPL 1', jurusan: 'RPL', status: 'Aktif',    ortu: 'Santoso Bin Ali', lahir: '2007-05-12', gender: 'Laki-laki', hp: '081234501234', email: 'budis@gmail.com', bg: '#8b5cf6', initials: 'BS' },
    { id: 2, nama: 'Dewi Lestari',      nisn: '0019876543', kelas: 'XI RPL 2', jurusan: 'RPL', status: 'Aktif',    ortu: 'Lestari Dewi',    lahir: '2007-08-20', gender: 'Perempuan', hp: '081298701234', email: 'dewil@gmail.com', bg: '#ec4899', initials: 'DL' },
    { id: 3, nama: 'Rizky Firmansyah',  nisn: '0015432198', kelas: 'XI TKJ 1', jurusan: 'TKJ', status: 'Non-aktif', ortu: 'Firmansyah',     lahir: '2006-11-03', gender: 'Laki-laki', hp: '081356712345', email: 'rizkf@gmail.com', bg: '#f97316', initials: 'RF' },
  ],
  kelas: [
    { id: 1, nama: 'XI RPL 1',  jurusan: 'RPL', tingkat: 'XI',  wali: 'Ahmad Hidayat',  kapasitas: 35, siswa: 30, ta: '2025/2026' },
    { id: 2, nama: 'XI RPL 2',  jurusan: 'RPL', tingkat: 'XI',  wali: 'Siti Rahmawati', kapasitas: 35, siswa: 28, ta: '2025/2026' },
    { id: 3, nama: 'XI TKJ 1',  jurusan: 'TKJ', tingkat: 'XI',  wali: 'Budi Prasetyo',  kapasitas: 35, siswa: 32, ta: '2025/2026' },
    { id: 4, nama: 'XII RPL 1', jurusan: 'RPL', tingkat: 'XII', wali: 'Ahmad Hidayat',  kapasitas: 35, siswa: 29, ta: '2025/2026' },
  ],
  mapel: [
    { id: 1, nama: 'Basis Data',          kode: 'BD101', guru: 'Ahmad Hidayat',   sks: 4, jurusan: 'RPL',   deskripsi: 'Pengantar basis data relasional dan SQL.' },
    { id: 2, nama: 'Pemrograman Web',     kode: 'PW101', guru: 'Siti Rahmawati',  sks: 4, jurusan: 'RPL',   deskripsi: 'HTML, CSS, JavaScript, dan framework web.' },
    { id: 3, nama: 'Pemrograman Mobile',  kode: 'PM101', guru: 'Siti Rahmawati',  sks: 3, jurusan: 'RPL',   deskripsi: 'Pengembangan aplikasi Android dan iOS.' },
    { id: 4, nama: 'Matematika',          kode: 'MAT11', guru: 'Budi Prasetyo',   sks: 3, jurusan: 'Umum',  deskripsi: 'Matematika umum tingkat XI-XII.' },
    { id: 5, nama: 'Bahasa Inggris',      kode: 'ENG11', guru: '—',               sks: 2, jurusan: 'Umum',  deskripsi: 'Bahasa Inggris umum dan teknis.' },
  ],
  enrollment: [
    { id: 1, guru: 'Ahmad Hidayat',  mapel: 'Basis Data',       kelas: 'XI RPL 1' },
    { id: 2, guru: 'Ahmad Hidayat',  mapel: 'Basis Data',       kelas: 'XI RPL 2' },
    { id: 3, guru: 'Siti Rahmawati', mapel: 'Pemrograman Web',  kelas: 'XI RPL 2' },
  ],
  jurusan: [
    { id: 1, nama: 'Rekayasa Perangkat Lunak', kode: 'RPL', kepala: 'Ahmad Hidayat' },
    { id: 2, nama: 'Teknik Komputer dan Jaringan', kode: 'TKJ', kepala: 'Budi Prasetyo' },
  ],
  notifications: [
    { id: 1, title: 'Siswa baru ditambahkan', body: 'Budi Santoso bergabung ke XI RPL 1', time: '5 menit lalu', read: false },
    { id: 2, title: 'Data guru diperbarui',   body: 'Pak Ahmad – Mapel Basis Data',       time: '1 jam lalu',   read: false },
    { id: 3, title: 'Kelas baru dibuat',       body: 'XII TKJ 1 berhasil dibuat',          time: '2 jam lalu',   read: true  },
    { id: 4, title: 'Login gagal terdeteksi',  body: 'Percobaan login mencurigakan',        time: '3 jam lalu',   read: true  },
  ],
  activityLog: [
    { type: 'add',  title: 'Siswa baru ditambahkan', desc: 'Budi Santoso – XI RPL 1',   time: '5 menit lalu' },
    { type: 'edit', title: 'Data guru diperbarui',   desc: 'Pak Ahmad – Mapel Basis Data', time: '1 jam lalu'  },
    { type: 'add',  title: 'Kelas baru dibuat',       desc: 'XII TKJ 1 – 30 siswa',       time: '2 jam lalu'  },
  ],
  nextId: { guru: 4, siswa: 4, kelas: 5, mapel: 6, enrollment: 4, jurusan: 3 },
  editTarget: null,
  deleteTarget: null,
  deleteType: null,
};

function $(id) { return document.getElementById(id); }
function $q(sel, ctx = document) { return ctx.querySelector(sel); }
function $qa(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function makeInitials(name) {
  return name.trim().split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

function randomColor() {
  const colors = ['#16a34a','#0ea5e9','#f59e0b','#8b5cf6','#ec4899','#f97316','#06b6d4','#6366f1'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

document.addEventListener('click', function(e) {
  const btn = e.target.closest('button, .btn-primary, .btn-cancel, .quick-card, .nav-item');
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top  = (e.clientY - rect.top - size / 2) + 'px';
  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
});

const toastIcons = { success: 'fas fa-check-circle', error: 'fas fa-times-circle', warning: 'fas fa-exclamation-circle', info: 'fas fa-info-circle' };

function showToast(message, type = 'info', duration = 3500) {
  const container = $('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="${toastIcons[type] || toastIcons.info} toast-icon"></i>
    <span class="toast-msg">${message}</span>
    <i class="fas fa-times toast-close"></i>
  `;
  container.appendChild(toast);

  const close = toast.querySelector('.toast-close');
  const dismiss = () => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 350);
  };
  close.addEventListener('click', dismiss);
  toast.addEventListener('click', dismiss);
  setTimeout(dismiss, duration);
}

const pageConfig = {
  dashboard:  { title: 'Dashboard Admin',        subtitle: 'Kelola struktur sekolah dengan mudah' },
  guru:       { title: 'Data Guru',              subtitle: 'Kelola seluruh data tenaga pengajar' },
  siswa:      { title: 'Data Siswa',             subtitle: 'Kelola seluruh data peserta didik' },
  kelas:      { title: 'Data Kelas',             subtitle: 'Kelola kelas dan wali kelas' },
  mapel:      { title: 'Mata Pelajaran',         subtitle: 'Kelola kurikulum dan mata pelajaran' },
  enrollment: { title: 'Atur Enrollment',        subtitle: 'Hubungkan guru, siswa, kelas dan mata pelajaran' },
  monitoring: { title: 'Monitoring User',        subtitle: 'Pantau aktivitas dan akses seluruh pengguna' },
  pengaturan: { title: 'Pengaturan Sistem',      subtitle: 'Konfigurasi aplikasi dan profil sekolah' },
};

function showPage(name, navEl) {
  $qa('.page').forEach(p => p.classList.remove('active'));
  $qa('.nav-item').forEach(n => n.classList.remove('active'));
  const page = $(`page-${name}`);
  if (page) page.classList.add('active');
  if (navEl) navEl.classList.add('active');
  const cfg = pageConfig[name] || {};
  if ($('page-title'))    $('page-title').textContent    = cfg.title    || '';
  if ($('page-subtitle')) $('page-subtitle').textContent = cfg.subtitle || '';

  if (name === 'guru')       renderGuruTable();
  if (name === 'siswa')      renderSiswaTable();
  if (name === 'kelas')      renderKelasTable();
  if (name === 'mapel')      renderMapelTable();
  if (name === 'enrollment') renderEnrollTable();
  if (name === 'dashboard')  updateDashboard();
  if (name === 'monitoring') renderMonitoringTable();

  closeAllPanels();
}

function toggleAcc(header) {
  const body = header.nextElementSibling;
  const isOpen = header.classList.contains('open');
  $qa('.accordion-header.open').forEach(h => {
    h.classList.remove('open');
    h.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    header.classList.add('open');
    body.classList.add('open');
  }
}

let currentModal = null;

function openModal(id, editData = null) {
  closeAllModals();
  const overlay = $(id);
  if (!overlay) return;
  overlay.classList.add('open');
  currentModal = id;
  Store.editTarget = editData;

  if (editData) {
    const form = overlay.querySelector('.modal');
    Object.keys(editData).forEach(key => {
      const input = form.querySelector(`[data-field="${key}"]`);
      if (input) input.value = editData[key];
    });
  }
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const overlay = $(id);
  if (overlay) overlay.classList.remove('open');
  currentModal = null;
  Store.editTarget = null;
  document.body.style.overflow = '';
}

function closeAllModals() {
  $qa('.modal-overlay').forEach(o => o.classList.remove('open'));
  currentModal = null;
  document.body.style.overflow = '';
}

function closeModalOutside(event, id) {
  if (event.target === $(id)) closeModal(id);
}

// ESC key to close modals
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeAllModals();
    closeAllPanels();
  }
});

/* ────────────────────────────────────────
   CONFIRM HAPUS
──────────────────────────────────────── */
function confirmHapus(nama, type, id) {
  Store.deleteTarget = { nama, type, id };
  $('confirm-msg').innerHTML = `Apakah Anda yakin ingin menghapus <strong>${nama}</strong>?<br><small style="color:#c0392b">Tindakan ini tidak dapat dibatalkan.</small>`;
  openModal('modal-confirm');
}

function doHapus() {
  if (!Store.deleteTarget) { closeModal('modal-confirm'); return; }
  const { nama, type, id } = Store.deleteTarget;

  const typeMap = { guru: Store.guru, siswa: Store.siswa, kelas: Store.kelas, mapel: Store.mapel, enrollment: Store.enrollment, jurusan: Store.jurusan };
  if (type && typeMap[type] && id) {
    const arr = typeMap[type];
    const idx = arr.findIndex(x => x.id === id);
    if (idx > -1) arr.splice(idx, 1);
  }

  addActivity('del', `${nama} dihapus`, 'Data berhasil dihapus dari sistem', 'Baru saja');
  closeModal('modal-confirm');
  Store.deleteTarget = null;

  // Refresh current page
  refreshCurrentPage();
  updateDashboard();
  showToast(`${nama} berhasil dihapus!`, 'success');
}

function refreshCurrentPage() {
  const active = $q('.page.active');
  if (!active) return;
  const pageId = active.id.replace('page-', '');
  if (pageId === 'guru') renderGuruTable();
  else if (pageId === 'siswa') renderSiswaTable();
  else if (pageId === 'kelas') renderKelasTable();
  else if (pageId === 'mapel') renderMapelTable();
  else if (pageId === 'enrollment') renderEnrollTable();
  else if (pageId === 'dashboard') {
    renderAccordion();
    updateDashboard();
  }
}

/* ────────────────────────────────────────
   SAVE DATA (GURU)
──────────────────────────────────────── */
function saveGuru() {
  const overlay = $('modal-guru');
  const get = (field) => {
    const el = overlay.querySelector(`[data-field="${field}"]`);
    return el ? el.value.trim() : '';
  };
  const nama   = get('nama');
  const nip    = get('nip');
  const email  = get('email');
  const hp     = get('hp');
  const mapel  = get('mapel');
  const status = get('status');
  const alamat = get('alamat');

  if (!nama) { showToast('Nama lengkap harus diisi!', 'error'); return; }
  if (!nip)  { showToast('NIP harus diisi!', 'error'); return; }
  if (!email) { showToast('Email harus diisi!', 'error'); return; }

  if (Store.editTarget) {
    Object.assign(Store.editTarget, { nama, nip, email, hp, mapel, status, alamat, initials: makeInitials(nama) });
    addActivity('edit', 'Data guru diperbarui', `${nama} – ${mapel}`, 'Baru saja');
    showToast(`Data ${nama} berhasil diperbarui!`, 'success');
  } else {
    const newGuru = { id: Store.nextId.guru++, nama, nip, email, hp, mapel, status, alamat, kelas: '—', bg: randomColor(), initials: makeInitials(nama) };
    Store.guru.push(newGuru);
    addActivity('add', 'Guru baru ditambahkan', `${nama} – ${mapel}`, 'Baru saja');
    showToast(`Guru ${nama} berhasil ditambahkan!`, 'success');
  }

  closeModal('modal-guru');
  renderGuruTable();
  updateDashboard();
}

/* ────────────────────────────────────────
   SAVE DATA (SISWA)
──────────────────────────────────────── */
function saveSiswa() {
  const overlay = $('modal-siswa');
  const get = (field) => {
    const el = overlay.querySelector(`[data-field="${field}"]`);
    return el ? el.value.trim() : '';
  };
  const nama   = get('nama');
  const nisn   = get('nisn');
  const kelas  = get('kelas');
  const jurusan = get('jurusan');
  const lahir  = get('lahir');
  const gender = get('gender');
  const hp     = get('hp');
  const email  = get('email');
  const ortu   = get('ortu');
  const status = get('status');

  if (!nama)  { showToast('Nama lengkap harus diisi!', 'error'); return; }
  if (!nisn)  { showToast('NISN harus diisi!', 'error'); return; }

  if (Store.editTarget) {
    Object.assign(Store.editTarget, { nama, nisn, kelas, jurusan, lahir, gender, hp, email, ortu, status, initials: makeInitials(nama) });
    addActivity('edit', 'Data siswa diperbarui', `${nama} – ${kelas}`, 'Baru saja');
    showToast(`Data ${nama} berhasil diperbarui!`, 'success');
  } else {
    const newSiswa = { id: Store.nextId.siswa++, nama, nisn, kelas, jurusan, lahir, gender, hp, email, ortu, status, bg: randomColor(), initials: makeInitials(nama) };
    Store.siswa.push(newSiswa);
    addActivity('add', 'Siswa baru ditambahkan', `${nama} – ${kelas}`, 'Baru saja');
    showToast(`Siswa ${nama} berhasil ditambahkan!`, 'success');
  }

  closeModal('modal-siswa');
  renderSiswaTable();
  updateDashboard();
}

/* ────────────────────────────────────────
   SAVE DATA (KELAS)
──────────────────────────────────────── */
function saveKelas() {
  const overlay = $('modal-kelas');
  const get = (field) => { const el = overlay.querySelector(`[data-field="${field}"]`); return el ? el.value.trim() : ''; };
  const nama     = get('nama');
  const tingkat  = get('tingkat');
  const jurusan  = get('jurusan');
  const kapasitas = parseInt(get('kapasitas')) || 35;
  const wali     = get('wali');
  const ta       = get('ta');

  if (!nama) { showToast('Nama kelas harus diisi!', 'error'); return; }

  if (Store.editTarget) {
    Object.assign(Store.editTarget, { nama, tingkat, jurusan, kapasitas, wali, ta });
    addActivity('edit', 'Data kelas diperbarui', nama, 'Baru saja');
    showToast(`Kelas ${nama} berhasil diperbarui!`, 'success');
  } else {
    const newKelas = { id: Store.nextId.kelas++, nama, tingkat, jurusan, kapasitas, wali, ta, siswa: 0 };
    Store.kelas.push(newKelas);
    addActivity('add', 'Kelas baru dibuat', `${nama} – ${wali}`, 'Baru saja');
    showToast(`Kelas ${nama} berhasil ditambahkan!`, 'success');
  }

  closeModal('modal-kelas');
  renderKelasTable();
  updateDashboard();
}

/* ────────────────────────────────────────
   SAVE DATA (MAPEL)
──────────────────────────────────────── */
function saveMapel() {
  const overlay = $('modal-mapel');
  const get = (field) => { const el = overlay.querySelector(`[data-field="${field}"]`); return el ? el.value.trim() : ''; };
  const nama    = get('nama');
  const kode    = get('kode');
  const jurusan = get('jurusan');
  const sks     = parseInt(get('sks')) || 3;
  const guru    = get('guru');
  const deskripsi = get('deskripsi');

  if (!nama) { showToast('Nama mapel harus diisi!', 'error'); return; }
  if (!kode) { showToast('Kode mapel harus diisi!', 'error'); return; }

  if (Store.editTarget) {
    Object.assign(Store.editTarget, { nama, kode, jurusan, sks, guru, deskripsi });
    addActivity('edit', 'Mapel diperbarui', nama, 'Baru saja');
    showToast(`Mapel ${nama} berhasil diperbarui!`, 'success');
  } else {
    const newMapel = { id: Store.nextId.mapel++, nama, kode, jurusan, sks, guru, deskripsi };
    Store.mapel.push(newMapel);
    addActivity('add', 'Mapel baru ditambahkan', nama, 'Baru saja');
    showToast(`Mapel ${nama} berhasil ditambahkan!`, 'success');
  }

  closeModal('modal-mapel');
  renderMapelTable();
  updateDashboard();
}

/* ────────────────────────────────────────
   SAVE DATA (JURUSAN)
──────────────────────────────────────── */
function saveJurusan() {
  const overlay = $('modal-jurusan');
  const get = (field) => { const el = overlay.querySelector(`[data-field="${field}"]`); return el ? el.value.trim() : ''; };
  const nama   = get('nama');
  const kode   = get('kode');
  const kepala = get('kepala');

  if (!nama) { showToast('Nama jurusan harus diisi!', 'error'); return; }
  if (!kode) { showToast('Kode jurusan harus diisi!', 'error'); return; }

  if (Store.editTarget) {
    Object.assign(Store.editTarget, { nama, kode, kepala });
    showToast(`Jurusan ${kode} berhasil diperbarui!`, 'success');
  } else {
    Store.jurusan.push({ id: Store.nextId.jurusan++, nama, kode, kepala });
    showToast(`Jurusan ${kode} berhasil ditambahkan!`, 'success');
  }
  closeModal('modal-jurusan');
  renderAccordion();
}

/* ────────────────────────────────────────
   RENDER: GURU TABLE
──────────────────────────────────────── */
function renderGuruTable() {
  const tbody = $q('#tbl-guru tbody');
  if (!tbody) return;
  tbody.innerHTML = Store.guru.map((g, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>
        <div class="cell-user">
          <div class="avatar-sm" style="background:${g.bg}">${g.initials}</div>
          <div><strong>${g.nama}</strong><small>${g.email}</small></div>
        </div>
      </td>
      <td><span class="row-code">${g.nip}</span></td>
      <td>${g.mapel}</td>
      <td>${g.kelas}</td>
      <td><span class="badge-status ${g.status === 'Aktif' ? 'aktif' : 'nonaktif'}">${g.status}</span></td>
      <td>
        <div class="td-actions">
          <button class="btn-icon view" title="Detail" onclick="viewDetail('guru', ${g.id})"><i class="fas fa-eye"></i></button>
          <button class="btn-icon edit" title="Edit" onclick="editGuru(${g.id})"><i class="fas fa-pencil"></i></button>
          <button class="btn-icon del"  title="Hapus" onclick="confirmHapus('Guru ${g.nama}', 'guru', ${g.id})"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
  updateBadge('badge-guru', Store.guru.length);
  $('stat-guru').textContent = Store.guru.length;
}

function editGuru(id) {
  const guru = Store.guru.find(g => g.id === id);
  if (!guru) return;
  Store.editTarget = guru;
  openModal('modal-guru');
  // Fill form
  const ov = $('modal-guru');
  const setVal = (field, val) => { const el = ov.querySelector(`[data-field="${field}"]`); if (el) el.value = val || ''; };
  setVal('nama', guru.nama); setVal('nip', guru.nip); setVal('email', guru.email);
  setVal('hp', guru.hp); setVal('mapel', guru.mapel); setVal('status', guru.status); setVal('alamat', guru.alamat);
}

/* ────────────────────────────────────────
   RENDER: SISWA TABLE
──────────────────────────────────────── */
function renderSiswaTable() {
  const tbody = $q('#tbl-siswa tbody');
  if (!tbody) return;
  tbody.innerHTML = Store.siswa.map((s, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>
        <div class="cell-user">
          <div class="avatar-sm" style="background:${s.bg}">${s.initials}</div>
          <div><strong>${s.nama}</strong><small>${s.nisn}</small></div>
        </div>
      </td>
      <td><span class="row-code">${s.nisn}</span></td>
      <td>${s.kelas}</td>
      <td>${s.jurusan}</td>
      <td><span class="badge-status ${s.status === 'Aktif' ? 'aktif' : 'nonaktif'}">${s.status}</span></td>
      <td>
        <div class="td-actions">
          <button class="btn-icon view" title="Detail" onclick="viewDetail('siswa', ${s.id})"><i class="fas fa-eye"></i></button>
          <button class="btn-icon edit" title="Edit" onclick="editSiswa(${s.id})"><i class="fas fa-pencil"></i></button>
          <button class="btn-icon del"  title="Hapus" onclick="confirmHapus('Siswa ${s.nama}', 'siswa', ${s.id})"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
  updateBadge('badge-siswa', Store.siswa.length);
  $('stat-siswa').textContent = Store.siswa.length;
}

function editSiswa(id) {
  const siswa = Store.siswa.find(s => s.id === id);
  if (!siswa) return;
  Store.editTarget = siswa;
  openModal('modal-siswa');
  const ov = $('modal-siswa');
  const setVal = (field, val) => { const el = ov.querySelector(`[data-field="${field}"]`); if (el) el.value = val || ''; };
  setVal('nama', siswa.nama); setVal('nisn', siswa.nisn); setVal('kelas', siswa.kelas);
  setVal('jurusan', siswa.jurusan); setVal('lahir', siswa.lahir); setVal('gender', siswa.gender);
  setVal('hp', siswa.hp); setVal('email', siswa.email); setVal('ortu', siswa.ortu); setVal('status', siswa.status);
}

/* ────────────────────────────────────────
   RENDER: KELAS TABLE
──────────────────────────────────────── */
function renderKelasTable() {
  const tbody = $q('#tbl-kelas tbody');
  if (!tbody) return;
  tbody.innerHTML = Store.kelas.map((k, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><strong>${k.nama}</strong></td>
      <td>${k.jurusan}</td>
      <td>${k.tingkat}</td>
      <td>${k.wali}</td>
      <td><span class="badge-status aktif">${k.siswa} siswa</span></td>
      <td>
        <div class="td-actions">
          <button class="btn-icon view" title="Detail" onclick="viewDetail('kelas', ${k.id})"><i class="fas fa-eye"></i></button>
          <button class="btn-icon edit" title="Edit" onclick="editKelas(${k.id})"><i class="fas fa-pencil"></i></button>
          <button class="btn-icon del"  title="Hapus" onclick="confirmHapus('Kelas ${k.nama}', 'kelas', ${k.id})"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
  updateBadge('badge-kelas', Store.kelas.length);
  $('stat-kelas').textContent = Store.kelas.length;
}

function editKelas(id) {
  const kelas = Store.kelas.find(k => k.id === id);
  if (!kelas) return;
  Store.editTarget = kelas;
  openModal('modal-kelas');
  const ov = $('modal-kelas');
  const setVal = (field, val) => { const el = ov.querySelector(`[data-field="${field}"]`); if (el) el.value = val || ''; };
  setVal('nama', kelas.nama); setVal('tingkat', kelas.tingkat); setVal('jurusan', kelas.jurusan);
  setVal('kapasitas', kelas.kapasitas); setVal('wali', kelas.wali); setVal('ta', kelas.ta);
}

/* ────────────────────────────────────────
   RENDER: MAPEL TABLE
──────────────────────────────────────── */
function renderMapelTable() {
  const tbody = $q('#tbl-mapel tbody');
  if (!tbody) return;
  tbody.innerHTML = Store.mapel.map((m, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><strong>${m.nama}</strong></td>
      <td><span class="row-code">${m.kode}</span></td>
      <td>${m.guru}</td>
      <td>${m.sks}</td>
      <td>${m.jurusan}</td>
      <td>
        <div class="td-actions">
          <button class="btn-icon view" title="Detail" onclick="viewDetail('mapel', ${m.id})"><i class="fas fa-eye"></i></button>
          <button class="btn-icon edit" title="Edit" onclick="editMapel(${m.id})"><i class="fas fa-pencil"></i></button>
          <button class="btn-icon del"  title="Hapus" onclick="confirmHapus('Mapel ${m.nama}', 'mapel', ${m.id})"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
  updateBadge('badge-mapel', Store.mapel.length);
  $('stat-mapel').textContent = Store.mapel.length;
}

function editMapel(id) {
  const mapel = Store.mapel.find(m => m.id === id);
  if (!mapel) return;
  Store.editTarget = mapel;
  openModal('modal-mapel');
  const ov = $('modal-mapel');
  const setVal = (field, val) => { const el = ov.querySelector(`[data-field="${field}"]`); if (el) el.value = val || ''; };
  setVal('nama', mapel.nama); setVal('kode', mapel.kode); setVal('jurusan', mapel.jurusan);
  setVal('sks', mapel.sks); setVal('guru', mapel.guru); setVal('deskripsi', mapel.deskripsi);
}

/* ────────────────────────────────────────
   RENDER: ENROLLMENT TABLE
──────────────────────────────────────── */
function renderEnrollTable() {
  const tbody = $('tbody-enrollment');
  if (!tbody) return;

  // Update select options
  updateEnrollSelects();

  tbody.innerHTML = Store.enrollment.length === 0
    ? `<tr><td colspan="5" style="text-align:center;padding:28px;color:var(--text-muted);">Belum ada enrollment. Silakan assign guru, mapel, dan kelas.</td></tr>`
    : Store.enrollment.map((e, i) => `
      <tr>
        <td class="enroll-table-td">${i + 1}</td>
        <td class="enroll-table-td">${e.guru}</td>
        <td class="enroll-table-td"><span class="row-code">${e.mapel}</span></td>
        <td class="enroll-table-td">${e.kelas}</td>
        <td class="enroll-table-td"><button class="btn-del" onclick="confirmHapus('Enrollment ${e.guru} - ${e.mapel}', 'enrollment', ${e.id})"><i class="fas fa-trash"></i> Hapus</button></td>
      </tr>
    `).join('');
}

function updateEnrollSelects() {
  const guruSel  = $('enroll-guru');
  const mapelSel = $('enroll-mapel');
  const kelasSel = $('enroll-kelas');
  if (guruSel)  guruSel.innerHTML  = Store.guru.map(g => `<option>${g.nama}</option>`).join('');
  if (mapelSel) mapelSel.innerHTML = Store.mapel.map(m => `<option>${m.nama}</option>`).join('');
  if (kelasSel) kelasSel.innerHTML = Store.kelas.map(k => `<option>${k.nama}</option>`).join('');
}

function addEnrollment() {
  const guru  = $('enroll-guru')?.value;
  const mapel = $('enroll-mapel')?.value;
  const kelas = $('enroll-kelas')?.value;
  if (!guru || !mapel || !kelas) { showToast('Pilih guru, mapel, dan kelas!', 'error'); return; }

  const exists = Store.enrollment.some(e => e.guru === guru && e.mapel === mapel && e.kelas === kelas);
  if (exists) { showToast('Enrollment ini sudah ada!', 'warning'); return; }

  Store.enrollment.push({ id: Store.nextId.enrollment++, guru, mapel, kelas });
  addActivity('add', 'Enrollment ditambahkan', `${guru} – ${mapel} – ${kelas}`, 'Baru saja');
  renderEnrollTable();
  showToast(`Enrollment ${guru} berhasil ditambahkan!`, 'success');
}

/* ────────────────────────────────────────
   RENDER: ACCORDION (Dashboard)
──────────────────────────────────────── */
function renderAccordion() {
  // Jurusan accordion
  const jurusanBody = $('acc-jurusan-body');
  const jurusanCount = $('acc-jurusan-count');
  if (jurusanBody) {
    jurusanBody.innerHTML = Store.jurusan.map(j => `
      <div class="accordion-row">
        <div class="row-info">${j.nama} <span class="row-code">${j.kode}</span></div>
        <div class="row-actions">
          <button class="btn-edit" onclick="editJurusan(${j.id})"><i class="fas fa-pencil"></i> Edit</button>
          <button class="btn-del"  onclick="confirmHapus('Jurusan ${j.kode}', 'jurusan', ${j.id})"><i class="fas fa-trash"></i> Hapus</button>
        </div>
      </div>
    `).join('') + `
      <div class="accordion-row" style="padding:8px 20px 8px 28px;">
        <button class="btn-primary" style="font-size:12px;padding:6px 12px;" onclick="openModal('modal-jurusan'); Store.editTarget=null;">
          <i class="fas fa-plus"></i> Tambah Jurusan
        </button>
      </div>
    `;
    if (jurusanCount) jurusanCount.textContent = Store.jurusan.length;
  }

  // Kelas accordion
  const kelasBody = $('acc-kelas-body');
  const kelasCount = $('acc-kelas-count');
  if (kelasBody) {
    kelasBody.innerHTML = Store.kelas.map(k => `
      <div class="accordion-row">
        <div class="row-info">${k.nama} <span class="row-sub">${k.siswa} siswa</span></div>
        <div class="row-actions">
          <button class="btn-edit" onclick="editKelas(${k.id})"><i class="fas fa-pencil"></i> Edit</button>
          <button class="btn-del"  onclick="confirmHapus('Kelas ${k.nama}', 'kelas', ${k.id})"><i class="fas fa-trash"></i> Hapus</button>
        </div>
      </div>
    `).join('') + `
      <div class="accordion-row" style="padding:8px 20px 8px 28px;">
        <button class="btn-primary" style="font-size:12px;padding:6px 12px;" onclick="openModal('modal-kelas'); Store.editTarget=null;">
          <i class="fas fa-plus"></i> Tambah Kelas
        </button>
      </div>
    `;
    if (kelasCount) kelasCount.textContent = Store.kelas.length;
  }

  // Mapel accordion
  const mapelBody = $('acc-mapel-body');
  const mapelCount = $('acc-mapel-count');
  if (mapelBody) {
    mapelBody.innerHTML = Store.mapel.map(m => `
      <div class="accordion-row">
        <div class="row-info">${m.nama} <span class="row-code">${m.kode}</span></div>
        <div class="row-actions">
          <button class="btn-edit" onclick="editMapel(${m.id})"><i class="fas fa-pencil"></i> Edit</button>
          <button class="btn-del"  onclick="confirmHapus('Mapel ${m.nama}', 'mapel', ${m.id})"><i class="fas fa-trash"></i> Hapus</button>
        </div>
      </div>
    `).join('') + `
      <div class="accordion-row" style="padding:8px 20px 8px 28px;">
        <button class="btn-primary" style="font-size:12px;padding:6px 12px;" onclick="openModal('modal-mapel'); Store.editTarget=null;">
          <i class="fas fa-plus"></i> Tambah Mapel
        </button>
      </div>
    `;
    if (mapelCount) mapelCount.textContent = Store.mapel.length;
  }
}

function editJurusan(id) {
  const j = Store.jurusan.find(x => x.id === id);
  if (!j) return;
  Store.editTarget = j;
  openModal('modal-jurusan');
  const ov = $('modal-jurusan');
  const setVal = (field, val) => { const el = ov.querySelector(`[data-field="${field}"]`); if (el) el.value = val || ''; };
  setVal('nama', j.nama); setVal('kode', j.kode); setVal('kepala', j.kepala);
}

/* ────────────────────────────────────────
   DASHBOARD UPDATE
──────────────────────────────────────── */
function updateDashboard() {
  if ($('stat-siswa')) $('stat-siswa').textContent = Store.siswa.length;
  if ($('stat-guru'))  $('stat-guru').textContent  = Store.guru.length;
  if ($('stat-kelas')) $('stat-kelas').textContent = Store.kelas.length;
  if ($('stat-mapel')) $('stat-mapel').textContent = Store.mapel.length;

  updateBadge('badge-guru',  Store.guru.length);
  updateBadge('badge-siswa', Store.siswa.length);
  updateBadge('badge-kelas', Store.kelas.length);
  updateBadge('badge-mapel', Store.mapel.length);

  renderAccordion();
  renderActivityFeed();
  updateChartBars();
}

function updateBadge(id, count) {
  const el = $(id);
  if (el) el.textContent = count;
}

function updateChartBars() {
  const classData = Store.kelas.map(k => ({ nama: k.nama, siswa: k.siswa }));
  const maxSiswa = Math.max(...classData.map(c => c.siswa), 1);
  const chart = $('chart-bars');
  if (!chart) return;
  chart.innerHTML = classData.map(c => `
    <div class="chart-bar-row">
      <label>${c.nama}</label>
      <div class="chart-bar-track">
        <div class="chart-bar-fill" style="width:${(c.siswa / maxSiswa * 100).toFixed(0)}%"></div>
      </div>
      <span>${c.siswa}</span>
    </div>
  `).join('');
}

/* ────────────────────────────────────────
   ACTIVITY FEED
──────────────────────────────────────── */
function addActivity(type, title, desc, time = 'Baru saja') {
  Store.activityLog.unshift({ type, title, desc, time });
  if (Store.activityLog.length > 10) Store.activityLog.pop();

  // Also add notification
  Store.notifications.unshift({ id: Date.now(), title, body: desc, time, read: false });
  updateNotifBadge();
  renderActivityFeed();
}

function renderActivityFeed() {
  const feed = $('activity-feed');
  if (!feed) return;
  feed.innerHTML = Store.activityLog.slice(0, 5).map(a => `
    <div class="activity-item">
      <div class="act-icon ${a.type}"><i class="fas fa-${a.type === 'add' ? 'plus' : a.type === 'edit' ? 'pencil' : 'trash'}"></i></div>
      <div class="act-body"><h4>${a.title}</h4><p>${a.desc} • ${a.time}</p></div>
    </div>
  `).join('');
}

/* ────────────────────────────────────────
   SEARCH
──────────────────────────────────────── */
function filterTable(input, tableId) {
  const q = input.value.toLowerCase();
  const rows = $qa(`#${tableId} tbody tr`);
  let visible = 0;
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    const match = text.includes(q);
    row.classList.toggle('hidden-row', !match);
    if (match) visible++;
  });
  // Show no-result hint if 0
}

// Global search modal
function openSearchModal() {
  openModal('search-modal');
  setTimeout(() => $('search-main-input')?.focus(), 100);
}

function handleGlobalSearch(input) {
  const q = input.value.toLowerCase().trim();
  const results = $('search-results');
  if (!results) return;

  if (!q) {
    results.innerHTML = '<div class="search-empty">Ketik untuk mencari guru, siswa, kelas, atau mapel...</div>';
    return;
  }

  const allItems = [
    ...Store.guru.map(g => ({ icon: 'fas fa-chalkboard-teacher', title: g.nama, sub: `Guru – ${g.mapel}`, page: 'guru' })),
    ...Store.siswa.map(s => ({ icon: 'fas fa-user-graduate', title: s.nama, sub: `Siswa – ${s.kelas}`, page: 'siswa' })),
    ...Store.kelas.map(k => ({ icon: 'fas fa-door-open', title: k.nama, sub: `Kelas – ${k.jurusan}`, page: 'kelas' })),
    ...Store.mapel.map(m => ({ icon: 'fas fa-book-open', title: m.nama, sub: `Mapel – ${m.kode}`, page: 'mapel' })),
  ].filter(item => item.title.toLowerCase().includes(q) || item.sub.toLowerCase().includes(q));

  if (allItems.length === 0) {
    results.innerHTML = `<div class="search-empty"><i class="fas fa-search" style="display:block;font-size:28px;margin-bottom:10px;opacity:0.3"></i>Tidak ditemukan hasil untuk "${input.value}"</div>`;
    return;
  }

  results.innerHTML = allItems.slice(0, 8).map(item => `
    <div class="search-result-item" onclick="goToSearch('${item.page}')">
      <div class="search-result-icon"><i class="${item.icon}"></i></div>
      <div>
        <div class="search-result-title">${item.title}</div>
        <div class="search-result-sub">${item.sub}</div>
      </div>
    </div>
  `).join('');
}

function goToSearch(page) {
  closeAllModals();
  const navEl = document.querySelector(`[onclick*="'${page}'"]`);
  showPage(page, navEl);
}

/* ────────────────────────────────────────
   NOTIFICATIONS
──────────────────────────────────────── */
function updateNotifBadge() {
  const unread = Store.notifications.filter(n => !n.read).length;
  const dot = $q('.notif-dot');
  if (dot) dot.style.display = unread > 0 ? 'block' : 'none';
}

function toggleNotifPanel() {
  const panel = $('notif-panel');
  const helpPanel = $('help-panel');
  if (helpPanel) helpPanel.classList.remove('open');
  if (panel) {
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) renderNotifPanel();
  }
}

function renderNotifPanel() {
  const list = $('notif-list');
  if (!list) return;
  list.innerHTML = Store.notifications.slice(0, 6).map(n => `
    <div class="notif-item ${n.read ? '' : 'unread'}" onclick="markNotifRead(${n.id})">
      <div class="notif-dot-indicator" style="opacity:${n.read ? 0 : 1}"></div>
      <div class="notif-item-body">
        <h5>${n.title}</h5>
        <p>${n.body} • ${n.time}</p>
      </div>
    </div>
  `).join('');
}

function markNotifRead(id) {
  const n = Store.notifications.find(x => x.id === id);
  if (n) n.read = true;
  updateNotifBadge();
  renderNotifPanel();
}

function markAllRead() {
  Store.notifications.forEach(n => n.read = true);
  updateNotifBadge();
  renderNotifPanel();
  showToast('Semua notifikasi ditandai terbaca', 'success');
}

/* ────────────────────────────────────────
   HELP PANEL
──────────────────────────────────────── */
function toggleHelpPanel() {
  const panel = $('help-panel');
  const notifPanel = $('notif-panel');
  if (notifPanel) notifPanel.classList.remove('open');
  if (panel) panel.classList.toggle('open');
}

function closeAllPanels() {
  $q('.notif-panel')?.classList.remove('open');
  $q('.help-panel')?.classList.remove('open');
}

document.addEventListener('click', e => {
  if (!e.target.closest('#notif-panel') && !e.target.closest('[onclick*="toggleNotifPanel"]')) {
    $q('.notif-panel')?.classList.remove('open');
  }
  if (!e.target.closest('#help-panel') && !e.target.closest('[onclick*="toggleHelpPanel"]')) {
    $q('.help-panel')?.classList.remove('open');
  }
});

/* ────────────────────────────────────────
   DETAIL VIEW MODAL
──────────────────────────────────────── */
function viewDetail(type, id) {
  let data, title, rows;
  if (type === 'guru') {
    data = Store.guru.find(g => g.id === id);
    if (!data) return;
    title = data.nama;
    rows = [
      ['NIP', data.nip], ['Email', data.email], ['No. HP', data.hp || '—'],
      ['Mapel', data.mapel], ['Kelas Ajar', data.kelas], ['Status', data.status], ['Alamat', data.alamat || '—'],
    ];
  } else if (type === 'siswa') {
    data = Store.siswa.find(s => s.id === id);
    if (!data) return;
    title = data.nama;
    rows = [
      ['NISN', data.nisn], ['Kelas', data.kelas], ['Jurusan', data.jurusan],
      ['Gender', data.gender], ['Tgl Lahir', formatDate(data.lahir)],
      ['No. HP', data.hp || '—'], ['Email', data.email || '—'],
      ['Orang Tua', data.ortu || '—'], ['Status', data.status],
    ];
  } else if (type === 'kelas') {
    data = Store.kelas.find(k => k.id === id);
    if (!data) return;
    title = data.nama;
    rows = [
      ['Jurusan', data.jurusan], ['Tingkat', data.tingkat], ['Wali Kelas', data.wali],
      ['Jumlah Siswa', `${data.siswa} siswa`], ['Kapasitas', `${data.kapasitas} siswa`], ['Tahun Ajaran', data.ta],
    ];
  } else if (type === 'mapel') {
    data = Store.mapel.find(m => m.id === id);
    if (!data) return;
    title = data.nama;
    rows = [
      ['Kode', data.kode], ['SKS/Jam', data.sks], ['Guru Pengampu', data.guru],
      ['Jurusan', data.jurusan], ['Deskripsi', data.deskripsi || '—'],
    ];
  } else return;

  const iconMap = { guru: 'fas fa-chalkboard-teacher', siswa: 'fas fa-user-graduate', kelas: 'fas fa-door-open', mapel: 'fas fa-book-open' };
  const bgMap   = { guru: '#16a34a', siswa: '#8b5cf6', kelas: '#d68910', mapel: '#1a6fa5' };

  const overlay = $('modal-detail');
  if (!overlay) return;

  $q('#modal-detail .modal').innerHTML = `
    <div class="modal-title">
      <h3><i class="${iconMap[type]}" style="color:var(--primary)"></i> Detail ${type.charAt(0).toUpperCase() + type.slice(1)}</h3>
      <button class="modal-close" onclick="closeModal('modal-detail')"><i class="fas fa-times"></i></button>
    </div>
    <div class="profile-modal-header">
      <div class="profile-avatar-lg" style="background:${data.bg || bgMap[type]}">${data.initials || makeInitials(title)}</div>
      <h3>${title}</h3>
      <p>${type.charAt(0).toUpperCase() + type.slice(1)}</p>
    </div>
    ${rows.map(([lbl, val]) => `
      <div class="profile-detail-row">
        <span class="label">${lbl}</span>
        <span class="value">${val}</span>
      </div>
    `).join('')}
    <div class="modal-footer">
      <button class="btn-cancel" onclick="closeModal('modal-detail')">Tutup</button>
      <button class="btn-primary" onclick="closeModal('modal-detail'); edit${type.charAt(0).toUpperCase() + type.slice(1)}(${id})"><i class="fas fa-pencil"></i> Edit</button>
    </div>
  `;
  openModal('modal-detail');
}

/* ────────────────────────────────────────
   MONITORING TABLE
──────────────────────────────────────── */
function renderMonitoringTable() {
  const tbody = $('tbody-monitoring');
  if (!tbody) return;
  const logs = [
    { user: 'Admin Sekolah', initials: 'AS', bg: '#16a34a', role: 'Admin', activity: 'Login ke sistem', time: 'Hari ini, 08:00', status: 'Berhasil' },
    { user: 'Ahmad Hidayat',  initials: 'AH', bg: '#22c55e', role: 'Guru',  activity: 'Input nilai siswa', time: 'Hari ini, 09:15', status: 'Berhasil' },
    { user: 'Budi Santoso',   initials: 'BS', bg: '#8b5cf6', role: 'Siswa', activity: 'Lihat materi',      time: 'Hari ini, 10:30', status: 'Berhasil' },
    { user: 'Unknown',        initials: '??', bg: '#9ca3af', role: '—',     activity: 'Percobaan login gagal', time: 'Hari ini, 11:00', status: 'Gagal' },
    ...Store.activityLog.slice(0, 4).map(a => ({
      user: 'Admin Sekolah', initials: 'AS', bg: '#16a34a', role: 'Admin',
      activity: a.title, time: a.time, status: 'Berhasil',
    })),
  ];
  tbody.innerHTML = logs.map(l => `
    <tr>
      <td><div class="cell-user"><div class="avatar-sm" style="background:${l.bg}">${l.initials}</div><div><strong>${l.user}</strong></div></div></td>
      <td><span class="row-code">${l.role}</span></td>
      <td>${l.activity}</td>
      <td>${l.time}</td>
      <td><span class="badge-status ${l.status === 'Berhasil' ? 'aktif' : 'nonaktif'}">${l.status}</span></td>
    </tr>
  `).join('');
}

/* ────────────────────────────────────────
   SETTINGS
──────────────────────────────────────── */
function toggleSwitch(el) {
  el.classList.toggle('on');
  const isOn = el.classList.contains('on');
  const label = el.previousElementSibling?.querySelector('h4')?.textContent || 'Pengaturan';
  showToast(`${label} ${isOn ? 'diaktifkan' : 'dinonaktifkan'}`, isOn ? 'success' : 'warning');
}

function saveSchoolProfile() {
  const nama = $q('[data-setting="nama"]')?.value;
  const npsn = $q('[data-setting="npsn"]')?.value;
  const ta   = $q('[data-setting="ta"]')?.value;
  if (!nama) { showToast('Nama sekolah harus diisi!', 'error'); return; }
  showToast('Profil sekolah berhasil disimpan!', 'success');
}

function changePassword() {
  const pw  = $q('[data-setting="pw"]')?.value;
  const pw2 = $q('[data-setting="pw2"]')?.value;
  if (!pw || !pw2) { showToast('Password tidak boleh kosong!', 'error'); return; }
  if (pw !== pw2)  { showToast('Konfirmasi password tidak cocok!', 'error'); return; }
  if (pw.length < 6) { showToast('Password minimal 6 karakter!', 'error'); return; }
  showToast('Password berhasil diubah!', 'success');
  $q('[data-setting="pw"]').value  = '';
  $q('[data-setting="pw2"]').value = '';
}

/* ────────────────────────────────────────
   LOGOUT
──────────────────────────────────────── */
function doLogout() {
  closeModal('modal-logout-confirm');

  localStorage.removeItem('user');
  localStorage.removeItem('token');
  sessionStorage.clear();

  showToast('Logout berhasil. Sampai jumpa!', 'success');

  setTimeout(() => {
    window.location.replace('login.html');
  }, 1200);
}

/* ────────────────────────────────────────
   FILTER TABLE BY CLASS (Siswa)
──────────────────────────────────────── */
function filterSiswaByKelas(select) {
  const val = select.value;
  const rows = $qa('#tbl-siswa tbody tr');
  rows.forEach(row => {
    if (val === 'Semua Kelas') {
      row.classList.remove('hidden-row');
    } else {
      const kelasCell = row.cells[3]?.textContent || '';
      row.classList.toggle('hidden-row', kelasCell !== val);
    }
  });
}

/* ────────────────────────────────────────
   FILTER MONITORING BY ROLE
──────────────────────────────────────── */
function filterMonitoringByRole(select) {
  const val = select.value;
  const rows = $qa('#tbody-monitoring tr');
  rows.forEach(row => {
    if (val === 'Semua Role') { row.classList.remove('hidden-row'); return; }
    const roleCell = row.querySelector('.row-code')?.textContent || '';
    row.classList.toggle('hidden-row', roleCell !== val);
  });
}

/* ────────────────────────────────────────
   SAVE DATA (generic handler, triggers right function)
──────────────────────────────────────── */
function saveData(modalId, _unused) {
  const fnMap = {
    'modal-guru':    saveGuru,
    'modal-siswa':   saveSiswa,
    'modal-kelas':   saveKelas,
    'modal-mapel':   saveMapel,
    'modal-jurusan': saveJurusan,
  };
  const fn = fnMap[modalId];
  if (fn) fn();
}

/* ────────────────────────────────────────
   INIT
──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  updateDashboard();
  renderGuruTable();
  updateNotifBadge();

  // Make topbar search box clickable
  const searchBox = $q('.search-box');
  if (searchBox) searchBox.addEventListener('click', openSearchModal);

  showToast('Selamat datang, Admin Sekolah! 👋', 'success', 4000);
});
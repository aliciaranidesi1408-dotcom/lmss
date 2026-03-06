'use strict';

/* ============================================================
   SHARED STORE — single source of truth dengan data baru
============================================================ */
const Store = {
  guru: [
    { id: 1, nama: 'Melyanah',           nip: '19850101', email: 'melyanah@smkn12.sch.id', hp: '081234567801', mapel: 'Pemrograman Web',          status: 'Aktif',    kelas: 'XI RPL 1, XI RPL 2', alamat: 'Jl. Merdeka No. 10', bg: '#16a34a', initials: 'ML' },
    { id: 2, nama: 'Irwan Saputra',       nip: '19900205', email: 'irwan@smkn12.sch.id',    hp: '081298765432', mapel: 'Basis Data',              status: 'Aktif',    kelas: 'XI RPL 1, XI RPL 2', alamat: 'Jl. Sudirman No. 5', bg: '#0ea5e9', initials: 'IS' },
    { id: 3, nama: 'Novi Widia Ningsih',  nip: '19881115', email: 'novi@smkn12.sch.id',     hp: '081356789012', mapel: 'PBTGM',                  status: 'Aktif',    kelas: 'XI RPL 1, XI RPL 2', alamat: 'Jl. Pahlawan No. 3', bg: '#f59e0b', initials: 'NW' },
    { id: 4, nama: 'Endang',               nip: '19870320', email: 'endang@smkn12.sch.id',  hp: '081234500001', mapel: 'MTK',                    status: 'Aktif',    kelas: 'X RPL, XI RPL 1, XI RPL 2, XII RPL', alamat: 'Jl. Gatot Subroto No. 7', bg: '#5F7161', initials: 'EN' },
    { id: 5, nama: 'Uday Zakaria',         nip: '19900215', email: 'uday@smkn12.sch.id',    hp: '081234500002', mapel: 'Bahasa Inggris',         status: 'Aktif',    kelas: 'X RPL, XI RPL 1, XI RPL 2, XII RPL', alamat: 'Jl. Ahmad Yani No. 2', bg: '#1a6fa5', initials: 'UZ' },
    { id: 6, nama: 'Gita Riyanti',         nip: '19870509', email: 'gita@smkn12.sch.id',    hp: '081234500003', mapel: 'PPKN',                   status: 'Aktif',    kelas: 'X RPL, XI RPL 1, XI RPL 2, XII RPL', alamat: 'Jl. Diponegoro No. 5', bg: '#7d3c98', initials: 'GR' },
    { id: 7, nama: 'Eni Lisnawati',        nip: '19781220', email: 'eni@smkn12.sch.id',     hp: '081234500004', mapel: 'Sejarah',                status: 'Aktif',    kelas: 'X RPL, XI RPL 1, XI RPL 2, XII RPL', alamat: 'Jl. Veteran No. 9', bg: '#c0392b', initials: 'EL' },
    { id: 8, nama: 'Yenny Andrini',        nip: '19910422', email: 'yenny@smkn12.sch.id',   hp: '081234500005', mapel: 'PKWU',                   status: 'Aktif',    kelas: 'XI RPL 1, XI RPL 2, XII RPL', alamat: 'Jl. Pemuda No. 12', bg: '#d68910', initials: 'YA' },
    { id: 9, nama: 'Miki Tanuwijaya',      nip: '19890815', email: 'miki@smkn12.sch.id',    hp: '081234500006', mapel: 'Bahasa Jepang',          status: 'Aktif',    kelas: 'XI RPL 1, XI RPL 2', alamat: 'Jl. Kartini No. 3', bg: '#27ae60', initials: 'MT' },
    { id: 10, nama: 'Sinung Kalimo N',     nip: '19851210', email: 'sinung@smkn12.sch.id',  hp: '081234500007', mapel: 'Pemrograman Perangkat Lunak', status: 'Aktif', kelas: 'XI RPL 1, XI RPL 2, XII RPL', alamat: 'Jl. Gajah Mada No. 8', bg: '#8e44ad', initials: 'SK' },
  ],
  siswa: [
    { id: 1, nama: 'Aurellia Putri',     nisn: '0011234567', kelas: 'XI RPL 1', jurusan: 'RPL', status: 'Aktif',     ortu: 'Santoso Bin Ali', lahir: '2007-05-12', gender: 'Laki-laki',  hp: '081234501234', email: 'budis@gmail.com',  bg: '#8b5cf6', initials: 'BS' },
    { id: 2, nama: 'Azriluwloh Okganda',     nisn: '0019876543', kelas: 'XI RPL 2', jurusan: 'RPL', status: 'Aktif',     ortu: 'Lestari Dewi',    lahir: '2007-08-20', gender: 'Perempuan',  hp: '081298701234', email: 'dewil@gmail.com',  bg: '#ec4899', initials: 'DL' },
    { id: 3, nama: 'Callysta Aurelia Naila', nisn: '0015432198', kelas: 'X RPL', jurusan: 'RPL', status: 'Aktif', ortu: 'Firmansyah',      lahir: '2008-11-03', gender: 'Laki-laki',  hp: '081356712345', email: 'rizkf@gmail.com',  bg: '#f97316', initials: 'RF' },
    { id: 4, nama: 'Desi Alicia Rani',      nisn: '0023010001', kelas: 'XI RPL 1', jurusan: 'RPL', status: 'Aktif',     ortu: 'Ibu Aurel',       lahir: '2006-03-01', gender: 'Perempuan',  hp: '081234502345', email: 'aurel@gmail.com',  bg: '#5F7161', initials: 'AP' },
    { id: 5, nama: 'Fadlun Shahab',    nisn: '0023010002', kelas: 'XI RPL 1', jurusan: 'RPL', status: 'Aktif',     ortu: 'Wijaya',       lahir: '2007-07-15', gender: 'Laki-laki',  hp: '081234502346', email: 'candra@gmail.com',  bg: '#06b6d4', initials: 'CW' },
    { id: 6, nama: 'Alya Lukita Sari',       nisn: '0023010003', kelas: 'XI RPL 2', jurusan: 'RPL', status: 'Aktif',     ortu: 'Dewi',       lahir: '2007-09-21', gender: 'Perempuan',  hp: '081234502347', email: 'sinta@gmail.com',  bg: '#d946ef', initials: 'SD' },
  ],
  kelas: [
    { id: 1, nama: 'X RPL',    jurusan: 'RPL', tingkat: 'X',  wali: 'Endang',  kapasitas: 36, siswa: 30, ta: '2025/2026' },
    { id: 2, nama: 'XI RPL 1', jurusan: 'RPL', tingkat: 'XI', wali: 'Melyanah', kapasitas: 36, siswa: 32, ta: '2025/2026' },
    { id: 3, nama: 'XI RPL 2', jurusan: 'RPL', tingkat: 'XI', wali: 'Irwan Saputra', kapasitas: 36, siswa: 31, ta: '2025/2026' },
    { id: 4, nama: 'XII RPL',  jurusan: 'RPL', tingkat: 'XII', wali: 'Sinung Kalimo N', kapasitas: 36, siswa: 28, ta: '2025/2026' },
  ],
  mapel: [
    { id: 1, nama: 'Pemrograman Web',          kode: 'MAP001', guru: 'Melyanah',           sks: 4, jurusan: 'RPL',  deskripsi: 'HTML, CSS, JavaScript, dan framework web.' },
    { id: 2, nama: 'Basis Data',                kode: 'MAP002', guru: 'Irwan Saputra',     sks: 4, jurusan: 'RPL',  deskripsi: 'Pengantar basis data relasional dan SQL.' },
    { id: 3, nama: 'PBTGM',                     kode: 'MAP003', guru: 'Novi Widia Ningsih', sks: 4, jurusan: 'RPL',  deskripsi: 'Pemrograman Berbasis Teks dan Game Mobile.' },
    { id: 4, nama: 'MTK',                       kode: 'MAP004', guru: 'Endang',            sks: 3, jurusan: 'Umum', deskripsi: 'Matematika umum tingkat X-XII.' },
    { id: 5, nama: 'Bahasa Inggris',             kode: 'MAP005', guru: 'Uday Zakaria',      sks: 2, jurusan: 'Umum', deskripsi: 'Bahasa Inggris umum dan teknis.' },
    { id: 6, nama: 'PPKN',                      kode: 'MAP006', guru: 'Gita Riyanti',      sks: 2, jurusan: 'Umum', deskripsi: 'Pendidikan Pancasila dan Kewarganegaraan.' },
    { id: 7, nama: 'Sejarah',                    kode: 'MAP007', guru: 'Eni Lisnawati',    sks: 2, jurusan: 'Umum', deskripsi: 'Sejarah Indonesia dan dunia.' },
    { id: 8, nama: 'PKWU',                       kode: 'MAP008', guru: 'Yenny Andrini',    sks: 3, jurusan: 'RPL',  deskripsi: 'Produk Kreatif dan Kewirausahaan.' },
    { id: 9, nama: 'Bahasa Jepang',              kode: 'MAP009', guru: 'Miki Tanuwijaya',  sks: 2, jurusan: 'Umum', deskripsi: 'Bahasa Jepang dasar.' },
    { id: 10, nama: 'Pemrograman Perangkat Lunak', kode: 'MAP010', guru: 'Sinung Kalimo N', sks: 4, jurusan: 'RPL', deskripsi: 'Pemrograman desktop dan mobile.' },
  ],
  enrollment: [
    { id: 1, guru: 'Melyanah',  mapel: 'Pemrograman Web',   kelas: 'XI RPL 1' },
    { id: 2, guru: 'Melyanah',  mapel: 'Pemrograman Web',   kelas: 'XI RPL 2' },
    { id: 3, guru: 'Irwan Saputra', mapel: 'Basis Data',    kelas: 'XI RPL 1' },
    { id: 4, guru: 'Irwan Saputra', mapel: 'Basis Data',    kelas: 'XI RPL 2' },
    { id: 5, guru: 'Endang', mapel: 'MTK',                  kelas: 'X RPL' },
    { id: 6, guru: 'Endang', mapel: 'MTK',                  kelas: 'XI RPL 1' },
    { id: 7, guru: 'Endang', mapel: 'MTK',                  kelas: 'XI RPL 2' },
    { id: 8, guru: 'Endang', mapel: 'MTK',                  kelas: 'XII RPL' },
  ],
  jurusan: [
    { id: 1, nama: 'Rekayasa Perangkat Lunak', kode: 'RPL', kepala: 'Melyanah' },
  ],
  notifications: [
    { id: 1, title: 'Siswa baru ditambahkan', body: 'Candra Wijaya bergabung ke XI RPL 1', time: '5 menit lalu', read: false },
    { id: 2, title: 'Data guru diperbarui',   body: 'Sinung Kalimo N – Mapel Pemrograman Perangkat Lunak', time: '1 jam lalu', read: false },
    { id: 3, title: 'Kelas baru dibuat',      body: 'X RPL berhasil dibuat', time: '2 jam lalu', read: true },
    { id: 4, title: 'Login gagal terdeteksi', body: 'Percobaan login mencurigakan', time: '3 jam lalu', read: true },
  ],
  activityLog: [
    { type: 'add',  title: 'Siswa baru ditambahkan', desc: 'Candra Wijaya – XI RPL 1', time: '5 menit lalu' },
    { type: 'edit', title: 'Data guru diperbarui',   desc: 'Sinung Kalimo N – Mapel Pemrograman Perangkat Lunak', time: '1 jam lalu' },
    { type: 'add',  title: 'Kelas baru dibuat',      desc: 'X RPL – 30 siswa', time: '2 jam lalu' },
  ],
  nextId: { guru: 11, siswa: 7, kelas: 5, mapel: 11, enrollment: 9, jurusan: 2 },
  editTarget:   null,
  deleteTarget: null,
  deleteType:   null,
};

/* ============================================================
   BUG FIX #1: Kode mapel AUTO-INCREMENT dari awal
   Tidak boleh ada input kode manual — selalu auto-generate
============================================================ */
function generateKodeMapel(id) {
  return 'MAP' + String(id).padStart(3, '0');
}
// Set kode untuk semua mapel yang sudah ada (sudah diisi manual di atas, tapi dipastikan)
Store.mapel.forEach((m, index) => { m.kode = generateKodeMapel(m.id); });

/* Expose ke window agar dashboard lain bisa sync */
window.SharedStore = Store;

/* ============================================================
   UTILITIES
============================================================ */
function $(id)                      { return document.getElementById(id); }
function $q(sel, ctx = document)    { return ctx.querySelector(sel); }
function $qa(sel, ctx = document)   { return [...ctx.querySelectorAll(sel)]; }
function makeInitials(name)         { return name.trim().split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase(); }
function randomColor()              { return ['#16a34a','#0ea5e9','#f59e0b','#8b5cf6','#ec4899','#f97316','#06b6d4','#6366f1'][Math.floor(Math.random()*8)]; }
function formatDate(ds)             { if(!ds)return'—'; return new Date(ds).toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'}); }

/* ── Ripple ── */
document.addEventListener('click', function(e) {
  const btn = e.target.closest('button,.btn-primary,.btn-cancel,.quick-card,.nav-item');
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const r = document.createElement('span'); r.className='ripple';
  const size = Math.max(rect.width,rect.height);
  r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
  btn.style.position='relative'; btn.style.overflow='hidden';
  btn.appendChild(r); setTimeout(()=>r.remove(),700);
});

/* ── Toast ── */
const toastIcons = {success:'fas fa-check-circle',error:'fas fa-times-circle',warning:'fas fa-exclamation-circle',info:'fas fa-info-circle'};
function showToast(message, type='info', duration=3500) {
  const container = $('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="${toastIcons[type]||toastIcons.info} toast-icon"></i><span class="toast-msg">${message}</span><i class="fas fa-times toast-close"></i>`;
  container.appendChild(toast);
  const dismiss = () => { toast.classList.add('out'); setTimeout(()=>toast.remove(),350); };
  toast.querySelector('.toast-close').addEventListener('click',dismiss);
  setTimeout(dismiss, duration);
}

/* ============================================================
   PAGE NAVIGATION
============================================================ */
const pageConfig = {
  dashboard:  { title:'Dashboard Admin',   subtitle:'Kelola struktur sekolah dengan mudah' },
  guru:       { title:'Data Guru',         subtitle:'Kelola seluruh data tenaga pengajar' },
  siswa:      { title:'Data Siswa',        subtitle:'Kelola seluruh data peserta didik' },
  kelas:      { title:'Data Kelas',        subtitle:'Kelola kelas dan wali kelas' },
  mapel:      { title:'Mata Pelajaran',    subtitle:'Kelola kurikulum dan mata pelajaran' },
  enrollment: { title:'Atur Enrollment',   subtitle:'Hubungkan guru, siswa, kelas dan mata pelajaran' },
  monitoring: { title:'Monitoring User',   subtitle:'Pantau aktivitas dan akses seluruh pengguna' },
  pengaturan: { title:'Pengaturan Sistem', subtitle:'Konfigurasi aplikasi dan profil sekolah' },
};

function showPage(name, navEl) {
  $qa('.page').forEach(p=>p.classList.remove('active'));
  $qa('.nav-item').forEach(n=>n.classList.remove('active'));
  const page = $(`page-${name}`);
  if (page) page.classList.add('active');
  if (navEl) navEl.classList.add('active');
  const cfg = pageConfig[name]||{};
  if($('page-title'))    $('page-title').textContent    = cfg.title    ||'';
  if($('page-subtitle')) $('page-subtitle').textContent = cfg.subtitle ||'';
  if(name==='guru')       renderGuruTable();
  if(name==='siswa')      renderSiswaTable();
  if(name==='kelas')      renderKelasTable();
  if(name==='mapel')      renderMapelTable();
  if(name==='enrollment') renderEnrollTable();
  if(name==='dashboard')  updateDashboard();
  if(name==='monitoring') renderMonitoringTable();
  closeAllPanels();
}

function toggleAcc(header) {
  const body=header.nextElementSibling, isOpen=header.classList.contains('open');
  $qa('.accordion-header.open').forEach(h=>{h.classList.remove('open');h.nextElementSibling.classList.remove('open');});
  if(!isOpen){header.classList.add('open');body.classList.add('open');}
}

/* ============================================================
   MODAL
============================================================ */
let currentModal=null;
function openModal(id) {
  closeAllModals();
  const overlay=$(id); if(!overlay)return;
  overlay.classList.add('open'); currentModal=id;
  document.body.style.overflow='hidden';
}
function closeModal(id) {
  const el=$(id);if(el)el.classList.remove('open');
  currentModal=null; Store.editTarget=null;
  document.body.style.overflow='';
}
function closeAllModals() {
  $qa('.modal-overlay').forEach(o=>o.classList.remove('open'));
  currentModal=null;
  document.body.style.overflow='';
}
function closeModalOutside(event,id) { if(event.target===$(id))closeModal(id); }
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){closeAllModals();closeAllPanels();} });

/* ============================================================
   HAPUS
============================================================ */
function confirmHapus(nama, type, id) {
  Store.deleteTarget={nama,type,id};
  $qa('.modal-overlay').forEach(o=>o.classList.remove('open'));
  document.body.style.overflow='hidden';
  const overlay=$('modal-confirm'); if(!overlay)return;
  overlay.classList.add('open');
  currentModal='modal-confirm';
  $('confirm-msg').innerHTML=`Apakah Anda yakin ingin menghapus <strong>${nama}</strong>?<br><small style="color:#c0392b">Tindakan ini tidak dapat dibatalkan.</small>`;
}
function doHapus() {
  if(!Store.deleteTarget){closeModal('modal-confirm');return;}
  const{nama,type,id}=Store.deleteTarget;
  const typeMap={guru:Store.guru,siswa:Store.siswa,kelas:Store.kelas,mapel:Store.mapel,enrollment:Store.enrollment,jurusan:Store.jurusan};
  if(type&&typeMap[type]&&id){const arr=typeMap[type];const idx=arr.findIndex(x=>x.id===id);if(idx>-1)arr.splice(idx,1);}
  addActivity('del',`${nama} dihapus`,'Data berhasil dihapus','Baru saja');
  closeModal('modal-confirm'); Store.deleteTarget=null;
  refreshCurrentPage(); updateDashboard();
  showToast(`${nama} berhasil dihapus!`,'success');
}
function refreshCurrentPage() {
  const active=$q('.page.active'); if(!active)return;
  const pid=active.id.replace('page-','');
  if(pid==='guru')renderGuruTable();
  else if(pid==='siswa')renderSiswaTable();
  else if(pid==='kelas')renderKelasTable();
  else if(pid==='mapel')renderMapelTable();
  else if(pid==='enrollment')renderEnrollTable();
  else if(pid==='dashboard'){renderAccordion();updateDashboard();}
}

/* ============================================================
   FUNGSI GURU
============================================================ */
function saveGuru() {
  const ov=$('modal-guru');
  const get=f=>{const el=ov.querySelector(`[data-field="${f}"]`);return el?el.value.trim():'';};
  const nama=get('nama'),nip=get('nip'),email=get('email'),hp=get('hp'),mapel=get('mapel'),status=get('status'),alamat=get('alamat');

  const missing=[];
  if(!nama)   missing.push('Nama Lengkap');
  if(!nip)    missing.push('NIP');
  if(!email)  missing.push('Email');
  if(!hp)     missing.push('No. HP');
  if(!mapel)  missing.push('Mata Pelajaran');
  if(!status) missing.push('Status');
  if(missing.length>0){
    showToast(`Field wajib belum diisi: ${missing.join(', ')}!`,'error',5000);
    return;
  }

  if(Store.editTarget) {
    Object.assign(Store.editTarget,{nama,nip,email,hp,mapel,status,alamat,initials:makeInitials(nama)});
    syncGuruToSharedStore();
    addActivity('edit','Data guru diperbarui',`${nama} – ${mapel}`,'Baru saja');
    showToast(`Data ${nama} berhasil diperbarui!`,'success');
  } else {
    const newGuru={
      id:Store.nextId.guru++,
      nama,nip,email,hp,mapel,status,alamat,
      kelas:'—',
      bg:randomColor(),
      initials:makeInitials(nama)
    };
    Store.guru.push(newGuru);
    syncGuruToSharedStore();
    addActivity('add','Guru baru ditambahkan',`${nama} – ${mapel}`,'Baru saja');
    showToast(`Guru ${nama} berhasil ditambahkan!`,'success');
  }
  closeModal('modal-guru');
  renderGuruTable();
  updateDashboard();
  if($('enroll-guru')) updateEnrollSelects();
}

function syncGuruToSharedStore() {
  if(window.SharedStore) {
    window.SharedStore.guru = Store.guru;
  }
}

function editGuru(id) {
  const guru=Store.guru.find(g=>g.id===id); if(!guru)return;
  Store.editTarget=guru;
  openModal('modal-guru');
  const ov=$('modal-guru');
  const sv=(f,v)=>{const el=ov.querySelector(`[data-field="${f}"]`);if(el)el.value=v||'';};
  sv('nama',guru.nama);sv('nip',guru.nip);sv('email',guru.email);sv('hp',guru.hp);
  sv('mapel',guru.mapel);sv('status',guru.status);sv('alamat',guru.alamat);
}

function renderGuruTable() {
  const tbody=$q('#tbl-guru tbody'); if(!tbody)return;
  tbody.innerHTML=Store.guru.map((g,i)=>`
    <tr>
      <td>${i+1}</td>
      <td><div class="cell-user"><div class="avatar-sm" style="background:${g.bg}">${g.initials}</div><div><strong>${g.nama}</strong><small>${g.email}</small></div></div></td>
      <td><span class="row-code">${g.nip}</span></td>
      <td>${g.mapel}</td><td>${g.kelas}</td>
      <td><span class="badge-status ${g.status==='Aktif'?'aktif':'nonaktif'}">${g.status}</span></td>
      <td><div class="td-actions">
        <button class="btn-icon view" onclick="viewDetail('guru',${g.id})"><i class="fas fa-eye"></i></button>
        <button class="btn-icon edit" onclick="editGuru(${g.id})"><i class="fas fa-pencil"></i></button>
        <button class="btn-icon del"  onclick="confirmHapus('Guru ${g.nama}','guru',${g.id})"><i class="fas fa-trash"></i></button>
      </div></td>
    </tr>`).join('');
  updateBadge('badge-guru',Store.guru.length);
  if($('stat-guru'))$('stat-guru').textContent=Store.guru.length;
}

/* ============================================================
   FUNGSI SISWA
============================================================ */
function saveSiswa() {
  const ov=$('modal-siswa');
  const get=f=>{const el=ov.querySelector(`[data-field="${f}"]`);return el?el.value.trim():'';};
  const nama=get('nama'),nisn=get('nisn'),kelas=get('kelas'),jurusan='RPL',
        lahir=get('lahir'),gender=get('gender'),hp=get('hp'),email=get('email'),
        ortu=get('ortu'),status=get('status');
  if(!nama){showToast('Nama lengkap harus diisi!','error');return;}
  if(!nisn){showToast('NISN harus diisi!','error');return;}
  if(Store.editTarget){
    Object.assign(Store.editTarget,{nama,nisn,kelas,jurusan,lahir,gender,hp,email,ortu,status,initials:makeInitials(nama)});
    addActivity('edit','Data siswa diperbarui',`${nama} – ${kelas}`,'Baru saja');
    showToast(`Data ${nama} berhasil diperbarui!`,'success');
  } else {
    Store.siswa.push({id:Store.nextId.siswa++,nama,nisn,kelas,jurusan,lahir,gender,hp,email,ortu,status,bg:randomColor(),initials:makeInitials(nama)});
    addActivity('add','Siswa baru ditambahkan',`${nama} – ${kelas}`,'Baru saja');
    showToast(`Siswa ${nama} berhasil ditambahkan!`,'success');
  }
  closeModal('modal-siswa'); renderSiswaTable(); updateDashboard();
}

function editSiswa(id) {
  const s=Store.siswa.find(x=>x.id===id);if(!s)return;
  Store.editTarget=s;
  openModal('modal-siswa');
  const ov=$('modal-siswa'),sv=(f,v)=>{const el=ov.querySelector(`[data-field="${f}"]`);if(el)el.value=v||'';};
  sv('nama',s.nama);sv('nisn',s.nisn);sv('kelas',s.kelas);sv('jurusan',s.jurusan);
  sv('lahir',s.lahir);sv('gender',s.gender);sv('hp',s.hp);sv('email',s.email);
  sv('ortu',s.ortu);sv('status',s.status);
}

function renderSiswaTable() {
  const tbody=$q('#tbl-siswa tbody');if(!tbody)return;
  tbody.innerHTML=Store.siswa.map((s,i)=>`
    <tr>
      <td>${i+1}</td>
      <td><div class="cell-user"><div class="avatar-sm" style="background:${s.bg}">${s.initials}</div><div><strong>${s.nama}</strong><small>${s.nisn}</small></div></div></td>
      <td><span class="row-code">${s.nisn}</span></td>
      <td>${s.kelas}</td><td>${s.jurusan}</td>
      <td><span class="badge-status ${s.status==='Aktif'?'aktif':'nonaktif'}">${s.status}</span></td>
      <td><div class="td-actions">
        <button class="btn-icon view" onclick="viewDetail('siswa',${s.id})"><i class="fas fa-eye"></i></button>
        <button class="btn-icon edit" onclick="editSiswa(${s.id})"><i class="fas fa-pencil"></i></button>
        <button class="btn-icon del"  onclick="confirmHapus('Siswa ${s.nama}','siswa',${s.id})"><i class="fas fa-trash"></i></button>
      </div></td>
    </tr>`).join('');
  updateBadge('badge-siswa',Store.siswa.length);
  if($('stat-siswa'))$('stat-siswa').textContent=Store.siswa.length;
}

/* ============================================================
   FUNGSI KELAS
============================================================ */
function saveKelas() {
  const ov=$('modal-kelas');
  const get=f=>{const el=ov.querySelector(`[data-field="${f}"]`);return el?el.value.trim():'';};
  const nama=get('nama'),tingkat=get('tingkat'),jurusan='RPL',
        kapasitas=parseInt(get('kapasitas'))||36,wali=get('wali'),ta=get('ta');
  if(!nama){showToast('Nama kelas harus diisi!','error');return;}
  if(Store.editTarget){
    Object.assign(Store.editTarget,{nama,tingkat,jurusan,kapasitas,wali,ta});
    addActivity('edit','Data kelas diperbarui',nama,'Baru saja');
    showToast(`Kelas ${nama} berhasil diperbarui!`,'success');
  } else {
    Store.kelas.push({id:Store.nextId.kelas++,nama,tingkat,jurusan,kapasitas,wali,ta,siswa:0});
    addActivity('add','Kelas baru dibuat',`${nama} – ${wali}`,'Baru saja');
    showToast(`Kelas ${nama} berhasil ditambahkan!`,'success');
  }
  closeModal('modal-kelas'); renderKelasTable(); updateDashboard();
}

function editKelas(id) {
  const k=Store.kelas.find(x=>x.id===id);if(!k)return;
  Store.editTarget=k;
  openModal('modal-kelas');
  const ov=$('modal-kelas'),sv=(f,v)=>{const el=ov.querySelector(`[data-field="${f}"]`);if(el)el.value=v||'';};
  sv('nama',k.nama);sv('tingkat',k.tingkat);sv('jurusan',k.jurusan);
  sv('kapasitas',k.kapasitas);sv('wali',k.wali);sv('ta',k.ta);
}

function renderKelasTable() {
  const tbody=$q('#tbl-kelas tbody');if(!tbody)return;
  tbody.innerHTML=Store.kelas.map((k,i)=>`
    <tr>
      <td>${i+1}</td><td><strong>${k.nama}</strong></td><td>${k.jurusan}</td>
      <td>${k.tingkat}</td><td>${k.wali}</td>
      <td><span class="badge-status aktif">${k.siswa} siswa</span></td>
      <td><div class="td-actions">
        <button class="btn-icon view" onclick="viewDetail('kelas',${k.id})"><i class="fas fa-eye"></i></button>
        <button class="btn-icon edit" onclick="editKelas(${k.id})"><i class="fas fa-pencil"></i></button>
        <button class="btn-icon del"  onclick="confirmHapus('Kelas ${k.nama}','kelas',${k.id})"><i class="fas fa-trash"></i></button>
      </div></td>
    </tr>`).join('');
  updateBadge('badge-kelas',Store.kelas.length);
  if($('stat-kelas'))$('stat-kelas').textContent=Store.kelas.length;
}

/* ============================================================
   FUNGSI MAPEL
============================================================ */
function saveMapel() {
  const ov=$('modal-mapel');
  const get=f=>{const el=ov.querySelector(`[data-field="${f}"]`);return el?el.value.trim():'';};
  const nama=get('nama'),jurusan=get('jurusan'),sks=parseInt(get('sks'))||4,
        guru=get('guru'),deskripsi=get('deskripsi');
  if(!nama){showToast('Nama mapel harus diisi!','error');return;}

  if(Store.editTarget){
    Object.assign(Store.editTarget,{nama,jurusan,sks,guru,deskripsi});
    addActivity('edit','Mapel diperbarui',nama,'Baru saja');
    showToast(`Mapel ${nama} berhasil diperbarui!`,'success');
  } else {
    const newId = Store.nextId.mapel++;
    const newKode = generateKodeMapel(newId);
    Store.mapel.push({id:newId, kode:newKode, nama, jurusan, sks, guru, deskripsi});
    addActivity('add','Mapel baru ditambahkan',`${nama} [${newKode}]`,'Baru saja');
    showToast(`Mapel ${nama} ditambahkan! Kode: ${newKode}`,'success');
  }
  closeModal('modal-mapel'); renderMapelTable(); updateDashboard();
}

function editMapel(id) {
  const m=Store.mapel.find(x=>x.id===id);if(!m)return;
  Store.editTarget=m;
  openModal('modal-mapel');
  const ov=$('modal-mapel'),sv=(f,v)=>{const el=ov.querySelector(`[data-field="${f}"]`);if(el)el.value=v||'';};
  sv('nama',m.nama);sv('jurusan',m.jurusan);sv('sks',m.sks);sv('guru',m.guru);sv('deskripsi',m.deskripsi);
  const kodeEl=ov.querySelector('[data-field="kode"]');
  if(kodeEl){ kodeEl.value=m.kode; kodeEl.setAttribute('readonly','true'); }
}

function renderMapelTable() {
  const tbody=$q('#tbl-mapel tbody');if(!tbody)return;
  tbody.innerHTML=Store.mapel.map((m,i)=>`
    <tr>
      <td>${i+1}</td><td><strong>${m.nama}</strong></td>
      <td><span class="row-code">${m.kode}</span></td>
      <td>${m.guru}</td><td>${m.sks}</td><td>${m.jurusan}</td>
      <td><div class="td-actions">
        <button class="btn-icon view" onclick="viewDetail('mapel',${m.id})"><i class="fas fa-eye"></i></button>
        <button class="btn-icon edit" onclick="editMapel(${m.id})"><i class="fas fa-pencil"></i></button>
        <button class="btn-icon del"  onclick="confirmHapus('Mapel ${m.nama}','mapel',${m.id})"><i class="fas fa-trash"></i></button>
      </div></td>
    </tr>`).join('');
  updateBadge('badge-mapel',Store.mapel.length);
  if($('stat-mapel'))$('stat-mapel').textContent=Store.mapel.length;
}

/* ============================================================
   FUNGSI JURUSAN
============================================================ */
function saveJurusan() {
  const ov=$('modal-jurusan');
  const get=f=>{const el=ov.querySelector(`[data-field="${f}"]`);return el?el.value.trim():'';};
  const nama=get('nama'),kode=get('kode'),kepala=get('kepala');
  if(!nama){showToast('Nama jurusan harus diisi!','error');return;}
  if(!kode){showToast('Kode jurusan harus diisi!','error');return;}
  if(Store.editTarget){Object.assign(Store.editTarget,{nama,kode,kepala});showToast(`Jurusan ${kode} diperbarui!`,'success');}
  else{Store.jurusan.push({id:Store.nextId.jurusan++,nama,kode,kepala});showToast(`Jurusan ${kode} ditambahkan!`,'success');}
  closeModal('modal-jurusan'); renderAccordion();
}

function editJurusan(id) {
  const j=Store.jurusan.find(x=>x.id===id);if(!j)return;
  Store.editTarget=j;
  openModal('modal-jurusan');
  const ov=$('modal-jurusan'),sv=(f,v)=>{const el=ov.querySelector(`[data-field="${f}"]`);if(el)el.value=v||'';};
  sv('nama',j.nama);sv('kode',j.kode);sv('kepala',j.kepala);
}

/* ============================================================
   FUNGSI ENROLLMENT
============================================================ */
function renderEnrollTable() {
  const tbody=$('tbody-enrollment');if(!tbody)return;
  updateEnrollSelects();
  tbody.innerHTML=Store.enrollment.length===0
    ?`<tr><td colspan="5" style="text-align:center;padding:28px;color:var(--text-muted)">Belum ada enrollment.</td></tr>`
    :Store.enrollment.map((e,i)=>`
      <tr>
        <td class="enroll-table-td">${i+1}</td>
        <td class="enroll-table-td">${e.guru}</td>
        <td class="enroll-table-td"><span class="row-code">${e.mapel}</span></td>
        <td class="enroll-table-td">${e.kelas}</td>
        <td class="enroll-table-td"><button class="btn-del" onclick="confirmHapus('Enrollment ${e.guru}','enrollment',${e.id})"><i class="fas fa-trash"></i> Hapus</button></td>
      </tr>`).join('');
}

function updateEnrollSelects() {
  const gs=$('enroll-guru'),ms=$('enroll-mapel'),ks=$('enroll-kelas');
  if(gs)gs.innerHTML=Store.guru.map(g=>`<option>${g.nama}</option>`).join('');
  if(ms)ms.innerHTML=Store.mapel.map(m=>`<option>${m.nama}</option>`).join('');
  if(ks)ks.innerHTML=Store.kelas.map(k=>`<option>${k.nama}</option>`).join('');
}

function addEnrollment() {
  const guru=$('enroll-guru')?.value,mapel=$('enroll-mapel')?.value,kelas=$('enroll-kelas')?.value;
  if(!guru||!mapel||!kelas){showToast('Pilih guru, mapel, dan kelas!','error');return;}
  if(Store.enrollment.some(e=>e.guru===guru&&e.mapel===mapel&&e.kelas===kelas)){showToast('Enrollment ini sudah ada!','warning');return;}
  Store.enrollment.push({id:Store.nextId.enrollment++,guru,mapel,kelas});
  addActivity('add','Enrollment ditambahkan',`${guru} – ${mapel} – ${kelas}`,'Baru saja');
  renderEnrollTable();
  showToast(`Enrollment ${guru} berhasil ditambahkan!`,'success');
}

/* ============================================================
   ACCORDION DASHBOARD
============================================================ */
function renderAccordion() {
  const render=(bodyId,countId,items,rowFn,addBtn)=>{
    const body=$(bodyId),cnt=$(countId);
    if(!body)return;
    body.innerHTML=items.map(rowFn).join('')+addBtn;
    if(cnt)cnt.textContent=items.length;
  };
  render('acc-jurusan-body','acc-jurusan-count',Store.jurusan,j=>`
    <div class="accordion-row">
      <div class="row-info">${j.nama} <span class="row-code">${j.kode}</span></div>
      <div class="row-actions">
        <button class="btn-edit" onclick="editJurusan(${j.id})"><i class="fas fa-pencil"></i> Edit</button>
        <button class="btn-del"  onclick="confirmHapus('Jurusan ${j.kode}','jurusan',${j.id})"><i class="fas fa-trash"></i> Hapus</button>
      </div></div>`,
    `<div class="accordion-row" style="padding:8px 20px 8px 28px"><button class="btn-primary" style="font-size:12px;padding:6px 12px" onclick="tambahJurusan()"><i class="fas fa-plus"></i> Tambah Jurusan</button></div>`);
  render('acc-kelas-body','acc-kelas-count',Store.kelas,k=>`
    <div class="accordion-row">
      <div class="row-info">${k.nama} <span class="row-sub">${k.siswa} siswa</span></div>
      <div class="row-actions">
        <button class="btn-edit" onclick="editKelas(${k.id})"><i class="fas fa-pencil"></i> Edit</button>
        <button class="btn-del"  onclick="confirmHapus('Kelas ${k.nama}','kelas',${k.id})"><i class="fas fa-trash"></i> Hapus</button>
      </div></div>`,
    `<div class="accordion-row" style="padding:8px 20px 8px 28px"><button class="btn-primary" style="font-size:12px;padding:6px 12px" onclick="tambahKelasAcc()"><i class="fas fa-plus"></i> Tambah Kelas</button></div>`);
  render('acc-mapel-body','acc-mapel-count',Store.mapel,m=>`
    <div class="accordion-row">
      <div class="row-info">${m.nama} <span class="row-code">${m.kode}</span></div>
      <div class="row-actions">
        <button class="btn-edit" onclick="editMapel(${m.id})"><i class="fas fa-pencil"></i> Edit</button>
        <button class="btn-del"  onclick="confirmHapus('Mapel ${m.nama}','mapel',${m.id})"><i class="fas fa-trash"></i> Hapus</button>
      </div></div>`,
    `<div class="accordion-row" style="padding:8px 20px 8px 28px"><button class="btn-primary" style="font-size:12px;padding:6px 12px" onclick="tambahMapelAcc()"><i class="fas fa-plus"></i> Tambah Mapel</button></div>`);
}

/* Fungsi tambah baru */
function tambahJurusan()  { Store.editTarget=null; openModal('modal-jurusan');  clearForm('modal-jurusan'); }
function tambahKelasAcc() { Store.editTarget=null; openModal('modal-kelas');    clearForm('modal-kelas'); }
function tambahMapelAcc() { Store.editTarget=null; openModal('modal-mapel');    clearForm('modal-mapel'); }
function tambahGuru()     { Store.editTarget=null; openModal('modal-guru');     clearForm('modal-guru'); }
function tambahSiswa()    { Store.editTarget=null; openModal('modal-siswa');    clearForm('modal-siswa'); }
function tambahKelas()    { Store.editTarget=null; openModal('modal-kelas');    clearForm('modal-kelas'); }
function tambahMapel()    { Store.editTarget=null; openModal('modal-mapel');    clearForm('modal-mapel'); }

function clearForm(modalId) {
  const ov=$(modalId); if(!ov)return;
  ov.querySelectorAll('input,select,textarea').forEach(el=>{
    el.removeAttribute('readonly');
    if (el.type !== 'select-one') el.value='';
    if (el.type === 'select-one') el.selectedIndex = 0;
  });
  const kodeEl = ov.querySelector('[data-field="kode"]');
  if(kodeEl) kodeEl.value = '';
}

/* ============================================================
   DASHBOARD UPDATE
============================================================ */
function updateDashboard() {
  ['siswa','guru','kelas','mapel'].forEach(k=>{
    if($(`stat-${k}`))$(`stat-${k}`).textContent=Store[k].length;
    updateBadge(`badge-${k}`,Store[k].length);
  });
  renderAccordion(); renderActivityFeed(); updateChartBars();
}
function updateBadge(id,count){const el=$(id);if(el)el.textContent=count;}
function updateChartBars() {
  const chart=$('chart-bars');if(!chart)return;
  const maxS=Math.max(...Store.kelas.map(c=>c.siswa),1);
  chart.innerHTML=Store.kelas.map(c=>`
    <div class="chart-bar-row"><label>${c.nama}</label>
      <div class="chart-bar-track"><div class="chart-bar-fill" style="width:${(c.siswa/maxS*100).toFixed(0)}%"></div></div>
      <span>${c.siswa}</span></div>`).join('');
}

/* ============================================================
   ACTIVITY FEED
============================================================ */
function addActivity(type,title,desc,time='Baru saja') {
  Store.activityLog.unshift({type,title,desc,time});
  if(Store.activityLog.length>10)Store.activityLog.pop();
  Store.notifications.unshift({id:Date.now(),title,body:desc,time,read:false});
  updateNotifBadge(); renderActivityFeed();
}
function renderActivityFeed() {
  const feed=$('activity-feed');if(!feed)return;
  feed.innerHTML=Store.activityLog.slice(0,5).map(a=>`
    <div class="activity-item">
      <div class="act-icon ${a.type}"><i class="fas fa-${a.type==='add'?'plus':a.type==='edit'?'pencil':'trash'}"></i></div>
      <div class="act-body"><h4>${a.title}</h4><p>${a.desc} • ${a.time}</p></div>
    </div>`).join('');
}

/* ============================================================
   SEARCH
============================================================ */
function filterTable(input,tableId) {
  const q=input.value.toLowerCase();
  $qa(`#${tableId} tbody tr`).forEach(row=>row.classList.toggle('hidden-row',!row.textContent.toLowerCase().includes(q)));
}
function openSearchModal(){openModal('search-modal');setTimeout(()=>$('search-main-input')?.focus(),100);}
function handleGlobalSearch(input) {
  const q=input.value.toLowerCase().trim(),results=$('search-results');if(!results)return;
  if(!q){results.innerHTML='<div class="search-empty">Ketik untuk mencari...</div>';return;}
  const all=[
    ...Store.guru.map(g=>({icon:'fas fa-chalkboard-teacher',title:g.nama,sub:`Guru – ${g.mapel}`,page:'guru'})),
    ...Store.siswa.map(s=>({icon:'fas fa-user-graduate',title:s.nama,sub:`Siswa – ${s.kelas}`,page:'siswa'})),
    ...Store.kelas.map(k=>({icon:'fas fa-door-open',title:k.nama,sub:`Kelas – ${k.jurusan}`,page:'kelas'})),
    ...Store.mapel.map(m=>({icon:'fas fa-book-open',title:m.nama,sub:`Mapel – ${m.kode}`,page:'mapel'})),
  ].filter(i=>i.title.toLowerCase().includes(q)||i.sub.toLowerCase().includes(q));
  results.innerHTML=all.length===0
    ?`<div class="search-empty">Tidak ditemukan hasil untuk "${input.value}"</div>`
    :all.slice(0,8).map(i=>`<div class="search-result-item" onclick="goToSearch('${i.page}')"><div class="search-result-icon"><i class="${i.icon}"></i></div><div><div class="search-result-title">${i.title}</div><div class="search-result-sub">${i.sub}</div></div></div>`).join('');
}
function goToSearch(page){closeAllModals();showPage(page,document.querySelector(`[onclick*="'${page}'"]`));}

/* ============================================================
   NOTIFIKASI
============================================================ */
function updateNotifBadge(){const u=Store.notifications.filter(n=>!n.read).length,dot=$q('.notif-dot');if(dot)dot.style.display=u>0?'block':'none';}
function toggleNotifPanel(){const p=$('notif-panel'),h=$('help-panel');if(h)h.classList.remove('open');if(p){p.classList.toggle('open');if(p.classList.contains('open'))renderNotifPanel();}}
function renderNotifPanel(){const list=$('notif-list');if(!list)return;list.innerHTML=Store.notifications.slice(0,6).map(n=>`<div class="notif-item ${n.read?'':'unread'}" onclick="markNotifRead(${n.id})"><div class="notif-dot-indicator" style="opacity:${n.read?0:1}"></div><div class="notif-item-body"><h5>${n.title}</h5><p>${n.body} • ${n.time}</p></div></div>`).join('');}
function markNotifRead(id){const n=Store.notifications.find(x=>x.id===id);if(n)n.read=true;updateNotifBadge();renderNotifPanel();}
function markAllRead(){Store.notifications.forEach(n=>n.read=true);updateNotifBadge();renderNotifPanel();showToast('Semua notifikasi ditandai terbaca','success');}
function toggleHelpPanel(){const p=$('help-panel'),n=$('notif-panel');if(n)n.classList.remove('open');if(p)p.classList.toggle('open');}
function closeAllPanels(){$q('.notif-panel')?.classList.remove('open');$q('.help-panel')?.classList.remove('open');}
document.addEventListener('click',e=>{if(!e.target.closest('#notif-panel')&&!e.target.closest('[onclick*="toggleNotifPanel"]'))$q('.notif-panel')?.classList.remove('open');if(!e.target.closest('#help-panel')&&!e.target.closest('[onclick*="toggleHelpPanel"]'))$q('.help-panel')?.classList.remove('open');});

/* ============================================================
   DETAIL VIEW
============================================================ */
function viewDetail(type,id) {
  let data,title,rows;
  const iconMap={guru:'fas fa-chalkboard-teacher',siswa:'fas fa-user-graduate',kelas:'fas fa-door-open',mapel:'fas fa-book-open'};
  const bgMap={guru:'#16a34a',siswa:'#8b5cf6',kelas:'#d68910',mapel:'#1a6fa5'};
  if(type==='guru'){data=Store.guru.find(g=>g.id===id);if(!data)return;title=data.nama;rows=[['NIP',data.nip],['Email',data.email],['No. HP',data.hp||'—'],['Mapel',data.mapel],['Kelas Ajar',data.kelas],['Status',data.status],['Alamat',data.alamat||'—']];}
  else if(type==='siswa'){data=Store.siswa.find(s=>s.id===id);if(!data)return;title=data.nama;rows=[['NISN',data.nisn],['Kelas',data.kelas],['Jurusan',data.jurusan],['Gender',data.gender],['Tgl Lahir',formatDate(data.lahir)],['No. HP',data.hp||'—'],['Email',data.email||'—'],['Orang Tua',data.ortu||'—'],['Status',data.status]];}
  else if(type==='kelas'){data=Store.kelas.find(k=>k.id===id);if(!data)return;title=data.nama;rows=[['Jurusan',data.jurusan],['Tingkat',data.tingkat],['Wali Kelas',data.wali],[`Jumlah Siswa`,`${data.siswa} siswa`],['Kapasitas',`${data.kapasitas} siswa`],['Tahun Ajaran',data.ta]];}
  else if(type==='mapel'){data=Store.mapel.find(m=>m.id===id);if(!data)return;title=data.nama;rows=[['Kode',data.kode],['SKS/Jam',data.sks],['Guru Pengampu',data.guru],['Jurusan',data.jurusan],['Deskripsi',data.deskripsi||'—']];}
  else return;
  const overlay=$('modal-detail');if(!overlay)return;
  $q('#modal-detail .modal').innerHTML=`
    <div class="modal-title"><h3><i class="${iconMap[type]}" style="color:var(--primary)"></i> Detail ${type.charAt(0).toUpperCase()+type.slice(1)}</h3><button class="modal-close" onclick="closeModal('modal-detail')"><i class="fas fa-times"></i></button></div>
    <div class="profile-modal-header"><div class="profile-avatar-lg" style="background:${data.bg||bgMap[type]}">${data.initials||makeInitials(title)}</div><h3>${title}</h3><p>${type.charAt(0).toUpperCase()+type.slice(1)}</p></div>
    ${rows.map(([l,v])=>`<div class="profile-detail-row"><span class="label">${l}</span><span class="value">${v}</span></div>`).join('')}
    <div class="modal-footer"><button class="btn-cancel" onclick="closeModal('modal-detail')">Tutup</button><button class="btn-primary" onclick="closeModal('modal-detail');edit${type.charAt(0).toUpperCase()+type.slice(1)}(${id})"><i class="fas fa-pencil"></i> Edit</button></div>`;
  openModal('modal-detail');
}

/* ============================================================
   MONITORING
============================================================ */
function renderMonitoringTable() {
  const tbody=$('tbody-monitoring');if(!tbody)return;
  const logs=[
    {user:'Admin Sekolah',initials:'AS',bg:'#16a34a',role:'Admin',activity:'Login ke sistem',time:'Hari ini, 08:00',status:'Berhasil'},
    {user:'Melyanah',initials:'ML',bg:'#16a34a',role:'Guru',activity:'Input nilai siswa',time:'Hari ini, 09:15',status:'Berhasil'},
    {user:'Budi Santoso',initials:'BS',bg:'#8b5cf6',role:'Siswa',activity:'Lihat materi',time:'Hari ini, 10:30',status:'Berhasil'},
    {user:'Candra Wijaya',initials:'CW',bg:'#06b6d4',role:'Siswa',activity:'Mengerjakan tugas',time:'Hari ini, 10:45',status:'Berhasil'},
    {user:'Unknown',initials:'??',bg:'#9ca3af',role:'—',activity:'Percobaan login gagal',time:'Hari ini, 11:00',status:'Gagal'},
    ...Store.activityLog.slice(0,3).map(a=>({user:'Admin Sekolah',initials:'AS',bg:'#16a34a',role:'Admin',activity:a.title,time:a.time,status:'Berhasil'})),
  ];
  tbody.innerHTML=logs.map(l=>`
    <tr>
      <td><div class="cell-user"><div class="avatar-sm" style="background:${l.bg}">${l.initials}</div><div><strong>${l.user}</strong></div></div></td>
      <td><span class="row-code">${l.role}</span></td>
      <td>${l.activity}</td><td>${l.time}</td>
      <td><span class="badge-status ${l.status==='Berhasil'?'aktif':'nonaktif'}">${l.status}</span></td>
    </tr>`).join('');
}

/* ============================================================
   PENGATURAN
============================================================ */
function toggleSwitch(el){el.classList.toggle('on');const isOn=el.classList.contains('on');const lbl=el.previousElementSibling?.querySelector('h4')?.textContent||'Pengaturan';showToast(`${lbl} ${isOn?'diaktifkan':'dinonaktifkan'}`,isOn?'success':'warning');}
function saveSchoolProfile(){const nama=$q('[data-setting="nama"]')?.value;if(!nama){showToast('Nama sekolah harus diisi!','error');return;}showToast('Profil sekolah berhasil disimpan!','success');}
function changePassword(){const pw=$q('[data-setting="pw"]')?.value,pw2=$q('[data-setting="pw2"]')?.value;if(!pw||!pw2){showToast('Password tidak boleh kosong!','error');return;}if(pw!==pw2){showToast('Konfirmasi password tidak cocok!','error');return;}if(pw.length<6){showToast('Password minimal 6 karakter!','error');return;}showToast('Password berhasil diubah!','success');$q('[data-setting="pw"]').value='';$q('[data-setting="pw2"]').value='';}

/* ============================================================
   LOGOUT
============================================================ */
function doLogout(){closeModal('modal-logout-confirm');localStorage.removeItem('user');localStorage.removeItem('token');sessionStorage.clear();showToast('Logout berhasil. Sampai jumpa!','success');setTimeout(()=>window.location.replace('login.html'),1200);}

/* ============================================================
   FILTER
============================================================ */
function filterSiswaByKelas(select){const val=select.value;$qa('#tbl-siswa tbody tr').forEach(row=>{if(val==='Semua Kelas'){row.classList.remove('hidden-row');return;}row.classList.toggle('hidden-row',(row.cells[3]?.textContent||'')!==val);});}
function filterMonitoringByRole(select){const val=select.value;$qa('#tbody-monitoring tr').forEach(row=>{if(val==='Semua Role'){row.classList.remove('hidden-row');return;}row.classList.toggle('hidden-row',(row.querySelector('.row-code')?.textContent||'')!==val);});}

/* ============================================================
   GENERIC SAVE DISPATCHER
============================================================ */
function saveData(modalId){const fn={'modal-guru':saveGuru,'modal-siswa':saveSiswa,'modal-kelas':saveKelas,'modal-mapel':saveMapel,'modal-jurusan':saveJurusan}[modalId];if(fn)fn();}

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded',()=>{
  updateDashboard();
  renderGuruTable();
  updateNotifBadge();
  const sb=$q('.search-box');if(sb)sb.addEventListener('click',openSearchModal);
  showToast('Selamat datang, Admin Sekolah! 👋','success',4000);
});
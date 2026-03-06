'use strict';
/* ════════════════════════════════════════════════════════════
   dashboard-siswa.js
   Data siswa sesuai dengan guru dan mapel yang diberikan
════════════════════════════════════════════════════════════ */

/* ════ DATA MAPEL (sesuai daftar guru) ════ */
const mapelData = [
  {id:1, nama:'Pemrograman Web',          guru:'Melyanah',           color:'#16a34a', bg:'#e6f7e6', icon:'fa-code', materi:3, tugas:3, nilaiRata:88},
  {id:2, nama:'Basis Data',                guru:'Irwan Saputra',     color:'#0ea5e9', bg:'#e6f3ff', icon:'fa-database', materi:4, tugas:5, nilaiRata:90},
  {id:3, nama:'PBTGM',                     guru:'Novi Widia Ningsih',color:'#f59e0b', bg:'#fff4e5', icon:'fa-gamepad', materi:2, tugas:2, nilaiRata:85},
  {id:4, nama:'MTK',                       guru:'Endang',            color:'#5F7161', bg:'#edf2ed', icon:'fa-square-root-variable', materi:3, tugas:4, nilaiRata:92},
  {id:5, nama:'Bahasa Inggris',             guru:'Uday Zakaria',      color:'#1a6fa5', bg:'#e6f0fa', icon:'fa-language', materi:3, tugas:3, nilaiRata:90},
  {id:6, nama:'PPKN',                      guru:'Gita Riyanti',      color:'#7d3c98', bg:'#f2e6fa', icon:'fa-scale-balanced', materi:2, tugas:2, nilaiRata:88},
  {id:7, nama:'Sejarah',                    guru:'Eni Lisnawati',    color:'#c0392b', bg:'#fee9e7', icon:'fa-landmark', materi:2, tugas:2, nilaiRata:86},
  {id:8, nama:'PKWU',                       guru:'Yenny Andrini',    color:'#d68910', bg:'#fff1e0', icon:'fa-laptop', materi:2, tugas:2, nilaiRata:87},
  {id:9, nama:'Bahasa Jepang',              guru:'Miki Tanuwijaya',  color:'#27ae60', bg:'#e6f7e6', icon:'fa-font', materi:2, tugas:2, nilaiRata:85},
  {id:10, nama:'Pemrograman Perangkat Lunak', guru:'Sinung Kalimo N', color:'#8e44ad', bg:'#f0e6fa', icon:'fa-computer', materi:3, tugas:3, nilaiRata:89},
];

/* ════ DATA MATERI ════ */
const materiAll = [
  // Basis Data - Irwan Saputra
  {id:1, judul:'Modul ERD dan Normalisasi',     mapel:'Basis Data',       guru:'Irwan Saputra', tgl:'20 Feb 2026', tipe:'modul', status:'belum', isNew:true},
  {id:2, judul:'PPT DDL dan DML',                mapel:'Basis Data',       guru:'Irwan Saputra', tgl:'18 Feb 2026', tipe:'ppt',   status:'belum', isNew:true},
  {id:3, judul:'Modul Query Join',                mapel:'Basis Data',       guru:'Irwan Saputra', tgl:'15 Feb 2026', tipe:'modul', status:'sudah', isNew:false},
  {id:4, judul:'Video Stored Procedure',          mapel:'Basis Data',       guru:'Irwan Saputra', tgl:'12 Feb 2026', tipe:'video', status:'sudah', isNew:false},
  
  // Pemrograman Web - Melyanah
  {id:5, judul:'Modul HTML Dasar',                mapel:'Pemrograman Web',  guru:'Melyanah',       tgl:'10 Feb 2026', tipe:'modul', status:'sudah', isNew:false},
  {id:6, judul:'PPT CSS Layouting',               mapel:'Pemrograman Web',  guru:'Melyanah',       tgl:'8 Feb 2026',  tipe:'ppt',   status:'sudah', isNew:false},
  {id:7, judul:'Modul JavaScript Dasar',          mapel:'Pemrograman Web',  guru:'Melyanah',       tgl:'5 Feb 2026',  tipe:'modul', status:'sudah', isNew:false},
  
  // PBTGM - Novi Widia Ningsih
  {id:8, judul:'Modul Game Development',          mapel:'PBTGM',            guru:'Novi Widia Ningsih', tgl:'3 Feb 2026', tipe:'modul', status:'sudah', isNew:false},
  
  // MTK - Endang
  {id:9, judul:'Modul Limit Fungsi',              mapel:'MTK',              guru:'Endang',         tgl:'1 Feb 2026', tipe:'modul', status:'sudah', isNew:false},
  {id:10, judul:'PPT Trigonometri',               mapel:'MTK',              guru:'Endang',         tgl:'28 Jan 2026', tipe:'ppt',   status:'sudah', isNew:false},
  
  // Bahasa Inggris - Uday Zakaria
  {id:11, judul:'Modul Reading Comprehension',    mapel:'Bahasa Inggris',   guru:'Uday Zakaria',   tgl:'25 Jan 2026', tipe:'modul', status:'sudah', isNew:false},
  
  // Pemrograman Perangkat Lunak - Sinung Kalimo N
  {id:12, judul:'Modul Java Dasar',               mapel:'Pemrograman Perangkat Lunak', guru:'Sinung Kalimo N', tgl:'22 Jan 2026', tipe:'modul', status:'sudah', isNew:false},
  {id:13, judul:'PPT OOP',                         mapel:'Pemrograman Perangkat Lunak', guru:'Sinung Kalimo N', tgl:'20 Jan 2026', tipe:'ppt',   status:'sudah', isNew:false},
];

/* ════ DATA TUGAS ════ */
const tugasAll = [
  // Basis Data - Irwan Saputra
  {id:1, judul:'Kuis ERD dan Normalisasi',       mapel:'Basis Data',       guru:'Irwan Saputra', tipe:'kuis',  deadline:'23 Feb 2026', status:'belum', nilai:null, daysLeft:1},
  {id:2, judul:'Tugas DDL dan DML',              mapel:'Basis Data',       guru:'Irwan Saputra', tipe:'tugas', deadline:'25 Feb 2026', status:'belum', nilai:null, daysLeft:3},
  {id:3, judul:'Project Database Perpustakaan',  mapel:'Basis Data',       guru:'Irwan Saputra', tipe:'tugas', deadline:'2 Mar 2026',  status:'belum', nilai:null, daysLeft:8},
  {id:4, judul:'Tugas Query Join',                mapel:'Basis Data',       guru:'Irwan Saputra', tipe:'tugas', deadline:'18 Feb 2026', status:'sudah', nilai:92,  kumpulTgl:'17 Feb 2026'},
  {id:5, judul:'Kuis Stored Procedure',           mapel:'Basis Data',       guru:'Irwan Saputra', tipe:'kuis',  deadline:'15 Feb 2026', status:'sudah', nilai:88,  kumpulTgl:'14 Feb 2026'},
  
  // Pemrograman Web - Melyanah
  {id:6, judul:'Tugas HTML Form',                 mapel:'Pemrograman Web',  guru:'Melyanah',       tipe:'tugas', deadline:'20 Feb 2026', status:'sudah', nilai:90,  kumpulTgl:'19 Feb 2026'},
  {id:7, judul:'Kuis CSS Dasar',                  mapel:'Pemrograman Web',  guru:'Melyanah',       tipe:'kuis',  deadline:'10 Feb 2026', status:'sudah', nilai:94,  kumpulTgl:'9 Feb 2026'},
  
  // MTK - Endang
  {id:8, judul:'Tugas Limit Fungsi',              mapel:'MTK',              guru:'Endang',         tipe:'tugas', deadline:'5 Feb 2026',  status:'sudah', nilai:92,  kumpulTgl:'4 Feb 2026'},
  
  // Bahasa Inggris - Uday Zakaria
  {id:9, judul:'Kuis Vocabulary',                  mapel:'Bahasa Inggris',   guru:'Uday Zakaria',   tipe:'kuis',  deadline:'8 Feb 2026',  status:'sudah', nilai:90,  kumpulTgl:'7 Feb 2026'},
  
  // PBTGM - Novi Widia Ningsih
  {id:10, judul:'Tugas Game Sederhana',            mapel:'PBTGM',            guru:'Novi Widia Ningsih', tipe:'tugas', deadline:'12 Feb 2026', status:'sudah', nilai:85,  kumpulTgl:'11 Feb 2026'},
];

/* ════ DATA NILAI PER MAPEL ════ */
const nilaiPerMapel = {
  'Basis Data': [
    {judul:'Tugas Query Join', nilai:92},
    {judul:'Kuis Stored Procedure', nilai:88},
    {judul:'Kuis ERD dan Normalisasi', nilai:null},
    {judul:'Tugas DDL dan DML', nilai:null},
    {judul:'Project Database Perpustakaan', nilai:null}
  ],
  'Pemrograman Web': [
    {judul:'Tugas HTML Form', nilai:90},
    {judul:'Kuis CSS Dasar', nilai:94}
  ],
  'PBTGM': [
    {judul:'Tugas Game Sederhana', nilai:85}
  ],
  'MTK': [
    {judul:'Tugas Limit Fungsi', nilai:92}
  ],
  'Bahasa Inggris': [
    {judul:'Kuis Vocabulary', nilai:90}
  ],
  'PPKN': [
    {judul:'Tugas Pancasila', nilai:88}
  ],
  'Sejarah': [
    {judul:'Tugas Sejarah Indonesia', nilai:86}
  ],
  'PKWU': [
    {judul:'Tugas Kewirausahaan', nilai:87}
  ],
  'Bahasa Jepang': [
    {judul:'Kuis Hiragana', nilai:85}
  ],
  'Pemrograman Perangkat Lunak': [
    {judul:'Tugas Java Dasar', nilai:89},
    {judul:'Kuis OOP', nilai:88}
  ],
};

/* ════ DATA KOMENTAR GURU ════ */
const komentarGuru = [
  {guru:'Irwan Saputra', inisial:'IS', tipe:'positif',  tag:'Kerja Bagus', teks:'Tugas Query Join dikerjakan dengan sangat baik. Query yang dibuat efisien dan tepat!', tgl:'18 Feb 2026'},
  {guru:'Irwan Saputra', inisial:'IS', tipe:'semangat', tag:'Semangat Belajar', teks:'Terus pelajari konsep normalisasi agar lebih paham. Kamu sudah menunjukkan kemajuan!', tgl:'15 Feb 2026'},
  {guru:'Melyanah', inisial:'ML', tipe:'positif', tag:'Aktif di Kelas', teks:'Aurellia aktif bertanya dan membantu teman. Pertahankan semangat kolaborasinya!', tgl:'10 Feb 2026'},
  {guru:'Endang', inisial:'EN', tipe:'perbaikan', tag:'Perlu Lebih Berusaha', teks:'Perhitungan limit sudah baik, tapi perlu teliti lagi dalam menuliskan rumus.', tgl:'5 Feb 2026'},
  {guru:'Uday Zakaria', inisial:'UZ', tipe:'positif', tag:'Peningkatan Signifikan', teks:'Nilai speaking kamu meningkat pesat. Terus latihan listening ya!', tgl:'3 Feb 2026'},
];

/* ════ DATA PENGUMUMAN ════ */
let pengumumanData = [
  {guru:'Irwan Saputra', mapel:'Basis Data', judul:'Jadwal Praktikum Basis Data', isi:'Praktikum membuat database akan dilaksanakan Jumat, 28 Feb 2026 pukul 08.00 di Lab Komputer. Bawa modul ERD!', tgl:'20 Feb 2026', tag:'mapel', isNew:true},
  {guru:'Irwan Saputra', mapel:'Basis Data', judul:'Link Materi Tambahan', isi:'Video tutorial Stored Procedure telah diupload. Akses melalui menu Materi sebelum kuis minggu depan.', tgl:'18 Feb 2026', tag:'mapel', isNew:true},
  {guru:'Melyanah', mapel:'Pemrograman Web', judul:'Reminder Tugas CSS', isi:'Ingat! Tugas CSS Layouting deadline 25 Feb. Pelajari dulu materi Flexbox dan Grid.', tgl:'15 Feb 2026', tag:'mapel', isNew:false},
  {guru:'Irwan Saputra', mapel:'Basis Data', judul:'Info Nilai Tugas', isi:'Nilai Tugas Query Join sudah keluar. Cek di menu Nilai ya!', tgl:'12 Feb 2026', tag:'mapel', isNew:false},
  {guru:'Sinung Kalimo N', mapel:'Pemrograman Perangkat Lunak', judul:'Tugas Tambahan Java', isi:'Ada tugas tambahan membuat program kalkulator sederhana. Deadline 28 Feb.', tgl:'10 Feb 2026', tag:'mapel', isNew:false},
];

/* ════ VARIABEL GLOBAL ════ */
let currentTugasId = null;
let currentMapelId = null;

const tipeIcon  = {modul:'fa-book', video:'fa-circle-play', ppt:'fa-file-powerpoint', doc:'fa-file-word'};
const tipeClass = {modul:'modul', video:'video', ppt:'ppt', doc:'doc'};

/* ════ SYNC DARI SHARED STORE ════ */
function syncFromAdmin() {
  const store = window.SharedStore;
  if (!store) return;

  // Sync guru baru ke mapelData
  if (store.guru) {
    store.guru.forEach(g => {
      const existing = mapelData.find(m => 
        m.guru === g.nama || 
        (g.mapel && m.nama.toLowerCase() === g.mapel.toLowerCase())
      );
      
      if (!existing && g.mapel) {
        const warna = ['#16a34a', '#0ea5e9', '#f59e0b', '#5F7161', '#1a6fa5', '#7d3c98', '#c0392b', '#d68910', '#27ae60', '#8e44ad'][mapelData.length % 10];
        mapelData.push({
          id: mapelData.length + 1,
          nama: g.mapel,
          guru: g.nama,
          color: warna,
          bg: warna + '22',
          icon: 'fa-book',
          materi: 0,
          tugas: 0,
          nilaiRata: 0,
        });
      }
    });
  }

  updateBadges();
}

/* ════ UPDATE BADGES ════ */
function updateBadges() {
  const badgeMateri = document.getElementById('badge-materi-baru');
  if (badgeMateri) badgeMateri.textContent = materiAll.filter(m => m.isNew).length;
  
  const badgeTugas = document.getElementById('badge-tugas');
  if (badgeTugas) badgeTugas.textContent = tugasAll.filter(t => t.status === 'belum').length;
  
  const badgePeng = document.getElementById('badge-peng');
  if (badgePeng) badgePeng.textContent = pengumumanData.filter(p => p.isNew).length;
  
  const notifDot = document.getElementById('notif-dot');
  if (notifDot) {
    const totalNotif = materiAll.filter(m => m.isNew).length + 
                       tugasAll.filter(t => t.status === 'belum').length + 
                       pengumumanData.filter(p => p.isNew).length;
    notifDot.style.display = totalNotif > 0 ? 'inline-block' : 'none';
  }
}

/* ════ NAVIGATION ════ */
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-'+page)?.classList.add('active');
  
  const navMap = {dashboard:0, mapel:1, 'detail-mapel':1, materi:2, tugas:3, nilai:4, pengumuman:5, komentar:6};
  const navItems = document.querySelectorAll('.nav-item');
  const navIdx = navMap[page] ?? 0;
  if (navItems[navIdx]) navItems[navIdx].classList.add('active');
  
  const titles = {
    dashboard: ['Dashboard Siswa', 'Selamat datang, Aurellia Putri — XI RPL 1'],
    mapel: ['Mata Pelajaran', 'Semua mapel yang kamu ikuti semester ini'],
    'detail-mapel': ['Detail Mapel', 'Materi, tugas, dan nilai mapel ini'],
    materi: ['Materi', 'Semua materi dari guru-gurumu'],
    tugas: ['Tugas & Kuis', 'Kumpulkan tugasmu sebelum deadline'],
    nilai: ['Nilai Saya', 'Rekap nilai dari semua tugas yang sudah dinilai'],
    pengumuman: ['Pengumuman', 'Informasi terbaru dari guru'],
    komentar: ['Komentar Guru', 'Evaluasi dan masukan dari guru-gurumu'],
  };
  
  const [t, s] = titles[page] || titles.dashboard;
  document.getElementById('topbar-title').textContent = t;
  document.getElementById('topbar-sub').textContent = s;
  
  if (page === 'mapel') renderMapelGrid();
  if (page === 'materi') renderAllMateri();
  if (page === 'tugas') renderAllTugas();
  if (page === 'nilai') renderNilai();
  if (page === 'pengumuman') renderPengumuman();
  if (page === 'komentar') renderKomentar();
}

/* ════ MAPEL ════ */
function renderMapelGrid() {
  syncFromAdmin();
  const grid = document.getElementById('mapel-grid');
  if (!grid) return;
  
  grid.innerHTML = mapelData.map(m => `
    <div class="mapel-card" onclick="bukaMapel(${m.id})" style="border-top:4px solid ${m.color}">
      <div class="mapel-card-icon" style="background:${m.bg};color:${m.color}"><i class="fa-solid ${m.icon}"></i></div>
      <h3>${m.nama}</h3><p>${m.guru}</p>
      <div class="mapel-card-meta">
        <span class="meta-chip"><i class="fa-solid fa-book"></i>${m.materi} Materi</span>
        <span class="meta-chip"><i class="fa-solid fa-clipboard"></i>${m.tugas} Tugas</span>
      </div>
      <div class="mapel-progress">
        <div class="mapel-progress-label"><span>Rata-rata Nilai</span><span style="color:${m.color};font-weight:700">${m.nilaiRata || '—'}</span></div>
        <div class="mapel-progress-track"><div class="mapel-progress-fill" style="width:${m.nilaiRata || 0}%;background:${m.color}"></div></div>
      </div>
    </div>`).join('');
}

function bukaMapel(id) {
  currentMapelId = id;
  const m = mapelData.find(x => x.id === id);
  if (!m) return;
  
  document.getElementById('detail-mapel-judul').textContent = m.nama;
  document.getElementById('detail-mapel-sub').textContent = m.guru + ' • XI RPL 1';
  
  // Materi
  const mats = materiAll.filter(mt => mt.mapel === m.nama);
  document.getElementById('dm-materi-list').innerHTML = mats.length 
    ? mats.map(mt => materiHTML(mt)).join('') 
    : '<div class="empty-state"><i class="fa-solid fa-folder-open"></i><p>Belum ada materi.</p></div>';
  
  // Tugas
  const tugs = tugasAll.filter(t => t.mapel === m.nama);
  document.getElementById('dm-tugas-list').innerHTML = tugs.length 
    ? tugs.map(t => tugasCardHTML(t)).join('') 
    : '<div class="empty-state" style="background:#fff;border-radius:14px;padding:40px"><i class="fa-solid fa-clipboard-list"></i><p>Belum ada tugas.</p></div>';
  
  // Nilai
  const ns = nilaiPerMapel[m.nama] || [];
  const avg = ns.filter(n => n.nilai).length 
    ? Math.round(ns.filter(n => n.nilai).reduce((s, n) => s + n.nilai, 0) / ns.filter(n => n.nilai).length) 
    : null;
  
  document.getElementById('dm-nilai-wrap').innerHTML = `
    <div class="data-card-header" style="background:linear-gradient(135deg,#f2f6f3,#eaf1eb)">
      <h3>Nilai ${m.nama}</h3>
      <span style="font-size:22px;font-weight:800;color:${avg ? nilaiColor(avg) : 'var(--text-muted)'}">${avg ?? '—'}</span>
    </div>
    ${ns.length 
      ? ns.map(n => `<div class="nilai-row"><span class="label">${n.judul}</span><span class="val" style="color:${n.nilai ? nilaiColor(n.nilai) : 'var(--text-muted)'}">${n.nilai ?? '— Belum dinilai'}</span></div>`).join('') 
      : '<div class="empty-state"><i class="fa-solid fa-star"></i><p>Belum ada nilai.</p></div>'}`;
  
  // Reset tabs
  const tabBtns = document.querySelectorAll('#page-detail-mapel .tab-btn');
  const tabContents = document.querySelectorAll('#page-detail-mapel .tab-content');
  tabBtns.forEach((b, i) => b.classList.toggle('active', i === 0));
  tabContents.forEach((c, i) => c.classList.toggle('active', i === 0));
  
  navigateTo('detail-mapel');
}

/* ════ MATERI ════ */
function materiHTML(mt) {
  return `<div class="materi-item" onclick="bukaMateri(${mt.id})">
    <div class="materi-icon ${tipeClass[mt.tipe] || 'modul'}"><i class="fa-solid ${tipeIcon[mt.tipe] || 'fa-file'}"></i></div>
    <div class="materi-body">
      <h4>${mt.judul}${mt.isNew ? '<span class="materi-new">Baru</span>' : ''}</h4>
      <p>${mt.mapel} • ${mt.guru} • ${mt.tgl}</p>
    </div>
    <span class="badge-status ${mt.status === 'sudah' ? 'sudah' : 'belum'}">${mt.status === 'sudah' ? 'Sudah Dibuka' : 'Belum Dibuka'}</span>
  </div>`;
}

function renderAllMateri(filter = '', mapelF = '') {
  const rows = materiAll.filter(m => {
    const t = m.judul.toLowerCase().includes(filter.toLowerCase());
    const s = !mapelF || m.mapel.includes(mapelF);
    return t && s;
  });
  
  const container = document.getElementById('all-materi-list');
  if (!container) return;
  
  container.innerHTML = rows.length 
    ? rows.map(m => materiHTML(m)).join('') 
    : '<div class="empty-state"><i class="fa-solid fa-folder-open"></i><p>Tidak ada materi.</p></div>';
}

function filterMateri(v = '') {
  renderAllMateri(v, document.getElementById('filter-mapel-materi')?.value || '');
}

function bukaMateri(id) {
  const m = materiAll.find(x => x.id === id);
  if (!m) return;
  
  const modalJudul = document.getElementById('modal-materi-judul');
  const modalInfo = document.getElementById('modal-materi-info');
  const modalNama = document.getElementById('modal-materi-nama');
  
  if (modalJudul) modalJudul.innerHTML = `<i class="fa-solid ${tipeIcon[m.tipe] || 'fa-file'}" style="color:var(--info)"></i> ${m.judul}`;
  if (modalInfo) modalInfo.textContent = m.mapel + ' • ' + m.guru + ' • ' + m.tgl;
  if (modalNama) modalNama.textContent = m.judul;
  
  m.status = 'sudah'; 
  m.isNew = false;
  
  openModal('modal-materi');
  updateBadges();
}

function downloadMateri() { 
  showToast('Mengunduh materi...', 'info'); 
  closeModal('modal-materi'); 
}

/* ════ TUGAS ════ */
function nilaiColor(n) { 
  if (!n) return 'var(--text-muted)';
  return n >= 90 ? 'var(--primary)' : n >= 75 ? 'var(--warn)' : 'var(--danger)'; 
}

function countdownColor(d) { 
  if (d <= 0) return 'red';
  if (d <= 1) return 'red';
  if (d <= 3) return 'orange'; 
  return 'green'; 
}

function countdownLabel(d) { 
  if (d <= 0) return 'Sudah lewat!'; 
  if (d === 1) return 'Deadline besok!'; 
  return d + ' hari lagi'; 
}

function tugasCardHTML(t) {
  if (t.status === 'belum') {
    const cc = countdownColor(t.daysLeft);
    return `<div class="tugas-card aktif">
      <div class="tugas-card-top">
        <div>
          <span class="meta-chip" style="margin-bottom:8px;display:inline-flex"><i class="fa-solid fa-${t.tipe === 'kuis' ? 'pen-to-square' : 'clipboard-list'}"></i> ${t.tipe === 'kuis' ? 'Kuis' : 'Tugas'}</span>
          <h3>${t.judul}</h3>
        </div>
        <span class="badge-status belum">Belum Dikumpul</span>
      </div>
      <div class="tugas-card-meta">
        <span><i class="fa-solid fa-book"></i> ${t.mapel}</span>
        <span><i class="fa-solid fa-user"></i> ${t.guru}</span>
        <span><i class="fa-solid fa-calendar"></i> ${t.deadline}</span>
      </div>
      <div class="tugas-card-footer">
        <span class="countdown ${cc}"><i class="fa-solid fa-clock"></i> ${countdownLabel(t.daysLeft)}</span>
        <button class="btn-primary" style="padding:8px 16px;font-size:12.5px" onclick="openKumpulModal(${t.id})">
          <i class="fa-solid fa-paper-plane"></i> Kumpulkan
        </button>
      </div>
    </div>`;
  } else {
    const nc = t.nilai ? nilaiColor(t.nilai) : 'var(--text-muted)';
    return `<div class="tugas-card selesai">
      <div class="tugas-card-top">
        <div>
          <span class="meta-chip" style="margin-bottom:8px;display:inline-flex"><i class="fa-solid fa-${t.tipe === 'kuis' ? 'pen-to-square' : 'clipboard-list'}"></i> ${t.tipe === 'kuis' ? 'Kuis' : 'Tugas'}</span>
          <h3>${t.judul}</h3>
        </div>
        <span class="badge-status sudah">Sudah Dikumpul</span>
      </div>
      <div class="tugas-card-meta">
        <span><i class="fa-solid fa-book"></i> ${t.mapel}</span>
        <span><i class="fa-solid fa-user"></i> ${t.guru}</span>
        <span><i class="fa-solid fa-calendar-check"></i> Dikumpul: ${t.kumpulTgl}</span>
      </div>
      <div class="tugas-card-footer">
        <span style="font-size:12px;color:var(--text-muted)">Deadline: ${t.deadline}</span>
        <span style="font-size:22px;font-weight:800;color:${nc}">${t.nilai ?? '— Belum dinilai'}</span>
      </div>
    </div>`;
  }
}

function renderAllTugas() {
  const aktif = tugasAll.filter(t => t.status === 'belum');
  const selesai = tugasAll.filter(t => t.status === 'sudah');
  
  const aktifList = document.getElementById('tugas-aktif-list');
  const selesaiList = document.getElementById('tugas-selesai-list');
  const tabCountAktif = document.getElementById('tab-count-aktif');
  const tabCountSelesai = document.getElementById('tab-count-selesai');
  const dashTugas = document.getElementById('dash-tugas');
  const dashSelesai = document.getElementById('dash-selesai');
  
  if (aktifList) aktifList.innerHTML = aktif.length 
    ? aktif.map(t => tugasCardHTML(t)).join('') 
    : '<div class="empty-state" style="background:#fff;border-radius:14px;padding:40px"><i class="fa-solid fa-circle-check" style="color:var(--primary)"></i><p>Semua tugas sudah dikumpulkan! 🎉</p></div>';
  
  if (selesaiList) selesaiList.innerHTML = selesai.length 
    ? selesai.map(t => tugasCardHTML(t)).join('') 
    : '<div class="empty-state" style="background:#fff;border-radius:14px;padding:40px"><i class="fa-solid fa-clipboard-list"></i><p>Belum ada tugas yang dikumpulkan.</p></div>';
  
  if (tabCountAktif) tabCountAktif.textContent = aktif.length;
  if (tabCountSelesai) tabCountSelesai.textContent = selesai.length;
  if (dashTugas) dashTugas.textContent = aktif.length;
  if (dashSelesai) dashSelesai.textContent = selesai.length;
  
  updateBadges();
}

function openKumpulModal(id) {
  const t = tugasAll.find(x => x.id === id);
  if (!t) return;
  currentTugasId = id;
  
  const modalJudul = document.getElementById('modal-tugas-judul');
  const modalInfo = document.getElementById('modal-tugas-info');
  const catatan = document.getElementById('catatan-tugas');
  const namaFile = document.getElementById('nama-file-jawaban');
  const uploadArea = document.getElementById('upload-area-jawaban');
  
  if (modalJudul) modalJudul.textContent = t.judul;
  if (modalInfo) modalInfo.textContent = t.mapel + ' • ' + t.guru + ' • Deadline: ' + t.deadline;
  if (catatan) catatan.value = '';
  if (namaFile) namaFile.textContent = '';
  if (uploadArea) {
    const h4 = uploadArea.querySelector('h4');
    if (h4) h4.textContent = 'Klik atau seret file ke sini';
  }
  
  openModal('modal-kumpul');
}

function submitTugas() {
  const t = tugasAll.find(x => x.id === currentTugasId);
  if (!t) return;
  
  const fileInput = document.getElementById('file-jawaban');
  if (!fileInput || !fileInput.files[0]) {
    showToast('Pilih file jawaban terlebih dahulu!', 'warn');
    return;
  }
  
  t.status = 'sudah'; 
  t.kumpulTgl = today();
  t.nilai = null;
  
  closeModal('modal-kumpul');
  renderAllTugas();
  showToast('Tugas "' + t.judul + '" berhasil dikumpulkan!', 'success');
}

/* ════ NILAI ════ */
function renderNilai() {
  const selesai = tugasAll.filter(t => t.status === 'sudah');
  const nilaiList = document.getElementById('nilai-list');
  if (!nilaiList) return;
  
  let totalNilai = 0;
  let totalTerisi = 0;
  
  nilaiList.innerHTML = mapelData.map(m => {
    const rows = selesai.filter(t => t.mapel === m.nama);
    if (!rows.length) return '';
    
    const avg = rows.filter(r => r.nilai).length 
      ? Math.round(rows.filter(r => r.nilai).reduce((s, r) => s + r.nilai, 0) / rows.filter(r => r.nilai).length) 
      : null;
    
    if (avg) {
      totalNilai += avg;
      totalTerisi++;
    }
    
    return `<div class="nilai-card">
      <div class="nilai-card-header">
        <div style="width:36px;height:36px;border-radius:10px;background:${m.bg};color:${m.color};display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0"><i class="fa-solid ${m.icon}"></i></div>
        <h3>${m.nama}</h3>
        <span style="margin-left:auto;font-size:22px;font-weight:800;color:${avg ? nilaiColor(avg) : 'var(--text-muted)'}">${avg ?? '—'}</span>
      </div>
      ${rows.map(r => `<div class="nilai-row"><span class="label">${r.judul}</span><span class="val" style="color:${r.nilai ? nilaiColor(r.nilai) : 'var(--text-muted)'}">${r.nilai ?? '— Belum dinilai'}</span></div>`).join('')}
    </div>`;
  }).filter(Boolean).join('') || '<div class="empty-state"><i class="fa-solid fa-star"></i><p>Belum ada nilai yang masuk.</p></div>';
  
  // Update ringkasan
  const rataRata = totalTerisi > 0 ? Math.round(totalNilai / totalTerisi) : 0;
  const totalTugasTerisi = selesai.filter(t => t.nilai).length;
  
  const rataRataEl = document.getElementById('rata-rata-nilai');
  const totalTerisiEl = document.getElementById('total-nilai-terisi');
  const predikatEl = document.getElementById('predikat-nilai');
  
  if (rataRataEl) rataRataEl.textContent = rataRata;
  if (totalTerisiEl) totalTerisiEl.textContent = `Dari ${totalTugasTerisi} tugas yang dinilai`;
  
  if (predikatEl) {
    if (rataRata >= 90) predikatEl.textContent = 'Prestasi Istimewa 🌟';
    else if (rataRata >= 80) predikatEl.textContent = 'Prestasi Baik 🎉';
    else if (rataRata >= 70) predikatEl.textContent = 'Cukup, Tingkatkan 💪';
    else predikatEl.textContent = 'Perlu Belajar Lebih Giat 📚';
  }
  
  // Render ringkasan per mapel chart
  const chartEl = document.getElementById('ringkasan-nilai-chart');
  if (chartEl) {
    chartEl.innerHTML = mapelData.slice(0, 7).map(m => {
      const rows = selesai.filter(t => t.mapel === m.nama && t.nilai);
      const avg = rows.length ? Math.round(rows.reduce((s, r) => s + r.nilai, 0) / rows.length) : 0;
      return `
        <div class="chart-bar-row">
          <label style="width:100px;font-size:11px">${m.nama}</label>
          <div class="chart-bar-track"><div class="chart-bar-fill" style="width:${avg}%;background:${m.color}"></div></div>
          <span>${avg}</span>
        </div>
      `;
    }).join('');
  }
}

/* ════ PENGUMUMAN ════ */
function renderPengumuman() {
  const pengList = document.getElementById('peng-list');
  if (!pengList) return;
  
  pengList.innerHTML = pengumumanData.map(p => `
    <div class="peng-item ${p.isNew ? 'peng-unread' : ''}">
      <div class="peng-meta">
        <span class="peng-tag ${p.tag}">${p.tag === 'mapel' ? p.mapel : 'Umum'}</span>
        <span class="peng-time">${p.guru} • ${p.tgl}</span>
        ${p.isNew ? '<span style="background:var(--danger);color:#fff;font-size:10px;padding:1px 7px;border-radius:99px;font-weight:700">Baru</span>' : ''}
      </div>
      <h4>${p.judul}</h4>
      <p>${p.isi}</p>
    </div>`).join('');
  
  // Render chart pengumuman per guru
  const chartEl = document.getElementById('pengumuman-chart');
  if (chartEl) {
    const guruCount = {};
    pengumumanData.forEach(p => guruCount[p.guru] = (guruCount[p.guru] || 0) + 1);
    const sorted = Object.entries(guruCount).slice(0, 5);
    const maxVal = sorted[0]?.[1] || 1;
    
    chartEl.innerHTML = sorted.map(([nama, cnt]) => `
      <div class="chart-bar-row">
        <label style="width:100px;font-size:11px">${nama}</label>
        <div class="chart-bar-track"><div class="chart-bar-fill" style="width:${cnt / maxVal * 100}%"></div></div>
        <span>${cnt}</span>
      </div>
    `).join('');
  }
  
  updateBadges();
}

/* ════ KOMENTAR ════ */
function renderKomentar() {
  const store = window.SharedStore;
  let list = komentarGuru;
  
  if (store && store.guru) {
    store.guru.forEach(guru => {
      if (guru.komentarSiswa && guru.komentarSiswa.length > 0) {
        guru.komentarSiswa.forEach(k => {
          if (!list.find(x => x.teks === k.teks)) {
            list = [{guru: guru.nama, inisial: guru.initials || guru.nama.substring(0,2).toUpperCase(), tipe: k.tipe || 'positif', tag: k.tipe || 'positif', teks: k.teks, tgl: k.tgl}, ...list];
          }
        });
      }
    });
  }
  
  const komentarList = document.getElementById('komentar-list');
  if (!komentarList) return;
  
  komentarList.innerHTML = list.map(k => `
    <div class="komentar-item">
      <div class="kom-avatar" style="background:${getGuruColor(k.guru)}">${k.inisial}</div>
      <div class="kom-body">
        <div class="kom-meta">
          <span class="kom-name">${k.guru}</span>
          <span class="kom-tag ${k.tipe}">${k.tag}</span>
          <span class="kom-time">${k.tgl}</span>
        </div>
        <p class="kom-text">${k.teks}</p>
      </div>
    </div>`).join('');
  
  // Render chart komentar
  const chartEl = document.getElementById('komentar-chart');
  if (chartEl) {
    const positif = list.filter(k => k.tipe === 'positif').length;
    const lainnya = list.length - positif;
    
    chartEl.innerHTML = `
      <div class="chart-bar-row"><label>Positif</label><div class="chart-bar-track"><div class="chart-bar-fill" style="width:${positif / (list.length || 1) * 100}%;background:var(--primary)"></div></div><span>${positif}</span></div>
      <div class="chart-bar-row"><label>Lainnya</label><div class="chart-bar-track"><div class="chart-bar-fill" style="width:${lainnya / (list.length || 1) * 100}%;background:var(--warn)"></div></div><span>${lainnya}</span></div>
    `;
  }
}

function getGuruColor(guruNama) {
  const guru = mapelData.find(m => m.guru === guruNama);
  return guru ? guru.color : '#5F7161';
}

/* ════ TABS ════ */
function switchTab(tabId, btn) {
  const parent = btn.closest('.page') || document.body;
  parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  const tab = document.getElementById(tabId);
  if (tab) tab.classList.add('active');
}

/* ════ HELPERS ════ */
function today() { 
  const d = new Date();
  return d.toLocaleDateString('id-ID', {day:'numeric', month:'short', year:'numeric'}); 
}

function previewFileUpload(input) { 
  if (input.files[0]) { 
    const namaFile = document.getElementById('nama-file-jawaban');
    const uploadArea = document.getElementById('upload-area-jawaban');
    
    if (namaFile) namaFile.textContent = '📎 ' + input.files[0].name; 
    if (uploadArea) {
      const h4 = uploadArea.querySelector('h4');
      if (h4) h4.textContent = input.files[0].name; 
    }
  } 
}

function openModal(id) { 
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open'); 
}

function closeModal(id) { 
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open'); 
}

// Close modal when clicking overlay
document.querySelectorAll('.modal-overlay').forEach(ov => {
  ov.addEventListener('click', e => { 
    if (e.target === ov) closeModal(ov.id); 
  });
});

function toggleNotif() { 
  const panel = document.getElementById('notif-panel');
  if (panel) panel.classList.toggle('open'); 
}

function markAllRead() { 
  document.querySelectorAll('.notif-item.unread').forEach(el => el.classList.remove('unread')); 
  const notifDot = document.getElementById('notif-dot');
  if (notifDot) notifDot.style.display = 'none';
  
  pengumumanData.forEach(p => p.isNew = false);
  materiAll.forEach(m => m.isNew = false);
  updateBadges();
}

document.addEventListener('click', e => { 
  const panel = document.getElementById('notif-panel');
  const btn = document.getElementById('notif-btn');
  if (panel && !e.target.closest('#notif-panel') && !e.target.closest('#notif-btn')) {
    panel.classList.remove('open'); 
  }
});

function doLogout() { 
  if (confirm('Yakin ingin logout?')) {
    window.location.href = 'login.html'; 
  }
}

function showToast(msg, type = 'success') { 
  const c = document.getElementById('toast-container'); 
  if (!c) return;
  
  const t = document.createElement('div'); 
  t.className = `toast ${type}`; 
  
  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  if (type === 'warn') icon = '⚠️';
  
  t.innerHTML = `<span>${icon}</span><span>${msg}</span>`; 
  c.appendChild(t); 
  
  t.addEventListener('click', () => removeToast(t)); 
  setTimeout(() => removeToast(t), 4000); 
}

function removeToast(t) { 
  t.classList.add('out'); 
  setTimeout(() => t.remove(), 350); 
}

/* ════ INIT ════ */
document.addEventListener('DOMContentLoaded', () => {
  syncFromAdmin();
  
  // Set user info
  const userAvatar = document.querySelector('.user-avatar');
  const userInfoH4 = document.querySelector('.user-info h4');
  const userInfoP = document.querySelector('.user-info p');
  
  if (userAvatar) userAvatar.textContent = 'AP';
  if (userInfoH4) userInfoH4.textContent = 'Aurellia Putri';
  if (userInfoP) userInfoP.textContent = 'XI RPL 1 — Siswa';
  
  // Update dashboard stats
  const dashTugas = document.getElementById('dash-tugas');
  const dashSelesai = document.getElementById('dash-selesai');
  
  if (dashTugas) dashTugas.textContent = tugasAll.filter(t => t.status === 'belum').length;
  if (dashSelesai) dashSelesai.textContent = tugasAll.filter(t => t.status === 'sudah').length;
  
  updateBadges();
});
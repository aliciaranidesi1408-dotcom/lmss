/* ═══════════════ DATA ═══════════════ */
const guruData = [
  { id:1, nama:'Ibu Sari Rahayu',    inisial:'SR', mapel:'Matematika',               kelas:['XI RPL 1','XI TKJ 1'],   nip:'198801012010012001', email:'sari@sekolah.sch.id',  join:'Agustus 2019',   color:'#5F7161',
    perangkat:[
      {judul:'RPP Limit Fungsi XI',       mapel:'Matematika', tgl:'20 Feb 2026', status:'belum-review'},
      {judul:'Silabus Matematika Genap',  mapel:'Matematika', tgl:'10 Feb 2026', status:'sudah-review'},
      {judul:'Modul Trigonometri',        mapel:'Matematika', tgl:'5 Jan 2026',  status:'sudah-review'},
    ],
    komentar:[{tipe:'positif', teks:'Modul trigonometri sangat terstruktur dan mudah dipahami siswa. Pertahankan!', tgl:'8 Feb 2026'}]
  },
  { id:2, nama:'Pak Andi Wibowo',    inisial:'AN', mapel:'Prod. Kreatif & Kewirausahaan', kelas:['XI RPL 1','XI RPL 2'], nip:'199002152014011002', email:'andi@sekolah.sch.id', join:'Juli 2020', color:'#1a6fa5',
    perangkat:[
      {judul:'Modul Pemrograman Web', mapel:'PKK', tgl:'21 Feb 2026', status:'belum-review'},
      {judul:'RPP Desain UI',         mapel:'PKK', tgl:'12 Feb 2026', status:'perlu-revisi'},
    ],
    komentar:[{tipe:'perbaikan', teks:'RPP Desain UI perlu ditambahkan indikator pencapaian yang lebih spesifik dan terukur.', tgl:'15 Feb 2026'}]
  },
  { id:3, nama:'Bu Rina Hartati',    inisial:'RI', mapel:'Bahasa Indonesia',          kelas:['XI RPL 1','XII RPL 1'], nip:'198705092012012003', email:'rina@sekolah.sch.id',  join:'Januari 2018',   color:'#7d3c98',
    perangkat:[
      {judul:'Silabus Teks Laporan',   mapel:'B. Indonesia', tgl:'18 Feb 2026', status:'sudah-review'},
      {judul:'RPP Teks Eksposisi',     mapel:'B. Indonesia', tgl:'3 Feb 2026',  status:'sudah-review'},
      {judul:'Modul Menulis Ilmiah',   mapel:'B. Indonesia', tgl:'15 Jan 2026', status:'sudah-review'},
      {judul:'Kisi-kisi Ujian Genap',  mapel:'B. Indonesia', tgl:'10 Jan 2026', status:'sudah-review'},
    ],
    komentar:[
      {tipe:'positif',  teks:'Silabus sangat komprehensif dan kisi-kisi sudah sesuai KD yang diajarkan.', tgl:'20 Feb 2026'},
      {tipe:'positif',  teks:'RPP Teks Eksposisi memiliki kegiatan pembelajaran yang variatif. Bagus!',   tgl:'5 Feb 2026'},
    ]
  },
  { id:4, nama:'Pak Dedi Susanto',   inisial:'DS', mapel:'Jaringan Komputer',         kelas:['XI TKJ 1','XII TKJ 1'], nip:'197812202009011004', email:'dedi@sekolah.sch.id',  join:'September 2009', color:'#c0392b',
    perangkat:[
      {judul:'Modul Jaringan Komputer', mapel:'Jarkom', tgl:'19 Feb 2026', status:'belum-review'},
    ],
    komentar:[]
  },
  { id:5, nama:'Bu Maya Putri',      inisial:'MP', mapel:'Bahasa Inggris',            kelas:['XI RPL 1','XI RPL 2','XI TKJ 1'], nip:'199104222016012005', email:'maya@sekolah.sch.id', join:'Maret 2021', color:'#d68910',
    perangkat:[
      {judul:'RPP Speaking XI',              mapel:'B. Inggris', tgl:'17 Feb 2026', status:'sudah-review'},
      {judul:'Modul Reading Comprehension',  mapel:'B. Inggris', tgl:'8 Feb 2026',  status:'sudah-review'},
      {judul:'Silabus B. Inggris Genap',     mapel:'B. Inggris', tgl:'1 Feb 2026',  status:'sudah-review'},
      {judul:'Kisi-kisi Ujian B. Inggris',   mapel:'B. Inggris', tgl:'20 Jan 2026', status:'sudah-review'},
      {judul:'Bank Soal Vocabulary',         mapel:'B. Inggris', tgl:'10 Jan 2026', status:'sudah-review'},
    ],
    komentar:[{tipe:'positif', teks:'Kelengkapan perangkat ajar Bu Maya sangat baik. Bisa jadi contoh guru lain.', tgl:'18 Feb 2026'}]
  },
  { id:6, nama:'Pak Rudi Firmansyah', inisial:'RF', mapel:'Pemrograman Dasar',        kelas:['XI RPL 2','XII RPL 1'], nip:'198908152015011006', email:'rudi@sekolah.sch.id',  join:'Agustus 2020',   color:'#27ae60',
    perangkat:[
      {judul:'RPP Algoritma & Pemrograman', mapel:'Pemrog. Dasar', tgl:'16 Feb 2026', status:'sudah-review'},
      {judul:'Modul Python Dasar',          mapel:'Pemrog. Dasar', tgl:'5 Feb 2026',  status:'belum-review'},
      {judul:'Kisi-kisi Praktikum',         mapel:'Pemrog. Dasar', tgl:'25 Jan 2026', status:'sudah-review'},
    ],
    komentar:[{tipe:'perbaikan', teks:'Modul Python perlu lebih banyak contoh kode yang relevan dengan industri saat ini.', tgl:'10 Feb 2026'}]
  },
];

// Flatten semua komentar untuk halaman evaluasi
let allKomentar = [];

let currentGuruId  = null;
let selectedEvalType = 'positif';

/* ═══════════════ NAVIGATION ═══════════════ */
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const pageEl = document.getElementById('page-' + page);
  if (pageEl) pageEl.classList.add('active');

  const navMap = { dashboard:0, guru:1, perangkat:2, evaluasi:3, monitoring:4, 'profil-guru':1 };
  const navItems = document.querySelectorAll('.nav-item');
  const navIdx   = navMap[page] ?? 0;
  if (navItems[navIdx]) navItems[navIdx].classList.add('active');

  const titleMap = {
    dashboard:    ['Dashboard Kepsek',     'Monitoring & evaluasi guru — SMK Negeri 12'],
    guru:         ['Daftar Guru',          'Lihat profil dan perangkat ajar guru'],
    'profil-guru':['Profil Guru',          'Detail informasi dan perangkat ajar'],
    perangkat:    ['Perangkat Ajar',       'Review dokumen yang diunggah guru'],
    evaluasi:     ['Evaluasi & Komentar',  'Riwayat evaluasi yang telah diberikan'],
    monitoring:   ['Monitoring',           'Pantau kinerja dan aktivitas keseluruhan'],
  };
  const [title, sub] = titleMap[page] || titleMap.dashboard;
  
  const topbarTitle = document.getElementById('topbar-title');
  const topbarSub = document.getElementById('topbar-sub');
  if (topbarTitle) topbarTitle.textContent = title;
  if (topbarSub) topbarSub.textContent = sub;

  if (page === 'guru')      renderGuruGrid();
  if (page === 'perangkat') renderPATable();
  if (page === 'evaluasi')  renderEvaluasiPage();
}

/* ═══════════════ GURU GRID ═══════════════ */
function renderGuruGrid() {
  const guruGrid = document.getElementById('guru-grid');
  if (!guruGrid) return;
  
  guruGrid.innerHTML = guruData.map(g => `
    <div class="guru-card" onclick="showProfilGuru(${g.id})">
      <div class="guru-card-header">
        <div class="guru-avatar" style="background:${g.color}">${g.inisial}</div>
        <div class="guru-card-info">
          <h3>${g.nama}</h3>
          <p>${g.mapel}</p>
        </div>
      </div>
      <div class="guru-card-meta">
        ${g.kelas.map(k=>`<span class="meta-chip"><i class="fa-solid fa-door-open"></i>${k}</span>`).join('')}
        <span class="meta-chip"><i class="fa-solid fa-file"></i>${g.perangkat.length} dok</span>
      </div>
      <div class="guru-card-actions">
        <button class="btn-primary" style="flex:1;justify-content:center;font-size:12px;padding:8px" onclick="event.stopPropagation();showProfilGuru(${g.id})">
          <i class="fa-solid fa-user"></i> Lihat Profil
        </button>
        <button class="btn-secondary" style="font-size:12px;padding:8px 12px" onclick="event.stopPropagation();openKomentarModal('${g.nama}','Umum')">
          <i class="fa-solid fa-comment-dots"></i>
        </button>
      </div>
    </div>
  `).join('');
}

/* ═══════════════ PROFIL GURU ═══════════════ */
function showProfilGuru(id) {
  const g = guruData.find(x => x.id === id);
  if (!g) return;
  currentGuruId = id;

  const profilJudul = document.getElementById('profil-guru-judul');
  const profilSub = document.getElementById('profil-guru-sub');
  const profilAvatar = document.getElementById('profil-avatar');
  const pNama = document.getElementById('p-nama');
  const pMapel = document.getElementById('p-mapel');
  const pNip = document.getElementById('p-nip');
  const pEmail = document.getElementById('p-email');
  const pJoin = document.getElementById('p-join');
  const pKelas = document.getElementById('p-kelas');
  const profilBadgePa = document.getElementById('profil-badge-pa');
  const profilPaTbody = document.getElementById('profil-pa-tbody');
  const profilKomentarList = document.getElementById('profil-komentar-list');

  if (profilJudul) profilJudul.textContent = 'Profil — ' + g.nama;
  if (profilSub) profilSub.textContent = g.mapel;
  if (profilAvatar) {
    profilAvatar.textContent = g.inisial;
    profilAvatar.style.background = g.color;
  }
  if (pNama) pNama.textContent = g.nama;
  if (pMapel) pMapel.textContent = g.mapel;
  if (pNip) pNip.textContent = g.nip;
  if (pEmail) pEmail.textContent = g.email;
  if (pJoin) pJoin.textContent = g.join;
  if (pKelas) {
    pKelas.innerHTML = g.kelas.map(k=>
      `<span class="kelas-chip"><i class="fa-solid fa-door-open"></i>${k}</span>`
    ).join('');
  }

  const belum = g.perangkat.filter(p => p.status === 'belum-review').length;
  if (profilBadgePa) {
    profilBadgePa.textContent = belum + ' Belum Review';
    profilBadgePa.className = 'badge-status ' + (belum > 0 ? 'belum-review' : 'sudah-review');
  }

  if (profilPaTbody) {
    profilPaTbody.innerHTML = g.perangkat.map(p => `
      <tr>
        <td>${p.judul}</td><td>${p.mapel}</td><td>${p.tgl}</td>
        <td><span class="badge-status ${p.status}">${statusLabel(p.status)}</span></td>
        <td><div class="td-actions">
          <button class="btn-icon view"><i class="fa-solid fa-eye"></i></button>
          <button class="btn-icon comment" onclick="openKomentarModal('${g.nama}','${p.judul}')"><i class="fa-solid fa-comment-dots"></i></button>
        </div></td>
      </tr>
    `).join('');
  }

  if (profilKomentarList) {
    profilKomentarList.innerHTML = g.komentar.length
      ? g.komentar.map(k => komentarHTML({...k, guru:g.nama, inisial:g.inisial, color:g.color})).join('')
      : '<p style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px">Belum ada komentar.</p>';
  }

  navigateTo('profil-guru');
}

function openKomentarModalFromProfil() {
  const g = guruData.find(x => x.id === currentGuruId);
  if (g) openKomentarModal(g.nama, 'Umum');
}

/* ═══════════════ PERANGKAT AJAR ═══════════════ */
const allPA = guruData.flatMap(g =>
  g.perangkat.map(p => ({...p, guru:g.nama, inisial:g.inisial, color:g.color, kelasList:g.kelas.join(', '), guruId:g.id}))
);

function renderPATable(textFilter='', statusFilter='') {
  const paTbody = document.getElementById('pa-tbody');
  if (!paTbody) return;
  
  const rows = allPA.filter(p => {
    const t = (p.judul + p.guru).toLowerCase().includes(textFilter.toLowerCase());
    const s = !statusFilter || p.status === statusFilter;
    return t && s;
  });
  
  paTbody.innerHTML = rows.map(p => `
    <tr>
      <td><div class="cell-user"><div class="avatar-sm" style="background:${p.color}">${p.inisial}</div><div><strong>${p.guru}</strong></div></div></td>
      <td>${p.judul}</td><td>${p.mapel}</td><td>${p.kelasList}</td><td>${p.tgl}</td>
      <td><span class="badge-status ${p.status}">${statusLabel(p.status)}</span></td>
      <td><div class="td-actions">
        <button class="btn-icon view"><i class="fa-solid fa-eye"></i></button>
        <button class="btn-icon comment" onclick="openKomentarModal('${p.guru}','${p.judul}')"><i class="fa-solid fa-comment-dots"></i></button>
      </div></td>
    </tr>
  `).join('');
}

function filterPA() {
  const searchPa = document.getElementById('search-pa');
  const filterStatusPa = document.getElementById('filter-status-pa');
  
  renderPATable(
    searchPa ? searchPa.value : '',
    filterStatusPa ? filterStatusPa.value : ''
  );
}

/* ═══════════════ EVALUASI PAGE ═══════════════ */
function renderEvaluasiPage() {
  const allKomentarList = document.getElementById('all-komentar-list');
  const countPositif = document.getElementById('count-positif');
  const countPerbaikan = document.getElementById('count-perbaikan');
  const barPositif = document.getElementById('bar-positif');
  const barPerbaikan = document.getElementById('bar-perbaikan');
  const chartGuruEval = document.getElementById('chart-guru-eval');

  if (allKomentarList) {
    allKomentarList.innerHTML = allKomentar.length
      ? allKomentar.map(k => komentarHTML(k)).join('')
      : '<p style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px">Belum ada komentar.</p>';
  }

  const positif = allKomentar.filter(k=>k.tipe==='positif').length;
  const perbaikan = allKomentar.filter(k=>k.tipe==='perbaikan').length;
  const total = positif + perbaikan || 1;
  
  if (countPositif) countPositif.textContent = positif;
  if (countPerbaikan) countPerbaikan.textContent = perbaikan;
  if (barPositif) barPositif.style.width = (positif/total*100)+'%';
  if (barPerbaikan) barPerbaikan.style.width = (perbaikan/total*100)+'%';

  // chart per guru
  const guruCount = {};
  allKomentar.forEach(k => guruCount[k.guru] = (guruCount[k.guru]||0)+1);
  const sorted = Object.entries(guruCount).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const maxVal = sorted[0]?.[1] || 1;
  
  if (chartGuruEval) {
    chartGuruEval.innerHTML = sorted.map(([nama, cnt]) => `
      <div class="chart-bar-row">
        <label style="width:90px;font-size:11px">${nama.split(' ')[0]+' '+nama.split(' ')[1]}</label>
        <div class="chart-bar-track"><div class="chart-bar-fill" style="width:${cnt/maxVal*100}%"></div></div>
        <span>${cnt}</span>
      </div>
    `).join('');
  }
}

/* ═══════════════ KOMENTAR ═══════════════ */
function komentarHTML(k) {
  return `<div class="komentar-item">
    <div class="kom-avatar" style="background:${k.color}">${k.inisial}</div>
    <div class="kom-body">
      <div class="kom-meta">
        <span class="kom-name">${k.guru}</span>
        <span class="kom-tag ${k.tipe}">${k.tipe==='positif'?'Positif':'Perbaikan'}</span>
        <span class="kom-time">${k.tgl}</span>
      </div>
      <p class="kom-text">${k.teks}</p>
    </div>
  </div>`;
}

function openKomentarModal(guru='', perangkat='') {
  const komGuru = document.getElementById('kom-guru');
  const komPerangkat = document.getElementById('kom-perangkat');
  const komText = document.getElementById('kom-text');
  
  if (komGuru) {
    // Set dropdown ke guru yang sesuai jika ada
    for (let i=0; i<komGuru.options.length; i++) {
      if (komGuru.options[i].text === guru) { 
        komGuru.selectedIndex = i; 
        break; 
      }
    }
  }
  
  if (komPerangkat) komPerangkat.value = perangkat;
  if (komText) komText.value = '';
  
  selectedEvalType = 'positif';
  document.querySelectorAll('.eval-opt').forEach(o=>o.classList.remove('selected'));
  const posOpt = document.querySelector('.eval-opt.pos');
  if (posOpt) posOpt.classList.add('selected');
  
  openModal('modal-komentar');
}

function selectEval(el, type) {
  document.querySelectorAll('.eval-opt').forEach(o=>o.classList.remove('selected'));
  el.classList.add('selected');
  selectedEvalType = type;
}

function submitKomentar() {
  const komGuru = document.getElementById('kom-guru');
  const komText = document.getElementById('kom-text');
  
  const guruNama = komGuru ? komGuru.value : '';
  const teks = komText ? komText.value.trim() : '';
  
  if (!guruNama) { showToast('Pilih guru terlebih dahulu!', 'info'); return; }
  if (!teks)     { showToast('Tulis komentar terlebih dahulu!', 'info'); return; }

  const g = guruData.find(x => x.nama === guruNama);
  const tgl = new Date().toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'});
  const newK = { tipe: selectedEvalType, teks, tgl };
  if (g) g.komentar.unshift(newK);

  allKomentar.unshift({
    ...newK, guru: guruNama,
    inisial: g?.inisial || guruNama.substring(0,2).toUpperCase(),
    color:   g?.color   || '#5F7161'
  });

  // Update counter
  const statKomentar = document.getElementById('stat-komentar');
  if (statKomentar) statKomentar.textContent = allKomentar.length;

  closeModal('modal-komentar');
  showToast('Evaluasi berhasil dikirim ke ' + guruNama + '!', 'success');

  // Refresh profil komentar jika sedang terbuka
  if (currentGuruId && g && g.id === currentGuruId) {
    const profilKomentarList = document.getElementById('profil-komentar-list');
    if (profilKomentarList) {
      profilKomentarList.innerHTML =
        g.komentar.map(k => komentarHTML({...k, guru:g.nama, inisial:g.inisial, color:g.color})).join('');
    }
  }
}

/* ═══════════════ HELPERS ═══════════════ */
function statusLabel(s) {
  return s==='belum-review'?'Belum Review':s==='sudah-review'?'Sudah Review':'Perlu Revisi';
}

function openModal(id)  { 
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open'); 
}

function closeModal(id) { 
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open'); 
}

// Event listeners untuk modal
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.modal-overlay').forEach(ov => {
    ov.addEventListener('click', e => { 
      if(e.target === ov) closeModal(ov.id); 
    });
  });
});

function toggleNotif() { 
  const notifPanel = document.getElementById('notif-panel');
  if (notifPanel) notifPanel.classList.toggle('open'); 
}

function markAllRead() {
  document.querySelectorAll('.notif-item.unread').forEach(el => el.classList.remove('unread'));
  const notifDot = document.querySelector('.notif-dot');
  if (notifDot) notifDot.remove();
}

// Close notification panel when clicking outside
document.addEventListener('click', e => {
  const notifPanel = document.getElementById('notif-panel');
  const notifBtn = document.getElementById('notif-btn');
  
  if (notifPanel && !e.target.closest('#notif-panel') && !e.target.closest('#notif-btn')) {
    notifPanel.classList.remove('open');
  }
});

function doLogout() {
  // Arahkan ke halaman login kamu
  window.location.href = 'login.html';
}

function showToast(msg, type='success') {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;
  
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${type==='success'?'✅':'ℹ️'}</span><span>${msg}</span>`;
  toastContainer.appendChild(t);
  
  t.addEventListener('click', () => removeToast(t));
  setTimeout(() => removeToast(t), 4000);
}

function removeToast(t) { 
  t.classList.add('out'); 
  setTimeout(() => {
    if (t.parentNode) t.remove();
  }, 350); 
}

// Inisialisasi semua data dan render setelah DOM siap
document.addEventListener('DOMContentLoaded', function() {
  // Inisialisasi allKomentar
  allKomentar = guruData.flatMap(g =>
    g.komentar.map(k => ({...k, guru: g.nama, inisial: g.inisial, color: g.color}))
  ).sort((a,b) => new Date(b.tgl) - new Date(a.tgl));
  
  // Render halaman awal
  renderGuruGrid();
  renderPATable();
  renderEvaluasiPage();
  
  // Set stat counter
  const statKomentar = document.getElementById('stat-komentar');
  if (statKomentar) statKomentar.textContent = allKomentar.length;
});
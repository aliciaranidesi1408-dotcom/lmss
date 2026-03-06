'use strict';
/* ════════════════════════════════════════════════════════════
   dashboard-kepsek.js
   Data guru dan mapel sesuai dengan yang diminta
════════════════════════════════════════════════════════════ */

/* ════ HELPER: baca SharedStore ════ */
function getStoreGuru() {
  if (window.SharedStore && window.SharedStore.guru && window.SharedStore.guru.length > 0) {
    return window.SharedStore.guru;
  }
  return null;
}

/* ════════════════════════════════════════
   DATA GURU (sesuai permintaan)
════════════════════════════════════════ */
const guruDataLokal = [
  { 
    id:1, nama:'Melyanah', inisial:'ML', mapel:'Pemrograman Web', 
    kelas:['XI RPL 1', 'XI RPL 2'], nip:'198501012014012001', 
    email:'melyanah@smkn12.sch.id', join:'Agustus 2019', color:'#16a34a',
    perangkat:[
      {judul:'RPP Pemrograman Web', mapel:'Pemrograman Web', tgl:'20 Feb 2026', status:'belum-review'},
      {judul:'Modul HTML & CSS', mapel:'Pemrograman Web', tgl:'10 Feb 2026', status:'sudah-review'},
    ],
    komentar:[]
  },
  { 
    id:2, nama:'Irwan Saputra', inisial:'IS', mapel:'Basis Data', 
    kelas:['XI RPL 1', 'XI RPL 2'], nip:'199002052014011002', 
    email:'irwan@smkn12.sch.id', join:'Juli 2020', color:'#0ea5e9',
    perangkat:[
      {judul:'Modul Basis Data', mapel:'Basis Data', tgl:'21 Feb 2026', status:'belum-review'},
      {judul:'RPP SQL Dasar', mapel:'Basis Data', tgl:'12 Feb 2026', status:'perlu-revisi'},
    ],
    komentar:[]
  },
  { 
    id:3, nama:'Novi Widia Ningsih', inisial:'NW', mapel:'PBTGM', 
    kelas:['XI RPL 1', 'XI RPL 2'], nip:'198811152012012003', 
    email:'novi@smkn12.sch.id', join:'Januari 2018', color:'#f59e0b',
    perangkat:[
      {judul:'RPP PBTGM', mapel:'PBTGM', tgl:'18 Feb 2026', status:'sudah-review'},
      {judul:'Modul Game Mobile', mapel:'PBTGM', tgl:'3 Feb 2026', status:'sudah-review'},
    ],
    komentar:[]
  },
  { 
    id:4, nama:'Endang', inisial:'EN', mapel:'MTK', 
    kelas:['X RPL', 'XI RPL 1', 'XI RPL 2', 'XII RPL'], nip:'198703202009011004', 
    email:'endang@smkn12.sch.id', join:'September 2009', color:'#5F7161',
    perangkat:[
      {judul:'RPP Limit Fungsi', mapel:'MTK', tgl:'19 Feb 2026', status:'belum-review'},
      {judul:'Modul Trigonometri', mapel:'MTK', tgl:'5 Feb 2026', status:'sudah-review'},
      {judul:'Silabus Matematika', mapel:'MTK', tgl:'20 Jan 2026', status:'sudah-review'},
    ],
    komentar:[]
  },
  { 
    id:5, nama:'Uday Zakaria', inisial:'UZ', mapel:'Bahasa Inggris', 
    kelas:['X RPL', 'XI RPL 1', 'XI RPL 2', 'XII RPL'], nip:'199002152016012005', 
    email:'uday@smkn12.sch.id', join:'Maret 2021', color:'#1a6fa5',
    perangkat:[
      {judul:'RPP Speaking XI', mapel:'Bahasa Inggris', tgl:'17 Feb 2026', status:'sudah-review'},
      {judul:'Modul Reading', mapel:'Bahasa Inggris', tgl:'8 Feb 2026', status:'sudah-review'},
    ],
    komentar:[]
  },
  { 
    id:6, nama:'Gita Riyanti', inisial:'GR', mapel:'PPKN', 
    kelas:['X RPL', 'XI RPL 1', 'XI RPL 2', 'XII RPL'], nip:'198705092015011006', 
    email:'gita@smkn12.sch.id', join:'Agustus 2020', color:'#7d3c98',
    perangkat:[
      {judul:'RPP Pancasila', mapel:'PPKN', tgl:'16 Feb 2026', status:'sudah-review'},
      {judul:'Modul Kewarganegaraan', mapel:'PPKN', tgl:'5 Feb 2026', status:'belum-review'},
    ],
    komentar:[]
  },
  { 
    id:7, nama:'Eni Lisnawati', inisial:'EL', mapel:'Sejarah', 
    kelas:['X RPL', 'XI RPL 1', 'XI RPL 2', 'XII RPL'], nip:'197812202016012007', 
    email:'eni@smkn12.sch.id', join:'Juni 2016', color:'#c0392b',
    perangkat:[
      {judul:'RPP Sejarah Indonesia', mapel:'Sejarah', tgl:'15 Feb 2026', status:'belum-review'},
    ],
    komentar:[]
  },
  { 
    id:8, nama:'Yenny Andrini', inisial:'YA', mapel:'PKWU', 
    kelas:['XI RPL 1', 'XI RPL 2', 'XII RPL'], nip:'199104222017012008', 
    email:'yenny@smkn12.sch.id', join:'Februari 2017', color:'#d68910',
    perangkat:[
      {judul:'RPP PKWU', mapel:'PKWU', tgl:'14 Feb 2026', status:'sudah-review'},
      {judul:'Modul Kewirausahaan', mapel:'PKWU', tgl:'2 Feb 2026', status:'sudah-review'},
    ],
    komentar:[]
  },
  { 
    id:9, nama:'Miki Tanuwijaya', inisial:'MT', mapel:'Bahasa Jepang', 
    kelas:['XI RPL 1', 'XI RPL 2'], nip:'198908152018011009', 
    email:'miki@smkn12.sch.id', join:'Januari 2018', color:'#27ae60',
    perangkat:[
      {judul:'RPP Bahasa Jepang', mapel:'Bahasa Jepang', tgl:'13 Feb 2026', status:'belum-review'},
    ],
    komentar:[]
  },
  { 
    id:10, nama:'Sinung Kalimo N', inisial:'SK', mapel:'Pemrograman Perangkat Lunak', 
    kelas:['XI RPL 1', 'XI RPL 2', 'XII RPL'], nip:'198512102019011010', 
    email:'sinung@smkn12.sch.id', join:'Maret 2019', color:'#8e44ad',
    perangkat:[
      {judul:'RPP Pemrograman Desktop', mapel:'Pemrograman Perangkat Lunak', tgl:'12 Feb 2026', status:'sudah-review'},
      {judul:'Modul Java', mapel:'Pemrograman Perangkat Lunak', tgl:'1 Feb 2026', status:'sudah-review'},
      {judul:'Kisi-kisi Ujian', mapel:'Pemrograman Perangkat Lunak', tgl:'15 Jan 2026', status:'sudah-review'},
    ],
    komentar:[]
  },
];

/* ════════════════════════════════════════════════
   MERGE SharedStore guru ke guruData tampilan
════════════════════════════════════════════════ */
function buildGuruData() {
  const shared = getStoreGuru();
  if (!shared) return guruDataLokal;

  return shared.map(sg => {
    const lokal = guruDataLokal.find(gl => gl.email === sg.email || gl.id === sg.id);
    return {
      id:        sg.id,
      nama:      sg.nama,
      inisial:   sg.initials || (sg.nama.trim().split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase()),
      mapel:     sg.mapel,
      kelas:     sg.kelas ? (Array.isArray(sg.kelas) ? sg.kelas : [sg.kelas]) : (lokal?.kelas || []),
      nip:       sg.nip || lokal?.nip || '—',
      email:     sg.email,
      join:      sg.join || lokal?.join || '—',
      color:     sg.bg || lokal?.color || '#5F7161',
      status:    sg.status || 'Aktif',
      perangkat: lokal?.perangkat || sg.perangkat || [],
      komentar:  lokal?.komentar  || sg.komentar  || [],
    };
  });
}

function getGuruData() { return buildGuruData(); }

let allKomentar = [];
let currentGuruId    = null;
let selectedEvalType = 'positif';

/* ════ NAVIGATION ════ */
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
    dashboard:     ['Dashboard Kepsek',    'Monitoring & evaluasi guru — SMK Negeri 12'],
    guru:          ['Daftar Guru',         'Lihat profil dan perangkat ajar guru'],
    'profil-guru': ['Profil Guru',         'Detail informasi dan perangkat ajar'],
    perangkat:     ['Perangkat Ajar',      'Review dokumen yang diunggah guru'],
    evaluasi:      ['Evaluasi & Komentar', 'Riwayat evaluasi yang telah diberikan'],
    monitoring:    ['Monitoring',          'Pantau kinerja dan aktivitas keseluruhan'],
  };
  const [title, sub] = titleMap[page] || titleMap.dashboard;
  const topbarTitle = document.getElementById('topbar-title');
  const topbarSub   = document.getElementById('topbar-sub');
  if (topbarTitle) topbarTitle.textContent = title;
  if (topbarSub)   topbarSub.textContent   = sub;

  if (page === 'guru')      renderGuruGrid();
  if (page === 'perangkat') renderPATable();
  if (page === 'evaluasi')  renderEvaluasiPage();
  if (page === 'dashboard') renderDashboard();
  if (page === 'monitoring') renderMonitoring();
}

/* ════ DASHBOARD ════ */
function renderDashboard() {
  renderDashboardPA();
  renderDashboardActivity();
  renderDashboardProgress();
}

function renderDashboardPA() {
  const tbody = document.getElementById('dashboard-pa-tbody');
  if (!tbody) return;
  const allPA = getAllPA().slice(0, 3);
  tbody.innerHTML = allPA.map(p => `
    <tr>
      <td><div class="cell-user"><div class="avatar-sm" style="background:${p.color}">${p.inisial}</div><div><strong>${p.guru}</strong></div></div></td>
      <td>${p.judul}</td><td>${p.mapel||'—'}</td>
      <td><span class="badge-status ${p.status}">${statusLabel(p.status)}</span></td>
      <td><div class="td-actions">
        <button class="btn-icon view"><i class="fa-solid fa-eye"></i></button>
        <button class="btn-icon comment" onclick="openKomentarModal('${p.guru}','${p.judul}')"><i class="fa-solid fa-comment-dots"></i></button>
      </div></td>
    </tr>
  `).join('');
}

function renderDashboardActivity() {
  const actList = document.getElementById('dashboard-activity');
  if (!actList) return;
  
  const activities = [
    { icon: 'upload', text: 'Melyanah mengunggah RPP Pemrograman Web', time: '10 menit lalu' },
    { icon: 'comment', text: 'Anda memberi komentar ke Irwan Saputra', time: '1 jam lalu' },
    { icon: 'review', text: 'Review selesai - Modul Endang', time: '2 jam lalu' },
    { icon: 'upload', text: 'Sinung Kalimo mengunggah Modul Java', time: '5 jam lalu' },
  ];
  
  actList.innerHTML = activities.map(a => `
    <div class="activity-item">
      <div class="act-icon ${a.icon}"><i class="fa-solid fa-${a.icon==='upload'?'upload':a.icon==='comment'?'comment-dots':'check-circle'}"></i></div>
      <div class="act-body"><h4>${a.text}</h4><p>${a.time}</p></div>
    </div>
  `).join('');
}

function renderDashboardProgress() {
  const progress = document.getElementById('dashboard-progress');
  if (!progress) return;
  const guruData = getGuruData();
  
  progress.innerHTML = guruData.slice(0,5).map(g => {
    const total = g.perangkat?.length || 0;
    const reviewed = g.perangkat?.filter(p => p.status !== 'belum-review').length || 0;
    const persen = total ? (reviewed/total*100) : 0;
    return `
      <div class="chart-bar-row"><label>${g.nama.split(' ')[0]}</label>
        <div class="chart-bar-track"><div class="chart-bar-fill" style="width:${persen}%"></div></div>
        <span>${reviewed}/${total}</span>
      </div>
    `;
  }).join('');
}

/* ════ GURU GRID ════ */
function renderGuruGrid() {
  const guruGrid = document.getElementById('guru-grid');
  if (!guruGrid) return;
  const guruData = getGuruData();

  guruGrid.innerHTML = guruData.map(g => `
    <div class="guru-card" onclick="showProfilGuru(${g.id})">
      <div class="guru-card-header">
        <div class="guru-avatar" style="background:${g.color}">${g.inisial}</div>
        <div class="guru-card-info">
          <h3>${g.nama}</h3>
          <p>${g.mapel}</p>
          <span class="badge-status ${g.status==='Aktif'?'aktif':'nonaktif'}" style="font-size:10px;padding:2px 8px">${g.status||'Aktif'}</span>
        </div>
      </div>
      <div class="guru-card-meta">
        ${(Array.isArray(g.kelas)?g.kelas:[g.kelas]).filter(Boolean).map(k=>`<span class="meta-chip"><i class="fa-solid fa-door-open"></i>${k}</span>`).join('')}
        <span class="meta-chip"><i class="fa-solid fa-file"></i>${(g.perangkat||[]).length} dok</span>
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

  const statGuru = document.getElementById('stat-guru');
  if (statGuru) statGuru.textContent = guruData.length;
}

/* ════ PROFIL GURU ════ */
function showProfilGuru(id) {
  const guruData = getGuruData();
  const g = guruData.find(x => x.id === id);
  if (!g) return;
  currentGuruId = id;

  const set = (elId, val) => { const el = document.getElementById(elId); if(el) el.textContent = val; };
  const profilJudul   = document.getElementById('profil-guru-judul');
  const profilSub     = document.getElementById('profil-guru-sub');
  const profilAvatar  = document.getElementById('profil-avatar');
  const pKelas        = document.getElementById('p-kelas');
  const profilBadgePa = document.getElementById('profil-badge-pa');
  const profilPaTbody = document.getElementById('profil-pa-tbody');
  const profilKomList = document.getElementById('profil-komentar-list');

  if (profilJudul)  profilJudul.textContent  = 'Profil — ' + g.nama;
  if (profilSub)    profilSub.textContent    = g.mapel;
  if (profilAvatar) { profilAvatar.textContent = g.inisial; profilAvatar.style.background = g.color; }
  set('p-nama',  g.nama);
  set('p-mapel', g.mapel);
  set('p-nip',   g.nip);
  set('p-email', g.email);
  set('p-join',  g.join);

  if (pKelas) {
    const kList = Array.isArray(g.kelas) ? g.kelas : (g.kelas ? [g.kelas] : []);
    pKelas.innerHTML = kList.filter(Boolean).map(k=>
      `<span class="kelas-chip"><i class="fa-solid fa-door-open"></i>${k}</span>`
    ).join('');
  }

  const belum = (g.perangkat||[]).filter(p => p.status === 'belum-review').length;
  if (profilBadgePa) {
    profilBadgePa.textContent = belum + ' Belum Review';
    profilBadgePa.className   = 'badge-status ' + (belum > 0 ? 'belum-review' : 'sudah-review');
  }

  if (profilPaTbody) {
    profilPaTbody.innerHTML = (g.perangkat||[]).map(p => `
      <tr>
        <td>${p.judul}</td><td>${p.mapel||'—'}</td><td>${p.tgl}</td>
        <td><span class="badge-status ${p.status}">${statusLabel(p.status)}</span></td>
        <td><div class="td-actions">
          <button class="btn-icon view"><i class="fa-solid fa-eye"></i></button>
          <button class="btn-icon comment" onclick="openKomentarModal('${g.nama}','${p.judul}')"><i class="fa-solid fa-comment-dots"></i></button>
        </div></td>
      </tr>
    `).join('') || '<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:20px">Belum ada perangkat ajar.</td></tr>';
  }

  if (profilKomList) {
    profilKomList.innerHTML = (g.komentar||[]).length
      ? (g.komentar||[]).map(k => komentarHTML({...k, guru:g.nama, inisial:g.inisial, color:g.color})).join('')
      : '<p style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px">Belum ada komentar.</p>';
  }

  navigateTo('profil-guru');
}

function openKomentarModalFromProfil() {
  const guruData = getGuruData();
  const g = guruData.find(x => x.id === currentGuruId);
  if (g) openKomentarModal(g.nama, 'Umum');
}

/* ════ PERANGKAT AJAR ════ */
function getAllPA() {
  return getGuruData().flatMap(g =>
    (g.perangkat||[]).map(p => ({...p, guru:g.nama, inisial:g.inisial, color:g.color,
      kelasList: (Array.isArray(g.kelas)?g.kelas:[g.kelas||'']).filter(Boolean).join(', '),
      guruId:g.id}))
  );
}

function renderPATable(textFilter='', statusFilter='') {
  const paTbody = document.getElementById('pa-tbody');
  if (!paTbody) return;
  const allPA = getAllPA();
  const rows = allPA.filter(p => {
    const t = (p.judul + p.guru).toLowerCase().includes(textFilter.toLowerCase());
    const s = !statusFilter || p.status === statusFilter;
    return t && s;
  });
  paTbody.innerHTML = rows.map(p => `
    <tr>
      <td><div class="cell-user"><div class="avatar-sm" style="background:${p.color}">${p.inisial}</div><div><strong>${p.guru}</strong></div></div></td>
      <td>${p.judul}</td><td>${p.mapel||'—'}</td><td>${p.kelasList||'—'}</td><td>${p.tgl}</td>
      <td><span class="badge-status ${p.status}">${statusLabel(p.status)}</span></td>
      <td><div class="td-actions">
        <button class="btn-icon view"><i class="fa-solid fa-eye"></i></button>
        <button class="btn-icon comment" onclick="openKomentarModal('${p.guru}','${p.judul}')"><i class="fa-solid fa-comment-dots"></i></button>
      </div></td>
    </tr>
  `).join('') || `<tr><td colspan="7" style="text-align:center;padding:28px;color:var(--text-muted)">Belum ada perangkat ajar.</td></tr>`;
}

function filterPA() {
  renderPATable(
    document.getElementById('search-pa')?.value || '',
    document.getElementById('filter-status-pa')?.value || ''
  );
}

/* ════ EVALUASI PAGE ════ */
function renderEvaluasiPage() {
  const allKomentarList = document.getElementById('all-komentar-list');
  const countPositif    = document.getElementById('count-positif');
  const countPerbaikan  = document.getElementById('count-perbaikan');
  const barPositif      = document.getElementById('bar-positif');
  const barPerbaikan    = document.getElementById('bar-perbaikan');
  const chartGuruEval   = document.getElementById('chart-guru-eval');

  if (allKomentarList) {
    allKomentarList.innerHTML = allKomentar.length
      ? allKomentar.map(k => komentarHTML(k)).join('')
      : '<p style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px">Belum ada komentar.</p>';
  }

  const positif   = allKomentar.filter(k=>k.tipe==='positif').length;
  const perbaikan = allKomentar.filter(k=>k.tipe==='perbaikan').length;
  const total     = positif + perbaikan || 1;
  if (countPositif)  countPositif.textContent  = positif;
  if (countPerbaikan)countPerbaikan.textContent = perbaikan;
  if (barPositif)    barPositif.style.width    = (positif/total*100)+'%';
  if (barPerbaikan)  barPerbaikan.style.width  = (perbaikan/total*100)+'%';

  const guruCount = {};
  allKomentar.forEach(k => guruCount[k.guru] = (guruCount[k.guru]||0)+1);
  const sorted = Object.entries(guruCount).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const maxVal = sorted[0]?.[1] || 1;
  if (chartGuruEval) {
    chartGuruEval.innerHTML = sorted.map(([nama, cnt]) => `
      <div class="chart-bar-row">
        <label style="width:90px;font-size:11px">${nama.split(' ').slice(0,2).join(' ')}</label>
        <div class="chart-bar-track"><div class="chart-bar-fill" style="width:${cnt/maxVal*100}%"></div></div>
        <span>${cnt}</span>
      </div>
    `).join('');
  }
}

/* ════ MONITORING ════ */
function renderMonitoring() {
  renderMonitoringPerangkat();
  renderMonitoringReview();
  renderMonitoringKelas();
  renderMonitoringNilai();
}

function renderMonitoringPerangkat() {
  const el = document.getElementById('monitoring-perangkat');
  if (!el) return;
  const guruData = getGuruData();
  
  el.innerHTML = guruData.map(g => {
    const total = g.perangkat?.length || 0;
    const reviewed = g.perangkat?.filter(p => p.status !== 'belum-review').length || 0;
    const persen = total ? (reviewed/total*100) : 0;
    const color = persen >= 70 ? 'green' : persen >= 40 ? 'blue' : 'orange';
    return `
      <div class="progress-item">
        <div class="progress-label"><span>${g.nama}</span><em>${reviewed}/${total}</em></div>
        <div class="progress-track"><div class="progress-fill ${color}" style="width:${persen}%"></div></div>
      </div>
    `;
  }).join('');
}

function renderMonitoringReview() {
  const el = document.getElementById('monitoring-review');
  if (!el) return;
  const allPA = getAllPA();
  const sudah = allPA.filter(p => p.status === 'sudah-review').length;
  const belum = allPA.filter(p => p.status === 'belum-review').length;
  const revisi = allPA.filter(p => p.status === 'perlu-revisi').length;
  const total = allPA.length || 1;
  
  el.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;text-align:center;padding:8px 0 16px">
      <div><div style="font-size:28px;font-weight:800;color:var(--primary)">${sudah}</div><div style="font-size:11px;color:var(--text-muted)">Sudah Review</div></div>
      <div><div style="font-size:28px;font-weight:800;color:var(--warn)">${belum}</div><div style="font-size:11px;color:var(--text-muted)">Belum Review</div></div>
      <div><div style="font-size:28px;font-weight:800;color:var(--danger)">${revisi}</div><div style="font-size:11px;color:var(--text-muted)">Perlu Revisi</div></div>
    </div>
    <div class="progress-item">
      <div class="progress-label"><span>Progres Review</span><em>${sudah+revisi}/${total}</em></div>
      <div class="progress-track"><div class="progress-fill green" style="width:${(sudah+revisi)/total*100}%"></div></div>
    </div>
  `;
}

function renderMonitoringKelas() {
  const el = document.getElementById('monitoring-kelas');
  if (!el) return;
  const kelas = ['X RPL', 'XI RPL 1', 'XI RPL 2', 'XII RPL'];
  const aktivitas = [90, 85, 80, 75];
  
  el.innerHTML = kelas.map((k, i) => `
    <div class="progress-item">
      <div class="progress-label"><span>${k}</span><em>Aktif</em></div>
      <div class="progress-track"><div class="progress-fill green" style="width:${aktivitas[i]}%"></div></div>
    </div>
  `).join('');
}

function renderMonitoringNilai() {
  const el = document.getElementById('monitoring-nilai');
  if (!el) return;
  
  el.innerHTML = `
    <div class="progress-item">
      <div class="progress-label"><span>Rata-rata Nilai</span><em>82.4</em></div>
      <div class="progress-track"><div class="progress-fill green" style="width:82%"></div></div>
    </div>
    <div class="progress-item">
      <div class="progress-label"><span>Tugas Dikumpul</span><em>89%</em></div>
      <div class="progress-track"><div class="progress-fill blue" style="width:89%"></div></div>
    </div>
    <div class="progress-item">
      <div class="progress-label"><span>Tepat Waktu</span><em>74%</em></div>
      <div class="progress-track"><div class="progress-fill orange" style="width:74%"></div></div>
    </div>
  `;
}

/* ════ KOMENTAR ════ */
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
  const komGuru     = document.getElementById('kom-guru');
  const komPerangkat= document.getElementById('kom-perangkat');
  const komText     = document.getElementById('kom-text');
  const guruData    = getGuruData();

  if (komGuru) {
    komGuru.innerHTML = '<option value="">— Pilih Guru —</option>' + 
      guruData.map(g => `<option ${g.nama === guru ? 'selected' : ''}>${g.nama}</option>`).join('');
  }
  if (komPerangkat) komPerangkat.value = perangkat;
  if (komText)      komText.value      = '';

  selectedEvalType = 'positif';
  document.querySelectorAll('.eval-opt').forEach(o=>o.classList.remove('selected'));
  document.querySelector('.eval-opt.pos')?.classList.add('selected');
  openModal('modal-komentar');
}

function selectEval(el, type) {
  document.querySelectorAll('.eval-opt').forEach(o=>o.classList.remove('selected'));
  el.classList.add('selected');
  selectedEvalType = type;
}

function submitKomentar() {
  const komGuru  = document.getElementById('kom-guru');
  const komText  = document.getElementById('kom-text');
  const guruData = getGuruData();

  const guruNama = komGuru ? komGuru.value : '';
  const teks     = komText ? komText.value.trim() : '';
  if (!guruNama) { showToast('Pilih guru terlebih dahulu!', 'info'); return; }
  if (!teks)     { showToast('Tulis komentar terlebih dahulu!', 'info'); return; }

  const g   = guruData.find(x => x.nama === guruNama);
  const tgl = new Date().toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'});
  const newK = { tipe: selectedEvalType, teks, tgl };

  if (g) {
    if (!g.komentar) g.komentar = [];
    g.komentar.unshift(newK);

    if (window.SharedStore && window.SharedStore.guru) {
      const sharedGuru = window.SharedStore.guru.find(sg => sg.email === g.email || sg.id === g.id);
      if (sharedGuru) {
        if (!sharedGuru.komentar) sharedGuru.komentar = [];
        sharedGuru.komentar.unshift(newK);
      }
    }
  }

  allKomentar.unshift({
    ...newK, guru: guruNama,
    inisial: g?.inisial || guruNama.substring(0,2).toUpperCase(),
    color:   g?.color   || '#5F7161',
  });

  const statKomentar = document.getElementById('stat-komentar');
  if (statKomentar) statKomentar.textContent = allKomentar.length;

  closeModal('modal-komentar');
  showToast('Evaluasi berhasil dikirim ke ' + guruNama + '!', 'success');

  if (currentGuruId && g && g.id === currentGuruId) {
    const profilKomList = document.getElementById('profil-komentar-list');
    if (profilKomList) {
      profilKomList.innerHTML = (g.komentar||[])
        .map(k => komentarHTML({...k, guru:g.nama, inisial:g.inisial, color:g.color})).join('');
    }
  }
}

/* ════ HELPERS ════ */
function statusLabel(s) {
  return s==='belum-review'?'Belum Review':s==='sudah-review'?'Sudah Review':'Perlu Revisi';
}
function openModal(id)  { const m=document.getElementById(id); if(m) m.classList.add('open'); }
function closeModal(id) { const m=document.getElementById(id); if(m) m.classList.remove('open'); }
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.modal-overlay').forEach(ov => {
    ov.addEventListener('click', e => { if(e.target===ov) closeModal(ov.id); });
  });
});
function toggleNotif() { document.getElementById('notif-panel')?.classList.toggle('open'); }
function markAllRead() {
  document.querySelectorAll('.notif-item.unread').forEach(el=>el.classList.remove('unread'));
  document.querySelector('.notif-dot')?.remove();
}
document.addEventListener('click', e => {
  const panel = document.getElementById('notif-panel');
  if (panel && !e.target.closest('#notif-panel') && !e.target.closest('#notif-btn'))
    panel.classList.remove('open');
});
function doLogout() { window.location.href = 'login.html'; }
function showToast(msg, type='success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${type==='success'?'✅':'ℹ️'}</span><span>${msg}</span>`;
  container.appendChild(t);
  t.addEventListener('click', () => removeToast(t));
  setTimeout(() => removeToast(t), 4000);
}
function removeToast(t) { t.classList.add('out'); setTimeout(()=>{ if(t.parentNode) t.remove(); }, 350); }

/* ════ INIT ════ */
document.addEventListener('DOMContentLoaded', function() {
  const guruData = getGuruData();

  allKomentar = guruData.flatMap(g =>
    (g.komentar||[]).map(k => ({...k, guru:g.nama, inisial:g.inisial, color:g.color}))
  ).sort((a,b) => new Date(b.tgl) - new Date(a.tgl));

  renderGuruGrid();
  renderPATable();
  renderEvaluasiPage();
  renderDashboard();
  renderMonitoring();

  const statKomentar = document.getElementById('stat-komentar');
  if (statKomentar) statKomentar.textContent = allKomentar.length;

  const statGuru = document.getElementById('stat-guru');
  if (statGuru) statGuru.textContent = guruData.length;
});
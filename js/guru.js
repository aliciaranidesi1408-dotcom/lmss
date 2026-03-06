'use strict';
/* ════════════════════════════════════════════════════════════
   dashboard-guru.js
   Membaca data dari window.SharedStore (diisi oleh admin.js).
   Jika SharedStore belum ada (buka langsung), fallback ke data lokal.
════════════════════════════════════════════════════════════ */

/* ── HELPER: ambil SharedStore jika ada ── */
function getSharedGuru() {
  // Cari guru yang login (irwan@gmail.com)
  const store = window.SharedStore;
  if (store && store.guru) {
    return store.guru.find(g => g.email === 'irwan@gmail.com') || null;
  }
  return null;
}
function getSharedSiswa(kelas) {
  const store = window.SharedStore;
  if (store && store.siswa) {
    return store.siswa.filter(s => s.kelas === kelas);
  }
  return [];
}

/* ════ DATA LOKAL (fallback jika tidak ada SharedStore) ════ */
const GURU = { nama:'Irwan Saputra', inisial:'IW', mapel:'Basis Data', email:'irwan@gmail.com' };

const siswaData = {
  'X RPL': [
    {id:1,nama:'Andi Pratama',        nis:'2401001',warna:'#5F7161',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:85,komentar:''},
    {id:2,nama:'Budi Santoso',        nis:'2401002',warna:'#1a6fa5',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:80,komentar:''},
    {id:3,nama:'Citra Lestari',       nis:'2401003',warna:'#7d3c98',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:90,komentar:''},
    {id:4,nama:'Dewi Sartika',        nis:'2401004',warna:'#d68910',bukaMateri:'belum',kumpulTugas:'belum',nilai:null,komentar:''},
    {id:5,nama:'Eko Prasetyo',        nis:'2401005',warna:'#c0392b',bukaMateri:'belum',kumpulTugas:'belum',nilai:null,komentar:''},
  ],
  'XI RPL 1': [
    {id:6,nama:'Desi Alicia Rani',     nis:'2301001',warna:'#5F7161',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:88,komentar:''},
    {id:7,nama:'Callysta Aurelia',     nis:'2301002',warna:'#1a6fa5',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:92,komentar:''},
    {id:8,nama:'Aurellia Putri',       nis:'2301003',warna:'#7d3c98',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:87,komentar:''},
    {id:9,nama:'Fadlun Shahab',        nis:'2301004',warna:'#d68910',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:85,komentar:''},
    {id:10,nama:'Citra Damayanti',     nis:'2301005',warna:'#c0392b',bukaMateri:'belum',kumpulTugas:'belum',nilai:null,komentar:''},
  ],
  'XI RPL 2': [
    {id:11,nama:'Aisy Rahmah',         nis:'2302001',warna:'#27ae60',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:90,komentar:''},
    {id:12,nama:'Alya Lukita Sari',    nis:'2302002',warna:'#5F7161',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:88,komentar:''},
    {id:13,nama:'Alyfia Nuraini',      nis:'2302003',warna:'#1a6fa5',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:86,komentar:''},
    {id:14,nama:'Muhammad Rizki',      nis:'2302004',warna:'#7d3c98',bukaMateri:'belum',kumpulTugas:'belum',nilai:null,komentar:''},
  ],
  'XII RPL': [
    {id:15,nama:'Indah Permata',       nis:'2203001',warna:'#7d3c98',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:95,komentar:''},
    {id:16,nama:'Joko Santoso',        nis:'2203002',warna:'#d68910',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:82,komentar:''},
    {id:17,nama:'Kartika Dewi',        nis:'2203003',warna:'#c0392b',bukaMateri:'belum',kumpulTugas:'belum',nilai:null,komentar:''},
    {id:18,nama:'Lukman Hakim',        nis:'2203004',warna:'#27ae60',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:88,komentar:''},
  ],
};

/* ════════════════════════════════════════════
   SINKRONISASI: Merge siswa dari SharedStore
   ke siswaData agar muncul di kelas guru
════════════════════════════════════════════ */
function syncSiswaFromAdmin() {
  const store = window.SharedStore;
  if (!store || !store.siswa) return;
  store.siswa.forEach(s => {
    // Cek apakah kelas siswa ini ada di data guru
    if (!siswaData[s.kelas]) siswaData[s.kelas] = [];
    const exists = siswaData[s.kelas].find(x => x.id === s.id);
    if (!exists) {
      // Tambahkan siswa baru dari admin
      siswaData[s.kelas].push({
        id: s.id,
        nama: s.nama,
        nis: s.nisn || s.nis || '—',
        warna: s.bg || '#5F7161',
        bukaMateri: 'belum',
        kumpulTugas: 'belum',
        nilai: null,
        komentar: '',
      });
    } else {
      // Update data yang berubah
      exists.nama  = s.nama;
      exists.nis   = s.nisn || s.nis || exists.nis;
      exists.warna = s.bg   || exists.warna;
    }
  });
}

const materiData = [
  {id:1,judul:'Modul ERD',                kelas:'X RPL',    tipe:'Modul',    tgl:'15 Feb 2026',sudahBuka:20,totalSiswa:25},
  {id:2,judul:'PPT Normalisasi 1NF-3NF',   kelas:'XI RPL 1', tipe:'Presentasi',tgl:'10 Feb 2026',sudahBuka:28,totalSiswa:32},
  {id:3,judul:'Video DDL dan DML',         kelas:'XI RPL 2', tipe:'Video',    tgl:'18 Feb 2026',sudahBuka:24,totalSiswa:28},
  {id:4,judul:'Modul Query Join',           kelas:'XII RPL',  tipe:'Modul',    tgl:'12 Feb 2026',sudahBuka:26,totalSiswa:31},
  {id:5,judul:'Latihan Stored Procedure',   kelas:'XII RPL',  tipe:'Dokumen',  tgl:'5 Feb 2026', sudahBuka:20,totalSiswa:31},
  {id:6,judul:'PPT Basis Data Lanjutan',    kelas:'XII RPL',  tipe:'Presentasi',tgl:'20 Feb 2026',sudahBuka:15,totalSiswa:31},
];

const tugasData = [
  {id:1,judul:'Tugas ERD',                 kelas:'X RPL',    tipe:'tugas',deadline:'25 Feb 2026',kumpul:18,total:25,selesai:false},
  {id:2,judul:'Kuis Normalisasi',           kelas:'XI RPL 1', tipe:'kuis', deadline:'23 Feb 2026',kumpul:24,total:32,selesai:false},
  {id:3,judul:'Tugas DDL dan DML',          kelas:'XI RPL 2', tipe:'tugas',deadline:'28 Feb 2026',kumpul:26,total:28,selesai:false},
  {id:4,judul:'Project Database Perpustakaan',kelas:'XII RPL', tipe:'tugas',deadline:'2 Mar 2026',kumpul:28,total:31,selesai:false},
  {id:5,judul:'Kuis Query Join',            kelas:'XII RPL',  tipe:'kuis', deadline:'1 Mar 2026', kumpul:25,total:31,selesai:false},
];

const paData = [
  {id:1,judul:'RPP Basis Data Kelas X',     tipe:'RPP',    tgl:'20 Feb 2026',status:'belum-review'},
  {id:2,judul:'Silabus Basis Data Genap',   tipe:'Silabus',tgl:'10 Feb 2026',status:'sudah-review'},
  {id:3,judul:'Modul ERD Kelas XI',         tipe:'Modul Ajar',  tgl:'5 Jan 2026', status:'sudah-review'},
  {id:4,judul:'Kisi-kisi UH Semester',      tipe:'Kisi-kisi',tgl:'15 Jan 2026',status:'perlu-revisi'},
  {id:5,judul:'Program Tahunan Basis Data', tipe:'Prota',  tgl:'3 Jan 2026', status:'sudah-review'},
  {id:6,judul:'RPP Query Join',             tipe:'RPP',    tgl:'19 Feb 2026',status:'belum-review'},
];

const komentarKepsek = [
  {tipe:'positif',  teks:'Modul ERD sangat terstruktur dan mudah dipahami siswa. Pertahankan kualitasnya!', pa:'Modul ERD Kelas XI',tgl:'10 Feb 2026'},
  {tipe:'perbaikan',teks:'Kisi-kisi UH perlu disesuaikan dengan KD yang diajarkan di semester ini. Mohon direvisi.', pa:'Kisi-kisi UH Semester',tgl:'18 Jan 2026'},
  {tipe:'positif',  teks:'Silabus Basis Data sangat komprehensif. RPP sudah sesuai standar K-13.', pa:'Silabus Basis Data Genap',tgl:'12 Feb 2026'},
];

let pengumumanList = [
  {judul:'Jadwal Ulangan Harian',   target:'siswa',kelas:'XI RPL 1',isi:'UH Basis Data akan dilaksanakan Jumat, 28 Feb 2026 pukul 08.00 WIB. Pelajari materi ERD dan Normalisasi.',tgl:'20 Feb 2026'},
  {judul:'Reminder Pengumpulan Tugas',target:'ortu',kelas:'XII RPL',isi:'Mohon ingatkan putra/putri Bapak/Ibu untuk segera mengumpulkan Tugas Stored Procedure sebelum deadline 28 Feb.',tgl:'19 Feb 2026'},
  {judul:'Link Materi Tambahan',    target:'semua',kelas:'XI RPL 2',isi:'Link video pembahasan soal DDL dan DML telah diupload di LMS. Silakan akses melalui menu Materi.',tgl:'15 Feb 2026'},
];

let currentKelas     = 'XI RPL 1';
let currentTugasId   = null;
let komentarSiswaTarget = null;

/* ════════════════════════════════════
   UPDATE TOPBAR DARI SHARED STORE
════════════════════════════════════ */
function syncGuruProfile() {
  const shared = getSharedGuru();
  if (!shared) return;
  // Update nama di topbar / header jika ada
  const elNama = document.getElementById('guru-nama-display');
  if (elNama) elNama.textContent = shared.nama;
  
  // Update sidebar user info
  const userAvatar = document.querySelector('.user-avatar');
  const userInfoH4 = document.querySelector('.user-info h4');
  const userInfoP = document.querySelector('.user-info p');
  
  if (userAvatar) userAvatar.textContent = shared.inisial || 'IW';
  if (userInfoH4) userInfoH4.textContent = shared.nama || 'Irwan Saputra';
  if (userInfoP) userInfoP.textContent = `Guru ${shared.mapel || 'Basis Data'}`;
}

/* ════════════════════════════════════
   NAVIGATION
════════════════════════════════════ */
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');

  const navMap = {
    dashboard:0, kelas:1, 'detail-kelas':1,
    materi:2, tugas:3, 'detail-tugas':3, nilai:4,
    pengumuman:5, perangkat:6, 'komentar-kepsek':7
  };
  const navItems = document.querySelectorAll('.nav-item');
  const idx = navMap[page] ?? 0;
  if (navItems[idx]) navItems[idx].classList.add('active');

  const titleMap = {
    dashboard:          ['Dashboard Guru',         'Selamat datang, Irwan Saputra — SMK Negeri 12'],
    kelas:              ['Kelas Saya',              'Kelola pembelajaran di setiap kelas'],
    'detail-kelas':     ['Detail Kelas',            'Siswa, materi, dan tugas kelas ini'],
    materi:             ['Materi',                  'Semua materi yang telah diupload'],
    tugas:              ['Tugas & Kuis',            'Buat dan kelola tugas untuk siswa'],
    'detail-tugas':     ['Penilaian Tugas',         'Beri nilai dan komentar siswa'],
    nilai:              ['Nilai Siswa',             'Rekap nilai semua tugas per kelas'],
    pengumuman:         ['Pengumuman',              'Kirim info ke siswa dan orang tua'],
    perangkat:          ['Perangkat Ajar',          'Upload dokumen ke Kepala Sekolah'],
    'komentar-kepsek':  ['Komentar Kepsek',         'Evaluasi dari Kepala Sekolah'],
  };
  const [title, sub] = titleMap[page] || titleMap.dashboard;
  document.getElementById('topbar-title').textContent = title;
  document.getElementById('topbar-sub').textContent   = sub;

  if (page === 'materi')          renderAllMateri();
  if (page === 'tugas')           renderAllTugas();
  if (page === 'nilai')           renderNilai();
  if (page === 'pengumuman')      renderPengumuman();
  if (page === 'perangkat')       renderPA();
  if (page === 'komentar-kepsek') renderKomentarKepsek();
}

/* ════════════════════════════════════
   KELAS
════════════════════════════════════ */
function bukaKelas(kelas, mapel) {
  currentKelas = kelas;
  document.getElementById('detail-kelas-judul').textContent = kelas + ' — ' + mapel;
  document.getElementById('detail-kelas-sub').textContent   = 'Kelola siswa, materi, dan tugas kelas ini.';
  syncSiswaFromAdmin(); // ← SYNC dari SharedStore setiap kali kelas dibuka
  renderSiswaTable();
  renderMateriKelas();
  renderTugasKelas();
  document.querySelectorAll('#page-detail-kelas .tab-btn').forEach((b,i) => b.classList.toggle('active',i===0));
  document.querySelectorAll('#page-detail-kelas .tab-content').forEach((c,i) => c.classList.toggle('active',i===0));
  navigateTo('detail-kelas');
}

/* ════════════════════════════════════
   TABS
════════════════════════════════════ */
function switchTab(tabId, btn) {
  const parent = btn.closest('.page') || document.body;
  parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  const tc = document.getElementById(tabId);
  if (tc) tc.classList.add('active');
}

/* ════════════════════════════════════
   SISWA TABLE
════════════════════════════════════ */
function renderSiswaTable(filter='', statusFilter='') {
  let rows = siswaData[currentKelas] || [];
  if (filter)       rows = rows.filter(s => s.nama.toLowerCase().includes(filter.toLowerCase()));
  if (statusFilter) rows = rows.filter(s => s.bukaMateri === statusFilter);

  document.getElementById('siswa-tbody').innerHTML = rows.map(s => `
    <tr>
      <td><div class="cell-user">
        <div class="avatar-sm" style="background:${s.warna}">${s.nama.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
        <div><strong>${s.nama}</strong><small>${s.nis}</small></div>
      </div></td>
      <td><span class="badge-status ${s.bukaMateri}">${s.bukaMateri==='sudah'?'Sudah Buka':'Belum Buka'}</span></td>
      <td><span class="badge-status ${s.kumpulTugas}">${s.kumpulTugas==='sudah'?'Sudah Kumpul':'Belum Kumpul'}</span></td>
      <td><strong>${s.nilai !== null ? s.nilai : '—'}</strong></td>
      <td><button class="btn-icon comment" title="Beri Komentar" onclick="bukaKomentarSiswa(${s.id},'${s.nama}')"><i class="fa-solid fa-comment-dots"></i></button></td>
    </tr>
  `).join('');
}

function filterSiswa(v)       { renderSiswaTable(v, document.querySelector('#tab-siswa select')?.value||''); }
function filterSiswaStatus(v) { renderSiswaTable(document.querySelector('#tab-siswa input')?.value||'', v); }

function renderMateriKelas() {
  const rows = materiData.filter(m => m.kelas === currentKelas);
  document.getElementById('materi-kelas-tbody').innerHTML = rows.length ? rows.map(m => `
    <tr>
      <td><strong>${m.judul}</strong></td>
      <td><span class="kelas-chip">${m.tipe}</span></td>
      <td>${m.tgl}</td>
      <td><span class="badge-status ${m.sudahBuka===m.totalSiswa?'sudah':'belum'}">${m.sudahBuka}/${m.totalSiswa}</span></td>
      <td><div class="td-actions">
        <button class="btn-icon view"><i class="fa-solid fa-eye"></i></button>
        <button class="btn-icon del" onclick="hapusMateri(${m.id})"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>
  `).join('') : `<tr><td colspan="5"><div class="empty-state"><i class="fa-solid fa-folder-open"></i><p>Belum ada materi untuk kelas ini.</p></div></td></tr>`;
}

function renderTugasKelas() {
  const rows = tugasData.filter(t => t.kelas === currentKelas);
  document.getElementById('tugas-kelas-tbody').innerHTML = rows.length ? rows.map(t => {
    const belum = t.total - t.kumpul;
    return `<tr>
      <td><strong>${t.judul}</strong></td>
      <td><span class="kelas-chip">${t.tipe==='kuis'?'Kuis':'Tugas'}</span></td>
      <td>${t.deadline}</td>
      <td><span class="badge-status sudah">${t.kumpul}</span></td>
      <td><span class="badge-status ${belum>0?'belum':'sudah'}">${belum}</span></td>
      <td><button class="btn-icon view" onclick="bukaPenilaian(${t.id})"><i class="fa-solid fa-arrow-right"></i></button></td>
    </tr>`;
  }).join('') : `<tr><td colspan="6"><div class="empty-state"><i class="fa-solid fa-clipboard-list"></i><p>Belum ada tugas untuk kelas ini.</p></div></td></tr>`;
}

/* ════════════════════════════════════
   MATERI
════════════════════════════════════ */
function renderAllMateri() {
  document.getElementById('all-materi-tbody').innerHTML = materiData.map(m => `
    <tr>
      <td><strong>${m.judul}</strong></td>
      <td>${m.kelas}</td>
      <td><span class="kelas-chip">${m.tipe}</span></td>
      <td>${m.tgl}</td>
      <td><span class="badge-status sudah">${m.sudahBuka}</span></td>
      <td><span class="badge-status ${m.sudahBuka<m.totalSiswa?'belum':'sudah'}">${m.totalSiswa-m.sudahBuka}</span></td>
      <td><div class="td-actions">
        <button class="btn-icon view"><i class="fa-solid fa-eye"></i></button>
        <button class="btn-icon del" onclick="hapusMateri(${m.id})"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>
  `).join('');
}

function submitMateri() {
  const judul = document.getElementById('materi-judul').value.trim();
  if (!judul) { showToast('Judul materi wajib diisi!','warn'); return; }
  const kelas = document.getElementById('materi-kelas').value;
  const tipe  = document.getElementById('materi-tipe').value;
  const siswa = siswaData[kelas]?.length || 0;
  materiData.unshift({id:Date.now(),judul,kelas,tipe,tgl:today(),sudahBuka:0,totalSiswa:siswa});
  closeModal('modal-upload-materi');
  document.getElementById('materi-judul').value='';
  document.getElementById('nama-file-materi').textContent='';
  renderAllMateri(); renderMateriKelas();
  showToast('Materi "'+judul+'" berhasil diupload!','success');
}

function hapusMateri(id) {
  const idx = materiData.findIndex(m=>m.id===id);
  if (idx>-1) materiData.splice(idx,1);
  renderAllMateri(); renderMateriKelas();
  showToast('Materi dihapus.','info');
}

/* ════════════════════════════════════
   TUGAS
════════════════════════════════════ */
function renderAllTugas() {
  const renderRow = (t, cols) => {
    const belum = t.total - t.kumpul;
    if (cols === 'all') return `<tr>
      <td><strong>${t.judul}</strong></td><td>${t.kelas}</td>
      <td><span class="kelas-chip">${t.tipe==='kuis'?'Kuis':'Tugas'}</span></td>
      <td>${t.deadline}</td>
      <td><span class="badge-status sudah">${t.kumpul}/${t.total}</span></td>
      <td><span class="badge-status ${belum>0?'belum':'sudah'}">${belum}</span></td>
      <td><span class="badge-status ${t.selesai?'sudah':'belum'}">${t.selesai?'Selesai':'Aktif'}</span></td>
      <td><button class="btn-icon view" onclick="bukaPenilaian(${t.id})"><i class="fa-solid fa-arrow-right"></i></button></td>
    </tr>`;
    if (cols === 'aktif') return `<tr>
      <td><strong>${t.judul}</strong></td><td>${t.kelas}</td><td>${t.deadline}</td>
      <td><span class="badge-status sudah">${t.kumpul}/${t.total}</span></td>
      <td><span class="badge-status ${belum>0?'belum':'sudah'}">${belum}</span></td>
      <td><button class="btn-icon view" onclick="bukaPenilaian(${t.id})"><i class="fa-solid fa-arrow-right"></i></button></td>
    </tr>`;
    return `<tr>
      <td><strong>${t.judul}</strong></td><td>${t.kelas}</td><td>${t.deadline}</td>
      <td><span class="badge-status sudah">${t.kumpul}/${t.total}</span></td>
      <td><button class="btn-icon view" onclick="bukaPenilaian(${t.id})"><i class="fa-solid fa-arrow-right"></i></button></td>
    </tr>`;
  };
  document.getElementById('all-tugas-tbody').innerHTML     = tugasData.map(t=>renderRow(t,'all')).join('');
  document.getElementById('aktif-tugas-tbody').innerHTML   = tugasData.filter(t=>!t.selesai).map(t=>renderRow(t,'aktif')).join('');
  document.getElementById('selesai-tugas-tbody').innerHTML = tugasData.filter(t=>t.selesai).map(t=>renderRow(t,'selesai')).join('');
}

function submitTugas() {
  const judul = document.getElementById('tugas-judul').value.trim();
  if (!judul) { showToast('Judul tugas wajib diisi!','warn'); return; }
  const kelas      = document.getElementById('tugas-kelas').value;
  const tipe       = document.getElementById('tugas-tipe').value;
  const deadline   = document.getElementById('tugas-deadline').value;
  // Format deadline
  const deadlineFormatted = deadline ? new Date(deadline).toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'}) : '—';
  const totalSiswa = siswaData[kelas]?.length || 30;
  tugasData.unshift({id:Date.now(),judul,kelas,tipe,deadline:deadlineFormatted,kumpul:0,total:totalSiswa,selesai:false});
  closeModal('modal-buat-tugas');
  document.getElementById('tugas-judul').value='';
  renderAllTugas(); renderTugasKelas();
  const el = document.getElementById('dash-tugas-aktif');
  if(el) el.textContent = tugasData.filter(t=>!t.selesai).length;
  showToast('Tugas "'+judul+'" berhasil dibuat!','success');
}

/* ════════════════════════════════════
   PENILAIAN
════════════════════════════════════ */
function bukaPenilaian(tugasId) {
  currentTugasId = tugasId;
  const t = tugasData.find(x=>x.id===tugasId);
  if (!t) return;
  document.getElementById('detail-tugas-judul').textContent = t.judul + ' — ' + t.kelas;
  document.getElementById('detail-tugas-sub').textContent   = 'Kelas ' + t.kelas + ' • Deadline: ' + t.deadline;

  const siswa = siswaData[t.kelas] || [];
  document.getElementById('penilaian-tbody').innerHTML = siswa.map((s,i) => {
    const sudah = i < t.kumpul;
    return `<tr>
      <td><div class="cell-user">
        <div class="avatar-sm" style="background:${s.warna}">${s.nama.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
        <div><strong>${s.nama}</strong><small>${s.nis}</small></div>
      </div></td>
      <td><span class="badge-status ${sudah?'sudah':'belum'}">${sudah?'Sudah Kumpul':'Belum Kumpul'}</span></td>
      <td>${sudah?'22 Feb 2026, 14:30':'—'}</td>
      <td>${sudah?'<button class="btn-icon view" title="Lihat file"><i class="fa-solid fa-file"></i></button>':'—'}</td>
      <td><input type="number" class="nilai-input" id="nilai-${s.id}" min="0" max="100" value="${s.nilai||''}" placeholder="—" ${!sudah?'disabled':''}></td>
      <td><button class="btn-icon comment" ${!sudah?'disabled':''} onclick="bukaKomentarSiswa(${s.id},'${s.nama}')"><i class="fa-solid fa-comment-dots"></i></button></td>
      <td><span class="badge-status ${s.komentar?'sudah':'belum'}">${s.komentar?'Ada':'—'}</span></td>
    </tr>`;
  }).join('');

  navigateTo('detail-tugas');
}

function simpanSemuaNilai() {
  const t = tugasData.find(x=>x.id===currentTugasId);
  if (!t) return;
  const siswa = siswaData[t.kelas] || [];
  let count = 0;
  siswa.forEach(s => {
    const el = document.getElementById('nilai-'+s.id);
    if (el && el.value !== '') { s.nilai = parseInt(el.value); count++; }
  });
  showToast(count + ' nilai berhasil disimpan!','success');
  const elBelum = document.getElementById('dash-belum-nilai');
  if(elBelum) elBelum.textContent =
    Object.values(siswaData).flat().filter(s=>s.kumpulTugas==='sudah'&&s.nilai===null).length;
}

/* ════════════════════════════════════
   NILAI
════════════════════════════════════ */
function nilaiRowXrpl(s) {
  return `<tr>
    <td><div class="cell-user">
      <div class="avatar-sm" style="background:${s.warna}">${s.nama.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
      <div><strong>${s.nama}</strong><small>${s.nis}</small></div>
    </div></td>
    <td><strong>${s.nilai || '—'}</strong></td>
    <td><strong>${s.nilai ? Math.max(0, s.nilai-5) : '—'}</strong></td>
    <td><strong>${s.nilai ? Math.min(100, s.nilai+3) : '—'}</strong></td>
    <td><strong>${s.nilai || '—'}</strong></td>
    <td><button class="btn-icon comment" onclick="bukaKomentarSiswa(${s.id},'${s.nama}')"><i class="fa-solid fa-comment-dots"></i></button></td>
  </tr>`;
}

function nilaiRowXirpl1(s) {
  return `<tr>
    <td><div class="cell-user">
      <div class="avatar-sm" style="background:${s.warna}">${s.nama.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
      <div><strong>${s.nama}</strong><small>${s.nis}</small></div>
    </div></td>
    <td><strong>${s.nilai || '—'}</strong></td>
    <td><strong>${s.nilai || '—'}</strong></td>
    <td><strong>${s.nilai || '—'}</strong></td>
    <td><strong>${s.nilai || '—'}</strong></td>
    <td><button class="btn-icon comment" onclick="bukaKomentarSiswa(${s.id},'${s.nama}')"><i class="fa-solid fa-comment-dots"></i></button></td>
  </tr>`;
}

function nilaiRowXirpl2(s) {
  return `<tr>
    <td><div class="cell-user">
      <div class="avatar-sm" style="background:${s.warna}">${s.nama.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
      <div><strong>${s.nama}</strong><small>${s.nis}</small></div>
    </div></td>
    <td><strong>${s.nilai || '—'}</strong></td>
    <td><strong>${s.nilai || '—'}</strong></td>
    <td><strong>${s.nilai || '—'}</strong></td>
    <td><button class="btn-icon comment" onclick="bukaKomentarSiswa(${s.id},'${s.nama}')"><i class="fa-solid fa-comment-dots"></i></button></td>
  </tr>`;
}

function nilaiRowXiirpl(s) {
  return `<tr>
    <td><div class="cell-user">
      <div class="avatar-sm" style="background:${s.warna}">${s.nama.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
      <div><strong>${s.nama}</strong><small>${s.nis}</small></div>
    </div></td>
    <td><strong>${s.nilai || '—'}</strong></td>
    <td><strong>${s.nilai || '—'}</strong></td>
    <td><strong>${s.nilai || '—'}</strong></td>
    <td><button class="btn-icon comment" onclick="bukaKomentarSiswa(${s.id},'${s.nama}')"><i class="fa-solid fa-comment-dots"></i></button></td>
  </tr>`;
}

function renderNilai() {
  syncSiswaFromAdmin();
  
  // X RPL
  const xrplTbody = document.getElementById('nilai-xrpl-tbody');
  if (xrplTbody) {
    xrplTbody.innerHTML = (siswaData['X RPL'] || []).map(s => nilaiRowXrpl(s)).join('');
  }
  
  // XI RPL 1
  const xirpl1Tbody = document.getElementById('nilai-xirpl1-tbody');
  if (xirpl1Tbody) {
    xirpl1Tbody.innerHTML = (siswaData['XI RPL 1'] || []).map(s => nilaiRowXirpl1(s)).join('');
  }
  
  // XI RPL 2
  const xirpl2Tbody = document.getElementById('nilai-xirpl2-tbody');
  if (xirpl2Tbody) {
    xirpl2Tbody.innerHTML = (siswaData['XI RPL 2'] || []).map(s => nilaiRowXirpl2(s)).join('');
  }
  
  // XII RPL
  const xiirplTbody = document.getElementById('nilai-xiirpl-tbody');
  if (xiirplTbody) {
    xiirplTbody.innerHTML = (siswaData['XII RPL'] || []).map(s => nilaiRowXiirpl(s)).join('');
  }
}

/* ════════════════════════════════════
   KOMENTAR SISWA
════════════════════════════════════ */
function bukaKomentarSiswa(id, nama) {
  komentarSiswaTarget = id;
  document.getElementById('kom-siswa-nama').value = nama;
  document.getElementById('kom-siswa-teks').value = '';
  openModal('modal-komentar-siswa');
}
function submitKomentarSiswa() {
  const teks  = document.getElementById('kom-siswa-teks').value.trim();
  const jenis = document.getElementById('kom-siswa-enum').value;
  const siswa = Object.values(siswaData).flat().find(s=>s.id===komentarSiswaTarget);
  if (siswa) siswa.komentar = jenis + (teks?' — '+teks:'');
  closeModal('modal-komentar-siswa');
  showToast('Komentar berhasil dikirim!','success');
  
  // Refresh tampilan jika sedang di halaman penilaian
  if (currentTugasId) {
    bukaPenilaian(currentTugasId);
  }
}

/* ════════════════════════════════════
   PENGUMUMAN
════════════════════════════════════ */
function renderPengumuman() {
  document.getElementById('pengumuman-list').innerHTML = pengumumanList.map(p => `
    <div class="pengumuman-item">
      <div class="pengumuman-meta">
        <span class="pengumuman-tag ${p.target}">${p.target==='siswa'?'Siswa':p.target==='ortu'?'Orang Tua':'Semua'}</span>
        <span style="font-size:12px;color:var(--text-muted)">${p.kelas}</span>
      </div>
      <h4>${p.judul}</h4>
      <p>${p.isi}</p>
      <div class="meta-bottom">
        <span>${p.tgl}</span>
        <button class="btn-icon del" onclick="hapusPengumuman('${p.judul}')"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}
function submitPengumuman() {
  const judul = document.getElementById('peng-judul').value.trim();
  const isi   = document.getElementById('peng-isi').value.trim();
  if (!judul||!isi) { showToast('Judul dan isi pengumuman wajib diisi!','warn'); return; }
  pengumumanList.unshift({judul,target:document.getElementById('peng-target').value,kelas:document.getElementById('peng-kelas').value,isi,tgl:today()});
  closeModal('modal-pengumuman');
  document.getElementById('peng-judul').value='';
  document.getElementById('peng-isi').value='';
  renderPengumuman();
  showToast('Pengumuman berhasil dikirim!','success');
}
function hapusPengumuman(judul) {
  const idx = pengumumanList.findIndex(p=>p.judul===judul);
  if (idx>-1) pengumumanList.splice(idx,1);
  renderPengumuman();
  showToast('Pengumuman dihapus.','info');
}

/* ════════════════════════════════════
   PERANGKAT AJAR
════════════════════════════════════ */
function renderPA() {
  const statusLabel = s => s==='sudah-review'?'Sudah Review':s==='belum-review'?'Belum Review':'Perlu Revisi';
  document.getElementById('pa-tbody').innerHTML = paData.map(p => `
    <tr>
      <td><strong>${p.judul}</strong></td>
      <td><span class="kelas-chip">${p.tipe}</span></td>
      <td>${p.tgl}</td>
      <td><span class="badge-status ${p.status==='sudah-review'?'sudah':p.status==='belum-review'?'belum':'terlambat'}">${statusLabel(p.status)}</span></td>
      <td><div class="td-actions">
        <button class="btn-icon view"><i class="fa-solid fa-eye"></i></button>
        <button class="btn-icon del" onclick="hapusPA(${p.id})"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>
  `).join('');
}
function submitPA() {
  const judul = document.getElementById('pa-judul').value.trim();
  if (!judul) { showToast('Judul dokumen wajib diisi!','warn'); return; }
  const tipe = document.getElementById('pa-tipe').value;
  paData.unshift({id:Date.now(),judul,tipe,tgl:today(),status:'belum-review'});
  closeModal('modal-upload-pa');
  document.getElementById('pa-judul').value='';
  document.getElementById('nama-file-pa').textContent='';
  renderPA();

  // Sync perangkat ajar ke SharedStore agar kepsek bisa review
  if (window.SharedStore) {
    const guruEntry = window.SharedStore.guru.find(g => g.email === 'irwan@gmail.com');
    if (guruEntry) {
      if (!guruEntry.perangkat) guruEntry.perangkat = [];
      guruEntry.perangkat.unshift({judul, tipe, tgl:today(), status:'belum-review'});
    }
  }

  showToast('Perangkat ajar "'+judul+'" berhasil dikirim ke Kepsek!','success');
}
function hapusPA(id) {
  const idx = paData.findIndex(p=>p.id===id);
  if (idx>-1) paData.splice(idx,1);
  renderPA();
  showToast('Dokumen dihapus.','info');
}

/* ════════════════════════════════════
   KOMENTAR KEPSEK
════════════════════════════════════ */
function renderKomentarKepsek() {
  // Cek komentar dari SharedStore (kepsek bisa nambah komentar)
  const shared = window.SharedStore;
  let list = komentarKepsek;
  if (shared && shared.guru) {
    const guruEntry = shared.guru.find(g => g.email === 'irwan@gmail.com');
    if (guruEntry && guruEntry.komentar && guruEntry.komentar.length > 0) {
      list = guruEntry.komentar.map(k => ({tipe:k.tipe, teks:k.teks, pa:k.pa || '—', tgl:k.tgl}));
    }
  }
  document.getElementById('komentar-kepsek-list').innerHTML = list.map(k => `
    <div class="komentar-kepsek-item">
      <div class="kom-avatar">KS</div>
      <div class="kom-body">
        <div class="kom-meta">
          <span class="kom-name" style="font-size:13px;font-weight:700;color:var(--text-primary)">Kepala Sekolah</span>
          <span class="kom-tag ${k.tipe}">${k.tipe==='positif'?'Positif':'Perbaikan'}</span>
          <span class="kom-time">${k.tgl}</span>
        </div>
        <p style="font-size:11.5px;color:var(--text-muted);margin-bottom:4px">Pada: <em>${k.pa}</em></p>
        <p class="kom-text">${k.teks}</p>
      </div>
    </div>
  `).join('');
}

/* ════════════════════════════════════
   HELPERS
════════════════════════════════════ */
function today() {
  return new Date().toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'});
}
function previewFile(input, areaId, hintId) {
  if (input.files[0]) {
    document.getElementById(hintId).textContent = '📎 ' + input.files[0].name;
    if (areaId) { 
      const a = document.getElementById(areaId); 
      if (a) a.querySelector('h4').textContent = input.files[0].name; 
    }
  }
}
function openModal(id)  { 
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open'); 
}
function closeModal(id) { 
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open'); 
}
document.querySelectorAll('.modal-overlay').forEach(ov =>
  ov.addEventListener('click', e => { if(e.target===ov) closeModal(ov.id); })
);
function toggleNotif() { 
  const panel = document.getElementById('notif-panel');
  if (panel) panel.classList.toggle('open'); 
}
function markAllRead() {
  document.querySelectorAll('.notif-item.unread').forEach(el=>el.classList.remove('unread'));
  const notifDot = document.querySelector('.notif-dot');
  if (notifDot) notifDot.remove();
}
document.addEventListener('click', e => {
  const notifPanel = document.getElementById('notif-panel');
  const notifBtn = document.getElementById('notif-btn');
  if (notifPanel && !e.target.closest('#notif-panel') && !e.target.closest('#notif-btn')) {
    notifPanel.classList.remove('open');
  }
});
function doLogout() { 
  if (confirm('Yakin ingin logout?')) {
    window.location.href = 'login.html'; 
  }
}
function showToast(msg, type='success') {
  const c = document.getElementById('toast-container');
  if (!c) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const icon = type==='success'?'✅':type==='warn'?'⚠️':'ℹ️';
  t.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
  c.appendChild(t);
  t.addEventListener('click',()=>removeToast(t));
  setTimeout(()=>removeToast(t),4000);
}
function removeToast(t){ t.classList.add('out'); setTimeout(()=>t.remove(),350); }

/* ════ INIT ════ */
document.addEventListener('DOMContentLoaded', () => {
  syncSiswaFromAdmin();  // ← Sync siswa dari admin saat load
  syncGuruProfile();     // ← Update profil guru dari SharedStore
  
  // Update dashboard stats
  const dashTugasAktif = document.getElementById('dash-tugas-aktif');
  if (dashTugasAktif) dashTugasAktif.textContent = tugasData.filter(t => !t.selesai).length;
  
  const dashBelumNilai = document.getElementById('dash-belum-nilai');
  if (dashBelumNilai) {
    dashBelumNilai.textContent = Object.values(siswaData).flat()
      .filter(s => s.kumpulTugas === 'sudah' && s.nilai === null).length;
  }
  
  // Update badge counts
  const badgeKelas = document.getElementById('badge-kelas');
  if (badgeKelas) badgeKelas.textContent = '4';
  
  const badgeTugas = document.getElementById('badge-tugas');
  if (badgeTugas) badgeTugas.textContent = tugasData.length;
});
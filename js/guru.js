/* ════════════════════════════════════
   DATA
════════════════════════════════════ */
const GURU = { nama:'Irwan Setiawan', inisial:'IW', mapel:'Matematika', email:'irwan@gmail.com' };

const siswaData = {
  'XI RPL 1': [
    {id:1,nama:'Andi Pratama',    nis:'2301001',warna:'#5F7161',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:88,komentar:''},
    {id:2,nama:'Bella Sari',     nis:'2301002',warna:'#1a6fa5',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:92,komentar:''},
    {id:3,nama:'Cahyo Nugroho',  nis:'2301003',warna:'#7d3c98',bukaMateri:'belum',kumpulTugas:'belum',nilai:null,komentar:''},
    {id:4,nama:'Dewi Lestari',   nis:'2301004',warna:'#d68910',bukaMateri:'sudah',kumpulTugas:'belum',nilai:null,komentar:''},
    {id:5,nama:'Eko Prasetyo',   nis:'2301005',warna:'#c0392b',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:76,komentar:''},
  ],
  'XI RPL 2': [
    {id:6,nama:'Fajar Hidayat',  nis:'2302001',warna:'#27ae60',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:85,komentar:''},
    {id:7,nama:'Gita Rahayu',    nis:'2302002',warna:'#5F7161',bukaMateri:'belum',kumpulTugas:'belum',nilai:null,komentar:''},
    {id:8,nama:'Hendra Gunawan', nis:'2302003',warna:'#1a6fa5',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:90,komentar:''},
  ],
  'XI TKJ 1': [
    {id:9, nama:'Indah Permata',  nis:'2303001',warna:'#7d3c98',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:95,komentar:''},
    {id:10,nama:'Joko Santoso',   nis:'2303002',warna:'#d68910',bukaMateri:'sudah',kumpulTugas:'sudah',nilai:80,komentar:''},
    {id:11,nama:'Kartika Dewi',   nis:'2303003',warna:'#c0392b',bukaMateri:'belum',kumpulTugas:'belum',nilai:null,komentar:''},
  ],
};

const materiData = [
  {id:1,judul:'Modul Limit Fungsi',     kelas:'XI RPL 1',tipe:'Modul',    tgl:'15 Feb 2026',sudahBuka:25,totalSiswa:30},
  {id:2,judul:'PPT Trigonometri',       kelas:'XI RPL 1',tipe:'Presentasi',tgl:'10 Feb 2026',sudahBuka:30,totalSiswa:30},
  {id:3,judul:'Video Integral Dasar',   kelas:'XI RPL 2',tipe:'Video',    tgl:'18 Feb 2026',sudahBuka:20,totalSiswa:28},
  {id:4,judul:'Modul Persamaan Kuadrat',kelas:'XI TKJ 1',tipe:'Modul',    tgl:'12 Feb 2026',sudahBuka:28,totalSiswa:31},
  {id:5,judul:'Latihan Soal Statistika',kelas:'XI RPL 2',tipe:'Dokumen',  tgl:'5 Feb 2026', sudahBuka:15,totalSiswa:28},
];

const tugasData = [
  {id:1,judul:'Tugas Limit Fungsi',     kelas:'XI RPL 1',tipe:'tugas',deadline:'25 Feb 2026',kumpul:22,total:30,selesai:false},
  {id:2,judul:'Kuis Trigonometri',      kelas:'XI RPL 1',tipe:'kuis', deadline:'23 Feb 2026',kumpul:22,total:30,selesai:false},
  {id:3,judul:'Tugas Integral Dasar',   kelas:'XI TKJ 1',tipe:'tugas',deadline:'28 Feb 2026',kumpul:31,total:31,selesai:true},
  {id:4,judul:'Essay Aplikasi Matematika',kelas:'XI RPL 1',tipe:'tugas',deadline:'2 Mar 2026',kumpul:22,total:30,selesai:false},
  {id:5,judul:'Kuis Persamaan Kuadrat', kelas:'XI RPL 2',tipe:'kuis', deadline:'1 Mar 2026',kumpul:20,total:28,selesai:false},
];

const paData = [
  {id:1,judul:'RPP Limit Fungsi XI',    tipe:'RPP',    tgl:'20 Feb 2026',status:'belum-review'},
  {id:2,judul:'Silabus Matematika Genap',tipe:'Silabus',tgl:'10 Feb 2026',status:'sudah-review'},
  {id:3,judul:'Modul Trigonometri',     tipe:'Modul',  tgl:'5 Jan 2026', status:'sudah-review'},
  {id:4,judul:'Kisi-kisi UH Semester',  tipe:'Kisi-kisi',tgl:'15 Jan 2026',status:'perlu-revisi'},
  {id:5,judul:'Program Tahunan',        tipe:'Prota',  tgl:'3 Jan 2026', status:'sudah-review'},
  {id:6,judul:'RPP Integral Dasar',     tipe:'RPP',    tgl:'19 Feb 2026',status:'belum-review'},
];

const komentarKepsek = [
  {tipe:'positif',  teks:'Modul Trigonometri sangat terstruktur dan mudah dipahami siswa. Pertahankan kualitasnya!', pa:'Modul Trigonometri',tgl:'10 Feb 2026'},
  {tipe:'perbaikan',teks:'Kisi-kisi UH perlu disesuaikan dengan KD yang diajarkan di semester ini. Mohon direvisi.', pa:'Kisi-kisi UH Semester',tgl:'18 Jan 2026'},
  {tipe:'positif',  teks:'Silabus Matematika sangat komprehensif. RPP sudah sesuai standar K-13.', pa:'Silabus Matematika Genap',tgl:'12 Feb 2026'},
];

let pengumumanList = [
  {judul:'Jadwal Ulangan Harian',target:'siswa',kelas:'XI RPL 1',isi:'UH Trigonometri akan dilaksanakan Jumat, 28 Feb 2026 pukul 08.00 WIB. Pelajari materi limit dan trigonometri.',tgl:'20 Feb 2026'},
  {judul:'Reminder Pengumpulan Tugas',target:'ortu',kelas:'XI TKJ 1',isi:'Mohon ingatkan putra/putri Bapak/Ibu untuk segera mengumpulkan Tugas Integral sebelum deadline 28 Feb.',tgl:'19 Feb 2026'},
  {judul:'Link Materi Tambahan',target:'semua',kelas:'XI RPL 2',isi:'Link video pembahasan soal Integral telah diupload di LMS. Silakan akses melalui menu Materi.',tgl:'15 Feb 2026'},
];

let currentKelas = 'XI RPL 1';
let currentTugasId = null;
let komentarSiswaTarget = null;

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
    dashboard:       ['Dashboard Guru',         'Selamat datang, Irwan Setiawan — SMK Negeri 12'],
    kelas:           ['Kelas Saya',              'Kelola pembelajaran di setiap kelas'],
    'detail-kelas':  ['Detail Kelas',            'Siswa, materi, dan tugas kelas ini'],
    materi:          ['Materi',                  'Semua materi yang telah diupload'],
    tugas:           ['Tugas & Kuis',            'Buat dan kelola tugas untuk siswa'],
    'detail-tugas':  ['Penilaian Tugas',         'Beri nilai dan komentar siswa'],
    nilai:           ['Nilai Siswa',             'Rekap nilai semua tugas per kelas'],
    pengumuman:      ['Pengumuman',              'Kirim info ke siswa dan orang tua'],
    perangkat:       ['Perangkat Ajar',          'Upload dokumen ke Kepala Sekolah'],
    'komentar-kepsek':['Komentar Kepsek',        'Evaluasi dari Kepala Sekolah'],
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
  renderSiswaTable();
  renderMateriKelas();
  renderTugasKelas();
  // reset tabs
  document.querySelectorAll('#page-detail-kelas .tab-btn').forEach((b,i)=>{b.classList.toggle('active',i===0);});
  document.querySelectorAll('#page-detail-kelas .tab-content').forEach((c,i)=>{c.classList.toggle('active',i===0);});
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
      <td><div class="td-actions"><button class="btn-icon view"><i class="fa-solid fa-eye"></i></button><button class="btn-icon del" onclick="hapusMateri(${m.id})"><i class="fa-solid fa-trash"></i></button></div></td>
    </tr>
  `).join('') : `<tr><td colspan="5"><div class="empty-state"><i class="fa-solid fa-folder-open"></i><p>Belum ada materi untuk kelas ini.</p></div></td></tr>`;
}

function renderTugasKelas() {
  const rows = tugasData.filter(t => t.kelas === currentKelas);
  document.getElementById('tugas-kelas-tbody').innerHTML = rows.length ? rows.map(t => `
    <tr>
      <td><strong>${t.judul}</strong></td>
      <td><span class="kelas-chip">${t.tipe==='kuis'?'Kuis':'Tugas'}</span></td>
      <td>${t.deadline}</td>
      <td><span class="badge-status sudah">${t.kumpul}</span></td>
      <td><span class="badge-status belum">${t.total-t.kumpul}</span></td>
      <td><button class="btn-icon view" onclick="bukaPenilaian(${t.id})"><i class="fa-solid fa-arrow-right"></i></button></td>
    </tr>
  `).join('') : `<tr><td colspan="6"><div class="empty-state"><i class="fa-solid fa-clipboard-list"></i><p>Belum ada tugas untuk kelas ini.</p></div></td></tr>`;
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
      <td><div class="td-actions"><button class="btn-icon view"><i class="fa-solid fa-eye"></i></button><button class="btn-icon del" onclick="hapusMateri(${m.id})"><i class="fa-solid fa-trash"></i></button></div></td>
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
    const stat  = t.selesai ? 'sudah' : (belum>0?'belum':'sudah');
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
      <td><span class="badge-status belum">${belum}</span></td>
      <td><button class="btn-icon view" onclick="bukaPenilaian(${t.id})"><i class="fa-solid fa-arrow-right"></i></button></td>
    </tr>`;
    return `<tr>
      <td><strong>${t.judul}</strong></td><td>${t.kelas}</td><td>${t.deadline}</td>
      <td><span class="badge-status sudah">${t.kumpul}/${t.total}</span></td>
      <td><button class="btn-icon view" onclick="bukaPenilaian(${t.id})"><i class="fa-solid fa-arrow-right"></i></button></td>
    </tr>`;
  };
  document.getElementById('all-tugas-tbody').innerHTML    = tugasData.map(t=>renderRow(t,'all')).join('');
  document.getElementById('aktif-tugas-tbody').innerHTML  = tugasData.filter(t=>!t.selesai).map(t=>renderRow(t,'aktif')).join('');
  document.getElementById('selesai-tugas-tbody').innerHTML= tugasData.filter(t=>t.selesai).map(t=>renderRow(t,'selesai')).join('');
}

function submitTugas() {
  const judul = document.getElementById('tugas-judul').value.trim();
  if (!judul) { showToast('Judul tugas wajib diisi!','warn'); return; }
  const kelas   = document.getElementById('tugas-kelas').value;
  const tipe    = document.getElementById('tugas-tipe').value;
  const deadline= document.getElementById('tugas-deadline').value;
  const totalSiswa = siswaData[kelas]?.length || 30;
  tugasData.unshift({id:Date.now(),judul,kelas,tipe,deadline:deadline||'—',kumpul:0,total:totalSiswa,selesai:false});
  closeModal('modal-buat-tugas');
  document.getElementById('tugas-judul').value='';
  renderAllTugas(); renderTugasKelas();
  document.getElementById('dash-tugas-aktif').textContent = tugasData.filter(t=>!t.selesai).length;
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
  document.getElementById('dash-belum-nilai').textContent = 
    Object.values(siswaData).flat().filter(s=>s.kumpulTugas==='sudah'&&s.nilai===null).length;
}

/* ════════════════════════════════════
   NILAI
════════════════════════════════════ */
function nilaiRow(s) {
  const avg = s.nilai || '—';
  const warna = s.nilai>=90?'var(--primary)':s.nilai>=75?'var(--warn)':'var(--danger)';
  return `<tr>
    <td><div class="cell-user">
      <div class="avatar-sm" style="background:${s.warna}">${s.nama.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
      <div><strong>${s.nama}</strong><small>${s.nis}</small></div>
    </div></td>
    <td><strong style="color:${typeof avg==='number'?warna:'var(--text-muted)'}">${avg}</strong></td>
    <td><strong style="color:${typeof avg==='number'?warna:'var(--text-muted)'}">${avg!=='—'?Math.max(0,avg-5):'—'}</strong></td>
    <td><strong style="color:${typeof avg==='number'?warna:'var(--text-muted)'}">${avg!=='—'?Math.min(100,avg+3):'—'}</strong></td>
    <td><strong style="color:${typeof avg==='number'?warna:'var(--text-muted)'}">${avg}</strong></td>
    <td><button class="btn-icon comment" onclick="bukaKomentarSiswa(${s.id},'${s.nama}')"><i class="fa-solid fa-comment-dots"></i></button></td>
  </tr>`;
}
function renderNilai() {
  document.getElementById('nilai-rpl1-tbody').innerHTML = (siswaData['XI RPL 1']||[]).map(s=>nilaiRow(s)).join('');
  document.getElementById('nilai-rpl2-tbody').innerHTML = (siswaData['XI RPL 2']||[]).map(s=>`<tr><td><div class="cell-user"><div class="avatar-sm" style="background:${s.warna}">${s.nama.split(' ').map(w=>w[0]).join('').slice(0,2)}</div><div><strong>${s.nama}</strong><small>${s.nis}</small></div></div></td><td><strong>${s.nilai||'—'}</strong></td><td><strong>${s.nilai||'—'}</strong></td><td><strong>${s.nilai||'—'}</strong></td><td><button class="btn-icon comment" onclick="bukaKomentarSiswa(${s.id},'${s.nama}')"><i class="fa-solid fa-comment-dots"></i></button></td></tr>`).join('');
  document.getElementById('nilai-tkj1-tbody').innerHTML = (siswaData['XI TKJ 1']||[]).map(s=>`<tr><td><div class="cell-user"><div class="avatar-sm" style="background:${s.warna}">${s.nama.split(' ').map(w=>w[0]).join('').slice(0,2)}</div><div><strong>${s.nama}</strong><small>${s.nis}</small></div></div></td><td><strong>${s.nilai||'—'}</strong></td><td><strong>${s.nilai||'—'}</strong></td><td><button class="btn-icon comment" onclick="bukaKomentarSiswa(${s.id},'${s.nama}')"><i class="fa-solid fa-comment-dots"></i></button></td></tr>`).join('');
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
  const teks = document.getElementById('kom-siswa-teks').value.trim();
  const jenis = document.getElementById('kom-siswa-enum').value;
  const siswa = Object.values(siswaData).flat().find(s=>s.id===komentarSiswaTarget);
  if (siswa) siswa.komentar = jenis + (teks?' — '+teks:'');
  closeModal('modal-komentar-siswa');
  showToast('Komentar berhasil dikirim!','success');
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
  const judul  = document.getElementById('peng-judul').value.trim();
  const isi    = document.getElementById('peng-isi').value.trim();
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
      <td><div class="td-actions"><button class="btn-icon view"><i class="fa-solid fa-eye"></i></button><button class="btn-icon del" onclick="hapusPA(${p.id})"><i class="fa-solid fa-trash"></i></button></div></td>
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
  document.getElementById('komentar-kepsek-list').innerHTML = komentarKepsek.map(k => `
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
    if (areaId) { const a = document.getElementById(areaId); a.querySelector('h4').textContent = input.files[0].name; }
  }
}

function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// Tutup modal saat klik di luar
document.querySelectorAll('.modal-overlay').forEach(ov =>
  ov.addEventListener('click', e => { if(e.target===ov) closeModal(ov.id); })
);

function toggleNotif() { document.getElementById('notif-panel').classList.toggle('open'); }
function markAllRead() {
  document.querySelectorAll('.notif-item.unread').forEach(el=>el.classList.remove('unread'));
  document.querySelector('.notif-dot')?.remove();
}

// Tutup notifikasi saat klik di luar
document.addEventListener('click', e => {
  if (!e.target.closest('#notif-panel') && !e.target.closest('#notif-btn'))
    document.getElementById('notif-panel').classList.remove('open');
});

function doLogout() { window.location.href = 'login.html'; }

function showToast(msg, type='success') {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const icon = type==='success'?'✅':type==='warn'?'⚠️':'ℹ️';
  t.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
  c.appendChild(t);
  t.addEventListener('click',()=>removeToast(t));
  setTimeout(()=>removeToast(t),4000);
}
function removeToast(t){ t.classList.add('out'); setTimeout(()=>t.remove(),350); }
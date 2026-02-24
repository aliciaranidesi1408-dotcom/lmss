/* ════ DATA ════ */
const mapelData = [
  {id:1,nama:'Matematika',       guru:'Pak Irwan Setiawan', color:'#5F7161',bg:'#eef6f0',icon:'fa-square-root-variable',materi:3,tugas:4,nilaiRata:86},
  {id:2,nama:'Bahasa Inggris',   guru:'Bu Maya Putri',      color:'#d68910',bg:'#fef6e8',icon:'fa-language',           materi:5,tugas:3,nilaiRata:90},
  {id:3,nama:'Bahasa Indonesia', guru:'Bu Rina Hartati',    color:'#7d3c98',bg:'#f4f0fc',icon:'fa-pen-nib',            materi:4,tugas:2,nilaiRata:84},
  {id:4,nama:'PKK',              guru:'Pak Andi Wibowo',    color:'#1a6fa5',bg:'#eaf4fb',icon:'fa-laptop-code',        materi:2,tugas:3,nilaiRata:78},
  {id:5,nama:'Pemrograman Dasar',guru:'Pak Rudi Firmansyah',color:'#27ae60',bg:'#eef6f0',icon:'fa-code',              materi:3,tugas:2,nilaiRata:94},
  {id:6,nama:'Jaringan Komputer',guru:'Pak Dedi Susanto',   color:'#c0392b',bg:'#fef2f2',icon:'fa-network-wired',     materi:2,tugas:1,nilaiRata:80},
];

const materiAll = [
  {id:1,judul:'Modul Limit Fungsi',          mapel:'Matematika',       guru:'Pak Irwan',tgl:'20 Feb 2026',tipe:'modul',status:'belum',isNew:true},
  {id:2,judul:'Modul Reading Comprehension', mapel:'Bahasa Inggris',   guru:'Bu Maya',  tgl:'18 Feb 2026',tipe:'doc',  status:'belum',isNew:true},
  {id:3,judul:'PPT Trigonometri',            mapel:'Matematika',       guru:'Pak Irwan',tgl:'15 Feb 2026',tipe:'ppt',  status:'sudah',isNew:false},
  {id:4,judul:'Modul Teks Eksposisi',        mapel:'Bahasa Indonesia', guru:'Bu Rina',  tgl:'12 Feb 2026',tipe:'modul',status:'sudah',isNew:false},
  {id:5,judul:'Video Integral Dasar',        mapel:'Matematika',       guru:'Pak Irwan',tgl:'10 Feb 2026',tipe:'video',status:'sudah',isNew:false},
  {id:6,judul:'Modul Pemrograman Web',       mapel:'PKK',              guru:'Pak Andi', tgl:'8 Feb 2026', tipe:'modul',status:'sudah',isNew:false},
  {id:7,judul:'Materi Jaringan LAN',         mapel:'Jaringan Komputer',guru:'Pak Dedi', tgl:'5 Feb 2026', tipe:'doc',  status:'sudah',isNew:false},
  {id:8,judul:'Modul Python Dasar',          mapel:'Pemrograman Dasar',guru:'Pak Rudi', tgl:'3 Feb 2026', tipe:'modul',status:'sudah',isNew:false},
];

const tugasAll = [
  {id:1,judul:'Kuis Trigonometri',    mapel:'Matematika',      guru:'Pak Irwan',tipe:'kuis', deadline:'23 Feb 2026',status:'belum',nilai:null,daysLeft:1},
  {id:2,judul:'Tugas Limit Fungsi',   mapel:'Matematika',      guru:'Pak Irwan',tipe:'tugas',deadline:'25 Feb 2026',status:'belum',nilai:null,daysLeft:3},
  {id:3,judul:'Essay Pemrograman Web',mapel:'PKK',             guru:'Pak Andi', tipe:'tugas',deadline:'2 Mar 2026', status:'belum',nilai:null,daysLeft:8},
  {id:4,judul:'Latihan Integral',     mapel:'Matematika',      guru:'Pak Irwan',tipe:'tugas',deadline:'18 Feb 2026',status:'sudah',nilai:92,  kumpulTgl:'17 Feb 2026'},
  {id:5,judul:'Kuis Kosakata Inggris',mapel:'Bahasa Inggris',  guru:'Bu Maya',  tipe:'kuis', deadline:'15 Feb 2026',status:'sudah',nilai:88,  kumpulTgl:'14 Feb 2026'},
  {id:6,judul:'Essay Teks Laporan',   mapel:'Bahasa Indonesia',guru:'Bu Rina',  tipe:'tugas',deadline:'10 Feb 2026',status:'sudah',nilai:85,  kumpulTgl:'9 Feb 2026'},
  {id:7,judul:'Kuis Algoritma',       mapel:'Pemrograman Dasar',guru:'Pak Rudi',tipe:'kuis', deadline:'5 Feb 2026', status:'sudah',nilai:94,  kumpulTgl:'4 Feb 2026'},
  {id:8,judul:'Latihan Teks Narasi',  mapel:'Bahasa Indonesia',guru:'Bu Rina',  tipe:'tugas',deadline:'1 Feb 2026', status:'sudah',nilai:80,  kumpulTgl:'1 Feb 2026'},
];

const nilaiPerMapel = {
  'Matematika':       [{judul:'Latihan Integral',nilai:92},{judul:'Kuis Trigonometri',nilai:null}],
  'Bahasa Inggris':   [{judul:'Kuis Kosakata Inggris',nilai:88}],
  'Bahasa Indonesia': [{judul:'Essay Teks Laporan',nilai:85},{judul:'Latihan Teks Narasi',nilai:80}],
  'PKK':              [],
  'Pemrograman Dasar':[{judul:'Kuis Algoritma',nilai:94}],
  'Jaringan Komputer':[],
};

const komentarGuru = [
  {guru:'Pak Irwan',inisial:'IW',tipe:'positif',   tag:'Kerja Bagus',       teks:'Latihan Integral dikerjakan dengan sangat baik dan terstruktur. Pertahankan!',tgl:'18 Feb 2026'},
  {guru:'Bu Maya',  inisial:'MY',tipe:'semangat',  tag:'Semangat Belajar',  teks:'Terus pertahankan semangat belajar B. Inggrismu. Kamu menunjukkan kemajuan pesat!',tgl:'15 Feb 2026'},
  {guru:'Bu Rina',  inisial:'RI',tipe:'aktif',     tag:'Aktif di Kelas',    teks:'Aurel selalu aktif dalam diskusi kelas. Pertahankan ya!',tgl:'10 Feb 2026'},
  {guru:'Pak Rudi', inisial:'RF',tipe:'perlu-usaha',tag:'Perlu Lebih Berusaha',teks:'Nilai sudah bagus, tapi perdalam lagi konsep looping dan rekursif ya.',tgl:'5 Feb 2026'},
];

const pengumumanData = [
  {guru:'Pak Irwan',mapel:'Matematika',  judul:'Jadwal Ulangan Harian',        isi:'UH Trigonometri dilaksanakan Jumat, 28 Feb 2026 pukul 08.00. Pelajari limit dan trigonometri!',tgl:'20 Feb 2026',tag:'mapel',isNew:true},
  {guru:'Bu Maya',  mapel:'B. Inggris',  judul:'Link Materi Tambahan',         isi:'Video pembahasan Reading Comprehension telah diupload. Akses melalui menu Materi sebelum kuis minggu depan.',tgl:'18 Feb 2026',tag:'mapel',isNew:true},
  {guru:'Bu Rina',  mapel:'B. Indonesia',judul:'Deadline Tugas Diperpanjang',   isi:'Deadline Essay Teks Eksposisi diperpanjang hingga 5 Maret 2026 karena ada kegiatan sekolah.',tgl:'15 Feb 2026',tag:'umum',isNew:false},
  {guru:'Pak Irwan',mapel:'Matematika',  judul:'Reminder Tugas Limit',         isi:'Ingat! Tugas Limit Fungsi deadline 25 Feb. Baca dulu Modul Limit sebelum mengerjakan.',tgl:'12 Feb 2026',tag:'mapel',isNew:false},
];

const tipeIcon  = {modul:'fa-book',video:'fa-circle-play',ppt:'fa-file-powerpoint',doc:'fa-file-word'};
const tipeClass = {modul:'modul',video:'video',ppt:'ppt',doc:'doc'};
let currentTugasId = null;
let currentMapelId = null;

/* ════ NAVIGATION ════ */
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+page)?.classList.add('active');
  const navMap = {dashboard:0,mapel:1,'detail-mapel':1,materi:2,tugas:3,nilai:4,pengumuman:5,komentar:6};
  document.querySelectorAll('.nav-item')[navMap[page]??0]?.classList.add('active');
  const titles = {
    dashboard:      ['Dashboard Siswa',   'Selamat datang, Aurel Putri — XI RPL 1'],
    mapel:          ['Mata Pelajaran',    'Semua mapel yang kamu ikuti semester ini'],
    'detail-mapel': ['Detail Mapel',      'Materi, tugas, dan nilai mapel ini'],
    materi:         ['Materi',            'Semua materi dari guru-gurumu'],
    tugas:          ['Tugas & Kuis',      'Kumpulkan tugasmu sebelum deadline'],
    nilai:          ['Nilai Saya',        'Rekap nilai dari semua tugas yang sudah dinilai'],
    pengumuman:     ['Pengumuman',        'Informasi terbaru dari guru'],
    komentar:       ['Komentar Guru',     'Evaluasi dan masukan dari guru-gurumu'],
  };
  const [t,s] = titles[page]||titles.dashboard;
  document.getElementById('topbar-title').textContent = t;
  document.getElementById('topbar-sub').textContent   = s;
  if (page==='mapel')      renderMapelGrid();
  if (page==='materi')     renderAllMateri();
  if (page==='tugas')      renderAllTugas();
  if (page==='nilai')      renderNilai();
  if (page==='pengumuman') renderPengumuman();
  if (page==='komentar')   renderKomentar();
}

/* ════ MAPEL ════ */
function renderMapelGrid() {
  document.getElementById('mapel-grid').innerHTML = mapelData.map(m=>`
    <div class="mapel-card" onclick="bukaMapel(${m.id})" style="border-top:4px solid ${m.color}">
      <div class="mapel-card-icon" style="background:${m.bg};color:${m.color}"><i class="fa-solid ${m.icon}"></i></div>
      <h3>${m.nama}</h3><p>${m.guru}</p>
      <div class="mapel-card-meta">
        <span class="meta-chip"><i class="fa-solid fa-book"></i>${m.materi} Materi</span>
        <span class="meta-chip"><i class="fa-solid fa-clipboard"></i>${m.tugas} Tugas</span>
      </div>
      <div class="mapel-progress">
        <div class="mapel-progress-label"><span>Rata-rata Nilai</span><span style="color:${m.color};font-weight:700">${m.nilaiRata}</span></div>
        <div class="mapel-progress-track"><div class="mapel-progress-fill" style="width:${m.nilaiRata}%;background:${m.color}"></div></div>
      </div>
    </div>`).join('');
}

function bukaMapel(id) {
  currentMapelId = id;
  const m = mapelData.find(x=>x.id===id);
  document.getElementById('detail-mapel-judul').textContent = m.nama;
  document.getElementById('detail-mapel-sub').textContent   = m.guru+' • XI RPL 1';
  const mats = materiAll.filter(mt=>mt.mapel===m.nama);
  document.getElementById('dm-materi-list').innerHTML = mats.length ? mats.map(mt=>materiHTML(mt)).join('') : '<div class="empty-state"><i class="fa-solid fa-folder-open"></i><p>Belum ada materi.</p></div>';
  const tugs = tugasAll.filter(t=>t.mapel===m.nama);
  document.getElementById('dm-tugas-list').innerHTML = tugs.length ? tugs.map(t=>tugasCardHTML(t)).join('') : '<div class="empty-state" style="background:#fff;border-radius:14px;padding:40px"><i class="fa-solid fa-clipboard-list"></i><p>Belum ada tugas.</p></div>';
  const ns = nilaiPerMapel[m.nama]||[];
  const avg = ns.filter(n=>n.nilai).length ? Math.round(ns.filter(n=>n.nilai).reduce((s,n)=>s+n.nilai,0)/ns.filter(n=>n.nilai).length) : null;
  document.getElementById('dm-nilai-wrap').innerHTML = `
    <div class="data-card-header" style="background:linear-gradient(135deg,#f2f6f3,#eaf1eb)">
      <h3>Nilai ${m.nama}</h3>
      <span style="font-size:22px;font-weight:800;color:${avg?nilaiColor(avg):'var(--text-muted)'}">${avg??'—'}</span>
    </div>
    ${ns.length ? ns.map(n=>`<div class="nilai-row"><span class="label">${n.judul}</span><span class="val" style="color:${n.nilai?nilaiColor(n.nilai):'var(--text-muted)'}">${n.nilai??'— Belum dinilai'}</span></div>`).join('') : '<div class="empty-state"><i class="fa-solid fa-star"></i><p>Belum ada nilai.</p></div>'}`;
  document.querySelectorAll('#page-detail-mapel .tab-btn').forEach((b,i)=>b.classList.toggle('active',i===0));
  document.querySelectorAll('#page-detail-mapel .tab-content').forEach((c,i)=>c.classList.toggle('active',i===0));
  navigateTo('detail-mapel');
}

/* ════ MATERI ════ */
function materiHTML(mt) {
  return `<div class="materi-item" onclick="bukaMateri(${mt.id})">
    <div class="materi-icon ${tipeClass[mt.tipe]||'modul'}"><i class="fa-solid ${tipeIcon[mt.tipe]||'fa-file'}"></i></div>
    <div class="materi-body">
      <h4>${mt.judul}${mt.isNew?'<span class="materi-new">Baru</span>':''}</h4>
      <p>${mt.mapel} • ${mt.guru} • ${mt.tgl}</p>
    </div>
    <span class="badge-status ${mt.status==='sudah'?'sudah':'belum'}">${mt.status==='sudah'?'Sudah Dibuka':'Belum Dibuka'}</span>
  </div>`;
}

function renderAllMateri(filter='',mapelF='') {
  const rows = materiAll.filter(m=>{
    const t = m.judul.toLowerCase().includes(filter.toLowerCase());
    const s = !mapelF || m.mapel.includes(mapelF);
    return t&&s;
  });
  document.getElementById('all-materi-list').innerHTML = rows.length ? rows.map(m=>materiHTML(m)).join('') : '<div class="empty-state"><i class="fa-solid fa-folder-open"></i><p>Tidak ada materi.</p></div>';
}

function filterMateri(v='') {
  renderAllMateri(v, document.getElementById('filter-mapel-materi')?.value||'');
}

function bukaMateri(id) {
  const m = materiAll.find(x=>x.id===id);
  if (!m) return;
  document.getElementById('modal-materi-judul').innerHTML = `<i class="fa-solid ${tipeIcon[m.tipe]||'fa-file'}" style="color:var(--info)"></i> ${m.judul}`;
  document.getElementById('modal-materi-info').textContent = m.mapel+' • '+m.guru+' • '+m.tgl;
  document.getElementById('modal-materi-nama').textContent = m.judul;
  m.status='sudah'; m.isNew=false;
  openModal('modal-materi');
  document.getElementById('badge-materi-baru').textContent = materiAll.filter(x=>x.isNew).length;
}

function downloadMateri() { showToast('Mengunduh materi...','info'); closeModal('modal-materi'); }

/* ════ TUGAS ════ */
function nilaiColor(n) { return n>=90?'var(--primary)':n>=75?'var(--warn)':'var(--danger)'; }
function countdownColor(d) { return d<=1?'red':d<=3?'orange':'green'; }
function countdownLabel(d) { if(d<=0)return 'Sudah lewat!'; if(d===1)return 'Deadline besok!'; return d+' hari lagi'; }

function tugasCardHTML(t) {
  if (t.status==='belum') {
    const cc = countdownColor(t.daysLeft);
    return `<div class="tugas-card aktif">
      <div class="tugas-card-top">
        <div>
          <span class="meta-chip" style="margin-bottom:8px;display:inline-flex"><i class="fa-solid fa-${t.tipe==='kuis'?'pen-to-square':'clipboard-list'}"></i> ${t.tipe==='kuis'?'Kuis':'Tugas'}</span>
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
          <span class="meta-chip" style="margin-bottom:8px;display:inline-flex"><i class="fa-solid fa-${t.tipe==='kuis'?'pen-to-square':'clipboard-list'}"></i> ${t.tipe==='kuis'?'Kuis':'Tugas'}</span>
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
        <span style="font-size:22px;font-weight:800;color:${nc}">${t.nilai??'— Belum dinilai'}</span>
      </div>
    </div>`;
  }
}

function renderAllTugas() {
  const aktif   = tugasAll.filter(t=>t.status==='belum');
  const selesai = tugasAll.filter(t=>t.status==='sudah');
  document.getElementById('tugas-aktif-list').innerHTML   = aktif.length   ? aktif.map(t=>tugasCardHTML(t)).join('')   : '<div class="empty-state" style="background:#fff;border-radius:14px;padding:40px"><i class="fa-solid fa-circle-check" style="color:var(--primary)"></i><p>Semua tugas sudah dikumpulkan! 🎉</p></div>';
  document.getElementById('tugas-selesai-list').innerHTML = selesai.length  ? selesai.map(t=>tugasCardHTML(t)).join('') : '<div class="empty-state" style="background:#fff;border-radius:14px;padding:40px"><i class="fa-solid fa-clipboard-list"></i><p>Belum ada tugas yang dikumpulkan.</p></div>';
  document.getElementById('tab-count-aktif').textContent   = aktif.length;
  document.getElementById('tab-count-selesai').textContent = selesai.length;
  document.getElementById('badge-tugas').textContent = aktif.length;
  document.getElementById('dash-tugas').textContent  = aktif.length;
  document.getElementById('dash-selesai').textContent= selesai.length;
}

function openKumpulModal(id) {
  const t = tugasAll.find(x=>x.id===id);
  if (!t) return;
  currentTugasId = id;
  document.getElementById('modal-tugas-judul').textContent = t.judul;
  document.getElementById('modal-tugas-info').textContent  = t.mapel+' • '+t.guru+' • Deadline: '+t.deadline;
  document.getElementById('catatan-tugas').value='';
  document.getElementById('nama-file-jawaban').textContent='';
  document.getElementById('upload-area-jawaban').querySelector('h4').textContent='Klik atau seret file ke sini';
  openModal('modal-kumpul');
}

function submitTugas() {
  const t = tugasAll.find(x=>x.id===currentTugasId);
  if (!t) return;
  t.status='sudah'; t.kumpulTgl=today();
  closeModal('modal-kumpul');
  renderAllTugas();
  showToast('Tugas "'+t.judul+'" berhasil dikumpulkan!','success');
}

/* ════ NILAI ════ */
function renderNilai() {
  const selesai = tugasAll.filter(t=>t.status==='sudah');
  document.getElementById('nilai-list').innerHTML = mapelData.map(m=>{
    const rows = selesai.filter(t=>t.mapel===m.nama);
    if (!rows.length) return '';
    const avg = rows.filter(r=>r.nilai).length ? Math.round(rows.filter(r=>r.nilai).reduce((s,r)=>s+r.nilai,0)/rows.filter(r=>r.nilai).length) : null;
    return `<div class="nilai-card">
      <div class="nilai-card-header">
        <div style="width:36px;height:36px;border-radius:10px;background:${m.bg};color:${m.color};display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0"><i class="fa-solid ${m.icon}"></i></div>
        <h3>${m.nama}</h3>
        <span style="margin-left:auto;font-size:22px;font-weight:800;color:${avg?nilaiColor(avg):'var(--text-muted)'}">${avg??'—'}</span>
      </div>
      ${rows.map(r=>`<div class="nilai-row"><span class="label">${r.judul}</span><span class="val" style="color:${r.nilai?nilaiColor(r.nilai):'var(--text-muted)'}">${r.nilai??'— Belum dinilai'}</span></div>`).join('')}
    </div>`;
  }).filter(Boolean).join('');
}

/* ════ PENGUMUMAN ════ */
function renderPengumuman() {
  document.getElementById('peng-list').innerHTML = pengumumanData.map(p=>`
    <div class="peng-item ${p.isNew?'peng-unread':''}">
      <div class="peng-meta">
        <span class="peng-tag ${p.tag}">${p.tag==='mapel'?p.mapel:'Umum'}</span>
        <span class="peng-time">${p.guru} • ${p.tgl}</span>
        ${p.isNew?'<span style="background:var(--danger);color:#fff;font-size:10px;padding:1px 7px;border-radius:99px;font-weight:700">Baru</span>':''}
      </div>
      <h4>${p.judul}</h4>
      <p>${p.isi}</p>
    </div>`).join('');
}

/* ════ KOMENTAR ════ */
function renderKomentar() {
  document.getElementById('komentar-list').innerHTML = komentarGuru.map(k=>`
    <div class="komentar-item">
      <div class="kom-avatar">${k.inisial}</div>
      <div class="kom-body">
        <div class="kom-meta">
          <span class="kom-name">${k.guru}</span>
          <span class="kom-tag ${k.tipe}">${k.tag}</span>
          <span class="kom-time">${k.tgl}</span>
        </div>
        <p class="kom-text">${k.teks}</p>
      </div>
    </div>`).join('');
}

/* ════ TABS ════ */
function switchTab(tabId, btn) {
  const parent = btn.closest('.page')||document.body;
  parent.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  parent.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId)?.classList.add('active');
}

/* ════ HELPERS ════ */
function today(){ return new Date().toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'}); }
function previewFileUpload(input){ if(input.files[0]){ document.getElementById('nama-file-jawaban').textContent='📎 '+input.files[0].name; document.getElementById('upload-area-jawaban').querySelector('h4').textContent=input.files[0].name; } }
function openModal(id){ document.getElementById(id).classList.add('open'); }
function closeModal(id){ document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(ov=>ov.addEventListener('click',e=>{ if(e.target===ov) closeModal(ov.id); }));
function toggleNotif(){ document.getElementById('notif-panel').classList.toggle('open'); }
function markAllRead(){ document.querySelectorAll('.notif-item.unread').forEach(el=>el.classList.remove('unread')); document.getElementById('notif-dot')?.remove(); }
document.addEventListener('click',e=>{ if(!e.target.closest('#notif-panel')&&!e.target.closest('#notif-btn')) document.getElementById('notif-panel').classList.remove('open'); });
function doLogout(){ window.location.href='login.html'; }
function showToast(msg,type='success'){ const c=document.getElementById('toast-container'); const t=document.createElement('div'); t.className=`toast ${type}`; t.innerHTML=`<span>${type==='success'?'✅':type==='warn'?'⚠️':'ℹ️'}</span><span>${msg}</span>`; c.appendChild(t); t.addEventListener('click',()=>removeToast(t)); setTimeout(()=>removeToast(t),4000); }
function removeToast(t){ t.classList.add('out'); setTimeout(()=>t.remove(),350); }
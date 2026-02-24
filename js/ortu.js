/* ══════════════════════════════════════════════
   orangtua-dashboard.js
   SMK Negeri 12 — Dashboard Orang Tua
   Login: ibu_aurel@gmail.com / password
══════════════════════════════════════════════ */

/* ════ DATA ════ */
const mapelData = [
  { id:1, nama:'Matematika',        guru:'Pak Irwan Setiawan',  inisial:'IW', color:'#5F7161', bg:'#eef6f0', icon:'fa-square-root-variable', nilaiRata:86 },
  { id:2, nama:'Bahasa Inggris',    guru:'Bu Maya Putri',       inisial:'MY', color:'#d68910', bg:'#fef6e8', icon:'fa-language',              nilaiRata:90 },
  { id:3, nama:'Bahasa Indonesia',  guru:'Bu Rina Hartati',     inisial:'RI', color:'#7d3c98', bg:'#f4f0fc', icon:'fa-pen-nib',               nilaiRata:84 },
  { id:4, nama:'PKK',               guru:'Pak Andi Wibowo',     inisial:'AW', color:'#1a6fa5', bg:'#eaf4fb', icon:'fa-laptop-code',           nilaiRata:78 },
  { id:5, nama:'Pemrograman Dasar', guru:'Pak Rudi Firmansyah', inisial:'RF', color:'#27ae60', bg:'#eef6f0', icon:'fa-code',                  nilaiRata:94 },
  { id:6, nama:'Jaringan Komputer', guru:'Pak Dedi Susanto',    inisial:'DS', color:'#c0392b', bg:'#fef2f2', icon:'fa-network-wired',         nilaiRata:80 },
];

const tugasAll = [
  { id:1, judul:'Kuis Trigonometri',     mapel:'Matematika',        guru:'Pak Irwan', tipe:'kuis',  deadline:'23 Feb 2026', status:'belum', nilai:null, daysLeft:1 },
  { id:2, judul:'Tugas Limit Fungsi',    mapel:'Matematika',        guru:'Pak Irwan', tipe:'tugas', deadline:'25 Feb 2026', status:'belum', nilai:null, daysLeft:3 },
  { id:3, judul:'Essay Pemrograman Web', mapel:'PKK',               guru:'Pak Andi',  tipe:'tugas', deadline:'2 Mar 2026',  status:'belum', nilai:null, daysLeft:8 },
  { id:4, judul:'Latihan Integral',      mapel:'Matematika',        guru:'Pak Irwan', tipe:'tugas', deadline:'18 Feb 2026', status:'sudah', nilai:92,   kumpulTgl:'17 Feb 2026' },
  { id:5, judul:'Kuis Kosakata Inggris', mapel:'Bahasa Inggris',    guru:'Bu Maya',   tipe:'kuis',  deadline:'15 Feb 2026', status:'sudah', nilai:88,   kumpulTgl:'14 Feb 2026' },
  { id:6, judul:'Essay Teks Laporan',    mapel:'Bahasa Indonesia',  guru:'Bu Rina',   tipe:'tugas', deadline:'10 Feb 2026', status:'sudah', nilai:85,   kumpulTgl:'9 Feb 2026' },
  { id:7, judul:'Kuis Algoritma',        mapel:'Pemrograman Dasar', guru:'Pak Rudi',  tipe:'kuis',  deadline:'5 Feb 2026',  status:'sudah', nilai:94,   kumpulTgl:'4 Feb 2026' },
  { id:8, judul:'Latihan Teks Narasi',   mapel:'Bahasa Indonesia',  guru:'Bu Rina',   tipe:'tugas', deadline:'1 Feb 2026',  status:'sudah', nilai:80,   kumpulTgl:'1 Feb 2026' },
];

const nilaiPerMapel = {
  'Matematika':        [{ tugas:'Latihan Integral',      nilai:92   }, { tugas:'Kuis Trigonometri',    nilai:null }],
  'Bahasa Inggris':    [{ tugas:'Kuis Kosakata Inggris', nilai:88   }],
  'Bahasa Indonesia':  [{ tugas:'Essay Teks Laporan',    nilai:85   }, { tugas:'Latihan Teks Narasi',  nilai:80   }],
  'PKK':               [],
  'Pemrograman Dasar': [{ tugas:'Kuis Algoritma',        nilai:94   }],
  'Jaringan Komputer': [],
};

const pengumumanData = [
  { guru:'Pak Irwan', mapel:'Matematika',   judul:'Jadwal Ulangan Harian',       isi:'UH Trigonometri dilaksanakan Jumat, 28 Feb 2026 pukul 08.00. Mohon ingatkan putra/putri untuk mempersiapkan diri.', tgl:'20 Feb 2026', tag:'mapel', isNew:true },
  { guru:'Bu Maya',   mapel:'B. Inggris',   judul:'Materi Tambahan Tersedia',    isi:'Video pembahasan Reading Comprehension telah diupload. Mohon anak-anak mengaksesnya sebelum kuis minggu depan.', tgl:'18 Feb 2026', tag:'mapel', isNew:true },
  { guru:'Bu Rina',   mapel:'B. Indonesia', judul:'Perpanjangan Deadline Tugas', isi:'Deadline Essay Teks Eksposisi diperpanjang hingga 5 Maret 2026. Pastikan putra/putri menyelesaikannya tepat waktu.', tgl:'15 Feb 2026', tag:'umum', isNew:false },
  { guru:'Pak Irwan', mapel:'Matematika',   judul:'Reminder Tugas Limit',        isi:'Tugas Limit Fungsi deadline 25 Feb. Mohon orang tua mengingatkan anak untuk segera menyelesaikan tugas ini.', tgl:'12 Feb 2026', tag:'mapel', isNew:false },
];

let komentarList = [
  { tipe:'semangat',       label:'Semangat Belajar!',  teks:'Ayo Aurel, semangat terus belajarnya! Mama yakin kamu bisa dapat nilai terbaik.',  tgl:'19 Feb 2026' },
  { tipe:'bangga',         label:'Bangga sama Kamu',   teks:'Nilai Integralmu bagus banget, Nak! Mama sangat bangga sama kamu.',                 tgl:'18 Feb 2026' },
  { tipe:'ingatkan',       label:'Ingat Tugasnya!',    teks:'Jangan lupa kerjakan Tugas Limit sebelum deadline ya sayang!',                      tgl:'14 Feb 2026' },
];

const enumLabel = {
  'semangat':        'Semangat Belajar!',
  'bangga':          'Bangga sama Kamu',
  'perhatian':       'Mama/Papa Sayang',
  'ingatkan':        'Ingat Tugasnya!',
  'rajin':           'Rajin Belajar Ya',
  'jangan-menyerah': 'Jangan Menyerah!',
};

let selectedEnum = 'semangat';

/* ════ NAVIGATION ════ */
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  document.getElementById('page-' + page)?.classList.add('active');

  const navIdx = { dashboard:0, 'profil-anak':1, nilai:2, tugas:3, pengumuman:4, komentar:5 };
  document.querySelectorAll('.nav-item')[navIdx[page] ?? 0]?.classList.add('active');

  const titles = {
    dashboard:     ['Dashboard Orang Tua',  'Selamat datang, Ibu Aurel — Monitoring perkembangan anak'],
    'profil-anak': ['Profil Anak',          'Informasi lengkap tentang Aurel Putri'],
    nilai:         ['Nilai Anak',           'Rekap nilai semua tugas yang sudah dinilai'],
    tugas:         ['Tugas & Kuis',         'Pantau status pengerjaan tugas Aurel Putri'],
    pengumuman:    ['Pengumuman',           'Informasi terbaru dari guru'],
    komentar:      ['Komentar ke Anak',     'Kirim motivasi dan dukungan untuk Aurel Putri'],
  };
  const [t, s] = titles[page] || titles.dashboard;
  document.getElementById('topbar-title').textContent = t;
  document.getElementById('topbar-sub').textContent   = s;

  if (page === 'profil-anak') renderProfilAnak();
  if (page === 'nilai')       renderNilai();
  if (page === 'tugas')       renderTugas();
  if (page === 'pengumuman')  renderPengumuman();
  if (page === 'komentar')    renderKomentar();
}

/* ════ PROFIL ANAK ════ */
function renderProfilAnak() {
  document.getElementById('mapel-profil-list').innerHTML = mapelData.map(m => `
    <div class="mapel-profil-item">
      <div class="mpi-icon" style="background:${m.bg};color:${m.color}">
        <i class="fa-solid ${m.icon}"></i>
      </div>
      <div class="mpi-info">
        <h4>${m.nama}</h4>
        <p>${m.guru}</p>
      </div>
      <div class="mpi-nilai" style="color:${nilaiColor(m.nilaiRata)}">${m.nilaiRata}</div>
    </div>
  `).join('');

  document.getElementById('guru-profil-list').innerHTML = mapelData.map(m => `
    <div class="guru-profil-item">
      <div class="gpi-avatar">${m.inisial}</div>
      <div class="gpi-info">
        <h4>${m.guru}</h4>
        <p>${m.nama}</p>
      </div>
    </div>
  `).join('');
}

/* ════ NILAI ════ */
function nilaiColor(n) {
  if (!n && n !== 0) return 'var(--text-muted)';
  return n >= 90 ? 'var(--primary)' : n >= 75 ? 'var(--warn)' : 'var(--danger)';
}

function renderNilai() {
  const selesai = tugasAll.filter(t => t.status === 'sudah');
  document.getElementById('nilai-list').innerHTML = mapelData.map(m => {
    const rows = selesai.filter(t => t.mapel === m.nama);
    if (!rows.length) return '';
    const dinilai = rows.filter(r => r.nilai);
    const avg = dinilai.length ? Math.round(dinilai.reduce((s,r) => s + r.nilai, 0) / dinilai.length) : null;
    return `
      <div class="nilai-card">
        <div class="nilai-card-header">
          <div style="width:36px;height:36px;border-radius:10px;background:${m.bg};color:${m.color};display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0">
            <i class="fa-solid ${m.icon}"></i>
          </div>
          <h3>${m.nama}</h3>
          <span style="margin-left:auto;font-size:22px;font-weight:800;color:${nilaiColor(avg)}">${avg ?? '—'}</span>
        </div>
        ${rows.map(r => `
          <div class="nilai-row">
            <span class="label">${r.judul}</span>
            <span class="val" style="color:${nilaiColor(r.nilai)}">${r.nilai ?? '— Belum dinilai'}</span>
          </div>
        `).join('')}
      </div>`;
  }).filter(Boolean).join('') || '<div class="empty-state"><i class="fa-solid fa-star"></i><p>Belum ada nilai yang masuk.</p></div>';
}

/* ════ TUGAS ════ */
function countdownColor(d) { return d <= 1 ? 'red' : d <= 3 ? 'orange' : 'green'; }
function countdownLabel(d) {
  if (d <= 0) return 'Sudah lewat deadline!';
  if (d === 1) return 'Deadline besok!';
  return d + ' hari lagi';
}

function tugasCardHTML(t) {
  if (t.status === 'belum') {
    const cc = countdownColor(t.daysLeft);
    return `
      <div class="tugas-card aktif">
        <div class="tugas-card-top">
          <div>
            <span class="meta-chip" style="margin-bottom:8px;display:inline-flex">
              <i class="fa-solid fa-${t.tipe === 'kuis' ? 'pen-to-square' : 'clipboard-list'}"></i>
              ${t.tipe === 'kuis' ? 'Kuis' : 'Tugas'}
            </span>
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
          <span style="font-size:11.5px;color:var(--text-muted);font-style:italic">Belum dikumpulkan oleh anak</span>
        </div>
      </div>`;
  } else {
    const nc = t.nilai ? nilaiColor(t.nilai) : 'var(--text-muted)';
    return `
      <div class="tugas-card selesai">
        <div class="tugas-card-top">
          <div>
            <span class="meta-chip" style="margin-bottom:8px;display:inline-flex">
              <i class="fa-solid fa-${t.tipe === 'kuis' ? 'pen-to-square' : 'clipboard-list'}"></i>
              ${t.tipe === 'kuis' ? 'Kuis' : 'Tugas'}
            </span>
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

function renderTugas() {
  const aktif   = tugasAll.filter(t => t.status === 'belum');
  const selesai = tugasAll.filter(t => t.status === 'sudah');

  document.getElementById('tugas-aktif-list').innerHTML = aktif.length
    ? aktif.map(t => tugasCardHTML(t)).join('')
    : '<div class="empty-state" style="background:#fff;border-radius:14px;padding:40px"><i class="fa-solid fa-circle-check" style="color:var(--primary)"></i><p>Semua tugas anak sudah dikumpulkan! 🎉</p></div>';

  document.getElementById('tugas-selesai-list').innerHTML = selesai.length
    ? selesai.map(t => tugasCardHTML(t)).join('')
    : '<div class="empty-state" style="background:#fff;border-radius:14px;padding:40px"><i class="fa-solid fa-clipboard-list"></i><p>Belum ada tugas yang dikumpulkan.</p></div>';

  document.getElementById('tab-count-belum').textContent   = aktif.length;
  document.getElementById('tab-count-selesai').textContent = selesai.length;
  document.getElementById('badge-tugas').textContent  = aktif.length;
  document.getElementById('dash-belum').textContent   = aktif.length;
  document.getElementById('dash-selesai').textContent = selesai.length;
}

/* ════ PENGUMUMAN ════ */
function renderPengumuman() {
  document.getElementById('peng-list').innerHTML = pengumumanData.map(p => `
    <div class="peng-item ${p.isNew ? 'peng-unread' : ''}">
      <div class="peng-meta">
        <span class="peng-tag ${p.tag}">${p.tag === 'mapel' ? p.mapel : 'Umum'}</span>
        <span class="peng-time">${p.guru} · ${p.tgl}</span>
        ${p.isNew ? '<span style="background:var(--danger);color:#fff;font-size:10px;padding:1px 7px;border-radius:99px;font-weight:700">Baru</span>' : ''}
      </div>
      <h4>${p.judul}</h4>
      <p>${p.isi}</p>
    </div>
  `).join('');

  document.getElementById('badge-peng').textContent = pengumumanData.filter(p => p.isNew).length;
}

/* ════ KOMENTAR ════ */
function renderKomentar() {
  document.getElementById('komentar-list').innerHTML = komentarList.length
    ? komentarList.map(k => `
      <div class="kom-item">
        <div class="kom-av-ortu">IA</div>
        <div class="kom-body">
          <div class="kom-meta">
            <span class="kom-name">Ibu Aurel</span>
            <span class="kom-tag ${k.tipe}">${k.label || enumLabel[k.tipe] || k.tipe}</span>
            <span class="kom-time">${k.tgl}</span>
          </div>
          <p class="kom-text">${k.teks || '—'}</p>
        </div>
      </div>`).join('')
    : '<div class="empty-state"><i class="fa-solid fa-comment-dots"></i><p>Belum ada komentar yang dikirimkan.</p></div>';

  document.getElementById('dash-komentar').textContent = komentarList.length;
}

/* ════ ENUM SELECTOR ════ */
function selectEnum(el) {
  document.querySelectorAll('.enum-opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  selectedEnum = el.dataset.val;
}

/* ════ MODAL KOMENTAR ════ */
function openKomentarModal() {
  document.getElementById('kom-teks').value = '';
  document.querySelectorAll('.enum-opt').forEach(o => o.classList.remove('selected'));
  document.querySelector('.enum-opt[data-val="semangat"]').classList.add('selected');
  selectedEnum = 'semangat';
  openModal('modal-komentar');
}

function submitKomentar() {
  const teks = document.getElementById('kom-teks').value.trim();
  komentarList.unshift({
    tipe:  selectedEnum,
    label: enumLabel[selectedEnum] || selectedEnum,
    teks:  teks,
    tgl:   today(),
  });
  closeModal('modal-komentar');
  renderKomentar();
  showToast('Komentar berhasil dikirim ke Aurel Putri! 💬', 'success');
}

/* ════ TABS ════ */
function switchTab(tabId, btn) {
  const parent = btn.closest('.page') || document.body;
  parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId)?.classList.add('active');
}

/* ════ NOTIF ════ */
function toggleNotif() {
  document.getElementById('notif-panel').classList.toggle('open');
}
function markAllRead() {
  document.querySelectorAll('.notif-item.unread').forEach(el => el.classList.remove('unread'));
  document.getElementById('notif-dot')?.remove();
}
document.addEventListener('click', e => {
  if (!e.target.closest('#notif-panel') && !e.target.closest('#notif-btn')) {
    document.getElementById('notif-panel').classList.remove('open');
  }
});

/* ════ MODAL ════ */
function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(ov =>
  ov.addEventListener('click', e => { if (e.target === ov) closeModal(ov.id); })
);

/* ════ TOAST ════ */
function showToast(msg, type = 'success') {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const icon = type === 'success' ? '✅' : type === 'warn' ? '⚠️' : 'ℹ️';
  t.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
  c.appendChild(t);
  t.addEventListener('click', () => removeToast(t));
  setTimeout(() => removeToast(t), 4000);
}
function removeToast(t) {
  t.classList.add('out');
  setTimeout(() => t.remove(), 350);
}

/* ════ HELPERS ════ */
function today() {
  return new Date().toLocaleDateString('id-ID', { day:'numeric', month:'short', year:'numeric' });
}
function doLogout() {
  window.location.href = 'login.html';
}
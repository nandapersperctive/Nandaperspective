/* ═══════════════════════════════════════════
   DATA & PERSISTENCE
═══════════════════════════════════════════ */
const KEY = 'siklus_v2';

const DEFAULT_COA = [
  {code:'1-1100',name:'Kas',type:'Aset',normal:'D'},
  {code:'1-1200',name:'Kas di Bank',type:'Aset',normal:'D'},
  {code:'1-1300',name:'Piutang Usaha',type:'Aset',normal:'D'},
  {code:'1-1400',name:'Persediaan Barang',type:'Aset',normal:'D'},
  {code:'1-1500',name:'Perlengkapan',type:'Aset',normal:'D'},
  {code:'1-1600',name:'Beban Dibayar Dimuka',type:'Aset',normal:'D'},
  {code:'1-2100',name:'Peralatan',type:'Aset',normal:'D'},
  {code:'1-2200',name:'Akum. Penyusutan Peralatan',type:'Aset',normal:'K'},
  {code:'1-2300',name:'Kendaraan',type:'Aset',normal:'D'},
  {code:'1-2400',name:'Akum. Penyusutan Kendaraan',type:'Aset',normal:'K'},
  {code:'1-2500',name:'Bangunan',type:'Aset',normal:'D'},
  {code:'2-1100',name:'Utang Usaha',type:'Liabilitas',normal:'K'},
  {code:'2-1200',name:'Utang Gaji',type:'Liabilitas',normal:'K'},
  {code:'2-1300',name:'Utang Pajak',type:'Liabilitas',normal:'K'},
  {code:'2-1400',name:'Pendapatan Diterima Dimuka',type:'Liabilitas',normal:'K'},
  {code:'2-2100',name:'Utang Bank',type:'Liabilitas',normal:'K'},
  {code:'3-1000',name:'Modal Pemilik',type:'Ekuitas',normal:'K'},
  {code:'3-2000',name:'Prive Pemilik',type:'Ekuitas',normal:'D'},
  {code:'3-9000',name:'Ikhtisar Laba Rugi',type:'Ekuitas',normal:'K'},
  {code:'4-1000',name:'Pendapatan Penjualan',type:'Pendapatan',normal:'K'},
  {code:'4-1100',name:'Pendapatan Jasa',type:'Pendapatan',normal:'K'},
  {code:'4-2000',name:'Pendapatan Lain-lain',type:'Pendapatan',normal:'K'},
  {code:'5-1000',name:'HPP / Beban Pokok',type:'Beban',normal:'D'},
  {code:'5-1100',name:'Beban Gaji',type:'Beban',normal:'D'},
  {code:'5-1200',name:'Beban Sewa',type:'Beban',normal:'D'},
  {code:'5-1300',name:'Beban Listrik & Air',type:'Beban',normal:'D'},
  {code:'5-1400',name:'Beban Perlengkapan',type:'Beban',normal:'D'},
  {code:'5-1500',name:'Beban Penyusutan',type:'Beban',normal:'D'},
  {code:'5-1600',name:'Beban Bunga',type:'Beban',normal:'D'},
  {code:'5-9000',name:'Beban Lain-lain',type:'Beban',normal:'D'},
];

/* ── COA PRESETS PER JENIS PERUSAHAAN ── */
const COA_JASA=[
  {code:'1-1100',name:'Kas',type:'Aset',normal:'D'},
  {code:'1-1200',name:'Kas di Bank',type:'Aset',normal:'D'},
  {code:'1-1300',name:'Piutang Usaha',type:'Aset',normal:'D'},
  {code:'1-1500',name:'Perlengkapan Kantor',type:'Aset',normal:'D'},
  {code:'1-1600',name:'Beban Dibayar Dimuka',type:'Aset',normal:'D'},
  {code:'1-2100',name:'Peralatan Kantor',type:'Aset',normal:'D'},
  {code:'1-2200',name:'Akum. Penyusutan Peralatan',type:'Aset',normal:'K'},
  {code:'2-1100',name:'Utang Usaha',type:'Liabilitas',normal:'K'},
  {code:'2-1200',name:'Utang Gaji',type:'Liabilitas',normal:'K'},
  {code:'2-1300',name:'Pendapatan Diterima Dimuka',type:'Liabilitas',normal:'K'},
  {code:'2-2100',name:'Utang Bank',type:'Liabilitas',normal:'K'},
  {code:'3-1000',name:'Modal Pemilik',type:'Ekuitas',normal:'K'},
  {code:'3-2000',name:'Prive Pemilik',type:'Ekuitas',normal:'D'},
  {code:'3-9000',name:'Ikhtisar Laba Rugi',type:'Ekuitas',normal:'K'},
  {code:'4-1000',name:'Pendapatan Jasa',type:'Pendapatan',normal:'K'},
  {code:'4-2000',name:'Pendapatan Lain-lain',type:'Pendapatan',normal:'K'},
  {code:'5-1100',name:'Beban Gaji',type:'Beban',normal:'D'},
  {code:'5-1200',name:'Beban Sewa',type:'Beban',normal:'D'},
  {code:'5-1300',name:'Beban Listrik & Air',type:'Beban',normal:'D'},
  {code:'5-1400',name:'Beban Perlengkapan',type:'Beban',normal:'D'},
  {code:'5-1500',name:'Beban Penyusutan',type:'Beban',normal:'D'},
  {code:'5-1600',name:'Beban Asuransi',type:'Beban',normal:'D'},
  {code:'5-9000',name:'Beban Lain-lain',type:'Beban',normal:'D'},
];

const COA_DAGANG=[
  {code:'1-1100',name:'Kas',type:'Aset',normal:'D'},
  {code:'1-1200',name:'Kas di Bank',type:'Aset',normal:'D'},
  {code:'1-1300',name:'Piutang Usaha',type:'Aset',normal:'D'},
  {code:'1-1400',name:'Persediaan Barang Dagangan',type:'Aset',normal:'D'},
  {code:'1-1500',name:'Perlengkapan',type:'Aset',normal:'D'},
  {code:'1-1600',name:'Beban Dibayar Dimuka',type:'Aset',normal:'D'},
  {code:'1-2100',name:'Peralatan',type:'Aset',normal:'D'},
  {code:'1-2200',name:'Akum. Penyusutan Peralatan',type:'Aset',normal:'K'},
  {code:'1-2300',name:'Kendaraan',type:'Aset',normal:'D'},
  {code:'1-2400',name:'Akum. Penyusutan Kendaraan',type:'Aset',normal:'K'},
  {code:'2-1100',name:'Utang Usaha',type:'Liabilitas',normal:'K'},
  {code:'2-1200',name:'Utang Gaji',type:'Liabilitas',normal:'K'},
  {code:'2-1300',name:'Utang Pajak',type:'Liabilitas',normal:'K'},
  {code:'2-1400',name:'Pendapatan Diterima Dimuka',type:'Liabilitas',normal:'K'},
  {code:'2-2100',name:'Utang Bank',type:'Liabilitas',normal:'K'},
  {code:'3-1000',name:'Modal Pemilik',type:'Ekuitas',normal:'K'},
  {code:'3-2000',name:'Prive Pemilik',type:'Ekuitas',normal:'D'},
  {code:'3-9000',name:'Ikhtisar Laba Rugi',type:'Ekuitas',normal:'K'},
  {code:'4-1000',name:'Penjualan',type:'Pendapatan',normal:'K'},
  {code:'4-1100',name:'Retur Penjualan',type:'Pendapatan',normal:'D'},
  {code:'4-1200',name:'Diskon Penjualan',type:'Pendapatan',normal:'D'},
  {code:'4-2000',name:'Pendapatan Lain-lain',type:'Pendapatan',normal:'K'},
  {code:'5-1000',name:'Pembelian',type:'Beban',normal:'D'},
  {code:'5-1010',name:'Retur Pembelian',type:'Beban',normal:'K'},
  {code:'5-1020',name:'Diskon Pembelian',type:'Beban',normal:'K'},
  {code:'5-1030',name:'Beban Angkut Masuk',type:'Beban',normal:'D'},
  {code:'5-1100',name:'Beban Gaji',type:'Beban',normal:'D'},
  {code:'5-1200',name:'Beban Sewa',type:'Beban',normal:'D'},
  {code:'5-1300',name:'Beban Listrik & Air',type:'Beban',normal:'D'},
  {code:'5-1400',name:'Beban Perlengkapan',type:'Beban',normal:'D'},
  {code:'5-1500',name:'Beban Penyusutan',type:'Beban',normal:'D'},
  {code:'5-1600',name:'Beban Bunga',type:'Beban',normal:'D'},
  {code:'5-9000',name:'Beban Lain-lain',type:'Beban',normal:'D'},
];

const COA_MANUFAKTUR=[
  {code:'1-1100',name:'Kas',type:'Aset',normal:'D'},
  {code:'1-1200',name:'Kas di Bank',type:'Aset',normal:'D'},
  {code:'1-1300',name:'Piutang Usaha',type:'Aset',normal:'D'},
  {code:'1-1410',name:'Persediaan Bahan Baku',type:'Aset',normal:'D'},
  {code:'1-1420',name:'Persediaan Barang Dalam Proses',type:'Aset',normal:'D'},
  {code:'1-1430',name:'Persediaan Barang Jadi',type:'Aset',normal:'D'},
  {code:'1-1500',name:'Perlengkapan Pabrik',type:'Aset',normal:'D'},
  {code:'1-1600',name:'Beban Dibayar Dimuka',type:'Aset',normal:'D'},
  {code:'1-2100',name:'Mesin & Peralatan',type:'Aset',normal:'D'},
  {code:'1-2200',name:'Akum. Penyusutan Mesin',type:'Aset',normal:'K'},
  {code:'1-2300',name:'Bangunan Pabrik',type:'Aset',normal:'D'},
  {code:'1-2400',name:'Akum. Penyusutan Bangunan',type:'Aset',normal:'K'},
  {code:'2-1100',name:'Utang Usaha',type:'Liabilitas',normal:'K'},
  {code:'2-1200',name:'Utang Gaji',type:'Liabilitas',normal:'K'},
  {code:'2-1300',name:'Utang Pajak',type:'Liabilitas',normal:'K'},
  {code:'2-2100',name:'Utang Bank',type:'Liabilitas',normal:'K'},
  {code:'3-1000',name:'Modal Pemilik',type:'Ekuitas',normal:'K'},
  {code:'3-2000',name:'Prive Pemilik',type:'Ekuitas',normal:'D'},
  {code:'3-9000',name:'Ikhtisar Laba Rugi',type:'Ekuitas',normal:'K'},
  {code:'4-1000',name:'Penjualan',type:'Pendapatan',normal:'K'},
  {code:'4-2000',name:'Pendapatan Lain-lain',type:'Pendapatan',normal:'K'},
  {code:'5-1010',name:'Pemakaian Bahan Baku',type:'Beban',normal:'D'},
  {code:'5-1020',name:'BTKL (Biaya TK Langsung)',type:'Beban',normal:'D'},
  {code:'5-1030',name:'BOP - Penyusutan Mesin',type:'Beban',normal:'D'},
  {code:'5-1040',name:'BOP - Listrik Pabrik',type:'Beban',normal:'D'},
  {code:'5-1050',name:'BOP - Bahan Penolong',type:'Beban',normal:'D'},
  {code:'5-1060',name:'BOP Lain-lain',type:'Beban',normal:'D'},
  {code:'5-2100',name:'Beban Gaji Administrasi',type:'Beban',normal:'D'},
  {code:'5-2200',name:'Beban Sewa',type:'Beban',normal:'D'},
  {code:'5-2300',name:'Beban Listrik & Air (Kantor)',type:'Beban',normal:'D'},
  {code:'5-2400',name:'Beban Penyusutan (Kantor)',type:'Beban',normal:'D'},
  {code:'5-9000',name:'Beban Lain-lain',type:'Beban',normal:'D'},
];

const COA_BY_TYPE={umkm:DEFAULT_COA,jasa:COA_JASA,dagang:COA_DAGANG,manufaktur:COA_MANUFAKTUR};

/* ── IndexedDB storage layer ── */
const IDB_NAME='nanda-akuntansi';
const IDB_VER=1;
let idb=null;
let _saveTimer=null;
let analyticsCache=null;
let periodsListCache=null;

/* Default in-memory state */
let db={
  settings:{company:'Perusahaan Saya',owner:'',address:'',period:'2026-01',currency:'Rp',companyType:null},
  coa:DEFAULT_COA.map(a=>({...a})),
  transactions:[],
  adjustingEntries:[],
  hppData:{},
};

/* IDB helpers */
function idbOpen(){
  return new Promise((res,rej)=>{
    const req=indexedDB.open(IDB_NAME,IDB_VER);
    req.onupgradeneeded=e=>{
      const d=e.target.result;
      if(!d.objectStoreNames.contains('meta'))d.createObjectStore('meta',{keyPath:'id'});
      if(!d.objectStoreNames.contains('periods'))d.createObjectStore('periods',{keyPath:'period'});
    };
    req.onsuccess=e=>res(e.target.result);
    req.onerror=e=>rej(e.target.error);
  });
}
function idbGet(store,key){return new Promise((res,rej)=>{const tx=idb.transaction(store,'readonly');const r=tx.objectStore(store).get(key);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);});}
function idbPut(store,val){return new Promise((res,rej)=>{const tx=idb.transaction(store,'readwrite');const r=tx.objectStore(store).put(val);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);});}
function idbGetAll(store){return new Promise((res,rej)=>{const tx=idb.transaction(store,'readonly');const r=tx.objectStore(store).getAll();r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);});}
function idbDelete(store,key){return new Promise((res,rej)=>{const tx=idb.transaction(store,'readwrite');const r=tx.objectStore(store).delete(key);r.onsuccess=()=>res();r.onerror=()=>rej(r.error);});}
function idbClearAll(){
  return new Promise((res,rej)=>{
    const tx=idb.transaction(['meta','periods'],'readwrite');
    tx.objectStore('meta').clear();tx.objectStore('periods').clear();
    tx.oncomplete=res;tx.onerror=e=>rej(e);
  });
}

/* Async DB init: loads IDB (migrating from localStorage if needed) */
async function initDB(){
  idb=await idbOpen();
  const meta=await idbGet('meta','main');
  if(meta){
    db.settings={...db.settings,...meta.settings};
    db.coa=meta.coa||db.coa;
  } else {
    /* Migrate from old localStorage format */
    try{
      const ls=localStorage.getItem(KEY);
      if(ls){
        const old=JSON.parse(ls);
        if(old.settings)db.settings={...db.settings,...old.settings};
        if(old.coa?.length)db.coa=old.coa;
        db.transactions=old.transactions||[];
        db.adjustingEntries=old.adjustingEntries||[];
        db.hppData=old.hppData||{};
        await idbPut('meta',{id:'main',settings:db.settings,coa:db.coa});
        await idbPut('periods',{period:db.settings.period,transactions:db.transactions,adjustingEntries:db.adjustingEntries,hppData:db.hppData});
        localStorage.removeItem(KEY);
        return;
      }
    }catch(e){}
  }
  /* Load current period data */
  const pd=await idbGet('periods',db.settings.period||'2026-01');
  if(pd){db.transactions=pd.transactions||[];db.adjustingEntries=pd.adjustingEntries||[];db.hppData=pd.hppData||{};}
}

function saveData(){
  analyticsCache=null;periodsListCache=null;
  if(!idb)return;
  clearTimeout(_saveTimer);
  _saveTimer=setTimeout(()=>{
    (async()=>{
      try{
        await idbPut('meta',{id:'main',settings:db.settings,coa:db.coa});
        await idbPut('periods',{period:db.settings.period,transactions:db.transactions,adjustingEntries:db.adjustingEntries,hppData:db.hppData||{}});
      }catch(e){console.error('saveData:',e)}
    })();
  },100);
}

/* Flush pending saves synchronously on page close */
window.addEventListener('beforeunload',()=>{
  clearTimeout(_saveTimer);
  if(!idb)return;
  try{
    const tx=idb.transaction(['meta','periods'],'readwrite');
    tx.objectStore('meta').put({id:'main',settings:db.settings,coa:db.coa});
    tx.objectStore('periods').put({period:db.settings.period,transactions:db.transactions,adjustingEntries:db.adjustingEntries,hppData:db.hppData||{}});
  }catch(e){}
});

/* ═══════════════════════════════════════════
   ACCOUNTING ENGINE
═══════════════════════════════════════════ */
const acc=(c)=>db.coa.find(a=>a.code===c);

function getJournal(type='all'){
  const reg=db.transactions.flatMap(t=>t.entries.map(e=>({...e,date:t.date,ref:t.ref,desc:t.description,kind:'reg'})));
  const adj=db.adjustingEntries.flatMap(t=>t.entries.map(e=>({...e,date:t.date,ref:t.ref,desc:t.description,kind:'adj'})));
  return type==='reg'?reg:type==='adj'?adj:[...reg,...adj];
}

function getLedger(type='all'){
  const j=getJournal(type);
  const b={};
  j.forEach(e=>{
    if(!b[e.account])b[e.account]={D:0,K:0,entries:[]};
    b[e.account].D+=(e.debit||0);
    b[e.account].K+=(e.credit||0);
    b[e.account].entries.push(e);
  });
  return b;
}

function netBal(code,ledger){
  const a=acc(code);if(!a||!ledger[code])return 0;
  const b=ledger[code];
  return a.normal==='D'?b.D-b.K:b.K-b.D;
}

function getTrialBalance(type='all'){
  const led=getLedger(type);
  return db.coa.map(a=>{
    const b=led[a.code]||{D:0,K:0};
    const net=netBal(a.code,led);
    const dr=a.normal==='D'?Math.max(net,0):Math.max(-net,0);
    const cr=a.normal==='K'?Math.max(net,0):Math.max(-net,0);
    return{...a,dr,cr,grossD:b.D,grossK:b.K};
  }).filter(r=>r.dr||r.cr);
}

function getIS(tb){
  const rev=tb.filter(r=>r.type==='Pendapatan');
  const exp=tb.filter(r=>r.type==='Beban');
  const totRev=rev.reduce((s,r)=>s+r.cr,0);
  const totExp=exp.reduce((s,r)=>s+r.dr,0);
  return{rev,exp,totRev,totExp,net:totRev-totExp};
}

function getBS(tb,netIncome){
  const assets=tb.filter(r=>r.type==='Aset');
  const liab=tb.filter(r=>r.type==='Liabilitas');
  const eq=tb.filter(r=>r.type==='Ekuitas');
  const totA=assets.reduce((s,r)=>s+r.dr-r.cr,0);
  const totL=liab.reduce((s,r)=>s+r.cr,0);
  const totEq=eq.reduce((s,r)=>s+r.cr-r.dr,0)+netIncome;
  return{assets,liab,eq,totA,totL,totEq};
}

/* ═══════════════════════════════════════════
   FORMATTING
═══════════════════════════════════════════ */
/* Escapes free-text fields (company name, account names, transaction
   descriptions, etc.) before they go into innerHTML — without this,
   typing HTML into any of those fields would render as real markup. */
const esc=(s)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const cur=()=>db.settings.currency||'Rp';
const fmt=(n)=>cur()+' '+Math.round(n).toLocaleString('id-ID');
const fmtD=(d)=>{try{return new Date(d).toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'})}catch(e){return d}};
function periodLabel(){
  const[y,m]=(db.settings.period||'2026-01').split('-');
  const mn=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][parseInt(m)-1]||'';
  return(mn+' '+y);
}

/* ═══════════════════════════════════════════
   ROUTING
═══════════════════════════════════════════ */
const TITLES={
  welcome:'Pilih Jenis Perusahaan',
  dashboard:'Dasbor Utama',step1:'Input Transaksi',step2:'Jurnal Umum',
  step3:'Buku Besar',step4:'Neraca Saldo',step5:'Jurnal Penyesuaian',
  step6:'Neraca Saldo Disesuaikan',hpp:'Perhitungan HPP',
  step7:'Laporan Keuangan',step8:'Jurnal Penutup',
  coa:'Kode Akun (COA)',settings:'Pengaturan Perusahaan',analitik:'Laporan Analitik',
  periods:'Riwayat Periode'
};
const SUBS={
  welcome:'',
  dashboard:'Ringkasan keuangan periode ini',step1:'Catat setiap transaksi bisnis',
  step2:'Daftar seluruh entri jurnal',step3:'Saldo per akun dalam bentuk T-Account',
  step4:'Verifikasi debit = kredit',step5:'Koreksi akhir periode',
  step6:'Neraca saldo setelah penyesuaian',hpp:'Hitung HPP berdasarkan data periode ini',
  step7:'Laporan Laba Rugi, Neraca & Arus Kas',
  step8:'Tutup akun nominal & siapkan periode baru',
  coa:'Kelola daftar akun',settings:'Informasi perusahaan & periode',
  analitik:'Tren keuangan dari semua periode tersimpan',
  periods:'Lihat, bandingkan & buka periode akuntansi lama'
};

function updateHppNavVisibility(){
  const type=db.settings.companyType;
  const el=document.getElementById('ni-hpp');
  if(el)el.style.display=(type==='dagang'||type==='manufaktur')?'flex':'none';
}

function go(page){
  document.querySelectorAll('.nav-item').forEach(el=>el.classList.toggle('active',el.dataset.page===page));
  document.getElementById('page-title').textContent=TITLES[page]||page;
  document.getElementById('page-sub').textContent=db.settings.company+' · '+periodLabel()+' · '+(SUBS[page]||'');
  document.getElementById('sb-name').textContent=db.settings.company;
  document.getElementById('sb-period').textContent='Periode: '+periodLabel();
  document.getElementById('ph-company').textContent=db.settings.company;
  document.getElementById('ph-period').textContent='Periode: '+periodLabel()+' · Dicetak: '+new Date().toLocaleDateString('id-ID',{day:'2-digit',month:'long',year:'numeric'});
  document.getElementById('ph-doc').textContent=TITLES[page]||'Siklus Akuntansi UMKM';
  const pages={welcome:pgWelcome,dashboard:pgDashboard,step1:pgStep1,step2:pgStep2,step3:pgStep3,
    step4:pgStep4,step5:pgStep5,step6:pgStep6,hpp:pgHPP,step7:pgStep7,step8:pgStep8,
    coa:pgCOA,settings:pgSettings,analitik:pgAnalitik,periods:pgPeriods};
  document.getElementById('content').innerHTML=(pages[page]?pages[page]():'');
  if(page==='dashboard')initCharts();
  if(page==='analitik')initAnalitikChart();
  if(document.getElementById('sidebar').classList.contains('open'))toggleSidebar();
  updateHppNavVisibility();
}

document.querySelectorAll('.nav-item[data-page]').forEach(el=>el.addEventListener('click',()=>go(el.dataset.page)));

/* ═══════════════════════════════════════════
   WELCOME SCREEN
═══════════════════════════════════════════ */
const TYPE_LABELS={umkm:'UMKM',jasa:'Perusahaan Jasa',dagang:'Perusahaan Dagang',manufaktur:'Manufaktur'};

function pgWelcome(){
  return`
  <div class="welcome-wrap">
    <div class="welcome-logo">Siklus Akuntansi · Nanda Perspective</div>
    <h1 class="welcome-h">Pilih Jenis Perusahaan</h1>
    <p class="welcome-p">Sesuaikan siklus akuntansi dan Chart of Accounts (COA) otomatis berdasarkan jenis usaha Anda. Pilihan dapat diubah kapan saja melalui Pengaturan.</p>

    <!-- UMKM Featured -->
    <div class="type-card featured" onclick="selectCompanyType('umkm')">
      <div class="type-card-tag">⭐ Utama — Paling Populer</div>
      <div class="type-card-name">UMKM / Usaha Kecil Menengah</div>
      <div class="type-card-desc">Cocok untuk semua jenis usaha kecil. COA lengkap namun sederhana, siklus 8 langkah penuh, dan mudah dipahami tanpa latar belakang akuntansi mendalam.</div>
      <div class="type-card-tags">
        <span class="type-tag">Toko</span>
        <span class="type-tag">Warung</span>
        <span class="type-tag">Online Shop</span>
        <span class="type-tag">Kuliner</span>
        <span class="type-tag">Usaha Rumahan</span>
      </div>
    </div>

    <!-- 3 other types -->
    <div class="type-grid-others" style="width:100%;max-width:860px">
      <div class="type-card" onclick="selectCompanyType('jasa')">
        <div class="type-card-tag">Perusahaan Jasa</div>
        <div class="type-card-name">Jasa</div>
        <div class="type-card-desc">Tidak ada persediaan barang. Pendapatan dari layanan atau jasa yang diberikan.</div>
        <div class="type-card-tags">
          <span class="type-tag">Salon</span>
          <span class="type-tag">Konsultan</span>
          <span class="type-tag">Service</span>
          <span class="type-tag">Laundry</span>
        </div>
      </div>
      <div class="type-card" onclick="selectCompanyType('dagang')">
        <div class="type-card-tag">Perusahaan Dagang + HPP</div>
        <div class="type-card-name">Dagang</div>
        <div class="type-card-desc">Beli dan jual barang dagangan. Dilengkapi perhitungan HPP Dagang (persediaan awal + pembelian bersih − persediaan akhir).</div>
        <div class="type-card-tags">
          <span class="type-tag">Toko</span>
          <span class="type-tag">Distributor</span>
          <span class="type-tag">Grosir</span>
        </div>
      </div>
      <div class="type-card" onclick="selectCompanyType('manufaktur')">
        <div class="type-card-tag">Perusahaan Manufaktur + HPP</div>
        <div class="type-card-name">Manufaktur</div>
        <div class="type-card-desc">Produksi barang. HPP lengkap: BB + BTKL + BOP ± perubahan WIP dan Barang Jadi.</div>
        <div class="type-card-tags">
          <span class="type-tag">Pabrik</span>
          <span class="type-tag">Konveksi</span>
          <span class="type-tag">Makanan</span>
        </div>
      </div>
    </div>
  </div>`;
}

function showWelcome(){
  document.getElementById('welcome-screen').classList.add('open');
  document.body.style.overflow='hidden';
}
window.showWelcome=showWelcome;
function hideWelcome(){
  document.getElementById('welcome-screen').classList.remove('open');
  document.body.style.overflow='';
}

function selectCompanyType(type){
  db.settings.companyType=type;
  db.coa=(COA_BY_TYPE[type]||DEFAULT_COA).map(a=>({...a}));
  if(!db.hppData)db.hppData={};
  saveData();
  hideWelcome();
  updateHppNavVisibility();
  toast('Jenis: '+TYPE_LABELS[type]+' — silakan isi nama perusahaan di Pengaturan.');
  go('settings');
}
window.selectCompanyType=selectCompanyType;

/* ═══════════════════════════════════════════
   STEP PROGRESS BAR
═══════════════════════════════════════════ */
function stepBar(active){
  const s=[['1','Transaksi'],['2','Jurnal'],['3','Buku Besar'],['4','Neraca Saldo'],
           ['5','Penyesuaian'],['6','Disesuaikan'],['7','Laporan'],['8','Penutup']];
  return`<div class="step-bar">${s.map(([n,l])=>{
    const cls=+n<active?'done':+n===active?'active':'';
    return`<div class="step-pill ${cls}" onclick="go('step${n}')" style="cursor:pointer">
      <span class="sn">${+n<active?'✓':n}</span>${l}
    </div>`;
  }).join('')}</div>`;
}

/* ═══════════════════════════════════════════
   PAGE: DASHBOARD
═══════════════════════════════════════════ */
function pgDashboard(){
  const tb=getTrialBalance('all');
  const is=getIS(tb);
  const bs=getBS(tb,is.net);
  const txn=db.transactions.length;
  const adj=db.adjustingEntries.length;
  const led=getLedger('all');
  const totDr=tb.reduce((s,r)=>s+r.dr,0),totCr=tb.reduce((s,r)=>s+r.cr,0);
  const balanced=txn===0||Math.abs(totDr-totCr)<1;
  const kasNet=netBal('1-1100',led)+netBal('1-1200',led);

  return`
  <div class="stats-row">
    <div class="stat-box"><div class="stat-label">Total Aset</div><div class="stat-value">${fmt(bs.totA)}</div></div>
    <div class="stat-box"><div class="stat-label">Pendapatan</div><div class="stat-value green">${fmt(is.totRev)}</div></div>
    <div class="stat-box"><div class="stat-label">Total Beban</div><div class="stat-value red">${fmt(is.totExp)}</div></div>
    <div class="stat-box"><div class="stat-label">${is.net>=0?'Laba Bersih':'Rugi Bersih'}</div><div class="stat-value ${is.net>=0?'green':'red'}">${fmt(Math.abs(is.net))}</div></div>
    <div class="stat-box"><div class="stat-label">Kas & Bank</div><div class="stat-value orange">${fmt(kasNet)}</div></div>
    <div class="stat-box"><div class="stat-label">Neraca Saldo</div><div class="stat-value ${balanced?'green':'red'}" style="font-size:1rem;margin-top:8px">${txn===0?'Belum ada data':balanced?'✓ Seimbang':'✗ Tidak Seimbang'}</div></div>
  </div>

  <div class="chart-grid">
    <div class="chart-card">
      <div class="chart-card-title">Pendapatan vs Beban vs Laba</div>
      <canvas id="ch-ib"></canvas>
    </div>
    <div class="chart-card">
      <div class="chart-card-title">Komposisi Aset</div>
      <canvas id="ch-assets"></canvas>
    </div>
    <div class="chart-card">
      <div class="chart-card-title">Liabilitas vs Ekuitas</div>
      <canvas id="ch-cap"></canvas>
    </div>
  </div>

  <div class="card mb-24">
    <div class="card-title">Status Siklus — ${periodLabel()}</div>
    ${stepBar(txn>0?(adj>0?6:4):1)}
    ${txn===0?`<div class="alert alert-info"><span class="alert-icon">💡</span><div>Mulai dari <strong>Langkah 1</strong> untuk menginput transaksi bisnis Anda. Atau klik <strong>"Muat Contoh Data"</strong> untuk mencoba dengan data demo.</div></div>`:''}
    <div class="flex-gap">
      <button class="btn btn-primary" onclick="go('step1')">+ Tambah Transaksi</button>
      ${txn===0?`<button class="btn btn-ghost" onclick="loadSampleData()">🎯 Muat Contoh Data</button>`:''}
      <button class="btn btn-ghost" onclick="go('step7')">📊 Lihat Laporan</button>
    </div>
  </div>

  <div class="card">
    <div class="card-title">Panduan Cepat — 8 Langkah Siklus Akuntansi</div>
    <div class="quick-nav">
      ${[['1','Input Transaksi','Catat setiap penjualan, pembelian, dan pembayaran'],
         ['2','Jurnal Umum','Lihat semua entri debit-kredit secara kronologis'],
         ['3','Buku Besar','Saldo per akun dalam tampilan T-Account'],
         ['4','Neraca Saldo','Verifikasi total Debit = total Kredit'],
         ['5','Penyesuaian','Depresiasi, akrual, dan koreksi akhir periode'],
         ['6','Neraca Disesuaikan','Neraca saldo final setelah penyesuaian'],
         ['7','Laporan Keuangan','Laba Rugi, Neraca, dan Arus Kas'],
         ['8','Jurnal Penutup','Tutup akun & siapkan periode baru']
      ].map(([n,t,d])=>`<div class="quick-card" onclick="go('step${n}')">
        <div class="quick-card-num">Langkah ${n}</div>
        <div class="quick-card-title">${t}</div>
        <div class="quick-card-desc">${d}</div>
      </div>`).join('')}
    </div>
  </div>`;
}

function initCharts(){
  const tb=getTrialBalance('all');
  const is=getIS(tb);
  const bs=getBS(tb,is.net);
  const assets=bs.assets.filter(a=>a.dr>0);
  const opt={animation:{duration:500},plugins:{legend:{labels:{color:'#8A7A72',font:{size:11,family:'DM Sans'}}}}};

  const c1=document.getElementById('ch-ib');
  if(c1)new Chart(c1,{type:'bar',data:{
    labels:['Pendapatan','Beban','Laba Bersih'],
    datasets:[{data:[is.totRev,is.totExp,is.net],
      backgroundColor:['rgba(91,138,95,.75)','rgba(192,57,43,.7)',is.net>=0?'rgba(30,64,175,.7)':'rgba(192,57,43,.7)'],
      borderRadius:8,borderSkipped:false}]
  },options:{...opt,scales:{x:{ticks:{color:'#8A7A72'}},y:{ticks:{color:'#8A7A72',callback:v=>'Rp '+v.toLocaleString('id-ID')}}},plugins:{...opt.plugins,legend:{display:false}}}});

  const c2=document.getElementById('ch-assets');
  if(c2)new Chart(c2,{type:'doughnut',data:{
    labels:assets.map(a=>a.name),
    datasets:[{data:assets.map(a=>a.dr),
      backgroundColor:['#E05A3A','#1F2D3D','#5B8A5F','#F59E0B','#8B5CF6','#06B6D4','#EC4899','#84CC16'],
      borderWidth:3,borderColor:'#FFF5EF'}]
  },options:{...opt,cutout:'62%'}});

  const c3=document.getElementById('ch-cap');
  if(c3)new Chart(c3,{type:'doughnut',data:{
    labels:['Liabilitas','Ekuitas'],
    datasets:[{data:[bs.totL,bs.totEq],
      backgroundColor:['rgba(192,57,43,.75)','rgba(30,64,175,.75)'],
      borderWidth:3,borderColor:'#FFF5EF'}]
  },options:{...opt,cutout:'62%'}});
}

/* ═══════════════════════════════════════════
   SAMPLE DATA
═══════════════════════════════════════════ */
function loadSampleData(){
  if(!confirm('Ini akan menambahkan data contoh untuk Toko Maju Jaya. Lanjutkan?'))return;
  db.settings={company:'Toko Maju Jaya',owner:'Budi Santoso',address:'Jl. Pasar No. 12, Jakarta',period:'2026-01',currency:'Rp',companyType:'umkm'};
  db.transactions=[
    {date:'2026-01-01',ref:'JU-001',description:'Modal awal dari pemilik',entries:[{account:'1-1100',debit:50000000,credit:0},{account:'3-1000',debit:0,credit:50000000}]},
    {date:'2026-01-02',ref:'JU-002',description:'Sewa toko 1 bulan dibayar dimuka',entries:[{account:'1-1600',debit:3000000,credit:0},{account:'1-1100',debit:0,credit:3000000}]},
    {date:'2026-01-03',ref:'JU-003',description:'Beli peralatan toko tunai',entries:[{account:'1-2100',debit:8000000,credit:0},{account:'1-1100',debit:0,credit:8000000}]},
    {date:'2026-01-05',ref:'JU-004',description:'Beli persediaan barang dagangan',entries:[{account:'1-1400',debit:15000000,credit:0},{account:'1-1100',debit:0,credit:15000000}]},
    {date:'2026-01-10',ref:'JU-005',description:'Penjualan barang tunai',entries:[{account:'1-1100',debit:12000000,credit:0},{account:'4-1000',debit:0,credit:12000000}]},
    {date:'2026-01-10',ref:'JU-006',description:'HPP penjualan Jan-10',entries:[{account:'5-1000',debit:7000000,credit:0},{account:'1-1400',debit:0,credit:7000000}]},
    {date:'2026-01-15',ref:'JU-007',description:'Bayar gaji karyawan',entries:[{account:'5-1100',debit:3500000,credit:0},{account:'1-1100',debit:0,credit:3500000}]},
    {date:'2026-01-20',ref:'JU-008',description:'Penjualan barang kredit',entries:[{account:'1-1300',debit:8000000,credit:0},{account:'4-1000',debit:0,credit:8000000}]},
    {date:'2026-01-20',ref:'JU-009',description:'HPP penjualan Jan-20',entries:[{account:'5-1000',debit:5000000,credit:0},{account:'1-1400',debit:0,credit:5000000}]},
    {date:'2026-01-25',ref:'JU-010',description:'Terima pembayaran piutang',entries:[{account:'1-1100',debit:5000000,credit:0},{account:'1-1300',debit:0,credit:5000000}]},
    {date:'2026-01-28',ref:'JU-011',description:'Bayar listrik & air',entries:[{account:'5-1300',debit:450000,credit:0},{account:'1-1100',debit:0,credit:450000}]},
    {date:'2026-01-30',ref:'JU-012',description:'Prive pemilik',entries:[{account:'3-2000',debit:1000000,credit:0},{account:'1-1100',debit:0,credit:1000000}]},
  ];
  db.adjustingEntries=[
    {date:'2026-01-31',ref:'AJE-001',description:'Penyusutan peralatan (Rp 8 jt / 48 bln)',entries:[{account:'5-1500',debit:167000,credit:0},{account:'1-2200',debit:0,credit:167000}]},
    {date:'2026-01-31',ref:'AJE-002',description:'Sewa terpakai 1 bulan',entries:[{account:'5-1200',debit:3000000,credit:0},{account:'1-1600',debit:0,credit:3000000}]},
  ];
  saveData();
  toast('Data contoh berhasil dimuat!');
  go('dashboard');
}

/* ═══════════════════════════════════════════
   PAGE: STEP 1 — INPUT TRANSAKSI
═══════════════════════════════════════════ */
function pgStep1(){
  const rows=db.transactions.map((t,i)=>`
    <tr>
      <td>${fmtD(t.date)}</td>
      <td style="font-weight:600;color:var(--primary)">${esc(t.ref)}</td>
      <td>${t.description}</td>
      <td>${t.entries.length} akun</td>
      <td class="num">${fmt(t.entries.reduce((s,e)=>s+(e.debit||0),0))}</td>
      <td>
        <div class="flex-gap">
          <button class="btn btn-ghost btn-xs" onclick="openTxModal(${i})">Edit</button>
          <button class="btn btn-danger btn-xs" onclick="delTx(${i})">Hapus</button>
        </div>
      </td>
    </tr>`).join('');

  return`
  ${stepBar(1)}
  <div class="flex-between mb-24">
    <div class="page-header" style="margin:0">
      <h2>Input Transaksi</h2>
      <p>Catat setiap transaksi bisnis. Sistem otomatis memproses ke langkah berikutnya.</p>
    </div>
    <button class="btn btn-primary" onclick="openTxModal()">+ Tambah Transaksi</button>
  </div>
  <div class="tip-box mb-16">
    <strong>💡 Double-Entry:</strong> Setiap transaksi memiliki dua sisi — Debit dan Kredit. Total keduanya harus selalu sama. Contoh: Terima uang tunai → Debit Kas, Kredit Pendapatan.
  </div>
  ${db.transactions.length===0?`<div class="empty"><div class="empty-icon">📋</div><h3>Belum ada transaksi</h3><p>Klik tombol "+ Tambah Transaksi" untuk mulai mencatat, atau muat contoh data dari Dasbor.</p><button class="btn btn-primary" onclick="openTxModal()">+ Tambah Transaksi</button></div>`:`
  <div class="table-wrap">
    <table>
      <thead><tr><th>Tanggal</th><th>Ref</th><th>Keterangan</th><th>Entri</th><th class="text-right">Total Debit</th><th>Aksi</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`}
  <div class="flex-between" style="margin-top:16px">
    <button class="btn btn-ghost" onclick="go('dashboard')">← Dasbor</button>
    <button class="btn btn-green" onclick="go('step2')">Lanjut ke Jurnal Umum →</button>
  </div>`;
}

function openTxModal(idx){
  const isEdit=idx!==undefined;
  const t=isEdit?db.transactions[idx]:{
    date:new Date().toISOString().slice(0,10),
    ref:'JU-'+String(db.transactions.length+1).padStart(3,'0'),
    description:'',
    entries:[{account:'',debit:0,credit:0},{account:'',debit:0,credit:0}]
  };
  document.getElementById('modal-title').textContent=isEdit?'Edit Transaksi':'Tambah Transaksi Baru';
  document.getElementById('modal-body').innerHTML=`
    <div class="form-grid c3 mb-16">
      <div class="field"><label>Tanggal</label><input type="date" id="tx-date" value="${t.date}"></div>
      <div class="field"><label>No. Referensi</label><input type="text" id="tx-ref" value="${esc(t.ref)}"></div>
      <div class="field"><label>Keterangan</label><input type="text" id="tx-desc" value="${t.description}" placeholder="Deskripsi transaksi"></div>
    </div>
    <div class="entry-row-head" style="margin-bottom:6px">
      <span>Akun</span><span>Debit</span><span>Kredit</span><span></span>
    </div>
    <div id="entries-wrap">${t.entries.map((e,i)=>entryRowHTML(e,i)).join('')}</div>
    <button class="btn btn-ghost btn-sm" style="margin-top:10px" onclick="addEntryRow('entries-wrap')">+ Tambah Baris</button>
    <div id="bal-check" style="margin-top:10px"></div>`;
  document.getElementById('modal-foot').innerHTML=`
    <button class="btn btn-ghost" onclick="closeModal()">Batal</button>
    <button class="btn btn-primary" onclick="saveTx(${isEdit?idx:'undefined'})">Simpan</button>`;
  openModal();
}
window.openTxModal=openTxModal;

function entryRowHTML(e,i){
  const opts=db.coa.map(a=>`<option value="${esc(a.code)}" ${a.code===e.account?'selected':''}>${esc(a.code)} — ${esc(a.name)}</option>`).join('');
  return`<div class="entry-row" id="er-${i}">
    <div class="field" style="margin:0"><select onchange="calcBal()">${opts}</select></div>
    <div class="field" style="margin:0"><input type="number" min="0" placeholder="0" value="${e.debit||''}" oninput="calcBal()"></div>
    <div class="field" style="margin:0"><input type="number" min="0" placeholder="0" value="${e.credit||''}" oninput="calcBal()"></div>
    <button class="del-btn" onclick="this.closest('.entry-row').remove();calcBal()">×</button>
  </div>`;
}

function addEntryRow(wrapperId){
  const w=document.getElementById(wrapperId);
  const i=w.querySelectorAll('.entry-row').length;
  w.insertAdjacentHTML('beforeend',entryRowHTML({account:'',debit:0,credit:0},i));
}
window.addEntryRow=addEntryRow;

function calcBal(){
  let D=0,K=0;
  document.querySelectorAll('#entries-wrap .entry-row').forEach(r=>{
    const inp=r.querySelectorAll('input[type=number]');
    D+=parseFloat(inp[0].value)||0;K+=parseFloat(inp[1].value)||0;
  });
  const el=document.getElementById('bal-check');
  if(!el)return;
  if(!D&&!K){el.innerHTML='';return}
  const ok=Math.abs(D-K)<1;
  el.innerHTML=`<div class="balance-check ${ok?'balance-ok':'balance-bad'}">
    ${ok?'✓':'✗'} Debit: <strong>${fmt(D)}</strong> &nbsp;|&nbsp; Kredit: <strong>${fmt(K)}</strong>
    &nbsp;${ok?'— Seimbang':'— Selisih: '+fmt(Math.abs(D-K))}
  </div>`;
}
window.calcBal=calcBal;

function saveTx(idx){
  const date=document.getElementById('tx-date').value;
  const ref=document.getElementById('tx-ref').value.trim();
  const desc=document.getElementById('tx-desc').value.trim();
  if(!date||!ref||!desc){toast('Isi tanggal, referensi, dan keterangan!');return}
  const entries=[];let tD=0,tK=0;
  document.querySelectorAll('#entries-wrap .entry-row').forEach(r=>{
    const sel=r.querySelector('select');
    const inp=r.querySelectorAll('input[type=number]');
    const D=parseFloat(inp[0].value)||0,K=parseFloat(inp[1].value)||0;
    if(sel.value&&(D||K)){entries.push({account:sel.value,debit:D,credit:K});tD+=D;tK+=K;}
  });
  if(entries.length<2){toast('Minimal 2 baris akun!');return}
  if(Math.abs(tD-tK)>0.5){toast('Total Debit dan Kredit harus sama!');return}
  const tx={date,ref,description:desc,entries};
  if(idx!==undefined)db.transactions[idx]=tx;
  else db.transactions.push(tx);
  db.transactions.sort((a,b)=>a.date.localeCompare(b.date));
  saveData();closeModal();go('step1');toast('Transaksi berhasil disimpan!');
}
window.saveTx=saveTx;

function delTx(i){
  const t=db.transactions[i];
  openDangerModal({
    title:'Hapus Transaksi',
    subtitle:'Transaksi berikut akan dihapus permanen dari jurnal umum.',
    items:[
      (t?.ref?t.ref+' — ':'')+(t?.description||'Transaksi ini'),
      'Tanggal: '+(t?.date||''),
      (t?.entries?.length||0)+' entri debit/kredit terkait',
    ],
    requireTyping:true,
    onConfirm:()=>{db.transactions.splice(i,1);saveData();go('step1');}
  });
}
window.delTx=delTx;

/* ═══════════════════════════════════════════
   PAGE: STEP 2 — JURNAL UMUM
═══════════════════════════════════════════ */
function pgStep2(){
  const rows=db.transactions.flatMap(t=>t.entries.map((e,ei)=>({
    date:t.date,ref:t.ref,desc:ei===0?t.description:'',
    name:acc(e.account)?.name||e.account,
    D:e.debit||0,K:e.credit||0,isCredit:!e.debit||e.credit>0
  })));
  const totD=rows.reduce((s,r)=>s+r.D,0),totK=rows.reduce((s,r)=>s+r.K,0);

  return`
  ${stepBar(2)}
  <div class="flex-between mb-24">
    <div class="page-header" style="margin:0">
      <h2>Jurnal Umum</h2>
      <p>Seluruh transaksi diurutkan berdasarkan tanggal.</p>
    </div>
    <button class="btn btn-primary" onclick="go('step1')">+ Input Transaksi</button>
  </div>
  ${rows.length===0?`<div class="empty"><div class="empty-icon">📒</div><h3>Belum ada jurnal</h3><p>Tambah transaksi terlebih dahulu di Langkah 1.</p></div>`:`
  <div class="table-wrap">
    <table>
      <thead><tr><th>Tanggal</th><th>Ref</th><th>Nama Akun</th><th class="text-right">Debit</th><th class="text-right">Kredit</th><th>Keterangan</th></tr></thead>
      <tbody>${rows.map(r=>`<tr>
        <td class="text-muted">${r.desc?fmtD(r.date):''}</td>
        <td style="font-weight:600;color:var(--primary)">${r.desc?esc(r.ref):''}</td>
        <td ${r.K?'style="padding-left:28px;color:var(--accent2)"':'style="font-weight:500"'}>${esc(r.name)}</td>
        <td class="num dr">${r.D?fmt(r.D):''}</td>
        <td class="num cr">${r.K?fmt(r.K):''}</td>
        <td class="text-muted text-sm">${esc(r.desc)}</td>
      </tr>`).join('')}</tbody>
      <tfoot><tr class="tfoot-row"><td colspan="3">TOTAL</td><td class="num">${fmt(totD)}</td><td class="num">${fmt(totK)}</td><td></td></tr></tfoot>
    </table>
  </div>`}
  <div class="flex-between" style="margin-top:16px">
    <button class="btn btn-ghost" onclick="go('step1')">← Langkah 1</button>
    <button class="btn btn-green" onclick="go('step3')">Lanjut ke Buku Besar →</button>
  </div>`;
}

/* ═══════════════════════════════════════════
   PAGE: STEP 3 — BUKU BESAR
═══════════════════════════════════════════ */
function pgStep3(){
  const led=getLedger('reg');
  const active=db.coa.filter(a=>led[a.code]);

  const cards=active.map(a=>{
    const b=led[a.code];
    const net=netBal(a.code,led);
    const debitEntries=b.entries.filter(e=>e.debit>0);
    const creditEntries=b.entries.filter(e=>e.credit>0);
    return`<div class="t-card">
      <div class="t-card-head">
        <div>
          <div class="t-card-name">${esc(a.name)}</div>
          <div class="t-card-code">${esc(a.code)} · ${a.type} · Normal: ${a.normal==='D'?'Debit':'Kredit'}</div>
        </div>
        <div class="t-card-balance" style="color:${net>=0?'#A7F3D0':'#FECDD3'}">${fmt(Math.abs(net))}</div>
      </div>
      <div class="t-body">
        <div class="t-side">
          <div class="t-side-label">Debit</div>
          ${debitEntries.map(e=>`<div class="t-entry"><span class="t-entry-date">${fmtD(e.date)}</span><span class="t-entry-amt" style="color:#1a5f9e">${fmt(e.debit)}</span></div>`).join('')||'<div class="text-muted text-sm" style="text-align:center">—</div>'}
          <div class="t-total"><span>Total</span><strong style="color:#1a5f9e">${fmt(b.D)}</strong></div>
        </div>
        <div class="t-side">
          <div class="t-side-label">Kredit</div>
          ${creditEntries.map(e=>`<div class="t-entry"><span class="t-entry-date">${fmtD(e.date)}</span><span class="t-entry-amt" style="color:var(--accent2)">${fmt(e.credit)}</span></div>`).join('')||'<div class="text-muted text-sm" style="text-align:center">—</div>'}
          <div class="t-total"><span>Total</span><strong style="color:var(--accent2)">${fmt(b.K)}</strong></div>
        </div>
      </div>
    </div>`;
  }).join('');

  return`
  ${stepBar(3)}
  <div class="page-header">
    <h2>Buku Besar</h2>
    <p>Setiap akun ditampilkan dalam akun T. Saldo = perbedaan antara total Debit dan Kredit.</p>
  </div>
  ${active.length===0?`<div class="empty"><div class="empty-icon">📚</div><h3>Belum ada data</h3><p>Tambah transaksi di Langkah 1 terlebih dahulu.</p></div>`:`<div class="ledger-grid">${cards}</div>`}
  <div class="flex-between" style="margin-top:20px">
    <button class="btn btn-ghost" onclick="go('step2')">← Langkah 2</button>
    <button class="btn btn-green" onclick="go('step4')">Lanjut ke Neraca Saldo →</button>
  </div>`;
}

/* ═══════════════════════════════════════════
   TRIAL BALANCE RENDERER (reused for step4 & step6)
═══════════════════════════════════════════ */
function renderTB(type,stepNum,prev,next,title,hint){
  const tb=getTrialBalance(type);
  const totD=tb.reduce((s,r)=>s+r.dr,0),totK=tb.reduce((s,r)=>s+r.cr,0);
  const balanced=Math.abs(totD-totK)<1;
  const badgeMap={Aset:'badge-asset',Liabilitas:'badge-liability',Ekuitas:'badge-equity',Pendapatan:'badge-revenue',Beban:'badge-expense'};
  return`
  ${stepBar(stepNum)}
  <div class="page-header"><h2>${title}</h2><p>${hint}</p></div>
  ${tb.length>0&&!balanced?`<div class="alert alert-warn"><span class="alert-icon">⚠</span><div>Neraca <strong>tidak seimbang</strong>! Periksa kembali entri transaksi Anda. Selisih: <strong>${fmt(Math.abs(totD-totK))}</strong></div></div>`:''}
  ${tb.length>0&&balanced?`<div class="alert alert-success"><span class="alert-icon">✓</span><div>Neraca <strong>seimbang</strong> — Total Debit = Total Kredit = <strong>${fmt(totD)}</strong></div></div>`:''}
  ${tb.length===0?`<div class="empty"><div class="empty-icon">⚖️</div><h3>Belum ada data</h3><p>Lengkapi langkah sebelumnya terlebih dahulu.</p></div>`:`
  <div class="table-wrap">
    <table>
      <thead><tr><th>Kode</th><th>Nama Akun</th><th>Tipe</th><th class="text-right">Debit</th><th class="text-right">Kredit</th></tr></thead>
      <tbody>${tb.map(r=>`<tr>
        <td class="text-muted text-sm" style="font-family:monospace">${r.code}</td>
        <td style="font-weight:500">${esc(r.name)}</td>
        <td><span class="badge ${badgeMap[r.type]||''}">${r.type}</span></td>
        <td class="num dr">${r.dr?fmt(r.dr):''}</td>
        <td class="num cr">${r.cr?fmt(r.cr):''}</td>
      </tr>`).join('')}</tbody>
      <tfoot><tr class="tfoot-row"><td colspan="3">TOTAL</td><td class="num ${balanced?'pos':'neg'}">${fmt(totD)}</td><td class="num ${balanced?'pos':'neg'}">${fmt(totK)}</td></tr></tfoot>
    </table>
  </div>`}
  <div class="flex-between" style="margin-top:16px">
    <button class="btn btn-ghost" onclick="go('${prev}')">← Langkah ${stepNum-1}</button>
    <button class="btn btn-green" onclick="go('${next}')">Lanjut →</button>
  </div>`;
}

function pgStep4(){return renderTB('reg',4,'step3','step5','Neraca Saldo (Sebelum Penyesuaian)','Verifikasi total Debit = total Kredit sebelum membuat jurnal penyesuaian.')}
function pgStep6(){
  const type=db.settings.companyType;
  const next=(type==='dagang'||type==='manufaktur')?'hpp':'step7';
  return renderTB('all',6,'step5',next,'Neraca Saldo Disesuaikan','Neraca saldo setelah semua jurnal penyesuaian. Gunakan ini sebagai dasar laporan keuangan.');
}

/* ═══════════════════════════════════════════
   HPP — HARGA POKOK PENJUALAN
═══════════════════════════════════════════ */
function getHPP(){
  const h=db.hppData||{};
  const type=db.settings.companyType;
  if(type==='dagang'){
    const pemBersih=(h.pembelian||0)+(h.angkut||0)-(h.retur||0)-(h.diskon||0);
    return(h.persediaanAwal||0)+pemBersih-(h.persediaanAkhir||0);
  }
  if(type==='manufaktur'){
    const bbTerpakai=(h.bbAwal||0)+(h.pembelianBB||0)-(h.bbAkhir||0);
    const totalProd=bbTerpakai+(h.btkl||0)+(h.bop||0);
    const hppProd=totalProd+(h.wipAwal||0)-(h.wipAkhir||0);
    return hppProd+(h.bjAwal||0)-(h.bjAkhir||0);
  }
  return null;
}

function hasHppData(){return Object.values(db.hppData||{}).some(v=>v>0)}

function pgHPP(){
  const type=db.settings.companyType;
  if(type==='dagang')return pgHPPDagang();
  if(type==='manufaktur')return pgHPPManufaktur();
  return`<div class="empty"><div class="empty-icon">📊</div><h3>HPP hanya tersedia untuk Dagang & Manufaktur</h3><p>Ubah jenis perusahaan di Pengaturan.</p><button class="btn btn-ghost" onclick="go('settings')">Buka Pengaturan</button></div>`;
}

function renderHppDagangResult(pA,pmb,ang,ret,dis,pAk){
  const pemBersih=pmb+ang-ret-dis;
  const tersedia=pA+pemBersih;
  const hpp=tersedia-pAk;
  return`
  <div class="fs-row"><span>Persediaan Awal</span><span>${fmt(pA)}</span></div>
  <div class="fs-sub" style="padding:5px 0 3px;font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;margin:4px 0 0">Pembelian Bersih</div>
  <div class="fs-row indent"><span>+ Pembelian (gross)</span><span>${fmt(pmb)}</span></div>
  <div class="fs-row indent"><span>+ Beban Angkut Masuk</span><span>${fmt(ang)}</span></div>
  <div class="fs-row indent"><span>− Retur Pembelian</span><span class="neg">(${fmt(ret)})</span></div>
  <div class="fs-row indent"><span>− Diskon Pembelian</span><span class="neg">(${fmt(dis)})</span></div>
  <div class="fs-row subtotal"><span>Pembelian Bersih</span><span>${fmt(pemBersih)}</span></div>
  <div class="fs-row subtotal"><span>Barang Tersedia Dijual</span><span>${fmt(tersedia)}</span></div>
  <div class="fs-row"><span>− Persediaan Akhir</span><span class="neg">(${fmt(pAk)})</span></div>
  <div class="fs-row grand" style="margin-top:4px"><span>HARGA POKOK PENJUALAN (HPP)</span><span class="${hpp>=0?'pos':'neg'}">${fmt(Math.abs(hpp))}</span></div>`;
}

function pgHPPDagang(){
  const h=db.hppData||{};
  return`
  <div class="page-header">
    <h2>Perhitungan HPP — Perusahaan Dagang</h2>
    <p>HPP = Persediaan Awal + Pembelian Bersih − Persediaan Akhir. Nilai ini digunakan di Laporan Laba Rugi.</p>
  </div>
  <div class="alert alert-info mb-16"><span class="alert-icon">ℹ</span><div>Isi form, klik <strong>Simpan HPP</strong>, lalu HPP akan tampil di <strong>Laporan Laba Rugi (Langkah 7)</strong> sebagai baris terpisah antara Pendapatan dan Laba Kotor.</div></div>
  <div class="card" style="max-width:560px">
    <div class="card-title">Input Data HPP Dagang — ${periodLabel()}</div>
    <div class="form-grid c2">
      <div class="field"><label>Persediaan Awal</label><input type="number" id="hpp-pA" value="${h.persediaanAwal||0}" oninput="calcHppDagang()" min="0"></div>
      <div class="field"><label>Pembelian (gross)</label><input type="number" id="hpp-pmb" value="${h.pembelian||0}" oninput="calcHppDagang()" min="0"></div>
      <div class="field"><label>Beban Angkut Masuk</label><input type="number" id="hpp-ang" value="${h.angkut||0}" oninput="calcHppDagang()" min="0"></div>
      <div class="field"><label>Retur Pembelian</label><input type="number" id="hpp-ret" value="${h.retur||0}" oninput="calcHppDagang()" min="0"></div>
      <div class="field"><label>Diskon Pembelian</label><input type="number" id="hpp-dis" value="${h.diskon||0}" oninput="calcHppDagang()" min="0"></div>
      <div class="field"><label>Persediaan Akhir</label><input type="number" id="hpp-pAk" value="${h.persediaanAkhir||0}" oninput="calcHppDagang()" min="0"></div>
    </div>
    <button class="btn btn-primary" style="margin-top:16px" onclick="saveHppDagang()">Simpan HPP</button>
  </div>
  <div class="fs-card" id="hpp-result" style="max-width:560px;margin-top:16px">
    <div class="fs-header"><h3>Hasil Perhitungan HPP Dagang</h3><p>${esc(db.settings.company)} · ${periodLabel()}</p></div>
    ${renderHppDagangResult(h.persediaanAwal||0,h.pembelian||0,h.angkut||0,h.retur||0,h.diskon||0,h.persediaanAkhir||0)}
  </div>
  <div class="flex-between" style="margin-top:16px">
    <button class="btn btn-ghost" onclick="go('step6')">← Langkah 6</button>
    <button class="btn btn-green" onclick="go('step7')">Lanjut ke Laporan Keuangan →</button>
  </div>`;
}

function calcHppDagang(){
  const v=id=>parseFloat(document.getElementById(id)?.value)||0;
  const el=document.getElementById('hpp-result');
  if(el)el.innerHTML=`<div class="fs-header"><h3>Hasil Perhitungan HPP Dagang</h3><p>${esc(db.settings.company)} · ${periodLabel()}</p></div>`+renderHppDagangResult(v('hpp-pA'),v('hpp-pmb'),v('hpp-ang'),v('hpp-ret'),v('hpp-dis'),v('hpp-pAk'));
}
window.calcHppDagang=calcHppDagang;

function saveHppDagang(){
  const v=id=>parseFloat(document.getElementById(id)?.value)||0;
  db.hppData={persediaanAwal:v('hpp-pA'),pembelian:v('hpp-pmb'),angkut:v('hpp-ang'),retur:v('hpp-ret'),diskon:v('hpp-dis'),persediaanAkhir:v('hpp-pAk')};
  saveData();toast('Data HPP berhasil disimpan!');
}
window.saveHppDagang=saveHppDagang;

function renderHppMfgResult(bbA,pmBB,bbAk,btkl,bop,wA,wAk,bjA,bjAk){
  const bbTerpakai=bbA+pmBB-bbAk;
  const totalProd=bbTerpakai+btkl+bop;
  const hppProd=totalProd+wA-wAk;
  const hpp=hppProd+bjA-bjAk;
  return`
  <div class="fs-sub" style="padding:6px 22px">BIAYA BAHAN BAKU</div>
  <div class="fs-row indent"><span>Persediaan BB Awal</span><span>${fmt(bbA)}</span></div>
  <div class="fs-row indent"><span>+ Pembelian Bahan Baku</span><span>${fmt(pmBB)}</span></div>
  <div class="fs-row indent"><span>− Persediaan BB Akhir</span><span class="neg">(${fmt(bbAk)})</span></div>
  <div class="fs-row subtotal"><span>Pemakaian Bahan Baku</span><span>${fmt(bbTerpakai)}</span></div>
  <div class="fs-sub" style="padding:6px 22px">BIAYA PRODUKSI</div>
  <div class="fs-row indent"><span>+ BTKL (Biaya TK Langsung)</span><span>${fmt(btkl)}</span></div>
  <div class="fs-row indent"><span>+ BOP (Overhead Pabrik)</span><span>${fmt(bop)}</span></div>
  <div class="fs-row subtotal"><span>Total Biaya Produksi</span><span>${fmt(totalProd)}</span></div>
  <div class="fs-row indent"><span>+ WIP Awal</span><span>${fmt(wA)}</span></div>
  <div class="fs-row indent"><span>− WIP Akhir</span><span class="neg">(${fmt(wAk)})</span></div>
  <div class="fs-row subtotal"><span>Harga Pokok Produksi</span><span>${fmt(hppProd)}</span></div>
  <div class="fs-sub" style="padding:6px 22px">HARGA POKOK PENJUALAN</div>
  <div class="fs-row indent"><span>+ Persediaan Barang Jadi Awal</span><span>${fmt(bjA)}</span></div>
  <div class="fs-row indent"><span>− Persediaan Barang Jadi Akhir</span><span class="neg">(${fmt(bjAk)})</span></div>
  <div class="fs-row grand" style="margin-top:4px"><span>HARGA POKOK PENJUALAN (HPP)</span><span class="${hpp>=0?'pos':'neg'}">${fmt(Math.abs(hpp))}</span></div>`;
}

function pgHPPManufaktur(){
  const h=db.hppData||{};
  return`
  <div class="page-header">
    <h2>Perhitungan HPP — Manufaktur</h2>
    <p>HPP Manufaktur = BB yang terpakai + BTKL + BOP ± perubahan WIP ± perubahan Barang Jadi.</p>
  </div>
  <div class="alert alert-info mb-16"><span class="alert-icon">ℹ</span><div>Isi semua kolom, klik <strong>Simpan HPP</strong>, lalu HPP digunakan di <strong>Laporan Laba Rugi (Langkah 7)</strong>.</div></div>
  <div class="hpp-two-col">
    <div class="card">
      <div class="card-title">1. Biaya Bahan Baku (BB)</div>
      <div class="form-grid">
        <div class="field"><label>Persediaan BB Awal</label><input type="number" id="hpp-bbA" value="${h.bbAwal||0}" oninput="calcHppMfg()" min="0"></div>
        <div class="field"><label>Pembelian Bahan Baku</label><input type="number" id="hpp-pmBB" value="${h.pembelianBB||0}" oninput="calcHppMfg()" min="0"></div>
        <div class="field"><label>Persediaan BB Akhir</label><input type="number" id="hpp-bbAk" value="${h.bbAkhir||0}" oninput="calcHppMfg()" min="0"></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">2. BTKL & BOP</div>
      <div class="form-grid">
        <div class="field"><label>BTKL (Biaya TK Langsung)</label><input type="number" id="hpp-btkl" value="${h.btkl||0}" oninput="calcHppMfg()" min="0"></div>
        <div class="field"><label>BOP (Overhead Pabrik)</label><input type="number" id="hpp-bop" value="${h.bop||0}" oninput="calcHppMfg()" min="0"></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">3. Barang Dalam Proses (WIP)</div>
      <div class="form-grid">
        <div class="field"><label>WIP Awal</label><input type="number" id="hpp-wA" value="${h.wipAwal||0}" oninput="calcHppMfg()" min="0"></div>
        <div class="field"><label>WIP Akhir</label><input type="number" id="hpp-wAk" value="${h.wipAkhir||0}" oninput="calcHppMfg()" min="0"></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">4. Persediaan Barang Jadi</div>
      <div class="form-grid">
        <div class="field"><label>Persediaan BJ Awal</label><input type="number" id="hpp-bjA" value="${h.bjAwal||0}" oninput="calcHppMfg()" min="0"></div>
        <div class="field"><label>Persediaan BJ Akhir</label><input type="number" id="hpp-bjAk" value="${h.bjAkhir||0}" oninput="calcHppMfg()" min="0"></div>
      </div>
    </div>
  </div>
  <button class="btn btn-primary" style="margin-top:4px" onclick="saveHppMfg()">Simpan HPP</button>
  <div class="fs-card" id="hpp-result" style="margin-top:16px">
    <div class="fs-header"><h3>Hasil Perhitungan HPP Manufaktur</h3><p>${esc(db.settings.company)} · ${periodLabel()}</p></div>
    ${renderHppMfgResult(h.bbAwal||0,h.pembelianBB||0,h.bbAkhir||0,h.btkl||0,h.bop||0,h.wipAwal||0,h.wipAkhir||0,h.bjAwal||0,h.bjAkhir||0)}
  </div>
  <div class="flex-between" style="margin-top:16px">
    <button class="btn btn-ghost" onclick="go('step6')">← Langkah 6</button>
    <button class="btn btn-green" onclick="go('step7')">Lanjut ke Laporan Keuangan →</button>
  </div>`;
}

function calcHppMfg(){
  const v=id=>parseFloat(document.getElementById(id)?.value)||0;
  const el=document.getElementById('hpp-result');
  if(el)el.innerHTML=`<div class="fs-header"><h3>Hasil Perhitungan HPP Manufaktur</h3><p>${esc(db.settings.company)} · ${periodLabel()}</p></div>`+renderHppMfgResult(v('hpp-bbA'),v('hpp-pmBB'),v('hpp-bbAk'),v('hpp-btkl'),v('hpp-bop'),v('hpp-wA'),v('hpp-wAk'),v('hpp-bjA'),v('hpp-bjAk'));
}
window.calcHppMfg=calcHppMfg;

function saveHppMfg(){
  const v=id=>parseFloat(document.getElementById(id)?.value)||0;
  db.hppData={bbAwal:v('hpp-bbA'),pembelianBB:v('hpp-pmBB'),bbAkhir:v('hpp-bbAk'),btkl:v('hpp-btkl'),bop:v('hpp-bop'),wipAwal:v('hpp-wA'),wipAkhir:v('hpp-wAk'),bjAwal:v('hpp-bjA'),bjAkhir:v('hpp-bjAk')};
  saveData();toast('Data HPP berhasil disimpan!');
}
window.saveHppMfg=saveHppMfg;

/* ── Laporan Laba Rugi builder (HPP-aware) ── */
function lrHtml(is,co,per){
  const hpp=getHPP();
  const type=db.settings.companyType;
  const needsHPP=(type==='dagang'||type==='manufaktur');
  const hppFilled=needsHPP&&hasHppData()&&hpp!==null;

  if(hppFilled){
    const grossProfit=is.totRev-hpp;
    const net=grossProfit-is.totExp;
    return`<div class="fs-card">
      <div class="fs-header"><h3>Laporan Laba Rugi</h3><p>${esc(co)} · Periode: ${per}</p></div>
      <div class="fs-sub">PENDAPATAN</div>
      ${is.rev.map(r=>`<div class="fs-row indent"><span>${esc(r.name)}</span><span class="pos">${fmt(r.cr)}</span></div>`).join('')}
      <div class="fs-row subtotal"><span>Total Pendapatan</span><span class="pos">${fmt(is.totRev)}</span></div>
      <div class="fs-sub">HARGA POKOK PENJUALAN</div>
      <div class="fs-row indent"><span>HPP (dari Perhitungan HPP)</span><span class="neg">(${fmt(hpp)})</span></div>
      <div class="fs-row subtotal"><span>LABA KOTOR</span><span class="${grossProfit>=0?'pos':'neg'}">${fmt(Math.abs(grossProfit))}</span></div>
      <div class="fs-sub">BEBAN USAHA</div>
      ${is.exp.map(r=>`<div class="fs-row indent"><span>${esc(r.name)}</span><span class="neg">${fmt(r.dr)}</span></div>`).join('')}
      <div class="fs-row subtotal"><span>Total Beban</span><span class="neg">(${fmt(is.totExp)})</span></div>
      <div class="fs-row grand"><span>${net>=0?'LABA BERSIH':'RUGI BERSIH'}</span><span>${fmt(Math.abs(net))}</span></div>
    </div>`;
  }

  return`<div class="fs-card">
    <div class="fs-header"><h3>Laporan Laba Rugi</h3><p>${esc(co)} · Periode: ${per}</p></div>
    ${needsHPP?`<div style="padding:10px 22px 0"><div class="alert alert-warn" style="margin:0"><span class="alert-icon">⚠</span><div style="font-size:12px">Lengkapi <strong>Perhitungan HPP</strong> untuk tampilan Laba Kotor yang lebih akurat. <button class="btn btn-ghost btn-xs" onclick="go('hpp')" style="margin-left:8px">Isi HPP →</button></div></div></div>`:''}
    <div class="fs-sub">PENDAPATAN</div>
    ${is.rev.map(r=>`<div class="fs-row indent"><span>${esc(r.name)}</span><span class="pos">${fmt(r.cr)}</span></div>`).join('')}
    <div class="fs-row subtotal"><span>Total Pendapatan</span><span class="pos">${fmt(is.totRev)}</span></div>
    <div class="fs-sub">BEBAN USAHA</div>
    ${is.exp.map(r=>`<div class="fs-row indent"><span>${esc(r.name)}</span><span class="neg">${fmt(r.dr)}</span></div>`).join('')}
    <div class="fs-row subtotal"><span>Total Beban</span><span class="neg">(${fmt(is.totExp)})</span></div>
    <div class="fs-row grand"><span>${is.net>=0?'LABA BERSIH':'RUGI BERSIH'}</span><span>${fmt(Math.abs(is.net))}</span></div>
  </div>`;
}

/* ═══════════════════════════════════════════
   PAGE: STEP 5 — JURNAL PENYESUAIAN
═══════════════════════════════════════════ */
function pgStep5(){
  const rows=db.adjustingEntries.map((t,i)=>`
    <tr>
      <td>${fmtD(t.date)}</td>
      <td style="font-weight:600;color:var(--primary)">${esc(t.ref)}</td>
      <td>${t.description}</td>
      <td class="num">${fmt(t.entries.reduce((s,e)=>s+(e.debit||0),0))}</td>
      <td><div class="flex-gap">
        <button class="btn btn-ghost btn-xs" onclick="openAjeModal(${i})">Edit</button>
        <button class="btn btn-danger btn-xs" onclick="delAje(${i})">Hapus</button>
      </div></td>
    </tr>`).join('');

  return`
  ${stepBar(5)}
  <div class="flex-between mb-16">
    <div class="page-header" style="margin:0">
      <h2>Jurnal Penyesuaian</h2>
      <p>Koreksi akhir periode: depresiasi, akrual, dan penyesuaian lainnya.</p>
    </div>
    <button class="btn btn-primary" onclick="openAjeModal()">+ Tambah Penyesuaian</button>
  </div>
  <div class="tip-box mb-16">
    <strong>Contoh penyesuaian umum:</strong><br>
    • <strong>Depresiasi</strong>: Debit Beban Penyusutan → Kredit Akum. Penyusutan<br>
    • <strong>Akrual beban</strong>: Debit Beban Gaji → Kredit Utang Gaji<br>
    • <strong>Sewa terpakai</strong>: Debit Beban Sewa → Kredit Beban Dibayar Dimuka<br>
    • <strong>Perlengkapan terpakai</strong>: Debit Beban Perlengkapan → Kredit Perlengkapan
  </div>
  ${db.adjustingEntries.length===0?`<div class="empty"><div class="empty-icon">📝</div><h3>Belum ada penyesuaian</h3><p>Klik "+ Tambah Penyesuaian" untuk membuat jurnal penyesuaian akhir periode.</p></div>`:`
  <div class="table-wrap">
    <table>
      <thead><tr><th>Tanggal</th><th>Ref</th><th>Keterangan</th><th class="text-right">Jumlah</th><th>Aksi</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`}
  <div class="flex-between" style="margin-top:16px">
    <button class="btn btn-ghost" onclick="go('step4')">← Langkah 4</button>
    <button class="btn btn-green" onclick="go('step6')">Lanjut ke Neraca Disesuaikan →</button>
  </div>`;
}

function openAjeModal(idx){
  const isEdit=idx!==undefined;
  const t=isEdit?db.adjustingEntries[idx]:{
    date:new Date().toISOString().slice(0,10),
    ref:'AJE-'+String(db.adjustingEntries.length+1).padStart(3,'0'),
    description:'',
    entries:[{account:'',debit:0,credit:0},{account:'',debit:0,credit:0}]
  };
  document.getElementById('modal-title').textContent=isEdit?'Edit Penyesuaian':'Tambah Jurnal Penyesuaian';
  document.getElementById('modal-body').innerHTML=`
    <div class="form-grid c3 mb-16">
      <div class="field"><label>Tanggal</label><input type="date" id="tx-date" value="${t.date}"></div>
      <div class="field"><label>Referensi</label><input type="text" id="tx-ref" value="${esc(t.ref)}"></div>
      <div class="field"><label>Keterangan</label><input type="text" id="tx-desc" value="${t.description}" placeholder="Contoh: Penyusutan peralatan"></div>
    </div>
    <div class="entry-row-head" style="margin-bottom:6px"><span>Akun</span><span>Debit</span><span>Kredit</span><span></span></div>
    <div id="entries-wrap">${t.entries.map((e,i)=>entryRowHTML(e,i)).join('')}</div>
    <button class="btn btn-ghost btn-sm" style="margin-top:10px" onclick="addEntryRow('entries-wrap')">+ Tambah Baris</button>
    <div id="bal-check" style="margin-top:10px"></div>`;
  document.getElementById('modal-foot').innerHTML=`
    <button class="btn btn-ghost" onclick="closeModal()">Batal</button>
    <button class="btn btn-primary" onclick="saveAje(${isEdit?idx:'undefined'})">Simpan</button>`;
  openModal();
}
window.openAjeModal=openAjeModal;

function saveAje(idx){
  const date=document.getElementById('tx-date').value;
  const ref=document.getElementById('tx-ref').value.trim();
  const desc=document.getElementById('tx-desc').value.trim();
  if(!date||!ref||!desc){toast('Isi semua field!');return}
  const entries=[];let tD=0,tK=0;
  document.querySelectorAll('#entries-wrap .entry-row').forEach(r=>{
    const sel=r.querySelector('select');const inp=r.querySelectorAll('input[type=number]');
    const D=parseFloat(inp[0].value)||0,K=parseFloat(inp[1].value)||0;
    if(sel.value&&(D||K)){entries.push({account:sel.value,debit:D,credit:K});tD+=D;tK+=K;}
  });
  if(entries.length<2){toast('Minimal 2 baris!');return}
  if(Math.abs(tD-tK)>0.5){toast('Total Debit dan Kredit harus sama!');return}
  const tx={date,ref,description:desc,entries};
  if(idx!==undefined)db.adjustingEntries[idx]=tx;else db.adjustingEntries.push(tx);
  saveData();closeModal();go('step5');toast('Penyesuaian berhasil disimpan!');
}
window.saveAje=saveAje;

function delAje(i){
  const t=db.adjustingEntries[i];
  openDangerModal({
    title:'Hapus Jurnal Penyesuaian',
    subtitle:'Entri penyesuaian berikut akan dihapus permanen.',
    items:[
      (t?.ref?t.ref+' — ':'')+(t?.description||'Penyesuaian ini'),
      'Tanggal: '+(t?.date||''),
      (t?.entries?.length||0)+' entri debit/kredit terkait',
    ],
    requireTyping:true,
    onConfirm:()=>{db.adjustingEntries.splice(i,1);saveData();go('step5');}
  });
}
window.delAje=delAje;

/* ═══════════════════════════════════════════
   PAGE: STEP 7 — LAPORAN KEUANGAN
═══════════════════════════════════════════ */
let fsTab='lr';
function pgStep7(){
  const tb=getTrialBalance('all');
  const is=getIS(tb);
  const bs=getBS(tb,is.net);
  const co=db.settings.company,per=periodLabel();

  /* Income Statement */
  const lr=lrHtml(is,co,per);

  /* Equity Statement */
  const ekuitas=`
  <div class="fs-card">
    <div class="fs-header"><h3>Laporan Perubahan Ekuitas</h3><p>${esc(co)} · Periode: ${per}</p></div>
    ${bs.eq.filter(r=>r.code!=='3-9000').map(r=>`<div class="fs-row indent"><span>${esc(r.name)}</span><span>${fmt(r.cr-r.dr)}</span></div>`).join('')}
    <div class="fs-row indent"><span>${is.net>=0?'Laba Bersih Periode Ini':'Rugi Bersih Periode Ini'}</span><span class="${is.net>=0?'pos':'neg'}">${fmt(is.net)}</span></div>
    <div class="fs-row grand"><span>TOTAL EKUITAS</span><span>${fmt(bs.totEq)}</span></div>
  </div>`;

  /* Balance Sheet */
  const aL=bs.assets.filter(a=>a.code.startsWith('1-1')),aT=bs.assets.filter(a=>a.code.startsWith('1-2'));
  const totAL=aL.reduce((s,r)=>s+r.dr-r.cr,0),totAT=aT.reduce((s,r)=>s+r.dr-r.cr,0);
  const lL=bs.liab.filter(a=>a.code.startsWith('2-1')),lP=bs.liab.filter(a=>a.code.startsWith('2-2'));
  const totLL=lL.reduce((s,r)=>s+r.cr,0),totLP=lP.reduce((s,r)=>s+r.cr,0);
  const neraca=`
  <div class="fs-card">
    <div class="fs-header"><h3>Neraca (Balance Sheet)</h3><p>${esc(co)} · Per ${per}</p></div>
    <div class="fs-two-col">
      <div class="fs-col">
        <div class="fs-sub">ASET LANCAR</div>
        ${aL.map(r=>`<div class="fs-row indent"><span>${esc(r.name)}</span><span>${fmt(r.dr-r.cr)}</span></div>`).join('')}
        <div class="fs-row subtotal"><span>Total Aset Lancar</span><span>${fmt(totAL)}</span></div>
        <div class="fs-sub">ASET TETAP</div>
        ${aT.map(r=>`<div class="fs-row indent"><span>${esc(r.name)}</span><span>${fmt(r.dr-r.cr)}</span></div>`).join('')}
        <div class="fs-row subtotal"><span>Total Aset Tetap (Neto)</span><span>${fmt(totAT)}</span></div>
        <div class="fs-row grand"><span>TOTAL ASET</span><span>${fmt(bs.totA)}</span></div>
      </div>
      <div class="fs-col">
        <div class="fs-sub">LIABILITAS JANGKA PENDEK</div>
        ${lL.map(r=>`<div class="fs-row indent"><span>${esc(r.name)}</span><span>${fmt(r.cr)}</span></div>`).join('')}
        <div class="fs-row subtotal"><span>Total Liabilitas Lancar</span><span>${fmt(totLL)}</span></div>
        <div class="fs-sub">LIABILITAS JANGKA PANJANG</div>
        ${lP.map(r=>`<div class="fs-row indent"><span>${esc(r.name)}</span><span>${fmt(r.cr)}</span></div>`).join('')||'<div class="fs-row indent text-muted"><span>—</span><span>—</span></div>'}
        <div class="fs-row subtotal"><span>Total Liabilitas</span><span>${fmt(bs.totL)}</span></div>
        <div class="fs-sub">EKUITAS</div>
        ${bs.eq.filter(r=>r.code!=='3-9000').map(r=>`<div class="fs-row indent"><span>${esc(r.name)}</span><span>${fmt(r.cr-r.dr)}</span></div>`).join('')}
        <div class="fs-row indent"><span>Laba Bersih</span><span class="${is.net>=0?'pos':'neg'}">${fmt(is.net)}</span></div>
        <div class="fs-row subtotal"><span>Total Ekuitas</span><span>${fmt(bs.totEq)}</span></div>
        <div class="fs-row grand"><span>TOTAL LIABILITAS + EKUITAS</span><span>${fmt(bs.totL+bs.totEq)}</span></div>
      </div>
    </div>
  </div>`;

  /* Cash Flow (simplified) */
  const led=getLedger('all');
  const kasEnd=netBal('1-1100',led)+netBal('1-1200',led);
  const arusKas=`
  <div class="fs-card">
    <div class="fs-header"><h3>Laporan Arus Kas (Disederhanakan)</h3><p>${esc(co)} · Periode: ${per}</p></div>
    <div class="fs-sub">AKTIVITAS OPERASI</div>
    <div class="fs-row indent"><span>Laba Bersih</span><span>${fmt(is.net)}</span></div>
    <div class="fs-row subtotal"><span>Arus Kas dari Operasi (estimasi)</span><span class="${is.net>=0?'pos':'neg'}">${fmt(is.net)}</span></div>
    <div class="fs-row grand"><span>Saldo Kas & Bank Akhir Periode</span><span class="pos">${fmt(kasEnd)}</span></div>
    <div class="alert alert-info" style="margin:12px 22px 16px"><span class="alert-icon">ℹ</span><span style="font-size:12px">Laporan arus kas lengkap memerlukan analisis perubahan modal kerja. Saldo kas diambil dari akun Kas dan Kas di Bank.</span></div>
  </div>`;

  const content={'lr':lr,'ekuitas':ekuitas,'neraca':neraca,'kas':arusKas};
  return`
  ${stepBar(7)}
  <div class="page-header"><h2>Laporan Keuangan</h2><p>Hasil akhir dari siklus akuntansi. Klik tab untuk berpindah antar laporan.</p></div>
  <div class="tabs">
    <button class="tab ${fsTab==='lr'?'active':''}" onclick="switchFsTab('lr',this)">Laba Rugi</button>
    <button class="tab ${fsTab==='ekuitas'?'active':''}" onclick="switchFsTab('ekuitas',this)">Ekuitas</button>
    <button class="tab ${fsTab==='neraca'?'active':''}" onclick="switchFsTab('neraca',this)">Neraca</button>
    <button class="tab ${fsTab==='kas'?'active':''}" onclick="switchFsTab('kas',this)">Arus Kas</button>
  </div>
  <div id="fs-content">${content[fsTab]}</div>
  <div class="flex-between" style="margin-top:16px">
    <button class="btn btn-ghost" onclick="go((db.settings.companyType==='dagang'||db.settings.companyType==='manufaktur')?'hpp':'step6')">← Kembali</button>
    <button class="btn btn-green" onclick="go('step8')">Lanjut ke Jurnal Penutup →</button>
  </div>`;
}

function switchFsTab(tab,btn){
  fsTab=tab;
  document.querySelectorAll('.tabs .tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const tb=getTrialBalance('all');const is=getIS(tb);const bs=getBS(tb,is.net);
  const co=db.settings.company,per=periodLabel();
  const led=getLedger('all');const kasEnd=netBal('1-1100',led)+netBal('1-1200',led);
  const content={
    lr:lrHtml(is,co,per),
    ekuitas:`<div class="fs-card"><div class="fs-header"><h3>Laporan Perubahan Ekuitas</h3><p>${esc(co)} · Periode: ${per}</p></div>${bs.eq.filter(r=>r.code!=='3-9000').map(r=>`<div class="fs-row indent"><span>${esc(r.name)}</span><span>${fmt(r.cr-r.dr)}</span></div>`).join('')}<div class="fs-row indent"><span>${is.net>=0?'Laba Bersih':'Rugi Bersih'} Periode Ini</span><span class="${is.net>=0?'pos':'neg'}">${fmt(is.net)}</span></div><div class="fs-row grand"><span>TOTAL EKUITAS</span><span>${fmt(bs.totEq)}</span></div></div>`,
    neraca:(()=>{const aL=bs.assets.filter(a=>a.code.startsWith('1-1')),aT=bs.assets.filter(a=>a.code.startsWith('1-2'));const totAL=aL.reduce((s,r)=>s+r.dr-r.cr,0),totAT=aT.reduce((s,r)=>s+r.dr-r.cr,0);const lL=bs.liab.filter(a=>a.code.startsWith('2-1')),lP=bs.liab.filter(a=>a.code.startsWith('2-2'));const totLL=lL.reduce((s,r)=>s+r.cr,0),totLP=lP.reduce((s,r)=>s+r.cr,0);return`<div class="fs-card"><div class="fs-header"><h3>Neraca</h3><p>${esc(co)} · Per ${per}</p></div><div class="fs-two-col"><div class="fs-col"><div class="fs-sub">ASET LANCAR</div>${aL.map(r=>`<div class="fs-row indent"><span>${esc(r.name)}</span><span>${fmt(r.dr-r.cr)}</span></div>`).join('')}<div class="fs-row subtotal"><span>Total Aset Lancar</span><span>${fmt(totAL)}</span></div><div class="fs-sub">ASET TETAP</div>${aT.map(r=>`<div class="fs-row indent"><span>${esc(r.name)}</span><span>${fmt(r.dr-r.cr)}</span></div>`).join('')}<div class="fs-row subtotal"><span>Total Aset Tetap</span><span>${fmt(totAT)}</span></div><div class="fs-row grand"><span>TOTAL ASET</span><span>${fmt(bs.totA)}</span></div></div><div class="fs-col"><div class="fs-sub">LIABILITAS JANGKA PENDEK</div>${lL.map(r=>`<div class="fs-row indent"><span>${esc(r.name)}</span><span>${fmt(r.cr)}</span></div>`).join('')}<div class="fs-row subtotal"><span>Total Liabilitas Lancar</span><span>${fmt(totLL)}</span></div><div class="fs-sub">EKUITAS</div>${bs.eq.filter(r=>r.code!=='3-9000').map(r=>`<div class="fs-row indent"><span>${esc(r.name)}</span><span>${fmt(r.cr-r.dr)}</span></div>`).join('')}<div class="fs-row indent"><span>Laba Bersih</span><span>${fmt(is.net)}</span></div><div class="fs-row subtotal"><span>Total Ekuitas</span><span>${fmt(bs.totEq)}</span></div><div class="fs-row grand"><span>TOTAL LIABILITAS + EKUITAS</span><span>${fmt(bs.totL+bs.totEq)}</span></div></div></div></div>`;})(),
    kas:`<div class="fs-card"><div class="fs-header"><h3>Arus Kas (Disederhanakan)</h3><p>${esc(co)} · Periode: ${per}</p></div><div class="fs-sub">AKTIVITAS OPERASI</div><div class="fs-row indent"><span>Laba Bersih</span><span>${fmt(is.net)}</span></div><div class="fs-row subtotal"><span>Arus Kas Operasi (estimasi)</span><span class="${is.net>=0?'pos':'neg'}">${fmt(is.net)}</span></div><div class="fs-row grand"><span>Saldo Kas & Bank Akhir Periode</span><span class="pos">${fmt(kasEnd)}</span></div></div>`,
  };
  document.getElementById('fs-content').innerHTML=content[tab]||'';
}
window.switchFsTab=switchFsTab;

/* ═══════════════════════════════════════════
   PAGE: STEP 8 — JURNAL PENUTUP
═══════════════════════════════════════════ */
function pgStep8(){
  const tb=getTrialBalance('all');
  const is=getIS(tb);
  const prive=tb.find(r=>r.code==='3-2000');

  const ce=[];
  if(is.totRev>0){
    const e=[...is.rev.map(r=>({account:r.code,debit:r.cr,credit:0})),{account:'3-9000',debit:0,credit:is.totRev}];
    ce.push({ref:'JTP-1',desc:'Menutup semua akun pendapatan ke Ikhtisar L/R',entries:e});
  }
  if(is.totExp>0){
    const e=[{account:'3-9000',debit:is.totExp,credit:0},...is.exp.map(r=>({account:r.code,debit:0,credit:r.dr}))];
    ce.push({ref:'JTP-2',desc:'Menutup semua akun beban ke Ikhtisar L/R',entries:e});
  }
  if(is.net!==0){
    const e=is.net>=0
      ?[{account:'3-9000',debit:is.net,credit:0},{account:'3-1000',debit:0,credit:is.net}]
      :[{account:'3-1000',debit:-is.net,credit:0},{account:'3-9000',debit:0,credit:-is.net}];
    ce.push({ref:'JTP-3',desc:is.net>=0?'Memindahkan laba bersih ke Modal':'Memindahkan rugi bersih ke Modal',entries:e});
  }
  if(prive&&prive.dr>0){
    ce.push({ref:'JTP-4',desc:'Menutup akun Prive ke Modal',entries:[{account:'3-1000',debit:prive.dr,credit:0},{account:'3-2000',debit:0,credit:prive.dr}]});
  }

  const rows=ce.flatMap(c=>c.entries.map((e,ei)=>({
    ref:ei===0?c.ref:'',desc:ei===0?c.desc:'',
    name:acc(e.account)?.name||e.account,
    D:e.debit||0,K:e.credit||0
  })));

  const postTb=getTrialBalance('all').filter(r=>['Aset','Liabilitas','Ekuitas'].includes(r.type)&&r.code!=='3-9000'&&r.code!=='3-2000');
  const modal=acc('3-1000');
  const newCapital=(tb.find(r=>r.code==='3-1000')?.cr||0)+is.net-(prive?.dr||0);

  return`
  ${stepBar(8)}
  <div class="page-header">
    <h2>Jurnal Penutup</h2>
    <p>Menutup akun nominal (pendapatan, beban, prive) agar siap untuk periode berikutnya. Dibuat otomatis.</p>
  </div>
  <div class="alert alert-info mb-16"><span class="alert-icon">✨</span><div>Jurnal penutup ini <strong>dibuat otomatis</strong> dari data neraca saldo disesuaikan. Anda tidak perlu input manual.</div></div>
  ${rows.length===0?`<div class="empty"><div class="empty-icon">🔒</div><h3>Belum ada data untuk ditutup</h3><p>Pastikan Langkah 1–6 telah diisi dengan benar.</p></div>`:`
  <div class="table-wrap mb-16">
    <table>
      <thead><tr><th>Ref</th><th>Nama Akun</th><th class="text-right">Debit</th><th class="text-right">Kredit</th><th>Keterangan</th></tr></thead>
      <tbody>${rows.map(r=>`<tr>
        <td style="font-weight:600;color:var(--primary)">${esc(r.ref)}</td>
        <td ${r.K?'style="padding-left:28px"':''}>${esc(r.name)}</td>
        <td class="num dr">${r.D?fmt(r.D):''}</td>
        <td class="num cr">${r.K?fmt(r.K):''}</td>
        <td class="text-muted text-sm">${esc(r.desc)}</td>
      </tr>`).join('')}</tbody>
    </table>
  </div>
  <div class="stats-row" style="grid-template-columns:repeat(3,1fr);margin-bottom:20px">
    <div class="stat-box"><div class="stat-label">${is.net>=0?'Laba Bersih':'Rugi Bersih'}</div><div class="stat-value ${is.net>=0?'green':'red'}">${fmt(Math.abs(is.net))}</div></div>
    <div class="stat-box"><div class="stat-label">Modal Akhir Periode</div><div class="stat-value orange">${fmt(newCapital)}</div></div>
    <div class="stat-box"><div class="stat-label">Total Aset</div><div class="stat-value">${fmt(getBS(tb,is.net).totA)}</div></div>
  </div>
  <div class="card">
    <div class="card-title">Neraca Saldo Setelah Penutupan</div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Kode</th><th>Nama Akun</th><th class="text-right">Debit</th><th class="text-right">Kredit</th></tr></thead>
        <tbody>${postTb.map(r=>`<tr><td class="text-muted text-sm" style="font-family:monospace">${r.code}</td><td>${esc(r.name)}</td><td class="num dr">${r.dr?fmt(r.dr):''}</td><td class="num cr">${r.cr?fmt(r.cr):''}</td></tr>`).join('')}</tbody>
      </table>
    </div>
    <div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--line)">
      <p class="text-muted text-sm mb-8">Siklus akuntansi periode <strong>${periodLabel()}</strong> telah selesai.</p>
      <button class="btn btn-primary" onclick="startNewPeriod()">🔄 Mulai Periode Baru</button>
    </div>
  </div>`}
  <div class="flex-between" style="margin-top:16px">
    <button class="btn btn-ghost" onclick="go('step7')">← Langkah 7</button>
    <button class="btn btn-green" onclick="go('dashboard')">Kembali ke Dasbor</button>
  </div>`;
}

function showResetPeriodWarning(){
  const txCount=db.transactions.length;
  const adjCount=db.adjustingEntries.length;
  openDangerModal({
    title:'Reset Periode '+(periodLabel()),
    subtitle:'Semua transaksi periode ini akan dihapus permanen. Data tidak bisa dikembalikan.',
    items:[
      txCount+' transaksi di jurnal umum periode ini',
      adjCount+' jurnal penyesuaian periode ini',
      'Data HPP periode ini (jika ada)',
      'Catatan: COA dan pengaturan perusahaan tidak terpengaruh',
    ],
    requireTyping:true,
    onConfirm:()=>{
      db.transactions=[];db.adjustingEntries=[];db.hppData={};
      saveData();
      toast('Data periode '+periodLabel()+' berhasil direset.');
      go('dashboard');
    }
  });
}
window.showResetPeriodWarning=showResetPeriodWarning;

function startNewPeriod(){
  if(!confirm('Mulai periode baru?\n\nData periode ini akan tetap tersimpan dan dapat diakses di "Riwayat Periode". COA dan pengaturan tidak berubah.'))return;
  /* Current period data is already saved to IDB via saveData().
     Just advance the period key and clear in-memory transactions. */
  const[y,m]=db.settings.period.split('-');let nm=+m+1,ny=+y;
  if(nm>12){nm=1;ny++;}
  db.settings.period=ny+'-'+String(nm).padStart(2,'0');
  db.transactions=[];db.adjustingEntries=[];db.hppData={};
  saveData();
  toast('Periode baru dimulai: '+periodLabel()+' — data lama tetap tersimpan');
  go('dashboard');
}
window.startNewPeriod=startNewPeriod;

/* ═══════════════════════════════════════════
   PAGE: COA
═══════════════════════════════════════════ */
function pgCOA(){
  const types=['Aset','Liabilitas','Ekuitas','Pendapatan','Beban'];
  const bm={Aset:'badge-asset',Liabilitas:'badge-liability',Ekuitas:'badge-equity',Pendapatan:'badge-revenue',Beban:'badge-expense'};
  const grouped={};types.forEach(t=>{grouped[t]=db.coa.filter(a=>a.type===t)});
  return`
  <div class="flex-between mb-24">
    <div class="page-header" style="margin:0"><h2>Kode Akun (COA)</h2><p>Kelola semua akun yang digunakan dalam sistem.</p></div>
    <button class="btn btn-primary" onclick="openCoaModal()">+ Tambah Akun</button>
  </div>
  ${types.map(t=>!grouped[t].length?'':`
  <div class="card mb-16">
    <div class="card-title"><span class="badge ${bm[t]}">${t}</span> <span style="font-weight:400;margin-left:6px">${grouped[t].length} akun</span></div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Kode</th><th>Nama Akun</th><th>Normal</th><th>Aksi</th></tr></thead>
        <tbody>${grouped[t].map(a=>`<tr>
          <td style="font-family:monospace;font-weight:600;color:var(--primary)">${esc(a.code)}</td>
          <td>${esc(a.name)}</td>
          <td><span class="badge" style="background:var(--cream);color:var(--muted)">${a.normal==='D'?'Debit':'Kredit'}</span></td>
          <td><div class="flex-gap">
            <button class="btn btn-ghost btn-xs" onclick="openCoaModal('${a.code}')">Edit</button>
            <button class="btn btn-danger btn-xs" onclick="delCoa('${a.code}')">Hapus</button>
          </div></td>
        </tr>`).join('')}</tbody>
      </table>
    </div>
  </div>`).join('')}`;
}

function openCoaModal(code){
  const isEdit=!!code;
  const a=isEdit?db.coa.find(x=>x.code===code):{code:'',name:'',type:'Aset',normal:'D'};
  const normalMap={Aset:'D',Liabilitas:'K',Ekuitas:'K',Pendapatan:'K',Beban:'D'};
  document.getElementById('modal-title').textContent=isEdit?'Edit Akun':'Tambah Akun Baru';
  document.getElementById('modal-body').innerHTML=`
    <div class="form-grid c2">
      <div class="field"><label>Kode Akun</label><input type="text" id="coa-code" value="${esc(a.code)}" placeholder="1-1000" ${isEdit?'readonly':''}></div>
      <div class="field"><label>Nama Akun</label><input type="text" id="coa-name" value="${esc(a.name)}" placeholder="Contoh: Kas"></div>
      <div class="field"><label>Tipe Akun</label><select id="coa-type" onchange="const nm={'Aset':'D','Liabilitas':'K','Ekuitas':'K','Pendapatan':'K','Beban':'D'};document.getElementById('coa-normal').value=nm[this.value]||'D'">
        ${['Aset','Liabilitas','Ekuitas','Pendapatan','Beban'].map(t=>`<option ${t===a.type?'selected':''}>${t}</option>`).join('')}
      </select></div>
      <div class="field"><label>Saldo Normal</label><select id="coa-normal">
        <option value="D" ${a.normal==='D'?'selected':''}>Debit</option>
        <option value="K" ${a.normal==='K'?'selected':''}>Kredit</option>
      </select></div>
    </div>`;
  document.getElementById('modal-foot').innerHTML=`
    <button class="btn btn-ghost" onclick="closeModal()">Batal</button>
    <button class="btn btn-primary" onclick="saveCoa('${isEdit?code:''}')">Simpan</button>`;
  openModal();
}
window.openCoaModal=openCoaModal;

function saveCoa(oldCode){
  const code=document.getElementById('coa-code').value.trim();
  const name=document.getElementById('coa-name').value.trim();
  const type=document.getElementById('coa-type').value;
  const normal=document.getElementById('coa-normal').value;
  if(!code||!name){toast('Isi kode dan nama akun!');return}
  if(oldCode){
    const i=db.coa.findIndex(a=>a.code===oldCode);
    if(i>=0)db.coa[i]={code,name,type,normal};
  } else {
    if(db.coa.find(a=>a.code===code)){toast('Kode akun sudah ada!');return}
    db.coa.push({code,name,type,normal});
    db.coa.sort((a,b)=>a.code.localeCompare(b.code));
  }
  saveData();closeModal();go('coa');toast('Akun berhasil disimpan!');
}
window.saveCoa=saveCoa;

function delCoa(code){
  const a=db.coa.find(x=>x.code===code);
  openDangerModal({
    title:'Hapus Akun (COA)',
    subtitle:'Akun berikut akan dihapus permanen dari Kode Akun.',
    items:[
      (a?.code||code)+' — '+(a?.name||'Akun ini'),
      'Tipe: '+(a?.type||'')+'  ·  Normal: '+(a?.normal==='D'?'Debit':'Kredit'),
      'Pastikan akun ini tidak dipakai di jurnal transaksi manapun',
    ],
    requireTyping:true,
    onConfirm:()=>{db.coa=db.coa.filter(x=>x.code!==code);saveData();go('coa');}
  });
}
window.delCoa=delCoa;

/* ═══════════════════════════════════════════
   PAGE: ANALITIK
═══════════════════════════════════════════ */
let analitikTab='month';

const ANALITIK_TABS=[
  ['day','Harian'],['week','Mingguan'],['month','Bulanan'],
  ['quarter','Kuartalan'],['year','Tahunan']
];

function getAnalyticsData(groupBy){
  /* Use cache (all periods) when available, fall back to current period */
  const src=analyticsCache||db;
  const all=[...(src.transactions||[]),...(src.adjustingEntries||[])];
  const grouped={};
  all.forEach(t=>{
    const d=new Date(t.date+'T00:00:00');
    let key;
    if(groupBy==='day') key=t.date;
    else if(groupBy==='week'){
      const wd=d.getDay()||7;
      const mon=new Date(d);mon.setDate(d.getDate()-wd+1);
      key=mon.toISOString().slice(0,10);
    }
    else if(groupBy==='month') key=t.date.slice(0,7);
    else if(groupBy==='quarter'){
      const q=Math.ceil((d.getMonth()+1)/3);
      key=d.getFullYear()+'-Q'+q;
    }
    else key=String(d.getFullYear());
    if(!grouped[key])grouped[key]={pendapatan:0,beban:0,txCount:0};
    grouped[key].txCount++;
    t.entries.forEach(e=>{
      const a=acc(e.account);if(!a)return;
      if(a.type==='Pendapatan')grouped[key].pendapatan+=(e.credit||0)-(e.debit||0);
      else if(a.type==='Beban')grouped[key].beban+=(e.debit||0)-(e.credit||0);
    });
  });
  return Object.keys(grouped).sort().map(k=>({key:k,...grouped[k],laba:grouped[k].pendapatan-grouped[k].beban}));
}

function fmtGroupKey(key,groupBy){
  if(groupBy==='day')return fmtD(key);
  if(groupBy==='week'){
    const mon=new Date(key+'T00:00:00');
    const sun=new Date(mon);sun.setDate(mon.getDate()+6);
    return fmtD(key)+' – '+sun.toLocaleDateString('id-ID',{day:'2-digit',month:'short'});
  }
  if(groupBy==='month'){
    const[y,m]=key.split('-');
    const mn=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][parseInt(m)-1];
    return mn+' '+y;
  }
  if(groupBy==='quarter')return key.replace('-Q',' Q');
  return 'Tahun '+key;
}

function pgAnalitik(){
  /* Load all periods into analyticsCache for cross-period aggregation */
  if(!idb&&!analyticsCache){
    analyticsCache={transactions:db.transactions,adjustingEntries:db.adjustingEntries};
  }
  if(!analyticsCache){
    idbGetAll('periods').then(all=>{
      /* Merge in-memory current period */
      const idx=all.findIndex(p=>p.period===db.settings.period);
      const curr={period:db.settings.period,transactions:db.transactions,adjustingEntries:db.adjustingEntries};
      if(idx>=0)all[idx]=curr;else all.push(curr);
      analyticsCache={
        transactions:all.flatMap(p=>p.transactions||[]),
        adjustingEntries:all.flatMap(p=>p.adjustingEntries||[]),
      };
      go('analitik');
    });
    return`<div class="empty"><div style="font-size:2rem;margin-bottom:12px">⏳</div><h3>Memuat data semua periode...</h3></div>`;
  }
  const data=getAnalyticsData(analitikTab);
  const totP=data.reduce((s,d)=>s+d.pendapatan,0);
  const totB=data.reduce((s,d)=>s+d.beban,0);
  const totL=totP-totB;
  const tabLabel=ANALITIK_TABS.find(t=>t[0]===analitikTab)?.[1]||'';
  const empty=data.length===0;

  return`
  <div class="page-header">
    <h2>Laporan Analitik</h2>
    <p>Tren keuangan dari <strong>semua periode</strong> yang tersimpan — harian, mingguan, bulanan, kuartalan, tahunan.</p>
  </div>
  <div class="tabs">
    ${ANALITIK_TABS.map(([k,l])=>`<button class="tab ${analitikTab===k?'active':''}" onclick="switchAnalitikTab('${k}',this)">${l}</button>`).join('')}
  </div>
  ${empty?`<div class="empty"><div class="empty-icon">📈</div><h3>Belum ada data transaksi</h3><p>Tambah transaksi di Langkah 1 untuk melihat analitik.</p><button class="btn btn-primary" onclick="go('step1')">+ Tambah Transaksi</button></div>` : `
  <div class="stats-row" style="grid-template-columns:repeat(3,1fr);margin-bottom:20px">
    <div class="stat-box">
      <div class="stat-label">Total Pendapatan</div>
      <div class="stat-value green">${fmt(totP)}</div>
      <div class="stat-delta">${data.length} ${tabLabel.toLowerCase()} tercatat</div>
    </div>
    <div class="stat-box">
      <div class="stat-label">Total Beban</div>
      <div class="stat-value red">${fmt(totB)}</div>
    </div>
    <div class="stat-box">
      <div class="stat-label">${totL>=0?'Laba Bersih':'Rugi Bersih'}</div>
      <div class="stat-value ${totL>=0?'green':'red'}">${fmt(Math.abs(totL))}</div>
      <div class="stat-delta">${totL>=0?'Margin: '+(totP?Math.round(totL/totP*100)+'%':'—'):'Rugi periode ini'}</div>
    </div>
  </div>

  <div class="chart-card mb-16">
    <div class="chart-card-title">Tren ${tabLabel} — Pendapatan vs Beban vs Laba</div>
    <canvas id="ch-analitik" style="max-height:280px"></canvas>
  </div>

  <div class="table-wrap">
    <table>
      <thead><tr>
        <th>Periode</th>
        <th class="text-right">Pendapatan</th>
        <th class="text-right">Beban</th>
        <th class="text-right">Laba / Rugi</th>
        <th class="text-right">Margin</th>
        <th class="text-right">Transaksi</th>
      </tr></thead>
      <tbody>${data.map(d=>`<tr>
        <td style="font-weight:600;color:var(--navy)">${fmtGroupKey(d.key,analitikTab)}</td>
        <td class="num ${d.pendapatan?'pos':''}">${d.pendapatan?fmt(d.pendapatan):'—'}</td>
        <td class="num ${d.beban?'neg':''}">${d.beban?fmt(d.beban):'—'}</td>
        <td class="num ${d.laba>=0?'pos':'neg'}">${d.laba?fmt(Math.abs(d.laba))+(d.laba<0?' ▼':''):''||'—'}</td>
        <td class="num text-muted">${d.pendapatan?Math.round(d.laba/d.pendapatan*100)+'%':'—'}</td>
        <td class="num text-muted">${d.txCount}</td>
      </tr>`).join('')}</tbody>
      <tfoot><tr class="tfoot-row">
        <td>TOTAL</td>
        <td class="num pos">${fmt(totP)}</td>
        <td class="num neg">${fmt(totB)}</td>
        <td class="num ${totL>=0?'pos':'neg'}">${fmt(Math.abs(totL))}</td>
        <td class="num">${totP?Math.round(totL/totP*100)+'%':'—'}</td>
        <td class="num">${data.reduce((s,d)=>s+d.txCount,0)}</td>
      </tr></tfoot>
    </table>
  </div>`}`;
}

function initAnalitikChart(){
  const data=getAnalyticsData(analitikTab);
  const canvas=document.getElementById('ch-analitik');
  if(!canvas||!data.length)return;
  const labels=data.map(d=>fmtGroupKey(d.key,analitikTab));
  const useLine=analitikTab==='day'||analitikTab==='week';
  new Chart(canvas,{
    type:useLine?'line':'bar',
    data:{
      labels,
      datasets:[
        {label:'Pendapatan',data:data.map(d=>d.pendapatan),
         backgroundColor:'rgba(91,138,95,.2)',borderColor:'rgba(91,138,95,.85)',
         fill:useLine,tension:.35,borderRadius:useLine?0:6,borderWidth:2,pointRadius:4},
        {label:'Beban',data:data.map(d=>d.beban),
         backgroundColor:'rgba(192,57,43,.18)',borderColor:'rgba(192,57,43,.8)',
         fill:useLine,tension:.35,borderRadius:useLine?0:6,borderWidth:2,pointRadius:4},
        {label:'Laba/Rugi',data:data.map(d=>d.laba),
         backgroundColor:data.map(d=>d.laba>=0?'rgba(30,64,175,.65)':'rgba(192,57,43,.4)'),
         borderColor:data.map(d=>d.laba>=0?'rgba(30,64,175,.85)':'rgba(192,57,43,.8)'),
         fill:false,tension:.35,borderRadius:useLine?0:6,borderWidth:2,pointRadius:4},
      ]
    },
    options:{
      responsive:true,
      plugins:{
        legend:{labels:{color:'#8A7A72',font:{size:11,family:'DM Sans'},padding:16}},
      },
      scales:{
        x:{ticks:{color:'#8A7A72',font:{size:10,family:'DM Sans'}},grid:{color:'rgba(229,217,207,.4)'}},
        y:{ticks:{color:'#8A7A72',font:{size:10},callback:v=>{
          if(Math.abs(v)>=1000000)return'Rp '+(v/1000000).toFixed(1)+'jt';
          if(Math.abs(v)>=1000)return'Rp '+(v/1000).toFixed(0)+'rb';
          return'Rp '+v;
        }},grid:{color:'rgba(229,217,207,.4)'}},
      }
    }
  });
}
window.initAnalitikChart=initAnalitikChart;

function switchAnalitikTab(tab){
  analitikTab=tab;
  go('analitik');
}
window.switchAnalitikTab=switchAnalitikTab;

/* ═══════════════════════════════════════════
   PAGE: SETTINGS
═══════════════════════════════════════════ */
function pgSettings(){
  const s=db.settings;
  const typeLabel=TYPE_LABELS[s.companyType]||'Belum dipilih';
  const hppBadge=(s.companyType==='dagang'||s.companyType==='manufaktur')?` <span class="badge" style="background:rgba(224,90,58,.12);color:var(--primary)">+ HPP</span>`:'';
  return`
  <div class="page-header"><h2>Pengaturan Perusahaan</h2><p>Informasi bisnis dan periode akuntansi.</p></div>

  <div class="card" style="max-width:520px;margin-bottom:16px">
    <div class="card-title">Jenis Perusahaan</div>
    <div style="display:flex;align-items:center;justify-content:space-between;gap:12px">
      <div>
        <div style="font-size:15px;font-weight:700;color:var(--navy);font-family:'Fraunces',serif">${typeLabel}${hppBadge}</div>
        <div class="text-muted text-sm" style="margin-top:3px">COA dan fitur disesuaikan dengan jenis ini</div>
      </div>
      <button class="btn btn-ghost btn-sm" onclick="showChangeTypeWarning()">Ganti Jenis</button>
    </div>
  </div>

  <div class="card" style="max-width:520px">
    <div class="card-title">Informasi Perusahaan</div>
    <div class="form-grid">
      <div class="field"><label>Nama Perusahaan / UMKM</label><input type="text" id="s-company" value="${esc(s.company)}" placeholder="Nama Usaha Anda"></div>
      <div class="field"><label>Nama Pemilik</label><input type="text" id="s-owner" value="${esc(s.owner)}"></div>
      <div class="field"><label>Alamat</label><textarea id="s-address">${esc(s.address||'')}</textarea></div>
      <div class="form-grid c2">
        <div class="field"><label>Periode (YYYY-MM)</label><input type="month" id="s-period" value="${s.period}"></div>
        <div class="field"><label>Simbol Mata Uang</label><input type="text" id="s-currency" value="${s.currency}" placeholder="Rp" maxlength="5"></div>
      </div>
    </div>
    <div style="margin-top:16px"><button class="btn btn-primary" onclick="saveSettings()">Simpan Pengaturan</button></div>
  </div>
  <div class="card" style="max-width:520px">
    <div class="card-title">Backup & Restore Data</div>
    <p class="text-muted text-sm mb-16">Data tersimpan di browser (IndexedDB) dan mendukung <strong>ratusan ribu transaksi</strong> lintas periode. Ekspor untuk backup atau impor untuk restore.</p>
    <div class="flex-gap">
      <button class="btn btn-navy" onclick="exportJSON()">⬇ Ekspor Semua Periode</button>
      <button class="btn btn-ghost" onclick="document.getElementById('import-file').click()">⬆ Impor JSON</button>
      <input type="file" id="import-file" accept=".json" style="display:none" onchange="importJSON(event)">
    </div>
    <hr class="divider">
    <button class="btn btn-danger btn-sm" onclick="resetAllData()">🗑 Hapus Semua Data</button>
  </div>`;
}

function saveSettings(){
  db.settings.company=document.getElementById('s-company').value.trim()||db.settings.company;
  db.settings.owner=document.getElementById('s-owner').value.trim();
  db.settings.address=document.getElementById('s-address').value.trim();
  db.settings.period=document.getElementById('s-period').value||db.settings.period;
  db.settings.currency=document.getElementById('s-currency').value.trim()||'Rp';
  saveData();toast('Pengaturan disimpan!');go('settings');
}
window.saveSettings=saveSettings;

function exportJSON(){
  toast('Menyiapkan ekspor semua periode...');
  idbGetAll('periods').then(periods=>{
    /* Make sure current in-memory period is included and up-to-date */
    const idx=periods.findIndex(p=>p.period===db.settings.period);
    const curr={period:db.settings.period,transactions:db.transactions,adjustingEntries:db.adjustingEntries,hppData:db.hppData||{}};
    if(idx>=0)periods[idx]=curr;else periods.push(curr);
    const exportData={version:2,settings:db.settings,coa:db.coa,periods:periods.sort((a,b)=>a.period.localeCompare(b.period)),exportDate:new Date().toISOString()};
    const b=new Blob([JSON.stringify(exportData,null,2)],{type:'application/json'});
    const a=document.createElement('a');a.href=URL.createObjectURL(b);
    a.download='akuntansi-'+db.settings.company.replace(/\s+/g,'-')+'-semua-periode.json';a.click();
    toast('Ekspor selesai — '+periods.length+' periode tersimpan!');
  });
}
window.exportJSON=exportJSON;

function importJSON(e){
  const f=e.target.files[0];if(!f)return;
  const r=new FileReader();
  r.onload=ev=>{
    try{
      const d=JSON.parse(ev.target.result);
      if(!d.settings&&!d.coa){toast('File tidak valid!');return;}
      const periodeCount=d.periods?.length||1;
      openDangerModal({
        title:'Impor Data — Ganti Semua Data',
        subtitle:'Semua data yang ada sekarang akan diganti dengan data dari file impor.',
        items:[
          'Semua '+db.transactions.length+' transaksi periode aktif saat ini',
          'Seluruh riwayat periode yang tersimpan',
          'Pengaturan perusahaan dan COA saat ini',
          'Akan diganti dengan '+periodeCount+' periode dari file: '+f.name,
        ],
        requireTyping:true,
        onConfirm:async()=>{
          try{
            await idbClearAll();
            db.settings={...db.settings,...d.settings};
            db.coa=d.coa||db.coa;
            if(d.periods&&Array.isArray(d.periods)){
              for(const p of d.periods)await idbPut('periods',p);
            } else {
              await idbPut('periods',{period:d.settings?.period||db.settings.period,transactions:d.transactions||[],adjustingEntries:d.adjustingEntries||[],hppData:d.hppData||{}});
            }
            const pd=await idbGet('periods',db.settings.period);
            db.transactions=pd?.transactions||[];db.adjustingEntries=pd?.adjustingEntries||[];db.hppData=pd?.hppData||{};
            saveData();go('dashboard');toast('Data berhasil diimpor!');
          }catch(err){console.error(err);toast('Gagal mengimpor data!');}
        }
      });
    }catch(err){toast('Gagal membaca file!');}
  };
  r.readAsText(f);
}
window.importJSON=importJSON;

function showChangeTypeWarning(){
  openDangerModal({
    title:'Ganti Jenis Perusahaan',
    subtitle:'Kode Akun (COA) akan direset ke default jenis baru. Transaksi yang menggunakan akun lama mungkin tidak cocok.',
    items:[
      'Seluruh daftar Kode Akun (COA) akan diganti',
      'Transaksi yang ada tidak dihapus, tapi kode akun bisa tidak sesuai',
      'Pengaturan HPP akan disesuaikan dengan jenis baru',
    ],
    requireTyping:true,
    onConfirm:()=>{showWelcome();}
  });
}
window.showChangeTypeWarning=showChangeTypeWarning;

/* ═══════════════════════════════════════════
   DANGER MODAL
═══════════════════════════════════════════ */
let _dangerAction=null;

function openDangerModal({title,subtitle,items,requireTyping=false,onConfirm}){
  document.getElementById('danger-title').textContent=title;
  document.getElementById('danger-subtitle').textContent=subtitle;
  document.getElementById('danger-list').innerHTML=items.map(i=>`<li>${esc(i)}</li>`).join('');
  const typeField=document.getElementById('danger-type-field');
  const typeInput=document.getElementById('danger-type-input');
  const confirmBtn=document.getElementById('danger-confirm-btn');
  typeField.style.display=requireTyping?'block':'none';
  typeInput.value='';
  typeInput.classList.remove('danger-type-input-shake');
  confirmBtn.classList.toggle('ready',!requireTyping);
  confirmBtn.textContent=requireTyping?'Ketik HAPUS untuk melanjutkan':'Hapus Sekarang';
  _dangerAction=onConfirm;
  document.getElementById('danger-bg').classList.add('open');
  if(requireTyping)setTimeout(()=>typeInput.focus(),80);
}
window.openDangerModal=openDangerModal;

function closeDangerModal(){
  document.getElementById('danger-bg').classList.remove('open');
  _dangerAction=null;
}
window.closeDangerModal=closeDangerModal;

function checkDangerConfirm(input){
  const ready=input.value.trim().toUpperCase()==='HAPUS';
  const btn=document.getElementById('danger-confirm-btn');
  btn.classList.toggle('ready',ready);
  btn.textContent=ready?'Hapus Sekarang':'Ketik HAPUS untuk melanjutkan';
}
window.checkDangerConfirm=checkDangerConfirm;

function executeDangerAction(){
  const btn=document.getElementById('danger-confirm-btn');
  if(!btn.classList.contains('ready')){
    const inp=document.getElementById('danger-type-input');
    inp.classList.remove('danger-type-input-shake');
    void inp.offsetWidth; /* force reflow to restart animation */
    inp.classList.add('danger-type-input-shake');
    inp.focus();
    return;
  }
  const action=_dangerAction; /* save before closeDangerModal nullifies _dangerAction */
  closeDangerModal();
  if(action)action();
}
window.executeDangerAction=executeDangerAction;

document.getElementById('danger-bg').addEventListener('click',function(e){if(e.target===this)closeDangerModal();});

async function resetAllData(){
  openDangerModal({
    title:'Hapus Semua Data',
    subtitle:'Tindakan ini TIDAK DAPAT dibatalkan. Semua data akan hilang selamanya.',
    items:[
      'Seluruh riwayat transaksi dari semua periode',
      'Seluruh jurnal penyesuaian dari semua periode',
      'Seluruh riwayat periode yang tersimpan',
      'Pengaturan perusahaan dan daftar akun (COA)',
      'Data HPP yang pernah dimasukkan',
    ],
    requireTyping:true,
    onConfirm:async()=>{
      await idbClearAll();
      db={settings:{company:'Perusahaan Saya',owner:'',address:'',period:'2026-01',currency:'Rp',companyType:null},coa:DEFAULT_COA.map(a=>({...a})),transactions:[],adjustingEntries:[],hppData:{}};
      analyticsCache=null;periodsListCache=null;
      toast('Semua data berhasil dihapus.');
      go('dashboard');showWelcome();
    }
  });
}
window.resetAllData=resetAllData;

/* ═══════════════════════════════════════════
   PAGE: RIWAYAT PERIODE
═══════════════════════════════════════════ */
function pgPeriods(){
  if(!idb){
    /* IDB unavailable - show current period only */
    periodsListCache=[{period:db.settings.period,transactions:db.transactions,adjustingEntries:db.adjustingEntries,hppData:db.hppData||{}}];
  }
  if(!periodsListCache){
    idbGetAll('periods').then(all=>{
      /* Merge in-memory current period to ensure it's up to date */
      const idx=all.findIndex(p=>p.period===db.settings.period);
      const curr={period:db.settings.period,transactions:db.transactions,adjustingEntries:db.adjustingEntries,hppData:db.hppData||{}};
      if(idx>=0)all[idx]=curr;else all.push(curr);
      periodsListCache=all.sort((a,b)=>b.period.localeCompare(a.period));
      go('periods');
    });
    return`<div class="empty"><div style="font-size:2rem;margin-bottom:12px">⏳</div><h3>Memuat riwayat periode...</h3></div>`;
  }
  const periods=periodsListCache;
  const MONTHS=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];

  function periodSummary(p){
    const allTx=[...(p.transactions||[]),...(p.adjustingEntries||[])];
    let totP=0,totB=0;
    allTx.forEach(t=>t.entries.forEach(e=>{
      const a=db.coa.find(ac=>ac.code===e.account);if(!a)return;
      if(a.type==='Pendapatan')totP+=(e.credit||0)-(e.debit||0);
      else if(a.type==='Beban')totB+=(e.debit||0)-(e.credit||0);
    }));
    return{txCount:(p.transactions||[]).length+(p.adjustingEntries||[]).length,totP,totB,net:totP-totB};
  }

  const summaries=periods.map(periodSummary);
  const totAll=summaries.reduce((s,d)=>{s.txCount+=d.txCount;s.totP+=d.totP;s.totB+=d.totB;return s;},{txCount:0,totP:0,totB:0});
  const netAll=totAll.totP-totAll.totB;

  const rows=periods.map((p,i)=>{
    const s=summaries[i];
    const isActive=p.period===db.settings.period;
    const[y,m]=p.period.split('-');
    const label=(MONTHS[parseInt(m)-1]||m)+' '+y;
    return`<tr ${isActive?'style="background:rgba(224,90,58,.05)"':''}>
      <td style="font-weight:700;color:var(--navy)">${label} ${isActive?`<span style="background:rgba(224,90,58,.12);color:var(--primary);font-size:10px;padding:2px 6px;border-radius:99px;font-weight:700">Aktif</span>`:''}</td>
      <td class="num text-muted">${s.txCount.toLocaleString('id-ID')}</td>
      <td class="num pos">${s.totP?fmt(s.totP):'—'}</td>
      <td class="num neg">${s.totB?fmt(s.totB):'—'}</td>
      <td class="num ${s.net>=0?'pos':'neg'}">${s.totP||s.totB?fmt(Math.abs(s.net)):'-'}</td>
      <td><div class="flex-gap">
        ${!isActive?`<button class="btn btn-ghost btn-xs" onclick="switchToPeriod('${p.period}')">Buka</button>`:'<span class="text-muted" style="font-size:12px">—</span>'}
        <button class="btn btn-danger btn-xs" onclick="deletePeriod('${p.period}')" ${isActive?'disabled title="Tidak bisa menghapus periode aktif"':''}>Hapus</button>
      </div></td>
    </tr>`;
  }).join('');

  return`
  <div class="page-header">
    <h2>Riwayat Periode</h2>
    <p>Semua periode tersimpan secara permanen. Klik <strong>Buka</strong> untuk melihat atau mengedit data periode lama.</p>
  </div>
  <div class="stats-row" style="grid-template-columns:repeat(4,1fr);margin-bottom:20px">
    <div class="stat-box"><div class="stat-label">Jumlah Periode</div><div class="stat-value">${periods.length}</div></div>
    <div class="stat-box"><div class="stat-label">Total Transaksi</div><div class="stat-value">${totAll.txCount.toLocaleString('id-ID')}</div></div>
    <div class="stat-box"><div class="stat-label">Total Pendapatan</div><div class="stat-value green" style="font-size:1.1rem">${fmt(totAll.totP)}</div></div>
    <div class="stat-box"><div class="stat-label">Laba/Rugi Kumulatif</div><div class="stat-value ${netAll>=0?'green':'red'}" style="font-size:1.1rem">${fmt(Math.abs(netAll))}</div></div>
  </div>
  ${periods.length===0?`<div class="empty"><div class="empty-icon">📂</div><h3>Belum ada periode tersimpan</h3><p>Mulai periode baru dari Langkah 8 untuk memulai menyimpan riwayat.</p></div>`:`
  <div class="table-wrap">
    <table>
      <thead><tr><th>Periode</th><th class="text-right">Transaksi</th><th class="text-right">Pendapatan</th><th class="text-right">Beban</th><th class="text-right">Laba / Rugi</th><th>Aksi</th></tr></thead>
      <tbody>${rows}</tbody>
      <tfoot><tr class="tfoot-row"><td>TOTAL (${periods.length} periode)</td><td class="num">${totAll.txCount.toLocaleString('id-ID')}</td><td class="num pos">${fmt(totAll.totP)}</td><td class="num neg">${fmt(totAll.totB)}</td><td class="num ${netAll>=0?'pos':'neg'}">${fmt(Math.abs(netAll))}</td><td></td></tr></tfoot>
    </table>
  </div>`}`;
}

async function switchToPeriod(period){
  if(period===db.settings.period){toast('Periode ini sudah aktif.');return;}
  toast('Memuat periode '+period+'...');
  const pd=await idbGet('periods',period);
  if(!pd){toast('Data periode tidak ditemukan!');return;}
  db.settings.period=period;
  db.transactions=pd.transactions||[];
  db.adjustingEntries=pd.adjustingEntries||[];
  db.hppData=pd.hppData||{};
  analyticsCache=null;periodsListCache=null;
  saveData();
  updateHppNavVisibility();
  go('dashboard');
  toast('Beralih ke periode: '+periodLabel());
}
window.switchToPeriod=switchToPeriod;

function deletePeriod(period){
  if(period===db.settings.period){toast('Tidak bisa menghapus periode aktif!');return;}
  const[y,m]=period.split('-');
  const MONTHS=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
  const label=(MONTHS[parseInt(m)-1]||m)+' '+y;
  /* Count how many transactions will be lost */
  const cached=periodsListCache?.find(p=>p.period===period);
  const txCount=cached?((cached.transactions||[]).length+(cached.adjustingEntries||[]).length):null;
  const txNote=txCount!==null?`${txCount.toLocaleString('id-ID')} transaksi yang tercatat`:'Semua transaksi yang tercatat';
  openDangerModal({
    title:'Hapus Periode '+label,
    subtitle:'Data periode '+label+' akan dihapus permanen dan tidak bisa dikembalikan.',
    items:[
      txNote+' di periode ini',
      'Jurnal umum dan jurnal penyesuaian periode ini',
      'Data HPP periode ini (jika ada)',
    ],
    requireTyping:true,
    onConfirm:async()=>{
      await idbDelete('periods',period);
      periodsListCache=null;
      go('periods');
      toast('Periode '+label+' berhasil dihapus.');
    }
  });
}
window.deletePeriod=deletePeriod;

/* ═══════════════════════════════════════════
   MODAL & TOAST HELPERS
═══════════════════════════════════════════ */
function openModal(){document.getElementById('modal-bg').classList.add('open');setTimeout(()=>document.querySelector('#modal-body input,#modal-body select')?.focus(),80)}
function closeModal(){document.getElementById('modal-bg').classList.remove('open')}
window.closeModal=closeModal;

let toastTimer;
function toast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg;el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.remove('show'),3000);
}

function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('open');
}
window.toggleSidebar=toggleSidebar;

document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

/* BOOT — async to support IndexedDB */
(async()=>{
  try{
    await initDB();
  }catch(e){
    console.error('IndexedDB init failed:',e);
    /* Fallback: load from localStorage if IDB unavailable */
    try{const ls=localStorage.getItem(KEY);if(ls){const d=JSON.parse(ls);db.settings={...db.settings,...d.settings};db.coa=d.coa||db.coa;db.transactions=d.transactions||[];db.adjustingEntries=d.adjustingEntries||[];db.hppData=d.hppData||{};}}catch(le){}
  }

  if(!db.hppData)db.hppData={};

  if(!db.settings.companyType){
    if(db.transactions.length>0||db.adjustingEntries.length>0){
      /* Existing user with data — assign default type silently */
      db.settings.companyType='umkm';
      saveData();
      updateHppNavVisibility();
      go('dashboard');
    } else {
      /* New user — show full-screen welcome overlay */
      go('dashboard');
      showWelcome();
    }
  } else {
    updateHppNavVisibility();
    go('dashboard');
  }
})();

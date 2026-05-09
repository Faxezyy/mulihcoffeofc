/* ============================================
   MULIH COFFEE — script.js
   Interactive Features & Functionality
============================================ */

'use strict';

// ============================================
// DATA
// ============================================
const menuData = [
  { id: 1, name: "Mulih Signature", emoji: "☕", foto: "img/menu/mulih-signature.jpg", price: 22000, desc: "Blend arabika & robusta spesial racikan barista kami.", category: "kopi", badge: "fav", badgeText: "FAVORIT" },
  { id: 2, name: "Kopi Hitam", emoji: "🍵", foto: "img/menu/kopi-hitam.jpg", price: 12000, desc: "Kopi tubruk original, pahit yang membuatmu melek.", category: "kopi", badge: "hot", badgeText: "HOT" },
  { id: 3, name: "Es Kopi Susu", emoji: "🧋", foto: "img/menu/es-kopi-susu.jpg", price: 18000, desc: "Perpaduan espresso kental dengan susu segar pilihan.", category: "kopi", badge: "fav", badgeText: "FAVORIT" },
  { id: 4, name: "Caramel Latte", emoji: "🥛", foto: "img/menu/caramel-latte.jpg", price: 25000, desc: "Latte lembut dengan siraman karamel manis di atas.", category: "kopi", badge: "new", badgeText: "BARU" },
  { id: 5, name: "Matcha Latte", emoji: "🍵", foto: "img/menu/matcha-latte.jpg", price: 24000, desc: "Matcha premium Jepang dipadukan susu oat pilihan.", category: "non-kopi", badge: "new", badgeText: "BARU" },
  { id: 6, name: "Teh Tarik", emoji: "🍶", foto: "img/menu/teh-tarik.jpg", price: 15000, desc: "Teh tarik klasik ala mamak, creamy dan gurih.", category: "non-kopi", badge: null, badgeText: "" },
  { id: 7, name: "Es Coklat", emoji: "🍫", foto: "img/menu/es-coklat.jpg", price: 20000, desc: "Coklat belgia premium dicampur susu dingin segar.", category: "non-kopi", badge: "hot", badgeText: "HOT" },
  { id: 8, name: "Croissant", emoji: "🥐", foto: "img/menu/croissant.jpg", price: 18000, desc: "Croissant butter lapis-lapis, renyah di luar lembut di dalam.", category: "snack", badge: null, badgeText: "" },
  { id: 9, name: "Roti Bakar", emoji: "🍞", foto: "img/menu/roti-bakar.jpg", price: 15000, desc: "Roti tawar panggang dengan mentega dan selai istimewa.", category: "snack", badge: "hot", badgeText: "HOT" },
  { id: 10, name: "Cookies Mulih", emoji: "🍪", foto: "img/menu/cookies-mulih.jpg", price: 22000, desc: "Cookies choco chip bikinan sendiri, camilan paling pas.", category: "snack", badge: "fav", badgeText: "FAVORIT" },
  { id: 11, name: "Mulih Special", emoji: "✨", foto: "img/menu/mulih-special.jpg", price: 35000, desc: "Minuman eksklusif dengan topping boba & cold foam premium.", category: "spesial", badge: "new", badgeText: "BARU" },
  { id: 12, name: "Arak Abu", emoji: "🌟", foto: "img/menu/arak-abu.jpg", price: 30000, desc: "Es kopi susu dengan garam laut & brown sugar drizzle.", category: "spesial", badge: "hot", badgeText: "HOT" },
];

const testimoniData = [
  { name: "Iwan W.", avatar: "👨", stars: 5, text: "Sumpah ini kopi paling enak yang pernah aku cobain! Mulih Signature-nya juara banget, bikin nagih setiap hari!", location: "Semarang" },
  { name: "Nadim I.", avatar: "👨", stars: 5, text: "Harganya terjangkau tapi kualitasnya nggak kalah sama kafe mahal. Es kopi susunya creamy banget, mantap!", location: "Solo" },
  { name: "Ruhadi M.", avatar: "👩‍💼", stars: 5, text: "Pelayanannya ramah, tempatnya cozy, dan kopinya bikin kerja jadi semangat. Mulih emang beda!", location: "Yogyakarta" },
  { name: "Kasto H.", avatar: "🧑", stars: 4, text: "Matcha latte-nya top banget! Dan promo buy 2 get 1 bikin hemat maksimal. Rekomended buat anak muda!", location: "Magelang" },
  { name: "Tamim R.", avatar: "👩‍🎨", stars: 5, text: "Mulih Coffee adalah jawaban dari kelelahan kerja. Begitu minum, langsung pulih! Sesuai tagline-nya!", location: "Semarang" },
  { name: "Teddy J.", avatar: "🧔", stars: 5, text: "Paket Mulih Special-nya worth it banget! Boba-nya kenyal, cold foam-nya pas, harga bersahabat!", location: "Pemalang" },
];

const lokasiData = [
  { nama: "Mulih Coffee - Semarang", foto: "img/outlet/semarang.jpg", alamat: "Jl. Pandanaran No. 22\nSemarang, Jawa Tengah", jam: "07.00 - 22.00", status: "buka", emoji: "🏙️", bg: "#fff8e0" },
  { nama: "Mulih Coffee - Solo", foto: "img/outlet/solo.jpg", alamat: "Jl. Slamet Riyadi No. 88\nSolo, Jawa Tengah", jam: "07.00 - 22.00", status: "buka", emoji: "🏯", bg: "#e8f4e8" },
  { nama: "Mulih Coffee - Jogja", foto: "img/outlet/jogja.jpg", alamat: "Jl. Malioboro No. 14\nYogyakarta", jam: "08.00 - 23.00", status: "buka", emoji: "🎭", bg: "#e8eeff" },
  { nama: "Mulih Coffee - Pemalang", foto: "img/outlet/pemalang.jpg", alamat: "Jl. Pemuda No. 56\nPemalang, Jawa Tengah", jam: "07.00 - 21.00", status: "buka", emoji: "🌾", bg: "#ffe8e8" },
];

// ============================================
// CART STATE
// ============================================
let cart = JSON.parse(localStorage.getItem('mulihCart') || '[]');

// ============================================
// LOADER
// ============================================
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    triggerAOS();
    animateCounters();
  }, 2000);
});

// ============================================
// CUSTOM CURSOR
// ============================================
const cursor = document.querySelector('.custom-cursor');
const trail = document.querySelector('.cursor-trail');

if (cursor) {
  let mx = 0, my = 0;
  let tx = 0, ty = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  function animateTrail() {
    tx += (mx - tx) * 0.15;
    ty += (my - ty) * 0.15;
    if (trail) {
      trail.style.left = tx + 'px';
      trail.style.top = ty + 'px';
    }
    requestAnimationFrame(animateTrail);
  }
  animateTrail();
}

// ============================================
// NAVBAR
// ============================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navLinkItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNavLink();
  toggleBackTop();
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

function updateActiveNavLink() {
  const sections = ['home', 'menu', 'tentang', 'promo', 'lokasi', 'kontak'];
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 100) current = id;
  });
  navLinkItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
}

// ============================================
// TOPBAR CLOSE
// ============================================
document.getElementById('topbarClose').addEventListener('click', () => {
  document.getElementById('topbar').classList.add('hidden');
});

// ============================================
// BACK TO TOP
// ============================================
const backTop = document.getElementById('backTop');
function toggleBackTop() {
  if (window.scrollY > 400) backTop.classList.add('visible');
  else backTop.classList.remove('visible');
}
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ============================================
// RENDER MENU
// ============================================
function renderMenu(filter = 'all') {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';

  const items = filter === 'all' ? menuData : menuData.filter(i => i.category === filter);

  items.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.animationDelay = `${idx * 0.06}s`;

    const bgColors = { kopi: '#fff8e0', 'non-kopi': '#e8f4e8', snack: '#ffe8e8', spesial: '#e8eeff' };
    const bg = bgColors[item.category] || '#fff';

    const badgeHtml = item.badge ? `<span class="menu-badge badge-${item.badge}">${item.badgeText}</span>` : '';

    const imgHtml = item.foto
      ? `<img src="${item.foto}" alt="${item.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><span class="menu-emoji-fallback" style="display:none">${item.emoji}</span>`
      : `<span class="menu-emoji-fallback">${item.emoji}</span>`;

    card.innerHTML = `
      <div class="menu-card-img" style="background:${bg}">
        ${imgHtml}
        ${badgeHtml}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-desc">${item.desc}</div>
        <div class="menu-card-footer">
          <span class="menu-price">Rp${item.price.toLocaleString('id-ID')}</span>
          <button class="btn-addcart" onclick="addToCart(${item.id})">+ Keranjang</button>
        </div>
      </div>
    `;

    // Animate in
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px) scale(0.9)';
    grid.appendChild(card);

    setTimeout(() => {
      card.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0) scale(1)';
    }, idx * 60);
  });
}

// Menu filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    renderMenu(this.dataset.filter);
  });
});

renderMenu();

// ============================================
// CART
// ============================================
function addToCart(id) {
  const item = menuData.find(i => i.id === id);
  if (!item) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  saveCart();
  updateCartBadge();
  showToast(`${item.emoji} ${item.name} ditambahkan!`);

  // Animate badge
  const badge = document.getElementById('cartBadge');
  badge.style.transform = 'scale(1.8)';
  setTimeout(() => badge.style.transform = '', 300);
}

function saveCart() {
  localStorage.setItem('mulihCart', JSON.stringify(cart));
}

function updateCartBadge() {
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById('cartBadge').textContent = total;
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty">Keranjangmu kosong! 🥺<br/>Yuk pilih menu dulu!</div>`;
    footer.style.display = 'none';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">Rp${item.price.toLocaleString('id-ID')}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = `Rp${total.toLocaleString('id-ID')}`;
  footer.style.display = 'block';
}

function changeQty(id, delta) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveCart();
  updateCartBadge();
  renderCart();
}

// ============================================
// CHECKOUT FLOW
// ============================================

// Promo codes database
const promoCodes = {
  'MULIHBOSS': { disc: 0.15, label: 'Diskon 15%' },
  'NEWUSER':   { disc: 0.10, label: 'Diskon 10% New User' },
  'WEEKEND':   { disc: 0.20, label: 'Diskon 20% Weekend' },
  'GRATIS':    { fixed: 5000, label: 'Potongan Rp5.000' },
};

let appliedPromo = null;

function checkout() {
  if (cart.length === 0) return;
  document.getElementById('cartModal').classList.remove('active');
  appliedPromo = null;
  document.getElementById('checkoutPromo').value = '';
  document.getElementById('promoInfo').textContent = '';
  document.getElementById('checkoutNama').value = '';
  document.getElementById('checkoutHP').value = '';
  document.getElementById('checkoutCatatan').value = '';
  document.getElementById('checkoutAlamat').value = '';

  // Auto-fill dari session Mulih jika sudah login
  try {
    const sess = JSON.parse(sessionStorage.getItem('mulihSession') || 'null');
    if (sess) {
      document.getElementById('checkoutNama').value = sess.nama || '';
      document.getElementById('checkoutHP').value = sess.hp || '';
    }
  } catch(e) {}

  // Reset order type to dine-in
  document.querySelector('input[name="orderType"][value="dine-in"]').checked = true;
  document.getElementById('alamatGroup').style.display = 'none';

  // Reset payment method
  document.querySelector('input[name="payMethod"][value="cash"]').checked = true;
  document.querySelectorAll('.payment-method-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.payment-method-btn[data-method="cash"]').classList.add('active');
  document.getElementById('panelQris').style.display = 'none';
  document.getElementById('panelTransfer').style.display = 'none';
  if (document.getElementById('panelWallet')) document.getElementById('panelWallet').style.display = 'none';

  // Tampilkan opsi Dompet Mulih jika sudah login
  _initWalletPayOption();

  renderCheckoutSummary();
  updateCheckoutTotal();
  document.getElementById('checkoutModal').classList.add('active');
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkoutSummary');
  container.innerHTML = cart.map(item => `
    <div class="co-sum-item">
      <span>${item.emoji} <span class="co-sum-name">${item.name}</span></span>
      <span class="co-sum-qty">x${item.qty}</span>
      <span class="co-sum-price">Rp${(item.price * item.qty).toLocaleString('id-ID')}</span>
    </div>
  `).join('');
}

function updateCheckoutTotal() {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const isDelivery = document.querySelector('input[name="orderType"]:checked')?.value === 'delivery';
  const ongkir = isDelivery ? 5000 : 0;

  let diskon = 0;
  if (appliedPromo) {
    const p = promoCodes[appliedPromo];
    if (p.disc) diskon = Math.round(subtotal * p.disc);
    if (p.fixed) diskon = p.fixed;
  }

  const total = subtotal + ongkir - diskon;

  document.getElementById('coSubtotal').textContent = `Rp${subtotal.toLocaleString('id-ID')}`;
  document.getElementById('coOngkirRow').style.display = isDelivery ? 'flex' : 'none';
  document.getElementById('coOngkir').textContent = `Rp${ongkir.toLocaleString('id-ID')}`;
  document.getElementById('coDiskonRow').style.display = diskon > 0 ? 'flex' : 'none';
  document.getElementById('coDiskon').textContent = `-Rp${diskon.toLocaleString('id-ID')}`;
  document.getElementById('coTotal').textContent = `Rp${total.toLocaleString('id-ID')}`;
  document.getElementById('qrisNominal').textContent = `Rp${total.toLocaleString('id-ID')}`;
  return { subtotal, ongkir, diskon, total };
}

function applyPromo() {
  const code = document.getElementById('checkoutPromo').value.trim().toUpperCase();
  const infoEl = document.getElementById('promoInfo');
  if (!code) { infoEl.textContent = ''; return; }

  if (promoCodes[code]) {
    appliedPromo = code;
    infoEl.textContent = `✅ Kode valid! ${promoCodes[code].label}`;
    infoEl.className = 'promo-info promo-valid';
  } else {
    appliedPromo = null;
    infoEl.textContent = '❌ Kode promo tidak valid atau sudah kadaluarsa.';
    infoEl.className = 'promo-info promo-invalid';
  }
  updateCheckoutTotal();
}

function copyBankNum(num) {
  navigator.clipboard.writeText(num).then(() => showToast('✅ Nomor rekening disalin!'));
}

// Order type listener
document.querySelectorAll('input[name="orderType"]').forEach(radio => {
  radio.addEventListener('change', () => {
    const isDelivery = radio.value === 'delivery';
    document.getElementById('alamatGroup').style.display = isDelivery ? 'block' : 'none';
    updateCheckoutTotal();
  });
});

// Payment method listener
document.querySelectorAll('.payment-method-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.payment-method-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const method = btn.dataset.method;
    document.getElementById('panelQris').style.display = method === 'qris' ? 'block' : 'none';
    document.getElementById('panelTransfer').style.display = method === 'transfer' ? 'block' : 'none';
    if (document.getElementById('panelWallet')) {
      document.getElementById('panelWallet').style.display = method === 'wallet' ? 'block' : 'none';
      if (method === 'wallet') _refreshWalletPayPanel();
    }
    updateCheckoutTotal();
  });
});

document.getElementById('checkoutClose').addEventListener('click', () => {
  document.getElementById('checkoutModal').classList.remove('active');
});
document.getElementById('checkoutModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('checkoutModal'))
    document.getElementById('checkoutModal').classList.remove('active');
});

// ============================================
// UPLOAD BUKTI TRANSFER + AI VERIFY
// ============================================
let buktiBase64 = null;
let transferAIVerified = false;

function handleBuktiUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) { showToast('⚠️ File terlalu besar! Maks 5MB.'); return; }
  const reader = new FileReader();
  reader.onload = (ev) => {
    buktiBase64 = ev.target.result;
    document.getElementById('previewImg').src = buktiBase64;
    document.getElementById('uploadPreview').style.display = 'flex';
    document.getElementById('uploadArea').style.display = 'none';
    // Run AI verification
    runTransferAIVerify(buktiBase64);
  };
  reader.readAsDataURL(file);
}

async function runTransferAIVerify(base64) {
  transferAIVerified = false;
  const statusEl = document.getElementById('aiVerifyStatus');
  if (!statusEl) return;
  statusEl.style.display = 'block';
  statusEl.style.borderColor = '#c07c3a';
  statusEl.style.background = '#fff8e0';
  document.getElementById('aiVerifyIcon').textContent = '🤖';
  document.getElementById('aiVerifyText').textContent = 'AI sedang menganalisis bukti...';
  document.getElementById('aiVerifySub').textContent = 'Mohon tunggu sebentar';

  const imageData = base64.split(',')[1];
  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: imageData } },
            { type: 'text', text: 'Kamu adalah sistem verifikasi pembayaran Mulih Coffee. Periksa gambar bukti transfer/pembayaran ini.\nApakah ini adalah bukti transfer/pembayaran yang valid dan jelas terbaca?\nJawab HANYA dalam JSON: {"valid": true/false, "nominal": number_or_null, "bank": "nama bank atau null", "alasan": "penjelasan singkat max 20 kata"}' }
          ]
        }]
      })
    });
    const data = await resp.json();
    const text = data.content?.map(c => c.text || '').join('') || '';
    let result;
    try { result = JSON.parse(text.replace(/```json|```/g,'').trim()); }
    catch { result = { valid: false, alasan: 'Gagal parse AI response' }; }

    if (result.valid) {
      transferAIVerified = true;
      statusEl.style.borderColor = '#2db86c';
      statusEl.style.background = '#e8f9ee';
      document.getElementById('aiVerifyIcon').textContent = '✅';
      document.getElementById('aiVerifyText').textContent = 'Bukti Terverifikasi AI!';
      document.getElementById('aiVerifySub').textContent = result.alasan + (result.bank ? ` (${result.bank})` : '');
    } else {
      transferAIVerified = false;
      statusEl.style.borderColor = '#e63030';
      statusEl.style.background = '#fde8e8';
      document.getElementById('aiVerifyIcon').textContent = '❌';
      document.getElementById('aiVerifyText').textContent = 'Bukti Tidak Valid';
      document.getElementById('aiVerifySub').textContent = result.alasan || 'Coba upload gambar yang lebih jelas';
    }
  } catch {
    transferAIVerified = false;
    statusEl.style.borderColor = '#c07c3a';
    statusEl.style.background = '#fff8e0';
    document.getElementById('aiVerifyIcon').textContent = '⚠️';
    document.getElementById('aiVerifyText').textContent = 'Verifikasi AI tidak tersedia';
    document.getElementById('aiVerifySub').textContent = 'Admin akan verifikasi manual dalam 5-15 menit';
    transferAIVerified = true; // Allow proceed, manual review
  }
}

function removeBukti() {
  buktiBase64 = null;
  transferAIVerified = false;
  document.getElementById('buktiTransfer').value = '';
  document.getElementById('uploadPreview').style.display = 'none';
  document.getElementById('uploadArea').style.display = 'flex';
  const statusEl = document.getElementById('aiVerifyStatus');
  if (statusEl) statusEl.style.display = 'none';
}

// Drag & drop upload
document.addEventListener('DOMContentLoaded', () => {
  const area = document.getElementById('uploadArea');
  if (!area) return;
  area.addEventListener('dragover', (e) => { e.preventDefault(); area.classList.add('drag-over'); });
  area.addEventListener('dragleave', () => area.classList.remove('drag-over'));
  area.addEventListener('drop', (e) => {
    e.preventDefault(); area.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const dt = new DataTransfer(); dt.items.add(file);
      document.getElementById('buktiTransfer').files = dt.files;
      handleBuktiUpload({ target: { files: [file] } });
    }
  });
});

// ============================================
// SUPABASE CONFIG
// ============================================
const SUPABASE_URL = 'https://ynhrnldpvhjrfmxyyqhc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluaHJubGRwdmhqcmZteHl5cWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMjY5MDIsImV4cCI6MjA5MzcwMjkwMn0.WCUyo-3x9SsHn4pgxOALJtxv758n_I_ZT5tnD8w-A-c';
const _supa = window.supabase ? supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

// ============================================
// DATABASE HELPERS (Supabase)
// ============================================
const DB = {
  addOrder: async (order) => {
    if (!_supa) { console.warn('Supabase belum load'); return; }
    const { error } = await _supa.from('orders').insert({
      order_no:       order.orderNo,
      verify_code:    order.verifyCode,
      customer:       order.customer,
      items:          order.items,
      pricing:        order.pricing,
      pay_method:     order.payMethod,
      bukti_transfer: order.buktiTransfer,
      promo:          order.promo,
      status:         order.status,
      admin_note:     order.adminNote,
      verified_at:    order.verifiedAt,
      created_at:     order.timestamp,
    });
    if (error) console.error('Gagal simpan order:', error);
  },
  getOrderByCode: async (code) => {
    if (!_supa) return null;
    const { data } = await _supa.from('orders')
      .select('*')
      .or(`verify_code.eq.${code},order_no.eq.${code}`)
      .single();
    return data;
  },
  updateOrderStatus: async (orderNo, status, adminNote = '') => {
    if (!_supa) return false;
    const { error } = await _supa.from('orders').update({
      status, admin_note: adminNote, verified_at: new Date().toISOString()
    }).eq('order_no', orderNo);
    return !error;
  },
};

// Generate kode verifikasi unik 6-karakter
function generateVerifyCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// ============================================
// PROCESS PAYMENT
// ============================================
async function processPayment() {
  const nama      = document.getElementById('checkoutNama').value.trim();
  const hp        = document.getElementById('checkoutHP').value.trim();
  const orderType = document.querySelector('input[name="orderType"]:checked')?.value || 'dine-in';
  const alamat    = document.getElementById('checkoutAlamat').value.trim();
  const payMethod = document.querySelector('input[name="payMethod"]:checked')?.value || 'cash';
  const catatan   = document.getElementById('checkoutCatatan').value.trim();

  if (!nama) { showToast('⚠️ Nama tidak boleh kosong!'); document.getElementById('checkoutNama').focus(); return; }
  if (!hp)   { showToast('⚠️ No. HP tidak boleh kosong!'); document.getElementById('checkoutHP').focus(); return; }
  if (orderType === 'delivery' && !alamat) { showToast('⚠️ Alamat pengiriman wajib diisi!'); document.getElementById('checkoutAlamat').focus(); return; }
  if (payMethod === 'transfer' && !buktiBase64) { showToast('⚠️ Upload bukti transfer dulu ya!'); return; }

  const { subtotal, ongkir, diskon, total } = updateCheckoutTotal();

  const orderNo    = 'MC-' + Date.now().toString().slice(-6);
  const verifyCode = generateVerifyCode();
  const now        = new Date();

  // ── Dompet Mulih: langsung potong saldo ──
  if (payMethod === 'wallet') {
    await _processWalletPayment({ nama, hp, orderType, alamat, catatan, subtotal, ongkir, diskon, total, orderNo, verifyCode, now });
    return;
  }

  // ── QRIS: buat payment session, tunggu konfirmasi QRIS Manager ──
  if (payMethod === 'qris') {
    document.getElementById('checkoutModal').classList.remove('active');
    _qrisPendingOrderData = {
      nama, hp, orderType, alamat, catatan,
      items: JSON.parse(JSON.stringify(cart)),
      promo: appliedPromo,
      pricing: { subtotal, ongkir, diskon, total },
    };
    await _startQrisWaitFlow(total);
    return;
  }

  // ── Cash / Transfer ──
  let initialStatus = 'pending';
  if (payMethod === 'cash') initialStatus = 'verified';
  else if (payMethod === 'transfer' && transferAIVerified) initialStatus = 'verified';

  const orderData = {
    orderNo, verifyCode,
    timestamp: now.toISOString(),
    customer: { nama, hp, orderType, alamat, catatan },
    items: JSON.parse(JSON.stringify(cart)),
    promo: appliedPromo,
    pricing: { subtotal, ongkir, diskon, total },
    payMethod,
    buktiTransfer: payMethod === 'transfer' ? buktiBase64 : null,
    aiVerified: payMethod === 'transfer' ? transferAIVerified : false,
    status: initialStatus,
    adminNote: initialStatus === 'verified' && payMethod !== 'cash' ? '[AI] Terverifikasi otomatis' : '',
    verifiedAt: initialStatus === 'verified' ? now.toISOString() : null,
  };

  // Saldo dompet Mulih jika login
  try {
    const sess = JSON.parse(sessionStorage.getItem('mulihSession') || 'null');
    if (sess) {
      const { data: custData } = await _supa.from('customers').select('saldo').eq('hp', sess.hp).single();
      if (custData) {
        orderData.saldoSebelum = Number(custData.saldo);
        orderData.saldoSesudah = Number(custData.saldo);
      }
    }
  } catch(e) {}

  await DB.addOrder(orderData);
  cart = []; saveCart(); updateCartBadge(); renderCart();
  buktiBase64 = null;
  transferAIVerified = false;
  document.getElementById('checkoutModal').classList.remove('active');
  showReceipt(orderData);
}

let pendingVerifyOrder = null;

// ============================================
// QRIS WAIT FLOW — tunggu konfirmasi dari QRIS Manager
// ============================================
let _qrisPendingOrderData = null;
let _qrisSessionId = null;
let _qrisPollInterval = null;
let _qrisTimeoutTimer = null;
const QRIS_TIMEOUT_MS = 120000; // 2 menit

async function _startQrisWaitFlow(total) {
  // 1. Buat payment_session di Supabase
  if (!_supa) { showToast('❌ Koneksi gagal'); return; }
  const { data: sess, error } = await _supa
    .from('payment_sessions')
    .insert({ amount: Number(total), status: 'waiting', created_at: new Date().toISOString() })
    .select('id')
    .single();

  if (error || !sess) {
    showToast('❌ Gagal buat sesi QRIS: ' + (error?.message || 'unknown'));
    return;
  }
  _qrisSessionId = sess.id;

  // 2. Generate QR di modal
  const qrEl = document.getElementById('qrisWaitQR');
  qrEl.innerHTML = '';
  const payload = JSON.stringify({ type: 'mulih-qris-pay', sessionId: sess.id, amount: total });
  try {
    new QRCode(qrEl, { text: payload, width: 180, height: 180, colorDark: '#1a1008', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.M });
  } catch(e) {
    qrEl.innerHTML = `<div style="width:180px;height:180px;display:flex;align-items:center;justify-content:center;border:2px dashed #c07c3a;border-radius:8px;font-size:13px;color:#888;text-align:center;">QR tersedia<br/>ID: ${sess.id.slice(0,8)}</div>`;
  }

  document.getElementById('qrisWaitNominal').textContent = 'Rp' + total.toLocaleString('id-ID');
  _setQrisWaitStatus('waiting');

  // 3. Tampilkan modal
  document.getElementById('qrisWaitModal').classList.add('active');

  // Simpan session info ke localStorage agar costumer.html bisa langsung bayar
  try {
    localStorage.setItem('mulihPendingQris', JSON.stringify({
      sessionId: sess.id, amount: total, ts: Date.now()
    }));
  } catch(e) {}

  // Update href tombol bayar wallet
  const goWalletBtn = document.getElementById('qrisGoToWallet');
  if (goWalletBtn) {
    goWalletBtn.href = 'costumer.html?tab=scan&payqris=1';
  }

  // 4. Countdown 2 menit
  let remaining = QRIS_TIMEOUT_MS;
  const countdownEl = document.getElementById('qrisCountdown');
  const countInterval = setInterval(() => {
    remaining -= 1000;
    const m = Math.floor(remaining / 60000);
    const s = Math.floor((remaining % 60000) / 1000);
    countdownEl.textContent = `Batas waktu: ${m}:${s.toString().padStart(2,'0')}`;
    if (remaining <= 0) clearInterval(countInterval);
  }, 1000);

  // 5. Timeout otomatis
  _qrisTimeoutTimer = setTimeout(() => {
    _stopQrisPoll();
    clearInterval(countInterval);
    _setQrisWaitStatus('timeout');
    // Update session jadi expired
    if (_supa && _qrisSessionId) {
      _supa.from('payment_sessions').update({ status: 'expired' }).eq('id', _qrisSessionId);
    }
  }, QRIS_TIMEOUT_MS);

  // 6. Polling tiap 3 detik cek apakah sudah paid
  _qrisPollInterval = setInterval(async () => {
    try {
      const { data } = await _supa
        .from('payment_sessions')
        .select('status, customer_hp, customer_nama, paid_at')
        .eq('id', _qrisSessionId)
        .single();
      if (data && data.status === 'paid') {
        _stopQrisPoll();
        clearInterval(countInterval);
        clearTimeout(_qrisTimeoutTimer);
        await _onQrisPaid(data, total);
      }
    } catch(e) { /* abaikan, coba lagi */ }
  }, 3000);
}

function _setQrisWaitStatus(state) {
  const icon = document.getElementById('qrisWaitIcon');
  const text = document.getElementById('qrisWaitText');
  const sub  = document.getElementById('qrisWaitSub');
  const box  = document.getElementById('qrisWaitStatus');
  const btn  = document.getElementById('qrisWaitBtn');
  if (state === 'waiting') {
    box.style.background = '#fff8e0'; box.style.borderColor = '#c07c00';
    icon.textContent = '⏳'; text.textContent = 'Menunggu Pembayaran...';
    sub.textContent = 'Scan QR di atas atau bayar via dompet Mulih kamu';
    btn.textContent = '⏳ MEMPROSES PEMBAYARAN...'; btn.disabled = true; btn.style.background = '#888';
  } else if (state === 'paid') {
    box.style.background = '#e8f9ee'; box.style.borderColor = '#2db86c';
    icon.textContent = '✅'; text.textContent = 'Pembayaran Diterima!';
    sub.textContent = 'Sedang memproses pesanan...';
    btn.textContent = '✅ PEMBAYARAN DITERIMA'; btn.disabled = true; btn.style.background = '#2db86c';
  } else if (state === 'timeout') {
    box.style.background = '#fde8e8'; box.style.borderColor = '#e63030';
    icon.textContent = '❌'; text.textContent = 'Waktu Habis!';
    sub.textContent = 'Pembayaran tidak diterima dalam 2 menit. Coba lagi.';
    btn.textContent = '✕ TUTUP'; btn.disabled = false; btn.style.background = '#e63030';
    btn.style.cursor = 'pointer';
    btn.onclick = cancelQrisWait;
  }
}

async function _onQrisPaid(sessionData, total) {
  _setQrisWaitStatus('paid');
  try { localStorage.removeItem('mulihPendingQris'); } catch(e) {}

  // Ambil pending order data
  const d = _qrisPendingOrderData;
  if (!d) return;

  const orderNo    = 'MC-' + Date.now().toString().slice(-6);
  const verifyCode = generateVerifyCode();
  const now        = new Date();

  const orderData = {
    orderNo, verifyCode,
    timestamp: now.toISOString(),
    customer: { nama: d.nama, hp: d.hp, orderType: d.orderType, alamat: d.alamat, catatan: d.catatan },
    items: d.items,
    promo: d.promo,
    pricing: d.pricing,
    payMethod: 'qris',
    buktiTransfer: null,
    aiVerified: true,
    status: 'verified',
    adminNote: '[QRIS] Terkonfirmasi via QRIS Manager',
    verifiedAt: now.toISOString(),
  };

  await DB.addOrder(orderData);

  // Reset cart
  cart = []; saveCart(); updateCartBadge(); renderCart();
  _qrisPendingOrderData = null;

  // Tutup wait modal, tampilkan struk
  setTimeout(() => {
    document.getElementById('qrisWaitModal').classList.remove('active');
    showReceipt(orderData);
  }, 800);
}

function _stopQrisPoll() {
  if (_qrisPollInterval) { clearInterval(_qrisPollInterval); _qrisPollInterval = null; }
}

function cancelQrisWait() {
  _stopQrisPoll();
  if (_qrisTimeoutTimer) { clearTimeout(_qrisTimeoutTimer); _qrisTimeoutTimer = null; }
  if (_supa && _qrisSessionId) {
    _supa.from('payment_sessions').update({ status: 'cancelled' }).eq('id', _qrisSessionId);
  }
  try { localStorage.removeItem('mulihPendingQris'); } catch(e) {}
  _qrisSessionId = null;
  _qrisPendingOrderData = null;
  document.getElementById('qrisWaitModal').classList.remove('active');
  showToast('❌ Pembayaran QRIS dibatalkan.');
}


// ============================================
// RECEIPT
// ============================================
const payMethodLabel = { cash: '💵 Tunai', transfer: '🏦 Transfer Bank', qris: '📱 QRIS', wallet: '⚡ Dompet Mulih' };
const orderTypeLabel = { 'dine-in': '🪑 Dine In', takeaway: '🛍️ Takeaway', delivery: '🚴 Delivery' };
const statusLabel    = {
  pending:  { icon: '⏳', text: 'Menunggu Verifikasi', cls: 'status-pending' },
  verified: { icon: '✅', text: 'Terverifikasi', cls: 'status-verified' },
  rejected: { icon: '❌', text: 'Ditolak', cls: 'status-rejected' },
};

function showReceipt(order) {
  const now    = new Date(order.timestamp);
  const dateStr = now.toLocaleDateString('id-ID', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  const timeStr = now.toLocaleTimeString('id-ID', { hour:'2-digit', minute:'2-digit' });

  document.getElementById('receiptNo').textContent   = `No: #${order.orderNo}`;
  document.getElementById('receiptDate').textContent = `${dateStr} — ${timeStr}`;

  document.getElementById('receiptCustomer').innerHTML = `
    <strong>${order.customer.nama}</strong><br/>
    📞 ${order.customer.hp}<br/>
    ${orderTypeLabel[order.customer.orderType]}
    ${order.customer.alamat ? `<br/>📍 ${order.customer.alamat}` : ''}
    ${order.customer.catatan ? `<br/>📝 ${order.customer.catatan}` : ''}
  `;

  document.getElementById('receiptItems').innerHTML = order.items.map(item => `
    <div class="receipt-item-row">
      <div>
        <div class="receipt-item-name">${item.emoji} ${item.name}</div>
        <div class="receipt-item-qty">x${item.qty} @ Rp${item.price.toLocaleString('id-ID')}</div>
      </div>
      <div class="receipt-item-price">Rp${(item.price * item.qty).toLocaleString('id-ID')}</div>
    </div>
  `).join('');

  const p = order.pricing;
  document.getElementById('receiptTotals').innerHTML = `
    <div class="receipt-total-row"><span>Subtotal</span><span>Rp${p.subtotal.toLocaleString('id-ID')}</span></div>
    ${p.ongkir > 0 ? `<div class="receipt-total-row"><span>Ongkir</span><span>Rp${p.ongkir.toLocaleString('id-ID')}</span></div>` : ''}
    ${p.diskon > 0 ? `<div class="receipt-total-row discount"><span>🎉 Diskon (${order.promo})</span><span>-Rp${p.diskon.toLocaleString('id-ID')}</span></div>` : ''}
    <div class="receipt-total-row grand"><span>TOTAL BAYAR</span><span>Rp${p.total.toLocaleString('id-ID')}</span></div>
  `;

  const sl = statusLabel[order.status];

  // Cek apakah ada saldo info dari dompet Mulih
  let saldoInfo = '';
  try {
    const sess = JSON.parse(sessionStorage.getItem('mulihSession') || 'null');
    if (sess && order.saldoSebelum != null && order.saldoSesudah != null) {
      saldoInfo = `
        <br/><strong>Saldo Mulih Sebelum:</strong> Rp${Number(order.saldoSebelum).toLocaleString('id-ID')}
        <br/><strong>Saldo Mulih Sesudah:</strong> <span style="color:#2db86c;font-weight:800;">Rp${Number(order.saldoSesudah).toLocaleString('id-ID')}</span>
      `;
    }
  } catch(e) {}

  document.getElementById('receiptPayment').innerHTML = `
    <strong>Pembayaran:</strong> ${payMethodLabel[order.payMethod] || order.payMethod}<br/>
    <strong>Status:</strong> <span class="receipt-status ${sl ? sl.cls : 'status-verified'}">${sl ? sl.icon : '✅'} ${sl ? sl.text : 'Terverifikasi'}</span>
    ${(order.payMethod !== 'cash' && order.payMethod !== 'wallet') ? `<br/><strong>Kode Verifikasi:</strong> <span class="verify-code-inline">${order.verifyCode}</span>` : ''}
    ${saldoInfo}
  `;

  document.getElementById('receiptModal').classList.add('active');
}

function printReceipt() { window.print(); }

function closeReceipt() {
  document.getElementById('receiptModal').classList.remove('active');
  showToast('🎉 Pesanan selesai! Terima kasih sudah order di Mulih Coffee!');
}

document.getElementById('receiptModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('receiptModal')) closeReceipt();
});

// verifyModal removed — QRIS flow now uses qrisWaitModal

// Cart open/close
document.getElementById('cartBtn').addEventListener('click', () => {
  renderCart();
  document.getElementById('cartModal').classList.add('active');
});
document.getElementById('cartClose').addEventListener('click', () => {
  document.getElementById('cartModal').classList.remove('active');
});
document.getElementById('cartModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('cartModal')) {
    document.getElementById('cartModal').classList.remove('active');
  }
});

updateCartBadge();

// ============================================
// TESTIMONIALS SLIDER
// ============================================
function renderTestimonials() {
  const track = document.getElementById('testiTrack');
  const dotsEl = document.getElementById('testiDots');

  track.innerHTML = testimoniData.map(t => `
    <div class="testi-card">
      <span class="testi-quote">"</span>
      <div class="testi-text">${t.text}</div>
      <div class="testi-footer">
        <div class="testi-avatar">${t.avatar}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
          <div class="testi-location">📍 ${t.location}</div>
        </div>
      </div>
    </div>
  `).join('');

  dotsEl.innerHTML = testimoniData.map((_, i) => `<div class="testi-dot ${i === 0 ? 'active' : ''}" data-idx="${i}"></div>`).join('');

  dotsEl.querySelectorAll('.testi-dot').forEach(dot => {
    dot.addEventListener('click', () => goToTesti(+dot.dataset.idx));
  });
}

let testiCurrent = 0;
let testiAutoplay;

function goToTesti(idx) {
  testiCurrent = idx;
  const track = document.getElementById('testiTrack');
  const cardWidth = track.querySelector('.testi-card')?.offsetWidth || 324;
  const gap = 24;
  track.style.transform = `translateX(-${idx * (cardWidth + gap)}px)`;
  document.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}

function nextTesti() {
  testiCurrent = (testiCurrent + 1) % testimoniData.length;
  goToTesti(testiCurrent);
}
function prevTesti() {
  testiCurrent = (testiCurrent - 1 + testimoniData.length) % testimoniData.length;
  goToTesti(testiCurrent);
}

document.getElementById('testiNext').addEventListener('click', () => { nextTesti(); resetAutoplay(); });
document.getElementById('testiPrev').addEventListener('click', () => { prevTesti(); resetAutoplay(); });

function resetAutoplay() {
  clearInterval(testiAutoplay);
  testiAutoplay = setInterval(nextTesti, 4000);
}

renderTestimonials();
testiAutoplay = setInterval(nextTesti, 4000);

// Touch/swipe for testimonials
const testiSlider = document.getElementById('testiSlider');
let touchStartX = 0;
testiSlider.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
testiSlider.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (diff > 50) nextTesti();
  else if (diff < -50) prevTesti();
});

// ============================================
// RENDER LOKASI
// ============================================
function renderLokasi() {
  const grid = document.getElementById('lokasiGrid');
  grid.innerHTML = lokasiData.map(lok => `
    <div class="lokasi-card">
      ${lok.foto
        ? `<div class="lokasi-card-img"><img src="${lok.foto}" alt="${lok.nama}" loading="lazy" onerror="this.parentElement.style.display='none'" /></div>`
        : `<div class="lokasi-map" style="background:${lok.bg}">${lok.emoji}</div>`
      }
      <div class="lokasi-info">
        <h3>${lok.nama}</h3>
        <p>📍 ${lok.alamat.replace('\n', '<br/>')}</p>
        <p>🕐 ${lok.jam}</p>
        <span class="lokasi-status ${lok.status === 'buka' ? '' : 'tutup'}">
          ${lok.status === 'buka' ? '🟢 Buka Sekarang' : '🔴 Tutup'}
        </span>
      </div>
      <a href="https://maps.google.com" target="_blank" class="btn-maps">📍 Buka di Google Maps</a>
    </div>
  `).join('');
}
renderLokasi();

// ============================================
// PROMO COUNTDOWN TIMERS
// ============================================
function updateTimers() {
  document.querySelectorAll('.promo-timer[data-ends]').forEach(timer => {
    const end = new Date(timer.dataset.ends).getTime();
    const now = Date.now();
    const diff = end - now;

    if (diff <= 0) {
      timer.querySelector('.timer-count').textContent = 'SUDAH BERAKHIR';
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000).toString().padStart(2, '0');
    const m = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
    const s = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');

    timer.querySelector('.timer-count').textContent = d > 0 ? `${d}h ${h}:${m}:${s}` : `${h}:${m}:${s}`;
  });
}
updateTimers();
setInterval(updateTimers, 1000);

// ============================================
// COPY PROMO CODE
// ============================================
function copyCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast(`✅ Kode "${code}" berhasil disalin!`);
  }).catch(() => {
    showToast(`📋 Kode: ${code} — Copy manual ya!`);
  });
}

// ============================================
// TOAST NOTIFICATION
// ============================================
let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}
window.showToast = showToast;

// ============================================
// NEWSLETTER FORM
// ============================================
document.getElementById('newsForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('newsEmail').value;
  if (!email) return;
  document.getElementById('newsForm').style.display = 'none';
  document.getElementById('newsSuccess').style.display = 'block';
  showToast('🎉 Berhasil daftar! Cek emailmu ya!');
});

// ============================================
// CONTACT FORM
// ============================================
document.getElementById('kontakForm').addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('📨 Pesanmu sudah terkirim! Kami akan balas segera!');
  e.target.reset();
});

// ============================================
// FAB
// ============================================
const fabMain = document.getElementById('fabMain');
const fabOptions = document.getElementById('fabOptions');
let fabOpen = false;

fabMain.addEventListener('click', () => {
  fabOpen = !fabOpen;
  fabOptions.classList.toggle('open', fabOpen);
  fabMain.classList.toggle('active', fabOpen);
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.fab-wrapper')) {
    fabOpen = false;
    fabOptions.classList.remove('open');
    fabMain.classList.remove('active');
  }
});

// ============================================
// COUNTER ANIMATION
// ============================================
function animateCounters() {
  document.querySelectorAll('.stat-num[data-count]').forEach(el => {
    const target = +el.dataset.count;
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.round(current).toLocaleString('id-ID');
      if (current >= target) clearInterval(timer);
    }, 25);
  });
}

// ============================================
// SCROLL AOS (simple)
// ============================================
function triggerAOS() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
}

// Trigger immediately for above-fold
document.querySelectorAll('[data-aos]').forEach(el => {
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight) el.classList.add('visible');
});

// Scroll-reveal for other elements (no data-aos)
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0) scale(1)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-card, .promo-card, .step-item, .lokasi-card, .value-item, .comic-frame').forEach(el => {
  revealObserver.observe(el);
});

// ============================================
// HERO PARALLAX
// ============================================
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroBg = document.querySelector('.hero-bg-dots');
  const heroHalftone = document.querySelector('.hero-halftone');
  if (heroBg) heroBg.style.transform = `translateY(${scrollY * 0.2}px)`;
  if (heroHalftone) heroHalftone.style.transform = `translateY(${scrollY * 0.15}px)`;
});

// ============================================
// SMOOTH SCROLL (extra safety for older browsers)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============================================
// KEYBOARD ACCESSIBILITY
// ============================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('cartModal').classList.remove('active');
    document.getElementById('checkoutModal').classList.remove('active');
    document.getElementById('receiptModal').classList.remove('active');
    navLinks.classList.remove('open');
    fabOpen = false;
    fabOptions.classList.remove('open');
  }
});

// ============================================
// WINDOW RESIZE — re-snap testimonial
// ============================================
window.addEventListener('resize', () => {
  goToTesti(testiCurrent);
});

// ============================================
// LOG WELCOME
// ============================================
console.log('%c☕ MULIH COFFEE', 'font-size:28px;font-weight:bold;color:#7a4418;');
console.log('%cPulih dengan Mulih Coffee 🌿', 'font-size:14px;color:#c07c3a;');
console.log('%c© 2024 Mulih Coffee. All rights reserved.', 'font-size:11px;color:#888;');

// ============================================
// MULIH WALLET — Session & Bar
// ============================================
let _walletUser = null; // cache user data setelah login

async function _loadWalletSession() {
  try {
    const sess = JSON.parse(sessionStorage.getItem('mulihSession') || 'null');
    if (!sess || !sess.hp) { _hideWalletBar(); return; }
    if (!_supa) { _hideWalletBar(); return; }
    const { data } = await _supa.from('customers').select('nama,hp,saldo,points,member_plan').eq('hp', sess.hp).single();
    if (!data) { _hideWalletBar(); return; }
    _walletUser = data;
    _renderWalletBar(data);
  } catch(e) { _hideWalletBar(); }
}

function _renderWalletBar(user) {
  const bar = document.getElementById('mulihWalletBar');
  if (!bar) return;
  bar.style.display = 'flex';
  const initial = (user.nama || 'M').charAt(0).toUpperCase();
  const saldo   = Number(user.saldo || 0);
  const tier    = (user.member_plan || 'bronze').toUpperCase();
  document.getElementById('wbarAvatar').textContent = initial;
  document.getElementById('wbarName').textContent   = (user.nama || '').split(' ')[0];
  document.getElementById('wbarSaldo').textContent  = 'Rp' + saldo.toLocaleString('id-ID');
  document.getElementById('wbarTier').textContent   = tier;
  // Tambah padding ke body agar konten tidak tertutup bar
  document.body.style.paddingTop = '116px';
}

function _hideWalletBar() {
  const bar = document.getElementById('mulihWalletBar');
  if (bar) bar.style.display = 'none';
}

// Buka checkout dengan metode Dompet Mulih langsung ter-select
function openWalletPayCheckout() {
  // Buka cart dulu kalau kosong, kalau tidak langsung checkout
  if (!cart || cart.length === 0) {
    showToast('🛒 Keranjang masih kosong! Pilih menu dulu ya.');
    document.querySelector('#menu') && document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
    return;
  }
  // Buka checkout modal
  document.getElementById('cartModal').classList.remove('active');
  openCheckoutModal();
  // Auto-select wallet
  setTimeout(() => {
    const walletBtn = document.querySelector('.payment-method-btn[data-method="wallet"]');
    if (walletBtn) walletBtn.click();
  }, 80);
}

// Init: tampilkan/sembunyikan opsi wallet di checkout
function _initWalletPayOption() {
  const walletMethod = document.getElementById('walletPayMethod');
  if (!walletMethod) return;
  const sess = JSON.parse(sessionStorage.getItem('mulihSession') || 'null');
  walletMethod.style.display = sess ? 'inline-flex' : 'none';
}

// Refresh saldo info di panel wallet checkout
async function _refreshWalletPayPanel() {
  if (!_walletUser) await _loadWalletSession();
  const saldoEl = document.getElementById('walletPaySaldo');
  const insuffEl = document.getElementById('walletPayInsufficient');
  if (!saldoEl) return;
  const saldo = Number(_walletUser?.saldo || 0);
  saldoEl.textContent = 'Saldo: Rp' + saldo.toLocaleString('id-ID');
  // Cek apakah cukup
  const { total } = updateCheckoutTotal();
  if (insuffEl) insuffEl.style.display = saldo < total ? 'block' : 'none';
}

// ============================================
// WALLET PAYMENT PROCESSOR
// ============================================
async function _processWalletPayment({ nama, hp, orderType, alamat, catatan, subtotal, ongkir, diskon, total, orderNo, verifyCode, now }) {
  if (!_walletUser) {
    showToast('❌ Data akun tidak ditemukan. Coba refresh halaman.');
    return;
  }
  const saldo = Number(_walletUser.saldo || 0);
  if (saldo < total) {
    showToast('⚠️ Saldo tidak cukup! Top up dulu di halaman Dompet.');
    return;
  }

  showToast('⏳ Memproses pembayaran...');

  // 1. Deduct saldo di Supabase
  const saldoBaru = saldo - total;
  const { error: updateErr } = await _supa
    .from('customers')
    .update({ saldo: saldoBaru })
    .eq('hp', _walletUser.hp);

  if (updateErr) {
    showToast('❌ Gagal memproses pembayaran: ' + updateErr.message);
    return;
  }

  // 2. Catat transaksi di tabel transactions
  await _supa.from('transactions').insert({
    customer_hp: _walletUser.hp,
    type: 'payment',
    description: 'Pembayaran Order ' + orderNo,
    amount: -total,
    status: 'success',
    created_at: now.toISOString()
  });

  // 3. Update cache lokal
  _walletUser.saldo = saldoBaru;
  _renderWalletBar(_walletUser);

  // 4. Buat order data
  const orderData = {
    orderNo, verifyCode,
    timestamp: now.toISOString(),
    customer: { nama: nama || _walletUser.nama, hp: hp || _walletUser.hp, orderType, alamat, catatan },
    items: JSON.parse(JSON.stringify(cart)),
    promo: appliedPromo,
    pricing: { subtotal, ongkir, diskon, total },
    payMethod: 'wallet',
    buktiTransfer: null,
    aiVerified: true,
    status: 'verified',
    adminNote: '[WALLET] Dibayar via Dompet Mulih - ' + _walletUser.hp,
    verifiedAt: now.toISOString(),
    saldoSebelum: saldo,
    saldoSesudah: saldoBaru,
  };

  await DB.addOrder(orderData);
  cart = []; saveCart(); updateCartBadge(); renderCart();
  document.getElementById('checkoutModal').classList.remove('active');
  showReceipt(orderData);
}

// ============================================
// INIT WALLET BAR ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', async () => {
  _loadWalletSession();

  // Cek ?showreceipt=1 → ambil order terakhir dari session user dan tampilkan struk
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('showreceipt') === '1') {
    try {
      const sess = JSON.parse(sessionStorage.getItem('mulihSession') || 'null');
      if (sess && _supa) {
        // Ambil order terakhir customer ini
        const { data: orders } = await _supa
          .from('orders')
          .select('*')
          .eq('customer->>hp', sess.hp)
          .order('created_at', { ascending: false })
          .limit(1);

        if (orders && orders.length > 0) {
          const raw = orders[0];
          // Rekonstruksi object order untuk showReceipt
          const orderData = {
            orderNo:       raw.order_no,
            verifyCode:    raw.verify_code,
            timestamp:     raw.created_at,
            customer:      raw.customer,
            items:         raw.items,
            promo:         raw.promo,
            pricing:       raw.pricing,
            payMethod:     raw.pay_method,
            buktiTransfer: raw.bukti_transfer,
            aiVerified:    true,
            status:        raw.status,
            adminNote:     raw.admin_note,
            verifiedAt:    raw.verified_at,
            saldoSebelum:  raw.saldo_sebelum,
            saldoSesudah:  raw.saldo_sesudah,
          };
          showReceipt(orderData);
        }
      }
    } catch(e) { console.warn('showreceipt error:', e); }
    // Bersihkan URL
    history.replaceState({}, '', window.location.pathname);
  }
});

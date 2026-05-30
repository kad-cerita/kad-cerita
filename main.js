/* ============================================================
   KAD CERITA — main.js
   ============================================================ */

// ── AVATAR DATA ──────────────────────────────────────────────
const MALE_AVATARS = [
  "https://blogger.googleusercontent.com/img/a/AVvXsEisxFUY3DCUWZWT5PFfEGhFrHPpys_emuzKMhEZmo1tz6OSop8X7oHewP0U93lolkwoHxBPmHDw29HTEE2cJdNOAR1mU41eKswgx7QxC108HY2trycCmEOj81AJ-dLZ2CwLjF19JPuJKB_Mx1VqAw9-ht7-9SEQmr5LnbTUYuxdj5UAc9nGCUoRrfyoy8US=s16000",
  "https://blogger.googleusercontent.com/img/a/AVvXsEi_i-pVqsNBuZc3wJNujXKiC8k09tqo8hsubitwvVi-M7vG1lzzjTf2Y5Asi8ZTLgEDxf3aRzGSRLDrU6tsCA1QfzgBIwYYX1P8WTvMvH2nmX1rI7WZLm-MvKwYBD92GgN_dmyqQRGI4QoAw_JyTba6c1p0cwsg5mmiw92U-rHkzyhKFTL9wJYgLcAv11bH=s16000",
  "https://blogger.googleusercontent.com/img/a/AVvXsEiShb8oZ_0M-8TJDJnjTmJeKYVMHN615pdqYfaA1qPzENzt8wR0FMrRSsU2Y_G6CowW0NAeIT9VEoLTWMj5TiTmHZ0-_pbftpB-_Pyn4ZKWbmobQYoBWxDckRo8PNLI9uzTw98LqtOBtOqfN2VSB5MHVY7NAjJFTIfVdYamQmHU3crkVi8spaS4F0JFRN9m=s16000",
  "https://blogger.googleusercontent.com/img/a/AVvXsEhgd4NSy6E64P31IahJnQf46dkA1wVPvQ-8gakDAsA2iuVV722YaJriH5G7r9PeQPK5GtV43oWXubo-Kq3RP_NDnCneBcUDd54Mc_aYx3hyWTeJKl1A99KOdcoXo12iJYJhSSc22tbf8acPJXHNwe4K2DoWOMdCMhrCEbhVHU-Yz4eVKpcqmPmlbdUNM_U0=s16000",
  "https://blogger.googleusercontent.com/img/a/AVvXsEjtxVShAhbMloAWr-qEUOA2nADLMUfd5C01v6lpWwBcTW4yX1inGbOBv2hqySSMqhd6O866yHzP051YFmMUpA76uJIy6HZj36fXJ2uSi5cODdF4nooXnTrfvfcImuFnttOfMW3LBNPc53Rce3ndBargO8K41R-FmuYw86OWITwrmSjAJSmosMGmczpuolfR=s16000"
];

const FEMALE_AVATARS = [
  "https://blogger.googleusercontent.com/img/a/AVvXsEj3UQMjdrr1TwGWkUs-cZciQspP1KsqXlZJdDiqnbg1BP7SlXQ0tTP_dVWSIgs5OuGB8pAoAomywkKJMJYd7RRf87BAdsx8nmMp4SAYJEOekpoelHko4srnmEEQbIVYB8hFjw0kCUvq95czViaEh2nXZFs0fL4ITBIdhJL7FPRydsAYQXq2K2HTgB0Cb5j_=s16000",
  "https://blogger.googleusercontent.com/img/a/AVvXsEiUagKpIDD49Oo8UjPxZqb0awOgcmT7nHyXfUg5X704dl7lWC6eBDi3ibuuvgKlF8nyhCvurZSk8Aeo0FylR0EyP07uVKZ5sASRZ4hjVcurKZdQqjMjJnh2h8j5D2_7TSfXLyZ0yMiWDfmA8Czt8dUts5_W0ddG-lR8jzRzP0fHTZhWserpIkCByN6mVRFF=s16000",
  "https://blogger.googleusercontent.com/img/a/AVvXsEiON2iLPVdhEY24KdCWNmStc_XzZjlmwhvjvPvlyrB6HhTa99idT4vhbS3xpOa9_W3MocFsQ98R3hYreyC4yXmX17fCCFUXMOJt_NF5ITwKvv1l4L7J5_GN0GhDfxAA-qeEGI7oycZ7H6Me8LAbjLfgxlvTmiTIl7r9dg6SB7ADIroJZNuFwSytK18VKU_G=s16000",
  "https://blogger.googleusercontent.com/img/a/AVvXsEhepVichphAQ1H1GB6IwmK54N_DAzwL8UDC5Lswzr4dRjc4n4RhMnvqwOMx5F2sbx3U7qkq5LjYPgfyIYpgm-Rb1xGnClLjFEi4QESaX-wVGTwMg7RQQ8vA-r6Wsgrfyq-F3BcXUNlbOOqjSyvJsPsnMGqbQyr1CscdAHaV9CHJicQ3AX54PPfY52FqfcmJ=s16000",
  "https://blogger.googleusercontent.com/img/a/AVvXsEi5AK-YXv-3s5iOFlrXWnwzO2tUsFtfiKOJkQkTzX3lhpSVKTgwXBM6T3QNOiqX4UDqpkJcTQcmY-fniba6v2pCaSnQpCscdxpOJMJECTSruE7QVXBjN8jaLhUceCQkWD-XmNPAz-ZL2EO4dO6BUa7fRTjZa5al3lOvLWKNNno0LLjS6KBDZff3r82iSPcl=s16000"
];

// ── FIREBASE ──────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyD3oDoLojt_bV9_U_Tut3tPmw29TKH--cw",
  authDomain: "kad-cerita.firebaseapp.com",
  projectId: "kad-cerita",
  storageBucket: "kad-cerita.firebasestorage.app",
  messagingSenderId: "424105827664",
  appId: "1:424105827664:web:bca4964ff4265bf80b6055",
  measurementId: "G-YLJ19YEMRX",
  databaseURL: "https://kad-cerita-default-rtdb.asia-southeast1.firebasedatabase.app"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const MY_ID = localStorage.getItem('myUserId') || 'u_' + Math.random().toString(36).substr(2, 9);
localStorage.setItem('myUserId', MY_ID);

let currentFilter = 'Semua';
let hasAutoScrolled = false;
let isAdmin = sessionStorage.getItem('isAdmin') === 'true';
let loginClicks = 0;
let editTargetId = null;

// Currently selected avatar
let selectedAvatarUrl = MALE_AVATARS[0];

// ── COFFEE BUBBLE ─────────────────────────────────────────────
(function initCoffeeBubble() {
  const bubble = document.getElementById('coffeeBubble');
  const firstDelay = 5000;
  const repeatDelay = 10000;

  function showBubble() {
    bubble.classList.add('visible');
    setTimeout(() => bubble.classList.remove('visible'), 4000);
  }

  setTimeout(() => {
    showBubble();
    setInterval(showBubble, repeatDelay);
  }, firstDelay);
})();

// ── AVATAR PICKER ─────────────────────────────────────────────
function buildAvatarDropdown() {
  const grid = document.getElementById('avatarGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const allAvatars = [
    { label: 'Lelaki', list: MALE_AVATARS },
    { label: 'Perempuan', list: FEMALE_AVATARS }
  ];

  allAvatars.forEach(group => {
    const lbl = document.createElement('div');
    lbl.className = 'avatar-gender-label';
    lbl.textContent = group.label;
    grid.appendChild(lbl);

    const row = document.createElement('div');
    row.className = 'avatar-grid';

    group.list.forEach(url => {
      const img = document.createElement('img');
      img.src = url;
      img.className = 'avatar-opt';
      if (url === selectedAvatarUrl) img.classList.add('selected');
      img.onclick = () => selectAvatar(url);
      row.appendChild(img);
    });

    grid.appendChild(row);
  });
}

function selectAvatar(url) {
  selectedAvatarUrl = url;
  document.getElementById('avatarPreviewImg').src = url;
  document.getElementById('avatarPreviewLabel').textContent = 'Avatar Dipilih';
  document.querySelectorAll('.avatar-opt').forEach(el => {
    el.classList.toggle('selected', el.src === url);
  });
  closeAvatarDropdown();
}

function toggleAvatarDropdown() {
  const dd = document.getElementById('avatarDropdown');
  const preview = document.getElementById('avatarPreview');
  const open = dd.classList.toggle('open');
  preview.classList.toggle('open', open);
  if (open) buildAvatarDropdown();
}

function closeAvatarDropdown() {
  document.getElementById('avatarDropdown').classList.remove('open');
  document.getElementById('avatarPreview').classList.remove('open');
}

// ── FORM MODAL ────────────────────────────────────────────────
function openFormModal() {
  document.getElementById('formModal').style.display = 'flex';
  if (!editTargetId) resetForm();
}

function closeFormModal() {
  document.getElementById('formModal').style.display = 'none';
  editTargetId = null;
  resetForm();
}

// ── ADMIN ─────────────────────────────────────────────────────
function adminLoginTrigger() {
  loginClicks++;
  if (loginClicks >= 5) {
    const pass = prompt("Masukkan Kata Laluan Admin:");
    if (pass === "admin123") {
      sessionStorage.setItem('isAdmin', 'true');
      isAdmin = true;
      showToast("🔓 Akses Admin Diberikan");
      checkAdminStatus();
      loadPosts();
    }
    loginClicks = 0;
  }
}

function logoutAdmin() {
  sessionStorage.removeItem('isAdmin');
  isAdmin = false;
  checkAdminStatus();
  loadPosts();
  showToast("🔒 Telah Logout");
}

function checkAdminStatus() {
  const panel = document.getElementById("adminPanel");
  if (isAdmin) {
    panel.style.display = "block";
    document.getElementById("adminStatus").innerHTML = "<b>Sesi Admin Aktif</b> — Anda boleh memadam mana-mana post.";
  } else {
    panel.style.display = "none";
    document.getElementById("adminStatus").innerText = "Penafian: Kami menghormati privasi anda. Semua cerita adalah tidak dikenali. Ruang ini milik anda. Cerita saja apa yang terbuku di hati!";
  }
}

// ── TOAST ─────────────────────────────────────────────────────
function showToast(m) {
  const t = document.getElementById("toast");
  t.innerText = m;
  t.style.display = "block";
  setTimeout(() => t.style.display = "none", 3000);
}

// ── CHAR COUNT ────────────────────────────────────────────────
document.getElementById("message").oninput = function () {
  document.getElementById("charCount").innerText = this.value.length + " / 500";
};

// ── SUBMIT POST ───────────────────────────────────────────────
function submitPost() {
  const txt = document.getElementById("message").value;
  if (txt.length < 5) return showToast("⚠️ Terlalu pendek");

  if (editTargetId) {
    db.ref("posts/" + editTargetId).update({
      text: txt,
      category: document.getElementById("category").value,
      name: document.getElementById("nickname").value || "Anonim"
    }).then(() => {
      showToast("✅ Berjaya dikemaskini!");
      closeFormModal();
    });
  } else {
    const nick = document.getElementById("nickname").value || "Anonim";
    const newRef = db.ref("posts").push();
    newRef.set({
      name: nick,
      text: txt,
      category: document.getElementById("category").value,
      time: Date.now(),
      owner: MY_ID,
      avatar: selectedAvatarUrl,
      love: 0, sad: 0, laugh: 0, replyCount: 0
    }).then(() => {
      closeFormModal();
      showToast("✅ Kad Cerita berjaya dihantar!");
      setTimeout(() => scrollToPost(newRef.key), 500);
    });
  }
}

function resetForm() {
  if (document.getElementById("message")) document.getElementById("message").value = "";
  if (document.getElementById("btnSubmitMain")) document.getElementById("btnSubmitMain").innerText = "Hantar Kad";
  if (document.getElementById("charCount")) document.getElementById("charCount").innerText = "0 / 500";
  if (document.getElementById("nickname")) document.getElementById("nickname").value = "";
  editTargetId = null;
  selectedAvatarUrl = MALE_AVATARS[0];
  if (document.getElementById("avatarPreviewImg")) document.getElementById("avatarPreviewImg").src = MALE_AVATARS[0];
  if (document.getElementById("avatarPreviewLabel")) document.getElementById("avatarPreviewLabel").textContent = 'Pilih Avatar';
}

// ── FILTER ────────────────────────────────────────────────────
function filterPosts(cat) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.innerText.includes(cat) || (cat === 'Semua' && btn.innerText === 'Semua'));
  });
  loadPosts();
}

// ── LOAD POSTS ────────────────────────────────────────────────
function loadPosts() {
  db.ref("posts").on("value", snap => {
    const list = document.getElementById("postList");
    const trendList = document.getElementById("trendingList");
    list.innerHTML = "";
    trendList.innerHTML = "";
    let data = [];
    snap.forEach(s => { let p = s.val(); p.key = s.key; data.push(p); });

    if (isAdmin) {
      document.getElementById("statTotal").innerText = data.length;
      document.getElementById("statActive").innerText = new Set(data.map(p => p.owner)).size;
    }

    let trending = [...data].sort((a, b) => (b.love || 0) - (a.love || 0)).slice(0, 5);
    trending.forEach((p, i) => {
      trendList.innerHTML += `<div class="trending-item">
        <span class="trending-rank">#${i + 1}</span>
        <span class="trending-text">${p.text}</span>
        <button class="btn-buka" onclick="scrollToPost('${p.key}')">Lihat</button>
      </div>`;
    });

    let filtered = currentFilter === 'Semua' ? data : data.filter(p => p.category === currentFilter);
    filtered.sort((a, b) => b.time - a.time).forEach(p => {
      let div = document.createElement("div");
      div.className = "feed-card";
      div.id = `card_${p.key}`;
      div.setAttribute('data-cat', p.category);

      const lastRead = parseInt(localStorage.getItem('read_' + p.key) || "0");
      const hasNew = (p.replyCount || 0) > lastRead;
      const canManage = (p.owner === MY_ID || isAdmin);

      const postDate = new Date(p.time);
      const fDate = postDate.toLocaleDateString('ms-MY', { day: '2-digit', month: '2-digit', year: 'numeric' });
      const fTime = postDate.toLocaleTimeString('ms-MY', { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase();

      const catIcons = {
        "Cerita & Luahan": "📖",
        "Petikan Semangat": "🔥",
        "Pendapat Fikiran": "💡",
        "Umum & Lain-Lain": "🌐"
      };

      div.innerHTML = `
        <span class="cat-tag" data-cat="${p.category}">${catIcons[p.category] || '📝'} ${p.category}</span>
        ${isAdmin ? '<span class="admin-badge">ADMIN VIEW</span>' : ''}
        <div class="user-row">
          <img src="${p.avatar}" class="avatar" alt="${p.name}">
          <div class="user-info">
            <b>${p.name}</b>
            <small>${fDate} • ${fTime}</small>
          </div>
          ${canManage ? `
            <div class="post-options">
              <button class="btn-options" onclick="toggleDropdown(event, '${p.key}')">⋮</button>
              <div id="drop_${p.key}" class="dropdown-menu">
                <button class="btn-edit" onclick="startEdit('${p.key}', '${p.text.replace(/'/g, "\\'").replace(/\n/g, "\\n")}', '${p.category}', '${p.name}')">Edit Kad</button>
                <button class="btn-delete" onclick="deletePost('${p.key}')">Padam</button>
              </div>
            </div>` : ''}
        </div>
        <div class="post-text">${p.text}</div>
        <div class="actions">
          <button class="action-btn ${localStorage.getItem('react_love_' + p.key) ? 'active-love' : ''}" onclick="toggleReaction('${p.key}', 'love')">❤️ <span>${p.love || 0}</span></button>
          <button class="action-btn ${localStorage.getItem('react_sad_' + p.key) ? 'active-sad' : ''}" onclick="toggleReaction('${p.key}', 'sad')">😢 <span>${p.sad || 0}</span></button>
          <button class="action-btn ${localStorage.getItem('react_laugh_' + p.key) ? 'active-laugh' : ''}" onclick="toggleReaction('${p.key}', 'laugh')">😆 <span>${p.laugh || 0}</span></button>
          <button class="action-btn" onclick="toggleReply('${p.key}', ${p.replyCount || 0})">💬 <span>${p.replyCount || 0}</span>${hasNew ? '<span class="notif-dot"></span>' : ''}</button>
          <button class="action-btn btn-share-main" onclick="openShare('${p.key}', '${p.name}', '${p.text.replace(/'/g, "\\'").replace(/\n/g, " ")}')">Kongsi</button>
        </div>
        <div id="replySection_${p.key}" class="reply-section">
          <div id="replyList_${p.key}"></div>
          <div style="display:flex; gap:8px; margin-top:12px;">
            <input type="text" id="ri_${p.key}" placeholder="Balas dengan sopan...">
            <button onclick="submitReply('${p.key}')" style="background:var(--primary); color:white; border:none; padding:0 16px; border-radius:12px; font-weight:700; font-family:inherit; cursor:pointer;">Hantar</button>
          </div>
        </div>
        <div class="share-info">📢 Klik KONGSI untuk jemput rakan memberikan maklum balas di KAD anda.</div>
      `;

      list.appendChild(div);

      if (p.replies) {
        let rl = div.querySelector(`#replyList_${p.key}`);
        Object.entries(p.replies).forEach(([rk, rv]) => {
          const canDelR = (p.owner === MY_ID || rv.owner === MY_ID || isAdmin);
          rl.innerHTML += `<div class="reply-item"><b>${rv.name}</b>${rv.text}${canDelR ? `<button class="btn-del-reply" onclick="deleteReply('${p.key}','${rk}')">Padam</button>` : ''}</div>`;
        });
      }
    });

    if (!hasAutoScrolled) {
      const id = new URLSearchParams(window.location.search).get('id');
      if (id) { setTimeout(() => { scrollToPost(id); hasAutoScrolled = true; }, 1000); }
    }
  });
}

// ── DROPDOWN ──────────────────────────────────────────────────
function toggleDropdown(e, key) {
  e.stopPropagation();
  document.querySelectorAll('.dropdown-menu').forEach(d => {
    if (d.id !== 'drop_' + key) d.style.display = 'none';
  });
  const drop = document.getElementById('drop_' + key);
  drop.style.display = drop.style.display === 'block' ? 'none' : 'block';
}

function closeAllDropdowns(e) {
  document.querySelectorAll('.dropdown-menu').forEach(d => d.style.display = 'none');
  closeAvatarDropdown();
}

// ── EDIT ──────────────────────────────────────────────────────
function startEdit(key, text, cat, name) {
  editTargetId = key;
  openFormModal();
  setTimeout(() => {
    document.getElementById("message").value = text.replace(/\\n/g, '\n');
    document.getElementById("category").value = cat;
    document.getElementById("nickname").value = name;
    document.getElementById("btnSubmitMain").innerText = "Kemaskini Kad";
    document.getElementById("charCount").innerText = text.length + " / 500";
  }, 50);
  showToast("✍️ Anda sedang mengedit kad...");
}

// ── REACTIONS ─────────────────────────────────────────────────
function toggleReaction(k, t) {
  const sk = `react_${t}_${k}`;
  const has = localStorage.getItem(sk);
  db.ref(`posts/${k}/${t}`).transaction(v => has ? Math.max(0, (v || 1) - 1) : (v || 0) + 1);
  has ? localStorage.removeItem(sk) : localStorage.setItem(sk, 'true');
}

// ── REPLY ─────────────────────────────────────────────────────
function toggleReply(k, c) {
  const s = document.getElementById(`replySection_${k}`);
  const isOpen = s.style.display === "block";
  s.style.display = isOpen ? "none" : "block";
  if (!isOpen) localStorage.setItem('read_' + k, c);
}

function submitReply(k) {
  const i = document.getElementById(`ri_${k}`);
  if (i.value.length < 2) return;
  db.ref(`posts/${k}/replies`).push({
    name: document.getElementById("nickname").value || "Anonim",
    text: i.value,
    time: Date.now(),
    owner: MY_ID
  });
  db.ref(`posts/${k}/replyCount`).transaction(v => (v || 0) + 1);
  i.value = "";
}

function deleteReply(pk, rk) {
  if (confirm("Padam balasan ini?")) {
    db.ref(`posts/${pk}/replies/${rk}`).remove();
    db.ref(`posts/${pk}/replyCount`).transaction(v => Math.max(0, (v || 1) - 1));
  }
}

// ── SCROLL TO POST ────────────────────────────────────────────
function scrollToPost(key) {
  const el = document.getElementById(`card_${key}`);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('highlight-active');
    setTimeout(() => el.classList.remove('highlight-active'), 4000);
  }
}

// ── SHARE ─────────────────────────────────────────────────────
function openShare(key, name, text) {
  const shareUrl = "https://nota-wanhasbullah.blogspot.com/p/kad-cerita.html?id=" + key;
  const shortText = text.length > 100 ? text.substring(0, 100) + "..." : text;
  const shareText = `"${shortText}"\n\nKad Cerita ${name}. Cerita penuh di sini:`;

  document.getElementById("waBtn").onclick = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + "\n" + shareUrl)}`, '_blank');
  };
  document.getElementById("fbBtn").onclick = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };
  document.getElementById("linkBtn").onclick = () => {
    const copyText = "Berikan reaksi & komentar di kad saya :\n" + shareUrl;
    navigator.clipboard.writeText(copyText).then(() => {
      showToast("📋 Pautan telah disalin!");
      closeModal();
    });
  };

  document.getElementById("shareModal").style.display = "flex";
}

function closeModal() { document.getElementById("shareModal").style.display = "none"; }
function deletePost(k) { if (confirm("Padam post ini secara kekal?")) db.ref("posts/" + k).remove(); }

// ── INIT ──────────────────────────────────────────────────────
checkAdminStatus();
loadPosts();

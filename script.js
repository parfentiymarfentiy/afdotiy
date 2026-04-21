/* ═══════════════════════════════════════════════
   SportEx — script.js  v3
   Categories + subcategories modal system
═══════════════════════════════════════════════ */
'use strict';

/* ─── TELEGRAM ───────────────────────────────── */
const TG_TOKEN   = '8667869989:AAF5GKSaQZQY5o5-nSp7icEE4K8XBCUG8eI';
const TG_CHAT_ID = '8667869989'; // замени на свой личный chat_id

/* ═══════════════════════════════════════════════
   CATEGORIES DATA  — полная структура
═══════════════════════════════════════════════ */
const CATEGORIES = [
  {
    id: 'clothing',
    icon: '👕',
    name: 'Спортивная одежда',
    name_ua: 'Спортивний одяг',
    name_en: 'Sportswear',
    totalCount: 195,
    subcategories: [
      { icon: '👔', name: 'Спортивная одежда мужская',       name_ua: 'Спортивний одяг чоловічий',     name_en: 'Men\'s sportswear',        count: 29 },
      { icon: '🩱', name: 'Компрессионная одежда',           name_ua: 'Компресійний одяг',             name_en: 'Compression wear',         count: 86 },
      { icon: '👦', name: 'Детская компрессионная одежда',   name_ua: 'Дитячий компресійний одяг',     name_en: 'Kids compression wear',    count: 66 },
      { icon: '🧣', name: 'Термобелье',                      name_ua: 'Термобілизна',                  name_en: 'Thermal underwear',        count: 5  },
      { icon: '👩', name: 'Женская спортивная одежда',       name_ua: 'Жіночий спортивний одяг',       name_en: 'Women\'s sportswear',      count: 2  },
      { icon: '🧒', name: 'Детские спортивные костюмы',     name_ua: 'Дитячі спортивні костюми',      name_en: 'Kids sport suits',         count: 7  },
    ]
  },
  {
    id: 'martial',
    icon: '🥊',
    name: 'Единоборства',
    name_ua: 'Єдиноборства',
    name_en: 'Martial Arts',
    totalCount: 98,
    subcategories: [
      { icon: '🥊', name: 'Боксёрские перчатки',         name_ua: 'Боксерські рукавиці',     name_en: 'Boxing gloves',           count: 25 },
      { icon: '🤚', name: 'Лапы боксёрские',             name_ua: 'Лапи боксерські',         name_en: 'Boxing pads',             count: 5  },
      { icon: '😬', name: 'Капы',                        name_ua: 'Капи',                    name_en: 'Mouthguards',             count: 9  },
      { icon: '🏋️', name: 'Тренажёр боксёрский',        name_ua: 'Тренажер боксерський',    name_en: 'Boxing trainer',          count: 4  },
      { icon: '⛑️', name: 'Шлем боксёрский',            name_ua: 'Шолом боксерський',       name_en: 'Boxing helmet',           count: 8  },
      { icon: '🛡️', name: 'Защита',                     name_ua: 'Захист',                  name_en: 'Protection',              count: 17 },
      { icon: '👕', name: 'Одежда для бокса',            name_ua: 'Одяг для боксу',          name_en: 'Boxing clothing',         count: 6  },
      { icon: '👟', name: 'Обувь для борьбы и бокса',   name_ua: 'Взуття для боротьби',     name_en: 'Combat sports shoes',     count: 7  },
      { icon: '🩹', name: 'Бинт боксёрский',             name_ua: 'Бинт боксерський',        name_en: 'Boxing wraps',            count: 6  },
      { icon: '⚡', name: 'Битки для единоборств',       name_ua: 'Щитки для єдиноборств',   name_en: 'Martial arts pads',       count: 11 },
    ]
  },
  {
    id: 'football',
    icon: '⚽',
    name: 'Футбол',
    name_ua: 'Футбол',
    name_en: 'Football',
    totalCount: 106,
    subcategories: [
      { icon: '⚽', name: 'Футбольные мячи',                 name_ua: 'Футбольні м\'ячі',         name_en: 'Footballs',               count: 13 },
      { icon: '🧦', name: 'Гетры футбольные',               name_ua: 'Гетри футбольні',          name_en: 'Football socks',          count: 6  },
      { icon: '🧤', name: 'Перчатки вратарские',            name_ua: 'Рукавиці воротарські',     name_en: 'Goalkeeper gloves',       count: 9  },
      { icon: '👕', name: 'Форма футбольных клубов юниор',  name_ua: 'Форма клубів юніор',       name_en: 'Junior club kits',        count: 44 },
      { icon: '🏆', name: 'Форма футбольная взрослая',      name_ua: 'Форма футбольна доросла',  name_en: 'Adult football kits',     count: 5  },
      { icon: '🦵', name: 'Щитки футбольные',               name_ua: 'Щитки футбольні',          name_en: 'Shin guards',             count: 9  },
      { icon: '👟', name: 'Сороконожки',                    name_ua: 'Сороконіжки',              name_en: 'Turfs',                   count: 12 },
      { icon: '⚡', name: 'Копы футбольные',                name_ua: 'Копи футбольні',           name_en: 'Football cleats',         count: 4  },
      { icon: '🏃', name: 'Обувь для футзала',              name_ua: 'Взуття для футзалу',       name_en: 'Futsal shoes',            count: 2  },
      { icon: '🧢', name: 'Шапки горловики',               name_ua: 'Шапки горловики',          name_en: 'Neck warmers',            count: 2  },
    ]
  },
  {
    id: 'sport',
    icon: '🏋️',
    name: 'Спорт товары',
    name_ua: 'Спорт товари',
    name_en: 'Sport goods',
    totalCount: 54,
    subcategories: [
      { icon: '🔱', name: 'Турники',                      name_ua: 'Турніки',                  name_en: 'Pull-up bars',            count: 2  },
      { icon: '🎒', name: 'Сумки спортивные',             name_ua: 'Сумки спортивні',          name_en: 'Sport bags',              count: 10 },
      { icon: '🏓', name: 'Настольный теннис',            name_ua: 'Настільний теніс',         name_en: 'Table tennis',            count: 9  },
      { icon: '👊', name: 'Мешки боксёрские и крепление', name_ua: 'Мішки боксерські',         name_en: 'Punching bags',           count: 3  },
      { icon: '⚙️', name: 'Тренажёры',                   name_ua: 'Тренажери',                name_en: 'Gym equipment',           count: 6  },
      { icon: '🔗', name: 'Аксессуары',                   name_ua: 'Аксесуари',                name_en: 'Accessories',             count: 2  },
      { icon: '🏋️', name: 'Утяжелители',                 name_ua: 'Обважнювачі',              name_en: 'Ankle weights',           count: 13 },
      { icon: '🏆', name: 'Тяжёлая атлетика',            name_ua: 'Важка атлетика',           name_en: 'Weightlifting',           count: 3  },
      { icon: '💆', name: 'Массажёры',                    name_ua: 'Масажери',                 name_en: 'Massagers',               count: 4  },
      { icon: '🪢', name: 'Скакалки',                     name_ua: 'Скакалки',                 name_en: 'Jump ropes',              count: 1  },
      { icon: '🏸', name: 'Бадминтон',                    name_ua: 'Бадмінтон',                name_en: 'Badminton',               count: 1  },
    ]
  },
  {
    id: 'basketball',
    icon: '🏀',
    name: 'Баскетбол',
    name_ua: 'Баскетбол',
    name_en: 'Basketball',
    totalCount: 20,
    subcategories: [
      { icon: '🏀', name: 'Баскетбольные мячи',     name_ua: 'Баскетбольні м\'ячі', name_en: 'Basketballs',         count: 8  },
      { icon: '👕', name: 'Форма баскетбольная',     name_ua: 'Форма баскетбольна',  name_en: 'Basketball kits',     count: 7  },
      { icon: '👟', name: 'Кроссовки баскетбольные', name_ua: 'Кросівки баскетбол',  name_en: 'Basketball shoes',    count: 5  },
    ]
  },
  {
    id: 'volleyball',
    icon: '🏐',
    name: 'Волейбол',
    name_ua: 'Волейбол',
    name_en: 'Volleyball',
    totalCount: 11,
    subcategories: [
      { icon: '🏐', name: 'Мячи для волейбола',        name_ua: 'М\'ячі для волейболу',    name_en: 'Volleyballs',         count: 5 },
      { icon: '🦵', name: 'Наколенники для волейбола', name_ua: 'Наколінники для волейболу', name_en: 'Volleyball knee pads', count: 6 },
    ]
  },
  {
    id: 'swimming',
    icon: '🏊',
    name: 'Плавание',
    name_ua: 'Плавання',
    name_en: 'Swimming',
    totalCount: 32,
    subcategories: [
      { icon: '🤿', name: 'Маски трубки',              name_ua: 'Маски трубки',              name_en: 'Masks & snorkels',    count: 14 },
      { icon: '🦶', name: 'Ласты',                     name_ua: 'Ласти',                     name_en: 'Fins',                count: 9  },
      { icon: '🥽', name: 'Очки для плавания',         name_ua: 'Окуляри для плавання',      name_en: 'Swimming goggles',    count: 5  },
      { icon: '🩱', name: 'Шапочки для бассейна',      name_ua: 'Шапочки для басейну',       name_en: 'Swim caps',           count: 1  },
      { icon: '🏊', name: 'Досточки для плавания',     name_ua: 'Дошки для плавання',        name_en: 'Kickboards',          count: 2  },
    ]
  },
  {
    id: 'fitness',
    icon: '🧘',
    name: 'Фитнес йога',
    name_ua: 'Фітнес йога',
    name_en: 'Fitness & Yoga',
    totalCount: 14,
    subcategories: [
      { icon: '👗', name: 'Одежда для фитнеса',    name_ua: 'Одяг для фітнесу',     name_en: 'Fitness clothing',   count: 7 },
      { icon: '🎽', name: 'Аксессуары для фитнеса', name_ua: 'Аксесуари для фітнесу', name_en: 'Fitness accessories', count: 7 },
    ]
  },
  {
    id: 'karate',
    icon: '🥋',
    name: 'Каратэ',
    name_ua: 'Карате',
    name_en: 'Karate',
    totalCount: 5,
    subcategories: [
      { icon: '👘', name: 'Кимоно для каратэ',    name_ua: 'Кімоно для карате',   name_en: 'Karate gi',           count: 3 },
      { icon: '🥊', name: 'Защита для каратэ',    name_ua: 'Захист для карате',   name_en: 'Karate protection',   count: 2 },
    ]
  },
  {
    id: 'taekwondo',
    icon: '🦵',
    name: 'Тхэквондо',
    name_ua: 'Тхеквондо',
    name_en: 'Taekwondo',
    totalCount: 2,
    subcategories: [
      { icon: '🥋', name: 'Добок (форма тхэквондо)', name_ua: 'Добок (форма)',     name_en: 'Dobok (uniform)',     count: 1 },
      { icon: '🥊', name: 'Защита для тхэквондо',    name_ua: 'Захист тхеквондо',  name_en: 'Taekwondo protection', count: 1 },
    ]
  },
  {
    id: 'winter',
    icon: '⛷️',
    name: 'Зимний спорт',
    name_ua: 'Зимовий спорт',
    name_en: 'Winter sports',
    totalCount: 10,
    subcategories: [
      { icon: '🧤', name: 'Перчатки зимние спортивные', name_ua: 'Рукавиці зимові',   name_en: 'Winter gloves',       count: 4 },
      { icon: '🧣', name: 'Термобелье зимнее',          name_ua: 'Термобілизна зимова', name_en: 'Winter thermals',    count: 4 },
      { icon: '🎿', name: 'Аксессуары зимнего спорта',  name_ua: 'Аксесуари зимового', name_en: 'Winter accessories',  count: 2 },
    ]
  },
  {
    id: 'tourism',
    icon: '🏕️',
    name: 'Товары для туризма и отдыха',
    name_ua: 'Товари для туризму та відпочинку',
    name_en: 'Tourism & outdoor',
    totalCount: 26,
    subcategories: [
      { icon: '🎒', name: 'Рюкзаки туристические',   name_ua: 'Рюкзаки туристичні',    name_en: 'Hiking backpacks',    count: 6  },
      { icon: '🏕️', name: 'Туристическое снаряжение', name_ua: 'Туристичне спорядження', name_en: 'Camping gear',        count: 8  },
      { icon: '🔦', name: 'Фонари и освещение',       name_ua: 'Ліхтарі та освітлення', name_en: 'Flashlights',         count: 5  },
      { icon: '🧰', name: 'Аксессуары для туризма',   name_ua: 'Аксесуари для туризму', name_en: 'Tourism accessories',  count: 7  },
    ]
  },
];

/* ─── STATE ──────────────────────────────────── */
const State = {
  lang: localStorage.getItem('sx_lang') || null,
  dict: {},
  allLang: {},
  products: [],
  currentProduct: null,
};

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ═══════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════ */
async function boot() {
  initCursor();
  try {
    const [langData, products] = await Promise.all([
      fetch('lang.json').then(r => r.json()),
      fetch('products.json').then(r => r.json()),
    ]);
    State.products = products;
    State.allLang  = langData;
    if (!State.lang) { showSplash(langData); }
    else { applyLang(langData[State.lang]); initApp(); }
  } catch(e) {
    console.error('Boot:', e);
    initApp();
  }
}

/* ═══════════════════════════════════════════════
   CURSOR
═══════════════════════════════════════════════ */
function initCursor() {
  const cursor = $('#cursor'), ring = $('#cursor-ring');
  if (!cursor || !ring) return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY;
    cursor.style.left=mx+'px'; cursor.style.top=my+'px';
  });
  (function loop(){
    rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(loop);
  })();
  document.addEventListener('mouseover', e => {
    if(e.target.closest('a,button,[role="button"],.product-card,.cat-card,.subcat-item,.splash-lang-btn')) {
      cursor.style.width='20px'; cursor.style.height='20px';
      ring.style.width='52px'; ring.style.height='52px'; ring.style.opacity='.9';
    }
  });
  document.addEventListener('mouseout', e => {
    if(e.target.closest('a,button,[role="button"],.product-card,.cat-card,.subcat-item,.splash-lang-btn')) {
      cursor.style.width='12px'; cursor.style.height='12px';
      ring.style.width='36px'; ring.style.height='36px'; ring.style.opacity='.6';
    }
  });
}

/* ═══════════════════════════════════════════════
   SPLASH
═══════════════════════════════════════════════ */
function showSplash(langData) {
  const splash = $('#splash');
  if (!splash) return;
  splash.classList.remove('hidden');
  $$('.splash-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      State.lang = btn.dataset.lang;
      localStorage.setItem('sx_lang', State.lang);
      applyLang(langData[State.lang]);
      splash.style.transition = 'opacity .45s ease, transform .45s ease';
      splash.style.opacity = '0'; splash.style.transform = 'scale(1.04)';
      setTimeout(() => {
        splash.classList.add('hidden');
        window.scrollTo({ top:0, behavior:'instant' });
        initApp();
      }, 460);
    });
  });
}

/* ═══════════════════════════════════════════════
   I18N
═══════════════════════════════════════════════ */
function applyLang(dict) {
  if (!dict) return;
  State.dict = dict;
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] === undefined) return;
    if (el.tagName==='INPUT'||el.tagName==='TEXTAREA') el.placeholder=dict[key];
    else if (el.hasAttribute('data-i18n-html')) el.innerHTML=dict[key];
    else el.textContent=dict[key];
  });
  $$('.lang-switch-btn').forEach(b => b.classList.toggle('active', b.dataset.lang===State.lang));
  document.documentElement.lang = State.lang==='ua'?'uk':(State.lang||'ru');
}
function t(k){ return State.dict[k]||k; }

/* ═══════════════════════════════════════════════
   INIT APP
═══════════════════════════════════════════════ */
function initApp() {
  initHeader();
  initMobileNav();
  initReveal();
  renderCategories();
  renderProducts();
  renderFooterCats();
  initCategoryModal();
  initLangSwitch();
  handleUrlProduct();
  window.addEventListener('popstate', handleUrlProduct);
}

function initHeader() {
  const h = $('#header');
  if (!h) return;
  window.addEventListener('scroll', () => h.classList.toggle('scrolled', scrollY>50), {passive:true});
}
function initMobileNav() {
  const burger=$('#burgerBtn'), nav=$('#mobileNav');
  if (!burger||!nav) return;
  burger.addEventListener('click', () => nav.classList.add('open'));
  $('#closeNav')?.addEventListener('click', () => nav.classList.remove('open'));
  $$('.mobile-nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}
function initReveal() {
  const obs = new IntersectionObserver(entries =>
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold:.1 }
  );
  $$('.reveal').forEach(el => obs.observe(el));
}
function initLangSwitch() {
  $$('.lang-switch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      State.lang = btn.dataset.lang;
      localStorage.setItem('sx_lang', State.lang);
      applyLang(State.allLang[State.lang]);
      renderCategories();
      renderProducts();
      renderFooterCats();
    });
  });
}

/* ═══════════════════════════════════════════════
   RENDER CATEGORIES GRID
═══════════════════════════════════════════════ */
function getCatName(cat) {
  return State.lang==='ua' ? cat.name_ua : State.lang==='en' ? cat.name_en : cat.name;
}
function getSubName(sub) {
  return State.lang==='ua' ? sub.name_ua : State.lang==='en' ? sub.name_en : sub.name;
}

function renderCategories() {
  const grid = $('#categoriesGrid');
  if (!grid) return;
  grid.innerHTML = '';

  CATEGORIES.forEach((cat, i) => {
    const name = getCatName(cat);
    const delay = (i % 4) + 1;
    const card = document.createElement('div');
    card.className = `cat-card reveal reveal-delay-${delay}`;
    card.dataset.catId = cat.id;
    card.setAttribute('role','button');
    card.setAttribute('tabindex','0');
    card.innerHTML = `
      <div class="cat-bg-art">${cat.icon}</div>
      <div class="cat-gradient"></div>
      <div class="cat-card-line"></div>
      <div class="cat-info">
        <span class="cat-icon">${cat.icon}</span>
        <span class="cat-name">${name}</span>
        <span class="cat-sub-count">${cat.totalCount} ${t('stat_products')||'товаров'} · ${cat.subcategories.length} подкатегорий</span>
      </div>
      <span class="cat-arrow">→</span>`;
    card.addEventListener('click', () => openCategoryModal(cat));
    card.addEventListener('keydown', e => { if(e.key==='Enter') openCategoryModal(cat); });
    grid.appendChild(card);
  });

  initReveal();
}

function renderFooterCats() {
  const el = $('#footerCatLinks');
  if (!el) return;
  el.innerHTML = CATEGORIES.slice(0,8).map(c =>
    `<span class="footer-link" style="cursor:default">${getCatName(c)}</span>`
  ).join('');
}

/* ═══════════════════════════════════════════════
   CATEGORY MODAL (with subcategories)
═══════════════════════════════════════════════ */
function initCategoryModal() {
  const modal = $('#catModal');
  if (!modal) return;

  $('#catModalClose')?.addEventListener('click', closeCategoryModal);
  modal.addEventListener('click', e => { if(e.target===modal) closeCategoryModal(); });
  document.addEventListener('keydown', e => {
    if(e.key==='Escape' && modal.classList.contains('open')) closeCategoryModal();
  });
}

function openCategoryModal(cat) {
  const modal   = $('#catModal');
  const title   = $('#catModalTitle');
  const icon    = $('#catModalIcon');
  const list    = $('#catModalList');
  if (!modal) return;

  title.textContent = getCatName(cat);
  icon.textContent  = cat.icon;
  list.innerHTML    = '';

  cat.subcategories.forEach(sub => {
    const name = getSubName(sub);
    const item = document.createElement('div');
    item.className = 'subcat-item';
    item.innerHTML = `
      <div class="subcat-left">
        <span class="subcat-icon">${sub.icon}</span>
        <span class="subcat-name">${name}</span>
      </div>
      <div class="subcat-right">
        <span class="subcat-count">${sub.count}</span>
        <span class="subcat-arrow">→</span>
      </div>`;

    // Click on sub → scroll to products + filter (future: add product filter by subcat)
    item.addEventListener('click', () => {
      closeCategoryModal();
      setTimeout(() => {
        document.getElementById('products')?.scrollIntoView({behavior:'smooth'});
      }, 350);
    });
    list.appendChild(item);
  });

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => modal.classList.add('open'));
}

function closeCategoryModal() {
  const modal = $('#catModal');
  if (!modal) return;
  modal.classList.remove('open');
  setTimeout(() => {
    modal.classList.add('hidden');
    if (!$('#productOverlay') && !$('#checkoutModal')) document.body.style.overflow = '';
  }, 360);
}

/* ═══════════════════════════════════════════════
   PRODUCTS
═══════════════════════════════════════════════ */
function getProductName(p) {
  return State.lang==='ua' ? p.name_ua : State.lang==='en' ? p.name_en : p.name;
}

function renderProducts() {
  const grid = $('#productsGrid');
  if (!grid) return;
  const dict = State.dict;
  grid.innerHTML = '';

  State.products.forEach((p, i) => {
    const name  = getProductName(p);
    const badge = p.badge==='new' ? (dict.badge_new||'NEW')
                : p.badge==='hit' ? (dict.badge_hit||'ХИТ') : '';
    const card = document.createElement('div');
    card.className = `product-card reveal reveal-delay-${(i%4)+1}`;
    card.setAttribute('role','button'); card.setAttribute('tabindex','0');
    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${name}" class="product-img" loading="lazy"
          onerror="this.src='https://placehold.co/400x400/161616/444?text=SportEx'"/>
        ${badge?`<span class="product-badge">${badge}</span>`:''}
      </div>
      <div class="product-info">
        <div class="product-name">${name}</div>
        <div class="product-footer">
          <div class="product-price">${p.price.toLocaleString('uk-UA')}<span> ₴</span></div>
          <button class="btn-buy" aria-label="${dict.btn_buy||'Купить'}">→</button>
        </div>
      </div>`;
    card.addEventListener('click', e => { if(!e.target.closest('.btn-buy')) openProductPage(p.id); });
    card.querySelector('.btn-buy').addEventListener('click', e => { e.stopPropagation(); openCheckout(p); });
    card.addEventListener('keydown', e => { if(e.key==='Enter') openProductPage(p.id); });
    grid.appendChild(card);
  });
  initReveal();
}

/* ═══════════════════════════════════════════════
   PRODUCT PAGE
═══════════════════════════════════════════════ */
function openProductPage(id) {
  const p = State.products.find(x=>x.id===id);
  if (!p) return;
  State.currentProduct = p;
  history.pushState({productId:id}, '', `?product=${id}`);
  renderProductPage(p);
}
function closeProductPage() {
  State.currentProduct = null;
  history.pushState({}, '', window.location.pathname);
  const o=$('#productOverlay');
  if(o){o.classList.remove('open');setTimeout(()=>o.remove(),400);}
  document.body.style.overflow='';
}
function handleUrlProduct() {
  const id=parseInt(new URLSearchParams(location.search).get('product'));
  if(id){const p=State.products.find(x=>x.id===id);if(p){State.currentProduct=p;renderProductPage(p);return;}}
  const o=$('#productOverlay');
  if(o){o.classList.remove('open');setTimeout(()=>o.remove(),400);document.body.style.overflow='';}
}
function renderProductPage(product) {
  $('#productOverlay')?.remove();
  const dict=State.dict, name=getProductName(product);
  const overlay=document.createElement('div');
  overlay.id='productOverlay'; overlay.className='product-overlay';
  overlay.setAttribute('role','dialog'); overlay.setAttribute('aria-modal','true');
  overlay.innerHTML=`
    <div class="product-overlay-inner">
      <button class="product-back-btn" id="productBackBtn">${dict.product_back||'← Назад в каталог'}</button>
      <div class="product-page-grid">
        <div class="product-page-img-wrap">
          <img src="${product.image}" alt="${name}" class="product-page-img"
            onerror="this.src='https://placehold.co/600x600/161616/444?text=SportEx'"/>
        </div>
        <div class="product-page-info">
          <div class="product-page-label">${product.category.toUpperCase()}${product.brand?' · '+product.brand:''}</div>
          <h1 class="product-page-name">${name}</h1>
          <div class="product-page-price">${product.price.toLocaleString('uk-UA')} <span>₴</span></div>
          <div class="product-page-meta">
            ${product.brand?`<div class="meta-row"><span>${dict.product_brand||'Бренд'}:</span><strong>${product.brand}</strong></div>`:''}
            ${product.sku?`<div class="meta-row"><span>${dict.product_sku||'Артикул'}:</span><strong>${product.sku}</strong></div>`:''}
            <div class="meta-row meta-available"><span class="available-dot"></span><span>${dict.product_available||'В наличии'}</span></div>
          </div>
          <button class="btn-primary product-buy-btn" id="productBuyBtn">${dict.product_btn_buy||'Оформить заказ'}</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  document.body.style.overflow='hidden';
  requestAnimationFrame(()=>overlay.classList.add('open'));
  $('#productBackBtn').addEventListener('click', closeProductPage);
  overlay.addEventListener('click', e=>{if(e.target===overlay)closeProductPage();});
  $('#productBuyBtn').addEventListener('click', ()=>openCheckout(product));
  const onEsc=e=>{if(e.key==='Escape'){closeProductPage();document.removeEventListener('keydown',onEsc);}};
  document.addEventListener('keydown',onEsc);
}

/* ═══════════════════════════════════════════════
   CHECKOUT
═══════════════════════════════════════════════ */
function openCheckout(product) {
  $('#checkoutModal')?.remove();
  const dict=State.dict, name=getProductName(product);
  const modal=document.createElement('div');
  modal.id='checkoutModal'; modal.className='checkout-modal';
  modal.setAttribute('role','dialog'); modal.setAttribute('aria-modal','true');
  modal.innerHTML=`
    <div class="checkout-inner">
      <button class="checkout-close-btn" id="checkoutCloseBtn">✕</button>
      <h2 class="checkout-title">${dict.checkout_title||'Оформление заказа'}</h2>
      <div class="checkout-product-info">
        <img src="${product.image}" alt="${name}" class="checkout-product-img"
          onerror="this.src='https://placehold.co/80x80/161616/444?text=SX'"/>
        <div>
          <div class="checkout-product-name">${name}</div>
          <div class="checkout-product-price">${product.price.toLocaleString('uk-UA')} ₴</div>
        </div>
      </div>
      <form id="checkoutForm" novalidate autocomplete="on">
        <div class="form-group">
          <label for="cf-name">${dict.checkout_name||'Имя *'}</label>
          <input type="text" id="cf-name" name="name" required autocomplete="given-name" placeholder="${dict.checkout_name_ph||'Ваше имя'}"/>
          <span class="field-error" id="err-name"></span>
        </div>
        <div class="form-group">
          <label for="cf-phone">${dict.checkout_phone||'Телефон *'}</label>
          <input type="tel" id="cf-phone" name="phone" required autocomplete="tel" placeholder="+380 (99) 999-99-99" maxlength="19"/>
          <span class="field-error" id="err-phone"></span>
        </div>
        <div class="form-group">
          <label for="cf-city">${dict.checkout_city||'Город *'}</label>
          <input type="text" id="cf-city" name="city" required autocomplete="address-level2" placeholder="${dict.checkout_city_ph||'Введите город'}" list="ukraine-cities"/>
          <datalist id="ukraine-cities">
            <option value="Одеса"><option value="Київ"><option value="Харків">
            <option value="Дніпро"><option value="Запоріжжя"><option value="Львів">
            <option value="Миколаїв"><option value="Херсон"><option value="Полтава">
            <option value="Черкаси"><option value="Вінниця"><option value="Житомир">
            <option value="Суми"><option value="Хмельницький"><option value="Рівне">
            <option value="Тернопіль"><option value="Луцьк"><option value="Ужгород">
            <option value="Чернівці"><option value="Чернігів"><option value="Кропивницький">
          </datalist>
          <span class="field-error" id="err-city"></span>
        </div>
        <div class="form-group">
          <label>${dict.checkout_size||'Размер'}</label>
          <div class="size-options">
            ${['XS','S','M','L','XL','XXL'].map((s,i)=>`
              <label class="size-btn-label">
                <input type="radio" name="size" value="${s}" ${i===2?'checked':''}>
                <span class="size-btn">${s}</span>
              </label>`).join('')}
          </div>
        </div>
        <div class="form-group">
          <label>${dict.checkout_delivery||'Служба доставки *'}</label>
          <div class="delivery-options">
            <label class="radio-label"><input type="radio" name="delivery" value="nova" checked><span class="radio-custom"></span><span>${dict.checkout_nova||'Нова Пошта'}</span></label>
            <label class="radio-label"><input type="radio" name="delivery" value="ukr"><span class="radio-custom"></span><span>${dict.checkout_ukr||'Укрпошта'}</span></label>
          </div>
        </div>
        <div class="form-group">
          <label for="cf-branch">${dict.checkout_branch||'Номер отделения'}</label>
          <input type="text" id="cf-branch" name="branch" placeholder="${dict.checkout_branch_ph||'№ отделения'}"/>
        </div>
        <button type="submit" class="btn-primary checkout-submit-btn">${dict.checkout_btn||'Подтвердить заказ'}</button>
      </form>
      <div class="checkout-success hidden" id="checkoutSuccess">
        <div class="success-icon">✓</div>
        <p>${dict.checkout_success||'🎉 Спасибо за заказ!'}</p>
        <button class="btn-outline success-close-btn" id="successCloseBtn">${dict.checkout_close||'Закрыть'}</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  document.body.style.overflow='hidden';
  requestAnimationFrame(()=>modal.classList.add('open'));
  const ph=$('#cf-phone',modal);
  ph.addEventListener('input',()=>applyPhoneMask(ph));
  $('#checkoutCloseBtn').addEventListener('click',closeCheckout);
  modal.addEventListener('click',e=>{if(e.target===modal)closeCheckout();});
  const onEsc=e=>{if(e.key==='Escape'){closeCheckout();document.removeEventListener('keydown',onEsc);}};
  document.addEventListener('keydown',onEsc);
  $('#checkoutForm').addEventListener('submit',e=>{
    e.preventDefault();
    if(validateCheckoutForm(modal)) submitOrder(collectFormData(modal,product));
  });
  $('#successCloseBtn')?.addEventListener('click',closeCheckout);
}

function closeCheckout() {
  const m=$('#checkoutModal');
  if(!m)return;
  m.classList.remove('open');
  setTimeout(()=>{m.remove();if(!$('#productOverlay'))document.body.style.overflow='';},400);
}

/* ─── Phone mask ─── */
function applyPhoneMask(input) {
  let d=input.value.replace(/\D/g,'');
  if(d.startsWith('380'))d=d.slice(3);
  else if(d.startsWith('80'))d=d.slice(2);
  else if(d.startsWith('0'))d=d.slice(1);
  d=d.slice(0,9);
  let out='+380 ';
  if(d.length>0)out+='('+d.slice(0,2);
  if(d.length>=2)out+=') '+d.slice(2,5);
  if(d.length>=5)out+='-'+d.slice(5,7);
  if(d.length>=7)out+='-'+d.slice(7,9);
  input.value=out;
}

/* ─── Validation ─── */
function validateCheckoutForm(modal) {
  let ok=true;
  const err=(id,msg)=>{const el=$(`#${id}`,modal);if(el)el.textContent=msg;if(msg)ok=false;};
  err('err-name','');err('err-phone','');err('err-city','');
  const nameVal=$('#cf-name',modal).value.trim();
  const phoneRaw=$('#cf-phone',modal).value.replace(/\D/g,'');
  const cityVal=$('#cf-city',modal).value.trim();
  if(!nameVal) err('err-name','⚠ Обязательное поле');
  if(phoneRaw.length<12) err('err-phone','⚠ Введите полный номер: +380XXXXXXXXX');
  if(!cityVal) err('err-city','⚠ Обязательное поле');
  return ok;
}

/* ─── Collect ─── */
function collectFormData(modal,product){
  return {
    product_id:product.id,
    product_name:getProductName(product),
    product_price:product.price,
    customer_name:$('#cf-name',modal).value.trim(),
    phone:$('#cf-phone',modal).value.trim(),
    city:$('#cf-city',modal).value.trim(),
    size:$('input[name="size"]:checked',modal)?.value||'—',
    delivery:$('input[name="delivery"]:checked',modal)?.value||'nova',
    branch:$('#cf-branch',modal).value.trim(),
    timestamp:new Date().toISOString(),
    lang:State.lang||'ru',
  };
}

/* ═══════════════════════════════════════════════
   submitOrder — Telegram
═══════════════════════════════════════════════ */
async function submitOrder(data) {
  const delivLabel = data.delivery==='nova'?'🟡 Нова Пошта':'🔵 Укрпошта';
  const time = new Date(data.timestamp).toLocaleString('ru-UA',{timeZone:'Europe/Kiev'});
  const text = [
    '🛒 <b>НОВЫЙ ЗАКАЗ — SportEx</b>','',
    `📦 <b>Товар:</b> ${data.product_name}`,
    `💰 <b>Цена:</b> ${data.product_price.toLocaleString('uk-UA')} ₴`,
    `📐 <b>Размер:</b> <b>${data.size}</b>`,'',
    `👤 <b>Покупатель:</b> ${data.customer_name}`,
    `📞 <b>Телефон:</b> ${data.phone}`,
    `🏙 <b>Город:</b> ${data.city}`,
    `🚚 <b>Доставка:</b> ${delivLabel}`,
    `🏪 <b>Отделение:</b> ${data.branch||'—'}`,'',
    `🌐 <b>Язык:</b> ${data.lang.toUpperCase()}`,
    `🕐 <b>Время:</b> ${time}`,
  ].join('\n');
  try {
    const res=await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`,{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({chat_id:TG_CHAT_ID,text,parse_mode:'HTML'}),
    });
    const json=await res.json();
    if(!json.ok) console.warn('TG error:',json.description);
  } catch(e){console.error('TG fetch:',e);}

  const form=$('#checkoutForm'), success=$('#checkoutSuccess');
  if(form&&success){
    form.style.transition='opacity .3s,transform .3s';
    form.style.opacity='0'; form.style.transform='translateY(-12px)';
    setTimeout(()=>{form.style.display='none';success.classList.remove('hidden');},320);
  }
}

document.addEventListener('DOMContentLoaded', boot);

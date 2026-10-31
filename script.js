/**
 * صيدلية النور - Al-Nour Pharmacy
 * Client-side Controller & Interactions:
 * Multilingual i18n, Theme Toggling, Product Filter & Sort, Shopping Cart, Lightbox, Form Validation
 */

(function () {
  "use strict";

  // Check data availability
  if (typeof window.pharmacyData === "undefined") {
    console.error("Critical: pharmacyData is not defined in data.js");
    return;
  }

  const { translations, products, testimonials, gallery, info } = window.pharmacyData;

  // --------------------------------------------------------------------------
  // Application State
  // --------------------------------------------------------------------------
  const state = {
    currentLang: "ar",
    theme: "light",
    cart: [],
    activeCategory: "all",
    searchQuery: "",
    sortBy: "default",
    lightboxIndex: 0
  };

  // Safe LocalStorage helpers
  function getStoredItem(key, defaultValue) {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? JSON.parse(val) : defaultValue;
    } catch (e) {
      return defaultValue;
    }
  }

  function setStoredItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn("Storage quota exceeded or disabled", e);
    }
  }

  // --------------------------------------------------------------------------
  // DOM Elements Cache
  // --------------------------------------------------------------------------
  const elements = {
    html: document.documentElement,
    navbar: document.getElementById("navbar"),
    navMenu: document.getElementById("navMenu"),
    navToggle: document.getElementById("navToggle"),
    navLinks: document.querySelectorAll(".nav__link"),
    langSwitchBtn: document.getElementById("langSwitchBtn"),
    langLabel: document.getElementById("langLabel"),
    themeToggleBtn: document.getElementById("themeToggleBtn"),
    sunIcon: document.querySelector(".theme-icon--sun"),
    moonIcon: document.querySelector(".theme-icon--moon"),
    cartOpenBtn: document.getElementById("cartOpenBtn"),
    cartCloseBtn: document.getElementById("cartCloseBtn"),
    cartDrawer: document.getElementById("cartDrawer"),
    cartDrawerOverlay: document.getElementById("cartDrawerOverlay"),
    cartItemsList: document.getElementById("cartItemsList"),
    cartBadge: document.getElementById("cartBadge"),
    cartSubtotalValue: document.getElementById("cartSubtotalValue"),
    cartDeliveryValue: document.getElementById("cartDeliveryValue"),
    cartTotalValue: document.getElementById("cartTotalValue"),
    cartClearBtn: document.getElementById("cartClearBtn"),
    cartCheckoutBtn: document.getElementById("cartCheckoutBtn"),
    categoryTabs: document.getElementById("categoryTabs"),
    productSearchInput: document.getElementById("productSearchInput"),
    productSortSelect: document.getElementById("productSortSelect"),
    productsGrid: document.getElementById("productsGrid"),
    galleryGrid: document.getElementById("galleryGrid"),
    lightboxModal: document.getElementById("lightboxModal"),
    lightboxImage: document.getElementById("lightboxImage"),
    lightboxCaption: document.getElementById("lightboxCaption"),
    lightboxCloseBtn: document.getElementById("lightboxCloseBtn"),
    lightboxPrevBtn: document.getElementById("lightboxPrevBtn"),
    lightboxNextBtn: document.getElementById("lightboxNextBtn"),
    testimonialsGrid: document.getElementById("testimonialsGrid"),
    orderForm: document.getElementById("orderForm"),
    orderSuccessAlert: document.getElementById("orderSuccessAlert"),
    orderSubmitBtn: document.getElementById("orderSubmitBtn"),
    backToTopBtn: document.getElementById("backToTopBtn"),
    toastContainer: document.getElementById("toastContainer")
  };

  // --------------------------------------------------------------------------
  // Formatters & Localizers
  // --------------------------------------------------------------------------
  function formatCurrency(amount) {
    const cur = translations[state.currentLang].currency;
    return `${amount.toLocaleString()} ${cur}`;
  }

  function getNestedTranslation(key, lang) {
    const keys = key.split(".");
    let current = keys[0] === "info" ? info : translations[lang];

    for (const k of keys) {
      if (k === "info" && keys[0] === "info") continue;
      if (current && typeof current === "object" && k in current) {
        current = current[k];
      } else {
        return null;
      }
    }

    if (current && typeof current === "object" && lang in current) {
      return current[lang];
    }
    return typeof current === "string" ? current : null;
  }

  // --------------------------------------------------------------------------
  // i18n: Language Switching Engine
  // --------------------------------------------------------------------------
  function switchLanguage(lang) {
    state.currentLang = lang;
    setStoredItem("al_nour_lang", lang);

    const isRtl = lang === "ar";
    elements.html.lang = lang;
    elements.html.dir = isRtl ? "rtl" : "ltr";

    // Update document title
    document.title = isRtl
      ? "صيدلية النور | Al-Nour Pharmacy - رعاية صيدلانية متكاملة بالجزائر"
      : "Al-Nour Pharmacy | Comprehensive Healthcare in Algiers";

    // Update Switcher Button Text (Show alternative language)
    if (elements.langLabel) {
      elements.langLabel.textContent = isRtl ? "EN" : "عربي";
    }

    // Translate all standard text nodes with data-i18n
    const translatables = document.querySelectorAll("[data-i18n]");
    translatables.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translation = getNestedTranslation(key, lang);
      if (translation !== null) {
        el.textContent = translation;
      }
    });

    // Translate placeholder attributes with data-i18n-placeholder
    const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const translation = getNestedTranslation(key, lang);
      if (translation !== null) {
        el.setAttribute("placeholder", translation);
      }
    });

    // Translate aria labels with data-i18n-aria
    const ariaElements = document.querySelectorAll("[data-i18n-aria]");
    ariaElements.forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const translation = getNestedTranslation(key, lang);
      if (translation !== null) {
        el.setAttribute("aria-label", translation);
      }
    });

    // Re-render dynamic components with localized data
    renderProducts();
    renderGallery();
    renderTestimonials();
    renderCart();
  }

  // --------------------------------------------------------------------------
  // Theme Engine (Dark / Light Mode)
  // --------------------------------------------------------------------------
  function setTheme(theme) {
    state.theme = theme;
    elements.html.setAttribute("data-theme", theme);
    setStoredItem("al_nour_theme", theme);

    if (elements.sunIcon && elements.moonIcon) {
      if (theme === "dark") {
        elements.sunIcon.style.display = "block";
        elements.moonIcon.style.display = "none";
      } else {
        elements.sunIcon.style.display = "none";
        elements.moonIcon.style.display = "block";
      }
    }
  }

  function toggleTheme() {
    const nextTheme = state.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }

  // --------------------------------------------------------------------------
  // Products Catalog (Filtering, Searching, Sorting, Rendering)
  // --------------------------------------------------------------------------
  function renderProducts() {
    if (!elements.productsGrid) return;

    const t = translations[state.currentLang];

    // Filter by Category
    let filtered = products.filter((prod) => {
      if (state.activeCategory === "all") return true;
      return prod.category === state.activeCategory;
    });

    // Filter by Search Query
    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase().trim();
      filtered = filtered.filter((prod) => {
        const nameAr = prod.name.ar.toLowerCase();
        const nameEn = prod.name.en.toLowerCase();
        const descAr = prod.description.ar.toLowerCase();
        const descEn = prod.description.en.toLowerCase();
        return nameAr.includes(q) || nameEn.includes(q) || descAr.includes(q) || descEn.includes(q);
      });
    }

    // Sort Products
    filtered.sort((a, b) => {
      if (state.sortBy === "price-asc") return a.price - b.price;
      if (state.sortBy === "price-desc") return b.price - a.price;
      if (state.sortBy === "rating-desc") return b.rating - a.rating;
      return 0; // default
    });

    // Handle Empty Results
    if (filtered.length === 0) {
      elements.productsGrid.innerHTML = `
        <div class="products-empty">
          <svg class="products-empty__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
          <p class="products-empty__text">${t.no_products_found}</p>
          <button type="button" class="btn btn--outline" id="resetFiltersBtn">${t.filter_reset}</button>
        </div>
      `;

      const resetBtn = document.getElementById("resetFiltersBtn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          state.activeCategory = "all";
          state.searchQuery = "";
          state.sortBy = "default";
          if (elements.productSearchInput) elements.productSearchInput.value = "";
          if (elements.productSortSelect) elements.productSortSelect.value = "default";
          updateCategoryTabs();
          renderProducts();
        });
      }
      return;
    }

    // Build Product Cards
    const cardsHtml = filtered
      .map((item) => {
        const name = item.name[state.currentLang] || item.name.ar;
        const desc = item.description[state.currentLang] || item.description.ar;
        const badge = item.badge ? item.badge[state.currentLang] || item.badge.ar : "";
        const formattedPrice = formatCurrency(item.price);

        // Category localized name
        let catName = "";
        if (item.category === "vitamins") catName = t.cat_vitamins;
        else if (item.category === "skincare") catName = t.cat_skincare;
        else if (item.category === "mother-baby") catName = t.cat_mother_baby;
        else if (item.category === "first-aid") catName = t.cat_first_aid;

        return `
        <article class="product-card" data-product-id="${item.id}">
          <div class="product-card__thumb">
            <img 
              src="${item.image}" 
              alt="${name}" 
              class="product-card__img" 
              loading="lazy" 
              width="400" 
              height="300"
            >
            ${badge ? `<span class="badge badge--accent product-card__badge">${badge}</span>` : ""}
          </div>
          <div class="product-card__body">
            <span class="product-card__category">${catName}</span>
            <h3 class="product-card__title">${name}</h3>
            <p class="product-card__desc">${desc}</p>
            
            <div class="product-card__rating">
              <span class="rating-stars" aria-label="${item.rating} out of 5 stars">
                ${generateStarRating(item.rating)}
              </span>
              <span>(${item.reviewsCount})</span>
            </div>

            <div class="product-card__footer">
              <div class="product-card__price">
                <span class="product-card__amount">${formattedPrice}</span>
              </div>
              <button 
                type="button" 
                class="btn btn--primary add-to-cart-btn" 
                data-id="${item.id}"
                style="padding: 0.55rem 1rem; font-size: 0.875rem;"
                aria-label="${t.add_to_cart} - ${name}"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                <span>${t.add_to_cart}</span>
              </button>
            </div>
          </div>
        </article>
      `;
      })
      .join("");

    elements.productsGrid.innerHTML = cardsHtml;

    // Attach Add to Cart Listeners
    const addBtns = elements.productsGrid.querySelectorAll(".add-to-cart-btn");
    addBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        addToCart(id);
      });
    });
  }

  function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    let starsSvg = "";
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        starsSvg += `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
      } else {
        starsSvg += `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
      }
    }
    return starsSvg;
  }

  function updateCategoryTabs() {
    if (!elements.categoryTabs) return;
    const tabs = elements.categoryTabs.querySelectorAll(".filter-tab");
    tabs.forEach((tab) => {
      const cat = tab.getAttribute("data-category");
      if (cat === state.activeCategory) {
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
      } else {
        tab.classList.remove("active");
        tab.setAttribute("aria-selected", "false");
      }
    });
  }

  // --------------------------------------------------------------------------
  // Shopping Cart Engine
  // --------------------------------------------------------------------------
  function addToCart(productId, quantity = 1) {
    const itemIndex = state.cart.findIndex((c) => c.id === productId);
    if (itemIndex > -1) {
      state.cart[itemIndex].quantity += quantity;
    } else {
      state.cart.push({ id: productId, quantity });
    }

    setStoredItem("al_nour_cart", state.cart);
    renderCart();

    const product = products.find((p) => p.id === productId);
    const prodName = product ? product.name[state.currentLang] : "";
    showToast(`${translations[state.currentLang].toast_added_to_cart} (${prodName})`);
  }

  function updateCartQuantity(productId, delta) {
    const itemIndex = state.cart.findIndex((c) => c.id === productId);
    if (itemIndex > -1) {
      state.cart[itemIndex].quantity += delta;
      if (state.cart[itemIndex].quantity <= 0) {
        state.cart.splice(itemIndex, 1);
      }
      setStoredItem("al_nour_cart", state.cart);
      renderCart();
    }
  }

  function removeFromCart(productId) {
    state.cart = state.cart.filter((c) => c.id !== productId);
    setStoredItem("al_nour_cart", state.cart);
    renderCart();
  }

  function clearCart() {
    state.cart = [];
    setStoredItem("al_nour_cart", state.cart);
    renderCart();
    showToast(translations[state.currentLang].toast_cart_cleared);
  }

  function renderCart() {
    if (!elements.cartItemsList || !elements.cartBadge) return;

    const t = translations[state.currentLang];
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

    // Update Navbar Badge
    elements.cartBadge.textContent = totalItems;
    if (totalItems > 0) {
      elements.cartBadge.classList.add("active");
    } else {
      elements.cartBadge.classList.remove("active");
    }

    // Handle Empty Cart
    if (state.cart.length === 0) {
      elements.cartItemsList.innerHTML = `
        <div class="cart-empty">
          <svg class="cart-empty__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <p>${t.cart_empty}</p>
        </div>
      `;
      if (elements.cartSubtotalValue) elements.cartSubtotalValue.textContent = formatCurrency(0);
      if (elements.cartDeliveryValue) elements.cartDeliveryValue.textContent = formatCurrency(0);
      if (elements.cartTotalValue) elements.cartTotalValue.textContent = formatCurrency(0);
      return;
    }

    // Calculate Totals
    let subtotal = 0;
    const itemsHtml = state.cart
      .map((cartItem) => {
        const prod = products.find((p) => p.id === cartItem.id);
        if (!prod) return "";

        const itemSubtotal = prod.price * cartItem.quantity;
        subtotal += itemSubtotal;
        const name = prod.name[state.currentLang] || prod.name.ar;

        return `
        <div class="cart-item" data-id="${prod.id}">
          <img src="${prod.image}" alt="${name}" class="cart-item__thumb" width="64" height="64">
          <div class="cart-item__info">
            <h4 class="cart-item__title">${name}</h4>
            <div class="cart-item__price">${formatCurrency(prod.price)}</div>
          </div>
          <div class="cart-item__actions">
            <button type="button" class="qty-btn qty-minus" data-id="${prod.id}" aria-label="تقليل الكمية">-</button>
            <span class="cart-item__qty">${cartItem.quantity}</span>
            <button type="button" class="qty-btn qty-plus" data-id="${prod.id}" aria-label="زيادة الكمية">+</button>
            <button type="button" class="cart-item__remove" data-id="${prod.id}" aria-label="حذف المنتج">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      `;
      })
      .join("");

    elements.cartItemsList.innerHTML = itemsHtml;

    // Delivery calculation
    const isFreeDelivery = subtotal >= info.delivery.freeThreshold;
    const deliveryFee = isFreeDelivery ? 0 : info.delivery.fee;
    const grandTotal = subtotal + deliveryFee;

    if (elements.cartSubtotalValue) elements.cartSubtotalValue.textContent = formatCurrency(subtotal);
    if (elements.cartDeliveryValue) {
      elements.cartDeliveryValue.textContent = isFreeDelivery ? t.cart_free_delivery : formatCurrency(deliveryFee);
    }
    if (elements.cartTotalValue) elements.cartTotalValue.textContent = formatCurrency(grandTotal);

    // Attach item quantity handlers
    elements.cartItemsList.querySelectorAll(".qty-minus").forEach((btn) => {
      btn.addEventListener("click", () => updateCartQuantity(btn.dataset.id, -1));
    });
    elements.cartItemsList.querySelectorAll(".qty-plus").forEach((btn) => {
      btn.addEventListener("click", () => updateCartQuantity(btn.dataset.id, 1));
    });
    elements.cartItemsList.querySelectorAll(".cart-item__remove").forEach((btn) => {
      btn.addEventListener("click", () => removeFromCart(btn.dataset.id));
    });
  }

  function openCart() {
    if (elements.cartDrawer) {
      elements.cartDrawer.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function closeCart() {
    if (elements.cartDrawer) {
      elements.cartDrawer.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  // --------------------------------------------------------------------------
  // Gallery & Lightbox Modal
  // --------------------------------------------------------------------------
  function renderGallery() {
    if (!elements.galleryGrid) return;

    const itemsHtml = gallery
      .map((item, index) => {
        const caption = item.caption[state.currentLang] || item.caption.ar;
        const category = item.category[state.currentLang] || item.category.ar;

        return `
        <div class="gallery-item reveal" data-index="${index}" tabindex="0" role="button" aria-label="${caption}">
          <img src="${item.image}" alt="${caption}" class="gallery-item__img" loading="lazy" width="600" height="450">
          <div class="gallery-item__overlay">
            <span class="gallery-item__tag">${category}</span>
            <p class="gallery-item__caption">${caption}</p>
          </div>
        </div>
      `;
      })
      .join("");

    elements.galleryGrid.innerHTML = itemsHtml;

    // Attach click for lightbox
    elements.galleryGrid.querySelectorAll(".gallery-item").forEach((el) => {
      el.addEventListener("click", () => {
        const idx = parseInt(el.dataset.index, 10);
        openLightbox(idx);
      });
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const idx = parseInt(el.dataset.index, 10);
          openLightbox(idx);
        }
      });
    });
  }

  function openLightbox(index) {
    state.lightboxIndex = index;
    updateLightboxContent();
    if (elements.lightboxModal) {
      elements.lightboxModal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function closeLightbox() {
    if (elements.lightboxModal) {
      elements.lightboxModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  function updateLightboxContent() {
    const item = gallery[state.lightboxIndex];
    if (!item) return;

    if (elements.lightboxImage) {
      elements.lightboxImage.src = item.image;
      elements.lightboxImage.alt = item.caption[state.currentLang] || item.caption.ar;
    }
    if (elements.lightboxCaption) {
      elements.lightboxCaption.textContent = item.caption[state.currentLang] || item.caption.ar;
    }
  }

  function nextLightbox() {
    state.lightboxIndex = (state.lightboxIndex + 1) % gallery.length;
    updateLightboxContent();
  }

  function prevLightbox() {
    state.lightboxIndex = (state.lightboxIndex - 1 + gallery.length) % gallery.length;
    updateLightboxContent();
  }

  // --------------------------------------------------------------------------
  // Testimonials Section
  // --------------------------------------------------------------------------
  function renderTestimonials() {
    if (!elements.testimonialsGrid) return;

    const cardsHtml = testimonials
      .map((item) => {
        const name = item.name[state.currentLang] || item.name.ar;
        const role = item.role[state.currentLang] || item.role.ar;
        const comment = item.comment[state.currentLang] || item.comment.ar;
        const date = item.date[state.currentLang] || item.date.ar;

        return `
        <article class="testimonial-card reveal">
          <div class="testimonial-card__header">
            <img src="${item.avatar}" alt="${name}" class="testimonial-card__avatar" width="54" height="54" loading="lazy">
            <div>
              <h3 class="testimonial-card__author">${name}</h3>
              <p class="testimonial-card__role">${role}</p>
            </div>
          </div>
          <div class="testimonial-card__stars">
            ${generateStarRating(item.rating)}
          </div>
          <p class="testimonial-card__comment">“${comment}”</p>
          <span class="testimonial-card__date">${date}</span>
        </article>
      `;
      })
      .join("");

    elements.testimonialsGrid.innerHTML = cardsHtml;
  }

  // --------------------------------------------------------------------------
  // Toast Notification System
  // --------------------------------------------------------------------------
  function showToast(message, duration = 3500) {
    if (!elements.toastContainer) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--color-secondary); flex-shrink:0;">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <span>${message}</span>
    `;

    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(15px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // --------------------------------------------------------------------------
  // Form Validation & Submission
  // --------------------------------------------------------------------------
  function setupFormValidation() {
    if (!elements.orderForm) return;

    const nameInput = document.getElementById("userName");
    const phoneInput = document.getElementById("userPhone");
    const typeSelect = document.getElementById("orderType");
    const detailsInput = document.getElementById("orderDetails");
    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const typeError = document.getElementById("typeError");
    const detailsError = document.getElementById("detailsError");

    // Algerian mobile number regex (05, 06, 07 followed by 8 digits)
    const algerianPhoneRegex = /^(0)(5|6|7)[0-9]{8}$/;

    function cleanPhone(val) {
      return val.replace(/[\s\-\.]/g, "");
    }

    elements.orderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!nameInput.value || nameInput.value.trim().length < 2) {
        nameInput.classList.add("is-invalid");
        if (nameError) nameError.classList.add("active");
        isValid = false;
      } else {
        nameInput.classList.remove("is-invalid");
        if (nameError) nameError.classList.remove("active");
      }

      // Validate Phone
      const cleaned = cleanPhone(phoneInput.value);
      if (!algerianPhoneRegex.test(cleaned)) {
        phoneInput.classList.add("is-invalid");
        if (phoneError) phoneError.classList.add("active");
        isValid = false;
      } else {
        phoneInput.classList.remove("is-invalid");
        if (phoneError) phoneError.classList.remove("active");
      }

      // Validate Service Type
      if (!typeSelect.value) {
        typeSelect.classList.add("is-invalid");
        if (typeError) typeError.classList.add("active");
        isValid = false;
      } else {
        typeSelect.classList.remove("is-invalid");
        if (typeError) typeError.classList.remove("active");
      }

      // Validate Details
      if (!detailsInput.value || detailsInput.value.trim().length < 3) {
        detailsInput.classList.add("is-invalid");
        if (detailsError) detailsError.classList.add("active");
        isValid = false;
      } else {
        detailsInput.classList.remove("is-invalid");
        if (detailsError) detailsError.classList.remove("active");
      }

      if (!isValid) return;

      // Handle Submission Success
      if (elements.orderSubmitBtn) {
        elements.orderSubmitBtn.disabled = true;
        const textSpan = elements.orderSubmitBtn.querySelector(".btn__text");
        if (textSpan) textSpan.textContent = translations[state.currentLang].form_submitting;
      }

      setTimeout(() => {
        if (elements.orderSuccessAlert) {
          elements.orderSuccessAlert.classList.add("active");
        }
        showToast(translations[state.currentLang].toast_order_sent);

        elements.orderForm.reset();

        if (elements.orderSubmitBtn) {
          elements.orderSubmitBtn.disabled = false;
          const textSpan = elements.orderSubmitBtn.querySelector(".btn__text");
          if (textSpan) textSpan.textContent = translations[state.currentLang].form_submit_btn;
        }

        // Scroll smoothly to alert
        if (elements.orderSuccessAlert) {
          elements.orderSuccessAlert.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 700);
    });

    // Clear validation on typing
    [nameInput, phoneInput, typeSelect, detailsInput].forEach((input) => {
      if (!input) return;
      input.addEventListener("input", () => {
        input.classList.remove("is-invalid");
        const err = input.parentElement.querySelector(".form-error");
        if (err) err.classList.remove("active");
      });
    });
  }

  // --------------------------------------------------------------------------
  // Navigation, ScrollSpy, Sticky Navbar & Animations
  // --------------------------------------------------------------------------
  function setupNavigationAndScroll() {
    // Sticky Navbar shadow on scroll
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (elements.navbar) {
        if (scrollY > 40) {
          elements.navbar.classList.add("navbar--scrolled");
        } else {
          elements.navbar.classList.remove("navbar--scrolled");
        }
      }

      // Back to top button visibility
      if (elements.backToTopBtn) {
        if (scrollY > 350) {
          elements.backToTopBtn.classList.add("active");
        } else {
          elements.backToTopBtn.classList.remove("active");
        }
      }

      // Scroll Spy: Update active nav link
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = scrollY + 120;

      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
          elements.navLinks.forEach((link) => {
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    });

    // Mobile Hamburger Toggle
    if (elements.navToggle && elements.navMenu) {
      elements.navToggle.addEventListener("click", () => {
        const isActive = elements.navMenu.classList.toggle("active");
        elements.navToggle.classList.toggle("active", isActive);
        elements.navToggle.setAttribute("aria-expanded", String(isActive));
      });

      // Close mobile menu on link click
      elements.navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          elements.navMenu.classList.remove("active");
          elements.navToggle.classList.remove("active");
          elements.navToggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    // Back to top click
    if (elements.backToTopBtn) {
      elements.backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Reveal elements on scroll (IntersectionObserver)
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    } else {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("revealed"));
    }
  }

  // --------------------------------------------------------------------------
  // Event Listeners Setup
  // --------------------------------------------------------------------------
  function setupEventListeners() {
    // Language Switcher Button
    if (elements.langSwitchBtn) {
      elements.langSwitchBtn.addEventListener("click", () => {
        const nextLang = state.currentLang === "ar" ? "en" : "ar";
        switchLanguage(nextLang);
      });
    }

    // Theme Toggle Button
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.addEventListener("click", toggleTheme);
    }

    // Cart Drawer Toggle
    if (elements.cartOpenBtn) elements.cartOpenBtn.addEventListener("click", openCart);
    if (elements.cartCloseBtn) elements.cartCloseBtn.addEventListener("click", closeCart);
    if (elements.cartDrawerOverlay) elements.cartDrawerOverlay.addEventListener("click", closeCart);
    if (elements.cartClearBtn) elements.cartClearBtn.addEventListener("click", clearCart);

    // Cart Checkout action: auto-fill order form
    if (elements.cartCheckoutBtn) {
      elements.cartCheckoutBtn.addEventListener("click", () => {
        closeCart();
        const orderSection = document.getElementById("order");
        if (orderSection) {
          orderSection.scrollIntoView({ behavior: "smooth" });
        }

        // Fill form details with cart summary
        const typeSelect = document.getElementById("orderType");
        const detailsInput = document.getElementById("orderDetails");
        if (typeSelect) typeSelect.value = "delivery";

        if (detailsInput && state.cart.length > 0) {
          const itemsDesc = state.cart
            .map((ci) => {
              const p = products.find((prod) => prod.id === ci.id);
              const name = p ? p.name[state.currentLang] : ci.id;
              return `${name} (x${ci.quantity})`;
            })
            .join("، ");
          detailsInput.value = `${translations[state.currentLang].cart_title}: ${itemsDesc}`;
        }
      });
    }

    // Category Tabs Filtering
    if (elements.categoryTabs) {
      elements.categoryTabs.querySelectorAll(".filter-tab").forEach((tab) => {
        tab.addEventListener("click", () => {
          state.activeCategory = tab.getAttribute("data-category");
          updateCategoryTabs();
          renderProducts();
        });
      });
    }

    // Search Input
    if (elements.productSearchInput) {
      elements.productSearchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        renderProducts();
      });
    }

    // Sort Select Dropdown
    if (elements.productSortSelect) {
      elements.productSortSelect.addEventListener("change", (e) => {
        state.sortBy = e.target.value;
        renderProducts();
      });
    }

    // Lightbox Navigation
    if (elements.lightboxCloseBtn) elements.lightboxCloseBtn.addEventListener("click", closeLightbox);
    if (elements.lightboxPrevBtn) elements.lightboxPrevBtn.addEventListener("click", prevLightbox);
    if (elements.lightboxNextBtn) elements.lightboxNextBtn.addEventListener("click", nextLightbox);

    // Keyboard support for Lightbox & Cart
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeLightbox();
        closeCart();
      }

      if (elements.lightboxModal && elements.lightboxModal.classList.contains("active")) {
        const isRtl = state.currentLang === "ar";
        if (e.key === "ArrowRight") {
          isRtl ? prevLightbox() : nextLightbox();
        } else if (e.key === "ArrowLeft") {
          isRtl ? nextLightbox() : prevLightbox();
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // Application Bootstrap
  // --------------------------------------------------------------------------
  function init() {
    // Restore Saved Theme
    const savedTheme = getStoredItem("al_nour_theme", "light");
    setTheme(savedTheme);

    // Restore Saved Cart
    state.cart = getStoredItem("al_nour_cart", []);

    // Setup Listeners and Behaviors
    setupNavigationAndScroll();
    setupEventListeners();
    setupFormValidation();

    // Restore Saved Language & Render
    const savedLang = getStoredItem("al_nour_lang", "ar");
    switchLanguage(savedLang);
  }

  // Run on DOM Ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

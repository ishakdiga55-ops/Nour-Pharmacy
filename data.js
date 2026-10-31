/**
 * صيدلية النور - Al-Nour Pharmacy
 * Data file: Translations, Products, Testimonials, Gallery, and Info
 */

const pharmacyData = {
  // Information & Contact
  info: {
    name: {
      ar: "صيدلية النور",
      en: "Al-Nour Pharmacy"
    },
    slogan: {
      ar: "صحتكم أولويتنا ورعايتكم غايتنا",
      en: "Your Health is Our Priority"
    },
    phone: "+213 21 73 45 67",
    mobile: "+213 550 12 34 56",
    whatsapp: "213550123456",
    email: "contact@al-nour-pharmacy.dz",
    address: {
      ar: "24 شارع ديدوش مراد، الجزائر الوسطى، الجزائر العاصمة",
      en: "24 Didouche Mourad Street, Algiers Center, Algiers"
    },
    hours: {
      weekdays: {
        ar: "السبت - الخميس: 08:00 صباحاً - 10:00 مساءً",
        en: "Sat - Thu: 08:00 AM - 10:00 PM"
      },
      friday: {
        ar: "الجمعة: 14:30 ظهراً - 10:00 مساءً (مناوبة أسبوعية)",
        en: "Friday: 02:30 PM - 10:00 PM (Weekly Duty)"
      },
      duty: {
        ar: "خدمة الصيدلية المناوبة ليلاً متوفرة أسبوعياً وفق جدول مديرية الصحة",
        en: "Night on-duty service available according to the Health Ministry schedule"
      }
    },
    delivery: {
      fee: 300,
      freeThreshold: 3000,
      coverage: {
        ar: "توصيل سريع يشمل كافة بلديات الجزائر العاصمة في أقل من ساعتين",
        en: "Express delivery across all Algiers municipalities within 2 hours"
      }
    },
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      whatsapp: "https://wa.me/213550123456"
    },
    mapCoords: {
      lat: 36.7686,
      lng: 3.0543
    }
  },

  // Complete Translations Dictionary
  translations: {
    ar: {
      // Top bar & Header
      topbar_duty: "صيدلية مناوبة هذا الأسبوع | خدمة التوصيل السريع متوفرة بالجزائر العاصمة",
      topbar_call: "اتصل بنا مباشرة:",
      nav_home: "الرئيسية",
      nav_services: "خدماتنا",
      nav_products: "المنتجات",
      nav_gallery: "معرض الصور",
      nav_testimonials: "آراء المرضى",
      nav_location: "الموقع وساعات العمل",
      nav_contact: "طلب دواء / استشارة",
      nav_cta: "اطلب دواءك الآن",
      cart_title: "سلة المشتريات",
      cart_empty: "سلة المشتريات فارغة حالياً",
      cart_subtotal: "المجموع الجزئي:",
      cart_delivery: "رسوم التوصيل:",
      cart_free_delivery: "مجاناً (طلب يتجاوز 3000 دج)",
      cart_total: "المجموع الكلي:",
      cart_checkout: "إتمام الطلب الآن",
      cart_clear: "إفراغ السلة",
      cart_continue: "مواصلة التسوق",
      theme_toggle_aria: "تبديل الوضع الليلي والنهاري",
      lang_toggle_aria: "تبديل لغة الموقع",

      // Hero Section
      hero_badge: "رعايتكم مسؤوليتنا وموثوقيتنا منذ أكثر من 15 عاماً",
      hero_title_prefix: "صحتك أولويتنا..",
      hero_title_highlight: "رعاية صيدلانية",
      hero_title_suffix: "تثق بها عائلتك",
      hero_desc: "نضع بين يديك في قلب الجزائر العاصمة خبرة صيدلانية متكاملة: صرف دقيق للوصفات الطبية، استشارات صحية متخصصة، وأجود مستحضرات العناية والتغذية مع خدمة التوصيل الآمن حتى باب منزلك.",
      hero_btn_products: "تصفح المنتجات الطبية",
      hero_btn_consult: "استشارة صيدلي مجاناً",
      stat_years: "سنوات خبرة طبية",
      stat_clients: "مريض وعميل يثقون بنا",
      stat_products: "منتج أصلي ومعتمد 100%",
      stat_support: "استجابة واستشارات سريعة",

      // Services Section
      services_badge: "خدماتنا المهنية",
      services_title: "حلول صحية متكاملة برعاية طاقم صيدلي مؤهل",
      services_subtitle: "نحرص على تزويدكم بأعلى معايير الرعاية الدوائية والوقائية لضمان صحة وسلامة جميع أفراد العائلة.",
      service_1_title: "صرف الوصفات الطبية",
      service_1_desc: "صرف دقيق لكافة الأدوية المسجلة مع شرح وافٍ للجرعات، أوقات الاستخدام، والتفاعلات الدوائية لتفادي أي مضاعفات.",
      service_2_title: "قياس الضغط ونسبة السكر",
      service_2_desc: "فحص مجاني وفوري لضغط الدم ونسبة الجلوكوز بأحدث الأجهزة المعايرة طبياً، مع متابعة دورية وسجل للمرضى.",
      service_3_title: "مستحضرات العناية والبشرة",
      service_3_desc: "تشكيلة واسعة من مستحضرات العناية بالبشرة والشعر ومستحضرات التجميل الطبية (Dermocosmetics) من علامات موثوقة.",
      service_4_title: "توصيل سريع للمنازل",
      service_4_desc: "توصيل الأدوية والمستلزمات في ظروف نقل مطابقة للمعايير الصحية ودرجات الحرارة المضبوطة لجميع أحياء العاصمة.",

      // Products Section
      products_badge: "الصيدلية الرقمية",
      products_title: "منتجات طبية وصحية مختارة بعناية",
      products_subtitle: "تصفح باقتنا المتنوعة من الفيتامينات، المكملات، منتجات الأم والطفل، ومعدات الإسعافات الأولية الأصلية.",
      cat_all: "جميع المنتجات",
      cat_vitamins: "فيتامينات ومكملات",
      cat_skincare: "العناية بالبشرة",
      cat_mother_baby: "الأم والطفل",
      cat_first_aid: "إسعافات أولية",
      search_placeholder: "ابحث عن اسم منتج أو دواء أو مكمل...",
      sort_default: "الترتيب الافتراضي",
      sort_price_asc: "السعر: من الأقل للأعلى",
      sort_price_desc: "السعر: من الأعلى للأقل",
      sort_rating_desc: "الأعلى تقييماً",
      add_to_cart: "أضف للسلة",
      product_out_of_stock: "غير متوفر حالياً",
      product_in_stock: "متوفر بالصيدلية",
      no_products_found: "عذراً، لم نعثر على منتجات تطابق معايير البحث الحالية.",
      filter_reset: "إعادة تعيين الفلاتر",

      // Gallery Section
      gallery_badge: "بيئتنا الصيدلانية",
      gallery_title: "جولة مصورة داخل صيدلية النور",
      gallery_subtitle: "فضاء عصري، نظافة تامة، وأحدث تقنيات حفظ وتخزين الأدوية بإشراف فريق عمل شغوف بخدمتكم.",
      gallery_view_larger: "انقر للتكبير والتنقل",

      // Testimonials Section
      testimonials_badge: "شهادات نعتز بها",
      testimonials_title: "ماذا يقول مرضانا ورواد صيدليتنا؟",
      testimonials_subtitle: "ثقة أهلنا في الجزائر العاصمة هي وسام فخر يدفعنا دائماً لتقديم الأفضل بكل أمانة وتفانٍ.",

      // Location & Hours Section
      location_badge: "تفضل بزيارتنا",
      location_title: "موقعنا في قلب الجزائر العاصمة وساعات عملنا",
      location_subtitle: "يسعدنا دائماً استقبالكم في مقرنا بشارع ديدوش مراد أو الإجابة على استفساراتكم عبر الهاتف وواتساب.",
      address_title: "العنوان المقر:",
      hours_title: "أوقات العمل والاستقبال:",
      phone_title: "أرقام التواصل والاستشارة:",
      btn_call: "اتصال هاتفي مباشر",
      btn_whatsapp: "مراسلة عبر واتساب",
      btn_google_maps: "فتح الموقع على خرائط Google",
      hours_weekdays_label: "السبت إلى الخميس:",
      hours_friday_label: "يوم الجمعة:",
      hours_duty_label: "خدمة المناوبة الليلية:",

      // Order & Contact Form
      order_badge: "خدمة سريعة ومريحة",
      order_title: "اطلب دواءك أو احجز استشارتك الطبية",
      order_subtitle: "أرسل لنا طلبيتك أو تفاصيل وصفتك الطبية وسيتواصل معك الصيدلي المناوب فوراً لتأكيد التفاصيل وتجهيز الطلب.",
      form_name_label: "الاسم واللقب *",
      form_name_placeholder: "مثال: عبد الرحمن بن علي",
      form_phone_label: "رقم الهاتف المحمول *",
      form_phone_placeholder: "05 / 06 / 07 XX XX XX XX",
      form_type_label: "نوع الخدمة أو الطلب *",
      form_type_select: "-- اختر نوع الخدمة --",
      form_type_prescription: "صرف وصفة طبية (Ordonnance)",
      form_type_consultation: "طلب استشارة صيدلانية أو وقائية",
      form_type_delivery: "طلب توصيل منتجات ومكملات للمنزل",
      form_type_checkup: "حجز موعد فحص الضغط / السكر بالصيدلية",
      form_details_label: "الأدوية المطلوبة أو تفاصيل الوصفة الطبية *",
      form_details_placeholder: "اذكر أسماء الأدوية بوضوح أو الجرعات أو رقم الوصفة الطبية...",
      form_address_label: "عنوان التوصيل (للطلبات المنزلية)",
      form_address_placeholder: "الحي، اسم الشارع، البلدية (مثال: حي سيدي يحيى، حيدرة)",
      form_notes_label: "ملاحظات إضافية للصيدلي (اختياري)",
      form_notes_placeholder: "أي حساسية دوائية، تاريخ مرضي، أو تعليمات خاصة بالوقت...",
      form_submit_btn: "إرسال الطلب للصيدلية",
      form_submitting: "جاري إرسال الطلب...",
      form_success_title: "تم استلام طلبك بنجاح!",
      form_success_desc: "شكراً لثقتكم بصيدلية النور. سيقوم الصيدلي المناوب بالاتصال بكم هاتفياً خلال أقل من 15 دقيقة لتأكيد الطلب وترتيب الاستلام أو التوصيل.",
      form_validation_name: "يرجى إدخال اسمك الكامل (على الأقل حرفين).",
      form_validation_phone: "يرجى إدخال رقم هاتف جزائري صحيح يبدأ بـ 05 أو 06 أو 07 متبوعاً بـ 8 أرقام.",
      form_validation_type: "يرجى تحديد نوع الخدمة أو الطلب.",
      form_validation_details: "يرجى كتابة أسماء الأدوية أو تفاصيل الاستشارة المطلوبة.",

      // Footer
      footer_about_title: "عن صيدلية النور",
      footer_about_text: "مؤسسة صيدلانية مرخصة تقع في قلب الجزائر العاصمة، متخصصة في تقديم الرعاية الدوائية الآمنة، الأدوية الأصلية، ومستحضرات التجميل العلاجية مع التزام تام بأعلى معايير أخلاقيات المهنة.",
      footer_quick_links: "روابط سريعة",
      footer_services_links: "أقسام الرعاية",
      footer_emergency_title: "حالات الطوارئ والمناوبة",
      footer_emergency_text: "في الحالات الطارئة خارج أوقات العمل الرسمية، يرجى الاتصال على رقم المناوبة المعتمد أو التوجه لأقرب مركز استعجالات.",
      footer_rights: "جميع الحقوق محفوظة © 2026 صيدلية النور - Al-Nour Pharmacy.",
      footer_disclaimer: "ملاحظة: صرف الأدوية الخاضعة لرقابة خاصة يتطلب إبراز الوصفة الطبية الأصلية وبطاقة الشفاء وفقاً للتشريع الجزائري المعمول به.",
      back_to_top: "العودة للأعلى",
      currency: "دج",

      // Toast Notifications
      toast_added_to_cart: "تمت إضافة المنتج إلى السلة بنجاح!",
      toast_cart_cleared: "تم تفريغ سلة المشتريات.",
      toast_order_sent: "تم إرسال طلبيتك إلى الصيدلي بنجاح!"
    },

    en: {
      // Top bar & Header
      topbar_duty: "On-Duty Pharmacy this week | Fast Home Delivery available in Algiers",
      topbar_call: "Call Us Directly:",
      nav_home: "Home",
      nav_services: "Services",
      nav_products: "Products",
      nav_gallery: "Gallery",
      nav_testimonials: "Testimonials",
      nav_location: "Location & Hours",
      nav_contact: "Order / Consult",
      nav_cta: "Order Medicine Now",
      cart_title: "Your Shopping Cart",
      cart_empty: "Your shopping cart is currently empty",
      cart_subtotal: "Subtotal:",
      cart_delivery: "Delivery Fee:",
      cart_free_delivery: "Free (Orders over 3,000 DZD)",
      cart_total: "Total Amount:",
      cart_checkout: "Proceed to Checkout",
      cart_clear: "Clear Cart",
      cart_continue: "Continue Browsing",
      theme_toggle_aria: "Toggle dark and light theme",
      lang_toggle_aria: "Switch website language",

      // Hero Section
      hero_badge: "Your trusted health partner for over 15 years",
      hero_title_prefix: "Your Health Comes First..",
      hero_title_highlight: "Pharmaceutical Care",
      hero_title_suffix: "You and Your Family Can Trust",
      hero_desc: "Located in the center of Algiers, we provide comprehensive healthcare: precise prescription dispensing, free professional consultations, genuine wellness products, and prompt home delivery.",
      hero_btn_products: "Browse Products",
      hero_btn_consult: "Free Pharmacist Consultation",
      stat_years: "Years of Experience",
      stat_clients: "Satisfied Patients & Clients",
      stat_products: "100% Genuine Certified Products",
      stat_support: "Quick Pharmacist Support",

      // Services Section
      services_badge: "Our Professional Services",
      services_title: "Comprehensive Health Solutions by Qualified Pharmacists",
      services_subtitle: "We adhere to the highest pharmaceutical care standards to safeguard you and your family's daily wellbeing.",
      service_1_title: "Prescription Dispensing",
      service_1_desc: "Accurate dispensing of registered medications with thorough counseling on dosages, timing, and drug interactions.",
      service_2_title: "Blood Pressure & Glucose Checks",
      service_2_desc: "Complimentary, instant blood pressure and blood sugar screenings using clinically calibrated medical devices.",
      service_3_title: "Dermocosmetics & Skincare",
      service_3_desc: "Curated skincare, haircare, and therapeutic cosmetic lines from premier international and certified brands.",
      service_4_title: "Fast Home Delivery",
      service_4_desc: "Safe transport of medications and healthcare essentials under strictly controlled temperatures across Algiers.",

      // Products Section
      products_badge: "Digital Pharmacy",
      products_title: "Carefully Selected Medical & Wellness Products",
      products_subtitle: "Explore our verified collection of essential vitamins, dermocosmetics, mother & baby care, and first-aid kits.",
      cat_all: "All Products",
      cat_vitamins: "Vitamins & Supplements",
      cat_skincare: "Skincare",
      cat_mother_baby: "Mother & Baby",
      cat_first_aid: "First Aid & Equipment",
      search_placeholder: "Search by product name, ingredient, or brand...",
      sort_default: "Default Sorting",
      sort_price_asc: "Price: Low to High",
      sort_price_desc: "Price: High to Low",
      sort_rating_desc: "Highest Rated",
      add_to_cart: "Add to Cart",
      product_out_of_stock: "Currently Out of Stock",
      product_in_stock: "In Stock at Pharmacy",
      no_products_found: "Sorry, no products matched your search criteria.",
      filter_reset: "Reset Filters",

      // Gallery Section
      gallery_badge: "Our Environment",
      gallery_title: "Photo Tour Inside Al-Nour Pharmacy",
      gallery_subtitle: "Modern design, sterile surroundings, and optimal climate-controlled storage supervised by dedicated healthcare professionals.",
      gallery_view_larger: "Click to enlarge and navigate",

      // Testimonials Section
      testimonials_badge: "Patient Voices",
      testimonials_title: "What Our Patients & Community Say",
      testimonials_subtitle: "The trust of our community across Algiers inspires us every single day to serve with dedication and integrity.",

      // Location & Hours Section
      location_badge: "Visit Us",
      location_title: "Our Algiers Location & Operating Hours",
      location_subtitle: "We welcome you warmly at our Didouche Mourad pharmacy or assist you promptly via phone and WhatsApp.",
      address_title: "Physical Address:",
      hours_title: "Opening Hours:",
      phone_title: "Direct Phone & Consultations:",
      btn_call: "Call Us Directly",
      btn_whatsapp: "Message on WhatsApp",
      btn_google_maps: "Open in Google Maps",
      hours_weekdays_label: "Saturday to Thursday:",
      hours_friday_label: "Friday:",
      hours_duty_label: "Night On-Duty Shift:",

      // Order & Contact Form
      order_badge: "Express Service",
      order_title: "Order Your Medicine or Book a Consultation",
      order_subtitle: "Send us your medical requirements or prescription notes, and our on-duty pharmacist will contact you within 15 minutes.",
      form_name_label: "Full Name *",
      form_name_placeholder: "e.g. Karim Hadj-Ahmed",
      form_phone_label: "Mobile Phone Number *",
      form_phone_placeholder: "05 / 06 / 07 XX XX XX XX",
      form_type_label: "Service / Request Type *",
      form_type_select: "-- Select Service Type --",
      form_type_prescription: "Dispense Prescription (Ordonnance)",
      form_type_consultation: "Pharmacist Consultation & Advice",
      form_type_delivery: "Home Delivery for Health Products",
      form_type_checkup: "Book In-Pharmacy Health Checkup",
      form_details_label: "Prescription Details or Medicine Names *",
      form_details_placeholder: "Please write medication names, dosages, or prescription number...",
      form_address_label: "Delivery Address (For home orders)",
      form_address_placeholder: "District, street, municipality (e.g. Sidi Yahia, Hydra, Algiers)",
      form_notes_label: "Special Instructions / Allergies (Optional)",
      form_notes_placeholder: "Any allergies, medical conditions, or delivery time preferences...",
      form_submit_btn: "Submit Order to Pharmacist",
      form_submitting: "Submitting Request...",
      form_success_title: "Your Request Has Been Received!",
      form_success_desc: "Thank you for trusting Al-Nour Pharmacy. Our pharmacist will call you within 15 minutes to confirm availability and coordinate delivery or pickup.",
      form_validation_name: "Please enter your full name (at least 2 characters).",
      form_validation_phone: "Please enter a valid Algerian mobile number starting with 05, 06, or 07 (10 digits).",
      form_validation_type: "Please select a service or request type.",
      form_validation_details: "Please specify the requested medications or consultation details.",

      // Footer
      footer_about_title: "About Al-Nour Pharmacy",
      footer_about_text: "Licensed healthcare pharmacy established in Algiers center, dedicated to providing safe medication counseling, genuine pharmaceutical goods, and medical dermocosmetics with utmost ethics.",
      footer_quick_links: "Quick Links",
      footer_services_links: "Our Care Sections",
      footer_emergency_title: "Emergency & On-Duty",
      footer_emergency_text: "In acute medical emergencies outside operating hours, please call the official emergency numbers or visit the nearest hospital emergency unit.",
      footer_rights: "All rights reserved © 2026 Al-Nour Pharmacy.",
      footer_disclaimer: "Notice: Controlled prescription drugs require presenting original medical prescription and Chifa card as mandated by Algerian health regulations.",
      back_to_top: "Back to Top",
      currency: "DZD",

      // Toast Notifications
      toast_added_to_cart: "Product added to cart successfully!",
      toast_cart_cleared: "Shopping cart has been cleared.",
      toast_order_sent: "Your request has been successfully sent to the pharmacist!"
    }
  },

  // Products List (High quality Unsplash medical placeholders)
  products: [
    {
      id: "prod-1",
      name: {
        ar: "فيتامين سي 1000 ملغ فوار",
        en: "Vitamin C 1000mg Effervescent"
      },
      category: "vitamins",
      price: 850,
      rating: 4.9,
      reviewsCount: 38,
      inStock: true,
      badge: {
        ar: "الأكثر مبيعاً",
        en: "Best Seller"
      },
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
      description: {
        ar: "أقراص فوارة سريعة الامتصاص لتقوية جهاز المناعة، تقليل الإرهاق اليومي، ودعم نضارة وحيوية الجسم.",
        en: "Fast-absorbing effervescent tablets to boost the immune system, combat fatigue, and support daily vitality."
      }
    },
    {
      id: "prod-2",
      name: {
        ar: "كبسولات أوميغا 3 عالية النقاوة 1000 ملغ",
        en: "Ultra-Pure Omega 3 Fish Oil 1000mg"
      },
      category: "vitamins",
      price: 1200,
      rating: 4.8,
      reviewsCount: 45,
      inStock: true,
      badge: {
        ar: "موصى به طبياً",
        en: "Doctor Recommended"
      },
      image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=600&q=80",
      description: {
        ar: "زيت سمك طبيعي غني بأحماض EPA و DHA لصحة القلب والأوعية الدموية، تنشيط الذاكرة، وتقوية المفاصل.",
        en: "Premium fish oil rich in EPA and DHA to enhance cardiovascular health, joint mobility, and cognitive focus."
      }
    },
    {
      id: "prod-3",
      name: {
        ar: "واقي شمس طبي سائل SPF 50+ حماية فائقة",
        en: "Dermatological Fluid Sunscreen SPF 50+"
      },
      category: "skincare",
      price: 1500,
      rating: 4.9,
      reviewsCount: 62,
      inStock: true,
      badge: {
        ar: "حماية مثالية",
        en: "Top Sun Care"
      },
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
      description: {
        ar: "حماية واسعة النطاق من أشعة UVA/UVB بدون لمعان، مناسب للبشرة الحساسة والمختلطة مع مقاومة للماء.",
        en: "Broad-spectrum UVA/UVB defense with a light, non-greasy matte finish. Hypoallergenic and water-resistant."
      }
    },
    {
      id: "prod-4",
      name: {
        ar: "كريم مرطب ومهدئ للبشرة الحساسة والجافة",
        en: "Soothing Hydrating Cream for Sensitive Skin"
      },
      category: "skincare",
      price: 950,
      rating: 4.7,
      reviewsCount: 29,
      inStock: true,
      badge: {
        ar: "خالٍ من العطور",
        en: "Fragrance Free"
      },
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      description: {
        ar: "تركيبة غنية بالسيراميد وحمض الهيالورونيك لترميم الحاجز الجلدي وتوفير ترطيب عميق يدوم 24 ساعة.",
        en: "Ceramide and hyaluronic acid enriched formula to repair skin barrier and deliver deep 24-hour hydration."
      }
    },
    {
      id: "prod-5",
      name: {
        ar: "حليب أطفال للرضع المرحلة الأولى (0-6 أشهر)",
        en: "Infant Baby Formula Milk Stage 1 (0-6M)"
      },
      category: "mother-baby",
      price: 2200,
      rating: 5.0,
      reviewsCount: 51,
      inStock: true,
      badge: {
        ar: "تركيبة معتمدة",
        en: "Pediatric Formula"
      },
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
      description: {
        ar: "حليب أطفال مدعم بالحديد والبريبيوتيك لنمو متوازن وهضم مريح يلبي جميع الاحتياجات الغذائية للرضيع.",
        en: "Fortified with iron, essential vitamins, and prebiotics for balanced development and gentle infant digestion."
      }
    },
    {
      id: "prod-6",
      name: {
        ar: "حفاضات أطفال ناعمة فائقة الامتصاص (عبوة توفير)",
        en: "Ultra-Absorbent Soft Baby Diapers (Jumbo Pack)"
      },
      category: "mother-baby",
      price: 1800,
      rating: 4.8,
      reviewsCount: 40,
      inStock: true,
      badge: {
        ar: "عبوة اقتصادية",
        en: "Value Pack"
      },
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
      description: {
        ar: "حماية فائقة من التسرب تدوم حتى 12 ساعة مع ملمس قطني لطيف يمنع التهابات وتسلخات بشرة الطفل الرقيقة.",
        en: "Up to 12 hours of leak-proof security with breathable cottony softness that prevents baby diaper rashes."
      }
    },
    {
      id: "prod-7",
      name: {
        ar: "علبة ضمادات طبية معقمة ومتعددة الأحجام (50 قطعة)",
        en: "Sterile Medical Adhesive Bandages (50 Pack)"
      },
      category: "first-aid",
      price: 300,
      rating: 4.9,
      reviewsCount: 33,
      inStock: true,
      badge: {
        ar: "ضروريات المنزل",
        en: "Home Essential"
      },
      image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=600&q=80",
      description: {
        ar: "ضمادات لاصقة معقمة مقاومة للماء تسمح للجلد بالتنفس، مخصصة للجروح والخدوش السطحية اليومية.",
        en: "Sterile, breathable, and waterproof adhesive dressings for prompt treatment of everyday minor cuts and grazes."
      }
    },
    {
      id: "prod-8",
      name: {
        ar: "جهاز قياس ضغط الدم الرقمي الأوتوماتيكي للذراع",
        en: "Digital Automatic Arm Blood Pressure Monitor"
      },
      category: "first-aid",
      price: 4500,
      rating: 4.9,
      reviewsCount: 57,
      inStock: true,
      badge: {
        ar: "دقة سريرية",
        en: "Clinical Precision"
      },
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
      description: {
        ar: "جهاز رقمي معتمد بشاشة LCD واضحة، كاشف لعدم انتظام ضربات القلب وذاكرة تتسع لـ 90 قراءة لمستخدمين.",
        en: "Clinically validated upper-arm monitor with large LCD screen, arrhythmia alert, and dual 90-reading memory."
      }
    },
    {
      id: "prod-9",
      name: {
        ar: "مكمل مغنيسيوم بـ 6 مع الزنك (60 قرص)",
        en: "Magnesium B6 + Zinc Complex (60 Tablets)"
      },
      category: "vitamins",
      price: 1100,
      rating: 4.8,
      reviewsCount: 24,
      inStock: true,
      badge: {
        ar: "نوم مريح",
        en: "Stress Relief"
      },
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80",
      description: {
        ar: "يساعد على استرخاء العضلات، تخفيف تشنجات الساقين، تحسين جودة النوم وتقليل مستويات التوتر العصبي.",
        en: "Helps alleviate muscle cramps, restores nervous balance, reduces anxiety, and enhances restorative sleep."
      }
    },
    {
      id: "prod-10",
      name: {
        ar: "سيروم الهيالورونيك المركّز وفيتامين C لنضارة البشرة",
        en: "Intensive Hyaluronic Acid & Vitamin C Serum"
      },
      category: "skincare",
      price: 2400,
      rating: 4.9,
      reviewsCount: 36,
      inStock: true,
      badge: {
        ar: "نضارة وإشراق",
        en: "Glow & Radiance"
      },
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      description: {
        ar: "سيروم مضاد للأكسدة يحارب علامات الإرهاق والخطوط الدقيقة، ويوحد لون البشرة ليمنحها إشراقة شبابية فورية.",
        en: "Antioxidant booster targeting fine lines, tired complexion, and uneven tone for instant radiance."
      }
    },
    {
      id: "prod-11",
      name: {
        ar: "مجموعة العناية بالطفل: شامبو لطيف وزيت مساج عضوي",
        en: "Gentle Baby Bath Set: Tear-Free Wash & Organic Oil"
      },
      category: "mother-baby",
      price: 1350,
      rating: 4.7,
      reviewsCount: 19,
      inStock: true,
      badge: {
        ar: "طبيعي 100%",
        en: "100% Natural"
      },
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
      description: {
        ar: "مستخلصات البابونج واللوز الحلو لتنظيف وترطيب بشرة وفروة رأس الرضيع بدون دموع أو تهيج.",
        en: "Enriched with chamomile and sweet almond extracts to cleanse and moisturize delicate skin without irritation."
      }
    },
    {
      id: "prod-12",
      name: {
        ar: "جهاز قياس السكر بالدم مع 50 شريط اختبار ومشارط",
        en: "Blood Glucose Monitoring Kit + 50 Test Strips"
      },
      category: "first-aid",
      price: 3200,
      rating: 5.0,
      reviewsCount: 48,
      inStock: true,
      badge: {
        ar: "نتائج في 5 ثوانٍ",
        en: "Fast 5s Results"
      },
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80",
      description: {
        ar: "طقم متكامل لقياس السكر بدقة فائقة وعينة دم متناهية الصغر مع قلم وخز وعلبة شرائط اختبار أصلية.",
        en: "Complete diabetic kit with micro-sampling technology, painless lancing device, and 50 genuine strips."
      }
    }
  ],

  // Gallery Items (Inside pharmacy, shelves, team, dispensary)
  gallery: [
    {
      id: "gal-1",
      image: "https://images.unsplash.com/photo-1586015555751-63c2c77d540e?auto=format&fit=crop&w=1000&q=80",
      caption: {
        ar: "فضاء الاستقبال والصرف الصيدلاني المريح بصيدلية النور",
        en: "Welcoming and modern dispensary counter at Al-Nour Pharmacy"
      },
      category: {
        ar: "الفضاء الداخلي",
        en: "Interior Space"
      }
    },
    {
      id: "gal-2",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80",
      caption: {
        ar: "أرفف الأدوية والمكملات المنظمة وفق أحدث المعايير الطبية",
        en: "Organized medicine and supplement shelves following international standards"
      },
      category: {
        ar: "مخزن الأدوية",
        en: "Pharmacy Shelves"
      }
    },
    {
      id: "gal-3",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
      caption: {
        ar: "فريق الصيادلة المتخصص جاهز دائماً لتقديم النصح والإرشاد",
        en: "Our certified pharmacist team ready to offer personalized health advice"
      },
      category: {
        ar: "الفريق الصيدلي",
        en: "Pharmacy Staff"
      }
    },
    {
      id: "gal-4",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80",
      caption: {
        ar: "ركن قياس ضغط الدم ومتابعة المؤشرات الحيوية مجاناً",
        en: "Dedicated clinical station for complimentary blood pressure checks"
      },
      category: {
        ar: "ركن الفحص الطبي",
        en: "Health Station"
      }
    },
    {
      id: "gal-5",
      image: "https://images.unsplash.com/photo-1556228722-d0b7d7b1d6e1?auto=format&fit=crop&w=1000&q=80",
      caption: {
        ar: "جناح مستحضرات العناية بالبشرة والجمال الطبي المعتمد",
        en: "Premium dermo-cosmetic and therapeutic skincare corner"
      },
      category: {
        ar: "العناية والتجميل",
        en: "Dermocosmetics"
      }
    },
    {
      id: "gal-6",
      image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1000&q=80",
      caption: {
        ar: "تغليف وتجهيز آمن للأدوية قبل خروجها لخدمة التوصيل المنزلي",
        en: "Sterile packaging and temperature-controlled prep for home delivery"
      },
      category: {
        ar: "التوصيل الآمن",
        en: "Safe Delivery"
      }
    }
  ],

  // Testimonials List
  testimonials: [
    {
      id: "test-1",
      name: {
        ar: "الحاج محمد بلقاسم",
        en: "El-Hadj Mohamed Belkacem"
      },
      role: {
        ar: "مريض سكري وضغط دم - الجزائر الوسطى",
        en: "Diabetic & Hypertensive Patient - Algiers"
      },
      rating: 5,
      date: {
        ar: "منذ أسبوع",
        en: "1 week ago"
      },
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      comment: {
        ar: "صيدليتي المفضلة منذ أكثر من 7 سنوات في ديدوش مراد. الصيادلة يشرحون لي دائماً مواعيد الأدوية وكيفية تجنب التفاعلات بصبر وبشاشة نادرة، وخدمة قياس السكر ممتازة.",
        en: "My go-to pharmacy in Didouche Mourad for over 7 years. The pharmacists take time to patiently explain medication timings and interactions. Truly exceptional care."
      }
    },
    {
      id: "test-2",
      name: {
        ar: "الدكتورة سميرة بن عثمان",
        en: "Dr. Samira Benothman"
      },
      role: {
        ar: "طبيبة أطفال وعميلة دائمة",
        en: "Pediatrician & Loyal Client"
      },
      rating: 5,
      date: {
        ar: "منذ أسبوعين",
        en: "2 weeks ago"
      },
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      comment: {
        ar: "أوصي دائماً أمهات الرضع بالتوجه لصيدلية النور نظراً لتوفر جميع أنواع حليب الأطفال العلاجي وحفظها في درجات حرارة مثالية، إضافة إلى الاحترافية العالية في التعامل.",
        en: "I consistently advise mothers to visit Al-Nour Pharmacy for their reliable inventory of specialized infant formulas and strictly controlled storage temperatures."
      }
    },
    {
      id: "test-3",
      name: {
        ar: "كريم منصوري",
        en: "Karim Mansouri"
      },
      role: {
        ar: "مستفيد من خدمة التوصيل - حيدرة",
        en: "Home Delivery Client - Hydra"
      },
      rating: 5,
      date: {
        ar: "منذ 3 أيام",
        en: "3 days ago"
      },
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      comment: {
        ar: "طلبت أدوية لوالدتي في وقت متأخر عبر الموقع مع خدمة التوصيل، ووصل الطلب في أقل من 40 دقيقة مع كامل الفاتورة والشرح. خدمة لا تقدر بثمن وسرعة استجابة مذهلة.",
        en: "I ordered urgent prescription refills for my mother through their website; it was delivered in under 40 minutes with complete guidance. Invaluable service!"
      }
    },
    {
      id: "test-4",
      name: {
        ar: "أمينة سعدي",
        en: "Amina Saadi"
      },
      role: {
        ar: "مهتمة بالعناية بالبشرة - الأبيار",
        en: "Skincare Enthusiast - El Biar"
      },
      rating: 5,
      date: {
        ar: "منذ شهر",
        en: "1 month ago"
      },
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      comment: {
        ar: "قسم مستحضرات العناية الطبية بالبشرة رائع جداً، والدكتورة الصيدلانية ساعدتني في اختيار الروتين المناسب لبشرتي الحساسة، والنتائج كانت مبهرة خلال أسابيع قليلة.",
        en: "Their dermocosmetics selection is top tier. The resident pharmacist recommended the exact restorative routine suited for my delicate skin with marvelous results."
      }
    }
  ]
};

// Export to global scope for browser compatibility without build tools
if (typeof window !== "undefined") {
  window.pharmacyData = pharmacyData;
}

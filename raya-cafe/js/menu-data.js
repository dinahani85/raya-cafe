// ================================================================
// منيو Raya Cafe — عدّل الأسعار والأسماء والأوصاف والصور من هنا
// ar = الاسم بالعربي | en = الاسم بالإنجليزي | p = السعر بالجنيه
// dar = الوصف بالعربي | den = الوصف بالإنجليزي | img = مسار الصورة
// ================================================================
window.RAYA_MENU = {
  // ---------- البن (أول قسم) ----------
  beans: [
    { id: "blends", ar: "التوليفات", en: "Blends", items: [
      {"ar": "توليفة برازيلي فاتح", "en": "Brazilian blend, light", "p": 580, "img": "images/products/b-blends-0.jpg"},
      {"ar": "توليفة برازيلي وسط", "en": "Brazilian blend, medium", "p": 580, "img": "images/products/b-blends-1.jpg"},
      {"ar": "توليفة برازيلي غامق", "en": "Brazilian blend, dark", "p": 600, "img": "images/products/b-blends-2.jpg"},
      {"ar": "توليفة العميد فاتح", "en": "Al-Amid blend, light", "p": 680, "img": "images/products/b-blends-3.jpg"},
      {"ar": "توليفة العميد وسط", "en": "Al-Amid blend, medium", "p": 720, "img": "images/products/b-blends-4.jpg"},
      {"ar": "توليفة ملكية", "en": "Royal blend", "p": 620, "img": "images/products/b-blends-5.jpg"},
      {"ar": "توليفة مخصوص", "en": "Special blend", "p": 660, "img": "images/products/b-blends-6.jpg"}
    ]},
    { id: "single", ar: "بن سادة وإسبريسو", en: "Single beans & espresso", items: [
      {"ar": "برازيلي بيور", "en": "Pure Brazilian", "p": 700, "img": "images/products/b-single-0.jpg"},
      {"ar": "بن هندي أرابيكا", "en": "Indian Arabica", "p": 800, "img": "images/products/b-single-1.jpg"},
      {"ar": "بن كولومبي بيور", "en": "Pure Colombian", "p": 920, "img": "images/products/b-single-2.jpg"},
      {"ar": "إسبريسو", "en": "Espresso beans", "p": 800, "img": "images/products/b-single-3.jpg"}
    ]},
    { id: "flav", ar: "قهوة بالنكهات", en: "Flavored coffee", items: [
      {"ar": "قهوة مانجو", "en": "Mango coffee", "p": 560, "img": "images/products/b-flav-0.jpg"},
      {"ar": "قهوة تفاح", "en": "Apple coffee", "p": 560, "img": "images/products/b-flav-1.jpg"},
      {"ar": "قهوة فرنساوي", "en": "French coffee", "p": 520, "img": "images/products/b-flav-2.jpg"},
      {"ar": "قهوة شوكليت", "en": "Chocolate coffee", "p": 600, "img": "images/products/b-flav-3.jpg"},
      {"ar": "قهوة بندق", "en": "Hazelnut coffee", "p": 580, "img": "images/products/b-flav-4.jpg"},
      {"ar": "قهوة بندق قطع", "en": "Hazelnut pieces coffee", "p": 680, "img": "images/products/b-flav-5.jpg"},
      {"ar": "قهوة فستق قطع", "en": "Pistachio pieces coffee", "p": 740, "img": "images/products/b-flav-6.jpg"},
      {"ar": "قهوة لوز قطع", "en": "Almond pieces coffee", "p": 680, "img": "images/products/b-flav-7.jpg"}
    ]},
    { id: "more", ar: "منتجات أخرى", en: "More products", items: [
      {"ar": "هوت شوكليت", "en": "Hot chocolate", "p": 540, "img": "images/products/b-more-0.jpg"},
      {"ar": "نسكافيه بلاك", "en": "Nescafé Black", "p": 960, "img": "images/products/b-more-1.jpg"},
      {"ar": "نسكافيه جولد", "en": "Nescafé Gold", "p": 1360, "img": "images/products/b-more-2.jpg"},
      {"ar": "شاي كرك", "en": "Karak tea", "p": 600, "img": "images/products/b-more-3.jpg"},
      {"ar": "بن تخسيس", "en": "Slimming coffee", "p": 680, "img": "images/products/b-more-4.jpg"},
      {"ar": "كريمر", "en": "Creamer", "p": 360, "img": "images/products/b-more-5.jpg"}
    ]}
  ],
  // ---------- أقسام المنيو ----------
  menu: [
    // قهوة ساخنة
    { id: "coffee", ar: "قهوة ساخنة", en: "Hot coffee", banner: "images/banners/coffee.jpg", items: [
      {"ar": "قهوة تركي سنجل", "en": "Turkish coffee, single", "p": 20, "dar": "فنجان قهوة تركي سنجل بوشّها، على الطريقة التقليدية", "den": "A single cup of traditional Turkish coffee with its foam", "img": "images/products/m-coffee-0.jpg"},
      {"ar": "قهوة كولومبي", "en": "Colombian coffee", "p": 30, "dar": "قهوة سادة محضّرة من بن كولومبي", "den": "Plain coffee brewed from Colombian beans", "img": "images/products/m-coffee-1.jpg"},
      {"ar": "قهوة عميد", "en": "Al-Amid coffee", "p": 25, "dar": "قهوة تركي محضّرة من توليفة العميد", "den": "Turkish coffee made with the Al-Amid blend", "img": "images/products/m-coffee-2.jpg"},
      {"ar": "قهوة تركي دابل", "en": "Turkish coffee, double", "p": 35, "dar": "فنجان قهوة تركي دابل، كمية أكبر وطعم أتقل", "den": "A double cup of Turkish coffee, bigger and stronger", "img": "images/products/m-coffee-3.jpg"},
      {"ar": "قهوة جينسينج", "en": "Ginseng coffee", "p": 35, "dar": "مشروب قهوة بالجينسينج، ناعم وكريمي", "den": "A smooth, creamy coffee drink with ginseng", "img": "images/products/m-coffee-4.jpg"},
      {"ar": "قهوة فرنساوي", "en": "French coffee", "p": 40, "dar": "قهوة فرنساوي باللبن، كريمية وخفيفة", "den": "French coffee with milk, light and creamy", "img": "images/products/m-coffee-5.jpg"},
      {"ar": "قهوة بندق", "en": "Hazelnut coffee", "p": 40, "dar": "قهوة محضّرة من بن بنكهة البندق", "den": "Coffee brewed from hazelnut-flavored grounds", "img": "images/products/m-coffee-6.jpg"},
      {"ar": "قهوة بندق قطع", "en": "Hazelnut pieces coffee", "p": 50, "dar": "قهوة بنكهة البندق مع قطع بندق", "den": "Hazelnut-flavored coffee with hazelnut pieces", "img": "images/products/m-coffee-7.jpg"},
      {"ar": "قهوة شوكيلت", "en": "Chocolate coffee", "p": 50, "dar": "قهوة محضّرة من بن بنكهة الشوكولاتة", "den": "Coffee brewed from chocolate-flavored grounds", "img": "images/products/m-coffee-8.jpg"},
      {"ar": "قهوة لوز", "en": "Almond coffee", "p": 50, "dar": "قهوة محضّرة من بن بنكهة اللوز", "den": "Coffee brewed from almond-flavored grounds", "img": "images/products/m-coffee-9.jpg"},
      {"ar": "قهوة بستاشيو قطع", "en": "Pistachio pieces coffee", "p": 60, "dar": "قهوة بنكهة الفستق مع قطع فستق", "den": "Pistachio coffee with pistachio pieces", "img": "images/products/m-coffee-10.jpg"},
      {"ar": "قهوة نوتيلا", "en": "Nutella coffee", "p": 60, "dar": "قهوة متحضّرة مع نوتيلا", "den": "Coffee made with Nutella", "img": "images/products/m-coffee-11.jpg"},
      {"ar": "قهوة تفاح", "en": "Apple coffee", "p": 40, "dar": "قهوة محضّرة من بن بنكهة التفاح", "den": "Coffee brewed from apple-flavored grounds", "img": "images/products/m-coffee-12.jpg"},
      {"ar": "قهوة منجا", "en": "Mango coffee", "p": 40, "dar": "قهوة محضّرة من بن بنكهة المانجا", "den": "Coffee brewed from mango-flavored grounds", "img": "images/products/m-coffee-13.jpg"},
      {"ar": "اسبريسو سنجل", "en": "Espresso, single", "p": 35, "dar": "شوت واحد من الإسبريسو المركّز", "den": "One shot of concentrated espresso", "img": "images/products/m-coffee-14.jpg"},
      {"ar": "اسبريسو دابل", "en": "Espresso, double", "p": 55, "dar": "شوتين إسبريسو في فنجان واحد", "den": "Two espresso shots in one cup", "img": "images/products/m-coffee-15.jpg"},
      {"ar": "ميكاتو سنجل", "en": "Macchiato, single", "p": 40, "dar": "شوت إسبريسو عليه رغوة لبن خفيفة", "den": "An espresso shot topped with a little milk foam", "img": "images/products/m-coffee-16.jpg"},
      {"ar": "ميكاتو دابل", "en": "Macchiato, double", "p": 60, "dar": "شوتين إسبريسو عليهم رغوة لبن خفيفة", "den": "Two espresso shots topped with a little milk foam", "img": "images/products/m-coffee-17.jpg"},
      {"ar": "كافيه لاتيه", "en": "Caffè latte", "p": 55, "dar": "إسبريسو مع لبن مبخّر ورغوة خفيفة", "den": "Espresso with steamed milk and light foam", "img": "images/products/m-coffee-18.jpg"},
      {"ar": "كابتشينو", "en": "Cappuccino", "p": 60, "dar": "إسبريسو ولبن ورغوة كثيفة", "den": "Espresso, milk and a thick foam cap", "img": "images/products/m-coffee-19.jpg"},
      {"ar": "كورتادو", "en": "Cortado", "p": 50, "dar": "إسبريسو مع كمية مساوية من اللبن", "den": "Espresso cut with an equal part of milk", "img": "images/products/m-coffee-20.jpg"},
      {"ar": "فلات وايت", "en": "Flat white", "p": 60, "dar": "إسبريسو مع لبن ناعم ورغوة رقيقة", "den": "Espresso with silky milk and thin foam", "img": "images/products/m-coffee-21.jpg"},
      {"ar": "اسبرسو افوجاتو", "en": "Espresso affogato", "p": 70, "dar": "بولة آيس كريم يُسكب عليها شوت إسبريسو سخن", "den": "A scoop of ice cream with a hot espresso shot poured over", "img": "images/products/m-coffee-22.jpg"},
      {"ar": "موكا", "en": "Mocha", "p": 65, "dar": "إسبريسو وشوكولاتة ولبن", "den": "Espresso, chocolate and milk", "img": "images/products/m-coffee-23.jpg"},
      {"ar": "اسبانيش لاتيه", "en": "Spanish latte", "p": 70, "dar": "لاتيه بالحليب المكثف", "den": "Latte sweetened with condensed milk", "img": "images/products/m-coffee-24.jpg"},
      {"ar": "امريكان كوفي", "en": "American coffee", "p": 60, "dar": "إسبريسو مع مية سخنة", "den": "Espresso topped up with hot water", "img": "images/products/m-coffee-25.jpg"},
      {"ar": "نسكافيه بلاك", "en": "Nescafé black", "p": 25, "dar": "نسكافيه سريع التحضير بالمية، من غير لبن", "den": "Instant Nescafé made with water, no milk", "img": "images/products/m-coffee-26.jpg"},
      {"ar": "نسكافيه باللبن", "en": "Nescafé with milk", "p": 45, "dar": "نسكافيه سريع التحضير باللبن", "den": "Instant Nescafé made with milk", "img": "images/products/m-coffee-27.jpg"},
      {"ar": "نسكافيه 3×1", "en": "Nescafé 3-in-1", "p": 25, "dar": "نسكافيه 3×1: قهوة وسكر وكريمر في كوب واحد", "den": "Nescafé 3-in-1: coffee, sugar and creamer in one cup", "img": "images/products/m-coffee-28.jpg"},
      {"ar": "كوفي ميكس", "en": "Coffee mix", "p": 20, "dar": "كوفي ميكس سريع التحضير، قهوة بالسكر والكريمر", "den": "Instant coffee mix with sugar and creamer", "img": "images/products/m-coffee-29.jpg"}
    ]},
    // مشروبات ساخنة
    { id: "hot", ar: "مشروبات ساخنة", en: "Hot drinks", banner: "images/banners/hot.jpg", items: [
      {"ar": "شاي كشري", "en": "Koshary tea", "p": 10, "dar": "شاي أسود سايب يتقل في الكوب على الطريقة المصرية", "den": "Loose black tea brewed in the glass, Egyptian style", "img": "images/products/m-hot-0.jpg"},
      {"ar": "شاي فتلة", "en": "Tea bag", "p": 15, "dar": "شاي أسود بالفتلة", "den": "Black tea from a tea bag", "img": "images/products/m-hot-1.jpg"},
      {"ar": "شاي اخضر", "en": "Green tea", "p": 20, "dar": "شاي أخضر خفيف", "den": "Light green tea", "img": "images/products/m-hot-2.jpg"},
      {"ar": "شاي نكهات", "en": "Flavored tea", "p": 20, "dar": "شاي بنكهة من اختيارك", "den": "Tea in a flavor of your choice", "img": "images/products/m-hot-3.jpg"},
      {"ar": "شاي كرك", "en": "Karak tea", "p": 50, "dar": "شاي بالحليب والهيل", "den": "Milk tea with cardamom", "img": "images/products/m-hot-4.jpg"},
      {"ar": "ينسون", "en": "Anise", "p": 20, "dar": "مشروب ينسون ساخن بطعمه المميز", "den": "A hot aniseed drink with its distinctive taste", "img": "images/products/m-hot-5.jpg"},
      {"ar": "نعناع", "en": "Mint", "p": 20, "dar": "أوراق نعناع منقوعة في مية سخنة", "den": "Mint leaves steeped in hot water", "img": "images/products/m-hot-6.jpg"},
      {"ar": "كركديه", "en": "Hibiscus", "p": 20, "dar": "كركديه ساخن بلونه الأحمر وطعمه المزّ", "den": "Hot hibiscus, deep red and slightly tart", "img": "images/products/m-hot-7.jpg"},
      {"ar": "بابونج", "en": "Chamomile", "p": 20, "dar": "زهور بابونج منقوعة في مية سخنة", "den": "Chamomile flowers steeped in hot water", "img": "images/products/m-hot-8.jpg"},
      {"ar": "قرفة", "en": "Cinnamon", "p": 20, "dar": "قرفة مغلية بريحتها الدافية", "den": "Warm brewed cinnamon", "img": "images/products/m-hot-9.jpg"},
      {"ar": "قرفة لبن", "en": "Cinnamon with milk", "p": 40, "dar": "قرفة مغلية مع اللبن", "den": "Cinnamon simmered with milk", "img": "images/products/m-hot-10.jpg"},
      {"ar": "جنزبيل", "en": "Ginger", "p": 20, "dar": "جنزبيل مغلي، طعمه دافي وحراق", "den": "Brewed ginger, warm with a kick", "img": "images/products/m-hot-11.jpg"},
      {"ar": "جنزبيل لبن", "en": "Ginger with milk", "p": 50, "dar": "جنزبيل مع لبن سخن", "den": "Ginger with hot milk", "img": "images/products/m-hot-12.jpg"},
      {"ar": "ميكس اعشاب", "en": "Herbal mix", "p": 35, "dar": "خلطة أعشاب منقوعة في مية سخنة", "den": "A blend of herbs steeped in hot water", "img": "images/products/m-hot-13.jpg"},
      {"ar": "سحلب", "en": "Sahlab", "p": 55, "dar": "سحلب باللبن، سميك وكريمي", "den": "Sahlab made with milk, thick and creamy", "img": "images/products/m-hot-14.jpg"},
      {"ar": "سحلب مع أي كاندي من اختيارك", "en": "Sahlab with candy of your choice", "p": 70, "dar": "سحلب باللبن مع الكاندي اللي تختاره", "den": "Milk sahlab topped with a candy of your choice", "img": "images/products/m-hot-15.jpg"},
      {"ar": "سحلب فواكه", "en": "Fruit sahlab", "p": 70, "dar": "سحلب باللبن مع فواكه", "den": "Milk sahlab with fruit", "img": "images/products/m-hot-16.jpg"},
      {"ar": "هوت سيدر", "en": "Hot cider", "p": 40, "dar": "مشروب تفاح ساخن", "den": "A hot apple drink", "img": "images/products/m-hot-17.jpg"},
      {"ar": "هوت شوكيلت كلاسيك", "en": "Classic hot chocolate", "p": 50, "dar": "شوكولاتة ساخنة باللبن", "den": "Hot chocolate made with milk", "img": "images/products/m-hot-18.jpg"},
      {"ar": "هوت شوكليت نوتيلا", "en": "Nutella hot chocolate", "p": 70, "dar": "شوكولاتة ساخنة باللبن مع نوتيلا", "den": "Hot chocolate made with milk and Nutella", "img": "images/products/m-hot-19.jpg"},
      {"ar": "هوت شوكليت ايطالي", "en": "Italian hot chocolate", "p": 80, "dar": "شوكولاتة ساخنة سميكة على الطريقة الإيطالية", "den": "Thick Italian-style hot chocolate", "img": "images/products/m-hot-20.jpg"},
      {"ar": "حمص شام", "en": "Hummus el-sham", "p": 40, "dar": "حمص مسلوق سخن في شوربته", "den": "Hot boiled chickpeas in their broth", "img": "images/products/m-hot-21.jpg"},
      {"ar": "بليلة", "en": "Belila", "p": 40, "dar": "قمح مسلوق باللبن", "den": "Boiled wheat with milk", "img": "images/products/m-hot-22.jpg"}
    ]},
    // قهوة مثلجة
    { id: "iced", ar: "قهوة مثلجة", en: "Iced coffee", banner: "images/banners/iced.jpg", items: [
      {"ar": "ايس لاتيه", "en": "Iced latte", "p": 60, "dar": "إسبريسو ولبن على تلج", "den": "Espresso and milk over ice", "img": "images/products/m-iced-0.jpg"},
      {"ar": "ايس كابتشينو", "en": "Iced cappuccino", "p": 60, "dar": "كابتشينو مثلج برغوة", "den": "Iced cappuccino with foam", "img": "images/products/m-iced-1.jpg"},
      {"ar": "ايس امريكان", "en": "Iced americano", "p": 50, "dar": "إسبريسو ومية على تلج", "den": "Espresso and water over ice", "img": "images/products/m-iced-2.jpg"},
      {"ar": "ايس موكا", "en": "Iced mocha", "p": 65, "dar": "إسبريسو وشوكولاتة ولبن مثلج", "den": "Espresso, chocolate and milk, iced", "img": "images/products/m-iced-3.jpg"},
      {"ar": "ايس اسبانيش", "en": "Iced Spanish latte", "p": 65, "dar": "لاتيه بالحليب المكثف على تلج", "den": "Condensed-milk latte over ice", "img": "images/products/m-iced-4.jpg"},
      {"ar": "آيس لاتيه ماتشا", "en": "Iced matcha latte", "p": 90, "dar": "ماتشا ولبن على تلج", "den": "Matcha and milk over ice", "img": "images/products/m-iced-5.jpg"}
    ]},
    // فرابيه
    { id: "frappe", ar: "فرابيه", en: "Frappé", banner: "images/banners/frappe.jpg", items: [
      {"ar": "فرابيه لاتيه", "en": "Latte frappé", "p": 60, "dar": "قهوة لاتيه متخفوقة مع لبن وتلج", "den": "Latte blended with milk and ice", "img": "images/products/m-frappe-0.jpg"},
      {"ar": "فرابتشينو كلاسيك", "en": "Classic frappuccino", "p": 65, "dar": "قهوة ولبن متخفوقين مع تلج، مشروب ساقع وكريمي", "den": "Coffee and milk blended with ice, cold and creamy", "img": "images/products/m-frappe-1.jpg"},
      {"ar": "فرابيه موكا", "en": "Mocha frappé", "p": 65, "dar": "قهوة وشوكولاتة ولبن متخفوقين مع تلج", "den": "Coffee, chocolate and milk blended with ice", "img": "images/products/m-frappe-2.jpg"},
      {"ar": "فرابيه كراميل", "en": "Caramel frappé", "p": 65, "dar": "قهوة ولبن وكراميل متخفوقين مع تلج", "den": "Coffee, milk and caramel blended with ice", "img": "images/products/m-frappe-3.jpg"},
      {"ar": "فرابيه ماتشا كلاسيك", "en": "Classic matcha frappé", "p": 90, "dar": "ماتشا ولبن متخفوقين مع تلج", "den": "Matcha and milk blended with ice", "img": "images/products/m-frappe-4.jpg"},
      {"ar": "فرابيه ماتشا توت", "en": "Matcha berry frappé", "p": 110, "dar": "ماتشا ولبن متخفوقين مع تلج، مع توت", "den": "Matcha and milk blended with ice, with berries", "img": "images/products/m-frappe-5.jpg"},
      {"ar": "فرابيه ماتشا فراولة", "en": "Matcha strawberry frappé", "p": 110, "dar": "ماتشا ولبن متخفوقين مع تلج، مع فراولة", "den": "Matcha and milk blended with ice, with strawberry", "img": "images/products/m-frappe-6.jpg"}
    ]},
    // عصائر طازجة
    { id: "juice", ar: "عصائر طازجة", en: "Fresh juices", banner: "images/banners/juice.jpg", items: [
      {"ar": "مانجو", "en": "Mango", "p": 55, "dar": "عصير مانجو طازج", "den": "Fresh mango juice", "img": "images/products/m-juice-0.jpg"},
      {"ar": "فراولة", "en": "Strawberry", "p": 45, "dar": "عصير فراولة طازج", "den": "Fresh strawberry juice", "img": "images/products/m-juice-1.jpg"},
      {"ar": "جوافة", "en": "Guava", "p": 45, "dar": "عصير جوافة طازج", "den": "Fresh guava juice", "img": "images/products/m-juice-2.jpg"},
      {"ar": "برتقال", "en": "Orange", "p": 45, "dar": "عصير برتقال طازج", "den": "Fresh orange juice", "img": "images/products/m-juice-3.jpg"},
      {"ar": "ليمون", "en": "Lemon", "p": 35, "dar": "عصير ليمون طازج", "den": "Fresh lemonade", "img": "images/products/m-juice-4.jpg"},
      {"ar": "ليمون نعناع", "en": "Lemon mint", "p": 40, "dar": "ليمون بالنعناع", "den": "Lemon with mint", "img": "images/products/m-juice-5.jpg"},
      {"ar": "خوخ", "en": "Peach", "p": 45, "dar": "عصير خوخ طازج", "den": "Fresh peach juice", "img": "images/products/m-juice-6.jpg"},
      {"ar": "بطيخ", "en": "Watermelon", "p": 45, "dar": "عصير بطيخ طازج", "den": "Fresh watermelon juice", "img": "images/products/m-juice-7.jpg"},
      {"ar": "كيوي", "en": "Kiwi", "p": 60, "dar": "عصير كيوي طازج", "den": "Fresh kiwi juice", "img": "images/products/m-juice-8.jpg"},
      {"ar": "كانتلوب", "en": "Cantaloupe", "p": 45, "dar": "عصير كانتلوب طازج", "den": "Fresh cantaloupe juice", "img": "images/products/m-juice-9.jpg"},
      {"ar": "موز باللبن", "en": "Banana milk", "p": 50, "dar": "موز ولبن متخفوقين", "den": "Banana blended with milk", "img": "images/products/m-juice-10.jpg"},
      {"ar": "بلح باللبن", "en": "Dates with milk", "p": 50, "dar": "بلح ولبن متخفوقين", "den": "Dates blended with milk", "img": "images/products/m-juice-11.jpg"}
    ]},
    // مشروبات الزبادي
    { id: "yogurt", ar: "مشروبات الزبادي", en: "Yogurt drinks", banner: "images/banners/yogurt.jpg", items: [
      {"ar": "زبادي كلاسيك", "en": "Classic yogurt", "p": 40, "dar": "زبادي متخفوق، مشروب ساقع", "den": "Blended yogurt, served cold", "img": "images/products/m-yogurt-0.jpg"},
      {"ar": "زبادي توت", "en": "Berry yogurt", "p": 50, "dar": "زبادي متخفوق مع توت", "den": "Yogurt blended with berries", "img": "images/products/m-yogurt-1.jpg"},
      {"ar": "زبادي مانجو", "en": "Mango yogurt", "p": 50, "dar": "زبادي متخفوق مع مانجو", "den": "Yogurt blended with mango", "img": "images/products/m-yogurt-2.jpg"},
      {"ar": "زبادي فراولة", "en": "Strawberry yogurt", "p": 50, "dar": "زبادي متخفوق مع فراولة", "den": "Yogurt blended with strawberry", "img": "images/products/m-yogurt-3.jpg"},
      {"ar": "زبادي ميكس فواكه", "en": "Mixed fruit yogurt", "p": 70, "dar": "زبادي متخفوق مع ميكس فواكه", "den": "Yogurt blended with mixed fruit", "img": "images/products/m-yogurt-4.jpg"}
    ]},
    // مشروبات الأفوكادو
    { id: "avocado", ar: "مشروبات الأفوكادو", en: "Avocado drinks", banner: "images/banners/avocado.jpg", items: [
      {"ar": "افوكادو كلاسيك", "en": "Classic avocado", "p": 60, "dar": "ميكس بين طعم الأفوكادو وآيس كريم الفانيليا والعسل", "den": "Avocado with vanilla ice cream and honey", "img": "images/products/m-avocado-0.jpg"},
      {"ar": "افوكادو سوبر", "en": "Super avocado", "p": 75, "dar": "خليط ما بين عصير الأفوكادو والمكسرات المميزة", "den": "Avocado juice with a special mix of nuts", "img": "images/products/m-avocado-1.jpg"},
      {"ar": "افوكادو عيسوي", "en": "Avocado Eisawy", "p": 80, "dar": "خليط بين عصير الأفوكادو والمانجو", "den": "Avocado juice with mango", "img": "images/products/m-avocado-2.jpg"},
      {"ar": "افوكادو ميلانو", "en": "Avocado Milano", "p": 80, "dar": "أفوكادو بالإسبريسو", "den": "Avocado with espresso", "img": "images/products/m-avocado-3.jpg"},
      {"ar": "افوكادو رايا", "en": "Avocado Raya", "p": 100, "dar": "خليط بين الأفوكادو والكيوي والمكسرات والكراميل", "den": "Avocado, kiwi, nuts and caramel", "img": "images/products/m-avocado-4.jpg"}
    ]},
    // سموزي كلاسيك
    { id: "smoothie", ar: "سموزي كلاسيك", en: "Classic smoothies", banner: "images/banners/smoothie.jpg", items: [
      {"ar": "مانجو", "en": "Mango", "p": 65, "dar": "مانجو متخفوقة مع تلج", "den": "Mango blended with ice", "img": "images/products/m-smoothie-0.jpg"},
      {"ar": "فراولة", "en": "Strawberry", "p": 65, "dar": "فراولة متخفوقة مع تلج", "den": "Strawberry blended with ice", "img": "images/products/m-smoothie-1.jpg"},
      {"ar": "لمون", "en": "Lemon", "p": 45, "dar": "ليمون متخفوق مع تلج", "den": "Lemon blended with ice", "img": "images/products/m-smoothie-2.jpg"},
      {"ar": "لمون نعناع", "en": "Lemon mint", "p": 50, "dar": "ليمون ونعناع متخفوقين مع تلج", "den": "Lemon and mint blended with ice", "img": "images/products/m-smoothie-3.jpg"},
      {"ar": "سموزي بطيخ", "en": "Watermelon smoothie", "p": 50, "dar": "بطيخ متخفوق مع تلج", "den": "Watermelon blended with ice", "img": "images/products/m-smoothie-4.jpg"},
      {"ar": "سموزي كانتلوب", "en": "Cantaloupe smoothie", "p": 50, "dar": "كانتلوب متخفوق مع تلج", "den": "Cantaloupe blended with ice", "img": "images/products/m-smoothie-5.jpg"},
      {"ar": "سموزي بلو بيري", "en": "Blueberry smoothie", "p": 60, "dar": "بلوبيري متخفوق مع تلج", "den": "Blueberries blended with ice", "img": "images/products/m-smoothie-6.jpg"},
      {"ar": "سموزي راز بيري", "en": "Raspberry smoothie", "p": 60, "dar": "رازبيري متخفوق مع تلج", "den": "Raspberries blended with ice", "img": "images/products/m-smoothie-7.jpg"},
      {"ar": "سموزي كيوي", "en": "Kiwi smoothie", "p": 80, "dar": "كيوي متخفوق مع تلج", "den": "Kiwi blended with ice", "img": "images/products/m-smoothie-8.jpg"},
      {"ar": "سموزي خوخ", "en": "Peach smoothie", "p": 60, "dar": "خوخ متخفوق مع تلج", "den": "Peach blended with ice", "img": "images/products/m-smoothie-9.jpg"}
    ]},
    // كوكتيل
    { id: "cocktail", ar: "كوكتيل", en: "Cocktails", banner: "images/banners/cocktail.jpg", items: [
      {"ar": "فلوريدا", "en": "Florida", "p": 55, "dar": "جوافة، مانجو، فراولة", "den": "Guava, mango, strawberry", "img": "images/products/m-cocktail-0.jpg"},
      {"ar": "كيوي مانجو", "en": "Kiwi mango", "p": 70, "dar": "كيوي، مانجو، آيس كريم فانيليا", "den": "Kiwi, mango, vanilla ice cream", "img": "images/products/m-cocktail-1.jpg"},
      {"ar": "ترايدنت", "en": "Trident", "p": 65, "dar": "بطيخ، فراولة، نعناع", "den": "Watermelon, strawberry, mint", "img": "images/products/m-cocktail-2.jpg"},
      {"ar": "مانجا كانتلوب", "en": "Mango cantaloupe", "p": 70, "dar": "مانجا، كانتلوب، آيس كريم فانيليا", "den": "Mango, cantaloupe, vanilla ice cream", "img": "images/products/m-cocktail-3.jpg"},
      {"ar": "فراولة قشطة", "en": "Strawberry cream", "p": 75, "dar": "فراولة، آيس كريم فانيليا، حليب مكثف", "den": "Strawberry, vanilla ice cream, condensed milk", "img": "images/products/m-cocktail-4.jpg"},
      {"ar": "مانجو كريم", "en": "Mango cream", "p": 75, "dar": "مانجو، حليب مكثف، آيس كريم فانيليا", "den": "Mango, condensed milk, vanilla ice cream", "img": "images/products/m-cocktail-5.jpg"},
      {"ar": "تورنيدو", "en": "Tornado", "p": 80, "dar": "بلح، موز، فول سوداني، آيس كريم فانيليا", "den": "Dates, banana, peanuts, vanilla ice cream", "img": "images/products/m-cocktail-6.jpg"},
      {"ar": "بينا كولادا", "en": "Piña colada", "p": 60, "dar": "أناناس، جوز الهند", "den": "Pineapple, coconut", "img": "images/products/m-cocktail-7.jpg"},
      {"ar": "سامر تايم", "en": "Summer time", "p": 60, "dar": "كانتلوب، بطيخ", "den": "Cantaloupe, watermelon", "img": "images/products/m-cocktail-8.jpg"},
      {"ar": "مانجو بيري", "en": "Mango berry", "p": 70, "dar": "مانجا، بلوبيري", "den": "Mango, blueberry", "img": "images/products/m-cocktail-9.jpg"}
    ]},
    // كوكتيل صودا
    { id: "soda", ar: "كوكتيل صودا", en: "Soda cocktails", banner: "images/banners/soda.jpg", items: [
      {"ar": "صن شاين", "en": "Sunshine", "p": 45, "dar": "كوكتيل صودا فوّار ومثلج", "den": "A sparkling, iced soda cocktail", "img": "images/products/m-soda-0.jpg"},
      {"ar": "صن رايز", "en": "Sunrise", "p": 45, "dar": "كوكتيل صودا فوّار ومثلج", "den": "A sparkling, iced soda cocktail", "img": "images/products/m-soda-1.jpg"},
      {"ar": "شيري كولا", "en": "Cherry cola", "p": 55, "dar": "كولا بنكهة الشيري على تلج", "den": "Cherry-flavored cola over ice", "img": "images/products/m-soda-2.jpg"},
      {"ar": "بلو هاواي", "en": "Blue Hawaii", "p": 55, "dar": "كوكتيل صودا فوّار ومثلج، لونه أزرق", "den": "A sparkling, iced blue soda cocktail", "img": "images/products/m-soda-3.jpg"},
      {"ar": "موخيتو", "en": "Mojito", "p": 55, "dar": "صودا مع نعناع وليمون على تلج", "den": "Soda with mint and lime over ice", "img": "images/products/m-soda-4.jpg"},
      {"ar": "موخيتو بول", "en": "Mojito bowl", "p": 110, "dar": "موخيتو (صودا ونعناع وليمون) في بول كبير", "den": "Mojito (soda, mint and lime) served in a large bowl", "img": "images/products/m-soda-5.jpg"},
      {"ar": "موخيتو توت", "en": "Berry mojito", "p": 50, "dar": "موخيتو بالنعناع والليمون مع توت", "den": "Mint-lime mojito with berries", "img": "images/products/m-soda-6.jpg"},
      {"ar": "موخيتو باشون", "en": "Passion fruit mojito", "p": 55, "dar": "موخيتو بالنعناع والليمون مع باشون فروت", "den": "Mint-lime mojito with passion fruit", "img": "images/products/m-soda-7.jpg"},
      {"ar": "موخيتو كيوي", "en": "Kiwi mojito", "p": 60, "dar": "موخيتو بالنعناع والليمون مع كيوي", "den": "Mint-lime mojito with kiwi", "img": "images/products/m-soda-8.jpg"},
      {"ar": "هامر هيد", "en": "Hammerhead", "p": 100, "dar": "كوكتيل صودا فوّار ومثلج", "den": "A sparkling, iced soda cocktail", "img": "images/products/m-soda-9.jpg"}
    ]},
    // ميلك شيك
    { id: "shake", ar: "ميلك شيك", en: "Milkshakes", banner: "images/banners/shake.jpg", items: [
      {"ar": "ميلك شيك فانليا", "en": "Vanilla milkshake", "p": 60, "dar": "لبن وآيس كريم فانيليا متخفوقين", "den": "Milk and vanilla ice cream blended together", "img": "images/products/m-shake-0.jpg"},
      {"ar": "ميلك شيك كراميل", "en": "Caramel milkshake", "p": 70, "dar": "لبن وآيس كريم متخفوقين مع كراميل", "den": "Milk and ice cream blended with caramel", "img": "images/products/m-shake-1.jpg"},
      {"ar": "ميلك شيك شوكولاتة", "en": "Chocolate milkshake", "p": 60, "dar": "لبن وآيس كريم متخفوقين مع شوكولاتة", "den": "Milk and ice cream blended with chocolate", "img": "images/products/m-shake-2.jpg"},
      {"ar": "ميلك مانجا", "en": "Mango milkshake", "p": 60, "dar": "لبن وآيس كريم متخفوقين مع مانجا", "den": "Milk and ice cream blended with mango", "img": "images/products/m-shake-3.jpg"},
      {"ar": "ميلك فراولة", "en": "Strawberry milkshake", "p": 60, "dar": "لبن وآيس كريم متخفوقين مع فراولة", "den": "Milk and ice cream blended with strawberry", "img": "images/products/m-shake-4.jpg"},
      {"ar": "ميلك بلو بيري", "en": "Blueberry milkshake", "p": 70, "dar": "لبن وآيس كريم متخفوقين مع بلوبيري", "den": "Milk and ice cream blended with blueberries", "img": "images/products/m-shake-5.jpg"},
      {"ar": "ميلك نوتيلا", "en": "Nutella milkshake", "p": 75, "dar": "لبن وآيس كريم متخفوقين مع نوتيلا", "den": "Milk and ice cream blended with Nutella", "img": "images/products/m-shake-6.jpg"},
      {"ar": "اوريو", "en": "Oreo", "p": 65, "dar": "لبن وآيس كريم متخفوقين مع بسكويت أوريو", "den": "Milk and ice cream blended with Oreo cookies", "img": "images/products/m-shake-7.jpg"}
    ]},
    // شاي مثلج
    { id: "icedtea", ar: "شاي مثلج", en: "Iced tea", banner: "images/banners/icedtea.jpg", items: [
      {"ar": "ايس تي بيتش", "en": "Peach iced tea", "p": 50, "dar": "خوخ وشاي أحمر", "den": "Peach and black tea", "img": "images/products/m-icedtea-0.jpg"},
      {"ar": "ايس تي باشون", "en": "Passion iced tea", "p": 50, "dar": "باشون فروت وشاي أخضر", "den": "Passion fruit and green tea", "img": "images/products/m-icedtea-1.jpg"},
      {"ar": "ايس تي توستيد", "en": "Toasted iced tea", "p": 60, "dar": "ليمون نعناع وشاي أخضر", "den": "Lemon-mint and green tea", "img": "images/products/m-icedtea-2.jpg"},
      {"ar": "ايس تي بلو بيري", "en": "Blueberry iced tea", "p": 60, "dar": "بلوبيري وشاي أحمر", "den": "Blueberry and black tea", "img": "images/products/m-icedtea-3.jpg"},
      {"ar": "ايس تي جرين لانتر", "en": "Green Lantern iced tea", "p": 60, "dar": "شاي أخضر وكيوي", "den": "Green tea and kiwi", "img": "images/products/m-icedtea-4.jpg"}
    ]},
    // سوفت درينك
    { id: "soft", ar: "سوفت درينك", en: "Soft drinks", banner: "images/banners/soft.jpg", items: [
      {"ar": "ماء صغيرة", "en": "Water, small", "p": 10, "dar": "زجاجة مياه معدنية صغيرة", "den": "A small bottle of mineral water", "img": "images/products/m-soft-0.jpg"},
      {"ar": "ماء كبيرة", "en": "Water, large", "p": 18, "dar": "زجاجة مياه معدنية كبيرة", "den": "A large bottle of mineral water", "img": "images/products/m-soft-1.jpg"},
      {"ar": "كانز", "en": "Canned soda", "p": 35, "dar": "مشروب غازي", "den": "Soft drink", "img": "images/products/m-soft-2.jpg"},
      {"ar": "فيوري", "en": "Fury", "p": 40, "dar": "مشروب طاقة فيوري", "den": "Fury energy drink", "img": "images/products/m-soft-3.jpg"},
      {"ar": "تويست", "en": "Twist", "p": 35, "dar": "مشروب طاقة تويست", "den": "Twist energy drink", "img": "images/products/m-soft-4.jpg"},
      {"ar": "بيريل", "en": "Birell", "p": 40, "dar": "مشروب شعير بيريل، خالي من الكحول", "den": "Birell malt drink, alcohol-free", "img": "images/products/m-soft-5.jpg"},
      {"ar": "فيروز", "en": "Fayrouz", "p": 40, "dar": "مشروب شعير فيروز بنكهة الفاكهة، خالي من الكحول", "den": "Fayrouz fruit-flavored malt drink, alcohol-free", "img": "images/products/m-soft-6.jpg"}
    ]},
    // آيس كريم
    { id: "ice", ar: "آيس كريم", en: "Ice cream", banner: "images/banners/ice.jpg", items: [
      {"ar": "ايس كريم بولة", "en": "Ice cream, 1 scoop", "p": 25, "dar": "بولة آيس كريم واحدة", "den": "One scoop of ice cream", "img": "images/products/m-ice-0.jpg"},
      {"ar": "ايس كريم بولتين", "en": "Ice cream, 2 scoops", "p": 35, "dar": "بولتين آيس كريم", "den": "Two scoops of ice cream", "img": "images/products/m-ice-1.jpg"},
      {"ar": "ايس كريم 3 بولات", "en": "Ice cream, 3 scoops", "p": 50, "dar": "3 بولات آيس كريم", "den": "Three scoops of ice cream", "img": "images/products/m-ice-2.jpg"},
      {"ar": "إضافة بسكوتة", "en": "Extra biscuit (cone)", "p": 5, "dar": "كورنيه بسكوت (قمع) إضافي للآيس كريم", "den": "An extra biscuit cone for your ice cream", "img": "images/products/m-ice-3.jpg"},
      {"ar": "إضافة صوص", "en": "Extra sauce", "p": 5, "dar": "صوص إضافي على الآيس كريم", "den": "Extra sauce on your ice cream", "img": "images/products/m-ice-4.jpg"}
    ]},
    // اندومي
    { id: "indomie", ar: "اندومي", en: "Indomie", banner: "images/banners/indomie.jpg", items: [
      {"ar": "اندومي صغير", "en": "Small Indomie", "p": 15, "dar": "نودلز اندومي، الحجم الصغير", "den": "Indomie noodles, small size", "img": "images/products/m-indomie-0.jpg"},
      {"ar": "اندومي كبير", "en": "Large Indomie", "p": 20, "dar": "نودلز اندومي، الحجم الكبير", "den": "Indomie noodles, large size", "img": "images/products/m-indomie-1.jpg"}
    ]}
  ]
};

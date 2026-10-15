// ================================================================
// منيو Raya Cafe — عدّل الأسعار والأسماء والأوصاف والصور من هنا
// ar = الاسم بالعربي | en = الاسم بالإنجليزي | p = السعر بالجنيه
// dar = الوصف بالعربي | den = الوصف بالإنجليزي | img = مسار الصورة
// ================================================================
window.RAYA_MENU = {
  // ---------- البن (أول قسم) ----------
  beans: [
    { id: "blends", ar: "التوليفات", en: "Blends", items: [
      {"ar": "توليفة برازيلي فاتح", "en": "Brazilian blend, light", "p": 580, "img": "images/products/beans-blends/brazilian-blend-light/image.jpg"},
      {"ar": "توليفة برازيلي وسط", "en": "Brazilian blend, medium", "p": 580, "img": "images/products/beans-blends/brazilian-blend-medium/image.jpg"},
      {"ar": "توليفة برازيلي غامق", "en": "Brazilian blend, dark", "p": 600, "img": "images/products/beans-blends/brazilian-blend-dark/image.jpg"},
      {"ar": "توليفة العميد فاتح", "en": "Al-Amid blend, light", "p": 680, "img": "images/products/beans-blends/al-amid-blend-light/image.jpg"},
      {"ar": "توليفة العميد وسط", "en": "Al-Amid blend, medium", "p": 720, "img": "images/products/beans-blends/al-amid-blend-medium/image.jpg"},
      {"ar": "توليفة ملكية", "en": "Royal blend", "p": 620, "img": "images/products/beans-blends/royal-blend/image.jpg"},
      {"ar": "توليفة مخصوص", "en": "Special blend", "p": 660, "img": "images/products/beans-blends/special-blend/image.jpg"}
    ]},
    { id: "single", ar: "بن سادة وإسبريسو", en: "Single beans & espresso", items: [
      {"ar": "برازيلي بيور", "en": "Pure Brazilian", "p": 700, "img": "images/products/beans-single/pure-brazilian/image.jpg"},
      {"ar": "بن هندي أرابيكا", "en": "Indian Arabica", "p": 800, "img": "images/products/beans-single/indian-arabica/image.jpg"},
      {"ar": "بن كولومبي بيور", "en": "Pure Colombian", "p": 920, "img": "images/products/beans-single/pure-colombian/image.jpg"},
      {"ar": "إسبريسو", "en": "Espresso beans", "p": 800, "img": "images/products/beans-single/espresso-beans/image.jpg"}
    ]},
    { id: "flav", ar: "قهوة بالنكهات", en: "Flavored coffee", items: [
      {"ar": "قهوة مانجو", "en": "Mango coffee", "p": 560, "img": "images/products/beans-flav/mango-coffee/image.jpg"},
      {"ar": "قهوة تفاح", "en": "Apple coffee", "p": 560, "img": "images/products/beans-flav/apple-coffee/image.jpg"},
      {"ar": "قهوة فرنساوي", "en": "French coffee", "p": 520, "img": "images/products/beans-flav/french-coffee/image.jpg"},
      {"ar": "قهوة شوكليت", "en": "Chocolate coffee", "p": 600, "img": "images/products/beans-flav/chocolate-coffee/image.jpg"},
      {"ar": "قهوة بندق", "en": "Hazelnut coffee", "p": 580, "img": "images/products/beans-flav/hazelnut-coffee/image.jpg"},
      {"ar": "قهوة بندق قطع", "en": "Hazelnut pieces coffee", "p": 680, "img": "images/products/beans-flav/hazelnut-pieces-coffee/image.jpg"},
      {"ar": "قهوة فستق قطع", "en": "Pistachio pieces coffee", "p": 740, "img": "images/products/beans-flav/pistachio-pieces-coffee/image.jpg"},
      {"ar": "قهوة لوز قطع", "en": "Almond pieces coffee", "p": 680, "img": "images/products/beans-flav/almond-pieces-coffee/image.jpg"}
    ]},
    { id: "more", ar: "منتجات أخرى", en: "More products", items: [
      {"ar": "هوت شوكليت", "en": "Hot chocolate", "p": 540, "img": "images/products/beans-more/hot-chocolate/image.jpg"},
      {"ar": "نسكافيه بلاك", "en": "Nescafé Black", "p": 960, "img": "images/products/beans-more/nescafe-black/image.jpg"},
      {"ar": "نسكافيه جولد", "en": "Nescafé Gold", "p": 1360, "img": "images/products/beans-more/nescafe-gold/image.jpg"},
      {"ar": "شاي كرك", "en": "Karak tea", "p": 600, "img": "images/products/beans-more/karak-tea/image.jpg"},
      {"ar": "بن تخسيس", "en": "Slimming coffee", "p": 680, "img": "images/products/beans-more/slimming-coffee/image.jpg"},
      {"ar": "كريمر", "en": "Creamer", "p": 360, "img": "images/products/beans-more/creamer/image.jpg"}
    ]}
  ],
  // ---------- أقسام المنيو ----------
  menu: [
    // قهوة ساخنة
    { id: "coffee", ar: "قهوة ساخنة", en: "Hot coffee", banner: "images/banners/coffee.jpg", items: [
      {"ar": "قهوة تركي سنجل", "en": "Turkish coffee, single", "p": 20, "dar": "فنجان قهوة تركي سنجل بوشّها، على الطريقة التقليدية", "den": "A single cup of traditional Turkish coffee with its foam", "img": "images/products/coffee/turkish-coffee-single/image.jpg"},
      {"ar": "قهوة كولومبي", "en": "Colombian coffee", "p": 30, "dar": "قهوة سادة محضّرة من بن كولومبي", "den": "Plain coffee brewed from Colombian beans", "img": "images/products/coffee/colombian-coffee/image.jpg"},
      {"ar": "قهوة عميد", "en": "Al-Amid coffee", "p": 25, "dar": "قهوة تركي محضّرة من توليفة العميد", "den": "Turkish coffee made with the Al-Amid blend", "img": "images/products/coffee/al-amid-coffee/image.jpg"},
      {"ar": "قهوة تركي دابل", "en": "Turkish coffee, double", "p": 35, "dar": "فنجان قهوة تركي دابل، كمية أكبر وطعم أتقل", "den": "A double cup of Turkish coffee, bigger and stronger", "img": "images/products/coffee/turkish-coffee-double/image.jpg"},
      {"ar": "قهوة جينسينج", "en": "Ginseng coffee", "p": 35, "dar": "مشروب قهوة بالجينسينج، ناعم وكريمي", "den": "A smooth, creamy coffee drink with ginseng", "img": "images/products/coffee/ginseng-coffee/image.jpg"},
      {"ar": "قهوة فرنساوي", "en": "French coffee", "p": 40, "dar": "قهوة فرنساوي باللبن، كريمية وخفيفة", "den": "French coffee with milk, light and creamy", "img": "images/products/coffee/french-coffee/image.jpg"},
      {"ar": "قهوة بندق", "en": "Hazelnut coffee", "p": 40, "dar": "قهوة محضّرة من بن بنكهة البندق", "den": "Coffee brewed from hazelnut-flavored grounds", "img": "images/products/coffee/hazelnut-coffee/image.jpg"},
      {"ar": "قهوة بندق قطع", "en": "Hazelnut pieces coffee", "p": 50, "dar": "قهوة بنكهة البندق مع قطع بندق", "den": "Hazelnut-flavored coffee with hazelnut pieces", "img": "images/products/coffee/hazelnut-pieces-coffee/image.jpg"},
      {"ar": "قهوة شوكليت", "en": "Chocolate coffee", "p": 50, "dar": "قهوة محضّرة من بن بنكهة الشوكولاتة", "den": "Coffee brewed from chocolate-flavored grounds", "img": "images/products/coffee/chocolate-coffee/image.jpg"},
      {"ar": "قهوة لوز", "en": "Almond coffee", "p": 50, "dar": "قهوة محضّرة من بن بنكهة اللوز", "den": "Coffee brewed from almond-flavored grounds", "img": "images/products/coffee/almond-coffee/image.jpg"},
      {"ar": "قهوة بستاشيو قطع", "en": "Pistachio pieces coffee", "p": 60, "dar": "قهوة بنكهة الفستق مع قطع فستق", "den": "Pistachio coffee with pistachio pieces", "img": "images/products/coffee/pistachio-pieces-coffee/image.jpg"},
      {"ar": "قهوة نوتيلا", "en": "Nutella coffee", "p": 60, "dar": "قهوة محضّرة مع نوتيلا", "den": "Coffee made with Nutella", "img": "images/products/coffee/nutella-coffee/image.jpg"},
      {"ar": "قهوة تفاح", "en": "Apple coffee", "p": 40, "dar": "قهوة محضّرة من بن بنكهة التفاح", "den": "Coffee brewed from apple-flavored grounds", "img": "images/products/coffee/apple-coffee/image.jpg"},
      {"ar": "قهوة مانجو", "en": "Mango coffee", "p": 40, "dar": "قهوة محضّرة من بن بنكهة المانجا", "den": "Coffee brewed from mango-flavored grounds", "img": "images/products/coffee/mango-coffee/image.jpg"},
      {"ar": "إسبريسو سنجل", "en": "Espresso, single", "p": 35, "dar": "شوت واحد من الإسبريسو المركّز", "den": "One shot of concentrated espresso", "img": "images/products/coffee/espresso-single/image.jpg"},
      {"ar": "إسبريسو دابل", "en": "Espresso, double", "p": 55, "dar": "شوتين إسبريسو في فنجان واحد", "den": "Two espresso shots in one cup", "img": "images/products/coffee/espresso-double/image.jpg"},
      {"ar": "ميكاتو سنجل", "en": "Macchiato, single", "p": 40, "dar": "شوت إسبريسو عليه رغوة لبن خفيفة", "den": "An espresso shot topped with a little milk foam", "img": "images/products/coffee/macchiato-single/image.jpg"},
      {"ar": "ميكاتو دابل", "en": "Macchiato, double", "p": 60, "dar": "شوتين إسبريسو عليهم رغوة لبن خفيفة", "den": "Two espresso shots topped with a little milk foam", "img": "images/products/coffee/macchiato-double/image.jpg"},
      {"ar": "كافيه لاتيه", "en": "Caffè latte", "p": 55, "dar": "إسبريسو مع لبن مبخّر ورغوة خفيفة", "den": "Espresso with steamed milk and light foam", "img": "images/products/coffee/caffe-latte/image.jpg"},
      {"ar": "كابتشينو", "en": "Cappuccino", "p": 60, "dar": "إسبريسو ولبن ورغوة كثيفة", "den": "Espresso, milk and a thick foam cap", "img": "images/products/coffee/cappuccino/image.jpg"},
      {"ar": "كورتادو", "en": "Cortado", "p": 50, "dar": "إسبريسو مع كمية مساوية من اللبن", "den": "Espresso cut with an equal part of milk", "img": "images/products/coffee/cortado/image.jpg"},
      {"ar": "فلات وايت", "en": "Flat white", "p": 60, "dar": "إسبريسو مع لبن ناعم ورغوة رقيقة", "den": "Espresso with silky milk and thin foam", "img": "images/products/coffee/flat-white/image.jpg"},
      {"ar": "إسبريسو أفوجاتو", "en": "Espresso affogato", "p": 70, "dar": "بولة آيس كريم ڤانيليا يُسكب عليها شوت إسبريسو سخن", "den": "A scoop of ice cream with a hot espresso shot poured over", "img": "images/products/coffee/espresso-affogato/image.jpg"},
      {"ar": "موكا", "en": "Mocha", "p": 65, "dar": "إسبريسو وشوكولاتة ولبن", "den": "Espresso, chocolate and milk", "img": "images/products/coffee/mocha/image.jpg"},
      {"ar": "سبانيش لاتيه", "en": "Spanish latte", "p": 70, "dar": "لاتيه بالحليب المكثف", "den": "Latte sweetened with condensed milk", "img": "images/products/coffee/spanish-latte/image.jpg"},
      {"ar": "أمريكان كوفي", "en": "American coffee", "p": 60, "dar": "إسبريسو مع مية سخنة", "den": "Espresso topped up with hot water", "img": "images/products/coffee/american-coffee/image.jpg"},
      {"ar": "نسكافيه بلاك", "en": "Nescafé black", "p": 25, "dar": "نسكافيه سريع التحضير بالمية، من غير لبن", "den": "Instant Nescafé made with water, no milk", "img": "images/products/coffee/nescafe-black/image.jpg"},
      {"ar": "نسكافيه باللبن", "en": "Nescafé with milk", "p": 45, "dar": "نسكافيه سريع التحضير باللبن", "den": "Instant Nescafé made with milk", "img": "images/products/coffee/nescafe-with-milk/image.jpg"},
      {"ar": "نسكافيه 3×1", "en": "Nescafé 3-in-1", "p": 25, "dar": "نسكافيه 3×1: قهوة وسكر وكريمر في كوب واحد", "den": "Nescafé 3-in-1: coffee, sugar and creamer in one cup", "img": "images/products/coffee/nescafe-3-in-1/image.jpg"},
      {"ar": "كوفي ميكس", "en": "Coffee mix", "p": 20, "dar": "كوفي ميكس سريع التحضير، قهوة بالسكر والكريمر", "den": "Instant coffee mix with sugar and creamer", "img": "images/products/coffee/coffee-mix/image.jpg"}
    ]},
    // مشروبات ساخنة
    { id: "hot", ar: "مشروبات ساخنة", en: "Hot drinks", banner: "images/banners/hot.jpg", items: [
      {"ar": "شاي كشري", "en": "Koshary tea", "p": 10, "dar": "شاي أسود سايب يتقل في الكوب على الطريقة المصرية", "den": "Loose black tea brewed in the glass, Egyptian style", "img": "images/products/hot/koshary-tea/image.jpg"},
      {"ar": "شاي فتلة", "en": "Tea bag", "p": 15, "dar": "شاي أسود بالفتلة", "den": "Black tea from a tea bag", "img": "images/products/hot/tea-bag/image.jpg"},
      {"ar": "شاي أخضر", "en": "Green tea", "p": 20, "dar": "شاي أخضر خفيف", "den": "Light green tea", "img": "images/products/hot/green-tea/image.jpg"},
      {"ar": "شاي نكهات", "en": "Flavored tea", "p": 20, "dar": "شاي بنكهة من اختيارك", "den": "Tea in a flavor of your choice", "img": "images/products/hot/flavored-tea/image.jpg"},
      {"ar": "شاي كرك", "en": "Karak tea", "p": 50, "dar": "شاي بالحليب والهيل", "den": "Milk tea with cardamom", "img": "images/products/hot/karak-tea/image.jpg"},
      {"ar": "ينسون", "en": "Anise", "p": 20, "dar": "مشروب ينسون ساخن بطعمه المميز", "den": "A hot aniseed drink with its distinctive taste", "img": "images/products/hot/anise/image.jpg"},
      {"ar": "نعناع", "en": "Mint", "p": 20, "dar": "أوراق نعناع منقوعة في مية سخنة", "den": "Mint leaves steeped in hot water", "img": "images/products/hot/mint/image.jpg"},
      {"ar": "كركديه", "en": "Hibiscus", "p": 20, "dar": "كركديه ساخن بلونه الأحمر وطعمه المزّ", "den": "Hot hibiscus, deep red and slightly tart", "img": "images/products/hot/hibiscus/image.jpg"},
      {"ar": "بابونج", "en": "Chamomile", "p": 20, "dar": "زهور بابونج منقوعة في مية سخنة", "den": "Chamomile flowers steeped in hot water", "img": "images/products/hot/chamomile/image.jpg"},
      {"ar": "قرفة", "en": "Cinnamon", "p": 20, "dar": "قرفة مغلية بريحتها الدافية", "den": "Warm brewed cinnamon", "img": "images/products/hot/cinnamon/image.jpg"},
      {"ar": "قرفة لبن", "en": "Cinnamon with milk", "p": 40, "dar": "قرفة مغلية مع اللبن", "den": "Cinnamon simmered with milk", "img": "images/products/hot/cinnamon-with-milk/image.jpg"},
      {"ar": "زنجبيل", "en": "Ginger", "p": 20, "dar": "زنجبيل مغلي، طعمه دافي وحراق", "den": "Brewed ginger, warm with a kick", "img": "images/products/hot/ginger/image.jpg"},
      {"ar": "زنجبيل لبن", "en": "Ginger with milk", "p": 50, "dar": "زنجبيل مع لبن سخن", "den": "Ginger with hot milk", "img": "images/products/hot/ginger-with-milk/image.jpg"},
      {"ar": "ميكس أعشاب", "en": "Herbal mix", "p": 35, "dar": "خلطة أعشاب منقوعة في مية سخنة", "den": "A blend of herbs steeped in hot water", "img": "images/products/hot/herbal-mix/image.jpg"},
      {"ar": "سحلب", "en": "Sahlab", "p": 55, "dar": "سحلب باللبن، سميك وكريمي", "den": "Sahlab made with milk, thick and creamy", "img": "images/products/hot/sahlab/image.jpg"},
      {"ar": "سحلب مع أي كاندي من اختيارك", "en": "Sahlab with candy of your choice", "p": 70, "dar": "سحلب باللبن مع الكاندي اللي تختاره", "den": "Milk sahlab topped with a candy of your choice", "img": "images/products/hot/sahlab-with-candy-of-your-choice/image.jpg"},
      {"ar": "سحلب فواكه", "en": "Fruit sahlab", "p": 70, "dar": "سحلب باللبن مع فواكه", "den": "Milk sahlab with fruit", "img": "images/products/hot/fruit-sahlab/image.jpg"},
      {"ar": "هوت سيدر", "en": "Hot cider", "p": 40, "dar": "مشروب تفاح ساخن", "den": "A hot apple drink", "img": "images/products/hot/hot-cider/image.jpg"},
      {"ar": "هوت شوكليت كلاسيك", "en": "Classic hot chocolate", "p": 50, "dar": "شوكولاتة ساخنة باللبن", "den": "Hot chocolate made with milk", "img": "images/products/hot/classic-hot-chocolate/image.jpg"},
      {"ar": "هوت شوكليت نوتيلا", "en": "Nutella hot chocolate", "p": 70, "dar": "شوكولاتة ساخنة باللبن مع نوتيلا", "den": "Hot chocolate made with milk and Nutella", "img": "images/products/hot/nutella-hot-chocolate/image.jpg"},
      {"ar": "هوت شوكليت ايطالي", "en": "Italian hot chocolate", "p": 80, "dar": "شوكولاتة ساخنة سميكة على الطريقة الإيطالية", "den": "Thick Italian-style hot chocolate", "img": "images/products/hot/italian-hot-chocolate/image.jpg"},
      {"ar": "حمص شام", "en": "Hummus el-sham", "p": 40, "dar": "حمص مسلوق سخن في شوربته", "den": "Hot boiled chickpeas in their broth", "img": "images/products/hot/hummus-el-sham/image.jpg"},
      {"ar": "بليلة", "en": "Belila", "p": 40, "dar": "قمح مسلوق باللبن", "den": "Boiled wheat with milk", "img": "images/products/hot/belila/image.jpg"}
    ]},
    // قهوة مثلجة
    { id: "iced", ar: "قهوة مثلجة", en: "Iced coffee", banner: "images/banners/iced.jpg", items: [
      {"ar": "آيس لاتيه", "en": "Iced latte", "p": 60, "dar": "إسبريسو ولبن على تلج", "den": "Espresso and milk over ice", "img": "images/products/iced/iced-latte/image.jpg"},
      {"ar": "آيس كابتشينو", "en": "Iced cappuccino", "p": 60, "dar": "كابتشينو مثلج برغوة", "den": "Iced cappuccino with foam", "img": "images/products/iced/iced-cappuccino/image.jpg"},
      {"ar": "آيس أمريكان", "en": "Iced americano", "p": 50, "dar": "إسبريسو ومية على تلج", "den": "Espresso and water over ice", "img": "images/products/iced/iced-americano/image.jpg"},
      {"ar": "آيس موكا", "en": "Iced mocha", "p": 65, "dar": "إسبريسو وشوكولاتة ولبن مثلج", "den": "Espresso, chocolate and milk, iced", "img": "images/products/iced/iced-mocha/image.jpg"},
      {"ar": "آيس سبانيش", "en": "Iced Spanish latte", "p": 65, "dar": "لاتيه بالحليب المكثف على تلج", "den": "Condensed-milk latte over ice", "img": "images/products/iced/iced-spanish-latte/image.jpg"},
      {"ar": "آيس لاتيه ماتشا", "en": "Iced matcha latte", "p": 90, "dar": "ماتشا ولبن على تلج", "den": "Matcha and milk over ice", "img": "images/products/iced/iced-matcha-latte/image.jpg"}
    ]},
    // فرابيه
    { id: "frappe", ar: "فرابيه", en: "Frappé", banner: "images/banners/frappe.jpg", items: [
      {"ar": "فرابيه لاتيه", "en": "Latte frappé", "p": 60, "dar": "قهوة لاتيه مخفوقة مع لبن وتلج", "den": "Latte blended with milk and ice", "img": "images/products/frappe/latte-frappe/image.jpg"},
      {"ar": "فرابتشينو كلاسيك", "en": "Classic frappuccino", "p": 65, "dar": "قهوة ولبن مخفوقين مع تلج، مشروب ساقع وكريمي", "den": "Coffee and milk blended with ice, cold and creamy", "img": "images/products/frappe/classic-frappuccino/image.jpg"},
      {"ar": "فرابيه موكا", "en": "Mocha frappé", "p": 65, "dar": "قهوة وشوكولاتة ولبن مخفوقين مع تلج", "den": "Coffee, chocolate and milk blended with ice", "img": "images/products/frappe/mocha-frappe/image.jpg"},
      {"ar": "فرابيه كراميل", "en": "Caramel frappé", "p": 65, "dar": "قهوة ولبن وكراميل مخفوقين مع تلج", "den": "Coffee, milk and caramel blended with ice", "img": "images/products/frappe/caramel-frappe/image.jpg"},
      {"ar": "فرابيه ماتشا كلاسيك", "en": "Classic matcha frappé", "p": 90, "dar": "ماتشا ولبن مخفوقين مع تلج", "den": "Matcha and milk blended with ice", "img": "images/products/frappe/classic-matcha-frappe/image.jpg"},
      {"ar": "فرابيه ماتشا توت", "en": "Matcha berry frappé", "p": 110, "dar": "ماتشا ولبن مخفوقين مع تلج، مع توت", "den": "Matcha and milk blended with ice, with berries", "img": "images/products/frappe/matcha-berry-frappe/image.jpg"},
      {"ar": "فرابيه ماتشا فراولة", "en": "Matcha strawberry frappé", "p": 110, "dar": "ماتشا ولبن مخفوقين مع تلج، مع فراولة", "den": "Matcha and milk blended with ice, with strawberry", "img": "images/products/frappe/matcha-strawberry-frappe/image.jpg"}
    ]},
    // عصائر طازجة
    { id: "juice", ar: "عصائر طازجة", en: "Fresh juices", banner: "images/banners/juice.jpg", items: [
      {"ar": "مانجو", "en": "Mango", "p": 55, "dar": "عصير مانجو طازج", "den": "Fresh mango juice", "img": "images/products/juice/mango/image.jpg"},
      {"ar": "فراولة", "en": "Strawberry", "p": 45, "dar": "عصير فراولة طازج", "den": "Fresh strawberry juice", "img": "images/products/juice/strawberry/image.jpg"},
      {"ar": "جوافة", "en": "Guava", "p": 45, "dar": "عصير جوافة طازج", "den": "Fresh guava juice", "img": "images/products/juice/guava/image.jpg"},
      {"ar": "برتقال", "en": "Orange", "p": 45, "dar": "عصير برتقال طازج", "den": "Fresh orange juice", "img": "images/products/juice/orange/image.jpg"},
      {"ar": "ليمون", "en": "Lemon", "p": 35, "dar": "عصير ليمون طازج", "den": "Fresh lemonade", "img": "images/products/juice/lemon/image.jpg"},
      {"ar": "ليمون نعناع", "en": "Lemon mint", "p": 40, "dar": "ليمون بالنعناع", "den": "Lemon with mint", "img": "images/products/juice/lemon-mint/image.jpg"},
      {"ar": "خوخ", "en": "Peach", "p": 45, "dar": "عصير خوخ طازج", "den": "Fresh peach juice", "img": "images/products/juice/peach/image.jpg"},
      {"ar": "بطيخ", "en": "Watermelon", "p": 45, "dar": "عصير بطيخ طازج", "den": "Fresh watermelon juice", "img": "images/products/juice/watermelon/image.jpg"},
      {"ar": "كيوي", "en": "Kiwi", "p": 60, "dar": "عصير كيوي طازج", "den": "Fresh kiwi juice", "img": "images/products/juice/kiwi/image.jpg"},
      {"ar": "كانتلوب", "en": "Cantaloupe", "p": 45, "dar": "عصير كانتلوب طازج", "den": "Fresh cantaloupe juice", "img": "images/products/juice/cantaloupe/image.jpg"},
      {"ar": "موز باللبن", "en": "Banana milk", "p": 50, "dar": "موز ولبن مخفوقين", "den": "Banana blended with milk", "img": "images/products/juice/banana-milk/image.jpg"},
      {"ar": "بلح باللبن", "en": "Dates with milk", "p": 50, "dar": "بلح ولبن مخفوقين", "den": "Dates blended with milk", "img": "images/products/juice/dates-with-milk/image.jpg"}
    ]},
    // مشروبات الزبادي
    { id: "yogurt", ar: "مشروبات الزبادي", en: "Yogurt drinks", banner: "images/banners/yogurt.jpg", items: [
      {"ar": "زبادي كلاسيك", "en": "Classic yogurt", "p": 40, "dar": "زبادي مخفوق، مشروب ساقع", "den": "Blended yogurt, served cold", "img": "images/products/yogurt/classic-yogurt/image.jpg"},
      {"ar": "زبادي توت", "en": "Berry yogurt", "p": 50, "dar": "زبادي مخفوق مع توت", "den": "Yogurt blended with berries", "img": "images/products/yogurt/berry-yogurt/image.jpg"},
      {"ar": "زبادي مانجو", "en": "Mango yogurt", "p": 50, "dar": "زبادي مخفوق مع مانجو", "den": "Yogurt blended with mango", "img": "images/products/yogurt/mango-yogurt/image.jpg"},
      {"ar": "زبادي فراولة", "en": "Strawberry yogurt", "p": 50, "dar": "زبادي مخفوق مع فراولة", "den": "Yogurt blended with strawberry", "img": "images/products/yogurt/strawberry-yogurt/image.jpg"},
      {"ar": "زبادي ميكس فواكه", "en": "Mixed fruit yogurt", "p": 70, "dar": "زبادي مخفوق مع ميكس فواكه", "den": "Yogurt blended with mixed fruit", "img": "images/products/yogurt/mixed-fruit-yogurt/image.jpg"}
    ]},
    // مشروبات الأفوكادو
    { id: "avocado", ar: "مشروبات الأفوكادو", en: "Avocado drinks", banner: "images/banners/avocado.jpg", items: [
      {"ar": "أفوكادو كلاسيك", "en": "Classic avocado", "p": 60, "dar": "ميكس بين طعم الأفوكادو وآيس كريم الفانيليا والعسل", "den": "Avocado with vanilla ice cream and honey", "img": "images/products/avocado/classic-avocado/image.jpg"},
      {"ar": "أفوكادو سوبر", "en": "Super avocado", "p": 75, "dar": "خليط ما بين عصير الأفوكادو والمكسرات المميزة", "den": "Avocado juice with a special mix of nuts", "img": "images/products/avocado/super-avocado/image.jpg"},
      {"ar": "أفوكادو عويسي", "en": "Avocado Eisawy", "p": 80, "dar": "خليط بين عصير الأفوكادو والمانجو", "den": "Avocado juice with mango", "img": "images/products/avocado/avocado-eisawy/image.jpg"},
      {"ar": "أفوكادو ميلانو", "en": "Avocado Milano", "p": 80, "dar": "أفوكادو بالإسبريسو", "den": "Avocado with espresso", "img": "images/products/avocado/avocado-milano/image.jpg"},
      {"ar": "أفوكادو رايا", "en": "Avocado Raya", "p": 100, "dar": "خليط بين الأفوكادو والكيوي والمكسرات والكراميل", "den": "Avocado, kiwi, nuts and caramel", "img": "images/products/avocado/avocado-raya/image.jpg"}
    ]},
    // سموزي كلاسيك
    { id: "smoothie", ar: "سموزي كلاسيك", en: "Classic smoothies", banner: "images/banners/smoothie.jpg", items: [
      {"ar": "مانجو", "en": "Mango", "p": 65, "dar": "مانجو مخفوقة مع تلج", "den": "Mango blended with ice", "img": "images/products/smoothie/mango/image.jpg"},
      {"ar": "فراولة", "en": "Strawberry", "p": 65, "dar": "فراولة مخفوقة مع تلج", "den": "Strawberry blended with ice", "img": "images/products/smoothie/strawberry/image.jpg"},
      {"ar": "ليمون", "en": "Lemon", "p": 45, "dar": "ليمون مخفوق مع تلج", "den": "Lemon blended with ice", "img": "images/products/smoothie/lemon/image.jpg"},
      {"ar": "ليمون نعناع", "en": "Lemon mint", "p": 50, "dar": "ليمون ونعناع مخفوقين مع تلج", "den": "Lemon and mint blended with ice", "img": "images/products/smoothie/lemon-mint/image.jpg"},
      {"ar": "سموزي بطيخ", "en": "Watermelon smoothie", "p": 50, "dar": "بطيخ مخفوق مع تلج", "den": "Watermelon blended with ice", "img": "images/products/smoothie/watermelon-smoothie/image.jpg"},
      {"ar": "سموزي كانتلوب", "en": "Cantaloupe smoothie", "p": 50, "dar": "كانتلوب مخفوق مع تلج", "den": "Cantaloupe blended with ice", "img": "images/products/smoothie/cantaloupe-smoothie/image.jpg"},
      {"ar": "سموزي بلو بيري", "en": "Blueberry smoothie", "p": 60, "dar": "بلوبيري مخفوق مع تلج", "den": "Blueberries blended with ice", "img": "images/products/smoothie/blueberry-smoothie/image.jpg"},
      {"ar": "سموزي راز بيري", "en": "Raspberry smoothie", "p": 60, "dar": "رازبيري مخفوق مع تلج", "den": "Raspberries blended with ice", "img": "images/products/smoothie/raspberry-smoothie/image.jpg"},
      {"ar": "سموزي كيوي", "en": "Kiwi smoothie", "p": 80, "dar": "كيوي مخفوق مع تلج", "den": "Kiwi blended with ice", "img": "images/products/smoothie/kiwi-smoothie/image.jpg"},
      {"ar": "سموزي خوخ", "en": "Peach smoothie", "p": 60, "dar": "خوخ مخفوق مع تلج", "den": "Peach blended with ice", "img": "images/products/smoothie/peach-smoothie/image.jpg"}
    ]},
    // كوكتيل
    { id: "cocktail", ar: "كوكتيل", en: "Cocktails", banner: "images/banners/cocktail.jpg", items: [
      {"ar": "فلوريدا", "en": "Florida", "p": 55, "dar": "جوافة، مانجو، فراولة", "den": "Guava, mango, strawberry", "img": "images/products/cocktail/florida/image.jpg"},
      {"ar": "كيوي مانجو", "en": "Kiwi mango", "p": 70, "dar": "كيوي، مانجو، آيس كريم فانيليا", "den": "Kiwi, mango, vanilla ice cream", "img": "images/products/cocktail/kiwi-mango/image.jpg"},
      {"ar": "ترايدنت", "en": "Trident", "p": 65, "dar": "بطيخ، فراولة، نعناع", "den": "Watermelon, strawberry, mint", "img": "images/products/cocktail/trident/image.jpg"},
      {"ar": "مانجا كانتلوب", "en": "Mango cantaloupe", "p": 70, "dar": "مانجا، كانتلوب، آيس كريم فانيليا", "den": "Mango, cantaloupe, vanilla ice cream", "img": "images/products/cocktail/mango-cantaloupe/image.jpg"},
      {"ar": "فراولة قشطة", "en": "Strawberry cream", "p": 75, "dar": "فراولة، آيس كريم فانيليا، حليب مكثف", "den": "Strawberry, vanilla ice cream, condensed milk", "img": "images/products/cocktail/strawberry-cream/image.jpg"},
      {"ar": "مانجو كريم", "en": "Mango cream", "p": 75, "dar": "مانجو، حليب مكثف، آيس كريم فانيليا", "den": "Mango, condensed milk, vanilla ice cream", "img": "images/products/cocktail/mango-cream/image.jpg"},
      {"ar": "تورنيدو", "en": "Tornado", "p": 80, "dar": "بلح، موز، فول سوداني، آيس كريم فانيليا", "den": "Dates, banana, peanuts, vanilla ice cream", "img": "images/products/cocktail/tornado/image.jpg"},
      {"ar": "بينا كولادا", "en": "Piña colada", "p": 60, "dar": "أناناس، جوز الهند", "den": "Pineapple, coconut", "img": "images/products/cocktail/pina-colada/image.jpg"},
      {"ar": "سامر تايم", "en": "Summer time", "p": 60, "dar": "كانتلوب، بطيخ", "den": "Cantaloupe, watermelon", "img": "images/products/cocktail/summer-time/image.jpg"},
      {"ar": "مانجو بيري", "en": "Mango berry", "p": 70, "dar": "مانجا، بلوبيري", "den": "Mango, blueberry", "img": "images/products/cocktail/mango-berry/image.jpg"}
    ]},
    // كوكتيل صودا
    { id: "soda", ar: "كوكتيل صودا", en: "Soda cocktails", banner: "images/banners/soda.jpg", items: [
      {"ar": "صن شاين", "en": "Sunshine", "p": 45, "dar": "كوكتيل صودا فوّار ومثلج", "den": "A sparkling, iced soda cocktail", "img": "images/products/soda/sunshine/image.jpg"},
      {"ar": "صن رايز", "en": "Sunrise", "p": 45, "dar": "كوكتيل صودا فوّار ومثلج", "den": "A sparkling, iced soda cocktail", "img": "images/products/soda/sunrise/image.jpg"},
      {"ar": "شيري كولا", "en": "Cherry cola", "p": 55, "dar": "كولا بنكهة الشيري على تلج", "den": "Cherry-flavored cola over ice", "img": "images/products/soda/cherry-cola/image.jpg"},
      {"ar": "بلو هاواي", "en": "Blue Hawaii", "p": 55, "dar": "كوكتيل صودا فوّار ومثلج، لونه أزرق", "den": "A sparkling, iced blue soda cocktail", "img": "images/products/soda/blue-hawaii/image.jpg"},
      {"ar": "موخيتو", "en": "Mojito", "p": 55, "dar": "صودا مع نعناع وليمون على تلج", "den": "Soda with mint and lime over ice", "img": "images/products/soda/mojito/image.jpg"},
      {"ar": "موخيتو بول", "en": "Mojito bowl", "p": 110, "dar": "موخيتو (صودا ونعناع وليمون) في بول كبير", "den": "Mojito (soda, mint and lime) served in a large bowl", "img": "images/products/soda/mojito-bowl/image.jpg"},
      {"ar": "موخيتو توت", "en": "Berry mojito", "p": 50, "dar": "موخيتو بالنعناع والليمون مع توت", "den": "Mint-lime mojito with berries", "img": "images/products/soda/berry-mojito/image.jpg"},
      {"ar": "موخيتو باشون", "en": "Passion fruit mojito", "p": 55, "dar": "موخيتو بالنعناع والليمون مع باشون فروت", "den": "Mint-lime mojito with passion fruit", "img": "images/products/soda/passion-fruit-mojito/image.jpg"},
      {"ar": "موخيتو كيوي", "en": "Kiwi mojito", "p": 60, "dar": "موخيتو بالنعناع والليمون مع كيوي", "den": "Mint-lime mojito with kiwi", "img": "images/products/soda/kiwi-mojito/image.jpg"},
      {"ar": "هامر هيد", "en": "Hammerhead", "p": 100, "dar": "كوكتيل صودا فوّار ومثلج", "den": "A sparkling, iced soda cocktail", "img": "images/products/soda/hammerhead/image.jpg"}
    ]},
    // ميلك شيك
    { id: "shake", ar: "ميلك شيك", en: "Milkshakes", banner: "images/banners/shake.jpg", items: [
      {"ar": "ميلك شيك فانيليا", "en": "Vanilla milkshake", "p": 60, "dar": "لبن وآيس كريم فانيليا مخفوقين", "den": "Milk and vanilla ice cream blended together", "img": "images/products/shake/vanilla-milkshake/image.jpg"},
      {"ar": "ميلك شيك كراميل", "en": "Caramel milkshake", "p": 70, "dar": "لبن وآيس كريم مخفوقين مع كراميل", "den": "Milk and ice cream blended with caramel", "img": "images/products/shake/caramel-milkshake/image.jpg"},
      {"ar": "ميلك شيك شوكولاتة", "en": "Chocolate milkshake", "p": 60, "dar": "لبن وآيس كريم مخفوقين مع شوكولاتة", "den": "Milk and ice cream blended with chocolate", "img": "images/products/shake/chocolate-milkshake/image.jpg"},
      {"ar": "ميلك مانجا", "en": "Mango milkshake", "p": 60, "dar": "لبن وآيس كريم مخفوقين مع مانجا", "den": "Milk and ice cream blended with mango", "img": "images/products/shake/mango-milkshake/image.jpg"},
      {"ar": "ميلك فراولة", "en": "Strawberry milkshake", "p": 60, "dar": "لبن وآيس كريم مخفوقين مع فراولة", "den": "Milk and ice cream blended with strawberry", "img": "images/products/shake/strawberry-milkshake/image.jpg"},
      {"ar": "ميلك بلو بيري", "en": "Blueberry milkshake", "p": 70, "dar": "لبن وآيس كريم مخفوقين مع بلوبيري", "den": "Milk and ice cream blended with blueberries", "img": "images/products/shake/blueberry-milkshake/image.jpg"},
      {"ar": "ميلك نوتيلا", "en": "Nutella milkshake", "p": 75, "dar": "لبن وآيس كريم مخفوقين مع نوتيلا", "den": "Milk and ice cream blended with Nutella", "img": "images/products/shake/nutella-milkshake/image.jpg"},
      {"ar": "أوريو", "en": "Oreo", "p": 65, "dar": "لبن وآيس كريم مخفوقين مع بسكويت أوريو", "den": "Milk and ice cream blended with Oreo cookies", "img": "images/products/shake/oreo/image.jpg"}
    ]},
    // شاي مثلج
    { id: "icedtea", ar: "شاي مثلج", en: "Iced tea", banner: "images/banners/icedtea.jpg", items: [
      {"ar": "آيس تي بيتش", "en": "Peach iced tea", "p": 50, "dar": "خوخ وشاي أحمر", "den": "Peach and black tea", "img": "images/products/icedtea/peach-iced-tea/image.jpg"},
      {"ar": "آيس تي باشون", "en": "Passion iced tea", "p": 50, "dar": "باشون فروت وشاي أخضر", "den": "Passion fruit and green tea", "img": "images/products/icedtea/passion-iced-tea/image.jpg"},
      {"ar": "آيس تي توستيد", "en": "Toasted iced tea", "p": 60, "dar": "ليمون نعناع وشاي أخضر", "den": "Lemon-mint and green tea", "img": "images/products/icedtea/toasted-iced-tea/image.jpg"},
      {"ar": "آيس تي بلو بيري", "en": "Blueberry iced tea", "p": 60, "dar": "بلوبيري وشاي أحمر", "den": "Blueberry and black tea", "img": "images/products/icedtea/blueberry-iced-tea/image.jpg"},
      {"ar": "آيس تي جرين لانتر", "en": "Green Lantern iced tea", "p": 60, "dar": "شاي أخضر وكيوي", "den": "Green tea and kiwi", "img": "images/products/icedtea/green-lantern-iced-tea/image.jpg"}
    ]},
    // سوفت درينك
    { id: "soft", ar: "سوفت درينك", en: "Soft drinks", banner: "images/banners/soft.jpg", items: [
      {"ar": "مياه صغيرة", "en": "Water, small", "p": 10, "dar": "زجاجة مياه معدنية صغيرة", "den": "A small bottle of mineral water", "img": "images/products/soft/water-small/image.jpg"},
      {"ar": "مياه كبيرة", "en": "Water, large", "p": 18, "dar": "زجاجة مياه معدنية كبيرة", "den": "A large bottle of mineral water", "img": "images/products/soft/water-large/image.jpg"},
      {"ar": "كانز", "en": "Canned soda", "p": 35, "dar": "مشروب غازي", "den": "Soft drink", "img": "images/products/soft/canned-soda/image.jpg"},
      {"ar": "فيوري", "en": "Fury", "p": 40, "dar": "مشروب طاقة فيوري", "den": "Fury energy drink", "img": "images/products/soft/fury/image.jpg"},
      {"ar": "تويست", "en": "Twist", "p": 35, "dar": "مشروب طاقة تويست", "den": "Twist energy drink", "img": "images/products/soft/twist/image.jpg"},
      {"ar": "بيريل", "en": "Birell", "p": 40, "dar": "مشروب شعير بيريل، خالي من الكحول", "den": "Birell malt drink, alcohol-free", "img": "images/products/soft/birell/image.jpg"},
      {"ar": "فيروز", "en": "Fayrouz", "p": 40, "dar": "مشروب شعير فيروز بنكهة الفاكهة، خالي من الكحول", "den": "Fayrouz fruit-flavored malt drink, alcohol-free", "img": "images/products/soft/fayrouz/image.jpg"}
    ]},
    // آيس كريم
    { id: "ice", ar: "آيس كريم", en: "Ice cream", banner: "images/banners/ice.jpg", items: [
      {"ar": "آيس كريم بولة", "en": "Ice cream, 1 scoop", "p": 25, "dar": "بولة آيس كريم واحدة", "den": "One scoop of ice cream", "img": "images/products/ice/ice-cream-1-scoop/image.jpg"},
      {"ar": "آيس كريم بولتين", "en": "Ice cream, 2 scoops", "p": 35, "dar": "بولتين آيس كريم", "den": "Two scoops of ice cream", "img": "images/products/ice/ice-cream-2-scoops/image.jpg"},
      {"ar": "آيس كريم 3 بولات", "en": "Ice cream, 3 scoops", "p": 50, "dar": "3 بولات آيس كريم", "den": "Three scoops of ice cream", "img": "images/products/ice/ice-cream-3-scoops/image.jpg"},
      {"ar": "إضافة بسكوت", "en": "Extra biscuit", "p": 5, "dar": "قمع إضافي للآيس كريم", "den": "An extra cone for your ice cream", "img": "images/products/ice/extra-biscuit-cone/image.jpg"},
      {"ar": "إضافة صوص", "en": "Extra sauce", "p": 5, "dar": "صوص إضافي على الآيس كريم", "den": "Extra sauce on your ice cream", "img": "images/products/ice/extra-sauce/image.jpg"}
    ]},
    // اندومي
    { id: "indomie", ar: "اندومي", en: "Indomie", banner: "images/banners/indomie.jpg", items: [
      {"ar": "إندومي صغير", "en": "Small Indomie", "p": 15, "dar": "نودلز اندومي، الحجم الصغير", "den": "Indomie noodles, small size", "img": "images/products/indomie/small-indomie/image.jpg"},
      {"ar": "إندومي كبير", "en": "Large Indomie", "p": 20, "dar": "نودلز اندومي، الحجم الكبير", "den": "Indomie noodles, large size", "img": "images/products/indomie/large-indomie/image.jpg"}
    ]}
  ]
};

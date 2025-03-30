// Restaurantdata for hver by
const allRestaurants = {
  Osaka: [
    {
      name: "Shinsekai Paprika Shokudo",
      address: "3-4-5 Ebisuhigashi, Naniwa-ku, Osaka (Shinsekai-området, nær Tsūtenkaku-tårnet)",
      city: "Osaka",
      notes:
        "Hel-vegansk og glutenfri restaurant i Shinsekai-området (en bakgate like ved Tsūtenkaku-tårnet). Spesialiserer seg på autentiske Osaka-retter gjort veganske og glutenfrie – takoyaki, kushikatsu og ramen, alt uten gluten.",
      lat: 34.6517,
      lng: 135.506,
      menuItems: [
        { japanese: "グルテンフリーたこ焼き", translation: "Glutenfri takoyaki" },
        { japanese: "グルテンフリー串カツ", translation: "Glutenfri kushikatsu" },
      ],
    },
    {
      name: "Second Room Cafe",
      address: "Osaka Ekimae 4th Building B1F, 1-11-4 Umeda, Kita-ku, Osaka (i kjelleren av bygg 4 ved Osaka stasjon)",
      city: "Osaka",
      notes:
        "100% glutenfritt og vegansk spisested sentralt i Umeda, nær Osaka stasjon. Også kjent som 'Vegan & GlutenFree Osaka'. Menyen dekker et bredt spekter av japanske favoritter: ramen, okonomiyaki, takoyaki, gyoza og temaki-sushi.",
      lat: 34.7025,
      lng: 135.4959,
      menuItems: [
        { japanese: "豚骨風ラーメン", translation: "Tonkotsu-stil veggie-ramen" },
        { japanese: "お好み焼き", translation: "Okonomiyaki" },
      ],
    },
    {
      name: "Shojin Sushi Minamo",
      address: "Shinsaibashi, Osaka (B1 bak Nikko Hotel, 2 min gange fra Shinsaibashi stasjon)",
      city: "Osaka",
      notes:
        "Nyåpnet sushi-restaurant (etablert sep. 2024) i Shinsaibashi som er både helt glutenfri og vegansk. Bredt utvalg nigiri og maki laget i shōjin ryōri-stil (vegansk), men viktigst: helt uten gluten. Hvit inngang i kjelleretasjen (B1) bak Nikko Hotel.",
      lat: 34.6717,
      lng: 135.5023,
      menuItems: [
        { japanese: "精進寿司盛り合わせ", translation: "Shojin sushi-utvalg" },
        { japanese: "グルテンフリー巻き寿司", translation: "Glutenfrie maki" },
      ],
    },
    {
      name: "OKO Takoyaki",
      address: "1-15-24 Higashishinsaibashi, Chūō-ku, Osaka (nær Dōtonbori, Shinsaibashi området)",
      city: "Osaka",
      notes:
        "Lite vegansk gatekjøkken i Shinsaibashi som spesialiserer seg på Osakas klassiske street food. Takoyaki lages her i en glutenfri røre, toppet med autentisk takoyakisaus (også glutenfri). I tillegg serverer de kushikatsu – fritert mat på spyd – med ulike sausparinger. Alt på menyen er vegansk og glutenfritt. Begrenset med sitteplasser (mest en bar disk).",
      lat: 34.6737,
      lng: 135.5063,
      menuItems: [
        { japanese: "グルテンフリーたこ焼き", translation: "Glutenfri takoyaki" },
        { japanese: "グルテンフリー串カツ", translation: "Glutenfri kushikatsu" },
      ],
    },
    {
      name: "Alohana Vegan Ramen",
      address: "2-5-2 Kawaramachi, Chūō-ku, Osaka (ca. 10 min gange fra Kitahama stasjon)",
      city: "Osaka",
      notes:
        "Familiedrevet vegansk ramen-kafé i Osaka sentrum (Kawaramachi-området, nær Kitahama). Glutenfritt alternativ: Bytt til glassnudler i stedet for hvete-nudler. Ramen'en har fått skryt for sin fyldige smak og rike grønnsaksbuljong. NB: Alohana holder kun åpent i helgene noen få timer.",
      lat: 34.6877,
      lng: 135.5123,
      menuItems: [
        { japanese: "味噌ラーメン(春雨麺)", translation: "Miso-ramen med glassnudler" },
        { japanese: "春雨麺ベジラーメン", translation: "Veggie-ramen med glassnudler" },
      ],
    },
    {
      name: "Comeconoco Gluten-free Laboratory & Cafe 大阪天満橋店",
      address: "2-chōme-2-3 Shimamachi, Chuo Ward, Osaka, 540-0034, Japan",
      city: "Osaka",
      notes:
        "Comeconoco er en dedikert glutenfri kafé som spesialiserer seg på produkter laget av japansk rismel. De tilbyr et bredt utvalg av sandwicher, brød, kaker, desserter og supper. Kaféen er kjent for sin høye kvalitet og rimelige priser, og har fått positive anmeldelser fra både lokale og besøkende. Den ligger omtrent 5 minutters gange fra 'Tenmabashi' stasjon, utgang 4.",
      lat: 34.6875,
      lng: 135.5169,
      menuItems: [
        { japanese: "サンドイッチ", translation: "Sandwicher" },
        { japanese: "パン", translation: "Brød/Boller" },
      ],
    },
    {
      name: "Spys Oasis, Medicinal Spicy Curry Gluten-free Bar",
      address: "1-chōme-5-8 Namba, Chuo Ward, Osaka, 542-0076, Japan",
      city: "Osaka",
      notes:
        "Spys Oasis er en dedikert glutenfri restaurant som spesialiserer seg på medisinsk krydret curry. Under konseptet 'mat og medisin er ett' tilbyr de retter laget med nøye utvalgte ingredienser som er både næringsrike og skånsomme for kroppen. Restauranten har en stilig atmosfære og passer både for lunsj og middag. De tilbyr også takeout for de som ønsker å nyte maten hjemme. Åpningstider: Mandag, tirsdag, onsdag, fredag, lørdag: 11:30–15:00 og 18:00–24:00. Søndag og helligdager: 11:30–22:00. Torsdag: Stengt.",
      lat: 34.6683,
      lng: 135.5019,
      menuItems: [
        { japanese: "豆乳、玉ねぎ、トマト、生姜", translation: "Medisinsk krydret kyllingcurry" },
        { japanese: "黒ごま、赤味噌、キャベツ、ひじき", translation: "Pork keema curry" },
      ],
    },
    {
      name: "FOLK茶菓 (folksaka)",
      address: "1-chōme-6-29 Fukushima, Fukushima Ward, Osaka, 553-0003, Japan",
      city: "Osaka",
      notes:
        "FOLK茶菓 er en dedikert vegansk og glutenfri kafé og bakeri i Fukushima-området i Osaka. De fokuserer på å bruke ferske, sesongbaserte ingredienser uten animalske produkter eller hvete. Kaféen tilbyr et utvalg av sandwicher, gulrotkake, ostekake, brownies og andre kaker. Tidligere kunder har beskrevet stedet som en 'trygg havn' for personer med cøliaki. Åpningstider: Mandag, tirsdag, fredag, lørdag, søndag: 10:00–18:00. Onsdag og torsdag: Stengt.",
      lat: 34.6985,
      lng: 135.487,
      menuItems: [
        { japanese: "サンドイッチ", translation: "Sandwicher" },
        { japanese: "キャロットケーキ", translation: "Gulrotkake" },
      ],
    },
    {
      name: "RE-public by BASE ISLAND KITCHEN",
      address: "1-chōme-16-27 Kitahorie, Nishi Ward, Osaka, 550-0014, Japan",
      city: "Osaka",
      notes:
        "RE-public by BASE ISLAND KITCHEN er en dedikert glutenfri restaurant som kombinerer jamaicanske og japanske smaker. Restauranten er kjent for sitt fokus på naturlig, sunn mat laget fra bunnen av, uten bruk av MSG eller andre tilsetningsstoffer. Den intime atmosfæren med plass til kun åtte gjester gir en unik mulighet til å observere matlagingen på nært hold. Merk at kun ølet som serveres ikke er glutenfritt. Åpningstider: Onsdag–torsdag: 11:00–18:00. Fredag: 11:00–20:00. Lørdag–søndag: 12:00–18:00. Mandag–tirsdag: Stengt.",
      lat: 34.675,
      lng: 135.4945,
      menuItems: [
        { japanese: "ケーキ", translation: "Kaker" },
        { japanese: "デザート", translation: "Desserter" },
      ],
    },
    {
      name: "Vegan Cafe Tsukineko",
      address: "1-chōme−14−12 Nanbanaka, Naniwa Ward, Osaka, 556-0011, Japan (Eben Ezer Building 1F)",
      city: "Osaka",
      notes:
        "Vegan Cafe Tsukineko er en helvegansk kafé og bar som åpnet 7. september 2024. De tilbyr et utvalg av drikkevarer, inkludert kaffe, te, alkohol og smoothies. Matmenyen inkluderer retter som gyoza, tørr curry, grønnsakstempura og edamame. Vær oppmerksom på at mange av rettene ikke er tilgjengelige for takeaway. Kaféen har syv sitteplasser ved disken og ligger kun tre minutters gange fra Namba stasjon.",
      lat: 34.6623,
      lng: 135.5012,
      menuItems: [
        { japanese: "パンケーキ", translation: "Pannekaker" },
        { japanese: "カレー", translation: "Curry" },
        { japanese: "フライドポテト", translation: "Pommes frites" },
      ],
    },
    {
      name: "Shojin Sushi Minamo",
      address: "1-chōme−10−11 Shinsaibashisuji, Chuo Ward, Osaka, 542-0085, Japan (Keiwa Building, Reflet 21)",
      city: "Osaka",
      notes:
        "Shojin Sushi Minamo er en vegetarsushi-spesialitet som åpnet i september 2024 som den tredje filialen av den populære Osaka-veganrestauranten Paprika Shokudo. Restauranten tilbyr vegansk, alliumfri og glutenfri sushi, og fremhever de naturlige smakene av ferske grønnsaker i sine sushikreasjoner. Beliggende i hjertet av Americamura, Shinsaibashi, har Shojin Sushi Minamo en stilig eksteriør og anbefales for de som ønsker et sunt og kunstnerisk sushimåltid.",
      lat: 34.6723,
      lng: 135.5018,
      menuItems: [
        { japanese: "寿司", translation: "Sushi" },
        { japanese: "ビール", translation: "Glutenfritt øl" },
      ],
    },
    {
      name: "Gluten Free Cafe & Shisha Bar Anosaki Konosaki",
      address: "1-chōme−2−5 Nakazakinishi, Kita Ward, Osaka, 530-0015, Japan (1. etasje)",
      city: "Osaka",
      notes:
        "Gluten Free Cafe & Shisha Bar Anosaki Konosaki er en kafé som tilbyr et utvalg av glutenfrie retter, inkludert friterte kyllinglunsjsett med tofu, ris, consommé og drikke. Kaféen er kjent for sine velsmakende vafler og tilbyr også shisha for de som er interessert. Tidligere gjester har rost stedet for dets cøliakivennlige alternativer og hyggelige atmosfære.",
      lat: 34.7051,
      lng: 135.5065,
      menuItems: [
        { japanese: "唐揚げ", translation: "Fritert kylling" },
        { japanese: "ワッフル", translation: "Vafler" },
        { japanese: "デザート", translation: "Desserter" },
      ],
    },
    {
      name: "Naki Vegan Sweets",
      address: "1-chōme−5−5 Namba, Chuo Ward, Osaka, 542-0076, Japan",
      city: "Osaka",
      notes:
        "Naki Vegan Sweets er en dedikert vegansk bakeri som også er helt glutenfritt. De tilbyr et utvalg av desserter, inkludert kjeks, kaker, terter og brownies. Tidligere besøkende har beskrevet stedet som en trygg havn for cøliakere som søker deilige søtsaker i Osaka.",
      lat: 34.6675,
      lng: 135.5013,
      menuItems: [
        { japanese: "デザート", translation: "Desserter" },
        { japanese: "クッキー", translation: "Kjeks" },
        { japanese: "ケーキ", translation: "Kaker" },
      ],
    },
    {
      name: "OKO - Fun Okonomiyaki Bar",
      address: "1-chōme−15−24 Higashishinsaibashi, Chuo Ward, Osaka, 542-0083, Japan",
      city: "Osaka",
      notes:
        "OKO er en spesialrestaurant som fokuserer på glutenfri okonomiyaki, en tradisjonell japansk pannekake. De tilbyr også andre glutenfrie alternativer som takoyaki og yakisoba. Restauranten er populær blant både lokale og turister som søker autentisk japansk mat uten gluten.",
      lat: 34.6737,
      lng: 135.5063,
      menuItems: [
        { japanese: "お好み焼き", translation: "Okonomiyaki" },
        { japanese: "たこ焼き", translation: "Takoyaki" },
      ],
    },
    {
      name: "Genji-Soba",
      address: "4-chōme-5-8 Nanba, Chuo Ward, Osaka, 542-0076, Japan",
      city: "Osaka",
      notes:
        "Genji-Soba er en tradisjonell soba-restaurant grunnlagt i 1929, nå drevet av tredje generasjon som viderefører håndverksmessige tradisjoner. Restauranten bruker kun japanskprodusert bokhvete, som males på stedet for å lage ferske, håndlagde soba-nudler av høyeste kvalitet. For helsebevisste gjester tilbyr de glutenfrie alternativer, veganske retter og måltider for personer med cøliaki, tilberedt med nøye utvalgte ingredienser og stor forsiktighet.",
      lat: 34.664,
      lng: 135.5019,
      menuItems: [
        { japanese: "麺類", translation: "Nudler" },
        { japanese: "醤油", translation: "Soyasaus" },
        { japanese: "天ぷら", translation: "Tempura" },
      ],
    },
    {
      name: "SLICES Cafe&Bar",
      address: "Yoshimoto Building, 1F, 2-chōme-3-21 Nishishinsaibashi, Chuo Ward, Osaka, 542-0086, Japan",
      city: "Osaka",
      notes:
        "SLICES Cafe&Bar er en kanadisk-eid bar og pizzarestaurant i Osaka Shinsaibashi Ame-mura. De tilbyr håndlagde veganske retter både i nettbutikken og i restauranten. Menyen inkluderer ulike kanadiske retter som pizza og hamburgere, alt laget med stor omsorg og fokus på helse.",
      lat: 34.6705,
      lng: 135.4972,
      menuItems: [
        { japanese: "ピザ", translation: "Pizza" },
        { japanese: "ナチョス", translation: "Nachos" },
        { japanese: "フライドポテト", translation: "Pommes frites" },
      ],
    },
    {
      name: "OKOTAKO Vegan Vegetarian Glutenfree Takoyaki",
      address: "1-chōme−13−9 Higashishinsaibashi, Chuo Ward, Osaka, 542-0083, Japan (2. etasje)",
      city: "Osaka",
      notes:
        "OKOTAKO er en liten og dedikert glutenfri takoyaki-bar i hjertet av Shinsaibashi. Her får du veganske og vegetariske versjoner av den klassiske Osaka-gatereffen takoyaki – helt uten gluten og animalske ingredienser. En trygg mulighet for cøliakere som vil prøve tradisjonell soul food.",
      lat: 34.6714,
      lng: 135.5043,
      menuItems: [
        { japanese: "たこ焼き", translation: "Takoyaki" },
        { japanese: "ビール", translation: "Glutenfritt øl" },
        { japanese: "フライドポテト", translation: "Pommes frites" },
      ],
    },
    {
      name: "HACCHABOOTH",
      address: "3-chōme−1−27 Kyūtarōmachi, Chuo Ward, Osaka, 541-0056, Japan (Higuchi Building 1F, HUB KITCHEN)",
      city: "Osaka",
      notes:
        "HACCHABOOTH er en dedikert glutenfri og vegansk creperie som har fått oppmerksomhet for sine deilige desserter og crêpes. Ligger i et kollektivt kjøkkenlokale, HUB KITCHEN, og er populær blant både lokale og reisende cøliakere.",
      lat: 34.6832,
      lng: 135.5042,
      menuItems: [
        { japanese: "デザート", translation: "Desserter" },
        { japanese: "クレープ", translation: "Crêpes" },
      ],
    },
    {
      name: "OSAKA ENGINE",
      address: "2-chōme−2−15 Azuchimachi, Chuo Ward, Osaka, 541-0052, Japan (Houser Sakaisuji Honmachi Ekimae Bldg 1F)",
      city: "Osaka",
      notes:
        "OSAKA ENGINE er en moderne ramenrestaurant som tilbyr glutenfri ramen og øl. Lokalet har en stilren og minimalistisk stil, og personalet har god kunnskap om cøliaki og krysskontaminasjon. Et trygt valg for deg som savner en ekte ramen-opplevelse uten gluten.",
      lat: 34.6839,
      lng: 135.5055,
      menuItems: [
        { japanese: "ラーメン", translation: "Ramen" },
        { japanese: "ビール", translation: "Glutenfritt øl" },
        { japanese: "グルテンリデュースビール", translation: "Glutenredusert øl" },
      ],
    },
  ],
  Kyoto: [
    {
      name: "Gion Soy Milk Ramen",
      address: "40 Kamei-chō, Higashiyama-ku, Kyoto (i Gion-området)",
      city: "Kyoto",
      notes:
        "Kyotos (og muligens hele Japans) eneste dedikerte 100% glutenfrie ramen-restaurant. Også hel-vegansk. Du kan nyte flere varianter av ramen (basert på soyamelk), glutenfri gyoza, soyakroketter og til og med glutenfri dessert. Svært populært, så kom tidlig eller vær forberedt på å stå i kø.",
      lat: 35.0037,
      lng: 135.778,
      menuItems: [
        { japanese: "豆乳ラーメン", translation: "Soyamelk-ramen" },
        { japanese: "グルテンフリー餃子", translation: "Glutenfri gyoza" },
      ],
    },
    {
      name: "Kyoto Engine Ramen",
      address: "Kawaramachi/Shinkyogoku-området, Kyoto",
      city: "Kyoto",
      notes:
        "Moderne ramen-restaurant kjent for glutenfrie nudler. Eierens datter har cøliaki. Nudler laget av f.eks. soyabønner eller konjakrot, og disse kokes i en egen seksjon av kjelen for å unngå krysskontaminering. Får strålende omtaler.",
      lat: 35.0056,
      lng: 135.7681,
      menuItems: [
        { japanese: "ゼスティースパイシーラーメン", translation: "Zesty Spicy Ramen" },
        { japanese: "こんにゃく麺", translation: "Konjaknudler" },
      ],
    },
    {
      name: "Kikyo Sushi",
      address: "Daimonji-cho 43-2, Nakagyō-ku, Kyoto",
      city: "Kyoto",
      notes:
        "Autentisk, familiedrevet sushi-restaurant (over 60 år gammel) med glutenfri forståelse. Tilbyr glutenfri soyasaus og unngår ingredienser som inneholder gluten. Mange regner dette som en av de beste sushi-opplevelsene i Kyoto. Reservasjon anbefales, og oppgi gjerne at du trenger glutenfri tilpasning når du booker.",
      lat: 35.0116,
      lng: 135.756,
      menuItems: [
        { japanese: "刺身盛り合わせ", translation: "Sashimi-utvalg" },
        { japanese: "グルテンフリー醤油", translation: "Glutenfri soyasaus" },
      ],
    },
    {
      name: "Teuchi Toru Soba",
      address: "Matsuyachō 35-1, Nakagyō-ku, Kyoto (nær Kyoto Gyoen/nord for sentrum)",
      city: "Kyoto",
      notes:
        "Bitteliten, autentisk soba-restaurant drevet av én mann (Toru) som gjør alt selv. Alle sobanudlene er 100% bokhvete (juwari soba) og dermed naturlig glutenfrie. Toru-san er svært kunnskapsrik om cøliaki og garanterer glutenfrihet ved å kjøpe og male bokhveten selv. Han har glutenfri soyasaus tilgjengelig. Kun lunsjåpent og tar ikke reservasjoner, så du må regne med ca. 30 min kø.",
      lat: 35.0216,
      lng: 135.7631,
      menuItems: [
        { japanese: "十割蕎麦", translation: "Juwari soba (100% bokhvetenudler)" },
        { japanese: "グルテンフリー醤油", translation: "Glutenfri soyasaus" },
      ],
    },
    {
      name: "Yosiya",
      address: "Sagatenryuji Tsukurimichicho 31, Ukyo-ku, Kyoto (Arashiyama)",
      city: "Kyoto",
      notes:
        "Tradisjonell restaurant i idylliske Arashiyama som er både halal-orientert og cøliaki-vennlig. Kjent for at de kan tilberede glutenfri tempura. Med forhåndsreservasjon kan man bestille et eget glutenfritt kaiseki-inspirert settmeny. Restauranten ligger i en vakker hage. NB: Få gjerne en japansktalende til å ringe og ordne reservasjon.",
      lat: 35.0176,
      lng: 135.6781,
      menuItems: [
        { japanese: "グルテンフリー天ぷら", translation: "Glutenfri tempura" },
        { japanese: "グルテンフリー会席", translation: "Glutenfri kaiseki-meny" },
      ],
    },
    {
      name: "waco crepes",
      address: "6-chōme-355-1 Miyagawasuji, Higashiyama Ward, Kyoto, 605-0801, Japan",
      city: "Kyoto",
      notes:
        "waco crepes er en dedikert glutenfri og vegansk crêperie som ligger i det historiske Miyagawa-chō-distriktet i Kyoto. De tilbyr et bredt utvalg av søte og salte crêpes laget med økologisk rismel og soyamelk. Kaféen er kjent for sine kreative kombinasjoner og bruker ferske, økologiske ingredienser. Hver crêpe serveres med en liten personlig melding, noe som gir en unik opplevelse for gjestene. I tillegg til crêpes tilbyr de også glutenfritt øl, iskrem og pannekaker. Åpningstider: Mandag, tirsdag, torsdag, fredag, lørdag: 10:00–13:30 og 14:30–17:00. Søndag og onsdag: Stengt.",
      lat: 34.9973,
      lng: 135.772,
      menuItems: [
        { japanese: "クレープ", translation: "Crêpes" },
        { japanese: "デザート", translation: "Desserter" },
      ],
    },
    {
      name: "CHOICE",
      address: "89-1 Ohashi-chō, Higashiyama-ku, Kyoto, 605-0009, Japan",
      city: "Kyoto",
      notes:
        "CHOICE er en helvegansk og glutenfri kafé og restaurant i Kyoto, kjent for sitt fokus på helse og skjønnhet. De bruker ikke animalske produkter eller glutenholdige ingredienser som hvete, bygg, havre eller rug. Menyen inkluderer fermentert vegansk ost, grønnsaksburgere, supper, brun ris-risotto, økologisk pasta, quiche, pannekaker, rå kaker, smoothies og varme drikker. Åpningstider: Mandag–Tirsdag: 09:30–15:00, 17:00–20:00. Onsdag: Stengt. Torsdag–Søndag: 09:30–15:00, 17:00–20:00.",
      lat: 35.0085,
      lng: 135.775,
      menuItems: [
        { japanese: "ピザ", translation: "Pizza" },
        { japanese: "デザート", translation: "Desserter" },
      ],
    },
    {
      name: "Koma Gallery Cafe",
      address: "401 Kinenchō, Higashiyama Ward, Kyoto, 605-0828, Japan",
      city: "Kyoto",
      notes:
        "Koma Gallery Cafe er en dedikert glutenfri kafé som tilbyr et utvalg av smørbrød, brød, kaker, desserter og bakverk. Kaféen er kjent for sin avslappede og klassiske atmosfære, med vennlig personale som snakker engelsk. Den ligger i nærheten av Gion Shijo stasjon, omtrent 821 meter unna. Åpningstider: Mandag, tirsdag, torsdag, fredag, lørdag, søndag: 10:00–19:00. Onsdag: Stengt.",
      lat: 35.003,
      lng: 135.7788,
      menuItems: [
        { japanese: "パン", translation: "Brød/Boller" },
        { japanese: "ケーキ", translation: "Kaker" },
      ],
    },
    {
      name: "Cafe Planet",
      address: "447-5 Kajiichō, Kamigyo Ward, Kyoto, 602-0841, Japan",
      city: "Kyoto",
      notes:
        "Cafe Planet er en dedikert glutenfri og vegansk restaurant i Kyoto. Tidligere gjester har uttrykt at de følte seg helt trygge på å spise her som cøliakere. Restauranten tilbyr et variert utvalg av glutenfrie alternativer, inkludert pizza, kaker, suppe, pasta og kjeks.",
      lat: 35.0301,
      lng: 135.7536,
      menuItems: [
        { japanese: "ピザ", translation: "Pizza" },
        { japanese: "ケーキ", translation: "Kaker" },
        { japanese: "パスタ", translation: "Pasta" },
      ],
    },
    {
      name: "Mushiyashinai",
      address: "78 Ichijōji Satononishichō, Sakyo Ward, Kyoto, 606-8115, Japan",
      city: "Kyoto",
      notes:
        "Mushiyashinai er et dedikert glutenfritt bakeri i Kyoto. Selv om det ligger litt utenfor allfarvei, er det et must for cøliakere med søt tann. Bakeriet tilbyr et bredt utvalg av glutenfrie desserter, kaker, kjeks, curry og til og med glutenfritt øl.",
      lat: 35.0482,
      lng: 135.7812,
      menuItems: [
        { japanese: "デザート", translation: "Desserter" },
        { japanese: "ケーキ", translation: "Kaker" },
        { japanese: "クッキー", translation: "Kjeks" },
      ],
    },
    {
      name: "Okomeya Cafe",
      address: "36 Higashikujō Ishidachō, Minami Ward, Kyoto, 601-8032, Japan",
      city: "Kyoto",
      notes:
        "Okomeya Cafe er en liten, koselig kafé som er 100% glutenfri. De spesialiserer seg på chiffonkaker og chiffonrusk laget av rismel. Kaféen tilbyr også andre glutenfrie alternativer som desserter, øl og brød/boller.",
      lat: 34.9752,
      lng: 135.7584,
      menuItems: [
        { japanese: "ケーキ", translation: "Kaker" },
        { japanese: "デザート", translation: "Desserter" },
        { japanese: "パン", translation: "Brød/Boller" },
      ],
    },
    {
      name: "Musubi-an",
      address: "51 Arashiyama Nakaoshitachō, Nishikyo Ward, Kyoto, 616-0004, Japan",
      city: "Kyoto",
      notes:
        "Musubi-an er et dedikert glutenfritt og vegansk bakeri i Arashiyama-området i Kyoto. De tilbyr mange alternativer for desserter, og alt er vegansk og glutenfritt. Bakeriet har et bredt utvalg av kaker, desserter, kjeks, kjeks, terter og mer.",
      lat: 35.0176,
      lng: 135.6781,
      menuItems: [
        { japanese: "ケーキ", translation: "Kaker" },
        { japanese: "デザート", translation: "Desserter" },
        { japanese: "クッキー", translation: "Kjeks" },
      ],
    },
    {
      name: "Toshoan",
      address: "709, ShimohachimonjichoNakagyo-Ku, Kyoto-Shi, KyotoJapan 604-8333",
      city: "Kyoto",
      notes:
        "Toshoan er et dedikert glutenfritt bakeri i Kyoto. Hele stedet er glutenfritt, men vær oppmerksom på at det kan være krysskontakt på produksjonslinjer for miyako monaka-søtsaken. Bakeriet tilbyr et bredt utvalg av glutenfrie desserter, inkludert pannekaker, kjeks, kremboller og bakverk.",
      lat: 35.0072,
      lng: 135.7612,
      menuItems: [
        { japanese: "パンケーキ", translation: "Pannekaker" },
        { japanese: "デザート", translation: "Desserter" },
        { japanese: "クッキー", translation: "Kjeks" },
      ],
    },
    {
      name: "Gion Soy Milk Ramen Uno Yokiko",
      address: "40 Kameichō, Higashiyama Ward, Kyoto, 605-0803, Japan",
      city: "Kyoto",
      notes:
        "Gion Soy Milk Ramen Uno Yokiko er en dedikert glutenfri vegansk restaurant i Kyoto. Restauranten har et bredt utvalg av retter, og alle er 100% glutenfrie, noe som gjør det til et trygt valg for cøliakere. Menyen inkluderer ramen, dumplings, kaker, desserter og kjeks.",
      lat: 35.0037,
      lng: 135.7781,
      menuItems: [
        { japanese: "ラーメン", translation: "Ramen" },
        { japanese: "餃子", translation: "Dumplings" },
        { japanese: "ケーキ", translation: "Kaker" },
      ],
    },
    {
      name: "Ikkakuju Karasuma",
      address: "Japan, 〒600-8092 Kyoto, Shimogyo Ward, Shinmeichō, ２４８ グラン・ジュール綾⼩路",
      city: "Kyoto",
      notes:
        "Ikkakuju Karasuma er en dedikert glutenfri japansk restaurant i Kyoto. Som en restaurant som forstår cøliaki, tilbyr de et trygt miljø for de med glutenintoleranse. Menyen inkluderer glutenfri soyasaus, biff, tofu, wok og suppe.",
      lat: 35.0025,
      lng: 135.7587,
      menuItems: [
        { japanese: "醤油", translation: "Soyasaus" },
        { japanese: "ステーキ", translation: "Biff" },
        { japanese: "豆腐", translation: "Tofu" },
      ],
    },
    {
      name: "Cafe & Bar Maru ＠恵花 Gluten free",
      address: "Japan, 〒600-8012 Kyoto, Shimogyo Ward, Saitōchō, １２３ RAKUAS⽊屋町 ３F 600-8012",
      city: "Kyoto",
      notes:
        "Cafe & Bar Maru er en sjarmerende dedikert glutenfri kafé og bar i Kyoto. De tilbyr et bredt utvalg av glutenfrie alternativer, inkludert fritert kylling, desserter, glutenfritt øl, curry og pommes frites.",
      lat: 35.0042,
      lng: 135.7685,
      menuItems: [
        { japanese: "唐揚げ", translation: "Fritert kylling" },
        { japanese: "デザート", translation: "Desserter" },
        { japanese: "ビール", translation: "Glutenfritt øl" },
      ],
    },
    {
      name: "Kyoto Italian Kappa",
      address: "Japan, 〒600-8094 Kyoto, Shimogyo Ward, Bukkōji Nishimachi, ３５２ 瑞晃ビル ２F",
      city: "Kyoto",
      notes:
        "Kyoto Italian Kappa er en fantastisk dedikert glutenfri italiensk restaurant i Kyoto. De tilbyr et bredt utvalg av glutenfrie italienske retter, inkludert pasta, brød, focaccia, tiramisu og suppe.",
      lat: 35.0018,
      lng: 135.7598,
      menuItems: [
        { japanese: "パスタ", translation: "Pasta" },
        { japanese: "パン", translation: "Brød" },
        { japanese: "ティラミス", translation: "Tiramisu" },
      ],
    },
    {
      name: "Yak & Yeti",
      address: "403-2 Dainichichō, Nakagyō-ku, Kyoto, 604-8044, Japan",
      city: "Kyoto",
      notes:
        "Yak & Yeti er en dedikert glutenfri japansk restaurant i Kyoto. Personalet snakker utmerket engelsk og forstår helt hva glutenfri og cøliakisikker mat er. De tilbyr glutenfri curry som er trygg for cøliakere.",
      lat: 35.0112,
      lng: 135.7598,
      menuItems: [{ japanese: "カレー", translation: "Curry" }],
    },
    {
      name: "京都もち粉チキン専⾨店 LOCO CHICKEN",
      address: "Japan, 〒600-8018 Kyoto, Shimogyo Ward, Ichinochō, ２５３−１ 河原町会館 101 600-",
      city: "Kyoto",
      notes:
        "LOCO CHICKEN er en dedikert glutenfri restaurant i Kyoto som spesialiserer seg på fritert kylling laget med rismel. For nylig diagnostiserte cøliakere som tidligere mislikte glutenfrie produkter, er dette en fantastisk opplevelse. Menyen inkluderer fritert kylling, pommes frites, burgere, kyllingburgere og tacos.",
      lat: 35.0042,
      lng: 135.7685,
      menuItems: [
        { japanese: "唐揚げ", translation: "Fritert kylling" },
        { japanese: "フライドポテト", translation: "Pommes frites" },
        { japanese: "バーガー", translation: "Burgere" },
      ],
    },
    {
      name: "Sushi Naritaya",
      address: "Japan, 〒616-8385 Kyoto, Ukyo Ward, Sagatenryūji Susukinobabachō, 嵯峨天⿓寺芒ノ⾺場",
      city: "Kyoto",
      notes:
        "Sushi Naritaya er en dedikert glutenfri sushirestaurant i Kyoto. Når du sier 'glutenfri', forstår personalet og peker på alt på menyen som ikke er glutenfritt. De tilbyr glutenfri sushi, soyasaus og sashimi.",
      lat: 35.0176,
      lng: 135.6781,
      menuItems: [
        { japanese: "寿司", translation: "Sushi" },
        { japanese: "醤油", translation: "Soyasaus" },
        { japanese: "刺身", translation: "Sashimi" },
      ],
    },
    {
      name: "Sushi Kizaemon",
      address: "Japan, 〒604-8015 Kyoto, Nakagyo Ward, Nabeyachō, ２２０ FORUM⽊屋町/先⽃町 1F-CD",
      city: "Kyoto",
      notes:
        "Sushi Kizaemon er en dedikert glutenfri sushirestaurant i Kyoto. Hele selskapet var cøliakere (inkludert barn) og alle var fine. De tilbyr glutenfri sushi, soyasaus og desserter.",
      lat: 35.0072,
      lng: 135.7685,
      menuItems: [
        { japanese: "寿司", translation: "Sushi" },
        { japanese: "醤油", translation: "Soyasaus" },
        { japanese: "デザート", translation: "Desserter" },
      ],
    },
    {
      name: "MOON and BACK Ramen Bar & Brunch Cafe",
      address: "585 Takamiyachō, Nakagyo Ward, Kyoto, 604-8056, Japan",
      city: "Kyoto",
      notes:
        "MOON and BACK Ramen Bar & Brunch Cafe er en dedikert glutenfri ramenrestaurant i Kyoto. En person med cøliaki spiste ramen her i Kyoto to dager på rad uten problemer. De tilbyr glutenfri ramen, nudler, ostekake, dumplings og soyasaus.",
      lat: 35.0112,
      lng: 135.7598,
      menuItems: [
        { japanese: "ラーメン", translation: "Ramen" },
        { japanese: "麺", translation: "Nudler" },
        { japanese: "チーズケーキ", translation: "Ostekake" },
      ],
    },
    {
      name: "Kerala Indian Restaurant",
      address: "Japan, 〒604-8006 Kyoto, Nakagyo Ward, Shimomaruyachō, KUSビル 2F",
      city: "Kyoto",
      notes:
        "Kerala Indian Restaurant er en dedikert glutenfri indisk restaurant i Kyoto. Alle curryretter er glutenfrie, og personalet sørget for å holde nanbrødet borte fra datteren som har cøliaki. De tilbyr glutenfri butter chicken.",
      lat: 35.0072,
      lng: 135.7685,
      menuItems: [{ japanese: "バターチキン", translation: "Butter Chicken" }],
    },
    {
      name: "Kurozakura",
      address: "10-1 Higashikujō Higashisannōchō, Minami Ward, Kyoto, 601-8004, Japan",
      city: "Kyoto",
      notes:
        "Kurozakura er en dedikert glutenfri japansk restaurant i Kyoto. De har god forståelse av cøliaki og glutenfri mat. Deilig mat og flott opplevelse. De tilbyr glutenfrie biffribber.",
      lat: 34.9752,
      lng: 135.7584,
      menuItems: [{ japanese: "牛肉のリブ", translation: "Biff Ribber" }],
    },
    {
      name: "Kiyomizu Kyoami",
      address: "1-chōme-262-2 Kiyomizu, Higashiyama Ward, Kyoto, 605-0862, Japan",
      city: "Kyoto",
      notes:
        "Kiyomizu Kyoami er en dedikert glutenfri dessertbutikk i Kyoto. De har virkelig gode glutenfrie kremboller, både matcha og vanilje, og begge var fantastiske. De tilbyr også glutenfrie kanelboller og andre desserter.",
      lat: 34.9973,
      lng: 135.7788,
      menuItems: [
        { japanese: "シュークリーム", translation: "Kremboller" },
        { japanese: "シナモンロール", translation: "Kanelboller" },
        { japanese: "デザート", translation: "Desserter" },
      ],
    },
    {
      name: "MR. MAURICEʼS ITALIAN Restaurant & Rooftop Bar",
      address: "Japan, 〒604-8185 Kyoto, Nakagyo Ward, Kurumayachō, ２４５−２ エースホテル京都 三階",
      city: "Kyoto",
      notes:
        "MR. MAURICEʼS ITALIAN Restaurant & Rooftop Bar er en dedikert glutenfri italiensk restaurant i Kyoto. Oppmerksomheten var flott og spurte om vi var cøliakere eller bare unngikk gluten. De tilbyr glutenfri pasta, salat, dessert og biff.",
      lat: 35.0072,
      lng: 135.7685,
      menuItems: [
        { japanese: "パスタ", translation: "Pasta" },
        { japanese: "サラダ", translation: "Salat" },
        { japanese: "デザート", translation: "Dessert" },
      ],
    },
    {
      name: "Premarché Alternative Diner",
      address: "Japan, 〒604-8332 Kyoto, Nakagyo Ward, Hashinishichō, ６７２ 2F",
      city: "Kyoto",
      notes:
        "Premarché Alternative Diner er en dedikert glutenfri restaurant i Kyoto. Mange glutenfrie alternativer som risbowler, burgere (med ris i stedet for brød) og falafelsalat er merket på menyen. De tilbyr glutenfri falafel, desserter, kaker, risbowler og pommes frites.",
      lat: 35.0112,
      lng: 135.7598,
      menuItems: [
        { japanese: "ファラフェル", translation: "Falafel" },
        { japanese: "デザート", translation: "Desserter" },
        { japanese: "ケーキ", translation: "Kaker" },
      ],
    },
    {
      name: "Napule Pizza Kyoto Gion",
      address: "Japan, 〒605-0086 Kyoto, Higashiyama Ward, Benzaitenchō, ４−４ 1F",
      city: "Kyoto",
      notes:
        "Napule Pizza Kyoto Gion er en dedikert glutenfri italiensk restaurant i Kyoto. Alle pastaretter kan lages med glutenfri spaghetti, og servitørene og kokken forstår risikoen for krysskontaminering ved cøliaki. De tilbyr glutenfri pasta og salat.",
      lat: 35.0037,
      lng: 135.7788,
      menuItems: [
        { japanese: "パスタ", translation: "Pasta" },
        { japanese: "サラダ", translation: "Salat" },
      ],
    },
    {
      name: "Menbaka Fire Ramen",
      address: "757-2 Minamiiseyachō, Kamigyo Ward, Kyoto, 602-8153, Japan",
      city: "Kyoto",
      notes:
        "Menbaka Fire Ramen er en dedikert glutenfri ramenrestaurant i Kyoto. De tilrettelegger for glutenfri mat - ingen glutenfri meny, men de laget glutenfri gyoza, rengjorde alle redskaper og brukte en ny frityrkoker. De tilbyr glutenfri soyasaus, ramen, stekt ris, dumplings og suppe.",
      lat: 35.0301,
      lng: 135.7536,
      menuItems: [
        { japanese: "醤油", translation: "Soyasaus" },
        { japanese: "ラーメン", translation: "Ramen" },
        { japanese: "チャーハン", translation: "Stekt ris" },
      ],
    },
    {
      name: "Teppan Tavern Tenamonya",
      address: "Japan, 〒605-0074 Kyoto, Higashiyama Ward, Gionmachi Minamigawa, ５３７−２ B1F 605-0074",
      city: "Kyoto",
      notes:
        "Teppan Tavern Tenamonya er en dedikert glutenfri restaurant i Kyoto. De har god kunnskap om cøliakisikker tilberedning og forebygging av krysskontakt, og krever at cøliakere er dagens første måltid for å sikre et trygt miljø. De tilbyr glutenfri tempura, salat og dumplings.",
      lat: 35.0037,
      lng: 135.7788,
      menuItems: [
        { japanese: "天ぷら", translation: "Tempura" },
        { japanese: "サラダ", translation: "Salat" },
        { japanese: "餃子", translation: "Dumplings" },
      ],
    },
    {
      name: "Ramen Kazu",
      address: "Kyoto, Japan",
      city: "Kyoto",
      notes:
        "Ramen Kazu er en dedikert glutenfri ramenrestaurant i Kyoto. Glutenfrie alternativer finnes på en ekstra meny til rimelige priser. De tilbyr glutenfrie nudler, ramen, dumplings, suppe og fritert kylling.",
      lat: 35.0112,
      lng: 135.7598,
      menuItems: [
        { japanese: "麺", translation: "Nudler" },
        { japanese: "ラーメン", translation: "Ramen" },
        { japanese: "餃子", translation: "Dumplings" },
      ],
    },
    {
      name: "Kobe Beef Steak Mouriya Gion",
      address: "Japan, 〒605-0802 Kyoto, Higashiyama Ward, Yamatochō, ７−１ 祇園モーリヤビル １階と２階・4",
      city: "Kyoto",
      notes:
        "Kobe Beef Steak Mouriya Gion er en dedikert glutenfri steakhouse i Kyoto. Personalet var godt informert om cøliaki og serverte hver rett ved å si at den er glutenfri. De tilbyr glutenfri Kobe-biff.",
      lat: 35.0037,
      lng: 135.7788,
      menuItems: [{ japanese: "神戸牛", translation: "Kobe-biff" }],
    },
    {
      name: "IKARIYA BEIKA",
      address: "166-1 Maruyachō, Nakagyo Ward, Kyoto, 604-8132, Japan",
      city: "Kyoto",
      notes:
        "IKARIYA BEIKA er et dedikert glutenfritt bakeri i Kyoto. Det kan bekreftes at kakene er glutenfrie. De tilbyr glutenfrie kaker og desserter.",
      lat: 35.0072,
      lng: 135.7685,
      menuItems: [
        { japanese: "ケーキ", translation: "Kaker" },
        { japanese: "デザート", translation: "Desserter" },
      ],
    },
    {
      name: "Karasuma Rock",
      address: "191 Kitamachi, Shimogyo Ward, Kyoto, 600-8176, Japan",
      city: "Kyoto",
      notes:
        "Karasuma Rock er en dedikert glutenfri japansk restaurant i Kyoto. En partner med cøliaki informerte personalet, og de tok hensyn til dette. De tilbyr glutenfrie japanske retter.",
      lat: 35.0025,
      lng: 135.7587,
      menuItems: [{ japanese: "和食", translation: "Japanske retter" }],
    },
  ],
  Tokyo: [
    {
      name: "Gluten Free T's Kitchen",
      address: "1-25-5 Atago, Minato Ward, Tokyo 105-0002",
      city: "Tokyo",
      notes:
        "100% glutenfri restaurant (GIG-sertifisert), trolig den mest kjente glutenfrie restauranten i hele Japan. Var den første glutenfrie restauranten i Asia sertifisert av Gluten Intolerance Group.",
      lat: 35.6603,
      lng: 139.7511,
      menuItems: [
        { japanese: "天ぷら", translation: "Tempura" },
        { japanese: "お好み焼き", translation: "Okonomiyaki" },
      ],
    },
    {
      name: "Gluten Free Café Little Bird",
      address: "1-1-20 Uehara, Shibuya, Tokyo",
      city: "Tokyo",
      notes:
        "Helt glutenfritt spisested i Shibuya-området. Spesielt kjent for å servere retter som ellers er vanskelig å finne uten gluten – burgere, pizza, ramen, crêpes, karaage (fritert kylling), tempura, osv. Regnes som et av de tryggeste stedene for cøliakere i Tokyo (ingen risiko for krysskontaminering).",
      lat: 35.6697,
      lng: 139.6799,
      menuItems: [
        { japanese: "唐揚げ", translation: "Karaage (fritert kylling)" },
        { japanese: "グルテンフリーピザ", translation: "Glutenfri pizza" },
      ],
    },
    {
      name: "Soranoiro Nippon",
      address: "Tokyo Ramen Street, Tokyo Station",
      city: "Tokyo",
      notes:
        "Anerkjent ramen-restaurant på Tokyo Ramen Street (Tokyo stasjon) som tilbyr en egen glutenfri shio-ramen laget med brunris-nudler. Både suppen og ingrediensene i denne retten er glutenfrie. Be om at de koker nudlene i en separat gryte for å unngå spor av hvete. Merk at dette er den eneste glutenfrie retten på menyen her.",
      lat: 35.6812,
      lng: 139.7671,
      menuItems: [
        { japanese: "グルテンフリー塩ラーメン", translation: "Glutenfri shio-ramen" },
        { japanese: "玄米麺", translation: "Brunrisnudler" },
      ],
    },
    {
      name: "Shinbusakiya",
      address: "Shibuya, Tokyo (ca. 7 min gange fra Shibuya stasjon)",
      city: "Tokyo",
      notes:
        "Miso-ramen spesialist i Shibuya med glutenfrie alternativer. Velg brunrisnudler i stedet for vanlige nudler. De tilbyr også glutenfri gyoza (dumplings) og karaage (fritert kylling). NB: Noen av de andre ramenvariantene har ingredienser med hvete.",
      lat: 35.658,
      lng: 139.7016,
      menuItems: [
        { japanese: "玄米麺みそラーメン", translation: "Miso-ramen med brunrisnudler" },
        { japanese: "グルテンフリー餃子", translation: "Glutenfri gyoza (dumplings)" },
      ],
    },
    {
      name: "Gluten Free Kushiage Sû",
      address: "8-15-2 Ginza, Chūō-ku, Tokyo (nær Tsukijishijō stasjon)",
      city: "Tokyo",
      notes:
        "Liten spesialrestaurant i Ginza som utelukkende serverer glutenfri kushiage (kushikatsu) – forskjellige ingredienser panert og fritert på spidd. Omakase-smaksmeny bestående av et utvalg glutenfrie frityrspyd med forretter og dessert. Kun 8 sitteplasser og tar kun imot gjester med reservasjon.",
      lat: 35.6694,
      lng: 139.7649,
      menuItems: [
        { japanese: "グルテンフリー串揚げ", translation: "Glutenfri kushiage (frityrspyd)" },
        { japanese: "おまかせコース", translation: "Omakase-meny (smaksmeny)" },
      ],
    },
    {
      name: "Esoragoto Udon",
      address: "3-chōme-27-3 Jingūmae, Shibuya City, Tokyo 150-0001, Japan",
      city: "Tokyo",
      notes:
        "Dedikert glutenfri japansk restaurant som tilbyr den beste nudelopplevelsen for cøliakere. Restauranten har fått strålende omtaler for sine autentiske japanske nudler som er helt glutenfrie, og mange beskriver det som den beste nudelopplevelsen de har hatt både før og etter cøliaki-diagnose.",
      lat: 35.6705,
      lng: 139.7058,
      menuItems: [
        { japanese: "麺類", translation: "Nudler" },
        { japanese: "スープ", translation: "Suppe" },
        { japanese: "天ぷら", translation: "Tempura" },
      ],
    },
    {
      name: "RICEHACK GlutenfreeBakery／ONDEN House",
      address: "5-chōme-16-5 Jingūmae, Shibuya City, Tokyo 150-0001, Japan",
      city: "Tokyo",
      notes:
        "Dedikert glutenfritt bakeri i Shibuya som spesialiserer seg på glutenfrie bakevarer laget av rismel. De tilbyr et bredt utvalg av glutenfrie alternativer, inkludert pizza, brød, muffins, baguetter og desserter. Perfekt for cøliakere som ønsker å nyte bakevarer uten bekymringer for krysskontaminering.",
      lat: 35.6674,
      lng: 139.7061,
      menuItems: [
        { japanese: "ピザ", translation: "Pizza" },
        { japanese: "パン", translation: "Brød" },
        { japanese: "マフィン", translation: "Muffins" },
      ],
    },
    {
      name: "Cafe Komaya - gluten free cafe",
      address: "Japan, 〒106-0032 Tokyo, Minato City, Roppongi, 3-chōme−4−１６ IDAＫＩビル 1F",
      city: "Tokyo",
      notes:
        "Dedikert glutenfri kafé i Roppongi som er populær blant både lokale og turister med cøliaki. Kaféen tilbyr et bredt utvalg av glutenfrie alternativer, inkludert kaker, salater, pizza, brød og curry. Tidligere gjester har rost stedet for dets deilige mat og gode service, og det er et trygt valg for familier med barn som har cøliaki.",
      lat: 35.6645,
      lng: 139.7333,
      menuItems: [
        { japanese: "ケーキ", translation: "Kaker" },
        { japanese: "サラダ", translation: "Salat" },
        { japanese: "ピザ", translation: "Pizza" },
      ],
    },
    {
      name: "biossa",
      address: "2-chōme-10-19 Kasuga, Bunkyo City, Tokyo 112-0003, Japan",
      city: "Tokyo",
      notes:
        "Dedikert glutenfritt bakeri i Bunkyo City som er helt trygt for cøliakere, uten risiko for krysskontaminering. De tilbyr et utvalg av glutenfrie bakevarer, inkludert brød, kaker, muffins og desserter. Et perfekt sted å stoppe for å få med seg noen glutenfrie godbiter på veien.",
      lat: 35.708,
      lng: 139.7516,
      menuItems: [
        { japanese: "パン", translation: "Brød" },
        { japanese: "ケーキ", translation: "Kaker" },
        { japanese: "マフィン", translation: "Muffins" },
      ],
    },
    {
      name: "⽞点 (Gentenglutenfree)",
      address: "Japan, 〒150-0002 Tokyo, Shibuya, 2-chōme−24, 渋⾕区渋⾕２丁⽬２４−１２ 渋⾕スクランブルス",
      city: "Tokyo",
      notes:
        "100% glutenfri butikk i Shibuya Scramble (i kjelleren B2). De spesialiserer seg på glutenfrie produkter laget av brunris og tilbyr et bredt utvalg av bakevarer, inkludert brød, kjeks, bakverk, desserter og kaker. En skjult perle for cøliakere som besøker Tokyo.",
      lat: 35.6594,
      lng: 139.7005,
      menuItems: [
        { japanese: "パン", translation: "Brød" },
        { japanese: "クッキー", translation: "Kjeks" },
        { japanese: "ケーキ", translation: "Kaker" },
      ],
    },
    {
      name: "NachuRa Gluten Free Cafe",
      address: "Japan, 〒151-0063 Tokyo, Shibuya City, Tomigaya, 1-chōme−17−７ 第⼆⼭栄ビル １階 151-",
      city: "Tokyo",
      notes:
        "Dedikert glutenfri kafé og dessertbutikk i Shibuya. Alt lages foran deg, og de tilbyr et bredt utvalg av glutenfrie desserter, inkludert kaker, ostekake, kjeks og kremboller. Et perfekt sted for cøliakere med søt tann.",
      lat: 35.6689,
      lng: 139.6855,
      menuItems: [
        { japanese: "デザート", translation: "Desserter" },
        { japanese: "ケーキ", translation: "Kaker" },
        { japanese: "チーズケーキ", translation: "Ostekake" },
      ],
    },
    {
      name: "ミラーケーキストア (Mirror Cake Store)",
      address: "Japan, 〒153-0042 Tokyo, Meguro City, Aobadai, 1-chōme−28−９ タイガーマンション 201",
      city: "Tokyo",
      notes:
        "Dedikert glutenfritt bakeri og kafé i Meguro City. De tilbyr noen av de beste glutenfrie bakevarer siden cøliaki-diagnose, ifølge tidligere gjester. Menyen inkluderer croissanter, kaker, kanelboller, kjeks og cupcakes, alt glutenfritt og laget med kjærlighet.",
      lat: 35.6546,
      lng: 139.6936,
      menuItems: [
        { japanese: "クロワッサン", translation: "Croissanter" },
        { japanese: "ケーキ", translation: "Kaker" },
        { japanese: "シナモンロール", translation: "Kanelboller" },
      ],
    },
    {
      name: "Shimbu Sakiya Ramen",
      address: "2-chōme-10-１０番３号 Dōgenzaka, Shibuya City, Tōkyō-to 150-0043, Japan",
      city: "Tokyo",
      notes:
        "Dedikert glutenfri ramenrestaurant i Shibuya. Ramenen er virkelig god og smakfull, og regnes som en av de beste i Japan. Det er verdt å nevne for personalet at du er cøliaker for å sikre at de tar ekstra forholdsregler. De tilbyr glutenfri ramen, dumplings, fritert kylling, nudler og soyasaus.",
      lat: 35.6581,
      lng: 139.6993,
      menuItems: [
        { japanese: "ラーメン", translation: "Ramen" },
        { japanese: "餃子", translation: "Dumplings" },
        { japanese: "唐揚げ", translation: "Fritert kylling" },
      ],
    },
    {
      name: "FANCL BROWN RICE MEALS",
      address: "Japan, 〒104-0061 Tokyo, Chuo City, Ginza, 5-chōme−8−１６ ファンケル 銀座スクエア",
      city: "Tokyo",
      notes:
        "Denne restauranten er helt glutenfri! De tilbyr et bredt utvalg av glutenfrie alternativer, inkludert brød, pasta, risotto, desserter og salater. En trygg havn for cøliakere som besøker Ginza-området i Tokyo.",
      lat: 35.6717,
      lng: 139.7645,
      menuItems: [
        { japanese: "パン", translation: "Brød" },
        { japanese: "パスタ", translation: "Pasta" },
        { japanese: "リゾット", translation: "Risotto" },
      ],
    },
    {
      name: "Shochikuen Cafe",
      address: "2-chōme-7-6 Nishiasakusa, Taito City, Tokyo 111-0035, Japan",
      city: "Tokyo",
      notes:
        "Flott dedikert glutenfri vegansk restaurant i Taito City. De tilbyr et bredt utvalg av glutenfrie og veganske alternativer, inkludert kaker, pizza, desserter, muffins og brød. Et must for cøliakere som også følger en vegansk diett.",
      lat: 35.7142,
      lng: 139.7937,
      menuItems: [
        { japanese: "ケーキ", translation: "Kaker" },
        { japanese: "ピザ", translation: "Pizza" },
        { japanese: "デザート", translation: "Desserter" },
      ],
    },
    {
      name: "Gonpachi Asakusa Azumabashi",
      address: "Japan, 〒111-0034 Tokyo, Taito City, Kaminarimon, 2-chōme−1−１５ 中川ビル １Ｆ２Ｆ",
      city: "Tokyo",
      notes:
        "Spør etter en glutenfri meny hvis du har cøliaki. Restauranten tilbyr glutenfri soyasaus, risbowler, desserter, sushi og tempura. Personalet er kunnskapsrikt om cøliaki og kan hjelpe deg med å velge trygge alternativer.",
      lat: 35.71,
      lng: 139.798,
      menuItems: [
        { japanese: "醤油", translation: "Soyasaus" },
        { japanese: "丼", translation: "Risbowler" },
        { japanese: "寿司", translation: "Sushi" },
      ],
    },
    {
      name: "Fleur de Sarrasin",
      address: "Asakusa, Taito City, Tokyo, Japan",
      city: "Tokyo",
      notes:
        "Som en cøliaker som reiser til Japan for første gang, forventet jeg at glutenfri mat ville være middelmådig i beste fall. Men denne franske restauranten overgikk alle forventninger. De tilbyr glutenfrie galetter, crêpes, desserter, cider og iskrem.",
      lat: 35.7145,
      lng: 139.7925,
      menuItems: [
        { japanese: "ガレット", translation: "Galetter" },
        { japanese: "クレープ", translation: "Crêpes" },
        { japanese: "デザート", translation: "Desserter" },
      ],
    },
    {
      name: "Nabezo Shinjuku Sanchome Store",
      address: "Japan, 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 3-chōme−30−１１ Takano2, 8F 160-",
      city: "Tokyo",
      notes:
        "Personalet var godt informert om cøliaki og krysskontaminering. De tilbyr glutenfri suppe, soyasaus, iskrem og desserter. Et trygt valg for cøliakere som besøker Shinjuku.",
      lat: 35.691,
      lng: 139.7037,
      menuItems: [
        { japanese: "スープ", translation: "Suppe" },
        { japanese: "醤油", translation: "Soyasaus" },
        { japanese: "アイスクリーム", translation: "Iskrem" },
      ],
    },
    {
      name: "Rizlabo Kitchen",
      address: "4-chōme-15-2 Jingūmae, Shibuya-ku, Tōkyō-to 150-0001, Japan",
      city: "Tokyo",
      notes:
        "Dedikert glutenfri pannekakerestaurant i Shibuya. Selv om stedet er dedikert glutenfritt, viste jeg fortsatt mitt oversettelseskort for å være på den sikre siden. De tilbyr glutenfrie pannekaker, desserter, crêpes og iskrem.",
      lat: 35.669,
      lng: 139.707,
      menuItems: [
        { japanese: "パンケーキ", translation: "Pannekaker" },
        { japanese: "デザート", translation: "Desserter" },
        { japanese: "クレープ", translation: "Crêpes" },
      ],
    },
    {
      name: "otaco",
      address: "3-chōme-5-1 Asakusa, Taito City, Tokyo 111-0032, Japan",
      city: "Tokyo",
      notes:
        "Dedikert glutenfritt chiffonkakested laget av ris! De tilbyr glutenfrie kaker, desserter og ostekake. Et perfekt sted for cøliakere med søt tann som besøker Asakusa.",
      lat: 35.714,
      lng: 139.796,
      menuItems: [
        { japanese: "ケーキ", translation: "Kaker" },
        { japanese: "デザート", translation: "Desserter" },
        { japanese: "チーズケーキ", translation: "Ostekake" },
      ],
    },
    {
      name: "グルテンフリー串揚げ スー (Gluten Free Kushiage Sû)",
      address: "Japan, 〒104-0061 Tokyo, Chuo City, Ginza, 8-chōme−15−２ パークビル 2階",
      city: "Tokyo",
      notes:
        "Hvis du er cøliaker og i Tokyo, er dette absolutt et must. Det var et stort høydepunkt fra min 2-ukers Japan-tur. De tilbyr glutenredusert øl, glutenfritt øl, soyasaus og sushi.",
      lat: 35.6675,
      lng: 139.763,
      menuItems: [
        { japanese: "グルテンリデュースビール", translation: "Glutenredusert øl" },
        { japanese: "ビール", translation: "Glutenfritt øl" },
        { japanese: "醤油", translation: "Soyasaus" },
      ],
    },
    {
      name: "KUROBOSHI SWEETS",
      address: "1-chōme-41-8 Asakusa, Taito City, Tokyo 111-0032, Japan",
      city: "Tokyo",
      notes:
        "Så deilig, min ikke-glutenfrie venn sa at de smakte som vanlige churros. De tilbyr glutenfrie churros som er et must for cøliakere med søt tann som besøker Asakusa.",
      lat: 35.7135,
      lng: 139.7955,
      menuItems: [{ japanese: "チュロス", translation: "Churros" }],
    },
    {
      name: "まるごとVeganダイニング浅草 (Marugoto Vegan)",
      address: "1-chōme-3-3 Hanakawado, Taito City, Tokyo 111-0033, Japan",
      city: "Tokyo",
      notes:
        "Etablissementet er dedikert glutenfritt og helt vegansk, så det er ingen bekymringer for krysskontaminering. De tilbyr glutenfrie desserter, salater, curry, iskrem og tempura.",
      lat: 35.712,
      lng: 139.7965,
      menuItems: [
        { japanese: "デザート", translation: "Desserter" },
        { japanese: "サラダ", translation: "Salat" },
        { japanese: "カレー", translation: "Curry" },
      ],
    },
    {
      name: "Moyan Curry Shinjukuhigashiguchiten",
      address: "Japan, 〒160-0021 Tokyo, Shinjuku City, Kabukichō, 1-chōme−12−５, Cherry Bld., 1F",
      city: "Tokyo",
      notes:
        "Jeg hadde ingen negative reaksjoner på noe, og jeg er cøliaker og ganske sensitiv. De tilbyr glutenfri curry, salat og suppe. Et trygt valg for cøliakere som besøker Shinjuku.",
      lat: 35.6924,
      lng: 139.7033,
      menuItems: [
        { japanese: "カレー", translation: "Curry" },
        { japanese: "サラダ", translation: "Salat" },
        { japanese: "スープ", translation: "Suppe" },
      ],
    },
    {
      name: "Where is a dog?",
      address: "Japan, 〒180-0004 Tokyo, Musashino, Kichijōji Honchō, 2-chōme−24−９ SUNO Ecru 103",
      city: "Tokyo",
      notes:
        "Virkelig nøt hele måltidet, det var deilig og også næringsrikt, og akkurat det jeg trengte etter å ha slitt med å finne et sted. De tilbyr glutenfritt brød, bagels, bakverk, baguetter og kaker.",
      lat: 35.7022,
      lng: 139.5799,
      menuItems: [
        { japanese: "パン", translation: "Brød" },
        { japanese: "ベーグル", translation: "Bagels" },
        { japanese: "ケーキ", translation: "Kaker" },
      ],
    },
    {
      name: "Kitade Tacos",
      address: "Japan, 〒100-0005 Tokyo, Chiyoda City, Marunouchi, 1-chōme−9−１ 東京駅内",
      city: "Tokyo",
      notes:
        "Jeg vet at du sannsynligvis ikke kom til Japan for å spise tacos, men disse var virkelig gode, og for medcøliakere, er jeg sikker på at du vet verdien av å finne et trygt sted å spise. De tilbyr glutenfrie tacos og quesadillas.",
      lat: 35.6812,
      lng: 139.7671,
      menuItems: [
        { japanese: "タコス", translation: "Tacos" },
        { japanese: "ケサディーヤ", translation: "Quesadillas" },
      ],
    },
    {
      name: "BREIZH Café Crêperie",
      address: "Japan, 〒151-8580 Tokyo, Shibuya City, Sendagaya, 5-chōme−24−２ 新宿タカシマヤ 13F",
      city: "Tokyo",
      notes:
        "Utmerket restaurant. Jeg er cøliaker, og de hadde tydelig merket glutenfrie salte og søte galetter. Vil absolutt anbefale. De tilbyr glutenfrie crêpes, desserter, galetter, salater og cider.",
      lat: 35.6876,
      lng: 139.7065,
      menuItems: [
        { japanese: "クレープ", translation: "Crêpes" },
        { japanese: "デザート", translation: "Desserter" },
        { japanese: "ガレット", translation: "Galetter" },
      ],
    },
    {
      name: "SEED CAFE",
      address: "3-chōme-23-4 Botan, Koto City, Tokyo 135-0046, Japan",
      city: "Tokyo",
      notes:
        "Jeg ble anbefalt av en venn som har cøliaki, og selv om de ikke er dedikert for glutenfritt, har de mange alternativer. De tilbyr glutenfrie pannekaker, desserter, kaker, brød og salater.",
      lat: 35.6687,
      lng: 139.8224,
      menuItems: [
        { japanese: "パンケーキ", translation: "Pannekaker" },
        { japanese: "デザート", translation: "Desserter" },
        { japanese: "ケーキ", translation: "Kaker" },
      ],
    },
    {
      name: "tacos trap' (タコストラップ) 新宿御苑店",
      address: "Japan, 〒160-0022 Tokyo, Shinjuku City, Shinjuku, 1-chōme−20−６ ⽯原共同ビル 1F",
      city: "Tokyo",
      notes:
        "Allergeninformasjon, kunnskapsrikt personale, trygt for cøliakere. De tilbyr glutenfrie tacos som er trygge for cøliakere.",
      lat: 35.6876,
      lng: 139.7101,
      menuItems: [{ japanese: "タコス", translation: "Tacos" }],
    },
    {
      name: "Tempura Asakusa SAKURA",
      address: "Japan, 〒111-0034 Tokyo, Taito City, Kaminarimon, 2-chōme−18−１６ THE CITY 浅草雷⾨ 7F",
      city: "Tokyo",
      notes:
        "Deilig, mettende, 100% glutenfri tempura. De tilbyr glutenfri tempura, soyasaus, risbowler og biff. Et must for cøliakere som besøker Asakusa.",
      lat: 35.7107,
      lng: 139.7964,
      menuItems: [
        { japanese: "天ぷら", translation: "Tempura" },
        { japanese: "醤油", translation: "Soyasaus" },
        { japanese: "丼", translation: "Risbowler" },
      ],
    },
    {
      name: "Kushiyaki Bistro Fukumimi Ginza",
      address: "Japan, 〒104-0061 Tokyo, Chuo City, Ginza, 5-chōme−10−９ 銀座ＹＫビル B1F",
      city: "Tokyo",
      notes:
        "De forsto hva glutenfritt er direkte, men jeg viste fortsatt mitt glutenfrie oversettelseskort bare for å være sikker. De tilbyr glutenfrie japanske retter som er trygge for cøliakere.",
      lat: 35.6717,
      lng: 139.7645,
      menuItems: [{ japanese: "和食", translation: "Japanske retter" }],
    },
    {
      name: "avan 渋⾕本店",
      address: "Japan, 〒110-0005 Tokyo, Taito City, Ueno, 7-chōme−1−１ JR東⽇本上野 駅構内 avanエキ",
      city: "Tokyo",
      notes:
        "Definitivt de beste glutenfrie churros vi noensinne har hatt, sprø og smakfulle med morsomme toppinger. De tilbyr glutenfrie churros, desserter, fritert kylling og pommes frites.",
      lat: 35.7141,
      lng: 139.7774,
      menuItems: [
        { japanese: "チュロス", translation: "Churros" },
        { japanese: "デザート", translation: "Desserter" },
        { japanese: "唐揚げ", translation: "Fritert kylling" },
      ],
    },
  ],
  Oslo: [
    {
      name: "Der Peppern Gror (Rådhusplassen)",
      address: "Fridtjof Nansens plass 7, 0160 Oslo",
      city: "Oslo",
      notes:
        "Prisbelønt moderne indisk restaurant (rangert topp-2 i Oslo på TripAdvisor) med tydelig allergenmerket meny. Mange retter – fra kikertebasert missi roti til grillet chicken tikka, palak paneer og dal makhani – er glutenfrie, og det er svært lett å bestille trygt her. De har også null peanøtter på kjøkkenet, og de ansatte er kunnskapsrike, noe som gjør dette til et trygt valg.",
      lat: 59.9113,
      lng: 10.7361,
      menuItems: [
        { japanese: "", translation: "Chicken Tikka (glutenfri)" },
        { japanese: "", translation: "Dal Makhani (glutenfri)" },
      ],
    },
    {
      name: "Den Glade Gris",
      address: "St. Olavs gate 33, 0166 Oslo",
      city: "Oslo",
      notes:
        "Koselig norsk restaurant med fokus på helgrillet svineknoke og andre tradisjonelle kjøttretter tilberedt over lang tid. Mye av menyen er naturlig glutenfri – her går det mest i rent kjøtt, poteter og saus – noe Norsk cøliakiforening fremhever blant glutenfri-vennlige spisesteder. Et godt biffmåltid eller svineknoke med tilbehør er trygt for cøliakere her.",
      lat: 59.9201,
      lng: 10.7424,
      menuItems: [
        { japanese: "", translation: "Helgrillet svineknoke (glutenfri)" },
        { japanese: "", translation: "Tradisjonelle kjøttretter (glutenfri)" },
      ],
    },
    {
      name: "Arno Ristorante",
      address: "Fredensborgveien 30B, 0177 Oslo",
      city: "Oslo",
      notes:
        "Sjarmerende italiensk nabolagsrestaurant hvor du kan få hele menyen i glutenfri variant – alle pastaene og pizzaene kan lages glutenfrie på forespørsel. Arno er kjent for ekte italienske smaker, og de tar cøliaki på alvor slik at du kan spise alt fra antipasti til tiramisù uten gluten.",
      lat: 59.9232,
      lng: 10.7511,
      menuItems: [
        { japanese: "", translation: "Glutenfri pasta" },
        { japanese: "", translation: "Glutenfri pizza" },
      ],
    },
    {
      name: "Roti Shop Oslo",
      address: "Dronningens gate 8B, 0152 Oslo",
      city: "Oslo",
      notes:
        "Liten familiedrevet restaurant kjent for autentiske srilankiske rotis og karri. Glutenfrie alternativer er tilgjengelige – de har gode vegetariske og veganske retter, og mange av de krydrede curry-rettene kan serveres med glutenfritt tilbehør. (NB: Roti betyr brød, men her kan du få glutenfritt brød eller velge risbaserte retter.)",
      lat: 59.9108,
      lng: 10.7478,
      menuItems: [
        { japanese: "", translation: "Srilankisk karri (glutenfri)" },
        { japanese: "", translation: "Risbaserte retter (glutenfri)" },
      ],
    },
    {
      name: "Nam Fah Thai",
      address: "Maridalsveien 21, 0178 Oslo (Vulkan)",
      city: "Oslo",
      notes:
        "Autentisk thairestaurant ved Vulkan/Mathallen som mange regner som en av byens beste på thaimat. De kan tilpasse de fleste retter til å bli glutenfrie på forespørsel – typisk lages curryene med kokosmelk og uten hvetemel, og spør du, får du glutenfri soyasaus til wok og pad thai. Her får du ekte thai-smaker uten gluten.",
      lat: 59.9225,
      lng: 10.752,
      menuItems: [
        { japanese: "", translation: "Thai curry (glutenfri)" },
        { japanese: "", translation: "Pad Thai (glutenfri)" },
      ],
    },
    {
      name: "Villa Paradiso (Grünerløkka)",
      address: "Olaf Ryes plass 8, 0552 Oslo",
      city: "Oslo",
      notes:
        "En av Oslos mest populære pizzarestauranter med ekte napolitansk pizza. Alle pizzaene kan fås med glutenfri bunn – Villa Paradiso tilbyr glutenfri pizzadeig av høy kvalitet, så cøliakere kan velge fritt fra menyen. Også flere pastaretter kan tilpasses. Her trenger du ikke nøye deg med salat mens andre spiser pizza!",
      lat: 59.9242,
      lng: 10.7582,
      menuItems: [
        { japanese: "", translation: "Napolitansk pizza (glutenfri bunn)" },
        { japanese: "", translation: "Pasta (glutenfri)" },
      ],
    },
    {
      name: "Døgnvill Burger (Vulkan)",
      address: "Vulkan 12, 0178 Oslo",
      city: "Oslo",
      notes:
        "Populær burgerbar kjent for saftige kvalitetsburgere. Alle burgere kan serveres med glutenfritt brød (de tilbyr glutenfrie burgerbrød), og friesene deres er også glutenfrie. Dermed kan du trygt kose deg med en fullverdig burgeropplevelse – burger med brød, fries og dressing – helt uten gluten.",
      lat: 59.923,
      lng: 10.752,
      menuItems: [
        { japanese: "", translation: "Burger med glutenfritt brød" },
        { japanese: "", translation: "Glutenfrie fries" },
      ],
    },
    {
      name: "Niwa Sushi (CC Vest)",
      address: "Lilleakerveien 16, 0283 Oslo",
      city: "Oslo",
      notes:
        "Innovativ sushirestaurant litt utenfor sentrum som er en skjult perle for cøliakere. De har en egen glutenfri meny og tilbyr til og med frityrstekt sushi (tempura) laget glutenfritt. Husk å be om glutenfri soyasaus – da kan du nyte alt fra maki og nigiri til tempura-uramaki uten bekymring.",
      lat: 59.9172,
      lng: 10.6372,
      menuItems: [
        { japanese: "", translation: "Glutenfri tempura sushi" },
        { japanese: "", translation: "Maki og nigiri (glutenfri)" },
      ],
    },
    {
      name: "Nordvegan",
      address: "Kristian IVs gate 15B, 0162 Oslo",
      city: "Oslo",
      notes:
        "Prisvinnende veganrestaurant med et bredt utvalg av glutenfrie alternativer. Her er rettene merket og mange er glutenfrie – f.eks. serverer de en glutenfri 'kylling'‐burger med søtpotetfries, Buddha bowls, glutenfri lasagne og kaker. Perfekt for en rask lunsj eller lett middag der du vil unngå både animalske produkter og gluten.",
      lat: 59.9142,
      lng: 10.7387,
      menuItems: [
        { japanese: "", translation: "Glutenfri 'kylling'-burger" },
        { japanese: "", translation: "Glutenfri Buddha bowl" },
      ],
    },
    {
      name: "Vinoteket",
      address: "Henrik Ibsens gate 60A, 0255 Oslo (Solli plass)",
      city: "Oslo",
      notes:
        "Stilfull vinbar kjent for nytenkende gourmetpizza. Alle de moderne surdeigspizzaene på menyen kan bestilles med glutenfri bunn (mot et lite tillegg), uten at du går glipp av den sprø skorpa. Toppet med førsteklasses råvarer (trøffel, sjømat, o.l.) byr Vinoteket på høy pizzakvalitet for alle – også de som må ha det glutenfritt.",
      lat: 59.9158,
      lng: 10.7217,
      menuItems: [
        { japanese: "", translation: "Gourmetpizza med glutenfri bunn" },
        { japanese: "", translation: "Trøffelpizza (glutenfri)" },
      ],
    },
  ],
  London: [
    {
      name: "Niche",
      address: "197–199 Rosebery Avenue, Clerkenwell, London EC1R 4TJ",
      city: "London",
      notes:
        "Londons første Coeliac UK-akkrediterte 100% glutenfrie restaurant. Hele menyen – fra frityrstekt kylling og pølser med potetmos til gnocchi og doughnuts – lages glutenfritt uten at smaken lider.",
      lat: 51.5275,
      lng: -0.109,
      menuItems: [
        { japanese: "", translation: "Frityrstekt kylling" },
        { japanese: "", translation: "Glutenfri gnocchi" },
      ],
    },
    {
      name: "Los Mochis (London City)",
      address: "9. etasje, 100 Liverpool Street, London EC2M 2AT",
      city: "London",
      notes:
        "Trendy takrestaurant der hele menyen er gluten- og nøttefri, med et stort utvalg sushi, tacos, ceviche og andre retter. Her får du ekte 'Pan-Pacific'-smaker uten gluten – og du kan nyte dem på en stor takterrasse med utsikt.",
      lat: 51.5185,
      lng: -0.0819,
      menuItems: [
        { japanese: "", translation: "Glutenfri tacos" },
        { japanese: "", translation: "Glutenfri sushi" },
      ],
    },
    {
      name: "Dishoom (Covent Garden)",
      address: "12 Upper St. Martin's Lane, London WC2H 9FB",
      city: "London",
      notes:
        "Ekstremt populær indisk restaurantkjede som er kjent for å være allergivennlig. Mange retter er naturlig glutenfrie, og de fleste grillretter, salater, sideretter og karrier (inkludert den berømte svarte daalen) kan tilpasses for cøliakere. De ansatte er vant til å håndtere allergispørsmål.",
      lat: 51.5124,
      lng: -0.1276,
      menuItems: [
        { japanese: "", translation: "Black Daal (glutenfri)" },
        { japanese: "", translation: "Grillretter (glutenfrie)" },
      ],
    },
    {
      name: "Zia Lucia (Islington)",
      address: "157 Holloway Road, London N7 8LX",
      city: "London",
      notes:
        "Prisbelønt napolitansk pizzarestaurant kjent for sine unike 48-timers hevede pizzadeiger – inkludert en velsmakende glutenfri bunn i tillegg til den vanlige deigen. Alle pizzaene på menyen kan fås med den glutenfrie bunnen, slik at du kan nyte ekte vedovnsbakt pizza selv med cøliaki.",
      lat: 51.5499,
      lng: -0.1172,
      menuItems: [
        { japanese: "", translation: "Napolitansk pizza (glutenfri bunn)" },
        { japanese: "", translation: "Vedovnsbakt pizza (glutenfri)" },
      ],
    },
    {
      name: "Honest Burgers (Soho)",
      address: "4A Meard Street, London W1F 0EF",
      city: "London",
      notes:
        "Uformell burgerkjede hvor absolutt hele menyen kan lages glutenfri – de tilbyr blant annet glutenfrie burgerbrød til alle burgere. Også fries og tilbehør kan fås uten glutenholdige ingredienser, slik at man kan spise burger med 'alt' trygt.",
      lat: 51.5136,
      lng: -0.135,
      menuItems: [
        { japanese: "", translation: "Burger med glutenfritt brød" },
        { japanese: "", translation: "Glutenfrie fries" },
      ],
    },
    {
      name: "Hawksmoor Seven Dials",
      address: "11 Langley Street, London WC2H 9JG",
      city: "London",
      notes:
        "En av Londons mest anerkjente biffrestauranter med naturlig glutenfrie kjøttretter (biff, sjømat, grønnsaker). Hvis du er i tvil, guider det kyndige personalet deg. Til og med de berømte pommes frites stekt i oksefett er helt glutenfrie, så her kan du unne deg en full biffmiddag uten glutenbekymringer.",
      lat: 51.5128,
      lng: -0.1259,
      menuItems: [
        { japanese: "", translation: "Biff (naturlig glutenfri)" },
        { japanese: "", translation: "Pommes frites i oksefett (glutenfri)" },
      ],
    },
    {
      name: "Duck & Waffle",
      address: "40. etasje, 110 Bishopsgate (Heron Tower), London EC2N 4AY",
      city: "London",
      notes:
        "Unik døgnåpen gourmetrestaurant i skyhøyde, kjent for en eklektisk meny der mange retter er merket 'gluten-conscious'. Du finner alt fra baconinnpakket dadler til rå yellowfin-tunfisk og signaturretten 'Duck & Waffle' – og mye kan nytes glutenfritt. Personalet hjelper gjerne med å tilpasse retter ved behov.",
      lat: 51.5162,
      lng: -0.0801,
      menuItems: [
        { japanese: "", translation: "Baconinnpakket dadler (glutenfri)" },
        { japanese: "", translation: "Yellowfin-tunfisk (glutenfri)" },
      ],
    },
  ],
}

// Verifiser antall restauranter
console.log("Verifisering av restaurantdata:")
console.log("Osaka:", allRestaurants.Osaka.length)
console.log("Kyoto:", allRestaurants.Kyoto.length)
console.log("Tokyo:", allRestaurants.Tokyo.length)
console.log("Oslo:", allRestaurants.Oslo.length)
console.log("London:", allRestaurants.London.length)

// Eksporter dataene for bruk i andre filer
export default allRestaurants


// Object containing different compliments, roasts, and gifts for each friend
const friendMessages = {
    "aditi": {
        compliments: [
            "ye website banvane ke liye bahut bahut shukriya"
        ],
        roasts: [
            "Tum environment ko bachana chahti ho, isiliye tum 3Rs follow karti ho- Reduce, Reuse and Recycle... apne jokes mein."
        ],
        gifts: [
            "♾️"
        ]
    },
    "alankar": {
        compliments: [
            "you don't judge"
        ],
        roasts: [
            "bro is faster than 2G network"
        ],
        gifts: [
            "♾️"
        ]
    },
    "aayush": {
        compliments: [
            "agar koi bhi dikkat mein pade ho to bas iska naam lelo, dikkat solved"
        ],
        roasts: [
            "Bhai ko lagta hai ki log 'aau kya?' se darte hai"
        ],
        gifts: [
            "500"
        ]
    },
    "abhay yadav": {
        compliments: [
            "kabhi bhi khelne aane ke liye ready rehta hai, samaan aur transport ki dikkat to bhul hi jao agar ye saath mein hai to"
        ],
        roasts: [
            "Bhai itna kam school aata hai ki BeerBiceps bhi ab apne guests se ye nahi puchta ki unne aliens dekhe hai ki nahi, balki ye puchta hai ki aapne Abhay dekha hai kya. Bhai sirf important episodes mein hi aata hai."
        ],
        gifts: [
            "69420"
        ]
    },
    "abhay chauhan": {
        compliments: [
            "jokes to ache hote hai tumhare"
        ],
        roasts: [
            "Tumhare jokes bahut original hote hai- originally copied from instagram. Agar thora kam time manga padhne mein lagate aur jyada time ache jokes banane mein lagate to shayad ye problem na aati."
        ],
        gifts: [
            "420"
        ]
    },
    "aditya": {
        compliments: [
            "Meri saari posts like karte hai aap fb pe, uske liye shukriya"
        ],
        roasts: [
            "waise to tumhe pta hi hoga ki facts bhai ne unke baare mein kya bola hai jinka naam A se shuru hota hai aur A se khatam hota hai wo kya hote hai."
        ],
        gifts: [
            "328"
        ]
    },
    "anshul": {
        compliments: [
            "Bhai ko har online joke trend ke baare mein pta hai. Matlab ki instant Vibe match"
        ],
        roasts: [
            "yha pe mai kuch likhta jarur- agar tum abhay ke side kick banke na rehte(mai to aag laga rha)"
        ],
        gifts: [
            "-699"
        ]
    },
    "anupam": {
        compliments: [
            "kabhi bolta nahi hai to matlab kisi se koi dikkat na koi ladai"
        ],
        roasts: [
            "mere pardada ki shamsaan ghat tumse jyada aawaaz karti hai. Bhai humesha anime ke internal monologue scene mein hi fasa rehta hai. "
        ],
        gifts: [
            "-786"
        ]
    },
    "arnav singh": {
        compliments: [
            "tumko sahi mein lagta hai mai tumhare liye compliment llikhunga"
        ],
        roasts: [
            "Acha waise jhut mat bolna, fair and lovely ke ambassador tum hi ho na?, kyuki esa lagta hai ki tumhare jokes bhi usi ke niche dab gaye hai. Tumhare skin ki brightness 100 hai lekin jokes shayad 0 pe set rakhe hai tumne."
        ],
        gifts: [
            "-♾️"
        ]
    },
    "arnav pal": {
        compliments: [
            "dosto ke liye humesha khada rehta hai"
        ],
        roasts: [
            "bhai tumhara footwork to mast hai, lekin zubaan ko bhi warmup kar liya karo,"
        ],
        gifts: [
            "5000"
        ]
    },
    "atharv": {
        compliments: [
            "jo roast mein likha hai uski wjah se mera OTT mat band kar dena please"
        ],
        roasts: [
            "Bhai koshish to bahut karta hai serious banne ki lekin koi serious leta hi nahi hai. Atharv is baat ka example hai ki paise se acha humour nahi kharid sakte."
        ],
        gifts: [
            "-98314"
        ]
    },
    "avi": {
        compliments: [
            "Bhai jab doctor banna to mera ilaaj to free mein kar hi dena please"
        ],
        roasts: [
            "Avi aage chalke wo doctor banega jiske yaha sablog 'second opinion' lene aate hai, lekin usse milne ke aad unko third opinion ki bhi jarurat padegi."
        ],
        gifts: [
            "-8956"
        ]
    },
    "ayush": {
        compliments: [
            "bhai ki height se jyada badi koi chiz hai to wo hai bhai ki dosti"
        ],
        roasts: [
            "bhai apne dosto se pyaar karta hai- kuch jyada hi, Bhai itna jyada lamba hogya hai ki uska dimaag bhi usi hisaab se niche chala gya hai"
        ],
        gifts: [
            "489"
        ]
    },
    "divyansh": {
        compliments: [
            "Bhai har situation ko handle kar sakta hai"
        ],
        roasts: [
            "Pehle to tum Arnav se ya Aditya se fair and lovely udhar mein uthao, fir baat karna"
        ],
        gifts: [
            "-9246"
        ]
    },
    "kunwar": {
        compliments: [
            "Bhai ke jokes mast hote hai"
        ],
        roasts: [
            "Pehle mai tumhara pura naam yaad karlu, uske baad likhta hu"
        ],
        gifts: [
            "-8465"
        ]
    },
    "kushagra": {
        compliments: [
            "art achi hai tumhari"
        ],
        roasts: [
            "Bhai itna jyada padhta hai ki ab khud hi ek question paper ban chuka hai"
        ],
        gifts: [
            "15943"
        ]
    },
    "navneet": {
        compliments: [
            "Sunny deol ne apne haath ki training isi se li thi"
        ],
        roasts: [
            "Agar tum achool aate kabhi to pakka yha kuch likhta mai"
        ],
        gifts: [
            "777"
        ]
    },
    "pushkar": {
        compliments: [
            "Madad karne liye humesha taiyaar rehta hai bhai"
        ],
        roasts: [
            "Bhai kabhi humlogo se bhi baat karliya kar"
        ],
        gifts: [
            "-55174"
        ]
    },
    "ali": {
        compliments: [
            "Potential bahut jyada hai bhai mein"
        ],
        roasts: [
            "Jab bhi tum kuch bolte ho esa lagta hai tumhare servers down the."
        ],
        gifts: [
            "934"
        ]
    },
    "hassan": {
        compliments: [
            "Bro is fast"
        ],
        roasts: [
            "Fast to ho, lekin shayad kisi ne tumhari speed 0.25x pe set kardi hai, ya to tum tum race mein bhi warm up hi karte ho."
        ],
        gifts: [
            "542"
        ]
    },
    "praveen": {
        compliments: [
            "Bhai se kisi bhi chiz ke baare mein baat kar sakte hai"
        ],
        roasts: [
            "Tum wahi ho na jisko lagta hai ki dropshipping mein paisa hai, aur wahi ho na jisko lata hai ki betting se sahi mein millionaire ban sakte hai. Therapy free mein available hai bhai, lelo."
        ],
        gifts: [
            "-8553558"
        ]
    },
    "sahil": {
        compliments: [
            "Bhai ke pas paisa to bahut hai"
        ],
        roasts: [
            "Tum wahi ho na jise lagta hai ki hum matrix mein fase hai?"
        ],
        gifts: [
            "8546"
        ]
    },
    "shailendra": {
        compliments: [
            "Badhiya insaan ho tum"
        ],
        roasts: [
            "ab tumhara kya hi likhu roast, mujhse nahi ho paayega"
        ],
        gifts: [
            "75177"
        ]
    },
    "srajan": {
        compliments: [
            "Humesha help karne ke liye thank you bhai"
        ],
        roasts: [
            "Bhai efforts century ke maarta hai lekin result humesha duck aata hai"
        ],
        gifts: [
            "4589"
        ]
    },
    "rohit": {
        compliments: [
            "Bhai humesha kaam bhejte rehna, agar tum kaam na karo to class mein kisika bhi kaam pura nahi ho paayega"
        ],
        roasts: [
            "😈😈😈"
        ],
        gifts: [
            "♾️"
        ]
    },
    "sparsh": {
        compliments: [
            "Badhiya Insaan"
        ],
        roasts: [
            "Bhai yaar bhaiyadooj pe tum aae nahi mere ghar, us baat ka dukh mujhe humesha rahega"
        ],
        gifts: [
            "2986"
        ]
    },
    "shaurya": {
        compliments: [
            "Humesha positive rehta hai bhai"
        ],
        roasts: [
            "Bhai humesha haste rehte ho, esa lagta hai kisine purane comedy show ki laugh track tumhare upar loop pe laga di hai."
        ],
        gifts: [
            "794"
        ]
    },
    "aarushi": {
        compliments: [
            "tum bhot chup rehti hi chup hi rha kro"
        ],
        roasts: [
            "if sabke samne hugdena had a face"
        ],
        gifts: [
            "200"
        ]
    },
    "akshita": {
        compliments: [
            " copy ke kaam ke liye shukriya"
        ],
        roasts: [
            "bro is biggest thalason thalason that's why she scored 7 in maths "
        ],
        gifts: [
            "-700"
        ]
    },
    "ananya": {
        compliments: [
            "sports skills"
        ],
        roasts: [
            "bhai koh 100m race ke liye 2 medals mile usse motivate hoke woh ghar se hi bhag gyi"
        ],
        gifts: [
            "6969"
        ]
    },
    "avika": {
        compliments: [
            "mere diary likhne ke liye shukriya"
        ],
        roasts: [
            "Bhai koh lagata hai woh topper hai sahi lagta hai pr teachers ki chatne ke competition me"
        ],
        gifts: [
            "-6969"
        ]
    },
    "ayushi": {
        compliments: [
            "Best monitor(seat change karne ke maamle mein)"
        ],
        roasts: [
            "yaar  tumhari tarif bhot hoti hai pr tumhare khud ke muh se "
        ],
        gifts: [
            "1000"
        ]
    },
    "ishita": {
        compliments: [
            "Kind"
        ],
        roasts: [
            "yr waise tumme or class ki ceiling   ek hi jaise hai  class me hai pr useless"
        ],
        gifts: [
            "-♾️"
        ]
    },
    "jaya": {
        compliments: [
            "nice friend"
        ],
        roasts: [
            "tumme or garbage box me bilkul difference nhi hai jab bhi muh koholo khachra hi nikalta hai"
        ],
        gifts: [
            "-543221"
        ]
    },
    "kanishka": {
        compliments: [
            "potential"
        ],
        roasts: [
            "tum meri writing pe hasti ho toh mai bhi tumhare dimag pe has deti hu"
        ],
        gifts: [
            "657"
        ]
    },
    "mangala": {
        compliments: [
            "helpful"
        ],
        roasts: [
            "bhai koh lagta hai ki teachers se argue kre gi toh cool lagegi ha bhai utna hi cool jitna fake abibas ki tshirt lagti hai"
        ],
        gifts: [
            "-♾️"
        ]
    },
    "pari": {
        compliments: [
            "ERROR 404"
        ],
        roasts: [
            " tum toh rohit shetty ki film ki ghadiyo jaisi ho hr saal palat jati ho"
        ],
        gifts: [
            "-6969"
        ]
    },
    "rishika": {
        compliments: [
            "ERROR 404"
        ],
        roasts: [
            "bhai tere jokes pe utni hi hasi ati hai jitni tehrvi pe logo koh and also DBMS ka full form bata do"
        ],
        gifts: [
            "-♾️"
        ]
    },
    "shiwani": {
        compliments: [
            "real person"
        ],
        roasts: [
            "bro tries to sound intelligent pr bhai tere ghutne pe toh chot lagi hai"
        ],
        gifts: [
            "-969696"
        ]
    },
    "surbhi": {
        compliments: [
            "potential"
        ],
        roasts: [
            " straightest person of the group"
        ],
        gifts: [
            "2569"
        ]
    },
    "swarnima": {
        compliments: [
            "better in stone paper scissors game"
        ],
        roasts: [
            " like how it feels to go from  bhaiya to saiyaan journey"
        ],
        gifts: [
            "850"
        ]
    },
    "vanshika": {
        compliments: [
            "attendance"
        ],
        roasts: [
            " yr mai tujhe kuch nhi bolungi kahi tum absent na ho jao"
        ],
        gifts: [
            "-1000000"
        ]
    },
    "vartika": {
        compliments: [
            "alert , beautiful , divine, unbeatable , lovable"
        ],
        roasts: [
            "LG ka frigde legi ya Geory ka"
        ],
        gifts: [
            "750"
        ]
    },
    "aaradhya": {
        compliments: [
            "friendly person"
        ],
        roasts: [
            "yr tu toffee ka wrapper hai kya sab tujhe use krke fekh dete hai"
        ],
        gifts: [
            "500"
        ]
    },
    // Add more friends with their own compliments, roasts, and gifts
};

// Function to get friend's name
function getFriendName() {
    let name = document.getElementById('friendName').value;
    name = name.toLowerCase();
        
    return name ? name.trim() : "Friend";
}

// Function for compliment
function compliment() {
    const name = getFriendName();
    if (friendMessages[name]) {
        const message = friendMessages[name].compliments[Math.floor(Math.random() * friendMessages[name].compliments.length)];
        document.getElementById('result').innerText = ` ${message}`;
    } else {
        document.getElementById('result').innerText = `try again with a different spelling or just enter your first name(except if you are Arnav or Abhay)`;
    }
}

// Function for roast
function roast() {
    const name = getFriendName();
    if (friendMessages[name]) {
        const message = friendMessages[name].roasts[Math.floor(Math.random() * friendMessages[name].roasts.length)];
        document.getElementById('result').innerText = ` ${message}`;
    } else {
        document.getElementById('result').innerText = `try again with a different spelling or just enter your first name(except if you are Arnav or Abhay)`;
    }
}

// Function for gift
function gift() {
    const name = getFriendName();
    if (friendMessages[name]) {
        const message = friendMessages[name].gifts[Math.floor(Math.random() * friendMessages[name].gifts.length)];
        document.getElementById('result').innerText = ` ${message}`;
    } else {
        document.getElementById('result').innerText = `try again with a different spelling or just enter your first name(except if you are Arnav or Abhay)`;
    }
}


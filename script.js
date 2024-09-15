// Object containing different compliments, roasts, and gifts for each friend
const friendMessages = {
    "Aditi": {
        compliments: [
            "pehle website banvane mein madad karo"
        ],
        roasts: [
            "pehle website banvane mein madad karo"
        ],
        gifts: [
            "pehle website banvane mein madad karo"
        ]
    },
    "aditi": {
        compliments: [
            "pehle website banvane mein madad karo"
        ],
        roasts: [
            "pehle website banvane mein madad karo"
        ],
        gifts: [
            "pehle website banvane mein madad karo"
        ]
    },
    "Alankar": {
        compliments: [
            "mera kyu dekh rhi?"
        ],
        roasts: [
            "mera kyu dekh rhi?"
        ],
        gifts: [
            "hmm"
        ]
    },
    "alankar": {
        compliments: [
            "mera kyu dekh rhi?"
        ],
        roasts: [
            "mera kyu dekh rhi?"
        ],
        gifts: [
            "hmm"
        ]
    },
    // Add more friends with their own compliments, roasts, and gifts
};

// Function to get friend's name
function getFriendName() {
    let name = document.getElementById('friendName').value;
        
    return name ? name.trim() : "Friend";
}

// Function for compliment
function compliment() {
    const name = getFriendName();
    if (friendMessages[name]) {
        const message = friendMessages[name].compliments[Math.floor(Math.random() * friendMessages[name].compliments.length)];
        document.getElementById('result').innerText = ` ${message}`;
    } else {
        document.getElementById('result').innerText = `iska kyu dekh rhi`;
    }
}

// Function for roast
function roast() {
    const name = getFriendName();
    if (friendMessages[name]) {
        const message = friendMessages[name].roasts[Math.floor(Math.random() * friendMessages[name].roasts.length)];
        document.getElementById('result').innerText = ` ${message}`;
    } else {
        document.getElementById('result').innerText = `iska kyu dekh rhi`;
    }
}

// Function for gift
function gift() {
    const name = getFriendName();
    if (friendMessages[name]) {
        const message = friendMessages[name].gifts[Math.floor(Math.random() * friendMessages[name].gifts.length)];
        document.getElementById('result').innerText = ` ${message}`;
    } else {
        document.getElementById('result').innerText = ` hmm`;
    }
}


// ==========================================
// 🌌 MIDNIGHT NAVY PORTFOLIO - DARK THEME
// ==========================================

// 1. GLOBAL STYLES & THEME SETUP
const style = document.createElement('style');
style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;800&display=swap');

    :root {
        /* Midnight Executive Palette */
        --bg-body: #020617;       /* Deepest Navy */
        --bg-card: rgba(15, 23, 42, 0.6); /* Translucent Navy */
        
        --primary: #3b82f6;       /* Electric Blue */
        --primary-glow: rgba(59, 130, 246, 0.5);
        --accent: #60a5fa;        /* Light Blue */
        
        --text-main: #ffffff;     /* Pure White */
        --text-muted: #94a3b8;    /* Blue-Gray */
        
        --border-color: rgba(255, 255, 255, 0.1);
        --border-hover: rgba(59, 130, 246, 0.5);
        
        --shadow-glow: 0 0 20px rgba(59, 130, 246, 0.15);
        --radius: 16px;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Outfit', sans-serif; }

    body {
        background-color: var(--bg-body);
        color: var(--text-main);
        min-height: 100vh;
        overflow-x: hidden;
        position: relative;
        background-image: 
            radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 40%);
    }
    
    /* Starry Background Effect */
    .stars {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;
        background-image: radial-gradient(white 1px, transparent 1px);
        background-size: 50px 50px;
        opacity: 0.1;
    }

    /* Layout */
    #app { display: flex; flex-direction: column; min-height: 100vh; }
    
    main {
        flex: 1;
        padding: 110px 20px 60px;
        max-width: 1000px;
        margin: 0 auto;
        width: 100%;
        animation: slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

    /* Nav - Glass Bar */
    nav {
        position: fixed; top: 0; left: 0; width: 100%; height: 80px;
        z-index: 1000;
        background: rgba(2, 6, 23, 0.8);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid var(--border-color);
        display: flex; align-items: center; justify-content: center;
    }
    .nav-container {
        width: 100%; max-width: 1000px; padding: 0 20px;
        display: flex; justify-content: space-between; align-items: center;
    }

    .logo { 
        font-weight: 800; font-size: 1.5rem; color: var(--text-main); 
        letter-spacing: -0.5px; cursor: pointer; text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
    }
    .logo span { color: var(--primary); }

    /* Nav Links */
    .nav-links { display: none; gap: 8px; }
    @media (min-width: 768px) {
        .nav-links { display: flex; }
        .hamburger { display: none; }
    }

    .nav-link {
        background: transparent; border: 1px solid transparent;
        padding: 8px 20px; border-radius: 30px;
        color: var(--text-muted); font-weight: 500; font-size: 0.9rem;
        cursor: pointer; transition: all 0.3s;
    }
    .nav-link:hover { color: var(--text-main); background: rgba(255,255,255,0.05); border-color: var(--border-color); }
    .nav-link.active { background: var(--primary); color: white; box-shadow: 0 0 15px var(--primary-glow); border-color: var(--primary); }

    .hamburger {
        background: rgba(255,255,255,0.05); color: var(--text-main);
        border: 1px solid var(--border-color); padding: 10px; border-radius: 10px;
        cursor: pointer; transition: 0.3s;
    }
    .hamburger:hover { background: rgba(255,255,255,0.1); }

    /* Mobile Menu */
    .mobile-menu {
        position: fixed; top: 90px; right: 20px; width: 220px;
        background: #0f172a; border: 1px solid var(--border-color);
        border-radius: 16px; padding: 15px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        display: none; flex-direction: column; gap: 10px; z-index: 999;
    }
    .mobile-menu.open { display: flex; animation: fadeIn 0.3s; }

    /* Cards */
    .card {
        background: var(--bg-card);
        backdrop-filter: blur(10px);
        border: 1px solid var(--border-color);
        border-radius: var(--radius);
        padding: 40px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        margin-bottom: 30px;
        transition: all 0.4s ease;
    }
    .card:hover { 
        transform: translateY(-5px); 
        border-color: var(--border-hover);
        box-shadow: var(--shadow-glow);
    }

    h1 { font-size: 3.5rem; margin-bottom: 15px; font-weight: 800; letter-spacing: -1px; background: linear-gradient(to right, #fff, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    h2 { font-size: 2.2rem; margin-bottom: 20px; color: var(--text-main); font-weight: 700; }
    p { line-height: 1.7; color: var(--text-muted); margin-bottom: 25px; font-size: 1.05rem; }

    /* Typing Cursor */
    .typing::after { content: '|'; animation: blink 1s infinite; color: var(--primary); }
    @keyframes blink { 50% { opacity: 0; } }

    /* Profile Image - FIXED POSITION */
    .profile-hero {
        width: 170px; height: 170px; border-radius: 50%; 
        object-fit: cover;
        /* THIS FIXES THE FACE CROPPING - LOWERING THE IMAGE */
        object-position: center 15%; 
        border: 3px solid rgba(255,255,255,0.1); 
        box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        margin-bottom: 30px; transition: 0.5s;
    }
    .profile-hero:hover { border-color: var(--primary); box-shadow: 0 0 50px var(--primary-glow); }

    /* Buttons */
    .btn {
        padding: 14px 35px;
        background: var(--primary);
        color: white; border: none; border-radius: 50px;
        font-weight: 600; cursor: pointer; transition: 0.3s;
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
    }
    .btn:hover { transform: translateY(-2px); box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); background: #2563eb; }
    
    .btn-outline {
        background: transparent; border: 1px solid var(--border-color); color: var(--text-main);
        box-shadow: none;
    }
    .btn-outline:hover { border-color: var(--text-main); background: rgba(255,255,255,0.05); }

    /* Progress Bars */
    .skill-track {
        height: 8px; background: rgba(255,255,255,0.1); border-radius: 10px; overflow: hidden; margin-bottom: 25px;
    }
    .skill-fill {
        height: 100%; background: var(--primary); border-radius: 10px;
        box-shadow: 0 0 10px var(--primary-glow);
    }

    /* Scroll Top */
    #scrollTop {
        position: fixed; bottom: 30px; right: 30px;
        width: 50px; height: 50px; border-radius: 50%;
        background: var(--primary); color: white;
        border: none; cursor: pointer;
        display: none; align-items: center; justify-content: center;
        font-size: 1.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        transition: 0.3s; z-index: 900;
    }
    #scrollTop:hover { transform: translateY(-5px); background: white; color: var(--primary); }

    /* Footer */
    footer { 
        text-align: center; padding: 60px 20px; color: var(--text-muted); font-size: 0.9rem; 
        border-top: 1px solid var(--border-color); background: rgba(2, 6, 23, 0.5);
    }
    
    pre { background: rgba(0,0,0,0.3); border: 1px solid var(--border-color); color: #e2e8f0; padding: 20px; border-radius: 12px; }
`;
document.head.appendChild(style);

// 2. STATE & DATA
let currentPage = 'home';
let currentChapter = 'ch7';

const pages = [
    { id: 'home', title: 'Home' },
    { id: 'chapters', title: 'Chapters' },
    { id: 'assignment', title: 'Assignments' },
    { id: 'about', title: 'About' },
    { id: 'contact', title: 'Contact' }
];

const chaptersData = {
    ch7: {
        title: "Chapter 7: Objects",
        description: "Master JavaScript Objects: Properties, Methods, and Construction.",
        examples: [
            { title: "Object Literal", code: "const cat = { name: 'Luna', color: 'White' };\nreturn cat.name;", run: () => "Luna" },
            { title: "Accessing Properties", code: "const person = { age: 25 };\nreturn 'Age: ' + person['age'];", run: () => "Age: 25" },
            { title: "Adding Properties", code: "const obj = {};\nobj.newProp = 'Added!';\nreturn obj.newProp;", run: () => "Added!" },
            { title: "Object Methods", code: "const calc = { sum: (a,b) => a+b };\nreturn calc.sum(10, 5);", run: () => 15 },
            { title: "Object.keys()", code: "const data = { a:1, b:2 };\nreturn Object.keys(data).join(',');", run: () => "a,b" },
            { title: "This Keyword", code: "const user = { name: 'Ali', greet: function(){ return 'Hi ' + this.name } };\nreturn user.greet();", run: () => 'Hi Ali' },
            { title: "Nested Objects", code: "const user = { address: { city: 'Mogadishu' } };\nreturn user.address.city;", run: () => "Mogadishu" },
            { title: "Object.assign()", code: "const o1 = {a:1}; const o2 = {b:2};\nconst res = Object.assign({}, o1, o2);\nreturn JSON.stringify(res);", run: () => '{"a":1,"b":2}' }
        ]
    },
    ch8: {
        title: "Chapter 8: DOM Manipulation",
        description: "Control the page structure dynamically.",
        examples: [
            { title: "Get Selectors", code: "return document.body.tagName;", run: () => "BODY" },
            { title: "Create Element", code: "const el = document.createElement('p');\nreturn el.tagName;", run: () => "P" },
            { title: "Inner HTML", code: "const div = document.createElement('div');\ndiv.innerHTML = '<b>Bold</b>';\nreturn div.innerText;", run: () => "Bold" },
            { title: "Class List", code: "const s = document.createElement('span');\ns.classList.add('active');\nreturn s.className;", run: () => "active" },
            { title: "Set Attribute", code: "const img = document.createElement('img');\nimg.setAttribute('src', 'test.jpg');\nreturn img.getAttribute('src');", run: () => "test.jpg" },
            { title: "Append Child", code: "const p = document.createElement('p');\np.appendChild(document.createTextNode('Hi'));\nreturn p.textContent;", run: () => "Hi" }
        ]
    },
    ch9: {
        title: "Chapter 9: Events",
        description: "Handling user interactions.",
        examples: [
            { title: "Click Event", code: "return 'Triggered on Click';", run: () => "Triggered on Click" },
            { title: "Mouse Over", code: "return 'Triggered on Hover';", run: () => "Triggered on Hover" },
            { title: "Input Event", code: "return 'Triggered on Typing';", run: () => "Triggered on Typing" },
            { title: "Key Down", code: "return 'Triggered on Key Press';", run: () => "Triggered on Key Press" },
            { title: "Form Submit", code: "return 'Triggered on Submit';", run: () => "Triggered on Submit" }
        ]
    }
};

const assignments = [
    { title: "Student Record", code: "function Student(n, id){ this.n = n; this.id = id; }\nconst s = new Student('Zubeyr', 'C6240348');\nreturn s.n + ' - ' + s.id;", run: () => "Zubeyr - C6240348" },
    { title: "Car Object", code: "const car = { brand: 'Toyota', start: function() { return 'Vroom!' } };\nreturn car.start();", run: () => "Vroom!" },
    { title: "Shopping Cart", code: "const cart = [ {price: 10}, {price: 20} ];\nreturn 'Total: ' + cart.reduce((a,b)=>a+b.price, 0);", run: () => "Total: 30" },
    { title: "Filter Array", code: "const nums = [1, 5, 10, 12];\nreturn nums.filter(n => n > 5).join(',');", run: () => "10,12" },
    { title: "Timer Simulation", code: "return 'Timer started...';", run: () => "Timer started..." },
    { title: "API Fetch Mock", code: "return 'Fetching data... OK';", run: () => "Fetching data... OK" }
];

// 3. RENDER COMPONENTS

function renderBackground() {
    return `<div class="stars"></div>`;
}

function renderNav() {
    return `
        <nav>
            <div class="nav-container">
                <div class="logo" onclick="switchPage('home')">Zubeyr<span>.Dev</span></div>
                
                <div class="nav-links">
                    ${pages.map(p => `
                        <button class="nav-link ${currentPage === p.id ? 'active' : ''}" onclick="switchPage('${p.id}')">
                            ${p.title}
                        </button>
                    `).join('')}
                </div>

                <button class="hamburger" onclick="toggleMenu()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
            </div>
        </nav>
        <div id="mobileMenu" class="mobile-menu">
            ${pages.map(p => `<button class="menu-btn" style="background:none; border:none; padding:12px; text-align:left; cursor:pointer; color:white; font-size:1rem;" onclick="goto('${p.id}')">${p.title}</button>`).join('')}
        </div>
    `;
}

function renderHome() {
    return `
        <div style="text-align: center; margin-top: 40px;">
            <img src="WhatsApp Image 2025-10-18 at 12.01.34_3d4d2162.jpg" class="profile-hero" alt="Profile">
            <h5 style="color: var(--primary); letter-spacing: 3px; font-weight: 700; margin-bottom: 15px; text-transform: uppercase; font-size: 0.8rem; opacity: 0.9;">Full Stack Developer</h5>
            
            <h1 class="typing" id="heroText"></h1>
            
            <p style="font-size: 1.2rem; max-width: 600px; margin: 0 auto 40px;">
                Building scalable, <span style="color: var(--primary); font-weight: 700;">high-performance</span> web applications with modern technologies. 
            </p>
            
            <div style="display: flex; gap: 20px; justify-content: center;">
                <button class="btn" onclick="goto('assignment')">Explore Work</button>
                <button class="btn btn-outline" style="border-radius: 50px; padding: 14px 35px;" onclick="goto('contact')">Contact Me</button>
            </div>
        </div>
    `;
}

function typeText(text, i = 0) {
    const el = document.getElementById('heroText');
    if (!el) return;
    el.textContent = text.slice(0, i);
    if (i < text.length) {
        setTimeout(() => typeText(text, i + 1), 100);
    }
}

function renderChapters() {
    const data = chaptersData[currentChapter];
    return `
        <div style="text-align: center; margin-bottom: 40px;">
            <h2>Interactive Documentation</h2>
            <div style="display: flex; gap: 10px; justify-content: center; margin-top: 25px; flex-wrap: wrap;">
                ${Object.keys(chaptersData).map(k => `
                    <button class="btn" style="padding: 10px 24px; font-size: 0.9rem; background: ${currentChapter === k ? 'var(--primary)' : 'transparent'}; border: 1px solid ${currentChapter === k ? 'var(--primary)' : 'var(--border-color)'}; box-shadow: none;" onclick="setChapter('${k}')">
                        ${k.toUpperCase()}
                    </button>
                `).join('')}
            </div>
        </div>
        
        <div class="card">
            <h3 style="color: var(--primary); font-size: 1.5rem;">${data.title}</h3>
            <p>${data.description}</p>
            
            <div style="margin-top: 40px;">
                ${data.examples.map((ex, i) => createExampleHTML(ex, i)).join('')}
            </div>
        </div>
        ${renderBackBtn()}
    `;
}

function renderAssignment() {
    return `
        <div style="text-align: center; margin-bottom: 40px;">
            <h2>Development Tasks</h2>
            <p>Practical implementation of core concepts.</p>
        </div>
        <div class="card">
             ${assignments.map((ex, i) => createExampleHTML(ex, i)).join('')}
        </div>
        ${renderBackBtn()}
    `;
}

function createExampleHTML(ex, i) {
    return `
        <div style="margin-bottom: 35px; border-bottom: 1px solid var(--border-color); padding-bottom: 25px;">
            <h4 style="margin-bottom: 15px; display: flex; align-items: center; gap: 12px; color: var(--text-main);">
                <span style="background: rgba(59, 130, 246, 0.2); color: var(--primary); width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight:700;">${i + 1}</span>
                ${ex.title}
            </h4>
            <pre>${ex.code}</pre>
            <div style="display: flex; align-items: center; gap: 15px; margin-top: 20px;">
                <button class="btn" style="padding: 10px 25px; font-size: 0.85rem;" onclick="runExample('${ex.title.replace(/'/g, "\\'")}')">Execute Code</button>
                <div id="out-${ex.title.replace(/\s/g, '-')}" style="font-weight: 600; color: var(--accent); opacity: 0; transition: 0.3s; font-family: monospace;"></div>
            </div>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="card" style="text-align: center;">
            <img src="WhatsApp Image 2025-10-18 at 12.01.34_3d4d2162.jpg" style="width: 140px; height: 140px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.1); object-fit: cover; object-position: center 15%; margin-bottom: 25px; box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);">
            <h2>Zubeyr Abdiqani</h2>
            <div style="display: flex; gap: 12px; justify-content: center; margin-bottom: 35px;">
                <span style="background: rgba(255,255,255,0.05); color: var(--text-muted); padding: 6px 18px; border-radius: 30px; font-size: 0.85rem; border: 1px solid var(--border-color);">ID: C6240348</span>
                <span style="background: rgba(255,255,255,0.05); color: var(--text-muted); padding: 6px 18px; border-radius: 30px; font-size: 0.85rem; border: 1px solid var(--border-color);">Class: CS242</span>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 50px; text-align: left; margin-top: 50px;">
                <div>
                    <h4 style="margin-bottom: 25px; color: var(--text-main); border-left: 3px solid var(--primary); padding-left: 15px;">Contact Info</h4>
                    <div style="margin-bottom: 15px; padding: 10px 0; color: var(--text-muted); display: flex; align-items: center; gap: 10px;">📧 zubeyrabdiqani@gmail.com</div>
                    <div style="margin-bottom: 15px; padding: 10px 0; color: var(--text-muted); display: flex; align-items: center; gap: 10px;">📱 +252 61 8240507</div>
                    <div style="margin-bottom: 15px; padding: 10px 0; color: var(--text-muted); display: flex; align-items: center; gap: 10px;">🐙 github.com/zupeirupdi</div>
                </div>
                <div>
                    <h4 style="margin-bottom: 25px; color: var(--text-main); border-left: 3px solid var(--primary); padding-left: 15px;">Core Competencies</h4>
                    ${['JavaScript', 'HTML5 & SEO', 'CSS3 & UI', 'Graphic Design'].map(s => `
                        <div style="margin-bottom: 8px; display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 500; color: var(--text-muted);">
                            <span>${s}</span>
                            <span style="color: var(--primary);">90%</span>
                        </div>
                        <div class="skill-track">
                            <div class="skill-fill" style="width: 90%;"></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        ${renderBackBtn()}
    `;
}

function renderContact() {
    return `
        <div class="card" style="text-align: center; max-width: 600px; margin: 0 auto;">
            <div style="width: 80px; height: 80px; background: rgba(59, 130, 246, 0.1); color: var(--primary); border-radius: 50%; margin: 0 auto 25px; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);">📧</div>
            <h2>Get In Touch</h2>
            <p>Ready to start your next project?</p>
            
            <form onsubmit="event.preventDefault(); alert('Message Sent!');" style="text-align: left; margin-top: 35px;">
                <input type="text" placeholder="Your Name" style="width: 100%; padding: 18px; margin-bottom: 15px; border: 1px solid var(--border-color); border-radius: 12px; outline: none; transition: 0.3s; background: rgba(0,0,0,0.2); color: white;" onfocus="this.style.borderColor='var(--primary)'; this.style.background='rgba(59, 130, 246, 0.05)'" onblur="this.style.borderColor='var(--border-color)'; this.style.background='rgba(0,0,0,0.2)'">
                <input type="email" placeholder="Your Email" style="width: 100%; padding: 18px; margin-bottom: 15px; border: 1px solid var(--border-color); border-radius: 12px; outline: none; transition: 0.3s; background: rgba(0,0,0,0.2); color: white;" onfocus="this.style.borderColor='var(--primary)'; this.style.background='rgba(59, 130, 246, 0.05)'" onblur="this.style.borderColor='var(--border-color)'; this.style.background='rgba(0,0,0,0.2)'">
                <textarea rows="4" placeholder="Message..." style="width: 100%; padding: 18px; margin-bottom: 25px; border: 1px solid var(--border-color); border-radius: 12px; outline: none; transition: 0.3s; background: rgba(0,0,0,0.2); color: white;" onfocus="this.style.borderColor='var(--primary)'; this.style.background='rgba(59, 130, 246, 0.05)'" onblur="this.style.borderColor='var(--border-color)'; this.style.background='rgba(0,0,0,0.2)'"></textarea>
                <button class="btn" style="width: 100%; justify-content: center; font-size: 1rem; border-radius: 12px;">Send Message</button>
            </form>
        </div>
        ${renderBackBtn()}
    `;
}

function renderBackBtn() {
    return `
        <div style="text-align: center; margin-top: 60px;">
            <button class="btn btn-outline" style="padding: 12px 30px; border-radius: 30px; font-size: 0.9rem;" onclick="switchPage('home')">⬅ Back to Home</button>
        </div>
    `;
}

// 4. LOGIC
function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
}

function switchPage(id) {
    currentPage = id;
    renderApp();
    window.scrollTo(0, 0);
}

function goto(id) {
    switchPage(id);
}

function setChapter(ch) {
    currentChapter = ch;
    renderApp();
}

function runExample(title) {
    let ex = null;
    let res = null;
    for (let k in chaptersData) {
        let found = chaptersData[k].examples.find(e => e.title === title);
        if (found) { res = found.run(); break; }
    }
    if (!res) {
        let found = assignments.find(e => e.title === title);
        if (found) res = found.run();
    }
    const out = document.getElementById('out-' + title.replace(/\s/g, '-'));
    if (out) {
        out.textContent = '> ' + res;
        out.style.opacity = '1';
    } else {
        alert(res);
    }
}

// Global Exports
window.toggleMenu = toggleMenu;
window.switchPage = switchPage;
window.goto = goto;
window.setChapter = setChapter;
window.runExample = runExample;

function renderApp() {
    document.body.innerHTML = '';
    document.body.appendChild(document.createRange().createContextualFragment(renderBackground()));

    // Scroll Top Button
    const topBtn = document.createElement('button');
    topBtn.id = 'scrollTop';
    topBtn.innerHTML = '↑';
    topBtn.onclick = () => window.scrollTo(0, 0);
    document.body.appendChild(topBtn);

    // Scroll Listener
    window.onscroll = () => {
        if (window.scrollY > 300) topBtn.style.display = 'flex';
        else topBtn.style.display = 'none';
    };

    const app = document.createElement('div');
    app.id = 'app';
    app.innerHTML = renderNav();

    const main = document.createElement('main');
    if (currentPage === 'home') main.innerHTML = renderHome();
    else if (currentPage === 'chapters') main.innerHTML = renderChapters();
    else if (currentPage === 'assignment') main.innerHTML = renderAssignment();
    else if (currentPage === 'about') main.innerHTML = renderAbout();
    else if (currentPage === 'contact') main.innerHTML = renderContact();

    app.appendChild(main);

    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
            <a href="tel:+252618240507" style="width:45px; height:45px; background:rgba(255,255,255,0.05); border-radius:50%; display:flex; align-items:center; justify-content:center; text-decoration:none; font-size:1.2rem; color: var(--text-main); border: 1px solid var(--border-color);">📞</a>
            <a href="https://github.com/zupeirupdi" style="width:45px; height:45px; background:rgba(255,255,255,0.05); border-radius:50%; display:flex; align-items:center; justify-content:center; text-decoration:none; font-size:1.2rem; color: var(--text-main); border: 1px solid var(--border-color);">🐙</a>
            <a href="mailto:zubeyrabdiqani@gmail.com" style="width:45px; height:45px; background:rgba(255,255,255,0.05); border-radius:50%; display:flex; align-items:center; justify-content:center; text-decoration:none; font-size:1.2rem; color: var(--text-main); border: 1px solid var(--border-color);">✉️</a>
        </div>
        <p>© 2025 Zubeyr Abdiqani. ID: C6240348</p>
    `;
    app.appendChild(footer);

    document.body.appendChild(app);

    if (currentPage === 'home') typeText("Hello, I'm Zubeyr");
}

renderApp();

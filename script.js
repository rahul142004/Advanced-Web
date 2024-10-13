const infoBtn = document.getElementById('info');
let centerDiv = document.getElementById('center');
const homeBtn = document.getElementById('home');

// Toggle MainPage and InfoPage
//==============================================
infoBtn.addEventListener('click', toggleInfo);

function toggleInfo() {
    if (centerDiv.innerHTML === defaultContent) {
        centerDiv.innerHTML = aboutMe;
        setupCardClickEvents();
    } else {
        centerDiv.innerHTML = defaultContent;
    }
}

function setupCardClickEvents() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            let innerId = event.target.id;
            displayContent(innerId);
        });
    });
}

function displayContent(contentType) {
    switch (contentType) {
        case 'gaming':
            centerDiv.innerHTML = gamingContent;
            break;
        case 'passion':
            centerDiv.innerHTML = passionContent;
            break;
        case 'personal':
            centerDiv.innerHTML = personalContent;
            break;
        case 'projects':
            centerDiv.innerHTML = projectContent;
            break;
        default:
            centerDiv.innerHTML = aboutMe;
            break;
    }
    setupBackButton();
}

function setupBackButton() {
    const backBtn = document.getElementById('back');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            centerDiv.innerHTML = aboutMe;
            setupCardClickEvents();
        });
    }
}

// Open Home using Home button
homeBtn.addEventListener('click', openHome);

function openHome() {
    centerDiv.innerHTML = defaultContent;
}








// Initial setup of the main page content
let defaultContent = `
    <div class="content">
        <p>Experience the New World</p>
    </div>`;

centerDiv.innerHTML = defaultContent;

var aboutMe = `
    <div class="info">
        <div class="about">
            <h1>About Me</h1>
        </div>
        <div class="cards">
            <div class="card" id="gaming">GAMING</div>
            <div class="card" id="passion">PASSION</div>
            <div class="card" id="personal">PERSONAL</div>
            <div class="card" id="projects">PROJECTS</div>
        </div>
    </div>`;

var gamingContent = `
    <div class="gaming">
        <div class="about">
            <h1>Gaming</h1>
        </div>
        <div class="game-content">
            <li>To be added</li>
            <li>To be added</li>
            <li>To be added</li>
            <li>To be added</li>
        </div>
        <div class="back-button">
            <button id="back">Back</button>
        </div>
    </div>`;

var passionContent = `
    <div class="passion">
        <div class="about">
            <h1>Passion</h1>
        </div>
        <div class="passion-content">
            <li>To be Added</li>
            <li>To be Added</li>
            <li>To be Added</li>
            <li>To be Added</li>
        </div>
        <div class="back-button">
            <button id="back">Back</button>
        </div>
    </div>`;

var personalContent = `
    <div class="personal">
        <div class="about">
            <h1>Personal</h1>
        </div>
        <div class="personal-content">
            <li>To be Filled</li>
            <li>To be Filled</li>
            <li>To be Filled</li>
            <li>To be Filled</li>
        </div>
        <div class="back-button">
            <button id="back">Back</button>
        </div>
    </div>`;

var projectContent = `
    <div class="projects">
        <div class="about">
            <h1>My Projects</h1>
        </div>
        <div class="project-content">
            <li>Projects</li>
            <li>Projects</li>
            <li>Projects</li>
            <li>Projects</li>
        </div>
        <div class="back-button">
            <button id="back">Back</button>
        </div>
    </div>`;

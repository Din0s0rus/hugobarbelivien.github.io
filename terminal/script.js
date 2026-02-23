/* ============================================
   RETRO TERMINAL PORTFOLIO - JAVASCRIPT
   ============================================ */

// ============================================
// CONFIGURATION - Easy to customize
// ============================================

const CONFIG = {
    typingSpeed: 2,         // ms per character for typing animation (lower = faster)
    promptText: 'hugo@portfolio:~$',
    cursorChar: '█'
};

// ============================================
// CONTENT DATA - Edit this section to customize
// ============================================

const CONTENT = {
    welcome: `
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   ██╗  ██╗██╗   ██╗ ██████╗  ██████╗                         ║
║   ██║  ██║██║   ██║██╔════╝ ██╔═══██╗                        ║
║   ███████║██║   ██║██║  ███╗██║   ██║                        ║
║   ██╔══██║██║   ██║██║   ██║██║   ██║                        ║
║   ██║  ██║╚██████╔╝╚██████╔╝╚██████╔╝                        ║
║   ╚═╝  ╚═╝ ╚═════╝  ╚═════╝  ╚═════╝                         ║
║                                                              ║
║   Welcome to my interactive portfolio terminal.              ║
║   Type 'help' to see available commands.                     ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
`,

    help: `
Available commands:
───────────────────────────────────────
  help        Show this help message
  profile     Best-of recruteur (résumé express)
  about       Learn more about me
  skills      View my technical skills
  projects    List my projects
  project <id> View project details (e.g., project 1)
  contact     Get my contact information
  whoami      Who am I?
  coffee      Need a break?
  fish        ><(((º>
  sound on/off  Toggle terminal sounds
  clear       Clear the terminal
  exit        Revenir au hub
  ls          Alias for help
───────────────────────────────────────
`,

    about: `
┌─ À propos ─────────────────────────────────────────────────┐
│                                                            │
│  Hugo Barbelivien                                          │
│  Étudiant en BTS SIO (SLAM) à Rennes                       │
│  📍 Rennes (35000) | 🚗 Permis B                           │
│                                                            │
│  Je recherche actuellement un stage et surtout une         │
│  alternance, avec l'envie claire de coder sur des          │
│  projets concrets et utiles.                               │
│                                                            │
│  Passionné par le développement et le jeu vidéo, j'aime    │
│  comprendre comment fonctionnent les systèmes derrière     │
│  une application : logique, interactions, données et       │
│  performance.                                              │
│                                                            │
│  Je m'oriente naturellement vers le back-end, tout en      │
│  gardant un fort intérêt pour le développement applicatif  │
│  et ludique.                                               │
│                                                            │
│  Sociable, créatif et curieux, j'apprécie le travail en    │
│  équipe et les environnements où l'on apprend en continu.  │
│                                                            │
└────────────────────────────────────────────────────────────┘
`,

    skills: `
┌─ Compétences ──────────────────────────────────────────────┐
│                                                            │
│  ▸ HARD SKILLS                                             │
│    PHP • Python • JavaScript • HTML • CSS • SQL • C#       │
│    Prompt Engineering (IA) • ArchLinux • Windows 10/11     │
│                                                            │
│  ▸ SOFT SKILLS                                             │
│    Esprit d'équipe • Créativité • Pensée analytique        │
│    Adaptabilité • Autonomie                                │
│                                                            │
│  ▸ LOGICIELS                                               │
│    Visual Studio Code • PowerShell • Unity • Pixlr         │
│    CapCut • Canva • Terminus • Oracle VM VirtualBox        │
│    VMWare Workstation                                      │
│                                                            │
└────────────────────────────────────────────────────────────┘
`,

    projects: `
┌─ Projets ──────────────────────────────────────────────────┐
│                                                            │
│  ID   Projet                    Technologies               │
│  ───────────────────────────────────────────────────────   │
│  1    Marked to Ascend          Unity, C#                  │
│  2    Dungeon Crawler 2D        Unity, C#                  │
│  3    Gestionnaire de dépenses  PHP, MySQL, HTML/CSS, JS   │
│                                                            │
│  Tape 'project <id>' pour les détails (ex: project 1)      │
│                                                            │
└────────────────────────────────────────────────────────────┘
`,

    projectDetails: {
        1: `
┌─ Projet: Marked to Ascend ─────────────────────────────────┐
│                                                            │
│  Jeu 2D de type donjon, salle par salle.                   │
│  Actuellement en développement.                            │
│                                                            │
│  ▸ Technologies:                                           │
│    Unity • C#                                              │
│                                                            │
│  ▸ Description:                                            │
│    Un prototype de jeu où le joueur explore des donjons    │
│    générés, combat des ennemis et progresse à travers      │
│    différentes salles avec des mécaniques roguelike.       │
│                                                            │
└────────────────────────────────────────────────────────────┘
`,
        2: `
┌─ Projet: Dungeon Crawler 2D ───────────────────────────────┐
│                                                            │
│  Jeu d'exploration de donjon en 2D.                        │
│                                                            │
│  ▸ Technologies:                                           │
│    Unity • C#                                              │
│                                                            │
│  ▸ Description:                                            │
│    Un dungeon crawler classique avec exploration,          │
│    combats et collecte d'objets. Projet réalisé pour       │
│    apprendre Unity et le développement de jeux.            │
│                                                            │
└────────────────────────────────────────────────────────────┘
`,
        3: `
┌─ Projet: Gestionnaire de dépenses ─────────────────────────┐
│                                                            │
│  Application web orientée usage réel pour gérer            │
│  ses dépenses personnelles.                                │
│                                                            │
│  ▸ Technologies:                                           │
│    PHP • MySQL • HTML/CSS • JavaScript                     │
│                                                            │
│  ▸ Description:                                            │
│    Une application permettant de suivre ses dépenses,      │
│    catégoriser ses achats et visualiser ses habitudes      │
│    de consommation.                                        │
│                                                            │
└────────────────────────────────────────────────────────────┘
`
    },

    contact: `
┌─ Contact ──────────────────────────────────────────────────┐
│                                                            │
│  N'hésitez pas à me contacter !                            │
│                                                            │
│  ▸ Email:     barbelivienhugo@outlook.fr                   │
│  ▸ Téléphone: 06 30 75 96 21                               │
│  ▸ LinkedIn:  linkedin.com/in/hugo-barbelivien-69983434a   │
│                                                            │
│  Je suis ouvert à toute discussion concernant des          │
│  projets, des opportunités de stage ou d'alternance.       │
│                                                            │
└────────────────────────────────────────────────────────────┘
`,

    // ── PROFILE (best-of recruteur) ──
    profile: `
╔══════════════════════════════════════════════════════════════╗
║  HUGO BARBELIVIEN — Développeur / Étudiant informatique     ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  🎯 Recherche : alternance / stage / CDI                     ║
║  📍 Rennes (35) | 🚗 Permis B                                ║
║                                                              ║
║  ▸ Focus : web, systèmes, projets créatifs                   ║
║  ▸ Stack : PHP · JS · Python · C# · SQL · HTML/CSS           ║
║  ▸ Best project : Marked to Ascend (Unity, C#)               ║
║                                                              ║
║  ▸ Liens rapides :                                           ║
║    GitHub   → (bientôt disponible)                           ║
║    LinkedIn → linkedin.com/in/hugo-barbelivien-69983434a     ║
║    Email    → barbelivienhugo@outlook.fr                     ║
║    Tél      → 06 30 75 96 21                                 ║
║                                                              ║
║  Tape 'contact' pour plus · 'projects' pour mes projets      ║
╚══════════════════════════════════════════════════════════════╝
`,

    // ── EASTER EGGS ──
    whoami: `
┌─ whoami ──────────────────────────────────────────────────────┐
│                                                               │
│  Player: Hugo Barbelivien                                     │
│  Class:  Développeur Full-Stack (en formation)                │
│  Level:  BTS SIO SLAM — Rennes                                │
│  Build:  PHP · JS · Python · C# · curiosité ++                │
│                                                               │
│  🎯 Objectif : décrocher une alternance et monter en XP       │
│  ⚡ Passif  : apprend vite, bug-fix en solo                   │
│  🛡️ Trait   : créatif, autonome, sociable                     │
│                                                               │
│  Status: Ready to deploy 🚀                                   │
└───────────────────────────────────────────────────────────────┘
`,

    coffee: `
  ☕ Brewing coffee...
  [████████████████████████████████████████] 100%

  +10 Focus  |  +5 Bugfix  |  -1 Sleep

  "Un bon café et c'est reparti." ☕
`,

    fourOhFour: `
  ⚠️  Error 404 : cette commande n'existe pas (encore).
  Tape 'help' pour voir les commandes disponibles.
`,

    rmrf: `
  ⚠️  rm -rf / detected...
  Deleting system32... just kidding.
  Nice try 😄 (sandbox protected)
`,

    fish: `
      ><(((º>
  fish shell detected.
  But this is JavaScript 😄
`,

    sudoHire: `
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   🎉 ACCESS GRANTED 🎉                                       ║
║                                                              ║
║   Congratulations! You've unlocked the secret command.       ║
║                                                              ║
║   Hugo would be thrilled to join your team!                  ║
║                                                              ║
║   Initiating hiring sequence...                              ║
║   [████████████████████████████████████████] 100%            ║
║                                                              ║
║   ✓ Skills verified                                          ║
║   ✓ Enthusiasm confirmed                                     ║
║   ✓ Coffee supply checked                                    ║
║   ✓ Ready to code!                                           ║
║                                                              ║
║   Contact: hello@hugo.dev                                    ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
`,

    notFound: (cmd) => `
bash: ${cmd}: command not found
Type 'help' to see available commands.
`,
};

// ============================================
// AUDIO - Web Audio API (keypress / success / error)
// ============================================

class TerminalAudio {
    constructor() {
        this.ctx = null;       // AudioContext créé après première interaction
        this.enabled = true;   // toggle via commande "sound on/off"
    }

    // Initialise l'AudioContext (doit être appelé après un geste utilisateur)
    _ensureContext() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    // Génère un bip court paramétrable
    _beep(freq, duration, type = 'square', gain = 0.06) {
        if (!this.enabled) return;
        this._ensureContext();
        const osc = this.ctx.createOscillator();
        const vol = this.ctx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        vol.gain.value = gain;
        vol.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(vol).connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }

    // Son discret de frappe clavier
    keypress() {
        this._beep(800 + Math.random() * 200, 0.04, 'square', 0.03);
    }

    // Son de réponse réussie
    success() {
        this._beep(600, 0.08, 'sine', 0.05);
        setTimeout(() => this._beep(900, 0.10, 'sine', 0.05), 80);
    }

    // Son d'erreur
    error() {
        this._beep(200, 0.15, 'sawtooth', 0.06);
    }

    // Toggle on/off
    toggle(state) {
        if (state === 'on') this.enabled = true;
        else if (state === 'off') this.enabled = false;
        else this.enabled = !this.enabled;
        return this.enabled;
    }
}

// ============================================
// GLITCH - Effet visuel sur le logo uniquement
// ============================================

class LogoGlitch {
    constructor() {
        // Cible : le premier bloc ascii-art (le logo welcome)
        this._logo = null;
        this._interval = null;
    }

    // Démarre le cycle de glitch (toutes les 5 s)
    start() {
        this._interval = setInterval(() => this._glitch(), 5000);
    }

    // Récupère le logo (premier .ascii-art dans le DOM)
    _getLogo() {
        if (!this._logo || !this._logo.isConnected) {
            this._logo = document.querySelector('.ascii-art');
        }
        return this._logo;
    }

    // Applique un glitch subtil puis le retire
    _glitch() {
        const el = this._getLogo();
        if (!el) return;
        el.classList.add('glitch-active');
        setTimeout(() => el.classList.remove('glitch-active'), 200);
    }
}

// ============================================
// TERMINAL CLASS
// ============================================

class Terminal {
    constructor() {
        // DOM Elements
        this.terminal = document.getElementById('terminal');
        this.output = document.getElementById('output');
        this.input = document.getElementById('command-input');
        
        // State
        this.commandHistory = [];
        this.historyIndex = -1;
        this.isTyping = false;

        // Audio & Glitch
        this.audio = new TerminalAudio();
        this.glitch = new LogoGlitch();
        
        // Initialize
        this.init();
    }

    // Initialize terminal
    init() {
        this.bindEvents();
        this.showWelcome();
        this.focusInput();
        this.glitch.start();
    }

    // Bind event listeners
    bindEvents() {
        // Input events
        this.input.addEventListener('keydown', (e) => this.handleKeyDown(e));

        // Son de frappe clavier (keypress discret)
        this.input.addEventListener('keydown', (e) => {
            if (e.key.length === 1 || e.key === 'Backspace') {
                this.audio.keypress();
            }
        });
        
        // Click anywhere to focus input
        this.terminal.addEventListener('click', () => this.focusInput());
        
        // Keep focus on input
        document.addEventListener('keydown', (e) => {
            // Don't capture if user is selecting text
            if (!window.getSelection().toString()) {
                this.focusInput();
            }
        });
    }

    // Focus the input field
    focusInput() {
        if (!this.isTyping) {
            this.input.focus();
        }
    }

    // Handle keyboard input
    handleKeyDown(e) {
        switch (e.key) {
            case 'Enter':
                e.preventDefault();
                this.executeCommand();
                break;
            
            case 'ArrowUp':
                e.preventDefault();
                this.navigateHistory(-1);
                break;
            
            case 'ArrowDown':
                e.preventDefault();
                this.navigateHistory(1);
                break;
            
            case 'Tab':
                e.preventDefault();
                this.autoComplete();
                break;
            
            case 'c':
                // Ctrl+C to cancel
                if (e.ctrlKey) {
                    e.preventDefault();
                    this.cancelCommand();
                }
                break;
            
            case 'l':
                // Ctrl+L to clear
                if (e.ctrlKey) {
                    e.preventDefault();
                    this.clearTerminal();
                }
                break;
        }
    }

    // Navigate command history
    navigateHistory(direction) {
        if (this.commandHistory.length === 0) return;
        
        this.historyIndex += direction;
        
        // Clamp index
        if (this.historyIndex < 0) {
            this.historyIndex = 0;
        } else if (this.historyIndex >= this.commandHistory.length) {
            this.historyIndex = this.commandHistory.length;
            this.input.value = '';
            return;
        }
        
        this.input.value = this.commandHistory[this.historyIndex];
        
        // Move cursor to end
        setTimeout(() => {
            this.input.selectionStart = this.input.selectionEnd = this.input.value.length;
        }, 0);
    }

    // Simple auto-complete
    autoComplete() {
        const currentInput = this.input.value.toLowerCase().trim();
        const commands = ['help', 'profile', 'about', 'skills', 'projects', 'project', 'contact', 'whoami', 'coffee', 'fish', 'sound', 'clear', 'ls'];
        
        const matches = commands.filter(cmd => cmd.startsWith(currentInput));
        
        if (matches.length === 1) {
            this.input.value = matches[0];
        } else if (matches.length > 1 && currentInput.length > 0) {
            // Show possible completions
            this.printLine(`\nPossible commands: ${matches.join(', ')}`, 'response');
            this.printPrompt();
        }
    }

    // Cancel current input
    cancelCommand() {
        this.input.value = '';
        this.printLine(`${CONFIG.promptText} ^C`, 'command-echo');
        this.scrollToBottom();
    }

    // Execute entered command
    executeCommand() {
        const commandLine = this.input.value.trim();
        this.input.value = '';
        
        // Echo the command
        this.printLine(`${CONFIG.promptText} ${commandLine}`, 'command-echo');
        
        // Add to history if not empty and not duplicate
        if (commandLine && this.commandHistory[0] !== commandLine) {
            this.commandHistory.unshift(commandLine);
            // Limit history size
            if (this.commandHistory.length > 50) {
                this.commandHistory.pop();
            }
        }
        this.historyIndex = -1;
        
        // Parse and execute
        if (commandLine) {
            this.parseCommand(commandLine);
        }
        
        this.scrollToBottom();
    }

    // Parse command and arguments
    parseCommand(commandLine) {
        const parts = commandLine.toLowerCase().split(/\s+/);
        const command = parts[0];
        const args = parts.slice(1);
        
        // Command routing
        switch (command) {
            case 'help':
            case 'ls':
                this.typeText(CONTENT.help);
                break;
            
            case 'profile':
                this.audio.success();
                this.typeText(CONTENT.profile);
                break;
            
            case 'about':
                this.audio.success();
                this.typeText(CONTENT.about);
                break;
            
            case 'skills':
                this.audio.success();
                this.typeText(CONTENT.skills);
                break;
            
            case 'projects':
                this.audio.success();
                this.typeText(CONTENT.projects);
                break;
            
            case 'project':
                this.showProject(args[0]);
                break;
            
            case 'contact':
                this.audio.success();
                this.typeText(CONTENT.contact);
                break;
            
            case 'whoami':
                this.audio.success();
                this.typeText(CONTENT.whoami);
                break;
            
            case 'coffee':
                this.audio.success();
                this.typeText(CONTENT.coffee);
                break;
            
            case 'fish':
                this.audio.success();
                this.typeText(CONTENT.fish);
                break;
            
            case '404':
                this.audio.error();
                this.printLine(CONTENT.fourOhFour, 'error');
                break;
            
            case 'sound':
                this.handleSound(args[0]);
                break;
            
            case 'rm':
                // Détecte "rm -rf /" (commande complète)
                if (args.join(' ').startsWith('-rf')) {
                    this.audio.error();
                    this.typeText(CONTENT.rmrf);
                } else {
                    this.audio.error();
                    this.printLine(CONTENT.notFound('rm'), 'error');
                }
                break;
            
            case 'clear':
                this.clearTerminal();
                break;
            
            case 'sudo':
                // Check for easter egg
                if (args.join(' ') === 'hire hugo') {
                    this.audio.success();
                    this.typeText(CONTENT.sudoHire);
                } else {
                    this.audio.error();
                    this.printLine(`sudo: ${args.join(' ')}: command not found`, 'error');
                }
                break;
            
            case 'date':
                this.printLine(new Date().toString(), 'response');
                break;
            
            case 'pwd':
                this.printLine('/home/hugo/portfolio', 'response');
                break;
            
            case 'echo':
                this.printLine(args.join(' '), 'response');
                break;
            
            case 'history':
                this.showHistory();
                break;
            
            case 'exit':
            case 'quit':
            case 'back':
                window.location.href = '../index.html';
                break;
            
            default:
                this.audio.error();
                this.printLine(CONTENT.notFound(command), 'error');
        }
    }

    // Show specific project
    showProject(id) {
        const projectId = parseInt(id);
        
        if (!id) {
            this.audio.error();
            this.printLine('Usage: project <id>\nExample: project 1', 'error');
            return;
        }
        
        if (CONTENT.projectDetails[projectId]) {
            this.audio.success();
            this.typeText(CONTENT.projectDetails[projectId]);
        } else {
            this.audio.error();
            this.printLine(`Project '${id}' not found. Type 'projects' to see available projects.`, 'error');
        }
    }

    // Toggle son on/off
    handleSound(arg) {
        const state = this.audio.toggle(arg);
        this.printLine(`  🔊 Sound: ${state ? 'ON' : 'OFF'}`, 'response');
    }

    // Show command history
    showHistory() {
        if (this.commandHistory.length === 0) {
            this.printLine('No commands in history.', 'response');
            return;
        }
        
        const historyText = this.commandHistory
            .slice(0, 20)
            .map((cmd, i) => `  ${i + 1}  ${cmd}`)
            .reverse()
            .join('\n');
        
        this.printLine(historyText, 'response');
    }

    // Clear terminal
    clearTerminal() {
        this.output.innerHTML = '';
    }

    // Print a line to output
    printLine(text, className = '') {
        const line = document.createElement('div');
        line.className = `output-line ${className}`;
        line.textContent = text;
        this.output.appendChild(line);
        this.scrollToBottom();
    }

    // Print prompt (for auto-complete display)
    printPrompt() {
        const line = document.createElement('div');
        line.className = 'output-line';
        line.innerHTML = `<span class="prompt">${CONFIG.promptText}</span>`;
        this.output.appendChild(line);
        this.scrollToBottom();
    }

    // Type text with animation
    typeText(text, callback) {
        this.isTyping = true;
        this.input.disabled = true;
        
        const container = document.createElement('div');
        container.className = 'output-line response typing';
        this.output.appendChild(container);
        
        let index = 0;
        const chars = text.split('');
        
        const type = () => {
            if (index < chars.length) {
                // Add character
                container.textContent += chars[index];
                index++;
                
                // Scroll as we type
                if (index % 50 === 0) {
                    this.scrollToBottom();
                }
                
                // Variable speed for more natural feel
                let delay = CONFIG.typingSpeed;
                if (chars[index - 1] === '\n') {
                    delay = CONFIG.typingSpeed * 2;
                }
                
                setTimeout(type, delay);
            } else {
                // Typing complete
                this.isTyping = false;
                this.input.disabled = false;
                this.focusInput();
                this.scrollToBottom();
                
                if (callback) callback();
            }
        };
        
        type();
    }

    // Show welcome message
    showWelcome() {
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'output-line ascii-art';
        welcomeDiv.textContent = CONTENT.welcome;
        this.output.appendChild(welcomeDiv);
        this.scrollToBottom();
    }

    // Scroll terminal to bottom
    scrollToBottom() {
        this.terminal.scrollTop = this.terminal.scrollHeight;
    }
}

// ============================================
// INITIALIZE ON DOM READY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Create terminal instance
    window.terminal = new Terminal();
});

// ============================================
// PREVENT CONTEXT MENU ON TERMINAL (optional)
// ============================================

// Uncomment if you want to disable right-click
// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// });

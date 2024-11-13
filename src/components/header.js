class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  getHomeIcon() {
    return `
      <svg class="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
      </svg>
    `;
  }

  getPreferencesIcon() {
    return `
      <svg class="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
      </svg>
    `;
  }

  getPlayIcon() {
    return `
      <svg class="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 18V6l8 6-8 6Z"/>
      </svg>
    `;
  }

  getRecordsIcon() {
    return `
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
      </svg>
    `;
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .header {
          background-color: #3b5323; /* Dark green for forest theme */
          color: #ffffff;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: Arial, sans-serif;
          z-index: 10; 
        }

        .left-section {
          display: flex;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 18px;
          font-weight: bold;
          color: #a0522d; /* Brown for lumberjack style */
        }

        .nav-items {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-left: 2rem;
        }

        .nav-items a {
          color: #ffffff;
          text-decoration: none;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0.3rem 0.5rem;
          border-radius: 4px;
          transition: background-color 0.3s;
        }

        .nav-items a:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .icon {
          width: 20px;
          height: 20px;
          stroke: currentColor;
        }

        .right-section {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .right-section a {
          color: #ffffff;
          text-decoration: none;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0.3rem 0.5rem;
          border-radius: 4px;
        }

        .right-section a:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .separator {
          color: rgba(255, 255, 255, 0.6);
          margin: 0 0.5rem;
        }

        .lumber {
          width : 40px;
          height: 40px;
        }
      </style>

      <header class="header">
        <div class="left-section">
          <div class="logo">
            <img class="lumber" src="../ressources/img/lumberjack.png">
            Lumberjack Game
          </div>
          
          <nav class="nav-items">
            <a href="Home.html">
              ${this.getHomeIcon()}
              Home
            </a>
            <a href="Preferences.html">
              ${this.getPreferencesIcon()}
              Preferences
            </a>
            <a href="LumberjackBattle.html">
              ${this.getPlayIcon()}
              Play
            </a>
            <a href="Records.html">
              ${this.getRecordsIcon()}
              Records
            </a>
          </nav>
        </div>

        <div class="right-section">
          <a href="Register.html">Register</a>
          <span class="separator">|</span>
          <a href="Login.html">Login</a>
        </div>
      </header>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('custom-header', Header);

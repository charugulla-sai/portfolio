function App() {
  return (
    <>
      <section class="header-section">
        <header class="primary-header">
          <div class="owner-container">
            <div class="owner-img">
              <img src="img/ProfilePhoto.jpg" alt="owner image" />
            </div>
            <h2 class="owner-name">Sai.dev</h2>
            <span class="dot"></span>
          </div>
          <nav class="navbar">
            <ul class="nav-list">
              <li class="nav-item">Home</li>
              <li class="nav-item">About</li>
              <li class="nav-item">Portfolio</li>
              <li class="nav-item">Contact</li>
            </ul>
          </nav>
        </header>
      </section>
      <section class="hero-section">
        <div class="hero-container">
          <div class="hero-text-box">
            <h2 class="role-title">
              Front-End <span style="color: #cb4c29">React</span> Developer 👋🏻
            </h2>
            <p class="role-short-desc">
              Hi, I'm Charugula Sai. A Passionate Front-end React Developer
              based in Hyderabad, India. 📍
            </p>
          </div>
          <div class="hero-video-box">
            <video src="video/People on desk.mp4" autoplay muted></video>
          </div>
        </div>
      </section>
      <section class="about-section">
        <div class="about-container">
          <div class="about-img-box">
            <img src="img/pexels-pixabay-39284.jpg" alt="" />
          </div>
          <div class="about-text-box">
            <p class="about-me-tag">About me</p>
            <h3 class="about-me-heading">
              A dedicated Front-end developer based in Hyderabad, India. 📍
            </h3>
            <div class="about-me-description">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, Bootstrap and React. I excel
              in designing and maintaining responsive websites that offer a
              smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </div>
          </div>
        </div>
      </section>
      <section class="portfolio-section">
        <div class="project-container">
          <p class="portfolio-tag">Potfolio</p>
          <h3 class="portfolio-heading">
            Each Project is a unique piece of developent.🧩
          </h3>
          <div class="project-omnifood">
            <div class="project-img-box">
              <a
                href="https://charugulla-sai.github.io/omnifood/"
                target="_blank"
              >
                <img
                  class="project-image"
                  src="img/omnifood project img.png"
                  alt="omnifood project image"
                />
              </a>
            </div>
            <div class="project-desc-box">
              <h4 class="project-title">Omnifood</h4>
              <p class="project-desc">
                A car rental website is an online platform that allows users to
                rent cars for personal or business use. The website provides an
                interface for searching, comparing, and reserving cars.
              </p>
              <div class="stack-used">
                <p class="stack-1">Venilla CSS</p>
                <p class="stack-2">JavaScript</p>
              </div>
              <div class="project-links">
                <a
                  href="https://github.com/charugulla-sai/omnifood"
                  target="_blank"
                  class="code-link"
                >
                  Code
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-github"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </span>
                </a>
                <a
                  href="https://charugulla-sai.github.io/omnifood/"
                  target="_blank"
                  class="live-demo-link"
                >
                  <span>LiveDemo</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-external-link"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer></footer>
    </>
  );
}

export default App;

function Home() {
  return (
    <main>
      <section className="hero-split">
        <div className="hero-image">
 <img
  src={`${import.meta.env.BASE_URL}profile.png`}
  alt="Portrait"
/>
        </div>

        <div className="hero-text">
          <h1>
            Hi, I’m Thomas. <br />
            A Software Engineer.
          </h1>

          <p>
            I am currently pursuiing a degree in Software engineering at CSUSM. I have a passion for software engineering, front-end development, and creative projects that combine both front-end and back-end
          </p>
        </div>
      </section>

      <section id="about" className="section dark-section">
        <h2>Experience</h2>
        <p>
          I’m currently developing my skills in software engineering and front-end & back-end
          development. I enjoy building applications that combine functionality,
          design, and user experience. 
        </p>
      </section>

      <section id="projects" className="section dark-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <ProjectCard
            title="Portfolio Website"
            desc="A responsive React portfolio website with routing, modern styling, and a blog page."
          />
          <ProjectCard
            title="Cloud Computing Project"
            desc="A intrusion detection system built using Google Cloud services, utilizing machine learning for anomaly detection and real-time monitoring."
          />
          <ProjectCard
            title="Fitness-App"
            desc="A project we made as a team of four. This app allows users to monitor BMI and track workouts."
          />
        </div>
      </section>



      <section id="contact" className="section dark-section">
        <h2>Contact</h2>
        <p>Email: thomasgrannes@hotmail.no</p>
        <p>GitHub: github.com/ThomasHaugstad</p>
      </section>
    </main>
  );
}

function ProjectCard({ title, desc }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Home;
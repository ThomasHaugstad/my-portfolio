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
          design, and user experience. <br />

          I have experience with Java, Python, C#, and JavaScript, and I am always eager to learn new technologies and frameworks. I am passionate about creating innovative solutions that make a positive impact on users and businesses alike.
          
          I am yet to have any industry experience, but I am actively seeking internships and entry-level positions to gain practical experience and contribute to real-world projects. I am excited about the opportunities that lie ahead and am committed to continuous learning and growth in the field of software engineering.
        </p>
      </section>

      <section id="projects" className="section dark-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <ProjectCard
  title="Portfolio Website"
  desc="A responsive React portfolio website with routing, modern styling, and a blog page."
  link="https://github.com/ThomasHaugstad/my-portfolio"
/>

<ProjectCard
  title="Cloud Computing Project"
  desc="An intrusion detection system built using Google Cloud services, utilizing machine learning for anomaly detection and real-time monitoring."
  link="https://github.com/ThomasHaugstad/Intrusion-Detection-System"
/>

<ProjectCard
  title="Fitness-App"
  desc="A project we made as a team of four. This app allows users to monitor BMI and track workouts."
  link="https://github.com/ThomasHaugstad/FitnessApp"
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
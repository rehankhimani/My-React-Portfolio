import './style.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-card-wrapper">
        <div className="about-card">
          <div className="accent-bar"></div>
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I&apos;m a self-taught frontend developer with a passion for crafting responsive, user-friendly web interfaces.
            I specialize in HTML, CSS, JavaScript, and currently focus on mastering React and modern frontend tools.
            I enjoy bringing ideas to life with clean code and great design. When I&apos;m not coding, I&apos;m exploring new UI/UX trends or building side projects to sharpen my skills.
          </p>
        </div>
      </div>
    </section>
  );
}

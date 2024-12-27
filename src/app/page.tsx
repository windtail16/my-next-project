export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Frontend Developer</h1>
          <p className="hero-subtitle">Welcome to my portfolio</p>
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {/* 프로젝트 카드들이 들어갈 자리 */}
          </div>
        </div>
      </section>
    </div>
  );
}

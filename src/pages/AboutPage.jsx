import { aboutTexts, skillTexts } from "../siteContent";

export default function AboutPage() {
  return (
    <>
      <main className="container page-content page-shell">
        <h1 className="projects-title">關於我</h1>
        <div className="projects-accent" />

        <section className="about-section">
          <h2 className="projects-section-heading">
            <span className="projects-slash">//</span> 自我介紹
          </h2>
          {aboutTexts.map((text) => (
            <p key={text} className="about-text">{text}</p>
          ))}
        </section>

        <section className="about-section">
          <h2 className="projects-section-heading">
            <span className="projects-slash">//</span> 技能
          </h2>
          {skillTexts.map((text) => (
            <p key={text} className="about-text">{text}</p>
          ))}
        </section>
      </main>
    </>
  );
}

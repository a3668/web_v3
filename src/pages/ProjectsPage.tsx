import ProjectCard from "../components/ProjectCard";
import { projects } from "../siteContent";

export default function ProjectsPage() {
  return (
    <>
      <main className="container page-content page-shell">
        <h1 className="projects-title">作品集</h1>
        <div className="projects-accent" />
        <p className="projects-subtitle">
          個人開發的專案與實作練習，涵蓋前端、區塊鏈與系統模擬等領域。
        </p>

        <section>
          <h2 className="projects-section-heading">
            <span className="projects-slash">//</span> 精選作品
          </h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

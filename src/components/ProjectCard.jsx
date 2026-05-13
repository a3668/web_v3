import { Link } from "react-router-dom";

const GitHubIcon = () => (
  <svg
    className="project-card-github-icon"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    className="project-card-btn-icon"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

export default function ProjectCard({ project }) {
  const githubLink = project.links.find((l) => l.type === "github");

  return (
    <article className="project-card">
      <div className="project-card-top">
        {githubLink ? (
          <a
            href={githubLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-title-link"
          >
            <GitHubIcon />
            <span>{project.title}</span>
          </a>
        ) : (
          <span className="project-card-title-text">
            <GitHubIcon />
            <span>{project.title}</span>
          </span>
        )}
      </div>

      {project.description.map((text) => (
        <p key={text} className="project-card-desc">{text}</p>
      ))}

      {project.techStack && project.techStack.length > 0 && (
        <div className="project-card-tags">
          {project.techStack.map((tech) => (
            <span key={tech} className="project-card-tag">{tech}</span>
          ))}
        </div>
      )}

      <div className="project-card-actions">
        {project.links.map((link) =>
          link.type === "demo" ? (
            link.internal ? (
              <Link key={link.href} to={link.href} className="project-card-btn-demo">
                <ExternalLinkIcon />
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-btn-demo"
              >
                <ExternalLinkIcon />
                {link.label}
              </a>
            )
          ) : (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-btn-outline"
            >
              {link.label}
            </a>
          )
        )}
      </div>
    </article>
  );
}

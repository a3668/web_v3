import { contact } from "../siteContent";

export default function ContactPage() {
  return (
    <>
      <main className="container page-content page-shell contact-page">
        <h1 className="projects-title">聯絡方式</h1>
        <div className="projects-accent" />

        <section className="contact-grid" aria-label="聯絡管道">
          <a
            className="contact-card-link"
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <article className="contact-card">
              <div className="contact-card-head">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 2.75a9.25 9.25 0 0 0-2.93 18.02c.46.09.63-.2.63-.45v-1.59c-2.57.56-3.11-1.09-3.11-1.09-.42-1.06-1.02-1.34-1.02-1.34-.83-.57.06-.56.06-.56.92.06 1.4.94 1.4.94.82 1.4 2.15 1 2.68.77.08-.59.32-1 .58-1.23-2.05-.23-4.2-1.02-4.2-4.56 0-1.01.36-1.84.94-2.49-.1-.23-.4-1.17.09-2.43 0 0 .77-.25 2.53.95a8.7 8.7 0 0 1 4.6 0c1.76-1.2 2.53-.95 2.53-.95.49 1.26.19 2.2.1 2.43.58.65.94 1.48.94 2.49 0 3.55-2.15 4.32-4.2 4.55.33.29.62.86.62 1.73v2.56c0 .25.17.55.64.45A9.25 9.25 0 0 0 12 2.75Z"
                    fill="currentColor"
                  />
                </svg>
                <h2>GITHUB</h2>
              </div>
              <p>Open-source projects and code</p>
            </article>
          </a>

          <a className="contact-card-link" href={`mailto:${contact.email}`}>
            <article className="contact-card">
              <div className="contact-card-head">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 7l8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                <h2>EMAIL</h2>
              </div>
              <p>{contact.email}</p>
            </article>
          </a>
        </section>
      </main>
    </>
  );
}

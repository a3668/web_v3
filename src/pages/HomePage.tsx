import { Link } from "react-router-dom";
import { contact } from "../siteContent";
import shainImage from "../../assets/images/shain.png";

export default function HomePage() {
  return (
    <>
      <main className="container page-content page-shell">
        <section className="home-hero">
          <img className="home-avatar" src={shainImage} alt="Shain" />
          <h1 className="home-title">
            <br />
            資工系三年級，專注程式設計、網頁開發與 Swift 開發。
          </h1>
          <p className="home-subtitle">
            平常持續練習程式設計、網頁開發與 Swift
            開發，並透過個人專案累積實作經驗。
          </p>
          <div className="home-actions">
            <a
              className="home-button home-button-primary"
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <Link className="home-button home-button-secondary" to="/contact">
              Contact
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

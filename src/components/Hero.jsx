export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-backdrop" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">自我介紹</p>
          <h1>你的名字</h1>
          <p className="description hero-description">
            資工系學生，主要關注程式設計、網頁開發與系統實作。
          </p>
          <a className="hero-cta" href="#home-overview">
            往下查看
          </a>
        </div>
      </div>
    </section>
  );
}

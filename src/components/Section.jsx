export default function Section({ title, children }) {
  return (
    <section className="card section-card">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

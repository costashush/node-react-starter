export default function StatusCard({ title, value }) {
  return (
    <div className="card small-card">
      <span className="label">{title}</span>
      <strong>{value}</strong>
    </div>
  );
}

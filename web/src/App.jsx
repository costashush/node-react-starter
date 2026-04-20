import { useEffect, useState } from 'react';
import StatusCard from './components/StatusCard';

const appName = import.meta.env.VITE_APP_NAME || 'Node React Boilerplate';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api';

export default function App() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadHealth() {
      try {
        const response = await fetch(`${apiBaseUrl}/health`);
        if (!response.ok) {
          throw new Error('Failed to fetch health status');
        }
        const data = await response.json();
        setHealth(data);
      } catch (err) {
        setError(err.message);
      }
    }

    loadHealth();
  }, []);

  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Full-stack starter</p>
        <h1>{appName}</h1>
        <p className="subtitle">
          Node.js backend, React frontend, Dockerized delivery, CI/CD, and separate staging and production environments.
        </p>
      </section>

      <section className="grid">
        <StatusCard title="Frontend" value="React + Vite" />
        <StatusCard title="Backend" value="Node + Express" />
        <StatusCard title="CI/CD" value="GitHub Actions" />
        <StatusCard title="Deploy" value="Docker Compose" />
      </section>

      <section className="card">
        <h2>API health check</h2>
        {error ? (
          <p className="error">{error}</p>
        ) : !health ? (
          <p>Loading...</p>
        ) : (
          <div className="stack">
            <p><strong>Status:</strong> {health.status}</p>
            <p><strong>Environment:</strong> {health.environment}</p>
            <p><strong>Service:</strong> {health.service}</p>
            <p><strong>Timestamp:</strong> {health.timestamp}</p>
          </div>
        )}
      </section>
    </main>
  );
}

# Node.js + React Boilerplate

Production-oriented monorepo starter with:

- **API:** Node.js + Express
- **Frontend:** React + Vite
- **Environments:** local, staging, production
- **Infra:** Docker, Docker Compose, Nginx reverse proxy
- **CI/CD:** GitHub Actions for CI, staging deploy, production deploy

## Structure

```bash
.
├── api
├── web
├── infra
│   └── nginx
├── scripts
└── .github/workflows
```

## Local development

### 1. Install

```bash
npm install
```

### 2. Environment files

Copy the examples and edit them:

```bash
cp api/.env.example api/.env
cp web/.env.example web/.env
```

### 3. Run

```bash
npm run dev
```

- API: `http://localhost:4000`
- Web: `http://localhost:5173`

## Build

```bash
npm run build
```

## Docker local or server

### Staging

```bash
docker compose -f docker-compose.staging.yml up -d --build
```

### Production

```bash
docker compose -f docker-compose.production.yml up -d --build
```

## CI/CD flow

### CI
Runs on pull requests and pushes to `main` and `develop`.

Checks:
- install
- lint
- build

### Staging deploy
Push to `develop` triggers:
- build server artifacts on target machine
- upload env values
- deploy with `docker-compose.staging.yml`

### Production deploy
Push to `main` triggers:
- build server artifacts on target machine
- upload env values
- deploy with `docker-compose.production.yml`

## Required GitHub Secrets

### Shared SSH
- `SSH_HOST`
- `SSH_USER`
- `SSH_PRIVATE_KEY`
- `SSH_PORT` (optional)
- `DEPLOY_PATH` (example: `/var/www/node-react-boilerplate`)

### Staging
- `STAGING_API_ENV`
- `STAGING_WEB_ENV`

### Production
- `PRODUCTION_API_ENV`
- `PRODUCTION_WEB_ENV`

## Example branch strategy

- `feature/*` → PR into `develop`
- `develop` → staging deploy
- `main` → production deploy

## Notes

- Frontend assets are served by Nginx.
- API is proxied through Nginx under `/api`.
- Health endpoint is available at `/api/health`.
- Replace placeholder domains in Nginx and compose files before deployment.

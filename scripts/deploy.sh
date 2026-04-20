#!/usr/bin/env sh
set -eu

ENVIRONMENT=${1:-staging}

if [ "$ENVIRONMENT" = "production" ]; then
  docker compose -f docker-compose.production.yml up -d --build
else
  docker compose -f docker-compose.staging.yml up -d --build
fi

APP_SERVICE := app
DB_SERVICE := db
PORT ?= 3000

.PHONY: up down logs rebuild status health test ci

up:
	docker compose up -d --build

down:
	docker compose down -v

logs:
	docker compose logs -f --tail=200

rebuild:
	docker compose up -d --build --force-recreate

status:
	docker compose ps

health:
	curl -fsS http://localhost:$(PORT)/api/health || exit 1

test:
	npm run test

ci:
	npm install
	npm run lint
	npm run typecheck
	npm run test
	npm run build

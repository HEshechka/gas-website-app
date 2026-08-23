APP_SERVICE := app
DB_SERVICE := db
PORT ?= 3000

.PHONY: up down logs rebuild status health test ci

POSTGRES_DB ?= gas_website
POSTGRES_USER ?= postgres
POSTGRES_PASSWORD ?= postgres
DATABASE_URL ?= postgresql://$(POSTGRES_USER):$(POSTGRES_PASSWORD)@localhost:5432/$(POSTGRES_DB)
PORT ?= 3000

up:
	POSTGRES_DB=$(POSTGRES_DB) \
	POSTGRES_USER=$(POSTGRES_USER) \
	POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) \
	DATABASE_URL=$(DATABASE_URL) \
	PORT=$(PORT) \
	docker compose up -d --build

down:
	POSTGRES_DB=$(POSTGRES_DB) \
	POSTGRES_USER=$(POSTGRES_USER) \
	POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) \
	DATABASE_URL=$(DATABASE_URL) \
	PORT=$(PORT) \
	docker compose down -v

logs:
	docker compose logs -f --tail=200

rebuild:
	POSTGRES_DB=$(POSTGRES_DB) \
	POSTGRES_USER=$(POSTGRES_USER) \
	POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) \
	DATABASE_URL=$(DATABASE_URL) \
	PORT=$(PORT) \
	docker compose up -d --build --force-recreate

status:
	docker compose ps

health:
	curl --retry 30 --retry-delay 2 --retry-connrefused -fsS http://localhost:$(PORT)/api/health || exit 1

test:
	APP_URL=http://localhost:$(PORT) npm run test

ci:
	npm install
	POSTGRES_DB=$(POSTGRES_DB) \
	POSTGRES_USER=$(POSTGRES_USER) \
	POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) \
	DATABASE_URL=$(DATABASE_URL) \
	PORT=$(PORT) \
	make up
	APP_URL=http://localhost:$(PORT) npm run test
	npm run build
	POSTGRES_DB=$(POSTGRES_DB) \
	POSTGRES_USER=$(POSTGRES_USER) \
	POSTGRES_PASSWORD=$(POSTGRES_PASSWORD) \
	DATABASE_URL=$(DATABASE_URL) \
	PORT=$(PORT) \
	make down

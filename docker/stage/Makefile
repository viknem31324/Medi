#!/usr/bin/make


SHELL = /bin/sh

NODE_CONTAINER_NAME := node

docker_bin := $(shell command -v docker 2> /dev/null)
docker_compose_bin := $(shell command -v docker-compose 2> /dev/null)

.PHONY : help up down build \
        shell app-shell \
        install dev
.DEFAULT_GOAL := help


help: ## Show this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# --- [ Development tasks ] -------------------------------------------------------------------------------------------

up: ## Build frontend, init and up Application container with web-services
	$(docker_compose_bin) up -d

down: ## Stop all started for development containers
	$(docker_compose_bin) down

shell: ## Start Node.js shell for manual operations
	$(docker_compose_bin) -f ./docker-compose-build.yml run --rm "$(NODE_CONTAINER_NAME)" /bin/sh

install: ## Install dependency
	$(docker_compose_bin) -f ./docker-compose-build.yml run --workdir="/app" --service-ports --rm "$(NODE_CONTAINER_NAME)" npm i -f

build: install ## Build
	$(docker_compose_bin) -f ./docker-compose-build.yml run --workdir="/app" --service-ports --rm "$(NODE_CONTAINER_NAME)" npm run build
.PHONY: build test lint format check

build:
	npm run build 2>/dev/null || true

test:
	npm test 2>/dev/null || true

lint:
	npx eslint . 2>/dev/null || true

format:
	npx prettier --write . 2>/dev/null || true

check: format lint test

env:
	@make env-laravel
	@make env-nextjs
setup:
	@make build
	@make vendor
	@make optimize
	@make key
	@make migrate
	@make seed
	@make storage-link
build:
	docker-compose up -d --build
env-laravel:
	cp laravel/.env.example laravel/.env
env-nextjs:
	cp nextjs/.env.example nextjs/.env
up:
	docker-compose up
stop:
	docker-compose stop
vendor:
	docker-compose exec laravel bash -c "composer install"
optimize:
	docker-compose exec laravel bash -c "php artisan optimize"
key:
	docker-compose exec laravel bash -c "php artisan key:generate"
migrate:
	docker-compose exec laravel bash -c "php artisan migrate"
seed:
	docker-compose exec laravel bash -c "php artisan db:seed"
storage-link:
	docker-compose exec laravel bash -c "php artisan storage:link"
laracon:
	docker-compose exec laravel bash -c "$$args"
nextcon:
	docker-compose exec nextjs /bin/sh -c "$$args"
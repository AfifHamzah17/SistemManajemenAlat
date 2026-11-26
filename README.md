# Sistem Manajemen Alat

Equipment management backend built with **Laravel**. Handles equipment inventory and
the records around it.

---

## Project structure

```
SistemManajemenAlat-backend/     Laravel application
├── app/Http/Controllers/        Endpoints
├── app/Models/                  Eloquent models
├── database/migrations/         Schema
├── routes/                      api.php / web.php
├── .env.example                 Environment template
└── README.md                    Laravel's default README
```

---

## Running locally

```bash
cd SistemManajemenAlat-backend
composer install
cp .env.example .env
php artisan key:generate
# configure DB_* in .env, then:
php artisan migrate
php artisan serve
```

Requires PHP 8.x and Composer.

---

## Notes

The Laravel application lives in the `SistemManajemenAlat-backend/` subfolder, not at
the repository root — clone it and `cd` into that directory before running anything.

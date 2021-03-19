#!/usr/bin/env bash

python manage.py migrate
(gunicorn kindred.wsgi:application -b 0.0.0.0:8000 --reload -w 2 --access-logfile /logs/gunicorn/access.log --error-logfile /logs/gunicorn/error.log)
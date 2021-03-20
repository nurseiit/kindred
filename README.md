# Kindred

A web app for families.

## Testing

The project contains basic tests to check models & API. Run the following command from web container at the Docker to test:
```bash
python manage.py test
```

## Dependency Management

Dependencies are managed via [Poetry](https://python-poetry.org). Run the following [command](https://python-poetry.org/docs/cli/) to export the lock file to requirements.txt file:
```bash
poetry export -f requirements.txt --output requirements.txt
```

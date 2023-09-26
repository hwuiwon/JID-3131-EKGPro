# prism-api

EKG Backend implemented with FastAPI

## Setup

1. Create a new conda environment and install python 3.10

```bash
conda create -n prism
conda install python=3.11
```

2. Install poetry

```bash
curl -sSL https://install.python-poetry.org | python -
```

3. Install packages and activate the virtual environment

```bash
poetry install
poetry shell
```

4. Setup pre-commit git hook

```bash
pre-commit install
```

5. Create .env file

Ask teammates for the environment configuration

```bash
touch .env
```

6. Run the api using the following command

```bash
cd app
python -m uvicorn main:app --workers 4
```

## Before committing

Run the following command

```bash
pre-commit run --all-files
```

You can also fix auto-fixable ruff erros by running the following command

```bash
ruff check . --fix
```

## Adding new packages

Use the following command

```bash
poetry add [PACKAGE_NAME]
```

## ETC

### Delete **pycache**

```bash
find . | grep -E "(/__pycache__$|\.pyc$|\.pyo$)" | xargs rm -rf
```

### Delete local branches

```bash
git branch | grep -v "main" | xargs git branch -D
```

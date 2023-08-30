This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

## Frontend

### Run the development server:

```bash
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Setting Up Husky

Run the comment below:

```bash
npx husky install
```

## Backend

Make sure you have the appropriate packages installed for the Django server by doing the following:

```bash
cd backend
pip install -r requirements.txt
```

### Running the servers for dev environment

First, run the Next.js development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Then, in a seperate terminal, run the Django server in order to have the backend connection:

```bash
cd backend
python manage.py runserver
```

The Django connection will be on [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

### Update requirements.txt

When new packages are installed in Django, update the package dependencies by the following:

```bash
pip freeze > requirements.txt
```

# A quick guide on how to get the app up and running

## Installing Git and cloning the respository onto your machine

### Step 1: Install Git
If Git is not already installed on your machine, download and install it from [git-scm.com](https://git-scm.com/).

### Step 2: Open Terminal or Command Prompt
Use a Terminal (for Mac/Linux) or Command Prompt (for Windows) to execute Git commands.

### Step 3: Navigate to Desired Directory
Decide where you want the cloned repository. Use the `cd` command to navigate to this directory. For example:
```bash
cd Desktop/projects
```

If you are unfamiliar using Terminal to navigate through directors/folders on your computer, check out this helpful [article](https://www.freecodecamp.org/news/command-line-for-beginners/). 

### Step 4: Clone the Repository
Clone the repository using the `git clone` command. Replace the URL with the repository's URL:
```bash
git clone https://github.com/user/repository.git](https://github.com/hwuiwon/JID-3131-EKGPro.git
```

### Step 5: Wait for the Clone to Complete
The repository will now be cloned to your machine. This may take some time depending on the repository size.

### Step 6: Navigate into the Repository
Once cloning is complete, move into the repository's directory:
```bash
cd repository-name
```
Replace 'repository-name' with with the actual name of the folder created by the clone command.

## Downloading Yarn

Yarn is a fast, reliable, and secure dependency management tool. To download and install Yarn, follow these steps:

### Step 1: Check for Node.js
Yarn requires Node.js to be installed on your machine. Check if Node.js is installed by running this command in your terminal or command prompt:
```
node -v
```
If Node.js is not installed, download and install it from [nodejs.org](https://nodejs.org/).

### Step 2: Install Yarn
After installing Node.js, you can install Yarn. The method of installation can vary depending on your operating system.

#### For Windows:
Download and install Yarn from the [official Yarn website](https://classic.yarnpkg.com/en/docs/install#windows-stable).

#### For macOS:
You can install Yarn via Homebrew (if you have it installed):
```
brew install yarn
```
If you don't have Homebrew, install it from [brew.sh](https://brew.sh/), then run the above command.

#### For Linux:
You can install Yarn via your package manager. For Debian or Ubuntu, for example, use the following commands:
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn
```

### Step 3: Verify Installation
After installation, verify that Yarn is installed successfully by checking its version:
```
yarn -v
```

You're now ready to use Yarn for your project's dependency management!

## Installing Packages with Yarn

After setting up Yarn, you can use it to install all necessary packages for your project. Follow these steps:

### Step 1: Install All Dependencies
Since you already have a `package.json` file with listed dependencies, simply run:
```
yarn
```
or
```
yarn install
```
This will install all dependencies listed in your `package.json` file.

### Step 2: Add Dev Dependencies (Optional)
If you have development-specific dependencies (like testing tools or build tools), add them with:
```
yarn add [dev-package-name] --dev
```
Replace `[dev-package-name]` with the name of the development package. These will be added under `devDependencies` in your `package.json`.

### Step 3: Check for Outdated Packages (Optional)
To check for outdated packages, you can use:
```
yarn outdated
```
This command provides a list of dependencies that are outdated in your project.

### Step 4: Upgrade Packages (Optional)
To upgrade specific packages, use:
```
yarn upgrade [package-name]
```
To upgrade all packages to their latest version, use:
```
yarn upgrade
```

### Step 5: Remove a Package (Optional)
To remove a package from your project, use:
```
yarn remove [package-name]
```
Replace `[package-name]` with the name of the package you wish to remove.

By following these steps, you can manage your project's dependencies efficiently using Yarn.

## Set up the backend

### Setup

1. Create a new conda environment and install python 3.10

```bash
conda create -n ekg
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

might need to uninstall exisiting hooks

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
python -m uvicorn main:app --workers 2
```

### Before committing

Run the following command

```bash
pre-commit run --all-files
```

You can also fix auto-fixable ruff erros by running the following command

```bash
ruff check . --fix
```

### Adding new packages

Use the following command

```bash
poetry add [PACKAGE_NAME]
```

### Miscellaneous functionality

#### Delete **pycache**

```bash
find . | grep -E "(/__pycache__$|\.pyc$|\.pyo$)" | xargs rm -rf
```

#### Delete local branches

```bash
git branch | grep -v "main" | xargs git branch -D
```


## Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


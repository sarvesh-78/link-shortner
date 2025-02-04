# Project Setup Guide

## Requirements

### 1. Install Node.js (LTS Version)
Node.js is required to run JavaScript on the backend. Download and install the **LTS version** of Node.js from the official website:

🔗 [Download Node.js](https://nodejs.org/en/download)

### 2. Install Visual Studio Code (VS Code)
VS Code is a powerful and lightweight code editor for JavaScript and frontend development.

🔗 [Download VS Code](https://code.visualstudio.com/download)

### 3. Necessary VS Code Extensions
For a better development experience, install the following extensions:

- **Tailwind CSS IntelliSense** - Provides autocomplete and linting for Tailwind CSS.
- **Simple React Snippets** - Quick snippets for React development.
- **ES7 React/Redux/React-Native/JS snippets** - Useful shortcuts for React and Redux.
- **JavaScript and TypeScript Nightly** - Latest JavaScript and TypeScript features.
- **Material Icon Theme** - Enhances the file explorer with modern icons.

📌 To install extensions, go to **VS Code** → **Extensions (Ctrl + Shift + X)** → Search and Install.

---

## Frontend Setup

### 1. React.js
React.js is a popular frontend library for building user interfaces.

🔗 [Learn More](https://react.dev/)

### 2. Vite Bundler
Vite is a fast and efficient build tool for modern web applications.

🔗 [Learn More](https://vite.dev/)

### 3. Tailwind CSS
Tailwind CSS is a utility-first CSS framework for rapid UI development.

🔗 [Installation Guide](https://tailwindcss.com/docs/installation/using-vite)

### 4. ShadCN
ShadCN provides customizable and accessible UI components for React.

🔗 [Learn More](https://ui.shadcn.com/)

---

## Project Setup

### Frontend Setup Steps:
1. Create a new Vite project:
   ```sh
   npm create vite@latest
   ```
2. Navigate to the project directory:
   ```sh
   cd link-shortner
   ```
3. Open the project in VS Code:
   ```sh
   code .
   ```
4. Install dependencies:
   ```sh
   npm install
   ```
5. Install Tailwind CSS and its dependencies:
   ```sh
   npm install -D tailwindcss@3.3.3 postcss autoprefixer
   ```
6. Initialize Tailwind CSS:
   ```sh
   npx tailwindcss init -p
   ```
7. Create your own `jsconfig.json` file.
8. Initialize ShadCN:
   ```sh
   npx shadcn@latest init
   ```

---

## Backend Setup

### 1. Supabase
Supabase is an open-source Firebase alternative for backend services.

🔗 [Learn More](https://supabase.com/)

### Steps to Set Up Supabase:
1. **Create an Organization**
   - Go to [Supabase](https://supabase.com/) and sign in.
   - Click on "New Organization" and follow the steps to set up your organization.

2. **Create a Project**
   - Once the organization is created, click on "New Project".
   - Configure the database and project settings.
   - Create two tables in supabase project dashboard structure like this :
   - URLs Table
   - ![Table Structure](https://github.com/Tushar292004/link-shortner/blob/main/workshop-images/Screenshot%202025-02-02%20152621.png)\
   - custom_url settings :
   - ![Table Structure](https://github.com/Tushar292004/link-shortner/blob/main/workshop-images/Screenshot%202025-02-02%20152636.png)
   

   - Clicks Table
   - ![Table Structure](https://github.com/Tushar292004/link-shortner/blob/main/workshop-images/Screenshot%202025-02-02%20153045.png)
   - Update the foregin key relationshios to clicks
   - ![Table Structure](https://github.com/Tushar292004/link-shortner/blob/main/workshop-images/Screenshot%202025-02-02%20152840.png)
   - ![Table Structure](https://github.com/Tushar292004/link-shortner/blob/main/workshop-images/Screenshot%202025-02-02%20152851.png)


---

Now you're all set! 🚀 Happy coding! 🎉


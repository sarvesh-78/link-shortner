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
   - ![Table Structure](https://github.com/Tushar292004/link-shortner/blob/main/workshop-images/Screenshot%202025-02-02%20152621.png)
   - custom_url settings :
   - ![Table Structure](https://github.com/Tushar292004/link-shortner/blob/main/workshop-images/Screenshot%202025-02-02%20152636.png)
   
   - Clicks Table
   - ![Table Structure](https://github.com/Tushar292004/link-shortner/blob/main/workshop-images/Screenshot%202025-02-02%20153045.png)
   - Update the foregin key relationshios to clicks
   - ![Table Structure](https://github.com/Tushar292004/link-shortner/blob/main/workshop-images/Screenshot%202025-02-02%20152840.png)
   - ![Table Structure](https://github.com/Tushar292004/link-shortner/blob/main/workshop-images/Screenshot%202025-02-02%20152851.png)
     
---

# Project Name

## Overview
This project is designed to manage various layouts and pages in a React application. The folder structure includes layout components and pages that help organize the UI structure for different routes in the application.

## Folder Structure
The project follows this folder structure:
```bash
src/
├── layouts/ 
   └── app-layout.jsx 
├── pages/ 
   ├── auth.jsx 
   ├── dashboard.jsx 
   ├── landing.jsx  
   ├── link.jsx  
   └── redirect-link.jsx
├── components/ 
   ├──ui/
├── db/ 
├── hooks/ 
├── App.jsx
├── main.jsx
├── context.jsx
├── index.css
```
### Update App.jsx
```bash
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landing";
import LinkPage from "./pages/link";
import RedirectLink from "./pages/redirect-link";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/dashboard",
        element: (
            <Dashboard />
        ),
      },
      {
        path: "/link/:id",
        element: (
            <LinkPage />
        ),
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
```

### Update app-layout.tsx
```bash
import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="">
      <main className="min-h-screen">
        <Header />
        <Outlet />
      </main>
      {/* Footer */}
      <div className="p-5 text-center text-2xl font-semibold border-t-4 mt-10">
        Made by  Microsoft Club Sathyabama
      </div>
    </div>
  );
};

export default AppLayout;
```
### Create header.tsx inside components:
- Run these commanda in terminal
```bash
npx shadcn@latest add dropdown-menu button
npm i @radix-ui/react-avatar
```
- Code for header.tsx:
```bash
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import {LinkIcon, LogOut} from "lucide-react";

const Header = () => {

  const navigate = useNavigate();
  const user = true;  //dummy user

  return (
    <>
      <nav className="border-b-4">
        <div className="p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold ">
          Link-Shortner
        </Link>
        <div className="flex gap-4">
          {!user ? (
            <Button onClick={() => navigate("/auth")}>Login</Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger className="w-12 rounded-full overflow-hidden">
                <Avatar>
                  <AvatarImage src="https://github.com/Tushar292004.png" />
                  <AvatarFallback>TC</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  Your Name
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/dashboard" className="flex">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    My Links
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-red-400"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        </div>
      </nav>
      {/* {loading && <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />} */}
    </>
  );
}
export default Header;
```
### In pages update landing.jsx :
- Run this command in terminal
```bash
npx shadcn@latest add input accordion
```
- Code for landing.jsx:
```bash
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
    const [longUrl, setLongUrl] = useState("");
    const navigate = useNavigate();
    const handleShorten = (e) => {
        e.preventDefault();
        if (longUrl) navigate(`/auth?createNew=${longUrl}`);
    };

    return (
        <div className="flex flex-col items-center p-6">
            <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-center font-extrabold">
                The only URL Shortener <br /> you&rsquo;ll ever need! 👇
            </h2>
            <form
                className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
                onSubmit={handleShorten}
            >
                <Input
                    type="url"
                    placeholder="Enter your loooong URL"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    className="h-full flex-1 py-4 px-4"
                />
                <Button type="submit" className="h-full" variant="destructive">
                    Shorten!
                </Button>
            </form>
            <Accordion type="multiple" collapsible className="w-5/6 md:px-11 mt-8">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl">
                        How does the  Link Shortener works?
                    </AccordionTrigger>
                    <AccordionContent>
                        When you enter a long URL, our system generates a shorter version of
                        that URL. This shortened URL redirects to the original long URL when
                        accessed.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" >
                    <AccordionTrigger className="text-xl">
                        Do I need an account to use the app?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes. Creating an account allows you to manage your URLs, view
                        analytics, and customize your short URLs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-xl">
                        What analytics are available for my shortened URLs?
                    </AccordionTrigger>
                    <AccordionContent>
                        You can view the number of clicks, geolocation data of the clicks
                        and device types (mobile/desktop) for each of your shortened URLs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-xl">
                        Life span for my shortened URLs?
                    </AccordionTrigger>
                    <AccordionContent>
                        Your shorten URLs will stay live until you delete through our dashboard.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default LandingPage;
```
Now you're all set! 🚀 Happy coding! 🎉


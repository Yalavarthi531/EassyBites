# Project Architecture & Design Document - Eassy Bites

## 1. Executive Summary
**Project**: Eassy Bites - A premium e-commerce platform for edible cups.
**Goal**: To create a "close to nature," eco-friendly digital experience that allows users to browse products, manage a cart, and purchase edible cups.
**Current State**: A fully functional Single Page Application (SPA) built with React, integrated with Supabase for backend services, and featuring an AI-powered assistant.

---

## 2. Technical Architecture

### The Stack
We moved from a static HTML site to a modern **JAMstack** architecture to support dynamic features like user accounts and shopping carts.

| Layer | Technology | Justification ("Why?") |
| :--- | :--- | :--- |
| **Frontend Framework** | **React 19** | Static HTML cannot handle complex state (like a shopping cart that persists across pages) or dynamic user sessions. React allows us to build reusable, interactive components. |
| **Build Tool** | **Vite** | Chosen over Create React App (CRA) for its superior performance. It offers instant server start and hot module replacement (HMR), speeding up development. |
| **Routing** | **React Router v7** | Enables a "Single Page Application" feel. Users can switch between Home, Shop, and Cart *instantly* without the browser reloading the entire page. |
| **Backend / DB** | **Supabase** | We needed a database but didn't want to manage a server. Supabase provides a PostgreSQL database + Authentication out of the box, saving weeks of backend work. |
| **Styling** | **CSS Modules / Vanilla** | To maintain the custom "Nature Vibe" (glassmorphism, organic shapes) without fighting against a framework like Bootstrap. |

---

## 3. Component Dictionary
Here is a breakdown of the key files in your codebase and their specific responsibilities:

### Core Application
- **`src/main.jsx`**: The entry point. It "hydrates" the HTML with our React logic.
- **`src/App.jsx`**: The main layout container. It defines the **Routes** (which URL shows which page) and places the global `Navbar` and `Footer`.

### Pages (`src/pages/`)
- **`Home.jsx`**: The landing page. Focuses on storytelling and brand aesthetics.
- **`Shop.jsx`**: Displays the product catalog. (Future: Will fetch data from Supabase `products` table).
- **`Auth.jsx`**: **Critical Component**. Handles both Login and Signup. It interacts directly with `supabase.auth` to create users and manage sessions.
- **`Cart.jsx`**: Manages the shopping cart state (currently local, planned to move to Context/Database).

### Features (`src/components/`)
- **`Chatbot.jsx`**:
    - **Role**: AI Assistant ("Eassy Bot").
    - **Logic**: Uses a keyword-matching engine to simulate a persona. It intercepts user input, processes it against a knowledge base (ingredients, jokes), and returns a "futuristic & funny" response.
    - **Design**: Floating widget with glassmorphism to match the brand.
- **`Navbar.jsx` / `Footer.jsx`**: Reusable navigation elements present on every page.

### Backend Configuration
- **`src/supabaseClient.js`**:
    - **Role**: The bridge between your app and the cloud.
    - **Code**: Initializes the connection using your unique `SUPABASE_URL` and `ANON_KEY`.
    - **Why separate?**: Keeps the connection logic in one place. If we change databases later, we only update this file.
- **`supabase_schema.sql`**:
    - **Role**: The "Blueprint" for your database.
    - **Content**: SQL commands to create the `products` and `orders` tables and set up security policies (RLS).

---

## 4. Evolution Log

### Phase 1: The Static Prototype
- **What**: Created `index.html` and `style.css`.
- **Why**: To validate the *visual design* first. We focused on the "Nature Vibe," typography (Outfit font), and color palette before writing complex code.

### Phase 2: The React Migration
- **What**: Ported HTML to JSX. Split `index.html` into `Home.jsx`, `Navbar.jsx`, etc.
- **Why**: The code was becoming unmanageable. Splitting it into components made it easier to add new pages like "Shop" and "Contact" without copying and pasting the header 5 times.

### Phase 3: The Backend (Supabase)
- **What**: Installed `@supabase/supabase-js`. Created `Auth.jsx`.
- **Why**: You requested "Real Login." We needed a secure way to store users. Supabase handles the security (hashing passwords, managing tokens) so we don't have to.

### Phase 4: The AI Assistant
- **What**: Built `Chatbot.jsx`.
- **Why**: To add a "futuristic" element to the eco-friendly brand. It bridges the gap between a static store and an interactive experience.

---

## 5. Next Steps
- **Connect Shop to DB**: Currently, `Shop.jsx` uses static data. We should update it to fetch from the Supabase `products` table.
- **Order History**: Create a profile page where users can see their past orders (fetching from the `orders` table).

### Full-stack MERN E-Commerce Clothing Website
- Source: https://youtu.be/hpgh2BTtac8
- Date of starting: 03-12-2025 (Wednesday)
- Starting this tutorial with the intention to document and learn important intermediate website feature implementation such as cart system using Redux, authentication etc..

### Characteristics
- Prerequisites: basic understanding of React, TailwindCSS and backend NodeJS
- Website is made using React + TailwindCSS + NodeJS + MongoDB
- Using Redux for state management
- Using Redux Toolkit for managing card
- JSON Web Token for secure authentication and authorisation
- Search, sort, filter, admin panel features also implemented
- For handling async operations and making API calls, we use Redux Thunk
- To handle client side routing, we use React Router
- For icons, we use React Icons
- For images, we use Cloudinary Image API
- For payments, we use Paypal Payment Gateway
- First, frontend then backend is built in the tutorial
- Responsive website

### Notes
- Reason for using Redux - it stores global data in one central place (the “store”) so any component can access it easily (global state management). It solves prop drilling issue and makes a large website easier to build and maintain. In MERN, Redux helps share state like user info, cart, etc. across components. Redux Toolkit framework is an improved version of old Redux. Redux Thunk is a middleware that allows Redux to run async functions, mainly for API calls

### Beginning
- Get in frontend folder and create React JavaScript Vite project (at current directory) using `cd frontend` and `npm create vite@latest ./`
- To start frontend server, use command `npm run dev`
- React Vite TailwindCSS installation guide is at https://tailwindcss.com/docs/installation/using-vite
- `npm install tailwindcss @tailwindcss/vite` to install TailwindCSS
- Edit vite.config.ts so it looks something like this:
    ```
        import { defineConfig } from 'vite'
        import tailwindcss from '@tailwindcss/vite'
        
        export default defineConfig({
        plugins: [
        tailwindcss(),
        ],
        })
    ```
- Include `@import "tailwindcss";` in CSS file to import TailwindCSS
- Inter font (Google Fonts) is used from https://fonts.google.com/specimen/Inter (using `<link>` method)
- Install packages React Icons and React Router using `npm i react-router-dom react-icons` (this is the declarative method of using React Router as described at https://reactrouter.com/start/declarative/installation)

### Folder Structure
- Components > Admin, Cart, Common, Layout, Products
- Admin folder includes components like Admin dashboard, user management, order management
- Cart folder includes components related to shopping cart like Checkout, PayPal button
- Common folder includes Header, Footer, Navbarc
- Layout folder includes User layout, Hero layout, Card drawer
- Product folder includes Product rate, Product details
- Pages > Homepage, Admin homepage, Login page, Collection page
- Pages folder contains full pages or routes in this website

### Notes
- React websites are single page websites
- Websites like ecommerce sites have many different pages like homepage, product page, cart page
- Every page will have its own unique URL like /home, /products, /cart
- Traditionally, browser requests data from server and performs full page reload for each route
- But in client side routing, each route is handled in browser rather than server, making the website faster
- Till 50:34 in the video, only new concept learned from the video is in SearchBar.jsx (search bar feature)
- This comment is made at timestamp 2:15:00 into the tutorial. Do not even bother learning folder/directory/file structure and stuff. Learn the logic behind everything so it can be modofied and implemented in another project. Main learning points were the cart slide menu feature, mobile menu slide feature, search bar feature, sliding images in New Arrivals section till now
- Sonner library is used for toast notifications. To install it, do `npm install sonner` in terminal in the frontend folder
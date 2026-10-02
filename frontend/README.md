# Digital Weighing Systems --- Website Redesign

A responsive website redesign for Digital Weighing Systems (DWS), built
with React and Vite. The site presents the company, its industrial
weighing products, software division, awards, and downloadable resources
through a modern interface with smooth animations.

## Features

-   Responsive layouts for desktop, tablet, and mobile
-   Sticky navigation bar with a Product Division dropdown
-   Animated hero and content sections
-   Company overview and history/journey section
-   Awards and honours showcase with an animated marquee
-   Product showcase and individual product pages
-   Software Division page
-   Download center for company documents
-   Client and testimonial sections
-   Contact page
-   Framer Motion animations
-   Lazy-loaded pages with React Router
-   Full-page snap scrolling on the Home page

## Tech Stack

-   **React** --- UI components
-   **Vite** --- development server and build tool
-   **React Router DOM** --- client-side routing
-   **Tailwind CSS** --- responsive styling
-   **Framer Motion** --- animations
-   **Lucide React** --- icons

## Project Structure

``` text
dws/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── README.md
```

## Pages

-   `/` --- Home
-   `/about` --- About Us
-   `/software-division` --- Software Division
-   `/download` --- Downloads
-   `/contact` --- Contact

### Product Pages

-   `/products/rail-weigh-bridges`
-   `/products/road-weigh-bridges`
-   `/products/unmanned-weigh-bridge`
-   `/products/spare-parts`
-   `/products/on-board-weighing`
-   `/products/belt-weighing`
-   `/products/bin-tank-weighing`

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (includes npm)
-   Git

### 1. Clone the repository

``` bash
git clone https://github.com/Molyshrivastava/dws.git
cd dws
```

### 2. Go to the frontend directory

``` bash
cd frontend
```

### 3. Install dependencies

``` bash
npm install
```

### 4. Start the development server

``` bash
npm run dev
```

Open the local URL shown in the terminal. Vite commonly uses
`http://localhost:5173`; if that port is busy, it may choose another
one.

## Available Scripts

Run these commands from the `frontend` directory:

``` bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

## Responsive Design

The interface uses responsive Tailwind CSS utilities to adapt
navigation, typography, spacing, and content sections to desktop,
tablet, and mobile screens.

## Main Components

The project uses reusable components for sections such as:

-   Navbar and Footer
-   Hero
-   Company Overview
-   About and Our Journey
-   Awards Showcase
-   Product Showcase
-   Process
-   Software Showcase
-   Our Clients and Testimonials
-   Download Center

## Deployment

The frontend can be deployed to a static hosting platform such as
Netlify or Vercel. Configure the project's build settings for the
`frontend` directory:

-   **Build command:** `npm run build`
-   **Publish directory:** `dist`

## Push Updates to GitHub

After making changes, run these commands from the repository root:

``` bash
git status
git add .
git commit -m "Update DWS website"
git push
```

Use a commit message that describes your changes, for example:

``` bash
git add .
git commit -m "Refine awards cards and responsive layout"
git push
```

## Project

**Digital Weighing Systems --- Website Redesign**

A React-based website redesign focused on responsive presentation,
reusable UI components, product information, and animated visual
sections.

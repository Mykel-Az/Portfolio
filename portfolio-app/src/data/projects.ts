export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  links: { label: string; url: string }[];
  problem: string;
  role: string;
  architecture: string;
  screenshot?: string; // path relative to /public, e.g. "/images/retailbox-app.png"
}

const projects: Project[] = [
  {
    id: "retailbox-app",
    name: "RetailBox — POS App",
    tagline: "All-in-one point-of-sale & business management platform",
    description:
      "A complete POS solution for managing products, customers, sales, and team members — built for retail businesses of every size.",
    stack: ["React", "Python", "TypeScript", "Docker", "PostgreSQL"],
    links: [
      { label: "Live app", url: "https://app.retailbox.co" },
      { label: "Website", url: "https://retailbox.co" },
    ],
    problem:
      "Retail businesses typically juggle multiple disconnected tools — separate apps for inventory, sales, staff, and customers. This creates friction, data gaps, and overhead that hurts small businesses the most.\n\nRetailBox consolidates all of that into a single, fast, reliable platform that works for a one-person shop and scales to a multi-location operation.",
    role:
      "I worked as a fullstack engineer, owning both the frontend application and the backend API layer. On the frontend I architected the React + TypeScript app structure, built the POS interface, inventory views, and customer management flows.\n\nOn the backend I designed the core business logic, database schema, and REST API endpoints. I also set up the Docker configuration that kept local and production environments consistent.",
    architecture:
      "The frontend is a React + TypeScript SPA styled with Tailwind CSS. State is managed with React context and custom hooks — no heavy state library needed.\n\nThe backend is a Python service containerised with Docker. PostgreSQL is the database, designed with a multi-tenant schema so each business gets isolated data without separate database instances.",
    screenshot: "/images/retailbox_app.png"
  },
  {
    id: "retailbox-engine",
    name: "RetailBox — Engine API",
    tagline: "High-performance retail management REST API",
    description:
      "The backend powering the entire RetailBox ecosystem — built for performance, with interactive Swagger docs and a public Postman collection.",
    stack: ["Django", "PostgreSQL", "Postman", "Swagger / OpenAPI"],
    links: [
      { label: "Postman docs", url: "https://postman.retailbox.co/" },
    ],
    problem:
      "As RetailBox grew across multiple sub-products — the POS app, the storefront, the marketing site — there was a need for a single, well-documented API layer all of them could depend on reliably.\n\nThe engine needed to handle concurrent retail operations without bottlenecks, and be straightforward for developers to integrate with.",
    role:
      "I designed and built the Engine API from scratch using Django REST Framework. My responsibilities covered data model design, endpoint architecture, the authentication and permissions layer, and documentation setup.\n\nI also maintained the Postman collection and configured Swagger docs to make the API self-serve for integration work.",
    architecture:
      "Built on Django REST Framework with PostgreSQL. Endpoints are organised by resource domain with consistent response shapes and error codes throughout.\n\nAuthentication uses token-based auth with scoped permissions — staff tokens carry different access levels than admin tokens. Swagger docs are auto-generated via drf-spectacular, keeping documentation always in sync with the actual API.",
    screenshot: "/images/retailbox_engine.png"
  },
  {
    id: "cafe-fausse",
    name: "Cafe Fausse",
    tagline: "Full-stack restaurant reservation & admin system",
    description:
      "A full-stack reservation platform with real-time availability, customer validation, booking management, and a password-protected staff portal.",
    stack: ["React", "Flask", "PostgreSQL"],
    links: [
      { label: "Live site", url: "https://cafefausseplace.vercel.app" },
      { label: "Staff portal", url: "https://cafefausseplace.vercel.app/admin" },
    ],
    problem:
      "Restaurants often rely on phone calls or generic third-party booking widgets that give them no control or visibility into their reservations.\n\nCafe Fausse needed a custom system that handled table availability in real time, validated customer details before confirming, and gave staff a clean interface to manage the day.",
    role:
      "I built the entire system end-to-end — both the customer-facing booking flow and the staff admin portal. This covered the React frontend, Flask API, PostgreSQL schema, and deployment.",
    architecture:
      "The frontend is a React SPA with two distinct route groups: the public booking flow and a password-protected staff portal.\n\nThe backend is a lightweight Flask API handling booking creation, availability queries, and admin operations. Availability is computed in real time from existing bookings and configurable table capacity — no static slot system.",
    screenshot: "/images/cafe_fausse.png"
  },
  {
    id: "bluediamond",
    name: "BlueDiamond Solutions",
    tagline: "Corporate website with booking & media management",
    description:
      "A professional corporate site with service pages, project showcases, contact forms, and consultation booking — with CMS-style content management built in.",
    stack: ["Django", "Python", "Tailwind CSS", "Cloudinary"],
    links: [
      { label: "Live site", url: "https://bluediamondsolutions.org/" },
    ],
    problem:
      "BlueDiamond Solutions needed a professional web presence that showcased their services clearly, handled consultation booking, and let non-technical staff update content without developer involvement.",
    role:
      "I was the sole developer, handling everything from architecture to deployment: Django backend, Tailwind-styled templates, Cloudinary media integration, and contact and booking forms.",
    architecture:
      "A server-rendered Django application using Django's template engine — a deliberate choice over a decoupled SPA for a content-heavy site.\n\nContent is managed through Django's built-in admin interface. Media files are stored and served via Cloudinary, keeping the deployment server lightweight. The booking form triggers an email notification on new submissions.",
    screenshot: "/images/bds.png"
  },
  {
    id: "merch-visualizer",
    name: "Merch Visualizer",
    tagline: "Real-time 2D product customisation tool",
    description:
      "A web-based tool that lets users design and preview branded merchandise in real time — customising colours, text, and logo placement before ordering.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    links: [
      {
        label: "Live demo",
        url: "https://bluediamondsolutions.org/services/graphics-design/visualizer/",
      },
    ],
    problem:
      "Clients ordering branded merchandise had difficulty communicating what they wanted — describing placement, colours, and sizing over email was slow and error-prone.\n\nThe visualizer lets clients configure a product themselves and see changes in real time, cutting the back-and-forth significantly.",
    role:
      "I designed and built the visualizer as a standalone React app embedded in the BlueDiamond site — responsible for the canvas rendering logic, customisation controls, and the export-to-image functionality.",
    architecture:
      "A React + TypeScript app with no backend dependency — all rendering happens client-side on an HTML Canvas element. Product templates are loaded as layered assets; customisations are applied as canvas transformations on top.\n\nState is managed with React hooks. The export uses Canvas API's toDataURL to generate a downloadable preview image.",
    screenshot: "/images/merch-visualizer.png"
  },
  // {
  //   id: "retailbox-storefront",
  //   name: "RetailBox — Storefront",
  //   tagline: "Out-of-the-box e-commerce webstore for RetailBox users",
  //   description:
  //     "An e-commerce storefront automatically generated from a RetailBox user's existing product catalogue — letting retail businesses go online instantly.",
  //   stack: ["React", "Next.js", "Tailwind CSS"],
  //   links: [
  //     { label: "Live storefront", url: "https://storefront.retailbox.co" },
  //     { label: "Website", url: "https://retailbox.co" },
  //   ],
  //   problem:
  //     "RetailBox users manage inventory in the app but had no easy path to selling online. Setting up a separate store meant duplicating their catalogue and managing two disconnected systems.\n\nThe Storefront bridges that gap: each business gets a storefront automatically generated from their existing catalogue, with no extra setup.",
  //   role:
  //     "I built the Storefront as a Next.js application pulling product and business data from the RetailBox Engine API — covering page architecture, data fetching, product listing and detail views, and the cart flow.",
  //   architecture:
  //     "A Next.js app using server-side rendering for product pages, ensuring catalogue data is always fresh and pages are indexable by search engines.\n\nProduct data is fetched from the Engine API at request time, scoped to the specific business via subdomain. The cart is managed client-side with React context. Tailwind CSS provides a neutral design so the storefront suits any type of retail business.",
  //   screenshot: "/images/retailbox-storefront.png"
  // },
];

export default projects;
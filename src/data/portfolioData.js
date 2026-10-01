export const personalDetails = {
  name: "Kishor Hadiya",
  title: "Fresher MERN Stack Developer",
  statusBadge: "Fresher MERN Stack Developer | Open to Opportunities 🚀",
  bio: "Passionate Fresher MERN Stack Developer with hands-on knowledge in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Dedicated to developing scalable, responsive, and user-friendly web experiences.",
  email: "hadiyakishor01@gmail.com",
  location: "Ahmedabad, Gujarat",
  resumeUrl:
    "https://drive.google.com/file/d/110O5hs0pIfMA2mTvHEIsZPiV9pv_J6n9/view?usp=sharing", // Replace with your resume PDF link
  socials: {
    github: "https://github.com/Kishorhadiya",
    linkedin:
      "https://www.linkedin.com/in/kishorhadiya?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
};

export const skillsCategories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Other",
];

export const skillsData = [
  // Frontend
  {
    name: "HTML",
    category: "Frontend",
    icon: "Layout",
    level: "Advanced",
    percentage: 95,
    color: "from-orange-500 to-amber-500",
    desc: "Semantic elements, modern web accessibility (a11y), clean document structure.",
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: "Palette",
    level: "Advanced",
    percentage: 90,
    color: "from-blue-400 to-cyan-500",
    desc: "Flexbox, CSS Grid, custom properties, animations, and responsive styling.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "FileCode",
    level: "Advanced",
    percentage: 88,
    color: "from-amber-400 to-yellow-500",
    desc: "ES6+ syntax, Promises, Async/Await, DOM manipulation, and event handling.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "Palette",
    level: "Advanced",
    percentage: 92,
    color: "from-cyan-400 to-teal-400",
    desc: "Utility-first responsive layouts, glassmorphism, and dark mode themes.",
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: "Atom",
    level: "Advanced",
    percentage: 90,
    color: "from-cyan-500 to-blue-500",
    desc: "Component architecture, Hooks (useState, useEffect), Context API, and state management.",
  },
  // Backend
  {
    name: "Node.js",
    category: "Backend",
    icon: "Cpu",
    level: "Intermediate",
    percentage: 84,
    color: "from-emerald-500 to-green-600",
    desc: "Server-side JavaScript environment, NPM modules, asynchronous I/O.",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "Layers",
    level: "Intermediate",
    percentage: 85,
    color: "from-slate-400 to-slate-600",
    desc: "RESTful API creation, routing, middleware integration, request handling.",
  },
  // Database
  {
    name: "MongoDB",
    category: "Database",
    icon: "Database",
    level: "Intermediate",
    percentage: 82,
    color: "from-emerald-400 to-teal-600",
    desc: "NoSQL document database, Mongoose ODM, CRUD operations, schemas.",
  },
  // Other
  {
    name: "REST API",
    category: "Other",
    icon: "Globe",
    level: "Advanced",
    percentage: 88,
    color: "from-violet-500 to-purple-600",
    desc: "API endpoints design, JSON data exchange, HTTP methods, frontend integration.",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Event Management System",
    category: "React.js",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",

    shortDesc:
      "A modern event management web application built using React.js with a responsive and interactive user interface.",

    techStack: [
      "React.js",
      "React Router DOM",
      "Tailwind CSS",
      "JavaScript",
      "Axios",
      "Framer Motion",
    ],

    liveUrl: "https://veloura-hub.netlify.app/",
    githubUrl: "https://github.com/Kishorhadiya",

    highlights: [
      "Built a responsive event management interface using React.js.",
      "Implemented event browsing, event details, ticket booking, and user profile features.",
      "Added client-side routing and interactive UI components for a smooth user experience.",
      "Implemented state management and local storage for favorites, wallet balance, and user-related data.",
      "Designed a modern and responsive UI using Tailwind CSS and Framer Motion.",
    ],

    fullDetails:
      "A modern event management web application developed using React.js. The platform allows users to explore events, view event details, book tickets, manage favorites, and interact with different sections through a responsive and user-friendly interface. React Router DOM is used for navigation, while Tailwind CSS and Framer Motion are used to create a modern and interactive user experience.",
  },
  {
    id: 2,
    title: "Assignment Management System",
    category: "MERN Stack",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    shortDesc:
      "A MERN stack based assignment management platform to create, manage, and track assignments.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
    liveUrl: "https://edu-flow-frontend-delta.vercel.app/",
    githubUrl: "https://github.com/Kishorhadiya",
    highlights: [
      "Full CRUD operations for assignment creation, updates, and submissions.",
      "Efficient user-friendly interface designed for tracking progress.",
      "Secure RESTful API backend handling data validation and persistence.",
    ],
    fullDetails:
      "A MERN stack based assignment management platform where users can create, manage, and track assignments with an efficient user-friendly interface.",
  },
  {
    id: 3,
    title: "Money Management System",
    category: "MERN Stack",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    shortDesc:
      "A personal finance management system developed using PHP and MySQL for income and expense tracking.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    liveUrl: "https://money-management-frontend-e5u9.vercel.app/login",
    githubUrl: "https://github.com/Kishorhadiya",
    highlights: [
      "Engineered database relations in MySQL for income/expense category tracking.",
      "Calculated total balances, monthly summaries, and financial reports.",
      "Clean server-side scripting in PHP for secure database queries.",
    ],
    fullDetails:
      "A full-stack Money Management application built using MongoDB, Express.js, React.js, and Node.js. Users can manage income and expenses, track transactions, monitor budgets, and analyze their financial data through a responsive and user-friendly interface.",
  },
  {
    id: 4,
    title: "TREO.TECH STORE",
    category: "MERN Stack",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
    shortDesc:
      "A full-featured MERN stack e-commerce web platform with product catalog, cart & checkout, JWT authentication, and admin order management.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "REST API",
    ],
    liveUrl: "https://ecomsystems-frontend.onrender.com/",
    githubUrl: "https://github.com/Kishorhadiya/EcomSystems",
    highlights: [
      "Built responsive shopping storefront with product search, filtering, and detail views.",
      "Designed secure RESTful API with Node.js and Express.js with JWT authentication.",
      "Engineered MongoDB database schemas for products, user orders, and inventory.",
      "Added admin dashboard capabilities for product CRUD and order status updates.",
    ],
    fullDetails:
      "A production-grade full-stack E-Commerce platform built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The platform allows users to explore products by categories, search items, manage cart quantities, securely authenticate, and place orders. Includes an administrator dashboard to add/edit products, manage stock, and track order fulfillment.",
  },
  {
    id: 5,
    title: "CHAT APPLICATION",
    category: "MERN Stack",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80",
    shortDesc:
      "A real-time MERN stack chat application with Socket.IO, user authentication, private messaging, online status, and instant message delivery.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.IO",
      "JWT",
      "REST API",
    ],
    liveUrl: "https://frontend-ms1h.onrender.com/",
    githubUrl: "https://github.com/Kishorhadiya/WebSocketSocketio.git",
    highlights: [
      "Built a real-time chat application using Socket.IO for instant message delivery.",
      "Implemented private one-to-one messaging between authenticated users.",
      "Designed RESTful APIs with Node.js and Express.js for users and chat management.",
      "Integrated MongoDB for storing users, messages, chat rooms, and message status.",
      "Implemented online/offline user status and real-time message updates.",
      "Added JWT-based authentication for secure user access.",
    ],
    fullDetails:
      "A full-stack real-time Chat Application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) with Socket.IO for real-time communication. The application allows authenticated users to communicate through private chats, send and receive messages instantly, view online/offline status, and manage conversations. Socket.IO enables real-time communication between clients and the server without requiring page refreshes, while MongoDB stores user and message data securely.",
  },
  {
    id: 6,
    title: "Employee Management System",
    category: "MERN Stack",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    shortDesc:
      "A full-featured MERN stack Employee Management System to streamline employee onboarding, department tracking, leave requests, and role-based access control.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "JWT",
      "REST API",
    ],
    liveUrl: "https://team-ops-frontend.vercel.app/",
    githubUrl: "https://github.com/Kishorhadiya/TeamOps.git",
    highlights: [
      "Engineered comprehensive CRUD operations for employee profiles, department allocation, and designations.",
      "Implemented Role-Based Access Control (Admin & Employee) using JWT authentication and secure middleware.",
      "Built leave management workflow allowing employees to apply for leave and admins to approve or reject requests.",
      "Designed an interactive admin dashboard displaying department statistics, headcount, and employee records.",
      "Constructed secure RESTful APIs with Node.js & Express.js with robust input validation and error handling.",
      "Developed MongoDB schemas with Mongoose for relational data modeling between departments, users, and leaves.",
    ],
    fullDetails:
      "A comprehensive Employee Management System built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application simplifies organizational administration with centralized employee records management, role-based authentication, department allocations, leave tracking, and salary overview. Admins can manage employee directories, process leave requests, and oversee departments, while employees can view their profile data and track application statuses seamlessly.",
  },
];



export const educationTimeline = [
  {
    type: "degree",
    title: "Bachelor of Computer Applications (BCA)",
    college: "T. N. Rao College of Information Technology",
    university: "Saurashtra University",
    period: "2023 - 2026",
    description:
      "Gained strong foundational knowledge in software development, core programming concepts, database management, and modern web technologies.",
  },
];

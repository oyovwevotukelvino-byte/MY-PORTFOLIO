import noraImg      from '../assets/nora.png';
import weatherImg   from '../assets/weather.png';
import ecommerceImg from '../assets/ecommerce.png';
import ticImg       from '../assets/tictactoe.png';
import sunflexImg   from '../assets/sunflex.png';
import DavidImg     from '../assets/david.png';

export const projects = [
  {
    id: 1,
    slug: "nora-clouds",
    title: 'Nora Clouds',
    tagline:
    "A modern cloud platform built for businesses to securely store and manage files.",
    desc: 'A full-stack cloud platform built for real-world business use cases. Scaled from idea to 100+ users in 3 months, enabling real-time cloud storage for SMEs.',
     problem:
    "Many SMEs lacked an affordable cloud storage solution with a simple user experience.",
    solution:
    "Built a scalable cloud platform with secure authentication, file management, and an intuitive dashboard.",

    tech: ['React', 'Node.js', 'Cloud Storage', 'Full-Stack'],
    image: noraImg,
    live: 'https://noraclouds.vercel.app/',
    github: '',
    featured: true,
    category: 'SaaS / Cloud',
    status: 'Live',
    year: 2024,
    metrics: [
      { label: 'Users',        value: '100+'  },
      { label: 'Time to scale', value: '3 mo' },
      { label: "Platform", value: "Cloud" },
      { label: 'Stack',        value: 'Full'  },
    ],
    features: [
     "Cloud Storage",
     "Authentication",
     "Dashboard",
     "Responsive Design",
     "File Management",
     "Real-Time Data"
   ],
    role: "Full-Stack Developer",

 duration: "3 Months",

 team: "Founder",

 

 goals: [
  "Launch MVP quickly.",
  "Validate product with real users.",
  "Build scalable architecture."
 ],

 process: [
  "Designed product architecture.",
  "Built authentication.",
  "Implemented cloud storage.",
  "Created responsive dashboard.",
  "Optimized deployment."
 ],

 challenges: [
  "Managing file uploads efficiently.",
  "Designing scalable storage architecture.",
  "Improving user onboarding."
 ],

 results: [
  "100+ users.",
  "Production deployment.",
  "Validated product idea."
 ],

 lessons: [
  "User feedback drives better products.",
  "Architecture decisions matter early."
 ],

 nextSteps: [
  "Team collaboration.",
  "Subscription billing.",
  "Analytics dashboard."
 ]
  },
  {
    id: 2,
    slug: "weather-app",
    title: 'Weather App',
    tagline:
    "A fast weather application delivering real-time forecasts and location-based weather information.",

    desc: 'Real-time weather app with live forecasts and location detection.',
    problem:
    "Users often need a quick way to check accurate weather information without navigating cluttered websites.",
    solution:
    "Built a lightweight React application that fetches live weather data based on the user's location while maintaining a simple and responsive interface.",
    metrics: [
      { label: "Forecast", value: "Live" },
     { label: "Location", value: "GPS" },
     { label: "API", value: "Weather" },
     { label: "Status", value: "Online" },
    ],
    tech: ['React', 'Weather API', 'Tailwind'],
    image: weatherImg,
    live: 'https://weather-app-network.vercel.app/',
    github: '',
    featured: false,
    category: 'Web App',
    status: 'Live',
    year: 2024,
    role: "Frontend Developer",

   duration: "3 Week",

   team: "Solo Project",



 goals: [
  "Learn API integration.",
  "Practice asynchronous programming.",
  "Build responsive layouts."
 ],

 process: [
  "Integrated Weather API.",
  "Added search.",
  "Designed responsive interface."
 ],

 challenges: [
  "Handling invalid locations.",
  "Managing loading states."
 ],

 results: [
  "Live weather.",
  "Responsive design."
 ],

 lessons: [
  "API error handling is important.",
  "Small projects improve frontend skills."
 ],

 nextSteps: [
  "Hourly forecast.",
  "Weather maps."
 ]
  },
  {
    id: 3,
    slug: "ecommerce-store",
    title: 'E-Commerce Store',
    tagline:
    "A modern online shopping platform with a smooth purchasing experience.",
    problem:
    "Small businesses need affordable online stores that provide a professional shopping experience.",

    desc: 'Full-featured online store with cart, checkout and product listings.',
     solution:
    "Developed an e-commerce application focused on usability, secured payment gateway responsive layouts, and intuitive customer interactions.",
    metrics: [
    { label: "Checkout", value: "Secure" },
    { label: "Products", value: "Dynamic" },
    { label: "Cart", value: "Realtime" },
    { label: "Store", value: "Online" },
  ],
    tech: ['React', 'Netlify', 'Tailwind'],
    image: ecommerceImg,
    live: 'https://ecommercebuynow.netlify.app/',
    github: '',
    featured: false,
    category: 'E-Commerce',
    status: 'Live',
    year: 2024,
    role: "Full-Stack Developer",

   duration: "2025",

   team: "Solo Project",



   goals: [
   "Practice full-stack architecture.",
   "Build reusable UI.",
   "Learn state management."
  ],

  process: [
  "Designed storefront.",
  "Built cart logic.",
  "Implemented checkout flow."
 ],

 challenges: [
  "Managing cart state.",
  "Responsive layouts."
 ],

 results: [
  "Fully functional storefront.",
  "Live deployment."
 ],

 lessons: [
  "State management is critical.",
  "Good UX improves conversion."
 ],

 nextSteps: [
  "Payment integration.",
  "Admin dashboard."
 ]
  },
  {
    id: 4,
    slug: "tic-tac-toe",
    title: 'Tic Tac Toe',
    tagline:
    "A classic game rebuilt with React and interactive gameplay.",
    desc: 'Interactive two-player Tic Tac Toe game with clean UI and win detection.',
    problem:
    "Create a fun interactive project that demonstrates React state management and game logic.",
    solution:
    "Implemented a responsive game using React hooks to manage turns, winning combinations, and game resets.",
    role: "Frontend Developer",

   duration: "2 Days",

   team: "Solo Project",

   metrics: [
   { label: "Players", value: "2" },
   { label: "Winner", value: "Auto" },
   { label: "Responsive", value: "Yes" },
   { label: "Deploy", value: "Vercel" },
   ],
    tech: ['React', 'Vercel'],
    image: ticImg,
    live: 'https://tic-tac-toe-game-app-one.vercel.app/',
    github: '',
    featured: false,
    category: 'Game',
    status: 'Live',
    year: 2024,

    goals: [
  "Practice React state.",
  "Improve UI logic."
 ],

 process: [
  "Designed board.",
  "Implemented game logic.",
  "Added restart functionality."
 ],

 challenges: [
  "Winning conditions.",
  "Game state management."
 ],

 results: [
  "Fully playable game."
 ],

 lessons: [
  "Small projects reinforce fundamentals."
 ],

 nextSteps: [
  "AI opponent.",
  "Online multiplayer."
 ]
  },
  {
    id: 5,
    slug: "sunflex-solar-galaxy",
    title: 'Sun Flex Solar Galaxy',
    tagline:
    "A premium digital platform promoting sustainable solar energy solutions.",
    role: "Frontend Developer",

    duration: "2025",

   team: "Solo Project",
    desc: 'Premium unlimited solar energy platform for modern Africa — solar installations, energy management and monitoring.',
    problem:
    "Many renewable energy companies struggle to communicate their services through outdated websites that fail to build customer trust.",
    solution:
    "Designed and developed a premium website with a modern user experience that clearly presents solar services while reinforcing the company's credibility.",
   metrics: [
    { label: "Industry", value: "Energy" },
    { label: "Platform", value: "Modern" },
    { label: "Responsive", value: "100%" },
    { label: "Deploy", value: "Live" },
],
    tech: ['React', 'Vercel', 'Tailwind'],
    image: sunflexImg,
    live: 'https://sunflexsolargalaxy.vercel.app/',
    github: '',
    featured: false,
    category: 'Energy / Startup',
    status: 'Live',
    year: 2024,

    goals: [
  "Improve brand credibility.",
  "Generate leads.",
  "Showcase services."
 ],

 process: [
  "Designed landing page.",
  "Created service sections.",
  "Optimized responsiveness."
 ],

 challenges: [
  "Communicating technical services clearly.",
  "Balancing visuals and performance."
 ],

 results: [
  "Professional company website.",
  "Improved online presence."
 ],

 lessons: [
  "Design strongly influences trust."
 ],

 nextSteps: [
  "Quote calculator.",
  "Customer portal."
 ]
  },
  {
    id: 6,
    slug: "david-uchechukwu-ministry",
    title: 'David Uchechukwu Ministry Platform',
    tagline:
    "A modern ministry platform powered by Next.js and Sanity CMS.",
    desc: 'A premium ministry platform built with Next.js and Sanity CMS, enabling administrators to publish sermons, devotionals, categories, and ministry content through a powerful headless CMS with SEO optimization and responsive design.',
    problem:
    "Traditional ministry websites are difficult to update and often require developers to publish sermons or devotionals.",
    solution:
    "I built a modern CMS-powered platform where ministry content can be created, edited and published without writing code.",

    metrics: [
    { label: "CMS", value: "Sanity" },
    { label: "Framework", value: "Next.js" },
    { label: "SEO", value: "Optimized" },
    { label: "Deployment", value: "Vercel" },
  ],
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Sanity CMS',
      'Framer Motion',
      'Vercel'
    ],
    image: DavidImg,
    live: 'https://daviduchechukwu.vercel.app/',
    github: '',
    featured: false,
    category: 'CMS / Ministry Platform',
    status: 'Live',
    year: 2026,
    
    features:[
     "Sanity CMS",
     "Dynamic Sermons",
     "Devotionals",
     "SEO Optimization",
     "Open Graph",
     "Responsive Design",
     "Share Buttons",
     "Category Filtering",
     "Dynamic Routing",
     "Image Optimization"
  ],
  role: "Full-Stack Developer",

 duration: "2026",

 team: "Solo Project",

 goals: [
  "Build a premium ministry website.",
  "Enable non-technical administrators to publish content.",
  "Improve discoverability through SEO.",
  "Provide an excellent reading experience on mobile and desktop."
 ] ,

 process: [
  "Designed the content architecture using Sanity CMS.",
  "Created reusable Next.js components for sermons, categories and ministry pages.",
  "Integrated dynamic routing with static metadata generation.",
  "Implemented responsive layouts using Tailwind CSS.",
  "Added Open Graph metadata and social sharing.",
  "Optimized images and performance for production."
 ],

 challenges: [
  "Designing a CMS structure that remains simple for ministry administrators.",
  "Generating dynamic SEO metadata for every sermon.",
  "Keeping the interface lightweight while supporting rich content."
 ],

 results: [
  "Responsive ministry platform.",
  "Dynamic CMS publishing.",
  "SEO-ready pages.",
  "Fast page loading.",
  "Easy content management."
 ],

 lessons: [
  "Headless CMS architecture scales far better than hardcoded content.",
  "SEO should be planned from the beginning, not added later.",
  "Good component architecture makes future features much easier."
 ],

 nextSteps: [
  "Newsletter integration.",
  "Podcast support.",
  "Search functionality.",
  "Prayer request portal."
 ]
  },
];
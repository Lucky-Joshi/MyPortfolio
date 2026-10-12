export const projects = [
  {
    id: 'mentixo',
    slug: 'mentixo-ai',
    category: 'fullstack ai',
    tagline: 'AI study assistant for doubt solving, quizzes and analytics',
    metaTitle: 'Mentixo AI – Full Stack AI Study Assistant | Lucky Joshi',
    metaDescription:
      'Mentixo AI is a full stack AI study assistant with OCR doubt solving, AI quiz generation and learning analytics, built with React, Node.js and MongoDB.',
    year: '2025',
    image: '/mentixo.png',
    imageAlt: 'Mentixo AI dashboard showing OCR doubt solving, quiz generation and learning analytics',
    imageWidth: 2762,
    imageHeight: 1538,
    title: 'Mentixo AI',
    description:
      'A full-stack AI study assistant for doubt solving, OCR workflows, quiz generation, and analytics. Built with React, Node.js, MongoDB, REST APIs, and the Gemini API for real student workflows.',
    summary:
      'Mentixo AI is a full-stack study assistant that turns scattered questions into structured learning. Students capture a doubt, the app reads it with OCR, answers it with the Gemini API, and turns the topic into a quiz with progress analytics.',
    problem: [
      'Students collect doubts across notes, screenshots and textbooks, then wait for someone to answer them.',
      'Creating practice quizzes by hand is slow and repetitive, which makes revision inconsistent.'
    ],
    approach: [
      'Built a React interface backed by a Node.js and Express REST API with MongoDB for persistence.',
      'Integrated the Gemini API for OCR-based doubt solving and automated quiz generation.',
      'Added an analytics dashboard so learners can review accuracy and progress over time.'
    ],
    features: [
      'OCR-based doubt solving from screenshots and images',
      'AI quiz generation with adjustable difficulty',
      'Progress and accuracy analytics dashboard',
      'Document and notes workspace'
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Gemini API', 'Tailwind CSS'],
    role: [
      'Designed and built the full-stack architecture',
      'Implemented the REST API and MongoDB data models',
      'Integrated the Gemini API and built the React UI'
    ],
    results: [
      'Shipped a working product with a live demo on Netlify.',
      'Covers the full learning loop from question capture to quiz and analytics.'
    ],
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://mentixo.netlify.app/',
    liveTitle: 'Open Mentixo AI live demo',
    codeUrl: 'https://github.com/Lucky-Joshi',
    codeTitle: 'View Mentixo AI source code on GitHub'
  },
  {
    id: 'devflow',
    slug: 'devflow',
    category: 'fullstack',
    tagline: 'Kanban project and task manager for developers',
    metaTitle: 'DevFlow – Full Stack Kanban Project Manager | Lucky Joshi',
    metaDescription:
      'DevFlow is a full stack Kanban project manager with task tracking and delivery analytics, built with React, Node.js, PostgreSQL and Tailwind CSS.',
    year: '2025',
    image: '/devflow.png',
    imageAlt: 'DevFlow Kanban board with project tracking, task management and analytics dashboard',
    imageWidth: 2880,
    imageHeight: 1704,
    title: 'DevFlow',
    description:
      'A full-stack developer productivity system with Kanban boards, project tracking, analytics, REST APIs, and responsive web design using React, Node.js, PostgreSQL, and Tailwind CSS.',
    summary:
      'DevFlow is a productivity platform that keeps tasks, projects and progress in one place. Developers organize work on Kanban boards, track projects, and watch delivery metrics update in real time.',
    problem: [
      'Task tracking gets split across notes, chat and issue trackers, so priorities are easy to lose.',
      'Developers want a single, fast board with analytics instead of jumping between tools.'
    ],
    approach: [
      'Built drag-and-drop Kanban boards in React with a clean, responsive layout.',
      'Created a Node.js REST API over a PostgreSQL database for boards, columns and tasks.',
      'Added an analytics view for throughput and workload visibility.'
    ],
    features: [
      'Drag-and-drop Kanban boards and columns',
      'Project and task tracking with statuses',
      'Delivery analytics and workload overview',
      'Responsive layout for desktop and mobile'
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'Tailwind CSS'],
    role: [
      'Built the React front end and board interactions',
      'Designed the PostgreSQL schema and REST API',
      'Implemented the analytics views'
    ],
    results: [
      'Delivered a deployed full-stack app with a live demo.',
      'Demonstrates database design, API work and complex UI state management.'
    ],
    tags: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://dev-flow-manager.netlify.app/',
    liveTitle: 'Open DevFlow live demo',
    codeUrl: 'https://github.com/Lucky-Joshi',
    codeTitle: 'View Lucky Joshi GitHub for DevFlow source code'
  },
  {
    id: 'periodic-game',
    slug: 'periodic-table-game',
    category: 'games frontend',
    tagline: 'Interactive chemistry game for learning the periodic table',
    metaTitle: 'Periodic Table Game – JavaScript Chemistry Quiz | Lucky Joshi',
    metaDescription:
      'An interactive JavaScript game for learning the periodic table, with multiple quiz modes, live scoring and a high-score leaderboard in the browser.',
    year: '2024',
    image: '/periodic-game.png',
    imageAlt: 'Periodic Table Game interface with game modes, element questions and a high-score leaderboard',
    imageWidth: 2756,
    imageHeight: 1520,
    title: 'Periodic Table Game',
    description:
      'A responsive JavaScript frontend project for learning chemistry elements with multiple game modes, high-score tracking, and accessible browser-based gameplay.',
    summary:
      'The Periodic Table Game turns memorising elements into a quick, playable challenge. Multiple game modes test symbols, names and groups, and a local leaderboard tracks high scores.',
    problem: [
      'Learning the periodic table is repetitive and hard to make stick.',
      'Most study tools are passive and give no feedback or progress tracking.'
    ],
    approach: [
      'Built the game loop in vanilla JavaScript with a responsive HTML and CSS layout.',
      'Added multiple modes and scoring rules to keep practice varied.',
      'Stored high scores locally so progress survives a refresh.'
    ],
    features: [
      'Multiple quiz modes for symbols, names and groups',
      'Live scoring and high-score leaderboard',
      'Keyboard and touch friendly interactions'
    ],
    stack: ['JavaScript', 'HTML5', 'CSS3'],
    role: ['Designed and built the game logic, UI and scoring'],
    results: [
      'A lightweight, dependency-free game that runs in any modern browser.',
      'Shows vanilla JavaScript state management and DOM skills.'
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://periodicgame.netlify.app/',
    liveTitle: 'Open Periodic Table Game',
    codeUrl: 'https://github.com/Lucky-Joshi',
    codeTitle: 'View Periodic Table Game source code on GitHub'
  },
  {
    id: 'spyderman-game',
    slug: 'spyderman-shooting-game',
    category: 'games',
    tagline: 'HTML5 Canvas shooting game with enemy waves and live scoring',
    metaTitle: 'Spyderman Shooting Game – HTML5 Canvas Game | Lucky Joshi',
    metaDescription:
      'Spyderman is an HTML5 Canvas shooting game with enemy waves, collision detection and real-time scoring, built in vanilla JavaScript.',
    year: '2024',
    image: '/spyderman-game.png',
    imageAlt: 'Spyderman Shooting Game built with HTML5 Canvas, featuring enemy waves, power-ups and real-time score',
    imageWidth: 2752,
    imageHeight: 1528,
    title: 'Spyderman Shooting Game',
    description:
      'A browser game built with HTML5 Canvas, JavaScript, algorithms for enemy waves, real-time scoring, and polished frontend interaction patterns.',
    summary:
      'Spyderman is a 2D browser shooter rendered on HTML5 Canvas. It uses a game loop with enemy waves, collision detection and real-time scoring to demonstrate animation and gameplay programming.',
    problem: [
      'Wanted a hands-on way to practise animation loops, collisions and performance in the browser.',
      'Canvas games need smooth frame timing to feel responsive.'
    ],
    approach: [
      'Rendered the scene on HTML5 Canvas with a requestAnimationFrame loop.',
      'Implemented enemy waves, collision detection and scoring in JavaScript.',
      'Tuned the loop for smooth play on desktop and mobile.'
    ],
    features: [
      'Real-time Canvas rendering and game loop',
      'Enemy waves and collision detection',
      'Live score tracking and progressive difficulty'
    ],
    stack: ['JavaScript', 'HTML5', 'Canvas'],
    role: ['Built the game engine, physics and rendering'],
    results: [
      'A playable browser game with no external game engine.',
      'Demonstrates animation, collision and performance fundamentals.'
    ],
    tags: ['JavaScript', 'HTML5', 'Canvas'],
    liveUrl: 'https://spydygame.netlify.app/',
    liveTitle: 'Open Spyderman game',
    codeUrl: 'https://github.com/Lucky-Joshi',
    codeTitle: 'View Spyderman game source code on GitHub'
  }
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}

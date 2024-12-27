export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Publications', href: '/publications' },
  { name: 'Teaching', href: '/teaching' },
  { name: 'Resume', href: '/resume' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export const theme = {
  colors: {
    primary: 'blue-600',
    secondary: 'yellow-400',
    background: {
      light: 'white',
      gradient: {
        from: 'blue-50',
        to: 'white'
      }
    },
    text: {
      primary: 'gray-900',
      secondary: 'slate-500',
      muted: 'slate-400',
      white: 'white',
      light: 'gray-200'
    },
    accent: {
      blue: {
        light: 'blue-100',
        DEFAULT: 'blue-600',
        hover: 'blue-700'
      },
      red: {
        DEFAULT: 'red-600'
      }
    },
    border: {
      DEFAULT: 'slate-400',
      hover: 'blue-600'
    }
  },
  spacing: {
    page: 'py-12',
    section: 'mb-8',
    element: 'mb-4',
    content: 'p-6'
  },
  layout: {
    maxWidth: '4xl',
    borderRadius: 'rounded-lg',
    shadow: 'shadow-lg'
  },
  header: {
    height: 'h-16',
    background: 'bg-white/90',
    blur: 'backdrop-blur-md',
    shadow: 'shadow-sm'
  }
}

export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  },
  headerAnimation: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8 }
  }
}

export const heroContent = {
  title: "Welcome to My Portfolio",
  subtitle: "Your one-stop destination to explore my work, research, and contributions to ...",
  image: "https://i.imghippo.com/files/igJ8471bGk.jpeg",
  buttons: {
    primary: {
      text: "Learn More",
      href: "/about"
    },
    secondary: {
      text: "Publications",
      href: "/publications"
    }
  }
}

export const resumeData = {
  title: "Professional Resume",
  projects: [
    {
      name: "Urban Planning Analytics Platform",
      description: "Developed a comprehensive analytics platform for urban planning using machine learning and big data technologies.",
      year: 2023
    },
    {
      name: "Sustainable City Framework",
      description: "Created a framework for evaluating and implementing sustainable practices in urban development.",
      year: 2023
    },
    {
      name: "Smart Transportation System",
      description: "Designed and implemented an AI-driven transportation optimization system for smart cities.",
      year: 2022
    }
  ],
  areasOfInterest: [
    "Urban Analytics",
    "Sustainable Development",
    "Smart Cities",
    "Transportation Planning",
    "Environmental Impact Assessment"
  ],
  teaching: [
    {
      course: "Urban Planning 101",
      level: "Undergraduate"
    },
    {
      course: "Advanced City Planning",
      level: "Graduate"
    }
  ],
  languages: ["English", "Korean", "Japanese"],
  publications: [
    {
      title: "Machine Learning in Urban Planning",
      journal: "Urban Studies Journal",
      year: "2023"
    }
  ],
  experience: [
    {
      title: "Assistant Research Professor",
      company: "University Name",
      location: "City, Country",
      period: "2020-Present",
      description: "Leading research in urban planning and sustainability",
      highlights: ["Led research team", "Published papers"],
      projects: ["Smart City Initiative"]
    },
    {
      period: "2017-2019",
      title: "Research Fellow",
      company: "Urban Sustainability Institute",
      location: "Singapore",
      description: "Conducted research on smart city initiatives in Southeast Asia",
      highlights: [
        "Led a team of 5 researchers on smart city projects",
        "Secured $500K in research grants",
        "Published 4 peer-reviewed papers"
      ]
    },
    {
      period: "2015-2017",
      title: "Urban Planning Consultant",
      company: "City Planning Associates",
      location: "Seoul, South Korea",
      description: "Provided consulting services for sustainable urban development projects",
      highlights: [
        "Developed sustainability frameworks for 3 major cities",
        "Conducted environmental impact assessments",
        "Collaborated with international planning agencies"
      ]
    },
    {
      period: "2013-2015",
      title: "Graduate Research Assistant",
      company: "Seoul National University",
      location: "Seoul, South Korea",
      description: "Assisted in research projects related to urban environmental systems",
      highlights: [
        "Contributed to 2 major research projects",
        "Managed environmental data collection and analysis",
        "Presented at 3 international conferences"
      ]
    }
  ],
  education: [
    {
      degree: "Ph.D. in Urban Planning",
      department: "Department of Urban Studies",
      university: "University Name",
      location: "City, Country",
      period: "2015-2020",
      description: "Focus on sustainable urban development",
      highlights: ["Outstanding Research Award"],
      thesis: "Smart Cities and Sustainable Development"
    },
    {
      period: "2013-2015",
      degree: "M.Sc.",
      department: "Environmental Engineering",
      university: "Seoul National University",
      location: "Seoul, South Korea",
      description: "Specialized in environmental impact assessment and urban sustainability",
      thesis: "Urban Environmental Systems Analysis"
    },
    {
      period: "2009-2013",
      degree: "B.Eng.",
      department: "Civil Engineering",
      university: "Korea University",
      location: "Seoul, South Korea",
      description: "Focus on urban infrastructure and planning",
      highlights: ["Graduated summa cum laude", "Presidential Scholar"]
    }
  ],
  skills: [
    {
      title: "Urban Analytics",
      area: "Research",
      tldr: "Expert in analyzing urban data patterns"
    },
    { title: "Data Analysis", area: "Technical", tldr: "Proficient in R, Python, and GIS software" },
    { title: "Urban Planning", area: "Domain", tldr: "Expertise in sustainable urban development" },
    { title: "Project Management", area: "Soft Skills", tldr: "Led multiple research projects and teams" }
  ]
}

export const publications = [
  {
    title: "Machine Learning Applications in Urban Planning",
    description: "A comprehensive review of how machine learning is transforming urban planning practices.",
    year: 2023,
    journal: "Journal of Urban Technology",
    link: "/publications/ml-urban-planning"
  },
  {
    title: "Sustainable Urban Development Patterns",
    description: "Analysis of sustainable development patterns in major metropolitan areas.",
    year: 2023,
    journal: "Sustainability Science",
    link: "/publications/sustainable-development"
  },
  {
    title: "Smart City Infrastructure Integration",
    description: "Framework for integrating smart technologies into existing city infrastructure.",
    year: 2022,
    journal: "Smart Cities Review",
    link: "/publications/smart-infrastructure"
  }
]
export const news = [
  {
    title: "Research Grant Awarded",
    description: "Received major funding for smart city research project...",
    link: "#"
  },
  {
    title: "Conference Presentation",
    description: "Presented findings at International Urban Planning Conference...",
    link: "#"
  },
  {
    title: "New Research Partnership",
    description: "Established collaboration with leading sustainability institute...",
    link: "#"
  }
];
export const teachingData = [
  {
    title: "Introduction to Urban Planning",
    years: "2023-Present",
    description: "Fundamental concepts and principles of urban planning for undergraduate students",
    materials: [
      { name: "Lecture Slides", url: "/materials/urban-planning-slides.pdf" },
      { name: "Course Notes", url: "/materials/urban-planning-notes.pdf" }
    ]
  },
  {
    title: "Sustainable City Development",
    years: "2023-Present",
    description: "Advanced concepts in sustainable urban development for graduate students",
    materials: [
      { name: "Course Materials", url: "/materials/sustainable-dev-materials.pdf" },
      { name: "Case Studies", url: "/materials/case-studies.pdf" }
    ]
  },
  {
    title: "Data Analytics for Urban Systems",
    years: "2023-Present",
    description: "Applied data analysis techniques for urban planning and systems",
    materials: [
      { name: "Analysis Templates", url: "/materials/analysis-templates.zip" },
      { name: "Dataset Examples", url: "/materials/datasets.zip" }
    ]
  }
]

export const blogArticles = [
  //link here means the link to that particular blog post/article
  {
    id: 1,
    title: "The Future of Smart Cities: Integrating IoT and AI",
    year: 2023,
    tldr: "Exploring how Internet of Things (IoT) and Artificial Intelligence (AI) are shaping the future of urban planning and city management.",
    link: "/blog/future-of-smart-cities"
  },
  {
    id: 2,
    title: "Sustainable Urban Mobility: Challenges and Solutions",
    year: 2023,
    tldr: "Analyzing current challenges in urban transportation and proposing innovative solutions for sustainable mobility.",
    link: "/blog/sustainable-urban-mobility"
  },
  {
    id: 3,
    title: "Green Building Technologies: A Path to Net-Zero Cities",
    year: 2022,
    tldr: "Examining cutting-edge green building technologies and their potential to create net-zero energy cities.",
    link: "/blog/green-building-technologies"
  }
]

//Please include the links to the different websites here
//Example: const blogLink = "https://www.example.com"
export const LinkToBlog = ""
export const LinkToCV = ""
export const LinkToTeaching = ""
export const LinkToPublications = ""
export const LinkToProjects = ""
export const LinkToContact = ""
export const LinkToNews = ""
export const AboutData = " As a Ph.D. Assistant Research Professor in the Department of ... at the ... University, I am dedicated to bridging the gap between academic research and real-world applications in urban planning and sustainability."
export const AcademicBackground = "With a Ph.D. in ..., my research journey has been focused on developing innovative solutions for urban challenges through the application of data analytics and machine learning technologies."

//Include the image in the /public/images folder and name it as YunheeAboutImage.jpg. Then add it here as a string. Alternatively, if you have the image stored on the web, you can include the https:// link to the image between the string
export const YunheeAboutImage = ""



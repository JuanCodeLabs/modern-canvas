export const translations = {
  // Navbar
  nav: {
    home: "Home",
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    blog: "Blog",
    about: "About",
    contact: "Contact",
    availableForWork: "Available for work",
  },

  // Hero Section
  hero: {
    iAm: "I am",
    roles: ["Web Designer", "Automation Specialist", "Data Analyst", "Developer"],
    intro: "My name is Juan Díaz, Developer and Data Analyst. I develop attractive applications focused on unique design and meeting client needs.",
    viewProjects: "Projects",
    viewExperience: "Experience",
  },

  // About Section
  about: {
    title: "About Me",
    paragraph1: "Hello, my name is Juan Díaz, I am 30 years old, I'm from Chile and currently live in the city of Valparaíso. I love programming and web design since I was 15 years old. My current goals are to work in a place that adapts to my schedule and allows me to showcase my skills.",
    paragraph2: "I studied Programming and Data Analysis at AIEP institute, where I developed technical skills and strong attention to detail. Currently pursuing Civil Engineering in Computer Science at Andres Bello University, always seeking excellence and constant professional growth.",
    paragraph3: "My work approach is based on documentation, organization, and great capacity to adapt to new challenges. I value teamwork and effective communication as fundamental pillars for the success of any project.",
    location: "Location",
    education: "Education",
    educationDetail: "AIEP - Programming and Data Analysis",
    softSkills: "Soft Skills",
    softSkillsDetail: "Professional ethics, Responsibility, Attention to detail, Commitment to quality",
    years: "Years",
    ofExperience: "of experience",
  },

  // Experience Section
  experience: {
    title: "Professional",
    title2: "Experience",
  },

  // Projects Section
  projects: {
    title: "Projects",
    title2: "Completed",
    description: "The projects I have worked on during this time are the following. Click on any one for more information.",
    viewSite: "View Site",
    code: "Code",
  },

  // Contact Section
  contact: {
    title: "Contact Me",
    subtitle: "I'm available for work",
    downloadCV: "Download CV",
    cvDescription: "Get my resume in PDF format",
    sendEmail: "Send Email",
    emailDescription: "Contact me directly by email",
    orContact: "Or contact me through my social networks",
    sectionTitle: "Have a project in mind?",
    sectionDescription: "I'm available for new projects and opportunities. Don't hesitate to contact me.",
    email: "Email",
    location: "Location",
    emailSubject: "Contact from portfolio",
  },

  // Footer
  footer: {
    copyright: "© 2026 Juan Díaz. Almost all rights reserved.",
  },

  // Blog
  blog: {
    title: "Blog",
    description: "Articles about web development, technology, and best practices. Sharing knowledge and experiences from the software development world.",
    loadMore: "Load more articles",
    backToBlog: "Back to blog",
    postNotFound: "Post not found",
    readTime: "read",
    editOnGitHub: "Edit on GitHub",
    comments: "Comments",
    share: "Share:",
    relatedPosts: "Related articles",
  },
};

export type TranslationKey = keyof typeof translations;

export const translations = {
  // Navbar
  nav: {
    home: "Inicio",
    projects: "Trabajos",
    experience: "Experiencia",
    skills: "Conocimientos",
    blog: "Blog",
    about: "Sobre mí",
    contact: "Contacto",
    availableForWork: "Disponible para trabajar",
  },

  // Hero Section
  hero: {
    iAm: "Soy",
    roles: ["Diseñador Web", "Automatizador", "Analista de Datos", "Programador"],
    intro: "Mi nombre es Juan Díaz, Programador y Analista de Datos. Soy desarrollador de aplicaciones atractivas y enfocadas en un diseño único y enfocado en cumplir las necesidades del cliente.",
    viewProjects: "Trabajos",
    viewExperience: "Experiencia",
  },

  // About Section
  about: {
    title: "Acerca",
    title2: "de mí",
    paragraph1: "Hola, mi nombre es Juan Díaz, tengo 30 años y soy de Chile y actualmente vivo en la ciudad de Valparaíso. Me encanta la programación y el diseño web desde que tenía 15 años. Mis metas actuales son lograr trabajar en un lugar el cual se adapte a mis tiempos y pueda desempeñar mis habilidades.",
    paragraph2: "Estudié Programación y Análisis de Datos en el instituto AIEP, donde desarrollé habilidades técnicas y una fuerte atención al detalle. Actualmente cursando Ingeniería Civil en Informática en la Universidad Andres Bello, buscando siempre la excelencia y el crecimiento profesional constante.",
    paragraph3: "Mi enfoque laboral se basa en la documentación, organización y gran capacidad para adaptarme a nuevos desafíos. Valoro el trabajo en equipo y la comunicación efectiva como pilares fundamentales para el éxito de cualquier proyecto.",
    location: "Ubicación",
    education: "Educación",
    educationDetail: "AIEP - Programación y Análisis de Datos",
    softSkills: "Habilidades Blandas",
    softSkillsDetail: "Ética profesional, Responsabilidad, Atención al detalle, Compromiso con la calidad",
    years: "Años",
    ofExperience: "de experiencia",
  },

  // Experience Section
  experience: {
    title: "Experiencia",
    title2: "profesional",
  },

  // Projects Section
  projects: {
    title: "Trabajos",
    title2: "realizados",
    description: "Los trabajos que he realizado durante este tiempo son los siguientes. Presiona en cualquiera para más información.",
    viewSite: "Ver pagina",
    code: "Código",
  },

  // Contact Section
  contact: {
    title: "Contáctame",
    subtitle: "Estoy disponible para trabajar",
    downloadCV: "Descargar CV",
    cvDescription: "Obtén mi currículum en formato PDF",
    sendEmail: "Enviar correo",
    emailDescription: "Contáctame directamente por email",
    orContact: "O contáctame a través de mis redes sociales",
    sectionTitle: "¿Tienes un proyecto en mente?",
    sectionDescription: "Estoy disponible para nuevos proyectos y oportunidades. No dudes en contactarme.",
    email: "Email",
    location: "Ubicación",
    emailSubject: "Contacto desde el portfolio",
  },

  // Footer
  footer: {
    copyright: "© 2026 Juan Díaz. Casi todos los derechos reservados.",
  },

  // Blog
  blog: {
    title: "Blog",
    description: "Artículos sobre desarrollo web, tecnología y mejores prácticas. Compartiendo conocimiento y experiencias del mundo del desarrollo software.",
    loadMore: "Cargar más artículos",
    backToBlog: "Volver al blog",
    postNotFound: "Post no encontrado",
    readTime: "de lectura",
    editOnGitHub: "Editar en GitHub",
    comments: "Comentarios",
    share: "Compartir:",
    relatedPosts: "Artículos relacionados",
  },
};

export type TranslationKey = keyof typeof translations;

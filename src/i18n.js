import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.cv": "CV",

      // About Section
      "about.title_know": "Know Who",
      "about.title_im": "I'M",
      "about.title_skillset": "Professional",
      "about.title_skillset_highlight": "Skill Set",
      "about.title_tools": "Tools",
      "about.title_tools_highlight": "I use",

      "about_card.greeting": "Hi Everyone, I am",
      "about_card.from": "from",
      "about_card.role_p1": "I am an",
      "about_card.role_highlight1": "IT Support & Infrastructure Specialist",
      "about_card.role_p2": "with a strong focus on",
      "about_card.role_highlight2": "Process Automation",
      "about_card.desc_p1": "I specialize in multilevel technical support",
      "about_card.desc_highlight1": "N1 to N3",
      "about_card.desc_p2": ", administration of",
      "about_card.desc_highlight2": "Microsoft 365, Azure & Intune",
      "about_card.desc_p3": "ecosystems, and corporate network management with",
      "about_card.desc_highlight3": "MikroTik & Ubiquiti",
      "about_card.desc_p4": ". Expert in SLA-driven incident management via",
      "about_card.desc_highlight4": "Jira Service Management",
      "about_card.desc_p5": "and workflow automation using",
      "about_card.desc_highlight5": "Node.js & TypeScript",
      "about_card.desc_p6": ".",
      "about_card.activities_intro": "Apart from technical work, some other activities that I love to do!",
      "about_card.activity1": "Advanced IP Video Surveillance",
      "about_card.activity1_desc": "(CCTV, AI Analytics & Recording Solutions)",
      "about_card.activity2": "Playing",
      "about_card.activity2_highlight": "Argentinian Folklore",
      "about_card.activity2_desc": "(Guitar & Music Theory)",
      "about_card.activity3": "Travelling & Exploring New Cultures",
      "about_card.activity4": "Gaming & PC Building",
      "about_card.quote": "\"Strive to build systems that ensure business continuity through automation and efficiency!\"",
      
      "home.hi": "Hi There!",
      "home.im": "I'm",
      "home.name": "Nahuel Brizuela",

      // Typewriter strings
      "type.welcome": "Welcome to my Portfolio",
      "type.fullstack": "Full Stack Developer",
      "type.software_eng": "IT Support Specialist N1–N3",
      "type.problem_solver": "Infrastructure & Cloud Administrator",
      "type.passionate": "Microsoft 365 & Intune Expert",
      "type.learning": "Dedicated to continuous learning and growth",
      "type.testing": "Network & Systems Troubleshooter",
      "type.collaborative": "Collaborative team player",
      "type.communication": "Effective communication skills",
      "type.adaptable": "Remote / Hybrid / On-site available",
      "type.work_ethic": "SLA-driven incident management",
      
      "projects.title": "My Recent Works",
      "projects.title_highlight": "Works",
      "projects.subtitle": "Here are a few projects I've worked on recently.",
      
      "projects.raices_network.title": "Raíces Network",
      "projects.raices_network.desc": "A professional web platform for high-performance network solutions. Features detailed service auditing, infrastructure design, and an integrated technical blog.",
      
      "projects.raices_gestion.title": "Raíces Management",
      "projects.raices_gestion.desc": "A robust internal system for operational control, featuring technical audit forms, real-time KPI tracking, and a mobile-first portal for field technicians.",
      
      "projects.audioproject.title": "Lingo IA",
      "projects.audioproject.desc": "A real-time conversational engine powered by FSM (Finite State Machines). Handles multi-session voice interactions with low-latency barge-in support.",
      
      "projects.glammap.title": "GlamMap",
      "projects.glammap.desc": "A geolocation-based web application integrated with Google Maps API to discover and manage premium locations and services.",
      
      "projects.turnos_estetica.title": "Turnos Estética",
      "projects.turnos_estetica.desc": "A full-stack booking system for beauty services. Includes geolocated business search, interactive scheduling, and a comprehensive management dashboard.",

      "projects.dashboard.title": "Dashboard Next",
      "projects.dashboard.desc": "A modern and responsive dashboard application built using Next.js and TypeScript. It leverages the power of server-side rendering and static site generation for optimal performance and SEO.",
      
      "projects.amplify.title": "AWS Amplify App",
      "projects.amplify.desc": "A full-stack React application integrated with AWS Amplify. It demonstrates how to rapidly build scalable cloud-powered web applications utilizing AWS services for authentication, API, and storage.",
      
      "projects.crypto.title": "Crypto Analyzer",
      "projects.crypto.desc": "A cryptocurrency analysis tool developed in TypeScript. It provides real-time data tracking and insights, allowing users to monitor market trends and make informed decisions.",
      
      "projects.giffy.title": "Giffy",
      "projects.giffy.desc": "A web application built with React to search and discover animated GIFs. It uses a modern frontend architecture to fetch and display engaging visual content.",
      
      "projects.logapi.title": "Log API",
      "projects.logapi.desc": "A backend service built with Ruby to handle and process application logs efficiently. It demonstrates solid API design principles and data management in a Ruby environment.",
      
      "projects.hashtag.title": "Hashtag Searcher",
      "projects.hashtag.desc": "A JavaScript utility tool designed to search and analyze hashtags across platforms. It helps users identify trending topics and optimize their social media strategy.",
      
      "projects.view_project": "View Project",
      
      "resume.download": "Download CV",

      "home2.introduce": "LET ME INTRODUCE MYSELF",
      "home2.p1": "I am Nahuel, an IT Specialist focused on multilevel technical support and infrastructure management. I am passionate about operational efficiency and building systems that ensure business continuity.",
      "home2.p2": "My core expertise covers the full Microsoft ecosystem — Microsoft 365, Azure, Entra ID, Intune and Exchange Online — alongside corporate networking with MikroTik and Ubiquiti.",
      "home2.p3": "I automate operational workflows with Node.js and TypeScript, reducing response times and standardizing support processes. I also manage cloud environments on AWS and deploy containerized solutions with Docker.",
      "home2.p4": "I am proactive, immediately available, and committed to continuous learning — adapting to remote, hybrid, or on-site environments with my own mobility for field work.",
      
      "github.days_code": "Days I",
      "github.days_code_highlight": "Code",

      "home2.find_me": "FIND ME ON",
      "home2.connect": "Feel free to",
      "home2.connect_highlight": "connect",
      "home2.connect_end": "with me",

      "lang.switch_en": "EN",
      "lang.switch_es": "ES"
    }
  },
  es: {
    translation: {
      "nav.home": "Inicio",
      "nav.about": "Sobre mí",
      "nav.projects": "Proyectos",
      "nav.cv": "CV",

      // About Section
      "about.title_know": "Conoce quién",
      "about.title_im": "SOY",
      "about.title_skillset": "Competencias",
      "about.title_skillset_highlight": "Técnicas",
      "about.title_tools": "Herramientas",
      "about.title_tools_highlight": "que utilizo",

      "about_card.greeting": "Hola a todos, soy",
      "about_card.from": "de",
      "about_card.role_p1": "Soy un",
      "about_card.role_highlight1": "Especialista IT en Soporte & Infraestructura",
      "about_card.role_p2": "con un fuerte enfoque en",
      "about_card.role_highlight2": "Automatización de Procesos",
      "about_card.desc_p1": "Me especializo en soporte técnico multinivel",
      "about_card.desc_highlight1": "N1 a N3",
      "about_card.desc_p2": ", administración de ecosistemas",
      "about_card.desc_highlight2": "Microsoft 365, Azure e Intune",
      "about_card.desc_p3": "y gestión de redes corporativas con",
      "about_card.desc_highlight3": "MikroTik y Ubiquiti",
      "about_card.desc_p4": ". Experto en gestión de incidentes bajo SLA con",
      "about_card.desc_highlight4": "Jira Service Management",
      "about_card.desc_p5": "y automatización de flujos operativos con",
      "about_card.desc_highlight5": "Node.js y TypeScript",
      "about_card.desc_p6": ".",
      "about_card.activities_intro": "¡Aparte del trabajo técnico, otras actividades que me encanta hacer!",
      "about_card.activity1": "Videovigilancia IP Avanzada",
      "about_card.activity1_desc": "(CCTV, Analítica de IA y Soluciones de Grabación)",
      "about_card.activity2": "Tocar",
      "about_card.activity2_highlight": "Folklore Argentino",
      "about_card.activity2_desc": "(Guitarra y Teoría Musical)",
      "about_card.activity3": "Viajar y explorar nuevas culturas",
      "about_card.activity4": "Gaming y armado de PCs",
      "about_card.quote": "\"¡Esfuérzate por construir sistemas que garanticen la continuidad del negocio a través de la automatización y la eficiencia!\"",
      
      "home.hi": "¡Hola!",
      "home.im": "Soy",
      "home.name": "Nahuel Brizuela",

      // Typewriter strings
      "type.welcome": "Bienvenido a mi Portafolio",
      "type.fullstack": "Desarrollador Full Stack",
      "type.software_eng": "Especialista IT Soporte N1–N3",
      "type.problem_solver": "Administrador de Infraestructura & Cloud",
      "type.passionate": "Experto en Microsoft 365 & Intune",
      "type.learning": "Dedicado al aprendizaje y crecimiento continuo",
      "type.testing": "Troubleshooting de Redes y Sistemas",
      "type.collaborative": "Trabajo en equipo y colaboración",
      "type.communication": "Comunicación efectiva",
      "type.adaptable": "Remoto / Híbrido / Presencial",
      "type.work_ethic": "Gestión de incidentes bajo SLA",
      
      "projects.title": "Mis Trabajos Recientes",
      "projects.title_highlight": "Recientes",
      "projects.subtitle": "Aquí hay algunos proyectos en los que he trabajado últimamente.",
      
      "projects.raices_network.title": "Raíces Network",
      "projects.raices_network.desc": "Plataforma web profesional para soluciones de red de alto rendimiento. Incluye auditorías de servicio, diseño de infraestructura y un blog técnico integrado.",
      
      "projects.raices_gestion.title": "Raíces Gestión",
      "projects.raices_gestion.desc": "Sistema interno robusto para control operativo, con formularios de auditoría técnica, seguimiento de KPIs en tiempo real y portal móvil para técnicos.",
      
      "projects.audioproject.title": "Lingo IA",
      "projects.audioproject.desc": "Motor conversacional en tiempo real basado en máquinas de estado (FSM). Gestiona interacciones de voz multi-sesión con soporte de interrupción de baja latencia.",
      
      "projects.glammap.title": "GlamMap",
      "projects.glammap.desc": "Aplicación web de geolocalización integrada con la API de Google Maps para descubrir y gestionar lugares y servicios premium.",
      
      "projects.turnos_estetica.title": "Turnos Estética",
      "projects.turnos_estetica.desc": "Sistema full-stack de reservas para servicios estéticos. Incluye búsqueda geolocalizada, agenda interactiva y dashboard de gestión integral.",

      "projects.dashboard.title": "Dashboard Next",
      "projects.dashboard.desc": "Una aplicación de panel moderna y adaptable construida con Next.js y TypeScript. Aprovecha el renderizado del lado del servidor y la generación de sitios estáticos para un rendimiento y SEO óptimos.",
      
      "projects.amplify.title": "Aplicación AWS Amplify",
      "projects.amplify.desc": "Una aplicación React full-stack integrada con AWS Amplify. Demuestra cómo construir rápidamente aplicaciones web escalables impulsadas por la nube utilizando servicios de AWS para autenticación, API y almacenamiento.",
      
      "projects.crypto.title": "Analizador Crypto",
      "projects.crypto.desc": "Una herramienta de análisis de criptomonedas desarrollada en TypeScript. Proporciona seguimiento de datos en tiempo real, permitiendo a los usuarios monitorear las tendencias del mercado y tomar decisiones informadas.",
      
      "projects.giffy.title": "Giffy",
      "projects.giffy.desc": "Una aplicación web construida con React para buscar y descubrir GIFs animados. Utiliza una arquitectura frontend moderna para obtener y mostrar contenido visual atractivo.",
      
      "projects.logapi.title": "API de Logs",
      "projects.logapi.desc": "Un servicio backend construido con Ruby para manejar y procesar registros de aplicaciones de manera eficiente. Demuestra principios sólidos de diseño de API y gestión de datos.",
      
      "projects.hashtag.title": "Buscador de Hashtags",
      "projects.hashtag.desc": "Una herramienta diseñada en JavaScript para buscar y analizar hashtags en diferentes plataformas. Ayuda a identificar tendencias y optimizar estrategias de redes sociales.",
      
      "projects.view_project": "Ver Proyecto",
      
      "resume.download": "Descargar CV",

      "home2.introduce": "PERMÍTEME PRESENTARME",
      "home2.p1": "Soy Nahuel, Especialista IT enfocado en soporte técnico multinivel y administración de infraestructura. Me apasiona la eficiencia operativa y construir sistemas que garanticen la continuidad del negocio.",
      "home2.p2": "Mi experiencia cubre el ecosistema Microsoft completo — Microsoft 365, Azure, Entra ID, Intune y Exchange Online — junto con redes corporativas con MikroTik y Ubiquiti.",
      "home2.p3": "Automatizo flujos operativos con Node.js y TypeScript, reduciendo tiempos de respuesta y estandarizando procesos de soporte. También gestiono entornos cloud en AWS y despliego soluciones con Docker.",
      "home2.p4": "Soy proactivo, con disponibilidad inmediata y compromiso con el aprendizaje continuo. Me adapto a modalidades remota, híbrida o presencial y cuento con movilidad propia para trabajo de campo.",
      
      "github.days_code": "Días que",
      "github.days_code_highlight": "Codifico",

      "home2.find_me": "ENCUÉNTRAME EN",
      "home2.connect": "No dudes en",
      "home2.connect_highlight": "conectarte",
      "home2.connect_end": "conmigo",

      "lang.switch_en": "EN",
      "lang.switch_es": "ES"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;

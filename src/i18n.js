import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.cv": "CV",
      
      "home.hi": "Hi There!",
      "home.im": "I'm",
      "home.name": "Nahuel Brizuela",

      // Typewriter strings
      "type.welcome": "Welcome to my Portfolio",
      "type.fullstack": "Full Stack Developer",
      "type.software_eng": "Software Engineer",
      "type.problem_solver": "Analytical and problem solver",
      "type.passionate": "Passionate about technology and innovation",
      "type.learning": "Dedicated to continuous learning and growth",
      "type.testing": "Automated testing and quality assurance",
      "type.collaborative": "Collaborative team player",
      "type.communication": "Effective communication skills",
      "type.adaptable": "Adaptable and quick learner",
      "type.work_ethic": "Strong work ethic and attention to detail",
      
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
      "home2.p1": "Im Nahuel I am a self-taught programmer.",
      "home2.p2": "I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️",
      "home2.p3": "My favorite language is Javascript but i'm also interested in Java",
      "home2.p4": "My fields of Interest are new Web Technologies and Products and also areas related to Deep Learning and Natural Language Processing.",
      "home2.p5": "Whenever possible, I also apply my passion for developing products with Ruby on Rails, Mysql and Modern Javascript Library and Frameworks like React.js and Material-UI.",
      
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
      
      "home.hi": "¡Hola!",
      "home.im": "Soy",
      "home.name": "Nahuel Brizuela",

      // Typewriter strings
      "type.welcome": "Bienvenido a mi Portafolio",
      "type.fullstack": "Desarrollador Full Stack",
      "type.software_eng": "Ingeniero de Software",
      "type.problem_solver": "Analítico y resolutor de problemas",
      "type.passionate": "Apasionado por la tecnología y la innovación",
      "type.learning": "Dedicado al aprendizaje y crecimiento continuo",
      "type.testing": "Pruebas automatizadas y control de calidad",
      "type.collaborative": "Trabajador en equipo colaborativo",
      "type.communication": "Habilidades de comunicación efectiva",
      "type.adaptable": "Aprendiz rápido y adaptable",
      "type.work_ethic": "Fuerte ética de trabajo y atención al detalle",
      
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
      "home2.p1": "Soy Nahuel, un programador autodidacta.",
      "home2.p2": "Me enamoré de la programación y al menos he aprendido algo, creo… 🤷‍♂️",
      "home2.p3": "Mi lenguaje favorito es Javascript, pero también estoy interesado en Java.",
      "home2.p4": "Mis campos de interés son las nuevas tecnologías y productos web, así como áreas relacionadas con el Deep Learning y el Procesamiento de Lenguaje Natural.",
      "home2.p5": "Siempre que puedo, aplico mi pasión por desarrollar productos con Ruby on Rails, MySQL y bibliotecas y frameworks modernos de Javascript como React.js y Material-UI.",
      
      "lang.switch_en": "EN",
      "lang.switch_es": "ES"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;

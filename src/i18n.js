import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.cv": "Resume",

      "hero.eyebrow": "Portfolio",
      "hero.hi": "Hi, I'm",
      "hero.name": "Nahuel Brizuela",
      "hero.tagline":
        "IT Support & Infrastructure Specialist focused on automation, Microsoft 365/Azure and resilient networks.",
      "hero.cta_projects": "View projects",
      "hero.cta_resume": "Download CV",
      "hero.status": "Available for work",
      "hero.location": "Lanús, Buenos Aires, Argentina",

      // Typewriter / role rotator strings
      "type.software_eng": "IT Support Specialist N1–N3",
      "type.problem_solver": "Infrastructure & Cloud Administrator",
      "type.passionate": "Microsoft 365 & Intune Expert",
      "type.testing": "Network & Systems Troubleshooter",
      "type.work_ethic": "SLA-driven incident management",
      "type.automation": "Node.js & TypeScript Automation",

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
      "about_card.role_highlight1": "Information Technology Specialist",
      "about_card.role_p2":
        "with experience in multilevel technical support (N1 to N3), on-site infrastructure administration and management of",
      "about_card.role_highlight2": "cloud environments",
      "about_card.desc_full":
        "Solid command of the Microsoft ecosystem (365, Azure, Entra ID, Intune) and corporate networking (routers, switches, access points, racks), with SLA-driven incident management in Jira Service Management and Active Directory. My differential is process automation and AI integration (n8n, LLMs via API) to optimize operational efficiency.",
      "about_card.closing":
        "Proactive profile, with immediate availability, own transportation and a strong drive to learn new technologies.",
      "about_card.activities_intro":
        "Apart from technical work, some other activities that I love to do!",
      "about_card.activity1": "Advanced IP Video Surveillance",
      "about_card.activity1_desc": "(CCTV, AI Analytics & Recording Solutions)",
      "about_card.activity2": "Playing",
      "about_card.activity2_highlight": "Argentinian Folklore",
      "about_card.activity2_desc": "(Guitar & Music Theory)",
      "about_card.activity3": "Travelling & Exploring New Cultures",
      "about_card.activity4": "Gaming & PC Building",
      "about_card.quote":
        "Strive to build systems that ensure business continuity through automation and efficiency.",

      "projects.title": "My Recent Works",
      "projects.title_highlight": "Works",
      "projects.subtitle": "Here are a few projects I've worked on recently.",

      "projects.helpdesk.title": "Helpdesk Toolkit",
      "projects.helpdesk.desc":
        "A collection of PowerShell and Bash scripts for IT support, organized into three escalation levels: workstations, Active Directory, Microsoft 365, and network devices (MikroTik, UniFi, FortiGate, Cisco).",

      "projects.raices_network.title": "Raíces Network",
      "projects.raices_network.desc":
        "A professional web platform for high-performance network solutions. Features detailed service auditing, infrastructure design, and an integrated technical blog.",

      "projects.raices_gestion.title": "Raíces Management",
      "projects.raices_gestion.desc":
        "A robust internal system for operational control, featuring technical audit forms, real-time KPI tracking, and a mobile-first portal for field technicians.",

      "projects.audioproject.title": "Lingo IA",
      "projects.audioproject.desc":
        "A real-time conversational engine powered by FSM (Finite State Machines). Handles multi-session voice interactions with low-latency barge-in support.",

      "projects.glammap.title": "GlamMap",
      "projects.glammap.desc":
        "A geolocation-based web application integrated with Google Maps API to discover and manage premium locations and services.",

      "projects.turnos_estetica.title": "Turnos Estética",
      "projects.turnos_estetica.desc":
        "A full-stack booking system for beauty services. Includes geolocated business search, interactive scheduling, and a comprehensive management dashboard.",

      "projects.dashboard.title": "Dashboard Next",
      "projects.dashboard.desc":
        "A modern and responsive dashboard application built using Next.js and TypeScript. It leverages server-side rendering and static site generation for optimal performance and SEO.",

      "projects.amplify.title": "AWS Amplify App",
      "projects.amplify.desc":
        "A full-stack React application integrated with AWS Amplify, demonstrating scalable cloud-powered apps with AWS auth, API and storage services.",

      "projects.crypto.title": "Crypto Analyzer",
      "projects.crypto.desc":
        "A cryptocurrency analysis tool developed in TypeScript, providing real-time data tracking and insights for market trends.",

      "projects.giffy.title": "Giffy",
      "projects.giffy.desc":
        "A React web application to search and discover animated GIFs using a modern frontend architecture.",

      "projects.logapi.title": "Log API",
      "projects.logapi.desc":
        "A backend service built with Ruby to handle and process application logs efficiently, with solid API design principles.",

      "projects.hashtag.title": "Hashtag Searcher",
      "projects.hashtag.desc":
        "A JavaScript utility tool to search and analyze hashtags across platforms, identifying trending topics.",

      "projects.view_project": "Code",
      "projects.view_demo": "Live demo",

      "resume.title": "Resume",
      "resume.subtitle": "Download or preview my CV in English or Spanish.",
      "resume.download": "Download CV",
      "resume.view_es": "Spanish version",
      "resume.view_en": "English version",
      "resume.preview_note":
        "If the preview doesn't load in your browser, use the download button above.",

      "home2.introduce": "LET ME INTRODUCE MYSELF",
      "home2.p1":
        "I am Nahuel, an IT Specialist focused on multilevel technical support and infrastructure management. I am passionate about operational efficiency and building systems that ensure business continuity.",
      "home2.p2":
        "My core expertise covers the full Microsoft ecosystem — Microsoft 365, Azure, Entra ID, Intune and Exchange Online — alongside corporate networking with MikroTik and Ubiquiti.",
      "home2.p3":
        "I automate operational workflows with Node.js and TypeScript, reducing response times and standardizing support processes. I also manage cloud environments on AWS and deploy containerized solutions with Docker.",
      "home2.p4":
        "I am proactive, immediately available, and committed to continuous learning — adapting to remote, hybrid, or on-site environments with my own mobility for field work.",

      "github.days_code": "Days I",
      "github.days_code_highlight": "Code",

      "home2.find_me": "FIND ME ON",
      "home2.connect": "Feel free to",
      "home2.connect_highlight": "connect",
      "home2.connect_end": "with me",

      "footer.tagline": "Built from scratch, designed with intent.",
      "footer.rights": "All rights reserved.",

      "lang.switch_en": "EN",
      "lang.switch_es": "ES",
    },
  },
  es: {
    translation: {
      "nav.home": "Inicio",
      "nav.about": "Sobre mí",
      "nav.projects": "Proyectos",
      "nav.cv": "CV",

      "hero.eyebrow": "Portfolio",
      "hero.hi": "Hola, soy",
      "hero.name": "Nahuel Brizuela",
      "hero.tagline":
        "Especialista IT en Soporte & Infraestructura enfocado en automatización, Microsoft 365/Azure y redes resilientes.",
      "hero.cta_projects": "Ver proyectos",
      "hero.cta_resume": "Descargar CV",
      "hero.status": "Disponible para trabajar",
      "hero.location": "Lanús, Buenos Aires, Argentina",

      "type.software_eng": "Especialista IT Soporte N1–N3",
      "type.problem_solver": "Administrador de Infraestructura & Cloud",
      "type.passionate": "Experto en Microsoft 365 & Intune",
      "type.testing": "Troubleshooting de Redes y Sistemas",
      "type.work_ethic": "Gestión de incidentes bajo SLA",
      "type.automation": "Automatización con Node.js & TypeScript",

      "about.title_know": "Conoce quién",
      "about.title_im": "SOY",
      "about.title_skillset": "Competencias",
      "about.title_skillset_highlight": "Técnicas",
      "about.title_tools": "Herramientas",
      "about.title_tools_highlight": "que utilizo",

      "about_card.greeting": "Hola a todos, soy",
      "about_card.from": "de",
      "about_card.role_p1": "Soy un",
      "about_card.role_highlight1": "Especialista en Tecnologías de la Información",
      "about_card.role_p2":
        "con experiencia en soporte técnico multinivel (N1 a N3), administración de infraestructura on-site y gestión de entornos",
      "about_card.role_highlight2": "cloud",
      "about_card.desc_full":
        "Sólido manejo del ecosistema Microsoft (365, Azure, Entra ID, Intune) y de redes corporativas (routers, switches, access points, racks), con gestión de incidentes bajo SLA en Jira Service Management y Active Directory. Mi diferencial es la automatización de procesos e integración de IA (n8n, LLMs vía API) para optimizar la eficiencia operativa.",
      "about_card.closing":
        "Perfil proactivo, con disponibilidad inmediata, movilidad propia y gran voluntad de aprender nuevas tecnologías.",
      "about_card.activities_intro":
        "¡Aparte del trabajo técnico, otras actividades que me encanta hacer!",
      "about_card.activity1": "Videovigilancia IP Avanzada",
      "about_card.activity1_desc":
        "(CCTV, Analítica de IA y Soluciones de Grabación)",
      "about_card.activity2": "Tocar",
      "about_card.activity2_highlight": "Folklore Argentino",
      "about_card.activity2_desc": "(Guitarra y Teoría Musical)",
      "about_card.activity3": "Viajar y explorar nuevas culturas",
      "about_card.activity4": "Gaming y armado de PCs",
      "about_card.quote":
        "Esfuérzate por construir sistemas que garanticen la continuidad del negocio a través de la automatización y la eficiencia.",

      "projects.title": "Mis Trabajos",
      "projects.title_highlight": "Recientes",
      "projects.subtitle": "Aquí hay algunos proyectos en los que he trabajado últimamente.",

      "projects.helpdesk.title": "Helpdesk Toolkit",
      "projects.helpdesk.desc":
        "Colección de scripts PowerShell y Bash para soporte técnico, organizados en tres niveles de escalamiento: workstations, Active Directory, Microsoft 365 y dispositivos de red (MikroTik, UniFi, FortiGate, Cisco).",

      "projects.raices_network.title": "Raíces Network",
      "projects.raices_network.desc":
        "Plataforma web profesional para soluciones de red de alto rendimiento. Incluye auditorías de servicio, diseño de infraestructura y un blog técnico integrado.",

      "projects.raices_gestion.title": "Raíces Gestión",
      "projects.raices_gestion.desc":
        "Sistema interno robusto para control operativo, con formularios de auditoría técnica, seguimiento de KPIs en tiempo real y portal móvil para técnicos.",

      "projects.audioproject.title": "Lingo IA",
      "projects.audioproject.desc":
        "Motor conversacional en tiempo real basado en máquinas de estado (FSM). Gestiona interacciones de voz multi-sesión con soporte de interrupción de baja latencia.",

      "projects.glammap.title": "GlamMap",
      "projects.glammap.desc":
        "Aplicación web de geolocalización integrada con la API de Google Maps para descubrir y gestionar lugares y servicios premium.",

      "projects.turnos_estetica.title": "Turnos Estética",
      "projects.turnos_estetica.desc":
        "Sistema full-stack de reservas para servicios estéticos. Incluye búsqueda geolocalizada, agenda interactiva y dashboard de gestión integral.",

      "projects.dashboard.title": "Dashboard Next",
      "projects.dashboard.desc":
        "Una aplicación de panel moderna y adaptable construida con Next.js y TypeScript. Aprovecha SSR y SSG para un rendimiento y SEO óptimos.",

      "projects.amplify.title": "Aplicación AWS Amplify",
      "projects.amplify.desc":
        "Una aplicación React full-stack integrada con AWS Amplify para construir apps escalables con auth, API y almacenamiento en la nube.",

      "projects.crypto.title": "Analizador Crypto",
      "projects.crypto.desc":
        "Una herramienta de análisis de criptomonedas en TypeScript con seguimiento de datos en tiempo real para tomar decisiones informadas.",

      "projects.giffy.title": "Giffy",
      "projects.giffy.desc":
        "Una aplicación web en React para buscar y descubrir GIFs animados con una arquitectura frontend moderna.",

      "projects.logapi.title": "API de Logs",
      "projects.logapi.desc":
        "Un servicio backend en Ruby para procesar registros de aplicaciones de manera eficiente, con principios sólidos de diseño de API.",

      "projects.hashtag.title": "Buscador de Hashtags",
      "projects.hashtag.desc":
        "Una herramienta en JavaScript para buscar y analizar hashtags en distintas plataformas e identificar tendencias.",

      "projects.view_project": "Código",
      "projects.view_demo": "Demo en vivo",

      "resume.title": "Currículum",
      "resume.subtitle": "Descargá o previsualizá mi CV en español o inglés.",
      "resume.download": "Descargar CV",
      "resume.view_es": "Versión en español",
      "resume.view_en": "Versión en inglés",
      "resume.preview_note":
        "Si la vista previa no carga en tu navegador, usá el botón de descarga de arriba.",

      "home2.introduce": "PERMÍTEME PRESENTARME",
      "home2.p1":
        "Soy Nahuel, Especialista IT enfocado en soporte técnico multinivel y administración de infraestructura. Me apasiona la eficiencia operativa y construir sistemas que garanticen la continuidad del negocio.",
      "home2.p2":
        "Mi experiencia cubre el ecosistema Microsoft completo — Microsoft 365, Azure, Entra ID, Intune y Exchange Online — junto con redes corporativas con MikroTik y Ubiquiti.",
      "home2.p3":
        "Automatizo flujos operativos con Node.js y TypeScript, reduciendo tiempos de respuesta y estandarizando procesos de soporte. También gestiono entornos cloud en AWS y despliego soluciones con Docker.",
      "home2.p4":
        "Soy proactivo, con disponibilidad inmediata y compromiso con el aprendizaje continuo. Me adapto a modalidades remota, híbrida o presencial y cuento con movilidad propia para trabajo de campo.",

      "github.days_code": "Días que",
      "github.days_code_highlight": "Codifico",

      "home2.find_me": "ENCUÉNTRAME EN",
      "home2.connect": "No dudes en",
      "home2.connect_highlight": "conectarte",
      "home2.connect_end": "conmigo",

      "footer.tagline": "Construido desde cero, diseñado con intención.",
      "footer.rights": "Todos los derechos reservados.",

      "lang.switch_en": "EN",
      "lang.switch_es": "ES",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

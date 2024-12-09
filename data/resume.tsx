import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Facu Guardia",
  initials: "FG",
  url: "https://www.facutech.com",
  location: "Motril, Spain",
  locationLink: "https://www.google.com/maps/place/motril",
  description:
    "Desarrollador Full Stack especializado en arquitectura y desarrollo de soluciones SaaS",
  summary:
    "Desarrollador y creador de soluciones tecnológicas. Con experiencia en desarrollo web, SaaS y aplicaciones innovadoras, me apasiona transformar ideas en productos funcionales y escalables. Trabajo con tecnologías modernas como TypeScript, Next.js, TailwindCSS, Shadcn UI, Firebase, entre otras. Siempre enfocado en resolver problemas reales con herramientas prácticas.Además de mi experiencia técnica, valoro la conexión humana detrás de cada proyecto, asegurándome de comprender las necesidades específicas de mis clientes para entregar soluciones que realmente aporten valor.",
  avatarUrl: "/me.png",
  skills: [
    "JavaScript",
    "Typescript",
    "React",
    "React Native",
    "Next.js",
    "TailwindCSS",
    "Shadcn UI",
    "Gluestack UI",
    "Node.js",
    "Postgres",
    "Prisma",
    "Firebase",
    "Clerk Auth",
    "Strapi",
    "Stripe",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Inicio" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "facuguar12@gmail.com",
    tel: "+34633410299",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/facuguardia",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/facu-guardia/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/FacuGuardia86",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,

        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "LinksCard",
      href: "https://linkscard.pro/",
      badges: [],
      location: "Remoto",
      title: "Full Stack Developer",
      logoUrl: "/linkscard_logo.png",
      start: "Oct 2024",
      end: "Presente",
      description:
        "Lidero el desarrollo de la nueva landing page de LinksCard, alineada a los objetivos comerciales renovados de la marca. Además, estoy a cargo de la migración de su software a una plataforma más estable y propia, usando tecnologías avanzadas como Next.js con TypeScript en el frontend y Node.js para el backend.",
    },
    {
      company: "Patito Media - Agencia Digital",
      badges: [],
      href: "https://patitomedia.com/",
      location: "Remoto",
      title: "Full Stack Developer",
      logoUrl: "/patito_logo.jpg",
      start: "Sep 2024",
      end: "Presente",
      description:
        "Diseñé la landing page de Patito Media, que incluye una funcionalidad de reservas en línea y un área de cliente en desarrollo. En esta sección, los clientes podrán acceder a un tablero con toda la información de sus servicios, incluyendo contratos, comprobantes de pago, estadísticas de campañas, avances de proyectos y soporte técnico. Además, Patito Media me delega proyectos de software para sus clientes, abarcando desarrollo web y de aplicaciones móviles.",
    },
    {
      company: "FutureAI",
      href: "https://myfuture-ai.thinkific.com/",
      badges: [],
      location: "Remoto",
      title: "Frontend Developer",
      logoUrl: "/futureai_logo.jpg",
      start: "May 2023",
      end: "Jun 2024",
      description:
        "Realicé tareas de maquetación, implementación de lógica y corrección de errores en diversas aplicaciones en producción. Contribuí al desarrollo y mejora continua de aplicaciones, optimizando la experiencia de usuario y asegurando el correcto funcionamiento.",
    },
    {
      company: "Facutech",
      href: "https://www.facutech.com/",
      badges: [],
      location: "Remoto",
      title: "Freelance Web Developer",
      logoUrl: "/facutech_logo.jpg",
      start: "Abr 2021",
      end: "Presente",
      description:
        "Facutech es una solución de desarrollo web diseñada para emprendedores y artesanos que buscan vender productos en línea. Ofrezco una plataforma de e-commerce profesional, asequible y optimizada para emprendedores con presupuestos limitados. La estructura está pensada para satisfacer las necesidades digitales esenciales, ayudando a nuestros clientes a establecer una presencia en línea con una inversión accesible.",
    },
  ],
  education: [
    {
      school: "APX School",
      href: "https://apx.school/",
      degree: "Full Stack Web Developer",
      logoUrl: "/apx_school_logo.jpg",
      start: "2022",
      end: "2023",
    },
    {
      school: "Platzi",
      href: "https://platzi.com/",
      degree: "Frontend Developer React and React Native",
      logoUrl: "/platzi_inc_logo.jpg",
      start: "2022",
      end: "2024",
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "Layout designer - UX/UI Designer - Frontend Developer",
      logoUrl: "/udemy_logo.jpg",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Patito Media - Agencia Digital",
      href: "https://www.patitomedia.com/",
      dates: "Oct 2024 - Presente",
      active: true,
      description:
        "Creé el sitio web para Patito Media, una agencia digital especializada en marketing, diseño web, y producción audiovisual. El diseño está pensado para reflejar su carácter creativo y profesional, integrando una paleta moderna y una estructura interactiva. El hero, con un mensaje dinámico, captura la esencia multifacética de la agencia, mientras que secciones específicas destacan sus valores clave de confianza, eficiencia y creatividad. Además, implementé modos de visualización claro y oscuro, y añadí componentes personalizados, como un carrusel de clientes y una presentación del equipo, para mejorar la experiencia de usuario y accesibilidad.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Neon",
        "Clerk Auth",
        "PostgreSQL",
        "Prisma",
        "Netlify",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.patitomedia.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/patito_media.jpg",
      video: "",
    },
    {
      title: "Company Manager Panel",
      href: "https://admin-companies.netlify.app/",
      dates: "Ago 2024 - Oct 2024",
      active: true,
      description:
        "Nuestro sistema SaaS simplifica la gestión empresarial y el análisis de interacciones digitales. Desde un único panel, puedes monitorear la tasa de rebote en redes sociales y sitios web, administrar la información de cada empresa, y agendar tareas o eventos asignados a ellas. Además, el panel de Analíticas ofrece un gráfico claro de eventos por empresa, facilitando un seguimiento eficaz y una toma de decisiones basada en datos. Todo está diseñado para optimizar la organización y crecimiento de tu negocio.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "PostgreSQL",
        "Prisma",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://admin-companies.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/admin-companies.png",
      video: "",
    },
    {
      title: "Nails Queen",
      href: "https://www.nailsqueen.com",
      dates: "Dic 2022 - Feb 2023",
      active: true,
      description:
        "Un negocio especializado en el cuidado y embellecimiento de uñas busca fortalecer su presencia digital y atraer nuevos clientes. En esta primera fase, he diseñado una landing page moderna y atractiva que destaca los servicios ofrecidos, incluyendo manicura, pedicura y tratamientos especializados. La página muestra los precios de cada servicio de manera clara y accesible. Además, he implementado una funcionalidad que permite a los usuarios reservar citas en línea de forma rápida y sencilla, mejorando la experiencia del cliente y optimizando la gestión de reservas del negocio.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "PostgreSQL",
        "Prisma",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.nailsqueen.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nails_queen.jpeg",
      video: "",
    },
    {
      title: "H2O Deportiva",
      href: "https://www.h2odeportiva.com",
      dates: "Feb 2022 - Ago 2022",
      active: true,
      description:
        "Una empresa que busca ampliar su presencia online mediante un enfoque gradual. En la primera fase, hemos desarrollado una landing page que destaca los productos más populares y facilita la compra a través de un enlace a Mercado Pago. Además, se pone de relieve la oferta mayorista para revendedores. La segunda etapa, actualmente en desarrollo, incluirá una página de compra con pasarela de pagos y carrito de compras, ofreciendo una experiencia completa de comercio electrónico.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "PostgreSQL",
        "Prisma",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.h2odeportiva.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/h2o_deportiva.jpg",
      video: "",
    },
  ],
  collaboration: [
    {
      title: "Estrategia y Arquitectura en LinksCard",
      dates: "2024",
      location: "Motril, España",
      description:
        "Colaboré con LinksCard en la planificación de su estrategia comercial, desde la definición de objetivos de marca hasta la migración tecnológica y selección del stack de herramientas. Además, recomendé una arquitectura óptima para el desarrollo de su MVP.",
      image: "/linkscard_logo.png",
      mlh: "",
      links: [],
    },
    // {
    //   title: "Hack The North",
    //   dates: "September 14th - 16th, 2018",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mobile application which delivers university campus wide events in real time to all students.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
    // {
    //   title: "FirstNet Public Safety Hackathon",
    //   dates: "March 23rd - 24th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
    //   icon: "public",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
    //   links: [],
    // },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/RTSPClient",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;

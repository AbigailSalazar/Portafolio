function detectUserLanguage() {
  const langCode = navigator.language || navigator.userLanguage;
  if (langCode === "es" || langCode === "en") {
    return langCode;
  } else {
    return "en";
  }
}

//Setting up i18next library

i18next.init(
  {
    lng: detectUserLanguage(),
    debug: true,
    resources: {
      en: {
        translation: {
          nav: {
            github: "Andrea's Github profile",
            linkedin: "Andrea's LinkedIn profile",
            about: "About Me",
            skills: "Skills",
            hobbies: "Hobbies",
            education: "Education",
            projects: "Projects",
            contact: "Contact",
          },
          introduction: {
            img: "Andrea's profile picture: Drawing of a person with headphones",
            text: "Always seeking new challenges, currently learning Front-end development and keep growing as a developer.",
            text2: "Technologies used in previous projects:",
          },
          about: {
            title: "About Me",
            description:
              "Recent software engineering graduate from Mexico, with a deep enthusiasm for coding since high school. Focused on joining innovative and creative projects that make a meaningful impact on people’s lives. Dedicated to crafting thoughtful, impactful solutions that makes a difference.",
          },
          skills: {
            title: "Skills",
            creativity: "Creativity",
            time: "Time management",
            learning: "Fast learning",
            adaptability: "Adaptability",
          },
          hobbies: {
            title: "Hobbies",
            draw: "Drawing",
            music: "Listening to music",
            instruments: "Playing instruments",
            games: "Board Games",
          },
          education: {
            title: "Education",
            highschool: {
              title: "Programming course",
              details: "Technical Highschool 2017 - 2020",
            },
            college: {
              title: "Software engineering",
              details: "College 2020 - 2024",
            },
          },
          projects: {
            title: "Projects",
            codelink: "Code",
            aluraFlix:{
              title: "AluraFlix - 2025",
              screenshot: "AluraFlix app  main page screenshot",
            },
            spaceApp:{
              title: "Space App, Space Galery - 2024",
              screenshot: "Space App  main page screenshot",
            },
            aluraOrg:{
              title: "Alura Org, Team Management - 2024",
              screenshot: "Alura Org main page screenshot",
            },
            aluraGeek:{
              title: "Alura Geek, Product Management - 2024",
              screenshot: "Alura Geek  main page screenshot",
              
            },
            encrypter: {
              title: "Text Encrypter - 2024",
              screenshot: "text encrypter app screenshot",
            },
            favquotes: {
              title: '"FavQuotes" save your favorite quotes - 2024',
              screenshot: "favquotes app main page Screenshot",
            },
            venvi: {
              title: '"Venvi" Second hand online shop - 2024',
              screenshot: "Venvi app Screenshot, product section",
            },
            squadtrek: {
              title: '"SquadTrek " Group travel mobile app - 2023',
              screenshot1: "squadtreak app Screenshot of selecting travel ubication",
              screenshot2: "squadtreak app Screenshot of selecting travel dates",
              screenshot3: "squadtreak app Screenshot of sharing travel code for friends",
              screenshot4: "squadtreak app Screenshot of travel details",
            },
            lovit: {
              title: ' "lovit" Product management - 2023',
              screenshot: "lovit app Screenshot",
            },
            faceboot: {
              title: '"Faceboot" simple social media - 2022',
              screenshot: "faceboot app Screnshoot",
            },
          },
          contact: {
            title: "Contact",
            details: "Would you like to get in touch with me? Please fill out the form below, and I will respond as soon as possible.",
            name: "Name",
            email: "Email",
            topic: "Topic",
            message: "Message",
            button: "Send",
          },
          footer: {
            mycredits: "Created by Andrea Salazar, 2025",
            extcredits: "Icons by Flaticon",
          },
        },
      },
      es: {
        translation: {
          nav: {
            github: "Perfil de Github de Andrea",
            linkedin: "Perfil de LinkedIn de Andrea",
            about: "Acerca",
            skills: "Habilidades",
            hobbies: "Pasatiempos",
            education: "Formaciones",
            projects: "Proyectos",
            contact: "Contacto",
          },
          introduction: {
            img: "Foto de perfil de Andrea: Dibujo de una persona con audífonos",
            text: "Siempre en busca de nuevos desafíos, actualmente aprendiendo desarrollo Front-end y creciendo como desarrolladora",
            text2: "Tecnologías utilizadas en proyectos anteriores:",
          },
          about: {
            title: "Acerca de mí",
            description:
              "Reciente graduada en ingeniería de software en México, con un gran entusiasmo por la programación desde preparatoria. Enfocada en participar en proyectos innovadores y creativos que tengan un impacto significativo en la vida de las personas. Comprometida con creación de soluciones que marquen la diferencia.",
          },
          skills: {
            title: "Habilidades",
            creativity: "Creatividad",
            time: "Administración del tiempo",
            learning: "Rápido aprendizaje",
            adaptability: "Adaptabilidad",
          },
          hobbies: {
            title: "Pasatiempos",
            draw: "Dibujar",
            music: "Escuchar música",
            instruments: "Tocar instrumentos",
            games: "Juegos de mesa",
          },
          education: {
            title: "Formaciones",
            highschool: {
              title: "Curso de programación",
              details: "Preparatoria técnica 2017 - 2020",
            },
            college: {
              title: "Ingeniería en software",
              details: "Universidad 2020 - 2024",
            },
          },
          projects: {
            title: "Proyectos",
            codelink: "Código",
            aluraFlix:{
              title: "AluraFlix - 2025",
              screenshot: "aptura de pantalla de AluraFlix",
            },
            spaceApp:{
              title: "Space App, Galería de fotos del espacio - 2024",
              screenshot: "Captura de pantalla de Space App",
            },
            aluraOrg:{
              title: "Alura Org, Organiza equipos - 2024",
              screenshot: "Captura de pantalla de Alura Org",
            },
            aluraGeek:{
              title: "Alura Geek, administrador de productos - 2024",
              screenshot: "Captura de pantalla de Alura Geek",
              
            },
            encrypter: {
              title: "Encriptador de texto - 2024",
              screenshot: "Captura de pantalla de Encriptador de texto",
            },
            favquotes: {
              title: '"FavQuotes" guarda tus citas célebres favoritas - 2024',
              screenshot: "Captura de pantalla de la página principal de FavQuotes",
            },
            venvi: {
              title: '"Venvi" tienda online de segunda mano - 2024',
              screenshot: "Captura de pantalla de Venvi en la sección de productos",
            },
            squadtrek: {
              title: '"SquadTrek" aplicación móvil para viajes en grupo - 2023',
              screenshot1: "Captura de pantalla de squadtreak, selección de la ubicación del viaje",
              screenshot2: "Captura de pantalla de squadtreak, selección de las fechas del viaje",
              screenshot3: "Captura de pantalla de squadtreak, compartir código de viaje con amigos",
              screenshot4: "Captura de pantalla de squadtreak, detalles del viaje",
            },
            lovit: {
              title: '"lovit" Administrador de productos - 2023',
              screenshot: "Captura de pantalla de lovit",
            },
            faceboot: {
              title: '"Faceboot" Red social simple - 2022',
              screenshot: "Captura de pantalla de faceboot",
            },
          },
          contact: {
            title: "Contacto",
            details: "¿Te gustaría ponerte en contacto conmigo? Por favor llena el formulario a continuación, responderé tan pronto sea posible.",
            name: "Nombre",
            email: "Correo",
            topic: "Tema",
            message: "Mensaje",
            button: "Enviar",
          },
          footer: {
            mycredits: "Creado por Andrea Salazar, 2025",
            extcredits: "Iconos por Flaticon",
          },
        },
      },
    },
  },
  function (err, t) {
    if (err) {
      console.error("Error en la inicialización de i18next:", err);
    } else {
      updateContent();
    }
  }
);

//Updates all the translations in every element
function updateContent() {
  document.querySelectorAll("[data-translation]").forEach(function (element) {
    const key = element.getAttribute("data-translation");
    if (element.hasAttribute("data-aria")) {
      const ariaType = element.getAttribute("data-aria");
      element.setAttribute(ariaType, i18next.t(key));
    } else if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
      element.placeholder = i18next.t(key);
    } else {
      element.innerHTML = i18next.t(key);
    }
  });
}

function changeLanguage(lng) {
  i18next.changeLanguage(lng, updateContent);
}

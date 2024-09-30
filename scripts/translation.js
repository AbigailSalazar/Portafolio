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
            text: "Learning is one of my passions, I receantly graduated as a software engineer. Now I'm participating in Oracle ONE project in Alura Latam.",
            text2: "Technologies used in previous projects:",
          },
          about: {
            title: "About Me",
            description:
              " My name is Andrea Salazar, I'm from Mexico, and I am 22 years old. I started coding in high school and continued this activity through college. I now consider technology one of my hobbies; I enjoy learning about new tools and software that emerge every year. I am interested in participating in innovative and creative projects that help people.",
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
              screenshot1:
                "squadtreak app Screenshot of selecting travel ubication",
              screenshot2:
                "squadtreak app Screenshot of selecting travel dates",
              screenshot3:
                "squadtreak app Screenshot of sharing travel code for friends",
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
            details:
              "Would you like to get in touch with me? Please fill out the form below, and I will respond as soon as possible.",
            name: "Name",
            email: "Email",
            topic: "Topic",
            message: "Message",
            button: "Send",
          },
          footer: {
            mycredits: "Created by Andrea Salazar, 2024",
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
            text: "Aprender es una de mis pasiones, recientemente me gradué como Ingeniera en software, Actualmente participo en el proyecto Oracle ONE en Alura Latam.",
            text2: "Tecnologías que he usado en proyectos anteriores:",
          },
          about: {
            title: "Acerca de mí",
            description:
              "Mi nombre es Andrea Salazar, soy de México y tengo 22 años. Empecé a programar en la preparatoria y continué esta actividad a lo largo de la universidad. Ahora considero la tecnología como uno de mis pasatiempos; disfruto de aprender nuevas herramientas y software que surgen año con año. Estoy interesada en participar en proyectos creativos e innovadores que ayuden a las personas.",
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
            encrypter: {
              title: "Encriptador de texto - 2024",
              screenshot: "Captura de pantalla de Encriptador de texto",
            },
            favquotes: {
              title: '"FavQuotes" guarda tus citas célebres favoritas - 2024',
              screenshot:
                "Captura de pantalla de la página principal de FavQuotes",
            },
            venvi: {
              title: '"Venvi" tienda online de segunda mano - 2024',
              screenshot:
                "Captura de pantalla de Venvi en la sección de productos",
            },
            squadtrek: {
              title: '"SquadTrek" aplicación móvil para viajes en grupo - 2023',
              screenshot1:
                "Captura de pantalla de squadtreak, selección de la ubicación del viaje",
              screenshot2:
                "Captura de pantalla de squadtreak, selección de las fechas del viaje",
              screenshot3:
                "Captura de pantalla de squadtreak, compartir código de viaje con amigos",
              screenshot4:
                "Captura de pantalla de squadtreak, detalles del viaje",
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
            details:
              "¿Te gustaría ponerte en contacto conmigo? Por favor llena el formulario a continuación, responderé tan pronto sea posible.",
            name: "Nombre",
            email: "Correo",
            topic: "Tema",
            message: "Mensaje",
            button: "Enviar",
          },
          footer: {
            mycredits: "Creado por Andrea Salazar, 2024",
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

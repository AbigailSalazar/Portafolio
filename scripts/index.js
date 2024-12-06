import {projects,technologies} from "../data.js";

document.addEventListener("DOMContentLoaded", function () {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var topicInput = document.getElementById("topic");
  var messageInput = document.getElementById("message");
  var contactButton = document.getElementById("submitButton");

  var contactForm = document.querySelector(".contact__container");
  contactForm.onsubmit = sendEmail;

  var validationState = {
    validName: validateInput(nameInput, 50),
    validEmail: validateInput(emailInput, 254),
    validTopic: validateInput(topicInput, 50),
    validMessage: validateInput(messageInput, 300),
  };

  validateAllInputs(validationState);

  /*Listeners for all form inputs */
  nameInput.addEventListener("input", function () {
    validationState.validName = validateInput(nameInput, 50);
    validateAllInputs(validationState);
  });
  emailInput.addEventListener("input", function () {
    validationState.validEmail = validateInput(emailInput, 254);
    validateAllInputs(validationState);
  });
  topicInput.addEventListener("input", function () {
    validationState.validTopic = validateInput(topicInput, 50);
    validateAllInputs(validationState);
  });
  messageInput.addEventListener("input", function () {
    validationState.validMessage = validateInput(messageInput, 300);
    validateAllInputs(validationState);
  });

  function validateInput(input, maxLength) {
    return input.value !== "" && input.value.length <= maxLength;
  }

  // Validadates all inputs and disable/enables button
  function validateAllInputs(state) {
    if (
      state.validName &&
      state.validEmail &&
      state.validTopic &&
      state.validMessage
    ) {
      contactButton.removeAttribute("disabled");
    } else {
      contactButton.setAttribute("disabled", true);
    }
  }

  function sendEmail(event) {
    event.preventDefault();

    var name = nameInput.value;
    var email = emailInput.value;
    var topic = topicInput.value;
    var message = messageInput.value;

    //URL for email information, tittle and body
    var emailTittle = "Portafolio contact message: " + topic;
    var body =
      "Name: " +
      name +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Topic: " +
      topic +
      "\n" +
      "Message: " +
      message;

    var mailtoLink =
      "mailto:andrea425657@gmail.com?subject=" +
      encodeURIComponent(emailTittle) +
      "&body=" +
      encodeURIComponent(body);

    window.location.href = mailtoLink;
  }

  //Craetion Dinamic of components
  
  function createTechnologyComponents() {
    const techContainer = document.getElementById("technologies") 
  
    Object.keys(technologies).forEach((tech) => {

      const techImg = document.createElement("img");
      techImg.src = `assets/technologies/${technologies[tech]}`;
      techImg.alt = `${tech} logo`;
      techImg.classList.add("tech_icon");
  
      // Agregar la imagen al contenedor
      techContainer.appendChild(techImg);
    });
  } 
  
function createProjectComponents() {
  const container = document.getElementById("projects"); 

  projects.forEach((project) => {
    console.log("creando projecto: ",project.id)
    const article = document.createElement("article");
    article.classList.add("projects__project");

    const detailDiv = document.createElement("div");
    detailDiv.classList.add("rowcontainer", "project__detail");

    const title = document.createElement("h3");
    title.dataset.translation = `${project["translation-key"]}.title`;
    title.textContent = project.title;

    const codeLink = document.createElement("a");
    codeLink.href = project["code-link"];
    codeLink.target = "_blank";
    codeLink.classList.add("project__link");
    codeLink.dataset.translation = "projects.codelink";
    codeLink.textContent = "Code";
    
    detailDiv.appendChild(title);

    const linkContainer = document.createElement("div");
    linkContainer.classList.add("project__links");
    detailDiv.appendChild(linkContainer);
    linkContainer.appendChild(codeLink);

    if(project["demo-link"]){
      const demoLink = document.createElement("a");
      demoLink.href = project["demo-link"];
      demoLink.classList.add("project__link");
      demoLink.textContent = "Demo";
      demoLink.target = "_blank";
      linkContainer.appendChild(demoLink);
    }

  

    const img = document.createElement("img");
    img.classList.add("project__img");
    img.src = project.img[0].path;
    img.alt = "project screenshot";
    img.dataset.translation = `${project["translation-key"]}.screenshot`;
    img.setAttribute("data-aria", "alt");

    const techDiv = document.createElement("div");
    techDiv.classList.add("rowcontainer");

    project.technologies.forEach((tech) => {
      if(technologies[tech]) {
        const techImg = document.createElement("img");
        const techPath = `assets/technologies/${technologies[tech]}`;
  
        techImg.src = techPath;
        techImg.alt = `${tech} logo`;
        techImg.classList.add("tech_icon");
        techDiv.appendChild(techImg);
      }  
    });

    article.appendChild(detailDiv);
    article.appendChild(img);
    article.appendChild(techDiv);

    container.appendChild(article);
  });
}

createTechnologyComponents(technologies);
createProjectComponents();

});

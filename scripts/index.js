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
});

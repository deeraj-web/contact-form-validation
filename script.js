document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop the page from refreshing

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  // Clear previous messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required.";
    isValid = false;
  }

  // Show success if all fields are valid
  if (isValid) {
    document.getElementById("successMessage").textContent = "Form submitted successfully!";
  }
});

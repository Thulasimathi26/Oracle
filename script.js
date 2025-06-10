function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return false;
  }

  if (message.length < 10) {
    alert("Message should be at least 10 characters long.");
    return false;
  }

  document.getElementById("contactForm").style.display = "none";
  document.getElementById("thankYou").classList.remove("hidden");
  return false; // Prevent actual form submission
}

function countChars() {
  const message = document.getElementById("message").value;
  document.getElementById("charCount").innerText = "Characters: " + message.length;
}

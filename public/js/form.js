document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const formMessages = document.getElementById("form-messages");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
  
      const formData = new FormData(form);
  
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(response => {
          if (response.ok) {
            form.reset();
            formMessages.innerHTML = "<p>Grazie! Il tuo messaggio è stato inviato con successo.</p>";
            formMessages.style.color = "green";
            // Redirect after a few seconds
            setTimeout(() => { window.location.href = "/success"; }, 2000);
          } else {
            formMessages.innerHTML = "<p>Si è verificato un errore. Per favore riprova.</p>";
            formMessages.style.color = "red";
          }
        })
        .catch(() => {
          formMessages.innerHTML = "<p>Si è verificato un errore. Per favore riprova.</p>";
          formMessages.style.color = "red";
        });
    });
  });
  
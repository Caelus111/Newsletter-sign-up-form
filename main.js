const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector("form button");
const errorText = document.querySelector("form p");

const container = document.querySelector(".container");
const confirmation = document.querySelector(".confirmation");

function validateEmail(e) {
  e.preventDefault();

  const valEmail = /^\S+@\S+\.\S+$/;

  if (!valEmail.test(emailInput.value)) {
    emailInput.style.borderColor = "hsl(4, 100%, 67%)";
    emailInput.classList.add("error");
    errorText.style.display = "block";
  } else {
    emailInput.classList.remove("error");
    errorText.style.display = "none";

    container.style.display = "none";
    confirmation.style.display = "flex";
    confirmation.querySelector("p").innerHTML = `
     A confirmation email has been sent to
          <strong>${emailInput.value}</strong>. Please open it and click the
          button inside to confirm your subscription.
    `;
  }
}

emailInput.addEventListener("focus", (e) => {
  emailInput.style.borderColor = "hsl(234, 29%, 20%)";
});

confirmation.querySelector("button").addEventListener("click", (e) => {
  confirmation.style.display = "none";
  container.style.display = "flex";
});

form.addEventListener("submit", validateEmail);

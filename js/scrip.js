const inputEmail = document.getElementById("email");
const form = document.getElementById("form");
const validationMessage = document.getElementById("email-validation-message");
const button = document.getElementById("button");
const mainContainer = document.getElementById("mainContainer");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function checkerEmail() {
  const email = inputEmail.value.trim();
  if (validateEmail(email)) {
    validationMessage.textContent = "Valid email";
    validationMessage.classList.add("valid")
    validationMessage.classList.remove("invalid")
    button.disabled = false;
    return true;
  } else {
    validationMessage.classList.add("invalid")
    validationMessage.classList.remove("valid")
    validationMessage.textContent = "Valid email required";
    button.disabled = true;
    return false;
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const email = inputEmail.value.trim();

  mainContainer.classList.toggle("display-none");

  const successMessage = document.createElement("div");
  successMessage.id = "successMessage";
  successMessage.classList.add("successMessage");

  const img = document.createElement("img");
  img.src = "./assets/images/icon-success.svg";
  img.alt = "Success";

  const h2 = document.createElement("h2");
  h2.textContent = "Thanks for subscribing!";

  const p = document.createElement("p");
  p.textContent = "A confirmation email has been sent to ";
  const strong = document.createElement("strong");
  strong.textContent = email;
  p.appendChild(strong);
  p.appendChild(
    document.createTextNode(
      ". Please open it and click the button inside to confirm your subscription"
    )
  );

  const btnDismiss = document.createElement("button");
  btnDismiss.id = "dismiss-btn";
  btnDismiss.textContent = "Dismiss message";

  successMessage.append(img, h2, p, btnDismiss);
  document.body.appendChild(successMessage);
  btnDismiss.addEventListener("click", () => {
    form.reset();
    validationMessage.textContent = "";
    button.disabled = true;
    successMessage.remove();
    mainContainer.classList.toggle("display-none");
  });
  inputEmail.textContent=""
}
inputEmail.addEventListener("input", checkerEmail);

form.addEventListener("submit", handleSubmit);

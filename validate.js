const form = document.querySelector(".sign-up");

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const passwordError = document.querySelector(".password-error");

// console.log(passwordInput, confirmPasswordInput);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (confirmPasswordInput.value.length > 0) {
    if (passwordInput.value === confirmPasswordInput.value) {
      confirmPasswordInput.classList.add("password-valid");
      passwordInput.classList.add("password-valid");
      passwordError.style.display = "none";
      console.log("Passwords match");
      form.submit();
    } else {
      passwordInput.classList.remove("password-valid");
      confirmPasswordInput.classList.remove("password-valid");
      confirmPasswordInput.classList.add("password-invalid");
      passwordInput.classList.add("password-invalid");
      passwordError.style.display = "block";
      console.log("Passwords do not match");
    }
  }
});

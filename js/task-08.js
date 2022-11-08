const formEl = document.querySelector(".login-form");

const formValidation = (event) => {
  event.preventDefault();
  //   console.log(event.currentTarget);
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    alert("Необхідно заповнити всі поля!");
    return;
  }
  const user = {
    email: email.value,
    password: password.value,
  };
  console.log(user);
  event.currentTarget.reset();
};

formEl.addEventListener("submit", formValidation);

const isFormValid = form => {
  const formData = new FormData(form)

  const finalFormData = {}
  for (var key of formData.keys()) {
    finalFormData[key] = formData.get(key)
  }

  console.log("Objeto final: ")
  console.table(finalFormData)

  return true
}

const loginForm = document.querySelector("#login-form")
if(loginForm) {
  loginForm.addEventListener("submit", event => {
    event.preventDefault()
    if(isFormValid(loginForm)) loginForm.reset()
  })
}

const registerForm = document.querySelector("#register-form")
if(registerForm) {
  registerForm.addEventListener("submit", event => {
    event.preventDefault()
    if(isFormValid(registerForm)) {
      if(window.confirm("A tela será redirecionada, deseja prosseguir?")) window.location.href = registerForm.action
    }
  })
  
  registerForm.addEventListener("reset", event => {
    if(window.confirm("Você deseja limpar os campos do formulário?")) return true
    event.preventDefault()
  })
}

const showPassword = document.querySelector("#show-password"),
hidePassword = document.querySelector("#hide-password")
if(showPassword && hidePassword) {
  const toggleIconVisibility = () => {
    showPassword.classList.toggle("d-none")
    hidePassword.classList.toggle("d-none")
  }
  
  const togglePasswordVisibility = () => {
    const passwordInput = document.querySelector("#password")
    
    if(passwordInput.type === "password") {
      passwordInput.type = "text"
    }else{
      passwordInput.type = "password"
    }
  
    toggleIconVisibility()
  }
  
  showPassword.addEventListener("click", togglePasswordVisibility)
  hidePassword.addEventListener("click", togglePasswordVisibility)
}

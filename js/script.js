const form = document.querySelector("#generic-form")
form.addEventListener("submit", (event) => {
  event.preventDefault()
  form.reset()
  
  if(form.getAttribute("action") != "#") window.location.href = form.action
})

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

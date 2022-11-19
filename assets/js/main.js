/* ================ SHOW MENU ============= */
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/* ============= SHOW MENU ========== */
/* Validate if constant exist */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
}

/* ============= MENU HIDDEN ========== */
/* Validate if constant exist */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

/* ============= REMOVE MENU MOBILE ========== */
const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu")
  // When we click on each nav__link, we remove the show-menu
  navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/* ============= CHANGE BACKGROUND HEADER ========== */
const scrollHeader = () => {
  const header = document.getElementById("header")
  // When the scroll is greater than 50 viewport height, add the scroll-header class
  this.scrollY >= 50 ? header.classList.add("bg-header")
                     : header.classList.remove("bg-header")
}
window.addEventListener("scroll", scrollHeader)

/* ============= CALCULATE JS ========== */
const calculateForm = document.getElementById("calculate-form"),
      calculateCm = document.getElementById("calculate-cm"),
      calculateKg = document.getElementById("calculate-kg"),
      calculateMessage = document.getElementById("calculate-message")

const calculateBmi = (e) => {
  e.preventDefault()

  // Check if the fields have a value
  if(calculateCm.value === "" || calculateKg.value === "") {
    // Add and remove color
    calculateMessage.classList.remove("color-green")
    calculateMessage.classList.add("color-red")

    // Show message
    calculateMessage.textContent = "Zadej svou výšku a hmotnost!"

    //Remove message three seconds
    setTimeout(() => {
      calculateMessage.textContent = ""
    }, 3000)
  } else {
    // BMI Formula
    const cm = calculateCm.value / 100,
          kg = calculateKg.value,
          bmi = Math.round(kg / (cm * cm))

    // Show your health status
    if(bmi < 18.5){
      // Add color and display message
        calculateMessage.classList.add("color-red")
        calculateMessage.textContent = `Tvé BMI je ${bmi}. Máš podváhu a vysoké zdravotní rizika.`
    } else if(bmi < 24.9){
        calculateMessage.classList.add("color-green")
        calculateMessage.textContent = `Tvé BMI je ${bmi}. Máš ideální hmotnost a minimální zdravotní rizika.`
    } else if (bmi < 29.9){
      calculateMessage.classList.add("color-red")
      calculateMessage.textContent = `Tvé BMI je ${bmi}. Máš nadváhu a nízká až lehce vyšší zdravotní rizika.`
    } else if (bmi < 34.9){
      calculateMessage.classList.add("color-red")
      calculateMessage.textContent = `Tvé BMI je ${bmi}. Máš obezitu 1. stupně a zvýšená zdravotní rizika.`      
    } else if (bmi < 39.9){
      calculateMessage.classList.add("color-red")
      calculateMessage.textContent = `Tvé BMI je ${bmi}. Máš obezitu 2. stupně a vysoká zdravotní rizika.`      
    } else if (bmi >= 40){
      calculateMessage.classList.add("color-red")
      calculateMessage.textContent = `Tvé BMI je ${bmi}. Máš obezitu 3. stupně a velmi vysoká zdravotní rizika.`      
    }

    // To clear the input field
    calculateCm.value = ""
    calculateKg.value = ""
  }
} 

calculateForm.addEventListener("submit", calculateBmi)

/* ============= CONTACT FORM ========== */
const contactForm = document.getElementById("contact-form"),
      contactName = document.getElementById("contact-name"),
      contactEmail = document.getElementById("contact-email"),
      contactProject = document.getElementById("contact-project"),
      contactMessage = document.getElementById("contact-message")

const sendEmail = (e) => {
  e.preventDefault()

  // Check if the field has a value
  if(contactName.value === "" || contactEmail.value === "" || contactProject.value === ""){
    // Add and remove color
    contactMessage.classList.remove("color-done")
    contactMessage.classList.add("color-error")

    // Show message
    contactMessage.textContent = "Vyplňte prosím všechna pole!"
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm("service_ioab6fp","template_dnw5uog","#contact-form","qVBvMOSZV7oPJNeZ_")
      .then(() => {
        // Show messafe and add color
        contactMessage.classList.add("color-green")
        contactMessage.textContent = "Zpráva odeslána!"
      })
  }
}
contactForm.addEventListener("submit", sendEmail)


/* ============= SCROLL SECTIONS ACTIVE LINK ========== */
const sections = document.querySelectorAll("section[id]")

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight, 
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute("id"),
          sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]") 

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add("active-link")
    } else {
      sectionsClass.classList.remove("active-link")
    }

  })
}
window.addEventListener("scroll", scrollActive)

/* ============= SHOW SCROLL UP ========== */
const scrollUp = () =>{
  const scrollUp = document.getElementById("scroll-up")
  // When the scroll is higher than 350 viewport height, add the show-scroll to the a tag with the scrollup
  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                      : scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

/* ============= SCROLL REVEAL ANIMATION ========== */
const sr = ScrollReveal({
  origin:"top",
  distance: "60px",
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img, .place__content, .calculate__img` ,  {delay: 700, origin: "bottom"})
sr.reveal(`.service__card`, {origin: "left", duration: 1000})
sr.reveal(`.contact__content`, {origin: "left"})
sr.reveal(`.contact__form`, {origin: "right"})





let habilidadesDetaitls = document.querySelector(".habilidades-details")


const misHabilidades = [
    {
        title: "Ux Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas "
        +" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas.",
        icon: ''
    },
    {
        title: "Product Designer",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas "
        +" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas.",
        icon: ''
    },
    {
        title: "Interactive Design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas "
        +" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas.",
        icon: ''
    }

]

let html_habilidades = ''

misHabilidades.forEach(hablilidad => {
    html_habilidades += `

    <div class="habilidad">
        <div class="habilidad__title">
            <img src="" alt="">
            <p class="subsection black">${hablilidad.title}</p>
        </div>
        <p>${hablilidad.description}</p>
    </div>
    
    `
})

habilidadesDetaitls.innerHTML = html_habilidades

// ////////////////////////////////////


const myexperiences = [
    {company: 'amazon', comp_icon: "./images/ant-design_amazon-outlined.svg", role: "UX Designer", duration: "2 anos", period: "2015 - 2017"},
    {company: 'Airbnb', comp_icon: "./images/cib_airbnb.svg", role: "Senior UX/UI", duration: "1 ano", period: "2017 - 2018"},
    {company: 'Google', comp_icon: "./images/akar-icons_google-fill.svg", role: "Product Designer", duration: "2 anos", period: "2018 - actualidad"},

]

const expeciences = document.querySelector(".experiences")

let html_experience = ''

myexperiences.forEach(expr => {
   const {company, comp_icon, role, duration, period } = expr
    
    html_experience += `
    <div class="experience">
        <div>
            <img class="company-icon" src="${comp_icon}" alt="amazon">
        </div>
        <div class="company">
            <p class="black subsection">${company}</p>
            <p>${role}</p>
            <p>${period}</p>
        </div>
        <div>
            <p class="black subsection">${duration}</p>
        </div>
    </div>
    `
})


expeciences.innerHTML = html_experience;

//////////////// HUmbergur Icon Event

const humberger = document.querySelector(".hamberger-icon");
const navigationBar = document.querySelector('nav');

humberger.addEventListener('click', ()=> {
    navigationBar.toggleAttribute('hidden');
    
})

navigationBar.addEventListener('click', ()=> {
    navigationBar.hidden
})
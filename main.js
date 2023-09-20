var type = new Typed("#span-portifolio", {
    strings: ["portfólio web."],
    typeSpeed: 200,
    backSpeed: 100,
    loop: true
})

AOS.init();


const skills = [
    {
        id: "javascript",
        name: "JavaScript",
        note: "Back-End com node.js e Fron-End com React."
    },
    {
        id: "html",
        name: "HTML",
        note: "Nivel Avançado."
    },
    {
        id: "css",
        name: "CSS",
        note: "Nivel Intermediário."
    },
    {
        id: "react",
        name: "React",
        note: "Componentes, React Hooks."
    },
    {
        id: "node",
        name: "Node.js",
        note: "Nivel Básico / Express.js, npm."
    },
    {
        id: "api",
        name: "APIs",
        note: "Implementação e criação e APIs."
    },
    {
        id: "sql",
        name: "SQL",
        note: "Nivel Básico"
    },
    {
        id: "python",
        name: "Python",
        note: "Nivel Intermediário / Automações e algoritmos"
    },
]

function updateSkill (id) {
    skills.forEach((item) => {
        if (item.id === id) {
            document.querySelector("#skill-card > h3").innerText = item.name;
            document.querySelector("#skill-card > p").style.display = "inline-block"
            document.querySelector("#skill-card > p").innerText = item.note;
        }
    })
}


var last_section = "Web-App";

function updatePainel(event) {
    const painels = ["Web-App", "Landing-Page", "Todos", "Outros"];
    
    document.querySelector("." + last_section).style.display = "none";
    document.querySelector("#" + last_section).style.backgroundColor = "transparent";
    document.querySelector("#" + last_section).style.color = "#700B97";


    document.querySelector("." + event).style.display = "flex";
    document.querySelector("#" + event).style.backgroundColor = "#700B97";
    document.querySelector("#" + event).style.color = "white";

    last_section = event;
}

document.querySelector(".Web-App").style.display = "flex";
document.querySelector("#Web-App").style.backgroundColor = "#700B97";
document.querySelector("#Web-App").style.color = "white";


function projectOver(id) {

    document.querySelectorAll("#" + id + " > .content > .links").forEach((item) => {item.style.display = "flex"})
    document.querySelectorAll("#" + id + " > .content > h1").forEach((item) => {item.style.background = "none"});
    document.querySelectorAll("#" + id + " > .content").forEach((item) => {item.style.background = "linear-gradient(to bottom, #00000005, #000000c8, #000000f7)"});
}


function projectOut(id) {
    document.querySelectorAll("#" + id + " > .content > .links").forEach((item) => {item.style.display = "none"})
    document.querySelectorAll("#" + id + " > .content > h1").forEach((item) => {item.style.background = "linear-gradient(to bottom, #00000005, #000000c8, #000000f7)"});
    document.querySelectorAll("#" + id + " > .content").forEach((item) => {item.style.background = "none"});
}
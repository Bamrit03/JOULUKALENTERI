const tasks = [
    "Tee yksi hyvä teko tänään.",
    "Hymyile kolmelle ihmiselle.",
    "Soita ystävälle.",
    "Syö yksi hedelmä.",
    "Käy kävelyllä 15 minuuttia.",
    "Juo enemmän vettä.",
    "Siivoa työpöytäsi.",
    "Auta jotakuta.",
    "Kuuntele joululaulu.",
    "Kirjoita kiitosviesti.",
    "Lue 10 sivua kirjaa.",
    "Pidä pieni tauko.",
    "Venyttele 5 minuuttia.",
    "Kerro vitsi ystävälle.",
    "Opettele uusi sana.",
    "Tee päivän hyvä työ.",
    "Katso jouluelokuva.",
    "Piirrä jotain jouluista.",
    "Leivo jotain hyvää.",
    "Käy ulkona hetkeksi.",
    "Tee lumienkeli jos on lunta.",
    "Kirjoita joulutoive.",
    "Kerro läheiselle että välität.",
    "Hyvää joulua! 🎅"
];

const doors = document.querySelectorAll(".door");
const message = document.getElementById("message");

doors.forEach((door, index) => {
    door.addEventListener("click", () => {
        door.classList.add("open");
        message.textContent = tasks[index];
    });
});

const tasks = {
    1: "Tee yksi hyvä teko tänään ❤️",
    2: "Hymyile kolmelle ihmiselle 😊",
    3: "Soita ystävälle 📞",
    4: "",
    5: "Käy kävelyllä 🚶",
    6: "Juo enemmän vettä 💧",
    7: "Siivoa työpöytäsi 🧹",
    8: "Auta jotakuta 🤝",
    9: "Kuuntele joululaulu 🎵",
    10: '<img src="image/nobel.jpg" alt="nobel" width="300"><br>Nobelin päivää, ja silloin jaetaan aina vuoden Nobel-palkinnot.',
    11: "Lue kirjaa 10 minuuttia 📚",
    12: "Pidä pieni tauko ☕",
    13: "Venyttele 5 minuuttia 🤸",
    14: "Kerro vitsi 😄",
    15: "Opettele uusi sana 📝",
    16: "",
    17: "Katso jouluelokuva 🎬",
    18: "Piirrä jotain jouluista 🎨",
    19: "Leivo jotain hyvää 🍪",
    20: "Käy ulkona 🌳",
    21: "Tee lumienkeli ❄️",
    22: "",
    23: "Kerro läheiselle että välität ❤️",
    24: "Hyvää joulua! 🎅🎄"
};

const doors = document.querySelectorAll(".door");
const message = document.getElementById("message");

doors.forEach((door) => {
    door.addEventListener("click", () => {
        const number = door.textContent.trim();

        door.classList.add("open");
        message.innerHTML = tasks[number];

        door.innerHTML = "🎁";
    });
});

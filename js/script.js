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
    10: '<img src="image/nobel.jpg" alt="nobel" width="500"><br>Nobelin päivä. 10.12. on Alfred Nobelin kuolinpäivä ja, silloin jaetaan aina vuoden Nobel-palkinnot.',
    11: "Lue kirjaa 10 minuuttia 📚",
    12: "Pidä pieni tauko ☕",
    13: "Venyttele 5 minuuttia 🤸",
    14: "Kerro vitsi 😄",
    15: "Opettele uusi sana 📝",
    16: 'Pulma: mikä on 4 × 4? 🤔<br><input type="number" id="pulmaVastaus" placeholder="Vastaus"><button onclick="tarkistaPulma()">Tarkista</button><div id="pulmaTulos"></div>',
    17: "Katso jouluelokuva 🎬",
    18: "Piirrä jotain jouluista 🎨",
    19: "Leivo jotain hyvää 🍪",
    20: "Käy ulkona 🌳",
    21: "Tee lumienkeli ❄️",
    22: '<img src="image/Talvipaivanseisaus.jpg" alt="Talvipäivänseisaus" width="500"><br>Talvipäivänseisaus on pohjoisella pallonpuoliskolla vuoden pimein päivä. Eli vuoden lyhin päivä ja pisin yö',
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

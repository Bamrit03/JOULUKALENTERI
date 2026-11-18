const doors = document.querySelectorAll(".door");
const message = document.getElementById("message");

doors.forEach((door) => {
    door.addEventListener("click", () => {
        door.classList.add("open");
        message.textContent = "Luukku avattu! 🎅";
    });
});

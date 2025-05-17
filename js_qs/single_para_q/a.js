
let topics = ["HTML", "CSS", "JavaScript"];
let btns = document.getElementsByClassName("btn");
for (let btn of btns) {
    btn.addEventListener("click", () => {
        for (let tpc of topics) {
            let item = document.getElementById(tpc);
            if (tpc !== btn.innerHTML) {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }
        }
    });
}

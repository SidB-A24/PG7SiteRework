let btn = document.getElementById("add__btn");
btn.addEventListener("click", () => {
    let bar_list = document.createElement("li");

    let bar_outer = document.createElement("div");
    bar_outer.classList.add("bar__outline");

    let bar = document.createElement("div");
    bar.classList.add("bar");

    bar_outer.appendChild(bar);
    bar_list.appendChild(bar_outer);


    let list_list = document.getElementById("list__list")
    list_list.appendChild(bar_list)

});
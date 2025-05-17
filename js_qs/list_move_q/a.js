lst1 = document.getElementById("lst1");
lst2 = document.getElementById("lst2");
const bxes = document.getElementsByClassName("selectedItem");

const recheckButtons = () => {
    let atLeastOne = false
    for (let bx of bxes) {
        if (bx.checked) { atLeastOne = true };
    }
    if (!atLeastOne) {
        for (let btn of document.getElementsByClassName("move__btn")) {
            btn.disabled = true
        }
    }
    else {
        for (let btn of document.getElementsByClassName("move__btn")) {
            btn.disabled = false
        }
    }
}

for (let bx of Array.from(bxes)) {
    bx.addEventListener("click", () => { recheckButtons() });
}


const moveAllLeft = (event) => {
    for (let child of Array.from(lst2.children)) {
        lst1.appendChild(child);
    }
    lst2.innerHTML = "";
};
const moveLeft = (event) => {
    for (let bx of Array.from(bxes)) {
        console.log(bx)
        if (bx.checked) {
            bx.checked = false;
            recheckButtons()
            ch = bx.closest("li");
            lst2.removeChild(ch);
            lst1.appendChild(ch);
        }
    }
};
const moveRight = (event) => {
    for (let bx of Array.from(bxes)) {
        if (bx.checked) {
            bx.checked = false;
            recheckButtons()
            ch = bx.closest("li");
            lst1.removeChild(ch);
            lst2.appendChild(ch);

        }
    }
};
const moveAllRight = (event) => {
    for (let child of Array.from(lst1.children)) {
        lst2.appendChild(child);
    }
    lst1.innerHTML = "";
};
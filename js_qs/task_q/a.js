
const delTask = (event) => {
    var task_list = document.getElementById("task__list");
    task_list.removeChild(event.target.closest("li"));
};

const btns = document.getElementsByClassName("del-btn");
for (let btn of btns) {
    btn.textContent = "❌";
    btn.onclick = delTask;
}


const addTask = (event) => {
    const task_name = document.getElementById("task__input");
    if (task_name.value.length > 0) {
        var task_list = document.getElementById("task__list");
        var task_item = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = task_name.value;
        const btn = document.createElement("button");
        btn.textContent = "❌";
        btn.onclick = delTask;
        task_item.appendChild(span);
        task_item.appendChild(btn);
        task_list.appendChild(task_item);
        task_name.value = "";
    }
};

const input = document.querySelector("#todo-text");
const btn = document.querySelector("#add-btn");
const error = document.querySelector("#error");
const listado = document.querySelector("#listado");

function checkInput(e) {
  let text = e.target.value;
  if (text.trim().length === 0) {
    if (error.classList.contains("hide") && !btn.classList.contains("hide")) {
      btn.classList.add("hide");
      error.classList.remove("hide");
    }
  } else {
    error.classList.add("hide");
    btn.classList.remove("hide");
  }
}

function inputKeyPressed(e) {
  if (e.code === "Enter") addTodo();
}

function addTodo(){
  const text = input.value;
  if (text.trim().length !== 0) {
    const li = document.createElement("li");
    li.innerText = text.trim();
    listado.appendChild(li);
    input.value = "";
  }
}


input.addEventListener("input", checkInput);
input.addEventListener("keypress", inputKeyPressed);
btn.addEventListener("click", addTodo);

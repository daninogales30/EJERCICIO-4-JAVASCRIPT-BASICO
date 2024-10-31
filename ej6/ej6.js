const inputName = document.getElementById("inputName");
const addBtn = document.getElementById("addBtn");
const nameList = document.getElementById("nameList");
const randomBtn = document.getElementById("randomBtn");

let names = [];

function addName() {
    const name = inputName.value.trim();

    if (name === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    names.push(name);
    inputName.value = "";
    renderNames(); 
}

function renderNames() {
    nameList.innerHTML = "";

    names.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        nameList.appendChild(li);
    });
}

function selectRandomName() {
    if (names.length === 0) {
        alert("La lista está vacía. Agrega nombres primero.");
        return;
    }

    const items = nameList.getElementsByTagName("li");
    Array.from(items).forEach(item => item.classList.remove("selected"));

    const randomIndex = Math.floor(Math.random() * names.length);
    items[randomIndex].classList.add("selected");

    alert(`Nombre seleccionado: ${names[randomIndex]}`);
}

addBtn.addEventListener("click", addName);
randomBtn.addEventListener("click", selectRandomName);

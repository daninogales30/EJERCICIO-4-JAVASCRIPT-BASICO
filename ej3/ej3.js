const input = document.getElementById("newItemInput");
const addButton = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemsList");

function addItem() {
    const itemText = input.value.trim();
    if (itemText === "") {
        alert("Por favor, ingresa un ítem.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = itemText;

    const completeButton = document.createElement("span");
    completeButton.classList.add("material-icons", "completeBtn");
    completeButton.textContent = "done";
    completeButton.addEventListener("click", () => {
        listItem.classList.toggle("completed");
    });

    const deleteButton = document.createElement("span");
    deleteButton.classList.add("material-icons", "deleteBtn");
    deleteButton.textContent = "delete";
    deleteButton.addEventListener("click", () => {
        itemList.removeChild(listItem);
    });

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    itemList.appendChild(listItem);

    input.value = "";
}


addButton.addEventListener("click", addItem);

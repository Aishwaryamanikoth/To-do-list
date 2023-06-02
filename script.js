const inputbox = document.getElementById("input-box");
const lists = document.getElementById("lists");

function Task() {
  if (inputbox.value === '') {
    alert("Please add a task!");
  } else {
    const listItem = document.createElement("li");
    listItem.innerHTML = inputbox.value;
    listItem.classList.add("unchecked");

    const deleteButton = document.createElement("span");
    deleteButton.innerHTML = "✖";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function() {
      listItem.remove();
    });

    listItem.appendChild(deleteButton);
    lists.appendChild(listItem);
  }
  inputbox.value = "";
}

lists.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("marked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  }, false);
  
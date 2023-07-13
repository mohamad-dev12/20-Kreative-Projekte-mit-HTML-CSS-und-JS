let input = document.querySelector(".input");
let todoList = document.querySelector(".todo-list");
let removeBasket = document.querySelector(".remove-basket");

function createTodo() {
  // NEW LIST
  let newList = document.createElement("li");
  //   NEW P
  let newP = document.createElement("p");
  newP.textContent = input.value;
  //   NEW IMG
  let newImg = document.createElement("img");
  newImg.className = "remove-basket";
  newImg.src = "papierkorb.png";
  newImg.alt = "Papierkorb";

  newList.appendChild(newP);
  newList.appendChild(newImg);
  todoList.appendChild(newList);

  input.value = "";
}

document.addEventListener("click", function (e) {
  let Element = e.target;
  if (Element.className === "remove-basket") Element.closest("li").remove();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") createTodo();
});

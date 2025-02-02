document.querySelector("#eraser").addEventListener("click", () => {
  document.querySelector("#groceryItems").textContent = "";
})
document.getElementById("groceryItems").style.color="white";
document.querySelector("#userInput").addEventListener("keydown", (event) => {
  if(event.key == "Enter")
    addItem();
});

addItem = () => {
  const item = document.createElement("h4")
  item.textContent = "- " + document.querySelector("#userInput").value;

  item.addEventListener("click", () => {
    if(item.style.textDecoration != "line-through")
      item.style.textDecoration = "line-through";
    else
      item.style.textDecoration = "none";
  })

  document.querySelector("#groceryItems").appendChild(item);
  document.querySelector("#userInput").value = "";
}

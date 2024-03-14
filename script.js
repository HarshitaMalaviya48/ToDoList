const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const btn = document.querySelector("#btn");

// console.log(inputBox);
// console.log(listContainer);
// console.log(btn);

// btn.addEventListener("onclick", () => {
//     if(inputBox.value === ""){
//         alert("you hve to write someting")
//     }
//     else{
//         let li = document.createElement('li')
//         li.innerHTML = inputBox.value
//         listContainer.appendChild(li)
//     }
// })

function addTask() {
  if (inputBox.value === "") {
    alert("you hve to write someting");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value = "";
  }
  saveData();
}

listContainer.addEventListener(
  "click",
  (e) => {
    // console.log(e.target)
    if (e.target.tagName === "LI") {
      // e.target gives information about the elment is targeted (listcontainer)
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); //it will make one data object and in data object whatever in listcontainerr it will be store
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data"); //whatever data in data object it will be transfer to the listcontainer's innerHTML
}
showData();

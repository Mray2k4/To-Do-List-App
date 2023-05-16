const myLi = document.querySelector("#order");
const inputText = document.querySelector("#txt");
const addItems = document.querySelector("#btn");

addItems.addEventListener("click", (m) => {
  m.preventDefault();
  let newInput = inputText.value;
  inputText.value = "";

  const check = document.createElement("input");
  const list = document.createElement("li");
  const text = document.createElement("span");
  const btn = document.createElement("button");

  check.setAttribute("type", "checkbox");
  check.setAttribute("id", "click");
  list.appendChild(check);

  list.appendChild(text);
  text.textContent = newInput;

  myLi.appendChild(list);

  btn.onclick = function () {
    myLi.removeChild(list);
  };

  check.onclick = function () {
    if (check.checked == true) {
      btn.setAttribute("id", "remove");
      list.appendChild(btn);
      btn.textContent = "x";
      text.style.textDecoration = "line-through";
    } else if (check.checked == false) {
      text.style.textDecoration = "none";
      btn.remove();
    }
  };
});

   

    

import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createTodo(inputText);
};

const deleteFromUndo = (target) => {
  document.getElementById("undo-list").removeChild(target);
};

const completeTodo = (target) => {
  document.getElementById("completed-list").appendChild(target);
};

const createTodo = (inputText) => {
  const div = document.createElement("div");
  div.className = "list-row";
  const li = document.createElement("li");
  li.innerText = inputText;

  //完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerHTML;

    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    //戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;

      const text = deleteTarget.firstChild.innerText;
      createTodo(text);

      document.getElementById("completed-list").removeChild(deleteTarget);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    deleteFromUndo(addTarget);
    completeTodo(addTarget);
  });

  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromUndo(deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("undo-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

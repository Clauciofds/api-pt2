const url = 'http://localhost:3000/books'
const elementUl = document.querySelector("#move-list")
const elementInputTitle = document.querySelector("#new-title[name='title']")
const elementBtnRegister = document.querySelector(".btn-register")

const elementUpdateTitle = document.querySelector("#update-title[name='title']")
const elementBtnUpdate = document.querySelector('.btn-update')
let idSelection = null

async function getBooks() {
  const response = await axios.get(url)
  response.data.forEach(move => {
    createMove(move)
  });
}

getBooks();

function createMove(move) {
  const li = document.createElement("li");
  const btnDelete = document.createElement("button");
  btnDelete.className = "btn-delete";
  const spanTitle = document.createElement("span");

  btnDelete.textContent = "-";
  selectionMoveDelete(btnDelete);
  spanTitle.textContent = move.title;
  li.appendChild(spanTitle);
  li.appendChild(btnDelete);
  li.id = move.id;
  selectionMove(li);
  elementUl.appendChild(li)
}

function selectionMoveDelete(btnDelete) {
  btnDelete.addEventListener("click", (event) => {
    event.stopPropagation();
    const idMove = event.target.parentElement.id;
    deleteMove(idMove);
  });
}

function selectionMove(li) {
  li.addEventListener("click", (event) => {
    const element = event.target;

    if (element.nodeName === "LI") {
      elementInputTitle.value = spanTitle.textContent;
      idSelection = element.id;
    } else if (element.nodeName === "SPAN") {
      elementInputTitle.value = event.target.textContent;
      idSelection = element.parentElement.id;
    } else {
      return
    }

    elementBtnUpdate.disabled = false;
    elementBtnRegister.disabled = true;
  })
}

async function registerMove(event) {
  event.preventDefault();
  const response = await axios.post(url, {
    title: elementInputTitle.value
  });
  console.log(idSelection)
}

async function updateMove() {
  if (!idSelection) return;
  const response = await axios.put(`${url}/${idSelection}`, {
    title: elementUpdateTitle.value
  });
  console.log(response)
}

async function deleteMove(idMove) {
  if (!idMove) return;
  await axios.delete(`${url}/${idMove}`);
}
//  CRUD in javascript this example is used for ecommerce basket (same idea)
// messages displayed when action is complete create read(from list displayed)
// update(edit) delete(id) delete(all)
const alertDanger = 'alert-danger';
const alertSuccess = 'alert-success';
const alertWarn = 'alert-warning';

let valueEdit, element;

const input = document.querySelector('#grocery');
const form = document.querySelector('.grocery-form');

const btnSub = document.querySelector('.submit-btn');
btnSub.textContent = 'submit';

const message = document.querySelector('.alert');
const groceryList = document.querySelector('.grocery-list');
const editBtn = document.querySelector('.edit-btn');
const deleteBtn = document.querySelector('.delete-btn');
const clearBtn = document.querySelector('.clear-btn');

const groceryContainer = document.querySelector('.grocery-container');
// const groceryList = document.querySelector('.grocery-list');
const itemTitle = document.querySelector('.title');
// const groceryItem = document.querySelectorAll('.grocery-item');

//console.log(input.value);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // let inputVal = input.value;
  if (btnSub.textContent == 'edit') {
    btnSub.textContent = 'submit';
  }
  //   console.log('hello');
  //   console.log(input.value);
  if (!input.value) {
    // console.log('empty value');
    const messageText = 'value is empty';
    alerts(messageText, alertDanger);
  } else {
    const messageText = 'Item added';
    alerts(messageText, alertSuccess);
    // console.log(inputVal);
    // itemTitle.innerText = inputVal;

    const html = `

          <article class="grocery-item">
            <p class="title">${input.value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </article>   
    `;
    groceryList.insertAdjacentHTML('afterbegin', html);

    groceryContainer.classList.add('show-container');
    // clearBtn.classList.add('clear-btn-show');
    // const groceryItem = document.querySelectorAll('.grocery-item.grocery-item');
    // console.log(groceryItem);
    // groceryItem.forEach(function (item) {
    //   if (item) {
    //     groceryContainer.classList.add('show-container');
    //   } else {
    //     groceryContainer.classList.remove('show-container');
    //   }
    // });
    input.value = '';
    const groceryItemPar = document.querySelectorAll('.grocery-item p');
    const editBtn = document.querySelector('.edit-btn');
    editBtn.addEventListener('click', function (e) {
      valueEdit = editItem(e)[0];
      element = editItem(e)[1];
      // console.log(valueEdit);
      // console.log(element);
    });
    if (element) {
      groceryItemPar.forEach(function (item) {
        if (item == element) {
          // item.innerHTML = input.value;
          // console.log(item);
          // console.log(element.parentElement);
          // element.parentElement.remove();
          element.innerHTML = input.value;
          const messageText = 'Item edited';
          alerts(messageText, alertSuccess);
        }
      });
    }
    const deleteBtn = document.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function (e) {
      element = deleteItem(e);
      element.remove();
      const messageText = 'Item deleted';
      const groceryItem = document.querySelectorAll(
        '.grocery-item.grocery-item'
      );
      if (groceryItem.length == 0) {
        groceryContainer.classList.remove('show-container');
      }
      alerts(messageText, alertDanger);

      // console.log(element);
    });
  }
});

clearBtn.addEventListener('click', function () {
  if (document.querySelector('.grocery-list')) {
    const groceryList = document.querySelectorAll('.grocery-list');
    // console.log(groceryList);
    groceryList.forEach(function (item) {
      item.remove();
    });

    groceryContainer.classList.remove('show-container');

    const messageText = 'Items cleared';
    alerts(messageText, alertWarn);
  }
});

//  all functions

function editItem(e) {
  btnSub.textContent = 'edit';
  const elementEdit = e.currentTarget.parentElement.previousElementSibling;
  const titleEdit =
    e.currentTarget.parentElement.previousElementSibling.textContent;

  input.value = titleEdit;
  return [titleEdit, elementEdit];
  //   console.log(titleEdit);
  //   console.log(items);
  //   items.forEach(function (item) {
  //     if (item.textContent == titleEdit) {
  //       item.textContent = input.value;
  //     }
  //   });
}

function deleteItem(e) {
  // btnSub.textContent = 'edit';
  const elementDelete = e.currentTarget.parentElement.parentElement;
  // const titleEdit =
  //   e.currentTarget.parentElement.previousElementSibling.textContent;
  // console.log(elementDelete);
  // input.value = titleEdit;
  return elementDelete;
  //   console.log(titleEdit);
  //   console.log(items);
  //   items.forEach(function (item) {
  //     if (item.textContent == titleEdit) {
  //       item.textContent = input.value;
  //     }
  //   });
}

function alerts(error, alertCss) {
  message.innerText = error;
  message.classList.add(alertCss);
  setInterval(removeMessage, 4000);
  function removeMessage() {
    message.classList.remove(alertCss);
    message.innerText = '';
  }
}

// ****** SELECT ITEMS **********

// edit option

// ****** EVENT LISTENERS **********

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********

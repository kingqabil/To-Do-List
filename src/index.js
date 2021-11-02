/* eslint-disable import/no-cycle */
/* eslint-disable no-plusplus */
/* Select all the necessary Elements  */
const input = document.querySelector('.todo_input');
const MainTodoContainer = document.getElementById('todos')
const addingButton = document.querySelector('.add-item');
const deleteAllBtn = document.querySelector('.deleteBtn');
const completedButton = document.querySelector('.completed');
const removeButton = document.querySelector('.trash');

addingButton.addEventListener('click', function(e){
    /* stoping button behaviour */
    e.preventDefault();

    /* Create all the elements */
    if(input.value.trim()){
        /* UL Tag */
        const ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');
        /* Todo list div */
        const todoList = document.createElement('div');
        todoList.classList.add('todo-list');
        /* LI Tag */
        const liTag = document.createElement('li');
        liTag.innerText = input.value;
        liTag.classList.add('todo-item');
        /* Button Div */
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button');
        /* completed button element1 */
        const completeButton = document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        /* Edit Button */
        const editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="far fa-edit"></i>';
        editBtn.classList.add('editBtn');
        editBtn.onclick = function(){
            editWorking(liTag);
        }
        /* trash button element2 */
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';

        /* Appending Elements into each other */
        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv);
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editBtn);
        buttonDiv.appendChild(trashButton);

        /* if input is empty then don't display empty list in DOM */
        MainTodoContainer.appendChild(ulTag);

            /* sessionStorage */
        /* when the add button click clear the input value */
        input.value = '';
        /* complete and trash button working */
        todoList.addEventListener('click', function(e){
            const items = e.target;
            if(items.classList[0] === 'completed'){
                const todo = items.parentElement;
                const todo2 = todo.parentElement;
                todo2.classList.add('line_through')
            }
            else if(items.classList[0] === 'trash'){
                const todo = items.parentElement;
                const todo2 = todo.parentElement;
                todo2.classList.add('fall');
                todo2.addEventListener('transitionend', function(){
                    const todo3 = todo2.parentElement;
                    todo3.remove();
                });
            }
        });
    }else if(input.value === ''){
        alert('please fill the input field')
    }
});


function editWorking(e){
    const editValue = prompt('edit the select item', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}
function deleteAllElements(){
    const gettingUlTag = document.querySelectorAll('.todo-list-container');
    for(const i = 0; i < gettingUlTag.length; i++){
        gettingUlTag[i].remove();
    }
    input.value = '';
}

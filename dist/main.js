/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlCQUF5QjtBQUM5QztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogU2VsZWN0IGFsbCB0aGUgbmVjZXNzYXJ5IEVsZW1lbnRzICAqL1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvX2lucHV0Jyk7XHJcbmNvbnN0IE1haW5Ub2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zJylcclxuY29uc3QgYWRkaW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtJyk7XHJcbmNvbnN0IGRlbGV0ZUFsbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVCdG4nKTtcclxuY29uc3QgY29tcGxldGVkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZCcpO1xyXG5jb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhc2gnKTtcclxuXHJcbmFkZGluZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLyogc3RvcGluZyBidXR0b24gYmVoYXZpb3VyICovXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLyogQ3JlYXRlIGFsbCB0aGUgZWxlbWVudHMgKi9cclxuICAgIGlmKGlucHV0LnZhbHVlLnRyaW0oKSl7XHJcbiAgICAgICAgLyogVUwgVGFnICovXHJcbiAgICAgICAgY29uc3QgdWxUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIHVsVGFnLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdC1jb250YWluZXInKTtcclxuICAgICAgICAvKiBUb2RvIGxpc3QgZGl2ICovXHJcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3QnKTtcclxuICAgICAgICAvKiBMSSBUYWcgKi9cclxuICAgICAgICBjb25zdCBsaVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGlUYWcuaW5uZXJUZXh0ID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGlUYWcuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XHJcbiAgICAgICAgLyogQnV0dG9uIERpdiAqL1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcclxuICAgICAgICAvKiBjb21wbGV0ZWQgYnV0dG9uIGVsZW1lbnQxICovXHJcbiAgICAgICAgY29uc3QgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+JztcclxuICAgICAgICAvKiBFZGl0IEJ1dHRvbiAqL1xyXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBlZGl0QnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhciBmYS1lZGl0XCI+PC9pPic7XHJcbiAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0QnRuJyk7XHJcbiAgICAgICAgZWRpdEJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgZWRpdFdvcmtpbmcobGlUYWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiB0cmFzaCBidXR0b24gZWxlbWVudDIgKi9cclxuICAgICAgICBjb25zdCB0cmFzaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHRyYXNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RyYXNoJyk7XHJcbiAgICAgICAgdHJhc2hCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPic7XHJcblxyXG4gICAgICAgIC8qIEFwcGVuZGluZyBFbGVtZW50cyBpbnRvIGVhY2ggb3RoZXIgKi9cclxuICAgICAgICB1bFRhZy5hcHBlbmRDaGlsZCh0b2RvTGlzdCk7XHJcbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQobGlUYWcpO1xyXG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XHJcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcclxuICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XHJcbiAgICAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKHRyYXNoQnV0dG9uKTtcclxuXHJcbiAgICAgICAgLyogaWYgaW5wdXQgaXMgZW1wdHkgdGhlbiBkb24ndCBkaXNwbGF5IGVtcHR5IGxpc3QgaW4gRE9NICovXHJcbiAgICAgICAgTWFpblRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodWxUYWcpO1xyXG5cclxuICAgICAgICAgICAgLyogc2Vzc2lvblN0b3JhZ2UgKi9cclxuICAgICAgICAvKiB3aGVuIHRoZSBhZGQgYnV0dG9uIGNsaWNrIGNsZWFyIHRoZSBpbnB1dCB2YWx1ZSAqL1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgLyogY29tcGxldGUgYW5kIHRyYXNoIGJ1dHRvbiB3b3JraW5nICovXHJcbiAgICAgICAgdG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgaWYoaXRlbXMuY2xhc3NMaXN0WzBdID09PSAnY29tcGxldGVkJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gaXRlbXMucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG8yID0gdG9kby5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgdG9kbzIuY2xhc3NMaXN0LmFkZCgnbGluZV90aHJvdWdoJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGl0ZW1zLmNsYXNzTGlzdFswXSA9PT0gJ3RyYXNoJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gaXRlbXMucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZG8yID0gdG9kby5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgdG9kbzIuY2xhc3NMaXN0LmFkZCgnZmFsbCcpO1xyXG4gICAgICAgICAgICAgICAgdG9kbzIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kbzMgPSB0b2RvMi5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZG8zLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1lbHNlIGlmKGlucHV0LnZhbHVlID09PSAnJyl7XHJcbiAgICAgICAgYWxlcnQoJ3BsZWFzZSBmaWxsIHRoZSBpbnB1dCBmaWVsZCcpXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGVkaXRXb3JraW5nKGUpe1xyXG4gICAgY29uc3QgZWRpdFZhbHVlID0gcHJvbXB0KCdlZGl0IHRoZSBzZWxlY3QgaXRlbScsIGUuZmlyc3RDaGlsZC5ub2RlVmFsdWUpO1xyXG4gICAgZS5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IGVkaXRWYWx1ZTtcclxufVxyXG5mdW5jdGlvbiBkZWxldGVBbGxFbGVtZW50cygpe1xyXG4gICAgY29uc3QgZ2V0dGluZ1VsVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tbGlzdC1jb250YWluZXInKTtcclxuICAgIGZvcihjb25zdCBpID0gMDsgaSA8IGdldHRpbmdVbFRhZy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgZ2V0dGluZ1VsVGFnW2ldLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgaW5wdXQudmFsdWUgPSAnJztcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
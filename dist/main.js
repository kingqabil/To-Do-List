/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const listContainer = document.querySelector('.todolist-tasks-list');

const lists = [{
  index: 1,
  completed: [true, false],
  description: 'Morning Exercise',
}, {
  index: 2,
  completed: [true, false],
  description: 'Prepare For Work',
}, {
  index: 3,
  completed: [true, false],
  description: 'Shopping',
}, {
  index: 5,
  completed: [true, false],
  description: 'Sleep Early',
},
];

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

lists.sort((a, b) => {
  const keyA = a.index;
  const keyB = b.index;
  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  return 0;
});

function render() {
  clearElement(listContainer);
  lists.forEach((list) => {
    const listElement = document.createElement('li');
    const divElement = document.createElement('div');
    const ptagElement = document.createElement('p');
    const checkboxElement = document.createElement('input');
    const iconElement = document.createElement('i');
    listElement.dataset.listId = list.id;
    divElement.classList.add('li-content');
    checkboxElement.classList.add('checkbox');
    iconElement.classList.add('material-icons');
    checkboxElement.type = 'checkbox';
    ptagElement.contentEditable = 'true';
    ptagElement.innerText = list.description;
    iconElement.innerText = 'more_vert';
    listContainer.appendChild(listElement);
    listElement.appendChild(divElement);
    listElement.appendChild(iconElement);
    divElement.appendChild(checkboxElement);
    divElement.appendChild(ptagElement);
  });
}

render();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsUyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvbGlzdC10YXNrcy1saXN0Jyk7XG5cbmNvbnN0IGxpc3RzID0gW3tcbiAgaW5kZXg6IDEsXG4gIGNvbXBsZXRlZDogW3RydWUsIGZhbHNlXSxcbiAgZGVzY3JpcHRpb246ICdNb3JuaW5nIEV4ZXJjaXNlJyxcbn0sIHtcbiAgaW5kZXg6IDIsXG4gIGNvbXBsZXRlZDogW3RydWUsIGZhbHNlXSxcbiAgZGVzY3JpcHRpb246ICdQcmVwYXJlIEZvciBXb3JrJyxcbn0sIHtcbiAgaW5kZXg6IDMsXG4gIGNvbXBsZXRlZDogW3RydWUsIGZhbHNlXSxcbiAgZGVzY3JpcHRpb246ICdTaG9wcGluZycsXG59LCB7XG4gIGluZGV4OiA1LFxuICBjb21wbGV0ZWQ6IFt0cnVlLCBmYWxzZV0sXG4gIGRlc2NyaXB0aW9uOiAnU2xlZXAgRWFybHknLFxufSxcbl07XG5cbmZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxubGlzdHMuc29ydCgoYSwgYikgPT4ge1xuICBjb25zdCBrZXlBID0gYS5pbmRleDtcbiAgY29uc3Qga2V5QiA9IGIuaW5kZXg7XG4gIGlmIChrZXlBIDwga2V5QikgcmV0dXJuIC0xO1xuICBpZiAoa2V5QSA+IGtleUIpIHJldHVybiAxO1xuICByZXR1cm4gMDtcbn0pO1xuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gIGNsZWFyRWxlbWVudChsaXN0Q29udGFpbmVyKTtcbiAgbGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHRhZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgY2hlY2tib3hFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBpY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBsaXN0RWxlbWVudC5kYXRhc2V0Lmxpc3RJZCA9IGxpc3QuaWQ7XG4gICAgZGl2RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsaS1jb250ZW50Jyk7XG4gICAgY2hlY2tib3hFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgaWNvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICBjaGVja2JveEVsZW1lbnQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgcHRhZ0VsZW1lbnQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xuICAgIHB0YWdFbGVtZW50LmlubmVyVGV4dCA9IGxpc3QuZGVzY3JpcHRpb247XG4gICAgaWNvbkVsZW1lbnQuaW5uZXJUZXh0ID0gJ21vcmVfdmVydCc7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0RWxlbWVudCk7XG4gICAgbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2RWxlbWVudCk7XG4gICAgbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xuICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3hFbGVtZW50KTtcbiAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKHB0YWdFbGVtZW50KTtcbiAgfSk7XG59XG5cbnJlbmRlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
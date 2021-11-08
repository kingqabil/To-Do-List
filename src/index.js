import './style.css';
import display from './display.js';
import clearAll from './clearAll.js';
import clearHole from './clearHole.js';
import add from './addItem.js';
import indexUpdate from './indexUpdate.js';
import addByEnter from './addByEnter.js';
import getFromStorage, { saveInStorage } from './storage.js';

document.getElementById('addBtn').addEventListener('click', () => {
  add();
  const list = getFromStorage();
  indexUpdate(list);
  saveInStorage(list);
  display(list);
});

document.getElementById('clearAll').addEventListener('click', () => {
  const list = getFromStorage();
  clearHole(list);
});

document.getElementById('clearBtn').addEventListener('click', () => {
  const list = getFromStorage();
  clearAll(list);
});

document.querySelector('.form-control').addEventListener('keypress', (event) => addByEnter(event, add));

const list = indexUpdate(getFromStorage());

display(list);

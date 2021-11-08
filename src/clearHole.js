import display from './display.js';
import indexUpdate from './indexUpdate.js';
import getFromStorage, { saveInStorage } from './storage.js';

export default function clearHole(list) {
  list = list.splice(0);
  saveInStorage(list);
  list = indexUpdate(getFromStorage());
  display(list);
}

/**
 * @jest-environment jsdom
 */

import add from '../addItem.js';
import clearAll from '../clearAll.js';
import editItem from '../editItem.js';
import indexUpdate from '../indexUpdate.js';
import removeItem from '../removeItem.js';
import status from '../status.js';

jest.mock('../status');
jest.mock('../removeItem');
jest.mock('../indexUpdate');
jest.mock('../editItem');
jest.mock('../addItem');
jest.mock('../clearAll');

describe('Add function', () => {
  test('Add one new item to the list', () => {
    expect(add().length).toBe(2);
  });
  test('Remove one new item from the list', () => {
    expect(removeItem().length).toBe(0);
  });
  test('Remove all completed items from list', () => {
    expect(clearAll().length).toBe(1);
  });
});

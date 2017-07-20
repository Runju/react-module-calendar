import slice from './slice/test';
import formatDate from './formatDate/test';
import filterSelected from './filterSelected/test';
import filterMonth from './filterMonth/test';
import filterDataAttribute from './filterDataAttribute/test';
import filterArrayOfSelected from './filterArrayOfSelected/test';
import fillUpEmptyDate from './fillUpEmptyDate/test';

describe('methods', () => {
  slice();
  formatDate();
  filterSelected();
  filterMonth();
  filterDataAttribute();
  filterArrayOfSelected();
  fillUpEmptyDate();
});
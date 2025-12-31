const { recursiveQuickSort, iterativeQuickSort } = require('../src/quicksort');

describe('QuickSort implementations', () => {
  test('Empty array', () => {
    expect(recursiveQuickSort([])).toEqual([]);
    expect(iterativeQuickSort([])).toEqual([]);
  });

  test('Sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(recursiveQuickSort(arr)).toEqual([1, 2, 3, 4, 5]);
    expect(iterativeQuickSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('Reverse-sorted array', () => {
    const arr = [5, 4, 3, 2, 1];
    expect(recursiveQuickSort(arr)).toEqual([1, 2, 3, 4, 5]);
    expect(iterativeQuickSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  test('Duplicates', () => {
    const arr = [3, 1, 2, 3, 3, 0, 1];
    const sorted = [0, 1, 1, 2, 3, 3, 3];
    expect(recursiveQuickSort(arr)).toEqual(sorted);
    expect(iterativeQuickSort(arr)).toEqual(sorted);
  });

  test('Random large arrays', () => {
    const rng = (n) => Array.from({ length: n }, () => Math.floor(Math.random() * 10000));
    for (let size of [10, 100, 1000]) {
      const arr = rng(size);
      const expected = arr.slice().sort((a, b) => a - b);
      expect(recursiveQuickSort(arr)).toEqual(expected);
      expect(iterativeQuickSort(arr)).toEqual(expected);
    }
  }, 20000);
});

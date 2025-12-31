/**
 * QuickSort implementations (recursive and iterative) - in-place variants.
 * Exports:
 * - recursiveQuickSort(arr, compare, {inPlace:true})
 * - iterativeQuickSort(arr, compare, {inPlace:true})
 *
 * Both functions validate input and return a sorted array. By default they
 * operate on a copy (non-destructive). Pass `{ inPlace: true }` to sort the
 * original array.
 */

function _defaultCompare(a, b) {
  return a - b;
}

function _validateArray(arr) {
  if (!Array.isArray(arr)) throw new TypeError('Input must be an array');
}

function _swap(arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

/**
 * Lomuto partition scheme: picks pivot as arr[high].
 * Returns the pivot final index.
 */
function partition(arr, low, high, compare) {
  const cmp = compare || _defaultCompare;
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (cmp(arr[j], pivot) <= 0) {
      i++;
      _swap(arr, i, j);
    }
  }
  _swap(arr, i + 1, high);
  return i + 1;
}

/**
 * Recursive in-place QuickSort (tail-recursion optimization by recursing
 * on the smaller partition first). Uses Lomuto partition scheme.
 *
 * Complexity: average O(n log n), worst-case O(n^2) (rare with good pivots).
 */
function _recursiveHelper(arr, low, high, compare) {
  while (low < high) {
    const p = partition(arr, low, high, compare);
    // Recurse on smaller side first to limit stack depth
    if (p - low < high - p) {
      _recursiveHelper(arr, low, p - 1, compare);
      low = p + 1; // tail recurse for the right side
    } else {
      _recursiveHelper(arr, p + 1, high, compare);
      high = p - 1; // tail recurse for the left side
    }
  }
}

function recursiveQuickSort(inputArr, compare, options = {}) {
  _validateArray(inputArr);
  const inPlace = options.inPlace === true;
  const arr = inPlace ? inputArr : inputArr.slice();
  if (arr.length <= 1) return arr;
  _recursiveHelper(arr, 0, arr.length - 1, compare);
  return arr;
}

/**
 * Iterative QuickSort: uses an explicit stack to avoid recursion.
 * Equivalent behavior to the recursive version; also uses Lomuto partition.
 */
function iterativeQuickSort(inputArr, compare, options = {}) {
  _validateArray(inputArr);
  const inPlace = options.inPlace === true;
  const arr = inPlace ? inputArr : inputArr.slice();
  const n = arr.length;
  if (n <= 1) return arr;

  const stack = [];
  stack.push(0);
  stack.push(n - 1);

  const cmp = compare || _defaultCompare;

  while (stack.length) {
    const high = stack.pop();
    const low = stack.pop();
    if (low >= high) continue;
    const p = partition(arr, low, high, cmp);
    // push larger side first so smaller side is processed next (limits stack size)
    if (p - 1 - low > high - (p + 1)) {
      stack.push(low);
      stack.push(p - 1);
      stack.push(p + 1);
      stack.push(high);
    } else {
      stack.push(p + 1);
      stack.push(high);
      stack.push(low);
      stack.push(p - 1);
    }
  }

  return arr;
}

module.exports = {
  recursiveQuickSort,
  iterativeQuickSort,
  partition,
};

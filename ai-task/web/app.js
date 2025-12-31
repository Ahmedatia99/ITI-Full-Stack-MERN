// Browser-friendly QuickSort functions used by the demo.
// These are small, self-contained copies to avoid bundling the CommonJS src file.

function swap(arr, i, j) {
  const t = arr[i]; arr[i] = arr[j]; arr[j] = t;
}

function partitionLomuto(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++; swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

function recursiveQuickSortInPlace(arr, low = 0, high = arr.length - 1) {
  while (low < high) {
    const p = partitionLomuto(arr, low, high);
    if (p - low < high - p) {
      recursiveQuickSortInPlace(arr, low, p - 1);
      low = p + 1;
    } else {
      recursiveQuickSortInPlace(arr, p + 1, high);
      high = p - 1;
    }
  }
}

function iterativeQuickSortInPlace(arr) {
  const n = arr.length;
  const stack = [0, n - 1];
  while (stack.length) {
    const high = stack.pop();
    const low = stack.pop();
    if (low >= high) continue;
    const p = partitionLomuto(arr, low, high);
    if (p - 1 - low > high - (p + 1)) {
      stack.push(low); stack.push(p - 1);
      stack.push(p + 1); stack.push(high);
    } else {
      stack.push(p + 1); stack.push(high);
      stack.push(low); stack.push(p - 1);
    }
  }
}

function parseInput(value) {
  if (!value.trim()) return [];
  const parts = value.split(',').map(s => s.trim()).filter(Boolean);
  const nums = parts.map((p) => {
    const n = Number(p);
    if (Number.isNaN(n)) throw new Error(`Invalid number: "${p}"`);
    return n;
  });
  return nums;
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('arrayInput');
  const out = document.getElementById('output');
  const runRecursive = document.getElementById('runRecursive');
  const runIterative = document.getElementById('runIterative');
  const runBuiltin = document.getElementById('runBuiltin');

  function showResult(arr, label) {
    out.textContent = `${label}: [ ${arr.join(', ')} ]`;
  }

  runRecursive.addEventListener('click', () => {
    try {
      const arr = parseInput(input.value);
      const copy = arr.slice();
      recursiveQuickSortInPlace(copy);
      showResult(copy, 'Recursive QuickSort');
    } catch (err) { out.textContent = 'Error: ' + err.message; }
  });

  runIterative.addEventListener('click', () => {
    try {
      const arr = parseInput(input.value);
      const copy = arr.slice();
      iterativeQuickSortInPlace(copy);
      showResult(copy, 'Iterative QuickSort');
    } catch (err) { out.textContent = 'Error: ' + err.message; }
  });

  runBuiltin.addEventListener('click', () => {
    try {
      const arr = parseInput(input.value);
      const copy = arr.slice().sort((a, b) => a - b);
      showResult(copy, 'Built-in sort');
    } catch (err) { out.textContent = 'Error: ' + err.message; }
  });
});

# QuickSort Lab (JavaScript)

This repository contains recursive and iterative QuickSort implementations, Jest unit tests, a simple web demo,
and a benchmark comparing QuickSort to JavaScript's built-in `Array.prototype.sort()`.

How to run

- Install dependencies:

```bash
cd c:\Users\Ahmed\Desktop\ai-task
npm install
```

- Run tests:

```bash
npm test
```

- Run benchmark:

```bash
npm run benchmark
```

- Serve web demo (requires `http-server` via `npx`):

```bash
npm start
# then open http://localhost:8080
```

Files added

- `src/quicksort.js` - recursive and iterative implementations.
- `tests/quicksort.test.js` - Jest tests covering required cases.
- `src/benchmark.js` - simple benchmark harness.
- `web/` - web demo (UI to enter arrays and run sorting).
- `QUICKSORT.md` - explanation and complexity analysis.

How Copilot assisted

- Copilot-style assistance was used to draft implementations, tests, and documentation structures.

Key learnings

- QuickSort is fast in practice but requires careful pivot selection and edge-case handling.
- Always compare to built-in sort to verify performance before optimizing custom sorts.

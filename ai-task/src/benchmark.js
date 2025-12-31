const fs = require("fs");
const path = require("path");
const { recursiveQuickSort, iterativeQuickSort } = require("./quicksort");

function nowNs() {
  return Number(process.hrtime.bigint());
}

function timeIt(fn, arr, runs = 3) {
  let total = 0;
  for (let i = 0; i < runs; i++) {
    const copy = arr.slice();
    const t0 = nowNs();
    fn(copy);
    const t1 = nowNs();
    total += t1 - t0;
  }
  return total / runs;
}

function randomArray(n) {
  return Array.from({ length: n }, () => Math.floor(Math.random() * 1e6));
}

function runBench() {
  // sizes chosen to show small->large scaling without excessive runtime
  const sizes = [500, 1000, 2500, 5000, 10000, 20000];
  console.log("Benchmark (average of 3 runs):");

  const results = [];
  for (const n of sizes) {
    const arr = randomArray(n);
    const tRec = timeIt((a) => recursiveQuickSort(a), arr);
    const tIter = timeIt((a) => iterativeQuickSort(a), arr);
    const tBuiltin = timeIt((a) => a.sort((x, y) => x - y), arr);

    const item = {
      n,
      recursive_ms: Number((tRec / 1e6).toFixed(3)),
      iterative_ms: Number((tIter / 1e6).toFixed(3)),
      builtin_ms: Number((tBuiltin / 1e6).toFixed(3)),
    };
    results.push(item);
    console.log(
      `n=${n}  recursive=${item.recursive_ms}ms iterative=${item.iterative_ms}ms builtin=${item.builtin_ms}ms`
    );
  }

  // Write results for the web chart
  try {
    const outDir = path.join(__dirname, "..", "web");
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, "bench_results.json");
    fs.writeFileSync(
      outPath,
      JSON.stringify({ generated: Date.now(), results }, null, 2),
      "utf8"
    );
    console.log("Wrote benchmark results to", outPath);
  } catch (err) {
    console.error("Failed to write benchmark JSON:", err);
  }
}

if (require.main === module) runBench();

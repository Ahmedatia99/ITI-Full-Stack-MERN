async function loadAndRender() {
  try {
    const resp = await fetch("bench_results.json");
    if (!resp.ok) throw new Error("Could not load bench_results.json");
    const data = await resp.json();
    const results = data.results || [];

    const labels = results.map((r) => r.n);
    const rec = results.map((r) => r.recursive_ms);
    const itr = results.map((r) => r.iterative_ms);
    const bst = results.map((r) => r.builtin_ms);

    const ctx = document.getElementById("benchChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Recursive QuickSort (ms)",
            data: rec,
            borderColor: "#007bff",
            fill: false,
            tension: 0.2,
          },
          {
            label: "Iterative QuickSort (ms)",
            data: itr,
            borderColor: "#28a745",
            fill: false,
            tension: 0.2,
          },
          {
            label: "Builtin Array.sort (ms)",
            data: bst,
            borderColor: "#dc3545",
            fill: false,
            tension: 0.2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: "top" } },
        scales: {
          x: { title: { display: true, text: "Input size (n)" } },
          y: {
            title: { display: true, text: "Time (ms, avg of 3 runs)" },
            beginAtZero: true,
          },
        },
      },
    });

    const meta =
      document.getElementById("benchMeta") || document.getElementById("meta");
    if (meta)
      meta.innerHTML = `<p>Generated: ${new Date(
        data.generated
      ).toLocaleString()}</p>`;
  } catch (err) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<p style="color:red">Failed to load benchmark data: ${err.message}</p>`
    );
    console.error(err);
  }
}

loadAndRender();

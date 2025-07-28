const triggerButton = document.getElementById("triggerButton");
const notificationSection = document.getElementById("notificationSection");

function simulateNotification() {
  const message =
    "New server notification: " + Math.random().toString(36).substring(2, 15);
  const time = new Date().toLocaleTimeString();

  const notificationEvent = new CustomEvent("newNotification", {
    detail: {
      message: message,
      time: time,
    },
  });

  document.dispatchEvent(notificationEvent);
}

document.addEventListener("newNotification", function (e) {
  const { message, time } = e.detail;

  if (
    notificationSection.querySelector("p") &&
    notificationSection.querySelector("p").textContent ===
      "No notifications yet."
  ) {
    notificationSection.innerHTML = "";
  }

  const notificationDiv = document.createElement("div");
  notificationDiv.className = "notification";
  notificationDiv.innerHTML = `
                <div>${message}</div>
                <div class="notification-time">${time}</div>
            `;

  notificationSection.insertBefore(
    notificationDiv,
    notificationSection.firstChild
  );
});

triggerButton.addEventListener("click", simulateNotification);
//   -------------

// DOM elements
const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

// Custom debounce function
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    // Clear previous timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set new timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Simulated API call function
function simulateAPICall(query) {
  console.log(`API call with query: "${query}"`);

  resultsDiv.innerHTML = `<p>Searching for: <strong>${query}</strong></p>`;

  setTimeout(() => {
    const mockResults = [
      `Result 1 for ${query}`,
      `Result 2 for ${query}`,
      `Result 3 for ${query}`,
    ];

    // Display results
    resultsDiv.innerHTML = `
                    <p>Results for: <strong>${query}</strong></p>
                    <ul>
                        ${mockResults
                          .map((result) => `<li>${result}</li>`)
                          .join("")}
                    </ul>
                `;
  }, 1000);
}

const debouncedAPICall = debounce(simulateAPICall, 500);

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim();

  if (query.length >= 2) {
    debouncedAPICall(query);
  } else if (query.length === 0) {
    resultsDiv.innerHTML =
      "<p>Search results will appear here after you stop typing.</p>";
  } else {
    resultsDiv.innerHTML = "<p>Please enter at least 2 characters.</p>";
  }
});
// -------------
function throttle(func, limit) {
  let lastFunc;
  let lastRan;

  return function () {
    const context = this;
    const args = arguments;

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);

      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

function logScrollPosition() {
  const scrollY = window.scrollY;
  console.log(`Scroll position: ${scrollY}px`);

  document.getElementById(
    "scrollLog"
  ).textContent = `Scroll position: ${scrollY}px`;
}

const throttledScrollHandler = throttle(logScrollPosition, 1000);

window.addEventListener("scroll", throttledScrollHandler);

logScrollPosition();
// handeling async errors

const fetchBtn = document.getElementById("fetchBtn");
const errorBtn = document.getElementById("errorBtn");
const output = document.getElementById("output");

window.onerror = function (message, source, lineno, colno, error) {
  output.innerHTML += `
                <div class="error">
                    <strong>Global Error Handler Caught:</strong><br>
                    ${message}<br>
                    At ${source}:${lineno}:${colno}<br>
                    ${error ? error.stack : ""}
                </div>
            `;

  return true;
};

window.addEventListener("unhandledrejection", (event) => {
  output.innerHTML += `
                <div class="error">
                    <strong>Unhandled Promise Rejection:</strong><br>
                    ${event.reason}
                </div>
            `;

  event.preventDefault();
});

async function fetchData(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Simulated API failure: Server returned 500"));
      } else {
        resolve({ data: "Successful API response", status: 200 });
      }
    }, 1000);
  });
}

fetchBtn.addEventListener("click", async () => {
  try {
    output.innerHTML = "<p>Fetching data...</p>";
    const result = await fetchData();

    output.innerHTML = `
                    <div class="success">
                        <strong>Success:</strong><br>
                        Status: ${result.status}<br>
                        Data: ${JSON.stringify(result.data)}
                    </div>
                `;
  } catch (error) {
    output.innerHTML = `
                    <div class="error">
                        <strong>Caught Error (try/catch):</strong><br>
                        ${error.message}
                    </div>
                `;
  }
});

errorBtn.addEventListener("click", async () => {
  try {
    output.innerHTML = "<p>Fetching data (will fail)...</p>";

    if (Math.random() > 0.5) {
      fetchData(true);
    } else {
      await fetchData(true);
    }
  } catch (error) {
    output.innerHTML = `
                    <div class="error">
                        <strong>Caught Error (try/catch):</strong><br>
                        ${error.message}
                    </div>
                `;
  }
});

function throwRegularError() {
  throw new Error("This is a regular synchronous error");
}

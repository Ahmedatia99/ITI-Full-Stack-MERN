// problem1

document.addEventListener("DOMContentLoaded", () => {
  const tabsContainer = document.getElementById("tabs");
  const contentContainer = document.getElementById("content");

  //loading
  contentContainer.innerHTML = `
                <div class="loading">
                    <div class="spinner"></div>
                </div>
            `;

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((users) => {
      tabsContainer.innerHTML = ""; // Clear loading state

      users.forEach((user, index) => {
        const tab = document.createElement("button");
        tab.className = "tab" + (index === 0 ? " active" : "");
        tab.textContent = user.name;
        tab.dataset.userId = user.id;
        tab.addEventListener("click", () => {
          document
            .querySelectorAll(".tab")
            .forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");
          // Load posts
          loadUserPosts(user.id);
        });
        tabsContainer.appendChild(tab);
      });

      if (users.length > 0) {
        loadUserPosts(users[0].id);
      }
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      contentContainer.innerHTML = `
                        <div class="error-message">
                            Failed to load users. Please try again later.
                        </div>
                    `;
    });

  async function loadUserPosts(userId) {
    try {
      contentContainer.innerHTML = `
                        <div class="loading">
                            <div class="spinner"></div>
                        </div>
                    `;

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const posts = await response.json();

      // posts
      if (posts.length > 0) {
        let postsHTML = '<ul class="posts-list">';
        posts.forEach((post) => {
          postsHTML += `
                                <li class="post-item">
                                    <h3>${post.title}</h3>
                                    <p>${post.body.substring(0, 100)}...</p>
                                </li>
                            `;
        });
        postsHTML += "</ul>";
        contentContainer.innerHTML = postsHTML;
      } else {
        contentContainer.innerHTML = `
                            <div style="text-align: center; padding: 20px;">
                                No posts found for this user.
                            </div>
                        `;
      }
    } catch (error) {
      console.error(`Error fetching posts for user ${userId}:`, error);
      contentContainer.innerHTML = `
                        <div class="error-message">
                            Failed to load posts. Please try again later.
                        </div>
                    `;
    }
  }
});

// problem2

import { Rectangle, Square, Circle } from "./shape.js";

const rect = new Rectangle(10, 5);
const square = new Square(6);
const circle = new Circle(4);

console.log(rect.toString());
console.log(square.toString());
console.log(circle.toString());

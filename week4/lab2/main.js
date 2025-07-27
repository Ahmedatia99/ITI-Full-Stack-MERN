$(document).ready(function () {
  $(".slide").click(function () {
    $(".items").not($(this).next()).slideUp();

    $(this).next(".items").slideToggle();
  });
});

// task 2

$(document).ready(function () {
  $("#load-posts").click(function () {
    $.get("https://jsonplaceholder.typicode.com/posts", function (posts) {
      $("#posts-container").empty(); // clear previous
      posts.slice(0, 10).forEach(function (post) {
        const html = `
              <div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
              </div>
            `;
        $("#posts-container").append(html);
      });
    });
  });
});

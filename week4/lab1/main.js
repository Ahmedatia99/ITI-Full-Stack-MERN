// task 1 =========================
$("#facebook").on("mouseenter", function () {
  $(this).addClass("style");
});

$("a").on("mouseleave", function () {
  $(this).removeClass("style");
});

$("#btn").click(function () {
  $('a[href^="http"]').attr("target", "_blank");
});

// task2=========================
$("#addBtn").click(function () {
  let name = $("#name").val();
  let age = $("#age").val();

  if (name && age) {
    let row = `
          <tr>
            <td>${name}</td>
            <td>${age}</td>
            <td><button class="removeBtn">X</button></td>
          </tr>`;
    $("#studentsTable tbody").append(row);
  }
});

$("#studentsTable").on("click", ".removeBtn", function () {
  $(this).closest("tr").remove();
});

// task3===================
$(".tab").click(function () {
  $(".tab").removeClass("active");
  $(this).addClass("active");

  $(".task-content").hide();

  let taskId = $(this).data("content");
  $("#" + taskId).show();
});

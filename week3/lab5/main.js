

let usernameInput = document.getElementById("uname");
let ageInput = document.getElementById("age");
let addressInput = document.getElementById("address");
let storage = localStorage.getItem("users");

const data = document.getElementById("submission").onclick = (e) => {
  let usersArr = [];
  if (storage) {
    usersArr = JSON.parse(storage);
  }
  e.preventDefault();
  usersArr.push({
    uname: usernameInput.value,
    age: ageInput.value,
    address: addressInput.value,
  });
  localStorage.setItem("users", JSON.stringify(usersArr));
  storage = localStorage.getItem("users");
};

    const storedData = localStorage.getItem("users");
    const users = storedData ? JSON.parse(storedData) : [];

    const tableBody = document.getElementById("data-body");

    users.forEach(user => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${user.uname}</td>
        <td>${user.age}</td>
        <td>${user.address}</td>
      `;

      tableBody.appendChild(row);
    });


 navigator.geolocation.getCurrentPosition(function(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, "_blank");
});



// Inline style
document.write('<h1 style="color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial;">Elzero</h1>');


// Method 2:
document.head.appendChild(document.createElement("style")).textContent = `
  .title {
    color: blue;
    font-size: 80px;
    font-weight: bold;
    text-align: center;
    font-family: Arial;
  }
`;
document.body.appendChild(document.createElement("h1")).className = "title";

document.querySelector("h1").textContent = "Elzero";


// Method 3:
document.head.innerHTML += `
  <style>
    .title {
      color: blue;
      font-size: 80px;
      font-weight: bold;
      text-align: center;
      font-family: Arial;
    }
  </style>
`;

document.body.innerHTML += `<h1 class="title">Elzero</h1>`;

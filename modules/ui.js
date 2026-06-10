export function renderCards(items) {
  const container = document.getElementById("card-container");
  container.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("div");

    card.classList.add("card")

    card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    `;
    container.appendChild(card);
  });
}

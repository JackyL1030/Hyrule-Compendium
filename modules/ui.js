export function renderCards(items, onCardClick) {
  const container = document.getElementById("card-container");
  container.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("div");

    card.classList.add("card");

    card.addEventListener("click", () => {
        onCardClick(item)
    })

    card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    `;
    container.appendChild(card);
  });
}

export function openModal(item) {
  document.getElementById("modal-image").src = item.image;
  document.getElementById("modal-name").textContent = item.name;
  document.getElementById("modal-description").textContent = item.description;
  document.getElementById("modal").classList.remove("hidden");
}
export function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

import { getCategory } from "./modules/api.js";
import { renderCards, openModal, closeModal } from "./modules/ui.js";

let currentItems = [];

async function loadData() {
  try {
    currentItems = await getCategory("monsters");
    //console.log(allMonsters[0]);
    renderCards(currentItems, openModal);

    document
      .getElementById("close-modal")
      .addEventListener("click", closeModal);

    setupSearch();
    setupCategories();
  } catch (error) {
    console.error(error);
  }
}

function setupSearch() {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const filteredItems = currentItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm),
    );

    renderCards(filteredMonsters, openModal);
  });
}
function setupCategories() {
  const buttons = document.querySelectorAll("[data-category]");
  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      const category = button.dataset.category;

      currentItems = await getCategory(category);

      renderCards(currentItems, openModal);
    });
  });
}

loadData();
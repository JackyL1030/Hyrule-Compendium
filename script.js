import { getCategory } from "./modules/api.js";
import { renderCards, openModal, closeModal } from "./modules/ui.js";

let currentItems = [];

async function loadData() {
  try {
    showLoading();
    currentItems = await getCategory("monsters");
    //console.log(allMonsters[0]);
    renderCards(currentItems, openModal);
    hideLoading();

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

    renderCards(filteredItems, openModal);
  });
}
function setupCategories() {
  const buttons = document.querySelectorAll("[data-category]");
  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active")
      showLoading();
      const category = button.dataset.category;

      currentItems = await getCategory(category);

      renderCards(currentItems, openModal);
      hideLoading();
    });
  });
}
function showLoading() {
  document.getElementById("loading").classList.remove("hidden");
}

function hideLoading() {
  document.getElementById("loading").classList.add("hidden");
}

loadData();
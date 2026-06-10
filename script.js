import { getCategory } from "./modules/api.js";
import { renderCards, openModal, closeModal } from "./modules/ui.js";

let allMonsters = [];

async function loadData() {
  try {
    allMonsters = await getCategory("monsters");
    console.log(allMonsters[0]);
    renderCards(allMonsters, openModal);

    document
      .getElementById("close-modal")
      .addEventListener("click", closeModal);

    setupSearch();
  } catch (error) {
    console.error(error);
  }
}

function setupSearch() {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", event => {
    const searchTerm = event.target.value.toLowerCase();

    const filteredMonsters = allMonsters.filter(monster =>
      monster.name.toLowerCase().includes(searchTerm)
    );

    renderCards(filteredMonsters, openModal);
  });
}

loadData();
import { getCategory } from "./modules/api.js";
import { renderCards, openModal, closeModal } from "./modules/ui.js";

async function loadData() {
  try {
    const monsters = await getCategory("monsters");
    console.log(monsters[0]);
    renderCards(monsters, openModal);

    document
      .getElementById("close-modal")
      .addEventListener("click", closeModal);
  } catch (error) {
    console.error(error);
  }
}

loadData();

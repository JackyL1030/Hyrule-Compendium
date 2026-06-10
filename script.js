import { getCategory } from "./modules/api.js";
import { renderCards } from "./modules/ui.js";

async function loadData() {
  try {
    const monsters = await getCategory("monsters");

    renderCards(monsters);
  } catch (error) {
    console.error(error);
  }
}

loadData();
import { getCategory } from "./modules/api.js";

async function loadData() {
  try {
    const monsters = await getCategory("monsters");

    console.log(monsters);
    console.log(monsters[0]);
  } catch (error) {
    console.error(error);
  }
}

loadData();
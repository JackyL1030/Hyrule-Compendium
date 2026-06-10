const BASE_URL = "https://api.hyrule-compendium.com/v3";
export async function getCategory(category) {
  const response = await fetch(`${BASE_URL}/compendium/category/${category}`);
  const data = await response.json()
  return data.data;
}

const BASE_URL = "https://swapi.dev/api/";

// TODO: handle errors
export async function getFilms() {
  try {
    const response = await fetch(BASE_URL + "films/");
    const data = await response.json();
    return data.results;
  } catch (e) {
    throw new Error("Failed to fetch films");
  }
}

const BASE_URL = "https://swapi.dev/api/";

export async function getFilms() {
  try {
    const response = await fetch(BASE_URL + "films/");

    // Handle possible error cases
    if (response.status == 404)
      throw new Error("This resource no longer exists");
    if (response.status == 500 || response.status == 503)
      throw new Error("This sercive is currently unavailable");
    if (response.status !== 200) throw new Error("Failed to fetch films");

    return await response.json();
  } catch (e) {
    // Throw error if it is an instance of Error.
    // React Query will handle this error and set the isError flag to true.
    if (e instanceof Error) throw e;

    // Catch all other errors and throw a general new Error.
    throw new Error("Failed to fetch films. Contact the administrator.");
  }
}

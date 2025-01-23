const BASE_URL = "http://localhost:8111/api/";

export async function getFilms() {
  try {
    const response = await fetch(BASE_URL + "films/");

    // Handle possible error cases
    if (response.status == 404)
      throw new Error("This resource no longer exists");
    if (response.status == 500 || response.status == 503)
      throw new Error("This sercive is currently unavailable");
    if (response.status !== 200) throw new Error(response.statusText);

    return await response.json();
  } catch (e) {
    // If the error is a TypeError, it usually means the backend service is down.
    if (e instanceof TypeError)
      throw new Error(
        "Backend service might be down. Start the service and try again."
      );

    // Throw error if it is an instance of Error.
    // React Query will handle this error and set the isError flag to true.
    if (e instanceof Error) throw e;

    // Catch all other errors and throw a general new Error.
    throw new Error("Failed to fetch films. Contact the administrator.");
  }
}

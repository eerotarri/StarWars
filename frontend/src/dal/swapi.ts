const BASE_URL = "http://localhost:8111/api/";
const TIMEOUT = 60 * 1000; // 15 seconds

async function fetchData(endpoint: string) {
  const url = BASE_URL + endpoint;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    // Handle all probable error cases
    if (response.status == 404) throw new Error("This resource doesn't exists");
    if (response.status == 500 || response.status == 503)
      throw new Error("This service is currently unavailable");
    if (response.status < 200 || response.status >= 300)
      throw new Error(response.statusText);

    return await response.json();
  } catch (e) {
    // If the error is a TypeError, it usually means the backend service is down.
    if (e instanceof TypeError)
      throw new Error(
        "Backend service might be down. Start the service and try again."
      );

    // If the error is a DOMException, it usually means the request timed out.
    if (e instanceof DOMException) {
      throw new Error(
        "Request timed out. Backend service might be down. Start the service and try again."
      );
    }

    if (e instanceof Error)
      // Throw error if it is an instance of Error.
      // React Query will handle this error and set the isError flag to true.
      throw new Error(e.message);

    // Catch all other errors and throw a general new Error.
    throw new Error("Failed to fetch data. Contact the administrator.");
  }
}

export async function getFilms() {
  return fetchData("films/");
}

export async function getByType(type: String) {
  return fetchData(`${type}/`);
}

export async function getCount(type: String, target: String) {
  return fetchData(`count/${type}/${target}`);
}

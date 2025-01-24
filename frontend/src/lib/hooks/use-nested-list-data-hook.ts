import { getByType } from "@/dal/swapi";
import { useQuery } from "@tanstack/react-query";

/**
 * Custom hook to fetch and filter nested list data based on provided URLs.
 * It fetches data in two steps to ensure that all data is fetched as fast as possible.
 *
 * @param {string} type - The type of data to fetch.
 * @param {string[]} urls - An array of URLs to filter the data.
 * @returns {{ data: any; isLoading: boolean }} - An object containing the filtered data and loading state.
 *
 * @example
 * const { data, isLoading } = useNestedListData('people', ['https://swapi.dev/api/people/1/', 'https://swapi.dev/api/people/2/']);
 */
export function useNestedListData(
  type: string,
  urls: string[]
): { data: any; isLoading: boolean } {
  // Fetch the data for the provided type.
  // This attempts to get all data for the provided type.
  const { data, isLoading } = useQuery({
    queryKey: [type],
    queryFn: () => getByType(type),
  });

  // Extract the IDs from the provided URLs.
  const ids = urls.map((url) => url.split("/").slice(-2)[0]);

  // Filter the fetched data based on the extracted IDs to get the appropriate data.
  const filtered_data = data
    ? data.filter((item: any) => ids.includes(item.url.split("/").slice(-2)[0]))
    : [];

  // SWAPI might not return all the data for the provided URLs in a getAll request.
  // Find the IDs that are missing from the filtered data.
  const missingIds = ids.filter(
    (id) =>
      !filtered_data.some(
        (item: any) => item.url.split("/").slice(-2)[0] === id
      )
  );

  // Fetch the missing data for the provided URLs one by one.
  const { data: missingData } = useQuery({
    queryKey: ["missing", type, missingIds],
    queryFn: () =>
      Promise.all(missingIds.map((id) => getByType(`${type}/${id}`))),
    enabled: missingIds.length > 0,
  });

  // Combine the filtered data and the missing data to get the complete data.
  const combinedData = [...filtered_data, ...(missingData || [])];

  return { data: combinedData, isLoading };
}

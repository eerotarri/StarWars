import "./App.css";
import { useQuery } from "@tanstack/react-query";
import ErrorAlert from "./components/error-alert";
import { Film } from "./lib/models/film";
import { getFilms } from "./dal/swapi";
import NestedList from "./components/nested-list";
import { CustomPieChart } from "./components/pie-chart";
import { Spinner } from "./components/ui/spinner";

function App() {
  // Fetch the complete data for all films
  const { data, isSuccess, error, isError, isLoading } = useQuery<Film[]>({
    queryKey: ["films"],
    queryFn: getFilms,
    retry: 0,
  });

  const data_urls = data?.map((film) => film.url);
  const data_type = data_urls?.[0]?.split("/").at(-3) || "undefined type";

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="w-screen bg-background p-4 h-full">
      {isSuccess && (
        <>
          <NestedList
            open
            name={data_type}
            type={data_type}
            urls={data_urls || []}
          />
          <CustomPieChart />
        </>
      )}
      {isError && <ErrorAlert message={error.message} />}
    </main>
  );
}

export default App;

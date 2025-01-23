import "./App.css";
import { useQuery } from "@tanstack/react-query";
import FilmList from "./components/film-list";
import ErrorAlert from "./components/error-alert";
import { Film } from "./lib/models/film";
import { getFilms } from "./dal/swapi";

function App() {
  const result = useQuery<{ results: Film[] }>({
    queryKey: ["films"],
    queryFn: getFilms,
  });

  return (
    <main className="flex flex-col bg-background p-4 h-screen">
      {result.isSuccess && <FilmList films={result.data?.results} />}
      {result.isError && <ErrorAlert message={result.error.message} />}
    </main>
  );
}

export default App;

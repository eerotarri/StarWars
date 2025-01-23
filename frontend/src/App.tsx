import "./App.css";
import { useQuery } from "@tanstack/react-query";
import FilmList from "./components/film-list";
import ErrorAlert from "./components/error-alert";
import { Film } from "./lib/models/film";
import { getFilms } from "./dal/swapi";

function App() {
  const { data, isSuccess, error, isError } = useQuery<Film[]>({
    queryKey: ["films"],
    queryFn: getFilms,
  });

  return (
    <main className="flex flex-col bg-background p-4 h-screen">
      {isSuccess && <FilmList films={data} />}
      {isError && <ErrorAlert message={error.message} />}
    </main>
  );
}

export default App;

import "./App.css";
import { useQuery } from "@tanstack/react-query";
import FilmList from "./components/film-list";
import { Film } from "./lib/models/film";

function App() {
  const { data } = useQuery<{ results: Film[] }>({
    queryKey: ["films"],
    queryFn: async () => {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        return;
      }
      return response.json();
    },
  });

  return (
    <main className="flex flex-col bg-background p-4 h-screen">
      <FilmList films={data?.results} />
    </main>
  );
}

export default App;

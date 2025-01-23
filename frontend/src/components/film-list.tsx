import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Film } from "@/lib/models/film";

/**
 * A component that renders a list of Star Wars films using an accordion UI.
 * @param {Film[] | undefined} films - An array of film objects or undefined if the data is still loading.
 * @returns {JSX.Element} The rendered component.
 */
function FilmList({ films }: { films: Film[] | undefined }): JSX.Element {
  if (!films) {
    return <div>Loading...</div>;
  }

  return (
    <Accordion
      className="w-full max-w-7xl self-center text-foreground"
      type="single"
      collapsible
    >
      {films.map((film) => (
        <AccordionItem key={film.episode_id} value={`item-${film.episode_id}`}>
          <AccordionTrigger className="bg-primary">
            {film.title} - Episode {film.episode_id}
          </AccordionTrigger>
          <AccordionContent className="bg-secondary rounded-xl">
            <div className="flex flex-col gap-4 items-start p-4">
              <p>
                <strong>Episode:</strong> {film.episode_id}
              </p>
              <p>
                <strong>Release Date:</strong>
                {" " + film.release_date}
              </p>
              <p>
                <strong>Director:</strong> {film.director}
              </p>
              <p>
                <strong>Producer:</strong> {film.producer}
              </p>
              <p className="text-left">
                <strong>Opening Crawl:</strong> {film.opening_crawl}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FilmList;

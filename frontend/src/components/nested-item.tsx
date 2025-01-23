import { getById } from "@/dal/swapi";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { useQuery } from "@tanstack/react-query";
import NestedList from "./nested-list";

function NestedItem({ url }: { url: String }): JSX.Element {
  const [type, id, _] = url.split("/").slice(-3);

  const { data } = useQuery({
    queryKey: [type, id],
    queryFn: () => getById(type, id),
  });

  return (
    <AccordionItem key={`${type}-${id}`} value={`item-${type}-${id}`}>
      <AccordionTrigger className="w-full bg-primary pl-4 rounded-xl mt-1">
        {data?.name || data?.title || "Loading..."}
      </AccordionTrigger>
      <AccordionContent className="bg-secondary rounded-xl mb-4">
        {data &&
          Object.entries(data).map(([key, value]) => {
            // Skip these keys
            if (["url", "created", "edited"].includes(key)) {
              return null;
            }

            // If the value is a URL, fetch the data and render a nested list
            if (typeof value === "string" && value.startsWith("http")) {
              return <NestedList type={key} key={key} urls={[value]} />;
            }

            // If the value is an array of URLs, fetch the data and render a nested list
            if (
              Array.isArray(value) &&
              value.every((v) => typeof v === "string" && v.startsWith("http"))
            ) {
              // Skip empty arrays
              if (value.length === 0) return null;
              return <NestedList type={key} key={key} urls={value} />;
            }

            // Render the key-value pair
            return (
              <p key={key}>
                {key}: {String(value)}
              </p>
            );
          })}
      </AccordionContent>
    </AccordionItem>
  );
}

export default NestedItem;

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import NestedList from "./nested-list";
import { capitalize } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";

/**
 * A component that renders an item for Accordion.
 * This component can recursively call for another Accordion.
 * @param {any} data - The data to be displayed in the nested item.
 * @returns {JSX.Element} The rendered component.
 */
function NestedItem({ data }: { data: any }): JSX.Element {
  return (
    <AccordionItem key={data.url} value={`item-data-${data.url}`}>
      <AccordionTrigger className="w-full bg-secondary rounded-xl mt-1 AccordionTrigger">
        {data?.name || data?.title || "Else"}
        <ChevronDownIcon
          className="AccordionChevron float-right"
          aria-hidden
          size={24}
        />
      </AccordionTrigger>
      <AccordionContent className="flex flex-col bg-slate-700 text-left pl-4">
        {data &&
          Object.entries(data).map(([key, value]) => {
            // Skip these keys
            if (["name", "title", "url", "created", "edited"].includes(key)) {
              return null;
            }

            // If the value is a URL, fetch the data and render a nested list
            if (typeof value === "string" && value.startsWith("http")) {
              return (
                <NestedList
                  name={key}
                  type={"planets"}
                  key={value}
                  urls={[value]}
                />
              );
            }

            // If the value is an array of URLs, fetch the data and render a nested list
            if (
              Array.isArray(value) &&
              value.every((v) => typeof v === "string" && v.startsWith("http"))
            ) {
              // Skip empty arrays
              if (value.length === 0) return null;
              return (
                <NestedList
                  name={key}
                  type={value[0].split("/").at(-3)}
                  key={key}
                  urls={value}
                />
              );
            }

            // Render the key-value pair
            return (
              <p className="mb-3" key={key}>
                <strong>{capitalize(key)}</strong>: {String(value)}
              </p>
            );
          })}
      </AccordionContent>
    </AccordionItem>
  );
}

export default NestedItem;

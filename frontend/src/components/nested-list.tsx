import { Accordion } from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import NestedItem from "./nested-item";

/**
 * A component that renders a list of Star Wars films using an accordion UI.
 * @param {Person[]} films - An array of film objects or undefined if the data is still loading.
 * @returns {JSX.Element} The rendered component.
 */
function NestedList({
  type,
  urls,
}: {
  type: string;
  urls: string[];
}): JSX.Element {
  return (
    <Accordion
      className="w-full max-w-7xl self-center text-foreground pl-4"
      type="single"
      collapsible
    >
      <Collapsible>
        <CollapsibleTrigger className="text-left bg-primary w-full">
          {capitalize(type)}
        </CollapsibleTrigger>
        <CollapsibleContent className="bg-secondary rounded-xl">
          {urls.map((url) => (
            <NestedItem key={url} url={url} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    </Accordion>
  );
}

/**
 * Capitalizes the first letter of each word in a string, replacing underscores with spaces.
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 */
function capitalize(str: string): string {
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default NestedList;

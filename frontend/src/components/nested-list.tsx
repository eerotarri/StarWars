import { Accordion } from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import NestedItem from "./nested-item";
import { capitalize } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { useNestedListData } from "@/lib/hooks/use-nested-list-data-hook";

interface NestedListProps {
  name: string;
  type: string;
  urls: string[];
  open?: boolean;
}

/**
 * A component that renders a list of Star Wars films using an accordion UI.
 * @param {Person[]} films - An array of film objects or undefined if the data is still loading.
 * @returns {JSX.Element} The rendered component.
 */
function NestedList({ name, type, urls, open }: NestedListProps): JSX.Element {
  const { data, isLoading } = useNestedListData(type, urls);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Accordion
      className="w-full self-center text-foreground mb-1"
      type="single"
      collapsible
    >
      <Collapsible open={open}>
        <CollapsibleTrigger className="text-left bg-primary w-full AccordionTrigger">
          {capitalize(name)}
          <ChevronDownIcon
            className="AccordionChevron float-right"
            aria-hidden
            size={24}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="bg-secondary rounded-xl mb-1">
          {data.map((data: any) => (
            <NestedItem key={data.url} data={data} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    </Accordion>
  );
}
export default NestedList;

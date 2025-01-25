import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQueryClient } from "@tanstack/react-query";

/**
 * CustomSelect component renders a dropdown select menu with various options.
 * It uses the `Select` component from the UI library and integrates with React Query.
 *
 * @param {Object} props - The props object.
 * @param {Function} props.setTarget - A function to set the selected target value.
 * @param {Object} [props.x] - Additional props to be passed to the SelectTrigger component.
 *
 * @returns {JSX.Element} The rendered CustomSelect component.
 *
 * @example
 * <CustomSelect setTarget={(value) => console.log(value)} />
 */
function CustomSelect({
  setTarget,
  ...props
}: {
  setTarget: (value: string) => void;
  [x: string]: any;
}) {
  const queryClient = useQueryClient();
  return (
    <Select
      onValueChange={(value) => {
        setTarget(value);
        queryClient.invalidateQueries({ queryKey: ["count"] });
      }}
    >
      <SelectTrigger {...props}>
        <SelectValue placeholder="Characters" defaultValue="characters" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="characters">Characters</SelectItem>
        <SelectItem value="species">Species</SelectItem>
        <SelectItem value="vehicles">Vehicles</SelectItem>
        <SelectItem value="planets">Planets</SelectItem>
        <SelectItem value="starships">Starships</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default CustomSelect;

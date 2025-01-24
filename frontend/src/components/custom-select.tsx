import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQueryClient } from "@tanstack/react-query";

function CustomSelect({
  setTarget,
  ...props
}: {
  setTarget: (value: string) => void;
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
        <SelectValue placeholder="characters" defaultValue="characters" />
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function CustomSelect({ ...props }: any) {
  return (
    <Select onValueChange={(value) => console.log(value)}>
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

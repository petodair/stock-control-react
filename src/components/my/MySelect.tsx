import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FieldItem {
  label: string;
  value: string | null;
}

type MySelectProps = {
  label: string;
  placeholder: string;
  selectItems: FieldItem[];
};

function MySelect({ label, placeholder, selectItems }: MySelectProps) {
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Select items={selectItems}>
        <SelectTrigger className="md:border-background">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="md:bg-background">
            <SelectLabel>{placeholder}</SelectLabel>
            {selectItems.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
}

export default MySelect;

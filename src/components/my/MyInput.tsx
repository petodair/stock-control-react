import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type MyInputProps = {
  id: string;
  label: string;
  placeholder?: string;
  type: string;
};

function MyInput({ id, label, placeholder, type }: MyInputProps) {
  return (
    <Field>
      <FieldLabel className="text-white" htmlFor={id}>
        {label}
      </FieldLabel>
      <Input
        className="md:border-background"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </Field>
  );
}

export default MyInput;

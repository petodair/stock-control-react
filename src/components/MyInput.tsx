import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type MyInputProps = {
  id: string;
  label: string;
  placeholder?: string;
  type: string;
};

function MyInput({id,label,placeholder,type}:MyInputProps) {
  return (
    <Field>
      <FieldLabel className="text-[#165b79]" htmlFor={id}>
        {label}
      </FieldLabel>
      <Input
        className="border-[#092c3a]"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </Field>
  );
}

export default MyInput;

import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import MyDialog from "../../components/my/MyDialog";
import MyInput from "../../components/my/MyInput";

function ProductTypeDialog() {
  return (
    <MyDialog
      trigger={<Button className="self-end">Adicionar tipo de produto</Button>}
      header="Adicionar tipo de produto"
    >
      <FieldGroup>
        <MyInput
          id="name"
          label="Nome"
          placeholder="Insira o tipo de produto"
          type="text"
        />
        <Field>
          <Button>Adicionar</Button>
        </Field>
      </FieldGroup>
    </MyDialog>
  );
}

export default ProductTypeDialog;

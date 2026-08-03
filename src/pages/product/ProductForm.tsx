import { Field, FieldGroup } from "@/components/ui/field";
import MyInput from "../../components/my/MyInput";
import { Button } from "@/components/ui/button";
import MySelect from "../../components/my/MySelect";
import ProductTypeDialog from "./ProductTypeDialog";

function ProductForm() {
  const productTypeList = [
    { label: "Selecionar um tipo", value: null },
    { label: "Perecível", value: "perecivel" },
    { label: "Limpeza", value: "limpeza" },
    { label: "Bebída", value: "bebida" },
  ];

  return (
    <div className="flex flex-col justify-center items-center p-4 gap-2 w-full">
      <h1 className="text-center text-2xl">Cadastrar Produto</h1>
      <FieldGroup>
        <MyInput
          id="name"
          label="Nome"
          type="text"
          placeholder="Insira o nome do produto"
        />
        <MyInput
          id="code"
          label="Código"
          type="text"
          placeholder="Insira o código do produto"
        />
        <MyInput
          id="price"
          label="Preço"
          type="number"
          placeholder="Insira o preço do produto"
        />
      </FieldGroup>
      <br />
      <FieldGroup className="grid md:grid-cols-2">
        <MySelect
          label="Tipo de produto"
          placeholder="Tipos"
          selectItems={productTypeList}
        />
        <ProductTypeDialog />
      </FieldGroup>
      <Field>
        <Button>Cadastrar</Button>
      </Field>
    </div>
  );
}

export default ProductForm;

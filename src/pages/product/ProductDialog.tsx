import { Button } from "@/components/ui/button";
import MyDialog from "../../components/my/MyDialog";
import type Product from "../../types/Product";

type ProductDialogProps = {
  product: Product | null;
  onOpenChange?: () => void;
};

function ProductDialog({ product, onOpenChange }: ProductDialogProps) {
  return (
    <MyDialog header="Opções" open={!!product} onOpenChange={onOpenChange}>
      <p>O que deseja fazer com {product?.name}?</p>
      <div className="flex flex-row space-x-2">
        <Button className="bg-blue-800 text-white">Editar</Button>
        <Button className="bg-red-800 text-white">Excluir</Button>
      </div>
    </MyDialog>
  );
}

export default ProductDialog;

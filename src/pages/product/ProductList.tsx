import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockProducts } from "../../service/ProductService";

function ProductList() {
  const list = mockProducts();

  return (
    <div>
      <h1 className="text-2xl text-center font-semibold">Produtos</h1>
      <div className="rounded-md border overflow-x-auto m-6">
        <Table>
          <TableHeader className="hidden md:table-header-group">
            <TableRow>
              <TableHead className="hidden sm:table-cell">ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Código</TableHead>
              <TableHead>Preço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {list.map((product) => (
              <>
                <TableRow className="md:hidden">
                  <TableCell colSpan={4}>
                    <div className="flex flex-col gap-1 p-2">
                      <span>
                        <strong>ID:</strong> {product.id}
                      </span>
                      <span>
                        <strong>Nome:</strong> {product.name}
                      </span>
                      <span>
                        <strong>Código:</strong> {product.code}
                      </span>
                      <span>
                        <strong>Preço:</strong> R$ {product.price}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>

                {/* Tabela para telas largas */}
                <TableRow className="hidden md:table-row">
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.code}</TableCell>
                  <TableCell>{product.price}</TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default ProductList;

import type Product from "../types/Product";

export function mockProducts(): Product[] {
  return [
    {
      id: 1,
      name: "Alcatra c/ Maminha",
      code: "8679",
      price: 49.97,
      productType: "Perecível",
    },
    {
      id: 2,
      name: "Miolo da Alcatra",
      code: "2592",
      price: 39.97,
      productType: "Perecível",
    },
    {
      id: 3,
      name: "Meio da Asa",
      code: "94191",
      price: 24.5,
      productType: "Congelado",
    },
  ];
}

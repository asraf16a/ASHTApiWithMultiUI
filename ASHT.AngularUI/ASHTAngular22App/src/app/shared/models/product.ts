export interface Product {

  id: number;

  name: string;

  categoryId: number;
  categoryName?:string;

  subCategoryId: number;
  subCategoryName?:string;

  description: string;

  feature: string;

  purchasePrice: number;

  imageContent: Uint8Array | null;

}

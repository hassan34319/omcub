export interface SingleSyncProductResponse {
  code: number;
  result: Result;
  extra: any[];
}

export interface Result {
  sync_product: SingleSyncProduct;
  sync_variants: SingleProductSyncVariant[];
}

export interface SingleSyncProduct {
  id: number;
  external_id: string;
  name: string;
  variants: number;
  synced: number;
  thumbnail_url: string;
  is_ignored: boolean;
}

export interface SingleProductSyncVariant {
  [key: string]: any;
  id: number;
  external_id: string;
  sync_product_id: number;
  name: string;
  synced: boolean;
  variant_id: number;
  main_category_id: number;
  warehouse_product_variant_id: null;
  retail_price: string;
  sku: string;
  currency: string;
  product: SyncVariantProduct;
  files: File[];
  options: Option[];
  is_ignored: boolean;
}

export interface File {
  id: number;
  type: Type;
  hash: string;
  url: null;
  filename: string;
  mime_type: MIMEType;
  size: number;
  width: number;
  height: number;
  dpi: number | null;
  status: Status;
  created: number;
  thumbnail_url: string;
  preview_url: string;
  visible: boolean;
  is_temporary: boolean;
}

export enum MIMEType {
  ApplicationPDF = "application/pdf",
  ImageJPEG = "image/jpeg",
}

export enum Status {
  Ok = "ok",
}

export enum Type {
  Default = "default",
  Preview = "preview",
}

export interface Option {
  id: string;
  value: any[] | boolean | string;
}

export interface SyncVariantProduct {
  variant_id: number;
  product_id: number;
  image: string;
  name: string;
}

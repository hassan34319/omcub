export interface PrintfulWebhookReqBody {
  type: "product_updated" | "product_synced" | "product_deleted";
  created: number;
  retries: number;
  store: number;
  data: Data;
}

export interface Data {
  sync_product: SyncProductWebhook;
}

export interface SyncProductWebhook {
  id: number;
  external_id: string;
  name: string;
  variants?: number;
  synced?: number;
  thumbnail_url?: string;
  is_ignored?: boolean;
}

export interface PrintfulSyncProductResult {
  sync_product: SyncProduct;
  sync_variants: SyncVariant[];
}

export interface SyncProduct {
  id: number;
  external_id: string;
  name: string;
  variants: number;
  synced: number;
  thumbnail_url: string;
  is_ignored: boolean;
}

export interface SyncVariant {
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
  product: Product;
  files: File[];
  options: Option[];
  is_ignored: boolean;
}

export interface File {
  id: number;
  type: Type;
  hash: Hash;
  url: null;
  filename: Filename;
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

export enum Filename {
  KillerMoonshotPlatinumFulAdobeExpressPDF = "Killer-moonshot-platinum-ful_adobe_express.pdf",
  PremiumEcoHoodieBlackFront64C83897E7FffJpg = "premium-eco-hoodie-black-front-64c83897e7fff.jpg",
}

export enum Hash {
  B5396892636280B809B634215Fd9Fe4B = "b5396892636280b809b634215fd9fe4b",
  The84D00004C88F276E68E6B090Ee430C64 = "84d00004c88f276e68e6b090ee430c64",
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

export interface Product {
  variant_id: number;
  product_id: number;
  image: string;
  name: string;
}

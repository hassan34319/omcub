export interface PrintfulCatalogueProductResponse {
  code: number;
  result: Result;
  extra: any[];
}

export interface Result {
  product: Product;
  variants: Variant[];
}

export interface Product {
  id: number;
  main_category_id: number;
  type: string;
  description: string;
  type_name: string;
  title: string;
  brand: string;
  model: string;
  image: string;
  variant_count: number;
  currency: string;
  options: ProductOption[];
  dimensions: null;
  is_discontinued: boolean;
  avg_fulfillment_time: null;
  techniques: Technique[];
  files: File[];
  origin_country: string;
}

export interface File {
  id: string;
  type: string;
  title: string;
  additional_price: null | string;
  options: FileOption[];
}

export interface FileOption {
  id: string;
  type: string;
  title: string;
  additional_price: number;
}

export interface ProductOption {
  id: string;
  title: string;
  type: string;
  values: { [key: string]: string } | null;
  additional_price: null;
  additional_price_breakdown: any[];
}

export interface Technique {
  key: string;
  display_name: string;
  is_default: boolean;
}

export interface Variant {
  id: number;
  product_id: number;
  name: string;
  size: string;
  color: string;
  color_code: string;
  color_code2: null;
  image: string;
  price: string;
  in_stock: boolean;
  availability_regions: AvailabilityRegions;
  availability_status: AvailabilityStatus[];
  material: Material[];
}

export interface AvailabilityRegions {
  US: Us;
  EU?: Eu;
  EU_LV?: EuLV;
  CA?: CA;
  UK?: Uk;
}

export enum CA {
  Canada = "Canada",
}

export enum Eu {
  Europe = "Europe",
}

export enum EuLV {
  Latvia = "Latvia",
}

export enum Uk {
  UnitedKingdom = "United Kingdom",
}

export enum Us {
  UnitedStates = "United States",
}

export interface AvailabilityStatus {
  region: Region;
  status: Status;
}

export enum Region {
  CA = "CA",
  Eu = "EU",
  EuLV = "EU_LV",
  Uk = "UK",
  Us = "US",
}

export enum Status {
  InStock = "in_stock",
  StockedOnDemand = "stocked_on_demand",
  SupplierOutOfStock = "supplier_out_of_stock",
}

export interface Material {
  name: Name;
  percentage: number;
}

export enum Name {
  Cotton = "Cotton",
  NameCotton = "cotton",
  NamePolyester = "polyester",
  Polyester = "Polyester",
}

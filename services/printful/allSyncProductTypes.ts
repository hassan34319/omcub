import { SanityProductWithImageUrl } from "../sanity/fetchProducts";

export interface PrintfulSyncProductsResponse {
  code: number;
  result: PrintfulSyncProduct[];
  sanityResult?: SanityProductWithImageUrl[];
  extra: any[];
  paging: Paging;
}

export interface Paging {
  total: number;
  offset: number;
  limit: number;
}

export interface PrintfulSyncProduct {
  id: number;
  external_id: string;
  name: string;
  variants: number;
  synced: number;
  thumbnail_url: string;
  is_ignored: boolean;
}

export interface OmcubSyncProductWithSanityData {
  code: number;
  result: OmcubSyncProduct[];
  extra: any[];
  paging: Paging;
}

export interface OmcubSyncProduct {
  id: number;
  external_id: string;
  name: string;
  variants: number;
  synced: number;
  thumbnail_urls: string[];
  is_ignored: boolean;
}

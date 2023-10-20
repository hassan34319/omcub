import type { NextApiRequest } from "next";

declare global {
  interface Window {
    Snipcart: any;
  }
  namespace JSX {
    interface IntrinsicElements {
      "address-fields": any;
      "snipcart-label": any;
      "snipcart-input": any;
    }
  }
}

export type SnipcartWebhookEvent =
  | "order.completed"
  | "order.status.changed"
  | "order.paymentStatus.changed"
  | "order.trackingNumber.changed"
  | "order.refund.created"
  | "order.notification.created"
  | "subscription.created"
  | "subscription.cancelled"
  | "subscription.paused"
  | "subscription.resumed"
  | "subscription.invoice.created"
  | "shippingrates.fetch"
  | "taxes.calculate"
  | "customauth:customer_updated";

export interface SnipcartWebhookContent {
  discounts: { [key: string]: any };
  items: { [key: string]: any };
  shippingAddress: {
    fullName: string;
    firstName?: string;
    name: string;
    company?: string;
    address1: string;
    address2?: string;
    fullAddress: string;
    city: string;
    country: string;
    postalCode: string;
    province: string;
    phone?: string;
  };
  shippingRateUserDefinedId?: string;
  [key: string]: any;
}

export type SnipcartShippingRate = {
  /** Shipping method's price. */
  cost: number;
  /** Name or description of the shipping method. */
  description: string;
  /** Estimated time for delivery in days. */
  guaranteedDaysToDelivery?: number;
  /** Internal ID of shipping method, can be useful when using shipping fulfillment solutions. */
  userDefinedId?: string;
};

export type SnipcartTaxItem = {
  name: string;
  amount: number;
  rate: number;
  numberForInvoice?: string;
  includedInPrice?: boolean;
  appliesOnShipping?: boolean;
};

export interface SnipcartRequest extends NextApiRequest {
  headers: {
    "x-snipcart-requesttoken"?: string;
  };
  body: {
    eventName: SnipcartWebhookEvent;
    mode: string;
    createdOn: string;
    content: SnipcartWebhookContent;
  };
}

export interface ISyncProduct {
  id: string;
  external_id: string;
  name: string;
  variants: number;
  synced: number;
}

export interface PrintfulProduct {
  id: string;
  name: string;
}

export type PrintfulShippingItem = {
  external_variant_id: string;
  quantity: number;
};

export type productDetailProps = {
  id: string
  imageUrl?: string[]
  printUrl?: string
  productImages?: any
  sizeVariants?: any
  colorMapping?: any
  title: string
  uid: string
  description: string
  _createdAt?: string
  _updatedAt?: string
  _id: string
  _rev?: string
  _type: string
}

export type variantDetailProps = {
  clientId: string
  color: string
  connectionStatus: string
  externalId?: string
  id: string
  isHidden: boolean
  productId: string
  size: string
  title: string
}

export type productProps = {
  productDetail: productDetailProps
  variantDetail: variantDetailProps[]
}

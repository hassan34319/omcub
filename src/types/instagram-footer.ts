export interface InstagramFooterSlider {
  _id: string;
  name: string;
  sliderImage: {
    asset: {
      _ref: string;
    };
    hotspot?: {
      x: number;
      y: number;
    };
  };
  altText: string;
  socialLink: string;
}

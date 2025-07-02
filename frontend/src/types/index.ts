export type Brand = {
  id: string;
  name: string;
  url: string;
  settings?: BrandSettings;
}
export type Brands = Brand[]

export type ExtraFee = {
  reason: string;
  amount?: number
}

export type BrandSettings = {
  brandId: string;
  features: {
    supportsCoupons: boolean;
  };
  logistics: {
    modes: string[];
  };
  payment: {
    methods: string[];
  };
  policy: {
    extraFees?: ExtraFee[];
  }
};
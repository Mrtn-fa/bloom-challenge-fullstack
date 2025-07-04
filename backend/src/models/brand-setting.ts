/** 
* Debes completar este modelo como consideres adecuado
*/
type ExtraFee = {
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
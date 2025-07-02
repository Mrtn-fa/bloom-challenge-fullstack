export default [
  {brandId: "karyn_coo",
    features: {
      supportsCoupons: true
    },
    logistics: {
      modes: ['blue_express', 'pickup'],
    },
    payment: {
      methods: ['coupon_100', 'transfer_80']
    },
    policy: {}
  },
  {brandId: "andesgear",
    features: {
      supportsCoupons: false
    },
    logistics: {
      modes: ['blue_express', 'pickup'],
    },
    payment: {
      methods: ["transfer_100"]
    },
    policy: {},
  },
  {brandId: "milu_rugs",
    features: {
      supportsCoupons: true
    },
    logistics: {
      modes: ['pickup_no_cost'],
    },
    payment: {
      methods: ["coupon_100", "transfer_80"]
    },
    policy: {
      extraFees: [
        {
          reason: "Existe un costo asociado a la limpieza del producto.",
          amount: 10000
        }
      ]
    },
  },
  {brandId: "kokoro",
    features: {
      supportsCoupons: true
    },
    logistics: {
      modes: ['blue_express', 'pickup'],
    },
    payment: {
      methods: ["coupon_100", "transfer_80"]
    },
    policy: {
      extraFees: [
        {
          reason: "En caso de que el producto requiera limpieza, el costo del servicio de lavandería será descontado del monto de la venta.",
        }
      ]
    },
  },
];

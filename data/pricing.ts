export const pricing = {
  ram: {
    label: "Pamięć RAM",
    unit: "GB",
    min: 2,
    max: 32,
    step: 2,
    default: 4,
    pricePerUnit: 2.5,
  },

  cpu: {
    label: "Procesor",
    unit: "rdzeń",
    min: 1,
    max: 16,
    step: 1,
    default: 2,
    pricePerUnit: 5,
  },

  disk: {
    label: "Dysk NVMe",
    unit: "GB",
    min: 20,
    max: 500,
    step: 20,
    default: 40,
    pricePerUnit: 0.2,
  },
};
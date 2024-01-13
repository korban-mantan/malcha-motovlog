import type { FlickModel } from '$lib/models/flick'

export class FlickService {
  private flicks: FlickModel[] = [
    {
      id: 1,
      types: 'Matic',
      name: 'Honda Beat',
      image: '/images/honda-beat.jpg',
      price: 'Rp. 18,900,000',
      specs: {
        mesin: {
          type: '4 Langkah, SOHC, eSP',
          power: '109.5cc',
          fuelsupply: 'Injeksi (PGM-FI)',
          transmission: 'Otomatis, V-Matic',
          starter: 'Elektrik dan Kick Starter',
          kopling: 'Otomatis, Sentrifugal, Tipe Kering'
        },
        dimensi: {
          plt: '1.877 x 669 x 1.074 mm',
          weight: '89 Kg',
          tktanah: '147 mm',
          capacity: '4.2 Liter'
        }
      }
    },
    {
      id: 2,
      types: 'Matic',
      name: 'Honda Vario 160',
      image: '/images/vario-160.jpg',
      price: 'Rp. 26,639,000',
      specs: {
        mesin: {
          type: '4 Langkah, 4-Valve, eSP+',
          power: '156,9 cc',
          fuelsupply: 'PGM-FI (Programmed Fuel Injection)',
          transmission: 'Otomatis, V-Matic',
          starter: 'Elektrik',
          kopling: 'Otomatis, Sentrifugal, Tipe Kering'
        },
        dimensi: {
          plt: '1.929 x 679 x 1.088 mm',
          weight: '115 kg',
          tktanah: '140 mm',
          capacity: '5,5 liter'
        }
      }
    },
    {
      id: 3,
      types: 'Matic',
      name: 'Yamaha Aerox',
      image: '/images/aerox.png',
      price: 'Rp 30.960.000',
      specs: {
        mesin: {
          type: 'Liquid cooled 4-stroke, SOHC',
          power: '155cc',
          fuelsupply: 'FI (Fuel Injection)',
          transmission: 'V-belt Automatic',
          starter: 'Electric Starter',
          kopling: 'Kering, Centrifugal Automatic'
        },
        dimensi: {
          plt: '1980mm X 700mm X 1150mm',
          weight: '125 kg',
          tktanah: '143 mm',
          capacity: '5.5 Liter'
        }
      }
    },
    {
      id: 4,
      types: 'Big Matic',
      name: 'Honda PCX',
      image: '/images/honda-pcx.jpg',
      price: 'Rp. 36,085,000',
      specs: {
        mesin: {
          type: '4-Langkah, 4-Valve, eSP+',
          power: '156,9 cc',
          fuelsupply: 'PGM-FI (Programmed Fuel Injection)',
          transmission: 'Otomatis, V-Matic',
          starter: 'Elektrik',
          kopling: 'Otomatis, Sentrifugal, Tipe Kering'
        },
        dimensi: {
          plt: '1.936 x 742 x 1.108 mm',
          weight: '131 kg',
          tktanah: '135 mm',
          capacity: '8,1 liter'
        }
      }
    },
    {
      id: 5,
      types: 'Big Matic',
      name: 'Yamaha N-Max',
      image: '/images/nmax.png',
      price: 'Rp 35.750.000',
      specs: {
        mesin: {
          type: 'Liquid cooled 4-stroke, SOHC , VVA',
          power: '155.09 cc',
          fuelsupply: 'Fuel Injection',
          transmission: 'Automatic',
          starter: 'Electric Starter',
          kopling: 'Single Dry Clucth'
        },
        dimensi: {
          plt: '1935 x 740 x 1160 mm',
          weight: '130 kg',
          tktanah: '124 mm',
          capacity: '7.1 Liter'
        }
      }
    },
    {
      id: 6,
      types: 'Big Matic',
      name: 'Yamaha Lexi',
      image: '/images/lexy.png',
      price: 'Rp 29.900.000',
      specs: {
        mesin: {
          type: 'SOHC',
          power: '155,09 cc',
          fuelsupply: 'Injeksi',
          transmission: 'Automatic',
          starter: 'Electric Starter',
          kopling: 'Single Dry Clucth'
        },
        dimensi: {
          plt: '1970mm x 720mm x 1135mm',
          weight: '116 kg',
          tktanah: '135 mm',
          capacity: '4.2 Liter'
        }
      }
    },
    {
      id: 7,
      types: 'Sport',
      name: 'Honda CBR',
      image: '/images/honda-cbr.png',
      price: 'Rp. 76,156,000',
      specs: {
        mesin: {
          type: '4-Stroke, 8-Valve, Parallel Twin Cylinder',
          power: '249.7 cc',
          fuelsupply: 'PGM-FI',
          transmission: 'Manual, 6 Speed',
          starter: 'Elektrik',
          kopling: 'Multiple Wet Clutch with Coil Spring'
        },
        dimensi: {
          plt: '2.061 x 724 x 1.114 mm',
          weight: '166 kg',
          tktanah: '148 mm',
          capacity: '14,5 liter'
        }
      }
    },
    {
      id: 8,
      types: 'Sport',
      name: 'Yamaha R25',
      image: '/images/r25.png',
      price: 'Rp 70.225.000',
      specs: {
        mesin: {
          type: 'Liquid cooled 4-stroke, DOHC',
          power: '250 cc',
          fuelsupply: 'Fuel Injection',
          transmission: 'Constant mesh 6-kecepatan',
          starter: 'Elektrik starter',
          kopling: 'Basah, Kopling manual , Multiplat'
        },
        dimensi: {
          plt: '1.877 x 669 x 1.074 mm',
          weight: '166 kg',
          tktanah: '160 mm',
          capacity: '14 Liter'
        }
      }
    },
    {
      id: 9,
      types: 'Sport',
      name: 'Ninja 250',
      image: '/images/ninja250.jpg',
      price: 'Rp 68.400.000',
      specs: {
        mesin: {
          type: 'Liquid-cooled, 4-stroke Parallel Twin',
          power: '249 cc',
          fuelsupply: 'Fuel injection: ø32 mm x 2',
          transmission: 'DOHC, 8 valves',
          starter: 'Elektrik',
          kopling: 'Wet multi-disc, manual'
        },
        dimensi: {
          plt: '1,990 x 710 x 1,125 mm',
          weight: '163 kg',
          tktanah: '145 mm',
          capacity: '14 litres'
        }
      }
    },
  ]

  static getInstance(): FlickService {
    return FlickService._instance
  }

  private static _instance: FlickService = new FlickService()

  getFlicks(): FlickModel[] {
    return this.flicks
  }

  getFlickByName(name: string): FlickModel | undefined {
    return this.flicks.find((flick) => flick.name === name) || undefined;
  }
}
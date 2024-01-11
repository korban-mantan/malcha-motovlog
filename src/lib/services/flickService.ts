import type { FlickModel } from '$lib/models/flick'

export class FlickService {
  private flicks: FlickModel[] = [
    {
      id: 1,
      types: 'Matic',
      name: 'Honda Beat',
      image: '/images/honda-beat.jpg',
      price: 'https://nativescript.org/images/ngconf/book-of-mormon.mov',
      description: `A satirical examination of the beliefs and practices of The Church of Jesus Christ of Latter-day Saints.`,
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
      name: 'Yamaha Aerox',
      image: '/images/aerox.png',
      price: 'https://nativescript.org/images/ngconf/beetlejuice.mov',
      description: `A deceased couple looks for help from a devious bio-exorcist to handle their haunted house.`,
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
      id: 3,
      types: 'Matic',
      name: 'Honda Vario 160',
      image: '/images/vario-160.jpg',
      price: 'https://nativescript.org/images/ngconf/anastasia.mov',
      description: `The legend of Grand Duchess Anastasia Nikolaevna of Russia.`,
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
      id: 4,
      types: 'Big Matic',
      name: 'Honda PCX',
      image: '/images/honda-pcx.jpg',
      price: 'https://nativescript.org/images/ngconf/anastasia.mov',
      description: `The legend of Grand Duchess Anastasia Nikolaevna of Russia.`,
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
      id: 5,
      types: 'Big Matic',
      name: 'Yamaha N-Max',
      image: '/images/nmax.png',
      price: 'https://nativescript.org/images/ngconf/anastasia.mov',
      description: `The legend of Grand Duchess Anastasia Nikolaevna of Russia.`,
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
      id: 6,
      types: 'Big Matic',
      name: 'Yamaha Lexi',
      image: '/images/lexy.png',
      price: 'https://nativescript.org/images/ngconf/anastasia.mov',
      description: `The legend of Grand Duchess Anastasia Nikolaevna of Russia.`,
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
      id: 7,
      types: 'Sport',
      name: 'Honda CBR',
      image: '/images/honda-cbr.png',
      price: 'https://nativescript.org/images/ngconf/anastasia.mov',
      description: `The legend of Grand Duchess Anastasia Nikolaevna of Russia.`,
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
      id: 8,
      types: 'Sport',
      name: 'Yamaha R25',
      image: '/images/r25.png',
      price: 'Rp 63.450.000',
      description: `The legend of Grand Duchess Anastasia Nikolaevna of Russia.`,
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
      id: 9,
      types: 'Sport',
      name: 'Ninja 250',
      image: '/images/ninja250.jpg',
      price: 'https://nativescript.org/images/ngconf/anastasia.mov',
      description: `The legend of Grand Duchess Anastasia Nikolaevna of Russia.`,
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
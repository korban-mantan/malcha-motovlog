export interface FlickModel {
    id: number
    types: string
    name: string
    image: string
    price?: string
    description: string
    specs: {
      mesin: {
        type: string
        power: string
        fuelsupply: string
        transmission: string
        starter: string
        kopling: string
      },
      dimensi: {
        plt: string
        weight: string
        tktanah: string
        capacity: string
      }
    }
  }
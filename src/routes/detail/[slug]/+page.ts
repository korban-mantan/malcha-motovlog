import { FlickService } from '$lib/services/flickService.js';

export function load({ params }) {
    const flickName = decodeURIComponent(params.slug);
    const flickData = FlickService.getInstance().getFlickByName(flickName);

    if (!flickData) {
      // Return a 404 status if the flick is not found
      return {
        status: 404,
        error: new Error(`Motor ${flickName} tidak ditemukan!`),
      };
    }

    return {
      props: {
        data: flickData,
      },
    };
  }
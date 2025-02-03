import { defineQuery } from "next-sanity";

export const allproductsdetail = defineQuery(`
    *[_type == 'product' ]{
    slug,
    name,
    price,
    description,
     discount,
    originalPrice,
    rating,
    "imageurl": image.asset->url
   



    }
`)
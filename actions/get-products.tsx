import qs from "query-string";

import {  Product } from "@/type";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query{
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: string;
}

const getProducts= async(query: Query): Promise<Product[]>=>{
   const url=qs.stringifyUrl({url: URL,
    query:{
        colorId: query.colorId,
        sizeId: query.sizeId,
        categoryId: query.categoryId,
        isFeatured: query.isFeatured
    }
   });
    const response=await fetch(URL);

    return response.json();
}

export default getProducts;
import ProductDetails from '@/components/product-details';
import { client } from "@/sanity/client.js";

export async function getServerSideProps(context) {
  const { id } = context.params;

  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    title,
    price,
    description,
    "imageUrl": image.asset->url
  }`;

  const product = await client.fetch(query, { id });

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}

export default function ProductPage({ product }) {
  return <ProductDetails product={product} />;
}

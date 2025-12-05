import HomePage from "@/components/home-page";
import { client } from "@/sanity/client.js";

const PRODUCTS_QUERY = `*[_type == "product"]{
  _id,
  title,
  price,
  description,
  "imageUrl": image.asset->url
}`;

export async function getStaticProps() {
  const products = await client.fetch(PRODUCTS_QUERY);

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}


export default function Home({ products }) {
  return <HomePage products={products} />;
}

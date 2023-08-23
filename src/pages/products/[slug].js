import { supabase } from "supabase";

export default function ProductPage() {
  return <div>SLUG</div>;
}

export async function getStaticPaths() {
  const { data: products } = await supabase.from("product").select("slug");

  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async (contexr) => {
  return { props: { post: {} } };
};

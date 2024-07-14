import ProductDetailPage from '../components/productDetail';

export default async function ProductDetail({ params }) {
  const organization_id = process.env.NEXT_PUBLIC_ORGANIZATION_ID;
  const Appid = process.env.NEXT_PUBLIC_APPID;
  const Apikey = process.env.NEXT_PUBLIC_APIKEY;

  const res = await fetch(`https://timbu-get-single-product.reavdev.workers.dev/${params.id}?organization_id=${organization_id}&Appid=${Appid}&Apikey=${Apikey}`);

  if (!res.ok) {
    throw new Error('Failed to fetch product data');
  }
  const product = await res.json();
  return (
    <ProductDetailPage product={product}/>
  );
}



import productsData from "@/data/products.json"
import { notFound } from 'next/navigation';
import ProductsList from "@/app/components/ProductsList";
import { useCart } from "@/app/context/CartContext";

export default function ProductDetailPage({ params }) {
  const { productId } = params;
  const product = productsData.find((p) => p.id.toString() === productId);
  const { addToCart } = useCart();

  if (!product) { 
    return notFound();
  }

  const relatedProducts = productsData.filter((p) => p.id !== product.id);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={product.image} alt={product.name} className="rounded-lg shadow-md" />
        </div>
        <div>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-xl font-bold text-gray-800">${product.price}</p>
          <p className="text-lg mb-4">Rating: {product.stars} stars ({product.reviews} reviews)</p>
          <p className="text-lg mb-4">In Stock: {product.remaining}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">You May Also Like</h2>
      <ProductsList products={relatedProducts} />
    </div>
  );
}

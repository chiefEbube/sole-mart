import ProductsList from "@/app/components/ProductsList"
import productsData from "@/data/products.json"


const ProductsPage = () => {
  return (
    <ProductsList products={productsData}/>
  )
}

export default ProductsPage
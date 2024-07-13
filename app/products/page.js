import ProductsList from "@/app/components/ProductsList"
import { useProductsData } from "../context/ProductsDataContext"


const ProductsPage = () => {
  const {items} = useProductsData()
  return (
    <ProductsList products={items}/>
  )
}

export default ProductsPage
import { handleGetProducts } from '../persistence/localStorage'
import { handleRenderList } from '../views/store'

//para buscar un producto
export const handleSearch = (searchValue) => {
  const products = handleGetProducts()
  const search = searchValue.toLowerCase()
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(search)
  })

  handleRenderList(filteredProducts)
}

export const handleGetProducts = () => {
  const products = localStorage.getItem('products')

  return products ? JSON.parse(products) : []
}

//con esto guardo los productos en el local storage de tal modo que voy a poder seguir viendo todo lo creado mientras no borre los datos del local storage
export const saveProduct = (product) => {
  const products = handleGetProducts()
  const existingIndex = products.findIndex((p) => p.id === product.id)
  if (existingIndex !== -1) {
    products[existingIndex] = product
  } else {
    products.push(product)
  }
  localStorage.setItem('products', JSON.stringify(products))
}

export const saveProducts = (products) => {
  localStorage.setItem('products', JSON.stringify(products))
}

/* POPUP */

import { activeProduct, setActiveProduct } from '../../main'

//muestro el formulario de creacion o modificacion de un producto en una ventana modal asi queda mas piola
export const openModal = () => {
  const popup = document.getElementById('modalPopUp')
  const deleteButton = document.getElementById('delete')
  popup.style.display = 'flex'
  deleteButton.style.display = 'none'

  if (activeProduct) {
    deleteButton.style.display = 'block'
    document.getElementById('name').value = activeProduct.name
    document.getElementById('price').value = activeProduct.price
    document.getElementById('img').value = activeProduct.img
    document.getElementById('category').value = activeProduct.category
  }
}
//funcion para cerrar el modal
export const closeModal = () => {
  const popup = document.getElementById('modalPopUp')
  popup.style.display = 'none'
  setActiveProduct(null)
  resetModal()
}

export const resetModal = () => {
  document.getElementById('name').value = ''
  document.getElementById('price').value = 0
  document.getElementById('img').value = ''
  document.getElementById('category').value = ''
}

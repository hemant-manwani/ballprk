import { setItem, getItem } from 'Service/localStorage'

export const fetchCart = () => getItem('cart')

export const addItemToCart = ({ id }) => {
  const items = getItem('cart') || {}

  const updatedItem = items[id]? { ...items[id], qty: items[id].qty + 1 } : { ...items[id], qty: 1 }
  setItem('cart', {
    ...items,
    [id]: updatedItem
  })
}

export const removeItemFromCart = ({ id }) => {
  const items = getItem('cart') || {}
  if (items[id] && items[id].qty > 0) {
    setItem('cart', {
      ...items,
      [id]: { ...items[id], qty: items[id].qty - 1 }
    })
  }
}
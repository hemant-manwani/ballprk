import { setItem, getItem } from 'Service/localStorage'

export const fetchCart = () => getItem('cart') || {}

export const addItemToCart = (item) => {
  const { id } = item
  const items = fetchCart()
  const updatedItem = items[id]? { ...items[id], qty: items[id].qty + 1 } : { ...items[id], ...item, qty: 1 }
  setItem('cart', {
    ...items,
    [id]: updatedItem
  })
  return updatedItem
}

export const removeItemFromCart = (item, remove) => {
  const { id } = item
  const items = fetchCart()

  if (items[id] && items[id].qty > 0) {
    const qty = remove ? 0 : items[id].qty - 1;
    const updatedItem = { ...items[id], qty }
    setItem('cart', {
      ...items,
      [id]: updatedItem
    })
    return updatedItem
  }
  return { ...item, qty: 0 }
}
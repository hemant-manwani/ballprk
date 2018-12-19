import { fetchProducts } from './product'
import { fetchCart, addItemToCart, removeItemFromCart } from './cart'

const call = (service, ...params) => new Promise(
  (resolve, reject) => setTimeout(() => resolve(service(...params)), 800)
)

export const fetchProductsApi = async () => {
  const response = await call(fetchProducts);
  return response;
}

export const fetchCartApi = async () => {
  const response = await call(fetchCart);
  return response;
}

export const addItemToCartApi = async ({ item }) => {
  const response = await call(addItemToCart, item);
  return response;
}

export const removeItemFromCartApi = async ({ item, remove }) => {
  const response = await call(removeItemFromCart, item, remove);
  return response;
}
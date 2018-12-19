import { productList } from 'Constants'
import { setItem, getItem } from 'Service/localStorage'

export const fetchProducts = () => productList;

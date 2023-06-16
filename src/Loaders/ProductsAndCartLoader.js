import { getStoredCart } from "../utilities/fakedb";

export const ProductAndCartLoader = async() => {
    const productsdata = await fetch('products.json');
    const products = await productsdata.json();

    const savedCart = getStoredCart();
    const initaialCart = [];
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initaialCart.push(addedProduct);
        }
    }
    return { products, initaialCart };
}
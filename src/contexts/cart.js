import React, {
    useState,
    createContext,
    useCallback
} from 'react';


export const CartContext = createContext();

const CartProvider = ({
    children
}) => {
    const [items, setItems] = useState(0);

    const addItem = useCallback(() => setItems(items + 1), [items])

    return (
        <CartContext.Provider value={{ items, addItem }} >
            {children}
        </CartContext.Provider>
    );
}


export default CartProvider
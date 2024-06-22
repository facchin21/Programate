/* eslint-disable react/prop-types */
import {createContext, useEffect, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() =>{
        try{
            const productStorage = localStorage.getItem('cartProducts')
            return productStorage ? JSON.parse(productStorage) : []
        }catch(error){
            return [];
        }
    })

    useEffect(()=>{
        localStorage.setItem('cartProducts', JSON.stringify(cartItems))
    },[cartItems])

    const addItemToCart = (product) =>{
        const inCart = cartItems.find(p => p.id === product.id)  
        
        if(inCart){
            setCartItems(
                cartItems.map((prodcutInCart)=>{
                    if(prodcutInCart.id === product.id){
                        return {...prodcutInCart, amout: prodcutInCart.amout + 1};
                    }else return prodcutInCart;
                })
            )
        }else{
            setCartItems([...cartItems, {...product, amout: 1}])
        }
    }

    const deleteItemToCart = (product) => {
        const inCart = cartItems.find(p => p.id === product.id);
        if (inCart) {
            if (inCart.amout > 1) {
                setCartItems(
                    cartItems.map((productInCart) => 
                        productInCart.id === product.id 
                            ? { ...productInCart, amout: productInCart.amout - 1 } 
                            : productInCart
                    )
                );
            } else {
                setCartItems(
                    cartItems.filter(productInCart => productInCart.id !== product.id)
                );
            }
        }
    };

    return (
        <CartContext.Provider 
        value={{cartItems, addItemToCart, deleteItemToCart}}>
            {children}
        </CartContext.Provider>
    )
}

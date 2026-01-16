import { createContext, useContext, useEffect, useState } from "react";

const CartContext=createContext();
export const useCart=()=>useContext(CartContext);

export default function CartProvider({children}){
    const [cart,setCart]=useState(()=>{
        const savedCart=localStorage.getItem("cart");
        return savedCart? JSON.parse(savedCart) : [];
    });
    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart));
    },[cart]);
    const addToCart=(product)=>{
        setCart((prev)=>{
            const exists=prev.find(item=>item.id===product.id);
        if(exists){
           return prev.map(item=>item.id===product.id? {...item,quantity:item.quantity+1} : item
            );
        }
        return [...prev,{...product,quantity:1}];
        });
    };
    const removeFromCart=(id)=>{
        setCart(prev=>prev.map(item=>item.id===id? {...item,quantity:item.quantity-1} : item
        )
        .filter(item=>item.quantity>0)
    );
    };

    const totalAmount=cart.reduce(
        (acc,item)=>acc+parseFloat(item.price || 0) * item.quantity,
        0
    );

return(
    <CartContext.Provider value={{cart,addToCart,removeFromCart,totalAmount}}>
        {children}
    </CartContext.Provider>
);
}
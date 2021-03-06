import { useState, useContext } from "react";
import { createContext} from "react";


const CartContext = createContext([])

export function useCartContext() {
    return useContext(CartContext)
}

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items) {

        const index = cartList.findIndex(i => i.id === items.id)

        if(index > -1 ){
            const cantAnt = cartList[index].counter
            let cantNueva = cantAnt + items.counter
            cartList[index].counter=cantNueva
            let newArray = [...cartList]
            setCartList(newArray)
        }else{
            setCartList([...cartList,items])
        }
        
    }
    function vaciarCarrito() {
        setCartList([])
    }

    const eliminarProducto = (id) =>{
        const itemEliminado = cartList.filter((producto)=> producto.id !==id)
        setCartList(itemEliminado);
    }

    const total = () => {
        const totalCarrito = cartList.reduce((prev, curr) => prev + curr.price * curr.counter,
        0 
        )

        return totalCarrito
    }

    const totalUnidades = () => {
        const totalUnidadesCarrito = cartList.reduce((prev,curr) => prev + curr.counter,
        0)

        return totalUnidadesCarrito
    }

    return(

        <CartContext.Provider value={{
            cartList, 
            agregarAlCarrito,
            vaciarCarrito,
            eliminarProducto,
            total,
            totalUnidades
        }}>
            {children}
        </CartContext.Provider>
    
    )
        
}
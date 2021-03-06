import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cartContext'


const Cart = () => {

    const { cartList,vaciarCarrito, eliminarProducto, total } = useCartContext()

    return (
        <>
        <div>
            <h1>Carrito de compra</h1>
            <div>
                {cartList.length === 0 ? (
                    <div>
                        <h2>No agregaste nada al carrito</h2>
                        <Link to="/">
                            <button>Ir al catalogo</button>
                        </Link>
                    </div>
                ) : (
                    <>
                {cartList?.map((producto) =>(
                    <div key={producto.id}>
                        <div>{producto.name}</div>
                        <div>Cantidad: {producto.counter}</div>
                        <div>Precio: {producto.price}</div>
                        <button onClick={()=>eliminarProducto(producto.id)}>Eliminar Producto</button>
                        
                    </div>
                ))}
                <br />
                <button onClick={vaciarCarrito}>Vaciar Lista de compras</button>
                <br />
                <h3>Total: {total()}</h3>
                </> 
                )}
            </div>
            
        </div>
        </>
        
    )
}    
export default Cart
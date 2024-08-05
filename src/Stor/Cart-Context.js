import React from 'react'

// const Cart-Context = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default Cart - Context

const CartContext=React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {},
    decreaseQuantity: (id) => {},
    increaseQuantity: (id) => {}
});    

export default CartContext

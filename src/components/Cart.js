import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSlice";

const Cart = () =>{

  const cartItems =useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const handleClearCartItems = () =>{
        dispatch(clearItems())
    }

  
    console.log(cartItems)
    return(
        <div className="text-center m-10 p-10" >
            <h1 className="text-2xl font-bold" >Cart</h1>
            <div className="w-6/12 m-auto">
            <button 
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCartItems}>
                
             Clear Cart

            </button>
            {cartItems.length === 0 && (<h1>Cart is empty</h1>)}
                <ItemList items={cartItems}/>
                
            </div>
        </div>
    )
}

export default Cart;
import { useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Product(){
    const {addToCart}=useCart();
    const {state}=useLocation();
    return(
        <div className="flex justify-center pt-60">
            <div className="rounded-lg w-375 h-125 pt-5 pl-25 pr-7">
            <div className="flex gap-10 items-center">
                <div><img className="w-70 h-70" src={state.clicked.image_link} alt="" /></div>
                <div>
                    <div className="flex justify-between">
                    <h3>{state.clicked.name}</h3>
                    <p>💰${state.clicked.price}</p>
                    </div>
                    <p>🏢{state.clicked.brand}</p>
                    <p>Category : {state.clicked.category}</p>
                    <p>Product type : {state.clicked.product_type}</p>
                    <p>Vegan_status : {state.clicked.tag_list[1]}</p>
                    <p>Cruelty_free_status : {state.clicked.tag_list[0]}</p>
                    <button onClick={()=>
                    addToCart(state.clicked)}
                className="mt-5 pl-6 pr-6 bg-[#e1937f] rounded-lg text-gray-100 cursor-pointer hover:scale-105 transform transition-transform duration-200 active:scale-110">
                    <div className="flex items-center gap-3">
                    <svg width="34px" height="44px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white"><g id="SVGRepo_bgCarrier" stroke-whiteidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="white" stroke-whiteidth="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    Add to Cart
                    </div>
                    </button>
                </div>
                </div>
                <h2 className="mt-10 mb-5">Available Shades</h2>
                <div className="flex gap-10">
                    {state.clicked.product_colors && state.clicked.product_colors.map((shade,index)=>(
                        <li key={index} className="flex flex-col items-center mb-2">
                            <div className="w-8 h-8 rounded-full border" style={{backgroundColor:shade.hex_value}}></div>
                            <span className="text-sm mt-1">{shade.colour_name}</span>
                        </li>
                    ))}
                </div>
        </div>
        </div>
    )
}
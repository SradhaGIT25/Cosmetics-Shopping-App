import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion } from "motion/react";

export default function Products(){
    const location=useLocation();
    const {addToCart}=useCart();
    const [products,setProducts]=useState([]);
    const[loading,setLoading]=useState(true);

    const [search,setSearch]=useState("");
    const params=new URLSearchParams(location.search);
    const product_type=params.get("product_type");
    const filteredProducts=products.filter((p)=>p.product_type?.toLowerCase().includes(search.toLowerCase()));

    useEffect(()=>{
        async function fetchProducts(){
            setLoading(true);
            let url="http://makeup-api.herokuapp.com/api/v1/products.json";
            if(product_type){
                url+=`?product_type=${product_type}`;
            }
            const res=await fetch(url);
            const data=await res.json();
            setProducts(data);
            setLoading(false);
            console.log(data)
        }
        fetchProducts();
    },[product_type]);
    return(
        <div>
            <div className="p-10 pt-60 pl-25 bg-[#FFFBF2]">
                
            <input type="text" className="block w-1/2 mx-auto mb-6 px-6 py-2 border rounded-md
             focus:outline-none focus:ring-2 focus:ring-[#e1937f]" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search by product type..."/>
            {loading && (
            <div className="text-center text-gray-500 mt-10 text-lg">
                <motion.div animate={{rotate:360}} transition={{duration:3,repeat:Infinity,ease:"linear"}} style={{ originX: "50%", originY: "50%" , display:"inline-block" }}>
                <svg fill="#e1937f" height="34px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 367.136 367.136" xml:space="preserve" stroke="#e1937f" stroke-width="6.9755840000000005"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M336.554,280.265c18.898-29.33,28.888-63.352,28.888-98.391C365.442,81.588,283.854,0,183.568,0S1.694,81.588,1.694,181.874 c0,34.777,9.851,68.584,28.488,97.768c18.133,28.394,43.703,51.175,73.944,65.881l13.119-26.979 c-52.77-25.66-85.551-78.029-85.551-136.669C31.694,98.13,99.824,30,183.568,30s151.874,68.13,151.874,151.874 c0,49.847-24.9,96.439-65.042,124.571l-52.964-53.219v113.91h113.365l-38.953-39.14C309.409,314.972,324.58,298.849,336.554,280.265 z"></path> </g></svg>                    </motion.div>
                <p>Loading...</p>
            </div>
            )}

            <div className="grid grid-cols-5 gap-5">
                {search && filteredProducts.length===0 && (<p className="col-span-5 text-center text-gray-500 mt-10">No products found for "{search}"</p>)}
            {filteredProducts.map((p)=>
            <li className="list-none bg-white" key={p.id}>
                <Link to={`${p.id}`} state={{clicked:p}}>
            <div className="flex flex-col border-5 border-gray-100 rounded-md p-5">
            <img className="w-60 h-50 rounded-lg" src={p.image_link} alt="" />
            <div className="flex justify-between">
            <div>
            <h3>{p.name}</h3>
            <p>🏢{p.brand}</p>
            </div>
            <div>
            <p>💰${p.price}</p>
            </div>
            </div>
            <button onClick={(e)=>{
                e.preventDefault();
                addToCart(p);
            }} 
            className="mt-5 pl-6 bg-[#e1937f] rounded-lg text-gray-100 cursor-pointer hover:scale-105 transform transition-transform duration-200 active:scale-110">
                <div className="flex items-center gap-3">
                <svg width="34px" height="44px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white"><g id="SVGRepo_bgCarrier" stroke-whiteidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="white" stroke-whiteidth="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                Add to Cart
                </div>
                </button>
            </div>
            </Link>
            </li>
        )}
        </div>
        </div>
        </div>
    )
}
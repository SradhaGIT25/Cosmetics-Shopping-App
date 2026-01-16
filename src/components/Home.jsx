import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate=useNavigate();
    return(
        <div className="bg-[#FFFBF2] h-screen mt-60 ml-65 mr-50">
            <div className="grid grid-cols-3 gap-15">
            <div className="flex flex-col gap-3 text-center cursor-pointer hover:scale-105 transition duration-300" onClick={()=>navigate(`/products?product_type=blush`)}>
                <h1>Blush</h1>
                <img className="w-70 rounded-4xl" src="/blush.png" alt="" />
            </div>
            <div className="flex flex-col gap-3 text-center cursor-pointer hover:scale-105 transition duration-300" onClick={()=>navigate(`/products?product_type=bronzer`)}>
                <h1>Bronzer</h1>
                <img className="w-70 rounded-4xl" src="/bronzer.png" alt="" />
            </div>
            <div className="flex flex-col gap-3 text-center cursor-pointer hover:scale-105 transition duration-300" onClick={()=>navigate(`/products?product_type=eyebrow`)}>
                <h1>Eyebrow</h1>
                <img className="w-70 rounded-4xl" src="/brow.png" alt="" />
            </div>
            <div className="flex flex-col gap-3 text-center cursor-pointer hover:scale-105 transition duration-300" onClick={()=>navigate(`/products?product_type=eyeliner`)}>
                <h1>Eyeliner</h1>
                <img className="w-70 rounded-4xl" src="/liner.png" alt="" />
            </div>
            <div className="flex flex-col gap-3 text-center cursor-pointer hover:scale-105 transition duration-300" onClick={()=>navigate(`/products?product_type=eyeshadow`)}>
                <h1>Eyeshadow</h1>
                <img className="w-70 rounded-4xl" src="/shadow.png" alt="" />
            </div>
            <div className="flex flex-col gap-3 text-center cursor-pointer hover:scale-105 transition duration-300" onClick={()=>navigate(`/products?product_type=foundation`)}>
                <h1>Foundation</h1>
                <img className="w-70 rounded-4xl" src="/found.png" alt="" />
            </div>
            <div className="flex flex-col gap-3 text-center cursor-pointer hover:scale-105 transition duration-300" onClick={()=>navigate(`/products?product_type=lip_liner`)}>
                <h1>LipLiner</h1>
                <img className="w-70 rounded-4xl" src="/lliner.png" alt="" />
            </div>
            <div className="flex flex-col gap-3 text-center cursor-pointer hover:scale-105 transition duration-300" onClick={()=>navigate(`/products?product_type=lipstick`)}>
                <h1>Lipstick</h1>
                <img className="w-70 rounded-4xl" src="/lipstick.png" alt="" />
            </div>
            <div className="flex flex-col gap-3 text-center cursor-pointer hover:scale-105 transition duration-300" onClick={()=>navigate(`/products?product_type=mascara`)}>
                <h1>Mascara</h1>
                <img className="w-70 rounded-4xl" src="/mascara.png" alt="" />
            </div>
            <div className="flex flex-col gap-3 text-center cursor-pointer hover:scale-105 transition duration-300" onClick={()=>navigate(`/products?product_type=nail_polish`)}>
                <h1>NailPolish</h1>
                <img className="w-70 rounded-4xl" src="/nail.png" alt="" />
            </div>
        </div>
        </div>
    )
}
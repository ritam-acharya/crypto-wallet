import { IoMdHome, IoMdSwap } from "react-icons/io"
import { MdHistory } from "react-icons/md"
import { useNavigate } from "react-router-dom"


const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="h-auto w-full pt-5 bg-black ">
                    <div  className="w-full h-auto bg-[#111111] rounded-md py-4 px-3 md:px-5 lg:px-6 flex items-center justify-around text-2xl lg:text-[28px] ">
                        <div 
                        onClick={() => navigate("/")}
                        className="cursor-pointer hover:text-[#AB9FF2] ">
                            <IoMdHome />
                        </div>
                        <div className="cursor-pointer hover:text-[#AB9FF2] ">
                            <IoMdSwap />
                        </div>
                        <div 
                        onClick={() => navigate("/history")}
                        className="cursor-pointer hover:text-[#AB9FF2] ">
                            <MdHistory />
                        </div>
                    </div>
                </div>
    )
}

export default Footer
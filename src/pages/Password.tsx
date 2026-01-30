import React, { useRef, useState } from "react"
import { LuBlocks } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function Passowrd() {

    const passwordRef = useRef<HTMLInputElement>(null);
    const [unlock, setUnlock] = useState(false);
    const [password, setPassowrd] = useState("");
    const navigate = useNavigate();
    function enterPassword() {
        if(passwordRef && passwordRef.current){
            const newPassword = passwordRef.current.value;
            setPassowrd(newPassword.trim());
            if(newPassword.trim().length === 0){
                setUnlock(false);
            }else {
                setUnlock(true);
            }
        }
    }

    function handleUnlock() {
        if(unlock) {
            console.log("password is : ", password);
            localStorage.setItem("active", "true");
            navigate("/");
        }
    }

    return <div className="w-full h-full flex flex-col items-center justify-between px-4 py-4">
        <div id="header" className="helvetica-bold w-full h-auto flex items-center justify-center text-lg md:text-lg lg:text-2xl px-4 md:px-8 lg:px-12 py-4  " >Crypto Wallet</div>
        <div className="w-full h-auto py-4 flex flex-col items-center justify-center gap-4 ">
            <div className="h-24 w-24 flex items-center justify-center overflow-hidden bg-[#202127] px-5 py-5 rounded-full ">
                <LuBlocks className="scale-110 h-full w-full object-contain "/>
            </div>
            <div className="h-auto w-full flex flex-col items-start gap-3">
                <h3 className="text-[16px] md:text-lg font-medium pl-2 ">Enter password</h3>
                <input type="password" ref={passwordRef} onChange={enterPassword} placeholder="Password" className="w-full h-auto bg-[#191919] mb-2 text-white/90 px-4 border-[0.5px] border-gray-700 py-4 rounded-lg outline-none text-[16px] md:text-lg " />
            </div>
        </div>
        <div 
        onClick={handleUnlock}
        className={`w-full h-auto px-4 py-4 rounded-lg bg-[#87878A] text-black cursor-pointer flex items-center justify-center ${!unlock ? "opacity-50 cursor-not-allowed" : ""} `}>
            Unlock
        </div>
    </div>
}
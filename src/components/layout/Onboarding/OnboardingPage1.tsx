import { useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { LuBlocks } from "react-icons/lu";


export default function OnboardingPage1({setCurrentStep, setNewWallet}: {setCurrentStep: React.Dispatch<React.SetStateAction<number>>, setNewWallet: React.Dispatch<React.SetStateAction<boolean>>}) {

    const [agree, setAgree] = useState(false);

    return <div className="h-full w-full flex flex-col items-center justify-between py-3 px-2">
        <div>
            <div className=" flex items-center justify-center py-6">
                <div className="h-auto w-auto items-center justify-center bg-[#202127] px-5 py-5 rounded-full inline-block ">
                    <LuBlocks className="text-4xl "/>
                </div>
            </div>
            <h2 id="button" className="text-center px-3 text-xl md:text-2xl lg:text-3xl helvetica-bold ">Welcome to Crypto Wallet</h2>
            <p className="text-center px-3 py-2 text-[#8E96A5] text-[16px] md:text-lg lg:text-xl ">You'll use this wallet to send and receive crypto </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 w-full h-auto">
            <div 
            onClick={() => setAgree(prev => !prev)}
            className="w-full h-auto flex items-center justify-center gap-2 text-[16px] md:text-lg mb-2 cursor-pointer">
                {
                    agree ?
                    <MdCheckBox 
                    className="text-lg cursor-pointer  text-blue-400" />
                    :
                    <MdCheckBoxOutlineBlank 
                    className="text-lg cursor-pointer" />
                }
                <div>I agree to the <span className="text-blue-400 cursor-pointer text-[16px] md:text-lg">Terms of Service</span>.</div>
            </div>
            <div 
            onClick={() => {
                if(agree) {
                    setCurrentStep(prev => prev+1);
                }
            }}
            className={`w-full h-auto px-4 py-4 rounded-lg bg-[#87878A] text-black cursor-pointer flex items-center justify-center ${!agree ? "opacity-50 cursor-not-allowed" : ""} `}>
                Create a new wallet
            </div>
            <div 
            onClick={() => {
                if(agree) {
                    setNewWallet(false);
                    setCurrentStep(prev => prev+1);
                }
            }}
            className={`w-full h-auto px-4 py-4 rounded-lg bg-[#17181E] text-white cursor-pointer flex items-center justify-center ${!agree ? "opacity-50 cursor-not-allowed" : ""} `}>
                I already have a wallet
            </div>
        </div>
    </div>
}
import { useState } from "react";
import { LuCopy } from "react-icons/lu";
import { generateMnemonic } from "bip39";
import { FaClipboardCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAccount from "../../../context/AccountContext";

export default function OnboardingPage3() {
    
    const [mnemonics] = useState<string[]>(() => generateMnemonic().split(" "));
    const [copied, setCopied] = useState(false);
    const navigate = useNavigate();
    const context = useAccount();

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(mnemonics.join(" "));
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
        } catch {
            setCopied(false);
        }
    };

    return <div className=" w-full h-full ">
        <div className="h-full w-full flex flex-col items-center justify-between py-3 px-2 ">
            <div className="h-auto w-full flex flex-col items-center justify-center gap-1">
                <h2 id="button" className="text-center px-3 text-xl md:text-2xl lg:text-3xl ">Recovery Phrase</h2>
                <p className="text-center px-3 py-2 text-yellow-400 text-[16px] md:text-lg lg:text-xl ">These phrase is the ONLY way to recover your wallet. Do NOT share it with anyone! </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3  w-full h-auto px-2 md:px-4 py-3 md:py-4 ">
                    {
                        mnemonics.map((item, idx) => (
                            <div key={idx} className="w-auto h-auto flex items-center justify-center gap-2 cursor-pointer px-2 md:px-4 py-4 rounded-lg hover:bg-[#222222] bg-[#151515] ">
                                {item}
                            </div>
                        ))
                    }
                </div>
                <div 
                onClick={handleCopy}
                className="h-auto w-full pl-2 md:pl-4 flex items-center justify-start gap-2 cursor-pointer"> {copied ? <FaClipboardCheck /> : <LuCopy />} Click anywhere to copy</div>
            </div>
            <div className="h-auto w-full self-end mt-auto ">
                <div 
                onClick={() => {
                    if (!context) {
                        return;
                    }
                    const { setMnemonic } = context;
                    setMnemonic(mnemonics.join(" ").trim());
                    console.log(mnemonics.join(" ").trim());
                    localStorage.setItem("cryptoWalletUser", true.toString());
                    localStorage.setItem("active", "true");
                    navigate("/");
                }}
                className={`w-full h-auto px-4 py-4 rounded-lg bg-[#AB9FF2] text-black cursor-pointer flex items-center justify-center `}>
                    Continue
                </div>
            </div>
        </div>
    </div>
}

import {  useState } from "react";
import { useNavigate } from "react-router-dom";


export default function OnboardingPage3ImportWallet() {
    
    const [mnemonic] = useState<number[]>([1,2,3,4,5,6,7,8,9,10,11,12]);
    const [inputs, setInputs] = useState<string[]>(Array(12).fill(""));
    const navigate = useNavigate();

    return <div className=" w-full h-full ">
        <div className="h-full w-full flex flex-col items-center justify-between py-3 px-2 ">
            <div className="h-auto w-full flex flex-col items-center justify-center gap-1">
                <h2 id="button" className="text-center px-3 text-xl md:text-2xl lg:text-3xl ">Recovery Phrase</h2>
                <p className="text-center px-3 py-2 text-yellow-400 text-[16px] md:text-lg lg:text-xl ">These phrase is the ONLY way to recover your wallet. Do NOT share it with anyone! </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3  w-full h-auto px-2 md:px-4 py-3 md:py-4 ">
                    {
                        mnemonic.map((idx) => (
                            <input type="text" key={idx} value={inputs[`${idx}`] === "" ? "" : inputs[`${idx}`]} placeholder={`${idx}`}
                            onChange={(val) => {
                                const newInputs = [...inputs];
                                newInputs[idx] = val.target.value;
                                setInputs(newInputs);
                            }}
                            className="w-auto h-auto flex items-center justify-center gap-2 cursor-pointer px-2 md:px-4 py-4 rounded-lg hover:bg-[#222222] bg-[#151515] " />
                        ))
                    }
                </div>
            </div>
            <div className="h-auto w-full self-end mt-auto ">
                <div 
                onClick={() => {
                    navigate("/")
                }}
                className={`w-full h-auto px-4 py-4 rounded-lg bg-[#AB9FF2] text-black cursor-pointer flex items-center justify-center `}>
                    Continue
                </div>
            </div>
        </div>
    </div>
}
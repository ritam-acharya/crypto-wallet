import { useRef, useState } from "react";

export default function OnboardingPage2({setCurrentStep}: {setCurrentStep: React.Dispatch<React.SetStateAction<number>>}) {

    const [disable, setDisable] = useState(true);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    function updatePassword() {
        if(passwordRef && passwordRef.current){
            setPassword(passwordRef.current.value);
            if (confirmPasswordRef && confirmPasswordRef.current && passwordRef.current.value.trim() !== "" && confirmPasswordRef.current.value.trim() !== "" && passwordRef.current.value === confirmPasswordRef.current.value) {
                setDisable(false);
            }else {
                setDisable(true);
            }
        }
    }

    function updateConfirmPassword() {
        if(confirmPasswordRef && confirmPasswordRef.current){
            setConfirmPassword(confirmPasswordRef.current.value);
            if (passwordRef && passwordRef.current && passwordRef.current.value.trim() !== "" && confirmPasswordRef.current.value.trim() !== "" && passwordRef.current.value === confirmPasswordRef.current.value) {
                setDisable(false);
            }else {
                setDisable(true);
            }
        }
    }

    function savePassword() {
        setCurrentStep(prev => prev+1);
        if (password === confirmPassword) {
            localStorage.setItem("password", password);
        }
    }

    return <div className=" w-full h-full ">
        <div className="h-full w-full flex flex-col items-center justify-between py-3 px-2 ">
            <div className="h-auto w-full flex flex-col items-center justify-center gap-1">
                <h2 id="button" className="text-center px-3 text-xl md:text-2xl lg:text-3xl ">Create a password</h2>
                <p className="text-center px-3 py-2 text-[#8E96A5] text-[16px] md:text-lg lg:text-xl ">You will use this to unlock your wallet</p>
                <input type="password" onChange={updatePassword} ref={passwordRef} placeholder="Password" className="w-full h-auto bg-[#191919] mt-6 mb-2 text-white/90 px-4 border-[0.5px] border-gray-700 py-4 rounded-lg outline-none text-[16px] md:text-lg "  />
                <input type="password" onChange={updateConfirmPassword} ref={confirmPasswordRef} placeholder="Confirm Password" className="w-full h-auto bg-[#191919] mb-2 text-white/90 px-4 border-[0.5px] border-gray-700 py-4 rounded-lg outline-none text-[16px] md:text-lg " />
            </div>
            <div className="h-auto w-full self-end mt-auto ">
                <div 
                onClick={savePassword}
                className={`w-full h-auto px-4 py-4 rounded-lg bg-[#AB9FF2] text-black cursor-pointer flex items-center justify-center ${disable ? "opacity-50 cursor-not-allowed" : ""} `}>
                    Continue
                </div>
            </div>
        </div>
    </div>
}
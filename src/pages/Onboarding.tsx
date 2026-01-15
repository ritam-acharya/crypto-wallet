
import { useState } from "react";
import OnboardingPage3ImportWallet from "../components/layout/OnboardingPage3ImportWallet";
import OnboardingPage1 from "../components/layout/OnboardingPage1";
import OnboardingPage2 from "../components/layout/OnboardingPage2";
import OnboardingPage3 from "../components/layout/OnboardingPage3";


export default function Onboarding() {

    const [currentStep, setCurrentStep] = useState(1);
    const [newWallet, setNewWallet] = useState(true);


    return <div className="w-full h-full flex flex-col items-center">
        <div className="w-full h-auto pb-6 flex items-center justify-center gap-4 relative">
            {
                [1,2,3].map((step) => (
                    <div className={`h-4 w-4 rounded-full ${currentStep > step ? "bg-[#AB9FF2]" : "bg-[#2A2A2A]"} `}></div>
                ))
            }
            {
                currentStep > 1 && <div 
                onClick={() => setCurrentStep(step => step-1)}
                className="absolute left-4 md:left-8 cursor-pointer ">Back</div>
            }
        </div>
        <div className="w-full h-full ">
            {
                currentStep === 1 ? 
                <OnboardingPage1 setCurrentStep={setCurrentStep} setNewWallet={setNewWallet} />
                :
                currentStep === 2 ?
                <OnboardingPage2 setCurrentStep={setCurrentStep} />
                :
                currentStep === 3 && newWallet ?
                <OnboardingPage3 />
                :
                <OnboardingPage3ImportWallet />
            }
        </div>
    </div>
}
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAccount from "../context/AccountContext";
import LeftSideBar from "../components/layout/Home/LeftSideBar";
import RightSideBar from "../components/layout/Home/RightSideBar";
import LeftSideBar2 from "../components/layout/Home/LeftSideBar2";

export default function Home() {
    const navigate = useNavigate();
    const context = useAccount();
    useEffect(() => {
        const existingUser = localStorage.getItem("cryptoWalletUser");
        const active = localStorage.getItem("active");
        if (!existingUser || existingUser !== "true") {
            navigate("/onboarding");
        }else if (!active || active !== "true") {
            navigate("/password");
        }else {
            localStorage.setItem("active", "true");
            if(!context){
                return;
            }
            const {mnemonic} = context;
            console.log(mnemonic);
        }
        

        return () => {
            console.log(context);
            localStorage.removeItem("active");
        }
    }, []);
    const [openNav, setOpenNav] = useState(false);

    return <div className="h-full w-full relative flex items-center justify-center gap-3  ">
        {
            openNav &&
            <div className="absolute inset-0 bg-neutral-800/75 z-10 h-full w-full ">
                <div className="h-full w-[20%] bg-neutral-950 ">
                    <LeftSideBar2 toggleNav={setOpenNav} />
                </div>
            </div>
        }
        {/** left bar  */}
        <LeftSideBar />
        {/** right part **/}
        <RightSideBar toggleNav={setOpenNav} />
    </div>
}
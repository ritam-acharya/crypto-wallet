import { MdHistory } from "react-icons/md"
import AccountIcon2 from "../../ui/AccountIcon2"
import { useNavigate } from "react-router-dom"


const Header = ({toggleNav}: {toggleNav: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const navigate = useNavigate();
    return (
        <div className="h-auto w-full pb-4 bg-black">
                    <div  className="w-full h-auto bg-[#111111] rounded-md py-4 px-3 md:px-5 lg:px-6 flex items-center justify-between ">
                        <div className="hidden lg:block">Account 1</div>
                        <div className="block lg:hidden">
                            <AccountIcon2 count={1} toggleNav={toggleNav} />
                        </div>
                        <div 
                        onClick={() => navigate("/history")}
                        className="text-2xl lg:text-[28px] hover:text-[#AB9FF2] cursor-pointer ">
                            <MdHistory />
                        </div>
                    </div>
                </div>
    )
}

export default Header
import { FaArrowRight } from "react-icons/fa6"
import AccountIcon from "../../ui/AccountIcon"
import { useNavigate } from "react-router-dom"


const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header bg-neutral-950 py-4 flex items-center justify-between h-auto w-full px-6 ">
            <div>
                <AccountIcon count={1} />
            </div>
            <p className="cursor-pointer "
            onClick={() => navigate("/")}
            ><FaArrowRight /></p>
        </div>
    )
}

export default Header
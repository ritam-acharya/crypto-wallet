import { IoMdAdd } from "react-icons/io"
import AccountIcon from "../../ui/AccountIcon"
import { CiSettings } from "react-icons/ci"
import { FaArrowLeft } from "react-icons/fa6";

const LeftSideBar2 = ({toggleNav}: {toggleNav: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div className="w-full bg-neutral-950 h-full py-3 pr-2  ">
        <div className="flex flex-col items-center justify-start gap-2 h-full w-full px-2 ">
            <div className="h-auto w-full flex flex-col items-center justify-start gap-4 ">
                <p className="cursor-pointer "
                onClick={() => toggleNav(prev => !prev)}
                ><FaArrowLeft /></p>
                <AccountIcon count={1} />
            </div>
            <div className="self-end mt-auto w-full h-auto text-[28px] flex flex-col items-center justify-center gap-3 border-t border-gray-300 pt-3">
                <IoMdAdd className="hover:text-[#AB9FF2] cursor-pointer " />
                <CiSettings className="hover:text-[#AB9FF2] cursor-pointer " />
            </div>
        </div>
    </div>
  )
}

export default LeftSideBar2
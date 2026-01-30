import { IoMdAdd } from "react-icons/io"
import AccountIcon from "../../ui/AccountIcon"
import { CiSettings } from "react-icons/ci"


const LeftSideBar = () => {
  return (
    <div className=" hidden lg:block lg:w-[15%] lg:h-full border-r border-gray-300 py-3 pr-2  ">
        <div className="flex flex-col items-center overflow-y-auto justify-start gap-2 h-full w-full px-2 ">
            <AccountIcon count={1} />
            <div className="self-end mt-auto w-full h-auto text-[28px] flex flex-col items-center justify-center gap-3 border-t border-gray-300 pt-3">
                <IoMdAdd className="hover:text-[#AB9FF2] cursor-pointer " />
                <CiSettings className="hover:text-[#AB9FF2] cursor-pointer " />
            </div>
        </div>
    </div>
  )
}

export default LeftSideBar
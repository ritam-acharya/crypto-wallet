import AccountIcon from "../components/ui/AccountIcon";
import TokenBalanceBox from "../components/ui/TokenBalanceBox";
import { IoMdAdd } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { RiQrScan2Line } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { IoMdSwap } from "react-icons/io";
import { FiDollarSign } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { MdHistory } from "react-icons/md";

export default function Home() {
    return <div className="h-full w-full flex items-center justify-center gap-3  ">
        <div className=" hidden lg:block lg:w-[15%] lg:h-full border-r border-gray-600 py-3 pr-2  ">
            <div className="flex flex-col items-center justify-start gap-2 h-full w-full px-2 ">
                <AccountIcon count={1} />
                <div className="self-end mt-auto w-full h-auto text-[28px] flex flex-col items-center justify-center gap-3 border-t border-gray-300 pt-3">
                    <IoMdAdd className="hover:text-[#AB9FF2] cursor-pointer " />
                    <CiSettings className="hover:text-[#AB9FF2] cursor-pointer " />
                </div>
            </div>
        </div>
        <div className="w-full lg:w-[85%] h-full lg:pl-4 flex flex-col items-center justify-center ">
            <div className="h-auto w-full pb-4 bg-black">
                <div  className="w-full h-auto bg-[#111111] py-4 px-3 md:px-5 lg:px-6 flex items-center justify-between ">
                    <div>Account 1</div>
                    <div className="text-2xl lg:text-[28px] hover:text-[#AB9FF2] cursor-pointer ">
                        <MdHistory />
                    </div>
                </div>
            </div>
            <div className="w-full flex-1 scroll-container overflow-y-auto min-h-0 py-4">
                <div className="w-full h-auto pt-3 pb-6 flex items-center justify-center flex-col gap-2 ">
                    <div className="h-24 w-24 rounded-full flex items-center justify-center overflow-hidden ">
                        <img src="./solana.png" alt="SOL" className="h-full w-full object-contain" />
                    </div>
                    <p>20 SOL</p>
                    <div className="w-full h-auto py-2 px-2 flex items-center justify-around mt-4 ">
                        <div className="bg-[#111111] px-3 md:px-7 py-3 md:py-5 rounded-lg cursor-pointer hover:text-[#AB9FF2] text-xl md:text-2xl lg:text-[28px] flex items-center justify-center md:flex-col md:gap-1 ">
                            <RiQrScan2Line />
                            <p className="hidden md:block text-[16px] ">Receive</p>
                        </div>
                        <div className="bg-[#111111] px-3 md:px-7 py-3 md:py-5 rounded-lg cursor-pointer hover:text-[#AB9FF2] text-xl md:text-2xl lg:text-[28px] flex items-center justify-center md:flex-col md:gap-1 ">
                            <IoIosSend />
                            <p className="hidden md:block text-[16px] ">Send</p>
                        </div>
                        <div className="bg-[#111111] px-3 md:px-7 py-3 md:py-5 rounded-lg cursor-pointer hover:text-[#AB9FF2] text-xl md:text-2xl lg:text-[28px] flex items-center justify-center md:flex-col md:gap-1 ">
                            <IoMdSwap />
                            <p className="hidden md:block text-[16px] ">Swap</p>
                        </div>
                        <div className="bg-[#111111] px-3 md:px-7 py-3 md:py-5 rounded-lg cursor-pointer hover:text-[#AB9FF2] text-xl md:text-2xl lg:text-[28px] flex items-center justify-center md:flex-col md:gap-1 ">
                            <FiDollarSign />
                            <p className="hidden md:block text-[16px] ">Buy</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-3">
                    <TokenBalanceBox tokenName="SOL" balance="20.32998" />
                    <TokenBalanceBox tokenName="SOL" balance="20.32998" />
                    <TokenBalanceBox tokenName="SOL" balance="20.32998" />
                    <TokenBalanceBox tokenName="SOL" balance="20.32998" />
                    <TokenBalanceBox tokenName="SOL" balance="20.32998" />
                    <TokenBalanceBox tokenName="SOL" balance="20.32998" />
                    <TokenBalanceBox tokenName="SOL" balance="20.32998" />
                    <TokenBalanceBox tokenName="SOL" balance="20.32998" />
                    <TokenBalanceBox tokenName="SOL" balance="20.32998" />
                    <TokenBalanceBox tokenName="SOL" balance="20.32998" />
                </div>
            </div>
            <div className="h-auto w-full pt-5 bg-black">
                <div  className="w-full h-auto bg-[#111111] py-4 px-3 md:px-5 lg:px-6 flex items-center justify-around text-2xl lg:text-[28px] ">
                    <div className="cursor-pointer hover:text-[#AB9FF2] ">
                        <IoMdHome />
                    </div>
                    <div className="cursor-pointer hover:text-[#AB9FF2] ">
                        <IoMdSwap />
                    </div>
                    <div className="cursor-pointer hover:text-[#AB9FF2] ">
                        <MdHistory />
                    </div>
                </div>
            </div>
        </div>
    </div>
}
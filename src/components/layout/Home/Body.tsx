import { FiDollarSign } from "react-icons/fi"
import TokenBalanceBox from "../../ui/TokenBalanceBox"
import { IoIosSend, IoMdSwap } from "react-icons/io"
import { RiQrScan2Line } from "react-icons/ri"
import Options from "../../ui/Options"

const options = [
    {
        title: 'Receive',
        icon: <RiQrScan2Line />
    },
    {
        title: 'Send',
        icon: <IoIosSend />
    },
    {
        title: 'Swap',
        icon: <IoMdSwap />
    },
    {
        title: 'Buy',
        icon: <FiDollarSign />  
    }
]

const Body = () => {
  return (
    <div className="w-full flex-1 scroll-container overflow-y-auto min-h-0 md:py-4 py-20">
                <div className="w-full h-auto pt-3 pb-6 flex items-center justify-center flex-col gap-2 ">
                    <div className="h-24 w-24 rounded-full flex items-center justify-center overflow-hidden ">
                        <img src="./solana.png" alt="SOL" className="h-full w-full object-contain" />
                    </div>
                    <p>20 SOL</p>
                    <div className="w-full h-auto py-2 px-2 flex items-center justify-around mt-4 ">
                        {
                            options.map((option, i) => (
                                <Options key={`option-${i}`} title={option.title}>
                                    {option.icon}
                                </Options>
                            ))
                        }
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-3">
                    <TokenBalanceBox tokenName="SOL" balance="20.32998" />
                    <TokenBalanceBox tokenName="ETH" balance="20.32998" />
                </div>
            </div>
  )
}

export default Body
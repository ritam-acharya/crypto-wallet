
export default function TokenBalanceBox({tokenName, balance}: {tokenName: string, balance: string}) {
    return <div className="w-full bg-[#181818] hover:bg-[#222222] flex items-center justify-between px-3 md:px-5 lg:px-8 py-4 rounded-3xl cursor-pointer transition-all duration-150 ease-in-out  ">
        <div className="flex items-center justify-start gap-3">
            <div className="h-[50px] w-[50px] flex items-center justify-center overflow-hidden  ">
                {
                    tokenName === "SOL" ? 
                    <img src="/solana.png" alt="SOL" className="h-full w-full object-contain" />:
                    <img src="/ethereum.png" alt="ETH" className="h-full w-full object-contain" />
                }
            </div>
            <div>
                <div className="flex items-center justify-start gap-1 ">
                    <h2 className="font-medium text-lg ">
                        {
                            tokenName === "SOL" ? "Solana" : "Ethereum"
                        }
                    </h2>
                    <div className="h-[20px] w-[20px] flex items-center justify-center overflow-hidden ">
                        <img src="./verified.png" alt="TIC" className="h-full w-full object-contain" />
                    </div>
                </div>
                <p className="text-sm text-gray-400 ">{parseFloat(balance)} { tokenName === "SOL" ? "SOL" : "ETH" }</p>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
            <p className="text-lg ">$100</p>
            <p className="text-sm text-gray-400">$100</p>
        </div>
    </div>
}
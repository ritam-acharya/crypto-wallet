import TokenBalanceBox from "../../ui/TokenBalanceBox"


const Body = () => {
    return (
        <>
            <h2 className="text-lx md:text-2xl font-semibold text-center text-white py-4 ">Recent Activity</h2>
            <div className="scroll-container flex-1 py-2 overflow-y-scroll w-full h-full flex flex-col items-center justify-start gap-3 ">
                <TokenBalanceBox tokenName="SOL" balance="20" />
                <TokenBalanceBox tokenName="ETH" balance="20" />
                <TokenBalanceBox tokenName="SOL" balance="20" />
                <TokenBalanceBox tokenName="SOL" balance="20" />
                <TokenBalanceBox tokenName="ETH" balance="20" />
                <TokenBalanceBox tokenName="SOL" balance="20" />
                <TokenBalanceBox tokenName="SOL" balance="20" />
            </div>
        </>
    )
}

export default Body
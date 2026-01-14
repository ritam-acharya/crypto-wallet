
export default function AccountIcon({count}: {count: number}) {
    return <div className="h-auto w-full flex items-center justify-center flex-col ">
        <div className="bg-[#2A2A2A] hover:bg-[#AB9FF2] text-white hover:text-black flex items-center justify-center h-10 w-10 text-sm rounded-full helvetica-bold cursor-pointer ">
            A{count}
        </div>
        <p className="text-sm text-gray-200 mt-1 ">Account{count}</p>
    </div>
}
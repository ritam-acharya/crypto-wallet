

const AccountIcon2 = ({count, toggleNav}: {count: number, toggleNav: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div 
    onClick={() => toggleNav(prev => !prev)}
    className="bg-[#AB9FF2] text-black flex items-center justify-center h-10 w-10 text-sm rounded-full helvetica-bold cursor-pointer ">
        A{count}
    </div>
  )
}

export default AccountIcon2
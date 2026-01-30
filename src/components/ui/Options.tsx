

const Options = ({children, title}: {children: React.ReactNode, title: string}) => {
  return (
    <div className="bg-[#111111] rounded-lg cursor-pointer hover:text-[#AB9FF2] h-[65px] w-[60px] md:h-[90px] md:w-[90px] text-[25px] md:text-2xl lg:text-[28px] flex items-center justify-center md:flex-col ">
        {children}
        <p className="hidden md:block text-[16px] ">{title}</p>
    </div>
  )
}

export default Options
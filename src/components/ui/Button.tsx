
export default function Button({bg, textColor, text, cb}: {bg: string, textColor: string, text: string, cb: () => void}) {
    return <div
    onClick={cb}
    className={`w-full h-auto px-4 py-4 rounded-lg bg-[${bg}] text-[${textColor}] cursor-pointer flex items-center justify-center `}>
        {text}
    </div>
}
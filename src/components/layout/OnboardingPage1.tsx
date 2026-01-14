import Button from "../ui/Button";

export default function OnboardingPage1() {

    function cb() {
        console.log("done!");
    }

    return <div className="h-full w-full flex flex-col items-center justify-between py-3 px-2">
        <div>top</div>
        <div className="flex flex-col items-center justify-center gap-3 w-full h-auto">
            <Button bg="#87878A" text="Create a new wallet" textColor="#000" cb={cb} />
            <Button bg="#17181E" text="I already have a wallet" textColor="#ffffff" cb={cb} />
        </div>
    </div>
}
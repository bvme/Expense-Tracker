import {
    FinishImg,
    Geld
} from "../components/ui/img";  
import { useRouter } from "next/router";

export default function Finish() {
    const router = useRouter()
    const handleClick = () => {
        router.push("/dashboard")
    }
    return <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center pt-[50px] gap-[40px]">
            <Geld/>
            <ul className="steps">
                <li className="step step-primary px-10">Currency</li>
                <li className="step step-primary">Balance</li>
                <li className="step step-primary">Finish</li>
            </ul>
        </div>
        <div className="flex flex-col items-center pt-[80px] gap-8 w-[400px]">
            <div className="flex flex-col items-center gap-2">
                <FinishImg/>
                <div className="font-bold text-2xl">Good job!</div>
            </div>
            <div className="flex flex-col gap-3">
                <div className=" text-xs text-gray-500 font-semibold">Your very first account has been created. Now continue to dashboard and start tracking </div>
            </div>
            <button onClick={handleClick} className="flex items-center justify-center bg-[#0166FF] h-10 w-[400px] rounded-lg text-white text-xl">Go to Dashboard</button>
        </div>
    </div>
}
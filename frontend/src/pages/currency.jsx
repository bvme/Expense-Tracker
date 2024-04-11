import {
    CurrencyImg,
    Geld
} from "../components/ui/img"
import { useRouter } from "next/router";
import { useState, createContext, useContext } from "react";

export default function Currency() {
    const [currData, setCurrData] = useState();
    const NewUser = createContext({currData})
    const currencyType = useContext(NewUser)
    console.log(currencyType);
    const router = useRouter()
    const handleClick = () => {
        router.push("/balance")
    }
    return <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center pt-[50px] gap-[40px]">
            <Geld/>
            <ul className="steps">
                <li className="step step-primary px-10">Currency</li>
                <li className="step">Balance</li>
                <li className="step">Finish</li>
            </ul>
        </div>
        <div className="flex flex-col items-center pt-[80px] gap-8 w-[400px]">
            <div className="flex flex-col items-center gap-2">
                <CurrencyImg/>
                <div className="font-bold text-2xl">Select base currency</div>
            </div>
            <div className="flex flex-col gap-3">
                <select onChange={(event) => setCurrData(event.target.value)} id="currency" name="currency" className=" h-[50px] px-3 bg-gray-100 rounded-lg border-gray-500 border-[1px]">
                    <option>select currency</option>
                    <option value="AUD">Australian Dollar</option>
                    <option value="CAD">Canadian Dollar</option>
                    <option value="CNY">Chinese Yuan</option>
                    <option value="EUR">Euro</option>
                    <option value="JPY">Japanese Yen</option>
                    <option value="MNT">Mongolian Tugrik</option>
                    <option value="KRW">South Korean Won</option>
                    <option value="USD">US Dollar</option>
                </select>
                <div className=" text-xs text-gray-500 font-semibold">Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one </div>
            </div>
            <button onClick={handleClick} className="flex items-center justify-center bg-[#0166FF] h-10 w-[400px] rounded-lg text-white text-xl">Confirm</button>
        </div>
    </div>
}
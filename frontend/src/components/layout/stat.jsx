import { GoDotFill } from "react-icons/go";
import { TbCurrencyTugrik } from "react-icons/tb";
import { FaArrowUp } from "react-icons/fa6";

export function Stat() {
    return <div className="grid grid-cols-3 gap-6 px-[200px] py-[35px] max-xl:px-[100px] max-lg:px-[50px] max-[900px]:grid-cols-2 max-sm:grid-cols-1">
        <img className=" h-[250px] w-full" src="card.png" alt="" />
        <div className=" bg-white h-[250px] rounded-2xl">
            <div className="flex items-center gap-2 p-5">
                <GoDotFill className=" text-green-600"/>
                <div className=" font-semibold">Your income</div>
            </div>
            <hr />   
            <div className=" py-3 px-4">
                <div className="text-[40px] font-bold">1,200,000₮</div>
                <div className=" text-gray-600 text-[18px]">Your Income Amount</div>
                <div className="flex items-center pt-7 gap-2">
                    <div className="flex items-center justify-center bg-green-600 w-[20px] h-[20px] rounded-full">
                        <FaArrowUp className="text-white w-[12px] h-[12px]"/>
                    </div>
                    <div>32% from last month</div>
                </div>
            </div> 
        </div>
        <div className=" bg-white h-[250px] rounded-2xl">
            <div className="flex items-center gap-2 p-5">
                <GoDotFill className=" text-[#0166FF]"/>
                <div className=" font-semibold">Total Expenses</div>
            </div>
            <hr />   
            <div className=" py-3 px-4">
                <div className="text-[40px] font-bold">-1,200,000₮</div>
                <div className=" text-gray-600 text-[18px]">Your Income Amount</div>
                <div className="flex items-center pt-7 gap-2">
                    <div className="flex items-center justify-center bg-green-600 w-[20px] h-[20px] rounded-full">
                        <FaArrowUp className="text-white w-[12px] h-[12px]"/>
                    </div>
                    <div>32% from last month</div>
                </div>
            </div> 
        </div>
    </div>
}
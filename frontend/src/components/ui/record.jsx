import { ChartData } from "./ChartData";
import { PiHouseFill } from "react-icons/pi";

export function RecordData (){
    return <div className="flex flex-col gap-4 p-4">
        {ChartData.map((ChartData) => {
            return(<div className="flex justify-between" key={ChartData.id}>
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-600 w-[40px] h-[40px] flex items-center justify-center rounded-full">
                            <PiHouseFill className=" text-white text-xl"/>
                        </div>
                        <div>
                            <div className="font-semibold text-[16px]">{ChartData.category}</div>
                            <div className="text-gray-500 text-[12px]">3 hours ago</div>
                        </div>
                    </div>
                    <div>
                        <div className=" text-green-600">-{ChartData.expense}₮</div>
                    </div>
                </div>
            )
        })}
    </div>
} 
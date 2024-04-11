import { ChartData } from "../ui/ChartData";
import { BarChart } from "../ui/BarChart";
import { PieChart } from "../ui/PieChart";
import { useState } from "react";
export function Chart() {
    const [userData, setUserData] = useState({
        labels: ChartData.map((data) => data.month),
        datasets: [{
            label: "income" ,
            data: ChartData.map((data) => data.income),
            
        },
        {
            label: "expense",
            data: ChartData.map((data)=>data.expense),
        }
    ]
    })
    return <div className="grid grid-cols-2 px-[200px] gap-6 max-xl:px-[100px] max-lg:grid-cols-1">
        <div className=" bg-white rounded-2xl h-fit">
            <div className="font-bold p-3">Income - Expense</div>
            <hr />
            <div className=" h-[400px] max-[900]:h-[500px]">
                <BarChart chartData={userData}/>
            </div>
        </div>
        <div className=" bg-white rounded-2xl h-fit">
            <div className=" flex justify-between p-3">
                <div className="font-bold">Income - Expense</div>
                <div className="text-gray-600">Jun 1 - Nov 30</div>
            </div>
            <hr />
            <div className=" w-[400px] ">
                <PieChart chartData={userData}/>
            </div>
        </div>
    </div>
}
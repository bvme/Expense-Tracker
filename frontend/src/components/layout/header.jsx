import { FaPlus } from "react-icons/fa";
import { geldlogo } from "../ui/img";
export function Header() {
    return <div className="flex justify-between px-[200px] max-xl:px-[100px] max-lg:px-[50px] py-[20px] h-[fit]">
        <div className="flex gap-5">
            {geldlogo}
            <button>
                <div className=" text-lg">Dashboard</div>
            </button>
            <button>
                <div className=" text-lg">Records</div>
            </button>
        </div>
        <div className="flex gap-5">
            <button className="flex items-center bg-[#0166FF] rounded-3xl px-4 gap-2 text-white">
                <FaPlus />
                <div className=" text-lg">Record</div>
            </button>
            <img src="avatar.png" alt="" />
        </div>
    </div>
}
import { FaPlus } from "react-icons/fa6";
import { GeldLogo } from "../components/ui/img";
import { useRouter } from "next/router";
import { 
    MdRemoveRedEye,
    MdArrowRight  
} from "react-icons/md";

export default function Records() {
    const router = useRouter();
    const handleClick = () => {
        router.push("/dashboard")
    }
    return <div>
        <style>{'body {background-color: rgb(229 231 235); height: 100vh}'}</style>
        <div className="flex justify-between bg-white px-[200px] max-xl:px-[100px] max-lg:px-[50px] py-[20px]">
            <div className="flex gap-5">
                <GeldLogo/>
                <button>
                    <div onClick={handleClick} className=" text-xl">Dashboard</div>
                </button>
                <button>
                    <div className=" text-xl font-bold">Records</div>
                </button>
            </div>
            <div className="flex gap-5">
                <button className="flex items-center bg-blue-600 rounded-3xl px-4 gap-2 text-white">
                    <FaPlus />
                    <div className=" text-xl">Record</div>
                </button>
                <img src="avatar.png" alt="" />
            </div>
        </div>
        <div className="flex justify-between px-[200px] py-[50px] max-xl:px-[100px] max-lg:px-[50px] ">
            <div className="flex flex-col bg-gray-100 border-gray-400 border-[1px] rounded-xl w-fit gap-[30px] py-[30px] px-[20px] ">
                <div className="flex flex-col gap-10">
                    <div className=" text-3xl font-bold">Records</div>
                    <button className="flex items-center justify-center bg-[#0166FF] text-white text-xl rounded-[100px] px-[150px] py-[10px]">
                        <FaPlus/>
                        <div className="">Add</div>
                    </button>
                </div>
                <input type="text" placeholder="search" className=" flex bg-gray-200 border-gray-400 border-[1px] rounded-xl pl-[20px] py-[10px] text-xl" />
                <div className=" flex flex-col gap-[20px] ">
                    <div className="text-2xl font-semibold">Types</div>
                    <div className="flex flex-col gap-[5px] pl-[10px]">
                        <div className="flex gap-2 text-xl">
                            <input type="checkbox" className="checkbox rounded-full" />
                            All
                        </div>
                        <div className="flex gap-2 text-xl">
                            <input type="checkbox" className="checkbox rounded-full" />
                            Income
                        </div>
                        <div className="flex gap-2 text-xl">
                            <input type="checkbox" className="checkbox rounded-full" />
                            Expense
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-2xl font-semibold">Category</div>
                    <div className="flex flex-col gap-4 pt-[25px] text-xl">
                        <div className="flex items-center gap-1">
                            <div><MdRemoveRedEye/></div>
                            <div>Food & Drinks</div>
                            <div><MdArrowRight/></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div><MdRemoveRedEye/></div>
                            <div>Food & Drinks</div>
                            <div><MdArrowRight/></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div><MdRemoveRedEye/></div>
                            <div>Food & Drinks</div>
                            <div><MdArrowRight/></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div><MdRemoveRedEye/></div>
                            <div>Food & Drinks</div>
                            <div><MdArrowRight/></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div><MdRemoveRedEye/></div>
                            <div>Food & Drinks</div>
                            <div><MdArrowRight/></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div><MdRemoveRedEye/></div>
                            <div>Food & Drinks</div>
                            <div><MdArrowRight/></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div><MdRemoveRedEye/></div>
                            <div>Food & Drinks</div>
                            <div><MdArrowRight/></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div><MdRemoveRedEye/></div>
                            <div>Food & Drinks</div>
                            <div><MdArrowRight/></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div><MdRemoveRedEye/></div>
                            <div>Food & Drinks</div>
                            <div><MdArrowRight/></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div><MdRemoveRedEye/></div>
                            <div>Food & Drinks</div>
                            <div><MdArrowRight/></div>
                        </div>
                        <div className="flex items-center gap-1">
                            <div><MdRemoveRedEye/></div>
                            <div>Food & Drinks</div>
                            <div><MdArrowRight/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 border-gray-400 rounded-xl border-[1px] w-[500px]"></div>
        </div>
    </div>
}
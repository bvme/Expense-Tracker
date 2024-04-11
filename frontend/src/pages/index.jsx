import { Geld } from "../components/ui/img";
import { useRouter } from "next/router";

export default function Home() {
  const Dashboard = useRouter()
  const signUp = useRouter()
  const logInHandleClick = () => {
      Dashboard.push("/dashboard")
  }
  const handleClick = () => {
      signUp.push("/signup")
  }
  return (
  <div className="flex items-center justify-center bg-white h-[100vh] w-[50%]">      
    <style>{'body { background-color: #0166FF; height:100%;}'}</style>
    <div className="flex flex-col gap-[40px] items-center">
      <Geld/>
      <div className="flex flex-col items-center gap-3">
        <div className="text-4xl font-bold">Welcome Back</div>
        <div className="text-2xl text-gray-600">Welcome back, Please enter your details</div>
      </div>
      <div className="flex flex-col gap-3">
        <input className="border-[1px] border-gray-300 bg-gray-100 rounded w-[450px] h-[50px] pl-3" type="email" placeholder="Email" />
        <input className="border-[1px] border-gray-300 bg-gray-100 rounded w-[450px] h-[50px] pl-3" type="password" placeholder="Password" />
        <button onClick={logInHandleClick} className=" bg-[#0166FF] text-white rounded-2xl w-[450px] h-[50px] text-xl">Log in</button>
      </div>
      <div className="flex gap-3 text-xl">
        <div>Don't have account?</div>
        <button onClick={handleClick} className=" text-blue-600">Sign up</button>
      </div>
    </div>
  </div>
);
} 
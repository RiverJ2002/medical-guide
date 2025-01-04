
import Image from "next/image";
import logo from "./logo.png";


export default function Home() {
  return <div className="flex flex-col items-center bg-green-300 px-[24px] h-[100%]">
           <div className="flex mt-[100px] bg-orange-400">
              <h1>پزشکینو</h1>
              <Image src={logo} width="28" height="28" alt="image not found"/>
           </div>

           <p className="mt-[32px]">ورود و ثبت نام</p>

           
          <p className="bg-slate-400 w-[100%] flex justify-end mt-[48px] mb-[12px]">شماره همراه خود را وارد کنید</p>
          <input type="text" placeholder="شماره همراه" className="w-[100%] flex text-right" />           
         </div>
    
  ;
}

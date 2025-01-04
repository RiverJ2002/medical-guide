

import Image from "next/image";
import logo from "./logo.png";
import rules_icon from "./rules_icon.png";
import Link from "next/link";

export default function Home() {
  return <div className="flex flex-col items-center bg-green-300 px-[24px] h-[100%]">
           <div className="flex mt-[100px] bg-orange-400">
              <h1>پزشکینو</h1>
              <Image src={logo} width="28" height="28" alt="image not found"/>
           </div>

           <p className="mt-[32px]">ورود و ثبت نام</p>

           
          <p className="bg-slate-400 w-[100%] flex justify-end mt-[48px] mb-[12px]">شماره همراه خود را وارد کنید</p>
          <input type="text" placeholder="شماره همراه" 
          className="w-[100%] flex text-right border rounded-[8px] px-2 h-[50px]" />           
         
          <div className="flex-grow bg-zinc-400"></div>

          <div className="flex bg-red-50 items-center w-[100%]">
           <p className=" w-[100%] mr-[8px] flex justify-end">استفاده از پزشکینو به معنی پذیرش تمامی قوانین و مقررات</p>
           <Image src={rules_icon} width="28" height="28" alt="image not found"/>
          </div>
          <p className=" w-[100%] bg-red-50 flex justify-end mb-[16px]"> .اپلیکیش است</p>
          <Link href="./VerifyPage" className="h-[50px] bg-[#06C1FF] w-[100%] mb-[20px] flex justify-center items-center rounded-[8px]">تایید و دریافت کد</Link>

          <Link href="./VerifyPage" className="h-[50px] bg-[#06C1FF] w-[100%] mb-[20px] flex justify-center items-center rounded-[8px]">تایید و دریافت کد</Link>
         </div>
    
  
}

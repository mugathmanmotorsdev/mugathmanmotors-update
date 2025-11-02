import Image from "next/image";
import Navigator from "./Navigators";

export default function Footer() {
    return(
        <section className="container mx-auto flex flex-col gap-5 items-center justify-center w-[95vw] bg-gray-200 rounded-2xl py-12 my-10 bg-linear-to-br from-[#F8F4FF] via-indigo-200 to-[#eff4fd]">
            <div className="flex gap-4">
                <Image src="/logo.png" alt="logo" width={32} height={32} />
                <h1 className="font-bold text-2xl">Mugathman Motors</h1>    
            </div> 
            <div>
                <p className="text-center w-2/3 mx-auto ">
                    Mugathman motors offered a wide range of vehicles including trucks, 
                    cars, farm tractors and quality spare parts to meet all your logistics and transportation needs
                </p>
            </div>  
            <Navigator />
            <p className="text-center">Copyright &copy; Mugathman Motors 2023</p>
        </section>
    )
}
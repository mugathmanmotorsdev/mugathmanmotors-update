import Image from "next/image";
import Navigator from "./Navigators";
import {FaFacebook, FaTiktok, FaYoutube} from "react-icons/fa"

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
            <div className="flex gap-5 items-center justify-center">
                <div>
                    <a target="_blank" href="https://www.tiktok.com/@mugathman_motors?is_from_webapp=1&sender_device=pc"><FaTiktok /></a>
                </div>
                <div>
                    <a target="_blank" href="https://youtube.com/@mugathmanmotors?si=HCEMYU6dGM7IaXvr"><FaYoutube /></a>
                </div>
                <div>
                    <a target="_blank" href="https://web.facebook.com/profile.php?id=61583124653834"><FaFacebook /></a>
                </div>          
            </div>
            <p className="text-center">Copyright &copy; Mugathman Motors 2023</p>
        </section>
    )
}
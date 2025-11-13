import Image from "next/image";
import Navigator from "./Navigators";
import {FaFacebook, FaTiktok, FaYoutube} from "react-icons/fa"
import Link from "next/link";

export default function Footer() {
    return(
        <section className="py-12 mt-10 bg-indigo-900 text-white">
            <div className="container mx-auto px-5 flex flex-col-reverse md:flex-row gap-10 md:gap-5">
                <div className="flex flex-col gap-10">
                    <div className="flex gap-4 justify-center md:justify-start items-center">
                        <Image src="/logo.png" alt="logo" width={32} height={32} />
                        <h1 className="font-bold text-2xl">Mugathman Motors</h1>    
                    </div> 
                    <div>
                        <p className="md:w-1/2 text-center md:text-left">
                            Mugathman motors offered a wide range of vehicles including trucks, 
                            cars, farm tractors and quality spare parts to meet all your logistics and transportation needs
                        </p>
                    </div>  
                    <div className="flex gap-5 items-center justify-center md:justify-start">
                        <div>
                            <a target="_blank" href="https://www.tiktok.com/@mugathman_motors?is_from_webapp=1&sender_device=pc"><FaTiktok size={20} /></a>
                        </div>
                        <div>
                            <a target="_blank" href="https://youtube.com/@mugathmanmotors?si=HCEMYU6dGM7IaXvr"><FaYoutube size={20} /></a>
                        </div>
                        <div>
                            <a target="_blank" href="https://web.facebook.com/profile.php?id=61583124653834"><FaFacebook size={20} /></a>
                        </div>          
                    </div>
                    <p className="text-center md:text-left">Copyright &copy; Mugathman Motors 2023</p>
                </div>
            
                <div className="flex flex-col gap-8">
                    <h2 className="text-lg font-semibold">Pages</h2>
                    <ul className={"flex flex-col gap-4 bg-transparent"}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/inventory">Inventory</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-8">
                    <h2 className="text-lg font-semibold">Products</h2>
                    <div className="flex flex-col gap-4">
                        <p>Trucks</p>
                        <p>Tractors and Dozers</p>
                        <p>Cars</p>
                        <p>Spare parts</p>
                        <p>Engine oil</p>
                        <p>Solar Systems</p>
                    </div>   
                </div>
            </div>
        </section>
    )
}
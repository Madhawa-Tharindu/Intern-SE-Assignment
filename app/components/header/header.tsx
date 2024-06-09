'use client';
import { useState } from "react";
import "./header.css";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="header">
            <div className="flex ml-8 items-center">
                <button className="p-3 md:block lg:block xl:hidden" onClick={toggleMenu}>
                    <Image src={"/Menu.svg"} alt={""} width={17} height={20} />
                </button>

                {isOpen ?
                    <div className="top-16 py-2 px-4 h-20 bg-purple shadow-lg z-40 absolute rounded-md">
                        <Link href="/" className="block px-4 py-2 text-white bg-light-purple rounded-xl">
                            Dashboard
                        </Link>
                    </div> : null}
                <p className="h4 h-max font-semibold text-20 leading-32 tracking-wide">Dashboard</p>
            </div>
            <div className="w-max pr-12 flex">
                <button className="pr-6">
                    <Image src={"/Notifications.svg"} alt={"Notification icon"} width={24} height={24} />
                </button>
                <button>
                    <Image src={"/Profile.svg"} alt={"Profile icon"} width={40} height={40} />
                </button>
                <button className="pl-[14px]">
                    <Image src={"/Chevron-down.svg"} alt={"Chevron-down-icon"} width={24} height={24} />
                </button>
            </div>
        </div>
    );
};

export default Header;

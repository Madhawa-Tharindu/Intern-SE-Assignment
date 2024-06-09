'use client';
import './sideBar.css';
import Link from "next/link";
import SidebarPill from "./sideBarPill";
import { SIDEBAR_TITLE } from '@/app/constants/constants';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <p className="text-2xl h-min font-semibold font-inter leading-32 tracking-wide justify-center">{SIDEBAR_TITLE}</p>
            </div>
            <div className="my-16">
                <Link href="/">
                    <SidebarPill />
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
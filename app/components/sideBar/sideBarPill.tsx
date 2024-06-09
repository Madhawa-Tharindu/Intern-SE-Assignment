import Image from "next/image";

const SidebarPill: React.FC = () => {
    return (
        <>
            <div className="sidebar-pill">
                <Image className='' src="/dashboard.svg" alt={"dashboard"} width={20} height={20} />
                <p className="mb-1">Dashboard</p>
            </div>
        </>
    );
};

export default SidebarPill;

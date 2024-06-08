import Image from "next/image";
import Sidebar from "./components/sideBar/sideBar";
import Header from "./components/header/header";

const Dashboard: React.FC = () => {
  return (
    <main className="font-inter">
      <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row">
        <Sidebar />
        <div className="w-full h-screen flex flex-col">
        <Header />
        </div>
      </div>
    </main>

  )
}

export default Dashboard;

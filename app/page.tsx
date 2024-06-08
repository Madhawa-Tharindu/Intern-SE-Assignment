import Image from "next/image";
import Sidebar from "./components/sideBar/sideBar";
import Header from "./components/header/header";
import Welcome from "./components/welcomeMsg/welcomeMsg";

const Dashboard: React.FC = () => {
  return (
    <main className="font-inter">
      <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row">
        <Sidebar />
        <div className="w-full h-screen flex flex-col">
        <Header />
        <div className="flex flex-col overflow-auto h-full p-6 gap-y-8">
            <Welcome />
            </div>
        </div>
      </div>
    </main>

  )
}

export default Dashboard;

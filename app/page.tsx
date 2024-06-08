import Image from "next/image";
import Sidebar from "./components/sideBar/sideBar";

const Dashboard: React.FC = () => {
  return (
    <main className="font-inter">
      <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row">
        <Sidebar />
      </div>
    </main>

  )
}

export default Dashboard;

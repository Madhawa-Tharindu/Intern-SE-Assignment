import Sidebar from "./components/sideBar/sideBar";
import Header from "./components/header/header";
import Welcome from "./components/welcomeMsg/welcomeMsg";
import TaskListContextProvider from "./context/TaskListContext";
import Tasks from "./components/tasksCompo/tasks";
import ActivityFeed from "./components/activityFeed/activityFeed";
import CustomPieChart from "./components/taskPrioritiesCharts/customPieChart";
//import CustomPieChart from "./components/piechart";

const Dashboard: React.FC = () => {
  return (
    <main className="font-inter">
      <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row">
        <Sidebar />
        <div className="w-full h-screen flex flex-col">
          <Header />
          <div className="flex flex-col overflow-auto h-full p-6 gap-y-8">
            <Welcome />
            <TaskListContextProvider>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-7">
                  <Tasks />
                </div>
                <div className="col-span-12 lg:col-span-5">
                  <ActivityFeed />
                  <CustomPieChart />
                </div>
              </div>
            </TaskListContextProvider>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard;



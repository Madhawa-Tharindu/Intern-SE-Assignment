import "./pieChart.css";
import PieChartComponent from "./pieChartComponent";
import ChartLegend from './pieChartLegend';

const CustomPieChart: React.FC = () => {
    return (
        <div className="pieChart">
            <div className="flex items-center py-2 px-4">
                <h1 className="font-medium text-large w-max">Task Priorities</h1>
            </div>
            <hr />
            <div className="flex justify-center">
                <PieChartComponent />
                <ChartLegend />
            </div>
        </div>
    );
};

export default CustomPieChart;

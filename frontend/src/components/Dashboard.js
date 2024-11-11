// Dashboard.js
import React from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

// Sample data for the pie chart
const pieData = {
  labels: ["Phones", "Laptops", "Headphones", "Accessories"],
  datasets: [
    {
      data: [300, 200, 100, 50],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
    },
  ],
};

// Sample data for the line chart
const lineData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Revenue (VND)",
      data: [5000, 6000, 8000, 10000, 12000, 15000],
      fill: false,
      borderColor: "#36A2EB",
      tension: 0.1,
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg mb-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie chart */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Product Statistics</h2>
          <Pie data={pieData} width={300} height={300} />{" "}
          {/* Adjust the size of the pie chart */}
        </div>
        {/* Line chart */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
          <Line data={lineData} width={300} height={200} />{" "}
          {/* Adjust the size of the line chart */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

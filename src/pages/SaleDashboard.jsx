import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Import Highcharts modules
import Exporting from "highcharts/modules/exporting.js";
import ExportData from "highcharts/modules/export-data.js";

// Initialize modules
if (typeof Exporting === "function") Exporting(Highcharts);
if (typeof ExportData === "function") ExportData(Highcharts);

function SalesDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/salesData.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error loading sales data:", err));
  }, []);

  const categories = data.map((d) => d.month);
  const salesSeries = data.map((d) => d.sales ?? 0);
  const profitSeries = data.map((d) => d.profit ?? 0);
  const lossSeries = data.map((d) => d.loss ?? 0);

  // Common exporting options
  const exportingOptions = {
    enabled: true,
    buttons: {
      contextButton: {
        menuItems: ["downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG"],
      },
    },
  };

  const lineOptions = {
    chart: { type: "line", height: 250 },
    title: { text: "Line Chart — Monthly Sales" },
    xAxis: { categories },
    yAxis: { title: { text: "Sales" } },
    series: [{ name: "Sales", data: salesSeries, color: "#8884d8" }],
    tooltip: { shared: true },
    credits: { enabled: false },
    exporting: exportingOptions,
  };

  const barOptions = {
    chart: { type: "column", height: 250 },
    title: { text: "Bar Chart — Monthly Sales" },
    xAxis: { categories },
    yAxis: { title: { text: "Sales" } },
    series: [{ name: "Sales", data: salesSeries, color: "#82ca9d" }],
    tooltip: { shared: true },
    credits: { enabled: false },
    exporting: exportingOptions,
  };

  const areaOptions = {
    chart: { type: "area", height: 250 },
    title: { text: "Area Chart — Monthly Sales" },
    xAxis: { categories },
    yAxis: { title: { text: "Sales" } },
    series: [{ name: "Sales", data: salesSeries, color: "#ffc658" }],
    tooltip: { shared: true },
    credits: { enabled: false },
    exporting: exportingOptions,
  };

  const pieOptions = {
    chart: { type: "pie", height: 250 },
    title: { text: "Pie Chart — Sales Share" },
    series: [
      {
        name: "Sales",
        data: data.map((d) => ({ name: d.month, y: d.sales })),
        colors: ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1", "#a4de6c"],
      },
    ],
    tooltip: { pointFormat: "{point.name}: <b>{point.y}</b>" },
    credits: { enabled: false },
    exporting: exportingOptions,
  };

  const radarOptions = {
    chart: { polar: true, type: "line", height: 250 },
    title: { text: "Radar Chart — Monthly Sales" },
    xAxis: { categories, tickmarkPlacement: "on", lineWidth: 0 },
    yAxis: { gridLineInterpolation: "polygon", lineWidth: 0, min: 0 },
    series: [{ name: "Sales", data: salesSeries, pointPlacement: "on", color: "#ff8042" }],
    credits: { enabled: false },
    exporting: exportingOptions,
  };

  const profitLossOptions = {
    chart: { type: "line", height: 300 },
    title: { text: "Profit vs Loss Overview" },
    xAxis: { categories, title: { text: "Months" } },
    yAxis: { title: { text: "Amount (PKR)" } },
    tooltip: { shared: true, valueSuffix: " PKR" },
    series: [
      { name: "Profit", data: profitSeries, color: "#28a745" },
      { name: "Loss", data: lossSeries, color: "#dc3545" },
    ],
    credits: { enabled: false },
    exporting: exportingOptions,
  };

  return (
    <div className="w-[90%] mx-auto py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        📈 Sales Analytics Dashboard
      </h1>

     <div className="flex flex-wrap gap-6">
  <div className="w-full sm:w-[48%] lg:w-[31%] bg-white shadow-md p-5 rounded-xl">
    <HighchartsReact highcharts={Highcharts} options={lineOptions} />
  </div>
  <div className="w-full sm:w-[48%] lg:w-[31%] bg-white shadow-md p-5 rounded-xl">
    <HighchartsReact highcharts={Highcharts} options={barOptions} />
  </div>
  <div className="w-full sm:w-[48%] lg:w-[31%] bg-white shadow-md p-5 rounded-xl">
    <HighchartsReact highcharts={Highcharts} options={areaOptions} />
  </div>
  <div className="w-full sm:w-[48%] lg:w-[31%] bg-white shadow-md p-5 rounded-xl">
    <HighchartsReact highcharts={Highcharts} options={pieOptions} />
  </div>
  <div className="w-full sm:w-[48%] lg:w-[31%] bg-white shadow-md p-5 rounded-xl">
    <HighchartsReact highcharts={Highcharts} options={radarOptions} />
  </div>
  <div className="w-full sm:w-[48%] lg:w-[31%] bg-white shadow-md p-5 rounded-xl">
    <HighchartsReact highcharts={Highcharts} options={profitLossOptions} />
  </div>
</div>


    </div>
  );
}

export default SalesDashboard;

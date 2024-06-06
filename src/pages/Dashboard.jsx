// Dashboard.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartInstance2 = useRef(null);

  useEffect(() => {
    // Fungsi untuk membuat chart
    const createChart = (chartRef, data) => {
      const myChartRef = chartRef.current.getContext('2d');
      return new Chart(myChartRef, {
        type: 'doughnut',
        data: {
          labels: data.labels,
          datasets: [{
            data: data.values,
            backgroundColor: data.colors,
          }],
        },
      });
    };

    // Data untuk dua doughnut chart
    const data1 = {
      labels: ['Red', 'Blue', 'Yellow'],
      values: [300, 50, 100],
      colors: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
    };

    const data2 = {
      labels: ['Green', 'Purple', 'Orange'],
      values: [150, 100, 200],
      colors: ['rgb(75, 192, 192)', 'rgb(153, 102, 255)', 'rgb(255, 159, 64)'],
    };

    // Inisialisasi dua doughnut chart
    chartInstance1.current = createChart(chartRef1, data1);
    chartInstance2.current = createChart(chartRef2, data2);

    // Clean up
    return () => {
      if (chartInstance1.current) {
        chartInstance1.current.destroy();
      }
      if (chartInstance2.current) {
        chartInstance2.current.destroy();
      }
    };
  }, []);

  return (
    <div className="chart-container">
      <canvas ref={chartRef1} className="doughnut-chart" />
      <canvas ref={chartRef2} className="doughnut-chart" />
    </div>
  );
};

export default Dashboard;

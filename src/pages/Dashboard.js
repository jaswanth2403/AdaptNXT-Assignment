import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import Multiplegraph from './Multiplegraph';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const trafficOptions = {
  exportEnabled: true,
  animationEnabled: true,
  title: {
    text: "Website Traffic Sources"
  },
  data: [{
    type: "pie",
    showInLegend: true,
    legendText: "{label}",
    toolTipContent: "{label}: <strong>{y}%</strong>",
    indexLabel: "{y}%",
    indexLabelPlacement: "inside",
    dataPoints: [
      { y: 44.2, label: "Woocommerce Store" },
      { y: 55.8, label: "Shopify Store" },
      
    ]
  }]
};

const styles = {
  dashboard: {
    padding: '20px',
    backgroundColor: '#fff',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#333',
  },
  graphsContainer: {
    display: 'flex',
    gap: '20px',
  },
  graph: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
  },
  graphTitle: {
    fontSize: '1.5em',
    marginBottom: '15px',
    color: '#333',
  },
  graphPlaceholder: {
    backgroundColor: '#e0e0e0',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
    fontSize: '1.2em',
    borderRadius: '4px',
  },
};

const Dashboard = () => {
  return (
    <div style={styles.dashboard}>
      <h1 style={styles.heading}>Dashboard</h1>
      <div style={styles.graphsContainer}>
        <div style={styles.graph}>
          <h2 style={styles.graphTitle}></h2>
          <Multiplegraph/>
        </div>
        <div style={styles.graph}>
          <h2 style={styles.graphTitle}>Portion of Sales</h2>
          <CanvasJSChart options={trafficOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

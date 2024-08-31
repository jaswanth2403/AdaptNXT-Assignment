import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Order from './pages/Order';
import Returns from './pages/Returns';
import Customers from './pages/Customers';
import Shipping from './pages/Shipping';
import Channel from './pages/Channel';
import Integrations from './pages/Integrations';
import Calculators from './pages/Calculators';
import Reports from './pages/Reports';
import Account from './pages/Account';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '300px', padding: '20px', flex: 1 }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/order" element={<Order />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/account" element={<Account />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

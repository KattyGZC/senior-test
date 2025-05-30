import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CustomerList from "./components/Customer/CustomerList";
import VehicleList from "./components/Vehicle/VehicleList";
import VehicleForm from "./components/Vehicle/VehicleForm";
import VehicleDetails from "./components/Vehicle/VehicleDetails";
import InventoryList from "./components/Inventory/InventoryList";
import RepairOrderList from "./components/RepairOrder/RepairOrderList";
import RepairOrderDetail from "./components/RepairOrder/RepairOrderDetail";
import RepairOrderCreate from "./components/RepairOrder/RepairOrderCreate";
import RepairOrderEdit from "./components/RepairOrder/RepairOrderEdit";
import CustomerForm from "./components/Customer/CustomerForm";
import CustomerDetails from "./components/Customer/CustomerDetails";
import InventoryForm from "./components/Inventory/InventoryForm";
import InventoryDetail from "./components/Inventory/InventoryDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/customers/new" element={<CustomerForm />} />
        <Route path="/customers/detail/:id" element={<CustomerDetails />} />
        <Route path="/customers/edit/:id" element={<CustomerForm />} />
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/vehicles/new" element={<VehicleForm />} />
        <Route path="/vehicles/detail/:id" element={<VehicleDetails />} />
        <Route path="/vehicles/edit/:id" element={<VehicleForm />} />
        <Route path="/inventory" element={<InventoryList />} />
        <Route path="/inventory/new" element={<InventoryForm />} />
        <Route path="/inventory/detail/:id" element={<InventoryDetail />} />
        <Route path="/inventory/edit/:id" element={<InventoryForm />} />
        <Route path="/repair-orders" element={<RepairOrderList />} />
        <Route path="/repair-orders/detail/:id" element={<RepairOrderDetail />} />
        <Route path="/repair-orders/create" element={<RepairOrderCreate />} />
        <Route path="/repair-orders/edit/:id" element={<RepairOrderEdit />} />
        <Route path="*" element={<h2 style={{ color: "red" }}>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;

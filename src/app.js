import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Login from "./components/login";
import Dashboard from "./components/Dashboard";
import PropertyList from "./components/PropertyList";
import TenantList from "./components/TenantList";
import AgreementList from "./components/AgreementList";
import PaymentList from "./components/PaymentList";
import BlockchainView from "./components/blockchain/BlockchainView";
import AuditLogs from "./components/AuditLog";
import Settings from "./components/Settings";
import Reports from "./components/Reports";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Properties */}
        <Route
          path="/properties"
          element={<PropertyList />}
        />

        {/* Tenants */}
        <Route
          path="/tenants"
          element={<TenantList />}
        />

        {/* Agreements */}
        <Route
          path="/agreements"
          element={<AgreementList />}
        />

        {/* Payments */}
        <Route
          path="/payments"
          element={<PaymentList />}
        />

        {/* Blockchain */}
        <Route
          path="/blockchain"
          element={<BlockchainView />}
        />

        {/* Audit Logs */}
        <Route
          path="/audit"
          element={<AuditLogs />}
        />

        {/* Reports */}
        <Route
          path="/reports"
          element={<Reports />}
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={<Settings />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* Notifications */}
        <Route
          path="/notifications"
          element={<Notifications />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/login";
import Dashboard from "./components/Dashboard";
import PropertyList from "./components/PropertyList";
import TenantList from "./components/TenantList";
import AgreementList from "./components/AgreementList";
import PaymentList from "./components/PaymentList";
import BlockchainView from "./components/BlockchainView";
import AuditLogs from "./components/AuditLog";
import Settings from "./components/Settings";
import Reports from "./components/Reports";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/properties"
          element={<PropertyList />}
        />

        <Route
          path="/tenants"
          element={<TenantList />}
        />

        <Route
          path="/agreements"
          element={<AgreementList />}
        />

        <Route
          path="/payments"
          element={<PaymentList />}
        />

        <Route
          path="/blockchain"
          element={<BlockchainView />}
        />

        <Route
          path="/audit"
          element={<AuditLogs />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/notifications"
          element={<Notifications />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
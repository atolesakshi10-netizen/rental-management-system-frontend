import PageHeader from "./PageHeader";

import AppearanceSettings from "./settings/AppearanceSettings";
import NotificationSettings from "./settings/NotificationSettings";
import AccountSettings from "./settings/AccountSettings";

import "../styles/Settings.css";

function Settings() {

  return (

    <div className="dashboard-content">

      <PageHeader

        title="⚙️ Settings"

        subtitle="Manage your application preferences"

      />

      <div className="settings-container">

        <AppearanceSettings />

        <NotificationSettings />

        <AccountSettings />

      </div>

    </div>

  );

}

export default Settings;
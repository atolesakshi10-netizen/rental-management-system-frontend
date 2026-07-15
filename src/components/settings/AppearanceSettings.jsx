import "../../styles/Settings.css";

function AppearanceSettings() {

  return (

    <div className="settings-card">

      <h3>🎨 Appearance</h3>

      <div className="setting-row">

        <span>Current Theme</span>

        <strong>Light Mode</strong>

      </div>

      <div className="setting-row">

        <span>Accent Color</span>

        <strong>Blue</strong>

      </div>

      <div className="setting-row">

        <span>Interface</span>

        <strong>Professional Dashboard</strong>

      </div>

    </div>

  );

}

export default AppearanceSettings;
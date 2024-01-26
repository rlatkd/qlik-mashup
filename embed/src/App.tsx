import { QlikEmbedConfig, type HostConfig } from "@qlik/embed-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SidePanel from "./components/SidePanel";
import TopBar from "./components/TopBar";
import AnalyticsChart from "./examples/AnalyticsChart";
import ClassicApp from "./examples/ClassicApp";
import SheetList from "./examples/SheetList";

const hostConfig: HostConfig = {
  host: "61wj2gwajvv6vrz.ap.qlikcloud.com",
  // clientId: "****",
  redirectUri: "https://localhost:5173/oauth-callback.html",
  accessTokenStorage: "session",
  authType: "oauth2",
};

export default () => (
  <QlikEmbedConfig.Provider value={hostConfig}>
    <TopBar />
    <div className="main-app">
      <Router>
        <SidePanel />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classic-app" element={<ClassicApp />} />
            <Route path="/analytics-chart" element={<AnalyticsChart />} />
            <Route path="/sheet-list" element={<SheetList />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </Router>
    </div>
  </QlikEmbedConfig.Provider>
);

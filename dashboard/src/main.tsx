import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { WeatherProvider } from "./context/WeatherContext";
import AppShell from "./components/AppShell";
import DashboardView from "./views/DashboardView";
import ForecastView from "./views/ForecastView";
import MapView from "./views/MapView";
import SettingsView from "./views/SettingsView";
import AboutView from "./views/AboutView"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <WeatherProvider>
        <Routes>
          {/*
           * AppShell renders the permanent chrome (SideMenu, AppNavbar)
           * and an <Outlet /> where each child route's view is injected.
           */}
          <Route element={<AppShell />}>
            <Route index element={<DashboardView />} />
            <Route path="/forecast" element={<ForecastView />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/settings" element={<SettingsView />} />
            <Route path="/about" element={<AboutView />} />
          </Route>
        </Routes>
      </WeatherProvider>
    </BrowserRouter>
  </React.StrictMode>
);
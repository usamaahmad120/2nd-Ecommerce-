import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { componentMap } from "./ComponentMap";

function DynamicRoute({ Component, props, title }) {
  useEffect(() => {
    document.title = title || "My App";
  }, [title]);

  return <Component {...props} />;
}

function App() {
  const [routesData, setRoutesData] = useState([]);

  useEffect(() => {
    fetch("/routes.json")
      .then((res) => res.json())
      .then((data) => setRoutesData(data))
      .catch((err) => console.error("Failed to load routes.json:", err));
  }, []);

  if (!routesData.length)
    return <p className="text-center mt-10">Loading routes...</p>;

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routesData.map((route, index) => {
          const Component = componentMap[route.component];
          if (!Component) return null;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <DynamicRoute
                  Component={Component}
                  props={route.props || {}}
                  title={route.title}
                />
              }
            />
          );
        })}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

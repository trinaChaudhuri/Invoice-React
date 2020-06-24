import React from "react";
import Dashboard from "./screens/dashboard";
import Invoice from "./screens/invoice";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Dashboard</div>,
    main: () => (
      <div>
        <Dashboard />
      </div>
    ),
  },
  {
    path: "/invoice",
    sidebar: () => <div>Invoice</div>,
    main: () => (
      <div>
        <Invoice />
      </div>
    ),
  },
];
function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/invoice">Invoice</Link>
            </li>
          </ul>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

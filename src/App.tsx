import { useState } from "react";
import "./style/reset.css";
import "./style/style.css";
import { Login } from "./screens/Login/Login";
import { Home } from "./screens/Home";
import { Counter } from "./components/shared/Conunter";
import { Timer } from "./Timer";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogin = () => setIsAuthenticated(true);

  return (
    <div className="wrapper">
      {/* <Timer /> */}
      {/* <Counter /> */}
      {isAuthenticated ? <Home /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;

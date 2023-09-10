import "./app.css";
import Home from "./pages/Home";
import { useRoutes } from "react-router";
import Detail from "./pages/Detail";
import LoginPage from "./pages/loginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import RegisterPage from "./pages/registerPage";


const routes = [
  { path: "/",
  element:(
  <ProtectedRoute>
  <Home />
  </ProtectedRoute>)},
  { path: "/detail/:userId",
   element:(
  <ProtectedRoute>
  <Detail />
  </ProtectedRoute>) },
    { path: "/login",
    element:
     <LoginPage /> },
     { path: "/register",
     element:
      <RegisterPage /> },
]
function App() {
  const element = useRoutes(routes);

  return element;
}

export default App;

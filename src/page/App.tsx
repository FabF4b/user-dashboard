import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { UserContextProvider } from "../context/UserContextProvider";

export default function App() {
  return (
    <div id="app">
      <UserContextProvider>
        <Navbar />
        <Outlet />
      </UserContextProvider>
    </div>
  );
}

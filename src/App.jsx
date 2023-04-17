import { useState, createContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


import Navbar from './Components/Navbar/Navbar'
import './App.scss'
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";
import Graph from "./Components/Graph/Graph";
import Recommendations from "./Components/Recommendations/Recommendations";
import Signup from "./Components/Signup/Signup";
import Boiler from "./Components/Boiler/Boiler";
import TP from "./Components/TP/TP";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Auth />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "tp",
        element: <TP />,
      },
      {
        path: "graph",
        element: <Graph />,
      },
      {
        path: "boiler",
        element: <Boiler />,
      },
      {
        path: "recommendations",
        element: <Recommendations />,
      }
    ]
  },
]);

export const TPListContext = createContext();


function App() {

  const [tpList, setTpList] = useState([
    {
      temperature: 100,
      pressure: 200
    }
  ]);


  return (
    <div className="App">
    <TPListContext.Provider value={[tpList, setTpList]}>
      <RouterProvider router={router} />
    </TPListContext.Provider>
    </div>
  )
}

export default App

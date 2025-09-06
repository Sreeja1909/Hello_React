import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturentMenu from "./components/RestaurentMenu";
//import Grocery from "./components/Grocery";
import React,{lazy, Suspense, useEffect, useState} from "react";
import "../index.css"
import UserContext from "./utils/UserContext";
import Home from "./components/Home";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const[userName, setUserName] = useState()

  useEffect(() =>{
    const data = {
      name:"SREE",
    }
    setUserName(data.name)
  },[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    
    children: [
      { 
       index: true, 
       element: <Body /> 
       },  
      { 
       path: "grocery", 
       element: <Suspense fallback={<h1> Loading.....</h1>}> < Grocery/> </Suspense>
       }, 
       { 
       path: "Home", 
       element: <Home /> 
       },    
      { 
       path: "about", 
       element: <AboutUs /> 
       },   
       { 
       path: "contact", 
       element: <Contact />
       } ,
       { 
       path: "Cart", 
       element: <Cart /> 
       },
       { 
       path: "resturent/:resId", 
       element: <ResturentMenu />
       } ,
    ],
    
errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

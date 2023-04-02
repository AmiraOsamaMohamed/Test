
import { createBrowserRouter } from "react-router-dom";
import HomePage from"../src/Enter our site/home/HomePage";
import App from "./App";
import Signup from "./Enter our site/signup/Signup";
import Login from "./Enter our site/Login/Login";
import NotFound from "./component/NotFound/NotFound";
import ContactUs from "./Enter our site/Contact Us/ContactUs";
import AboutUs from "./Enter our site/AboutUs/AboutUs";
export const router =createBrowserRouter([
{
  path:"/",
  element:<App/>,
  children:[
    
    {
      path:'',
      element:<HomePage/>,
    },
    {
     path:'/Signup',
     element:<Signup/>
    },
    {
      path:'/Login',
      element:<Login/>
    },
    {
      path:'/ContactUs',
      element:<ContactUs/>

    },
    {
      path:'/AboutUs',
      element:<AboutUs/>

    },
    {
     
      path: '*',
      element: <NotFound />,
  }
  ],
},
]);


import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Routing/Home';
import About from "./Routing/About";
import Customer from "./Routing/Customer";
import Contact from './Routing/Contact';
import Footer from './Routing/Footer';
import Navbar from './Routing/Navbar';
import News from "./Routing/News";
import Services from "./Routing/Services";
import Signup from "./Routing/Signup";
import Login from "./Routing/Login";
import Table from './Routing/Table';
import View from "./Routing/View";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  { path: "/", element: <div><Navbar></Navbar><Home></Home><Footer></Footer></div> },
  { path: "/about", element: <div><Navbar></Navbar><About></About><Footer></Footer></div> },
  { path: "/services", element: <div><Navbar></Navbar><Services></Services><Footer></Footer></div> },
  { path: "/customer", element: <div><Navbar></Navbar><Customer></Customer><Footer></Footer></div> },
  { path: "/news", element: <div><Navbar></Navbar><News></News><Footer></Footer></div> },
  { path: "/contact", element: <div><Navbar></Navbar><Contact></Contact><Footer></Footer></div> },
  { path: "/table", element: <div><Navbar></Navbar><Table></Table><Footer></Footer></div> },
  { path: "/login", element: <div><Navbar></Navbar><Login></Login><Footer></Footer>
  </div> },
  { path: "/signup", element: <div><Navbar></Navbar><Signup></Signup><Footer></Footer>
  </div> },
   { path: "/view/:id", element: <div><Navbar></Navbar><View></View><Footer></Footer></div> },
  <ToastContainer/>
])


function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

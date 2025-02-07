// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import Veg from "./Veg";
// import NonVeg from "./NonVeg";
// import Cart from "./Cart";
// import Orders from "./Orders";
// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";
// import "./App.css"
// import Home from "./Home";
// import { useDispatch, useSelector } from "react-redux";
// import Login from "./Login";
// import { logout } from "./Store";
// import NotFound from "./NotFound";
// import Makeup from "./Makeup";
// import "bootstrap/dist/css/bootstrap.min.css";

// function App()
// {
//   const cart=useSelector(State=>State.cart);
//   let totalItems=cart.reduce((Sum,item) => Sum+item.quantity,0);
//   let auth=useSelector((State)=>State.auth)
//   let isAuthenticated=auth.isAuthenticated;
//   let user=auth.user;
//   let dispath=useDispatch();

//   return(
//     <BrowserRouter>
//     <nav className="navbar" >
//     <Link to='/home' className="logo">home</Link>
//     <Link to='/veg' className="logo">Veg</Link>
//     <Link to='/nonveg' className="logo">Nonveg</Link>
//     <Link to='/Makeup' className="logo">Makeup</Link>
//     <Link to='/cart' className="logo">cart<span>{totalItems}</span></Link>
//     <Link to='/orders' className="logo">orders</Link>
//     <Link to='/aboutus' className="logo">aboutus</Link>
//     <Link to='/contactus' className="logo">contactus</Link>
    
//     <Link to='/NotFound' className="logo"></Link>
    
//     {isAuthenticated?(
//       <>
//       <span className="welcome">Welcome,{user}!</span>
//       <button onClick={()=>dispath(logout())}
//       className="logout-btn">Logout</button>
//       </>
//     ) :(
//       <Link to="/login" className="logo">SignIn</Link>
//     )
//     }

//     </nav>

//     <Routes>
//       <Route path="/home" element={<Home/>}/>
//       <Route path="/veg" element={<Veg/>}/>
//       <Route path="/nonveg" element={<NonVeg/>}/>
//       <Route path="/cart" element={<Cart/>}/>
//       <Route path="/Makeup" element={<Makeup/>}/>
//       <Route path="/orders" element={<Orders/>}/>
//       <Route path="/aboutus" element={<AboutUs/>}/>
//       <Route path="/contactus" element={<ContactUs/>}/>
//       <Route path="/Login" element={<Login/>}/>
//       <Route path="/*" element={<NotFound/>}/>
//     </Routes>
    
//     </BrowserRouter>
//   )
// }
// export default App;



import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { logout } from "./store";
import NotFound from "./NotFound";
import Milk from "./Milk";
// import Makeup from "./Makeup";

const App = () => {
  const cart = useSelector((state) => state.cart);
  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  let auth = useSelector((state) => state.auth);
  let isAuthenticated = auth.isAuthenticated;
  let user = auth.user;
  let dispatch = useDispatch();

  return (
    
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 fixed-top text-center">&emsp;&emsp;&emsp;&emsp;
        
        <Link to="/home" className="navbar-brand">Home</Link>&emsp;&emsp;&emsp;
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link to="/veg" className="nav-link">Veg</Link></li>&emsp;&emsp;&emsp;&emsp;
            <li className="nav-item"><Link to="/nonveg" className="nav-link">Non-Veg</Link></li>&emsp;&emsp;&emsp;
            {/* <li className="nav-item"><Link to="/Makeup" className="nav-link">Makeup</Link></li>&emsp;&emsp;&emsp; */}
            <li className="nav-item"><Link to="/Milk" className="nav-link ">Milk</Link></li>&emsp;&emsp;&emsp;&emsp;
            <li className="nav-item">
              <Link to="/cart" className="nav-link">Cart <span className="badge bg-danger">{totalItems}</span></Link>
            </li>&emsp;&emsp;&emsp;&emsp;
           
            <li className="nav-item"><Link to="/orders" className="nav-link ">Orders</Link></li>&emsp;&emsp;&emsp;&emsp;
            <li className="nav-item"><Link to="/aboutus" className="nav-link">About Us</Link></li>&emsp;&emsp;&emsp;&emsp;
            <li className="nav-item"><Link to="/contactus" className="nav-link">Contact Us</Link></li>&emsp;&emsp;&emsp;
          </ul>
          <div className="d-flex">
            {isAuthenticated ? (
              <>
                <span className="navbar-text me-3">Welcome Akhila!</span>&emsp;&emsp;
                <button onClick={() => dispatch(logout())} className="btn btn-danger">Logout</button>
              </>
            ) : (
              <Link to="/login" className="btn btn-primary">Sign In</Link>
            )}
          </div>
        </div>
      </nav>

      <div className="container mt-5 text-center">
        <Routes>
          
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/Milk" element={<Milk />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/Makeup" element={<Makeup />} /> */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;






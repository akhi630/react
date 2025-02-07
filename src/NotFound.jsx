// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function NotFound()
// {
//     const navigate=useNavigate()
//     useEffect(()=>{
//         setTimeout(()=>{
//             navigate("/home")
//         },5000)
//     },[])
//     return(
//         <>
//         <h1>your page not found</h1>
//         <img src="img404.png"></img>
//         </>
//     )
// }
// export default NotFound;




import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 5000);
  }, []);

  return (
    
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light text-center">
      <h1 className="text-danger fw-bold">404 - Page Not Found</h1>
      <p className="text-warning">Redirecting you to the home page in 5 seconds...</p>
      <Spinner animation="border" variant="primary" />
      <img src="img404.png" className="img-fluid mt-3 rounded shadow-lg" alt="404 Not Found" style={{ maxWidth: "400px" }} />
    </div>
    
  );
}

export default NotFound;

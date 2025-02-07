// import { useRef } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { login } from "./Store";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Login()
// {
//     let username= useRef(null);
//     let password= useRef(null);

//     let dispath=useDispatch();
//     let Navigate=useNavigate();
//      let LoginCheck=()=>{
//         if(username.current.value==="RATAN"&& password.current.value==="RATAN@123"){
//             dispath(login(username.current.value))
//             Navigate("/home");
//         }
//         else{
//             alert("your credentials are wrong. plase check once!");
//         }
//      }
//      return(
//         <>
//         <h1>login page...</h1>
//         <label>username:</label>
//         <input type="text" ref={username}/><br/><br/>
//         <label>password:</label>
//         <input type="password" ref={password}/><br/><br/>
//         <button onClick={LoginCheck}>Login</button>
//         </>
//      )

// }
// export default Login;



// // import { useRef } from "react";
// // import { useDispatch } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import { login } from "./Store";
// // import { Form, Button, Container, Card } from "react-bootstrap";
// // import "bootstrap/dist/css/bootstrap.min.css";

// // function Login() {
    
// //   let username = useRef(null);
// //   let password = useRef(null);

// //   let dispatch = useDispatch();
// //   let navigate = useNavigate();

// //   let LoginCheck = () => {
// //     if (username.current.value === "RATAN" && password.current.value === "RATAN@123") {
// //       dispatch(login(username.current.value));
// //       navigate("/home");
// //     } else {
// //       alert("Your credentials are wrong. Please check once!");
// //     }
// //   };

// //   return (
// //     <div style={{justifyContent:"center"}}>
// //     <Container className="d-flex justify-content-center align-items-center vh-100 ">
// //       <Card className="p-4 shadow-lg" style={{ width: "25rem" }}>
// //         <h2 className="text-center mb-4 d-center">Login</h2>
// //         <Form>
// //           <Form.Group className="mb-3">
// //             <Form.Label>Username:</Form.Label>
// //             <Form.Control type="text" ref={username} placeholder="Enter Username" />
// //           </Form.Group>

// //           <Form.Group className="mb-3">
// //             <Form.Label>Password:</Form.Label>
// //             <Form.Control type="password" ref={password} placeholder="Enter Password" />
// //           </Form.Group>

// //           <Button variant="primary" className="w-100" onClick={LoginCheck}>
// //             Login
// //           </Button>
// //         </Form>
// //       </Card>
// //     </Container>
// //     </div>
// //   );
 
// // }

// // export default Login;







import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  let username = useRef(null);
  let password = useRef(null);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  let LoginCheck = () => {
    if (username.current.value === "akhila" && password.current.value === "akhila@123") {
      dispatch(login(username.current.value));
      navigate("/home");
    } else {
      alert("Your credentials are wrong. Please check once!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "300px" }}>
        <h1 className="text-primary text-center">Login Page</h1>
        <label className="text-success">Username:</label>
        <input className="form-control my-2" type="text" ref={username} placeholder="Enter Username" />
        <label className="text-danger">Password:</label>
        <input className="form-control my-2" type="password" ref={password} placeholder="Enter Password" />
        <button className="btn btn-warning w-100" onClick={LoginCheck}>Login</button>
      </div>
    </div>
  );
}

export default Login;



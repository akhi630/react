// import { useDispatch, useSelector } from "react-redux";
// import { addTocart } from "./Store";

// function Makeup()
// {
//     let MakeupItems=useSelector(state=>state.products.Makeup);
//     let dispath = useDispatch()
// //     let MakeItems=[{name:"Powder",price:23.00},
// //         {name:"fairandlovely", price:45.09},
// //         {name:"Lackme", price:64.98},
// //         {name:"Lotion", price:32},
// //         {name:"Lipstick" ,price:98.98}
// //         {name:"Foundation" ,price:98.98}
// //         {name:"Eyeshadow" ,price:98.98}
// //         {name:"Eyeliner" ,price:98.98}
// //         {name:"Primer" ,price:98.98}
// // ]
// let finalitems = MakeupItems.map((item,index)=>(
// <li key={index}>
// {item.name}-${item.price}&emsp;
//  <button style={{background:"skyblue",color:"red"}} onClick={()=>dispath(addTocart(item))}>Add To Cart</button>     
// </li>
// ))
// return(     
// <>
// <h1 style={{color:'voilet'}}>This is Makeup file </h1>
// <ol>{finalitems}</ol>
// </>
// )
// }
// export default Makeup;



// import { useDispatch, useSelector } from "react-redux";
// import { addTocart } from "./Store";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Makeup() {
//   let MakeupItems = useSelector((state) => state.products.Makeup);
//   let dispatch = useDispatch();

//   return (
//     <div className="container mt-4">&emsp;&emsp;&emsp;&emsp;&emsp;
//       <h1 className="text-center text-primary my-4">This is Makeup Section</h1>
//       <div className="row">
//         {MakeupItems.map((item, index) => (
//           <div key={index} className="col-md-4 mb-4">
//             <div className="card shadow-sm text-center">
//             <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "300px", objectFit: "cover" }} />
//               <div className="card-body">
//                 <h5 className="card-title">{item.name}</h5>
//                 <p className="card-text text-success">&#8377;{item.price.toFixed(2)}</p>
//                 <button className="btn btn-success" onClick={() => dispatch(addTocart(item))}>
//                   Add To Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Makeup;

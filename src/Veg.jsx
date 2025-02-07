// import { useDispatch, useSelector } from "react-redux";
// import { addTocart } from "./Store";

// function Veg()
// {
//     let VegItems=useSelector(state=>state.products.Veg);
//     let dispath = useDispatch()


//     // let VegItems=[{name:"potato",price:23.00},
//     //               {name:"chilli", price:45.09},
//     //               {name:"onion", price:64.98},
//     //               {name:"tomato", price:32},
//     //               {name:"raddish" ,price:98.98}
//     // ]
//     let finalItems=VegItems.map((item,index)=>(
//         <li key={index}>
//        <img src={item.image} width={150} height={150}/>
       
//         {item.name}-&#8377;${item.price}&emsp;
//         <button style={{color:"white",background:"pink"}} onClick={()=>dispath(addTocart(item))}>Add To Cart</button>    
//         </li>
//     ))
//     return(
//         <>
//         <h1 style={{color:'voilet'}}>This is veg.jsx file </h1>
//         <ol>{finalItems}</ol>
//         </>
//     )
//  }
// export default Veg;




// import { useDispatch, useSelector } from "react-redux";
// import { addTocart } from "./Store";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Veg() {
//   let VegItems = useSelector((state) => state.products.Veg);
//   let dispatch = useDispatch();

//   let finalItems = VegItems.map((item, index) => (
//     <div key={index} className="col-md-4 text-center mb-5">
//       <div className="card shadow-sm">
//         <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "300px", objectFit: "cover" }} />
//         <div className="card-body">
//           <h5 className="card-title">{item.name}</h5>
//           <p className="card-text">&#8377;{item.price}</p>
//           <button className="btn btn-success" onClick={() => dispatch(addTocart(item))}>
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   ));

//   return (
//     <div className="container"><br></br>
//       <h1 className="text-center text-primary my-5">This is Veg Section</h1>
//       <div className="row justify-content-center">{finalItems}</div>
//     </div>
//   );
// }
// export default Veg;



import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Veg() {
  let VegItems = useSelector((state) => state.products.Veg);
  let dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  let filteredItems = VegItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let finalItems = filteredItems.map((item, index) => (
    <div key={index} className="col-md-4 text-center mb-4">
      <div className="card shadow-sm">
        <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "300px", objectFit: "cover" }} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">&#8377;{item.price}</p>
          <button className="btn btn-success" onClick={() => dispatch(addTocart(item))}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <br></br>
      <h1 className="text-center text-primary my-5">This is Veg Section</h1>
      
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for vegetables..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary">Search</button>
      </div>
      
      <div className="row justify-content-center">{finalItems}</div>
    </div>
  );
}
export default Veg;

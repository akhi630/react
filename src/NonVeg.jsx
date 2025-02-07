// import { useDispatch, useSelector } from "react-redux";
// import { addTocart } from "./Store";

// function NonVeg()
// {
//     let NonVegItems=useSelector(state=>state.products.NonVeg);
//     let dispath = useDispatch()
// //     let NonVegItems=[{name:"chiken",price:23.00},
// //         {name:"Mutton", price:45.09},
// //         {name:"chiken 65", price:64.98},
// //         {name:"chiken lollypop", price:32},
// //         {name:"biryani" ,price:98.98}
// // ]
// let finalitems = NonVegItems.map((item,index)=>(
// <li key={index}>
// <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "200px", objectFit: "cover" }} />
// {item.name}-${item.price}&emsp;
//  <button style={{background:"skyblue",color:"red"}} onClick={()=>dispath(addTocart(item))}>Add To Cart</button>     
// </li>
// ))
// return(     
// <>
// <h1 style={{color:'voilet'}}>This is Nonveg.jsx file </h1>
// <ol>{finalitems}</ol>
// </>
// )
// }
// export default NonVeg;


import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

function NonVeg() {
  let NonVegItems = useSelector((state) => state.products.NonVeg);
  let dispatch = useDispatch();

  let finalItems = NonVegItems.map((item, index) => (
    <div key={index} className="col-md-4 text-center mb-4">
      <div className="card shadow-sm">
        <img src={item.image}  className="card-img-top"  alt={item.name} style={{ height: "300px", objectFit: "cover" }} />
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
    <div className="container">&emsp;&emsp;
      <h1 className="text-center text-danger my-5">This is Non-Veg Section</h1>
      <div className="row justify-content-center">{finalItems}</div>
    </div>
  );
}

export default NonVeg;

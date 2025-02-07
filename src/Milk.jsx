import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() {
  let MilkItems = useSelector((state) => state.products.Milk);
  let dispatch = useDispatch();

  let finalItems = MilkItems.map((item, index) => (
    <div key={index} className="col-md-4 text-center mb-5">
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
    <div className="container"><br></br>
      <h1 className="text-center text-primary my-5">This is Milk Section</h1>
      <div className="row justify-content-center">{finalItems}</div>
    </div>
  );
}
export default Milk;
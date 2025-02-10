// import { useSelector } from "react-redux";

// function Orders()
// {
//     let purchaseHistory=useSelector((state)=>state.purchaseDetails);
//     let finalData=purchaseHistory.map((purchase,index)=>(
//         <li key={index}>
//             <p style={{color:"orange"}}>Date:{purchase.date}</p>
//             <p style={{color:"red"}}> Total Amount:${purchase.totalPrice.toFixed(2)} </p>
//             <ul>
//                 {purchase.items.map((item,itemIndex)=>(
//                     <li key={itemIndex}>
//                         {item.name}-${item.price}*{item.quantity}
//                     </li>
//                 ))}
//             </ul>
//         </li>
//     ))
//     return (
//         <>
//                 <h2>your purchase history</h2>
//                 {
//                     purchaseHistory.length===0?(
//                     <p>No purchase history available</p>

//                 ) :(
//                     <ul>{finalData}</ul>
//                 )
//             }
//             </>
//         );
//     }
        
// export default Orders;




import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function Orders() {
  let purchaseHistory = useSelector((state) => state.purchaseDetails);

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary fs-1">Your Purchase History</h2>
      {purchaseHistory.length === 0 ? (
        <p className="text-center text-danger fs-1">No purchase history available</p>
      ) : (
        <div className="row justify-content-center">
          {purchaseHistory.map((purchase, index) => (
            <div key={index} className="col-md-12 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-warning">Purchase Date: {purchase.date}</h5>
                  <p className="text-danger fw-bold">
                    Total Amount: &#8377;{purchase.totalPrice.toFixed(2)}
                  </p>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {purchase.items.map((item, itemIndex) => (
                        <tr key={itemIndex}>
                          <td>{item.name}</td>
                          <td>&#8377;{item.price.toFixed(2)}</td>
                          <td>{item.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;





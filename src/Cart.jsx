
// import { addPurchaseDetails, clear, clearCart, decrement, increment } from "./Store";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";

// function Cart()
// {
//     let cartObjects=useSelector(state=>state.cart);
//     let dispath=useDispatch()
//     let cartItems=cartObjects.map((item,index)=>(
//         <div key={index}>
//             <div>
//             <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "200px" , width:"120px", objectFit: "cover" }} />
//             {item.name}-${item.price}
//                 <button style={{background:'pink',color:'white' }} onClick={()=>dispath(increment(item))}>+</button>&emsp;&emsp;
//                 <button style={{background:'pink',color:'white' }} onClick={()=>dispath(decrement(item))}>-</button>&emsp;&emsp;
//                 Quantity:{item.quantity}
//                 <button style={{background:'pink',color:'white' }} onClick={()=>dispath(clear(item))}>clear</button>
//                 </div>

//         </div>
//      ));
//      let totalPrice=cartObjects.reduce((sum,item)=>sum+item.quantity*item.price,0);
//      let[discountPercentage,setDiscountPercentage]=useState(0);
//      let discountAmount=totalPrice*discountPercentage/100;
//      let finalAmount=totalPrice-discountAmount;
//      let[showDiscount,setshowDiscount]=useState(false);

//      let [coupanCode, setcoupanCode]=useState('');

//      let[showCoupanCode,setShowCoupanCode]=useState(false);

//      let[coupanDiscountPer,setcoupanDiscountPer]=useState(0);

//      let handlingCoupanPer=()=>{
//         switch(coupanCode.toUpperCase()){
//             case "RATAN10":setcoupanDiscountPer(10);
//                           setShowCoupanCode(true);
//             break;
//             case "RATAN20":setcoupanDiscountPer(20);
//                            setShowCoupanCode(true);
//             break;
//             case "RATAN30":setcoupanDiscountPer(30);
//                            setShowCoupanCode(true);
//                            break;
//             default:alert('invalid coupan code');
//             setcoupanDiscountPer(0);
//         }
//      };
//       let coupanDiscountAmount= totalPrice*coupanDiscountPer/100;


//       let handleCompletePurchase=()=>{
//         const purchaseDate=new Date().toLocaleDateString();
//             let purchaseDetails={
//                 date:purchaseDate,
//                 items:[...cartObjects],
//                 totalPrice:totalPrice
//             }
//         dispath(clearCart());
//         dispath(addPurchaseDetails(purchaseDetails));
      
//       }


//     return(
//         <>
//         {cartObjects.length>0?
//         <div>
//             <ul>{cartItems}</ul>
//             <p style={{color:"purple"}}>your total price: {totalPrice.toFixed(2)}</p>
//             {
                 
//                     showDiscount &&
//                    <div>
            
//             <p style={{color:"orange",fontFamily:"cursive"}}>your discount Applied....:{discountPercentage}%</p>
//             <p style={{color:"brown",fontFamily:"monospace"}}>your discount Amount....:{discountAmount}</p>
//             </div>
// }
            
//             <p style={{color:"red",fontFamily:"sans-serif"}}>your net amount to pay.....:{finalAmount.toFixed(2)}</p>

//             <button style={{background:'green',color:'white' }}onClick={()=>{setDiscountPercentage(10),setshowDiscount(true)}}> Apply 10% discount</button>&emsp;&emsp;

//             <button style={{background:'green',color:'white'}} onClick={()=>{setDiscountPercentage(20),setshowDiscount(true)}}>Apply 20% discount</button>&emsp;&emsp;
//             <button style={{background:'green',color:'white'}} onClick={()=>{setDiscountPercentage(30),setshowDiscount(true)}}>Apply 30% discount</button>
//             <input type="text" value={coupanCode} onChange={(e)=> setcoupanCode(e.target.value)} placeholder="enter your coupan here"/>
//             <button onClick={()=>{handlingCoupanPer()}}>apply coupan</button>
//             {
//                 showCoupanCode&&
//                 <div>                                                                                                                                                                                                                                                                   
//                     <p>your coupan code applied....:{coupanCode}</p>
//                     <p>your coupan code discount...:{coupanDiscountAmount}</p>
//                     </div>
//             },
//             <button onClick={handleCompletePurchase}>complete purchase</button>
            
//         </div>
//         :
//        <p>your cart is empty</p>
//         }
//         </>

// )
// }

// export default Cart;





import { addPurchaseDetails, clear, clearCart, decrement, increment } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  let cartObjects = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let totalPrice = cartObjects.reduce((sum, item) => sum + item.quantity * item.price, 0);
  let [discountPercentage, setDiscountPercentage] = useState(0);
  let discountAmount = (totalPrice * discountPercentage) / 100;
  let finalAmount = totalPrice - discountAmount;
  let [showDiscount, setShowDiscount] = useState(false);

  let [couponCode, setCouponCode] = useState("");
  let [showCouponCode, setShowCouponCode] = useState(false);
  let [couponDiscountPer, setCouponDiscountPer] = useState(0);
  let couponDiscountAmount = (totalPrice * couponDiscountPer) / 100;

  const handleCouponDiscount = () => {
    switch (couponCode.toUpperCase()) {
      case "AKHILA10":
        setCouponDiscountPer(10);
        setShowCouponCode(true);
        break;
      case "AKHILA20":
        setCouponDiscountPer(20);
        setShowCouponCode(true);
        break;
      case "AKHILA30":
        setCouponDiscountPer(30);
        setShowCouponCode(true);
        break;
      default:
        alert("Invalid coupon code");
        setCouponDiscountPer(0);
    }
  };

  const handleCompletePurchase = () => {
    const purchaseDate = new Date().toLocaleDateString();
    let purchaseDetails = {
      date: purchaseDate,
      items: [...cartObjects],
      totalPrice: totalPrice,
    };
    dispatch(clearCart());
    dispatch(addPurchaseDetails(purchaseDetails));
  };

  return (
    <div className="text-center">
    <div className="container mt-5">
      {cartObjects.length > 0 ? (
        <div>&emsp;&emsp;&emsp;&emsp;
          <h2 className="text-center text-primary">Your Cart Items</h2>&emsp;&emsp;
          <div className="row">
            {cartObjects.map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-success">&#8377;{item.price}</p>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <button className="btn btn-success mx-1" onClick={() => dispatch(increment(item))}>+</button>
                    
                    <button className="btn btn-warning mx-1" onClick={() => dispatch(decrement(item))}>-</button>
                    <button className="btn btn-danger mx-1" onClick={() => dispatch(clear(item))}> Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-light shadow-sm rounded">
            <h4 className="text-primary">Order Summary</h4>
            <p className="text-purple">Total Price: &#8377;{totalPrice.toFixed(2)}</p>

            {showDiscount && (
              <div>
                <p className="text-warning">Discount Applied: {discountPercentage}%</p>
                <p className="text-danger">Discount Amount: &#8377;{discountAmount.toFixed(2)}</p>
              </div>
            )}

            <p className="text-danger fw-bold">Net Amount: &#8377;{finalAmount.toFixed(2)}</p>

            {/* Discount Buttons */}
            <div className="mb-3">
              <button className="btn btn-success mx-2" onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }}>
                Apply 10% Discount
              </button>
              <button className="btn btn-success mx-2" onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }}>
                Apply 20% Discount
              </button>
              <button className="btn btn-success mx-2" onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }}>
                Apply 30% Discount
              </button>
            </div>

            {/* Coupon Code Section */}
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter Coupon Code"
              />
              <button className="btn btn-info text-white" onClick={handleCouponDiscount}>
                Apply Coupon
              </button>
            </div>

            {showCouponCode && (
              <div>
                <p className="text-success">Coupon Code Applied: {couponCode}</p>
                <p className="text-danger">Coupon Discount: &#8377;{couponDiscountAmount.toFixed(2)}</p>
              </div>
            )}

            {/* Complete Purchase Button */}
            <button className="btn btn-primary mt-3" onClick={handleCompletePurchase}>
              Complete Purchase
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-danger fw-bold">Your cart is empty</p>
      )}
    </div>
    </div>
  );
}

export default Cart;

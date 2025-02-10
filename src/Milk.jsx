// import { useDispatch, useSelector } from "react-redux";
// import { addTocart } from "./store";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Milk() {
//   let MilkItems = useSelector((state) => state.products.Milk);
//   let dispatch = useDispatch();

//   let finalItems = MilkItems.map((item, index) => (
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
//       <h1 className="text-center text-primary my-5">This is Milk Section</h1>
//       <div className="row justify-content-center">{finalItems}</div>
//     </div>
//   );
// }
// export default Milk;



import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Milk() {
  let MilkItems = useSelector((state) => state.products.Milk);
  let dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(MilkItems);

  const [filters, setFilters] = useState({
    
    above20: false,
    below200: false,
  });

  // Handle search on button click or enter key press
  const handleSearch = () => {
    let result = NonVegItems.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    applyPriceFilters(result); // Apply filters after search
  };

  // Handle input change
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setFilteredItems(MilkItems); // Show all items if search is cleared
    } else {
      handleSearch();
    }
  };

  // Apply price filters
  const applyPriceFilters = (items) => {
    let filteredByPrice = items;

    if (filters.below200) {
      filteredByPrice = filteredByPrice.filter((item) => item.price < 200);
    }
    if (filters.above20) {
      filteredByPrice = filteredByPrice.filter((item) => item.price > 20);
    }

    setFilteredItems(filteredByPrice);
  };

  // Handle price filter checkbox change
  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters({ ...filters, [name]: checked });

    // Apply price filters after checking/unchecking
    applyPriceFilters(filteredItems);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const finalItems = filteredItems.map((item, index) => (
    <div key={index} className="col-md-4 text-center mb-4">
      <div className="card shadow-sm">
        <img
          src={item.image}
          className="card-img-top"
          alt={item.name}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">&#8377;{item.price}</p>
          <button
            className="btn btn-success"
            onClick={() => dispatch(addTocart(item))}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      &emsp;
      <h1 className="text-center text-danger my-5">This is NonVeg Section</h1>
      
      {/* Search and Filter Controls */}
      <div className="mb-3 d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search Milk Items..."
          value={searchTerm}
          onChange={handleSearchTermChange} // Update the search term
          
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Price Filters - Checkboxes for below 100 and above 200 */}
      <div className="mb-3 d-flex justify-content-center">
        <div className="form-check me-4">

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="above20"
            checked={filters.above20}
            onChange={handleFilterChange}
          />
          <label className="form-check-label">
            Above ₹20
          </label>
        </div>
      </div>

      <input
            className="form-check-input"
            type="checkbox"
            name="below200"
            checked={filters.below200}
            onChange={handleFilterChange}
          />
          <label className="form-check-label">
            Below ₹200
          </label>
        </div>

      {/* Display filtered items */}
      <div className="row justify-content-center">
        {finalItems.length > 0 ? finalItems : <p>No products found</p>}
      </div>
    </div>
  );
}

export default Milk;
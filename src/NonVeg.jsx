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


// import { useDispatch, useSelector } from "react-redux";
// import { addTocart } from "./store";
// import "bootstrap/dist/css/bootstrap.min.css";

// function NonVeg() {
//   let NonVegItems = useSelector((state) => state.products.NonVeg);
//   let dispatch = useDispatch();

//   let finalItems = NonVegItems.map((item, index) => (
//     <div key={index} className="col-md-4 text-center mb-4">
//       <div className="card shadow-sm">
//         <img src={item.image}  className="card-img-top"  alt={item.name} style={{ height: "300px", objectFit: "cover" }} />
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
//     <div className="container">&emsp;&emsp;
//       <h1 className="text-center text-danger my-5">This is Non-Veg Section</h1>
//       <div className="row justify-content-center">{finalItems}</div>
//     </div>
//   );
// }

// export default NonVeg;





// import { useDispatch, useSelector } from "react-redux";
// import { addTocart } from "./store";
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// function NonVeg() {
//   let NonVegItems = useSelector((state) => state.products.NonVeg);
//   let dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   let filteredItems = NonVegItems.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   let finalItems = filteredItems.map((item, index) => (
//     <div key={index} className="col-md-4 text-center mb-4">
//       <div className="card shadow-sm">
//         <img
//           src={item.image}
//           className="card-img-top"
//           alt={item.name}
//           style={{ height: "300px", objectFit: "cover" }}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{item.name}</h5>
//           <p className="card-text">&#8377;{item.price}</p>
//           <button
//             className="btn btn-success"
//             onClick={() => dispatch(addTocart(item))}
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   ));

//   return (
//     <div className="container">&emsp;
//       <h1 className="text-center text-danger my-5">This is Non-Veg Section</h1>
//       <div className="mb-3  d-flex justify-content-center">
//         <input
//           type="text"
//           className="form-control w-50"
//           placeholder="Search Non-Veg Items..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button className="btn btn-primary ">Search</button>
//         </div>
//       <div className="row justify-content-center wl-200">{finalItems}</div>
//     </div>
//   );
// }

// export default NonVeg;




// import { useDispatch, useSelector } from "react-redux";
// import { addTocart } from "./store";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";

// function NonVeg() {
//   let NonVegItems = useSelector((state) => state.products.NonVeg);
//   let dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredItems, setFilteredItems] = useState(NonVegItems);

//   // Handle search on button click or enter key press
//   const handleSearch = () => {
//     const result = NonVegItems.filter((item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredItems(result);
//   };

//   // Handle input change
//   const handleSearchTermChange = (e) => {
//     setSearchTerm(e.target.value);
//     if (e.target.value === "") {
//       setFilteredItems(NonVegItems); // Show all items if search is cleared
//     }
//   };

//   // Handle Enter key press
//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const finalItems = filteredItems.map((item, index) => (
//     <div key={index} className="col-md-4 text-center mb-4">
//       <div className="card shadow-sm">
//         <img
//           src={item.image}
//           className="card-img-top"
//           alt={item.name}
//           style={{ height: "300px", objectFit: "cover" }}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{item.name}</h5>
//           <p className="card-text">&#8377;{item.price}</p>
//           <button
//             className="btn btn-success"
//             onClick={() => dispatch(addTocart(item))}
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   ));

//   return (
//     <div className="container">
//       &emsp;
//       <h1 className="text-center text-danger my-5">This is Non-Veg Section</h1>
//       <div className="mb-3 d-flex justify-content-center">
//         <input
//           type="text"
//           className="form-control w-50"
//           placeholder="Search Veg Items..."
//           value={searchTerm}
//           onChange={handleSearchTermChange} // Update the search term
      
//         />
//         <button className="btn btn-primary" onClick={handleSearch}>
//           Search
//         </button>
//       </div>
//       <div className="row justify-content-center">{finalItems}</div>
//     </div>
//   );
// }

// export default NonVeg;



// import { useDispatch, useSelector } from "react-redux";
// import { addTocart } from "./store";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";

// function NonVeg() {
//   let NonVegItems = useSelector((state) => state.products.NonVeg);
//   let dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredItems, setFilteredItems] = useState(NonVegItems);

//   const [filters, setFilters] = useState({
    
//     above200: false,
//     below600: false,
//   });

//   // Handle search on button click or enter key press
//   const handleSearch = () => {
//     let result = NonVegItems.filter((item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     applyPriceFilters(result); // Apply filters after search
//   };

//   // Handle input change
//   const handleSearchTermChange = (e) => {
//     setSearchTerm(e.target.value);
//     if (e.target.value === "") {
//       setFilteredItems(NonVegItems); // Show all items if search is cleared
//     } else {
//       handleSearch();
//     }
//   };

//   // Apply price filters
//   const applyPriceFilters = (items) => {
//     let filteredByPrice = items;

//     if (filters.below600) {
//       filteredByPrice = filteredByPrice.filter((item) => item.price < 100);
//     }
//     if (filters.above200) {
//       filteredByPrice = filteredByPrice.filter((item) => item.price > 200);
//     }

//     setFilteredItems(filteredByPrice);
//   };

//   // Handle price filter checkbox change
//   const handleFilterChange = (e) => {
//     const { name, checked } = e.target;
//     setFilters({ ...filters, [name]: checked });

//     // Apply price filters after checking/unchecking
//     applyPriceFilters(filteredItems);
//   };

//   // Handle Enter key press
//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const finalItems = filteredItems.map((item, index) => (
//     <div key={index} className="col-md-4 text-center mb-4">
//       <div className="card shadow-sm">
//         <img
//           src={item.image}
//           className="card-img-top"
//           alt={item.name}
//           style={{ height: "300px", objectFit: "cover" }}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{item.name}</h5>
//           <p className="card-text">&#8377;{item.price}</p>
//           <button
//             className="btn btn-success"
//             onClick={() => dispatch(addTocart(item))}
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   ));

//   return (
//     <div className="container">
//       &emsp;
//       <h1 className="text-center text-danger my-5">This is NonVeg Section</h1>
      
//       {/* Search and Filter Controls */}
//       <div className="mb-3 d-flex justify-content-center">
//         <input
//           type="text"
//           className="form-control w-50"
//           placeholder="Search NonVeg Items..."
//           value={searchTerm}
//           onChange={handleSearchTermChange} // Update the search term
          
//         />
//         <button className="btn btn-primary" onClick={handleSearch}>
//           Search
//         </button>
//       </div>

//       {/* Price Filters - Checkboxes for below 100 and above 200 */}
//       <div className="mb-3 d-flex justify-content-center">
//         <div className="form-check me-4">

//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             name="above200"
//             checked={filters.above200}
//             onChange={handleFilterChange}
//           />
//           <label className="form-check-label">
//             Above ₹200
//           </label>
//         </div>
//       </div>

//       <input
//             className="form-check-input"
//             type="checkbox"
//             name="below600"
//             checked={filters.below100}
//             onChange={handleFilterChange}
//           />
//           <label className="form-check-label">
//             Below ₹600
//           </label>
//         </div>

//       {/* Display filtered items */}
//       <div className="row justify-content-center">
//         {finalItems.length > 0 ? finalItems : <p>No products found</p>}
//       </div>
//     </div>
//   );
// }

// export default NonVeg;



import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function NonVeg() {
  let NonVegItems = useSelector((state) => state.products.NonVeg);
  let dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(NonVegItems);

  const [filters, setFilters] = useState({
    above200: false,
    below600: false,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Show 3 items per page

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
      setFilteredItems(NonVegItems); // Show all items if search is cleared
    } else {
      handleSearch();
    }
  };

  // Apply price filters
  const applyPriceFilters = (items) => {
    let filteredByPrice = items;

    if (filters.below600) {
      filteredByPrice = filteredByPrice.filter((item) => item.price < 600);
    }
    if (filters.above200) {
      filteredByPrice = filteredByPrice.filter((item) => item.price > 200);
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

  // Paginate items
  const paginateItems = (items, currentPage) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  };

  const finalItems = paginateItems(filteredItems, currentPage).map((item, index) => (
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

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle previous and next page change
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Total pages
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div className="container">
      &emsp;
      <h1 className="text-center text-danger my-5">This is NonVeg Section</h1>

      {/* Search and Filter Controls */}
      <div className="mb-3 d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search NonVeg Items..."
          value={searchTerm}
          onChange={handleSearchTermChange} // Update the search term
          onKeyPress={handleKeyPress} // Trigger search on 'Enter' key press
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Price Filters - Checkboxes for above 200 and below 600 */}
      <div className="mb-3 d-flex justify-content-center">
        <div className="form-check me-4">
          <input
            className="form-check-input"
            type="checkbox"
            name="above200"
            checked={filters.above200}
            onChange={handleFilterChange}
          />
          <label className="form-check-label">
            Above ₹200
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="below600"
            checked={filters.below600}
            onChange={handleFilterChange}
          />
          <label className="form-check-label">
            Below ₹600
          </label>
        </div>
      </div>

      {/* Display filtered items */}
      <div className="row justify-content-center">
        {finalItems.length > 0 ? finalItems : <p>No products found</p>}
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center my-4">
        <button
          className="btn btn-outline-primary mx-1"
          onClick={handlePrevPage}
          disabled={currentPage === 1} // Disable if it's the first page
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`btn btn-outline-primary mx-1 ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="btn btn-outline-primary mx-1"
          onClick={handleNextPage}
          disabled={currentPage === totalPages} // Disable if it's the last page
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default NonVeg;

// function Home()
// {
//     return(
//         <>
//         <div className="text:ce">
//         <h1 style={{color:'green'}}>*....Welcome to akhila shop....*</h1>
//         </div>
//         </>
//     )
// }
// export default Home;




import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <div className="container text-center mt-5">
            <div className="card shadow-lg p-4 border-0 rounded-4">
                <h1 className="text-success fw-bold">⭐ Welcome to Grocories Shop ⭐</h1>
                <p className="text-muted">Your one-stop shop for amazing products!</p>
                <button className="btn btn-success mt-3">Shop Now</button>
            </div>
        </div>
    );
}

export default Home;

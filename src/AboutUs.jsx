// function AboutUs()
// {
//     return(
//         <h1 style={{color:'blue'}}>This is Aboutus.jsx file</h1>
//     )
// }
// export default AboutUs;



import "bootstrap/dist/css/bootstrap.min.css";

function AboutUs() {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">About Us</h1>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg p-4 bg-light">
            <div className="text-center mb-3">
              <i className="bi bi-people-fill text-primary" style={{ fontSize: "3rem" }}></i>
            </div>

            <p className="text-dark text-center">
              Welcome to <strong>Our Company</strong>. We are committed to delivering high-quality 
              products and services to our valued customers. Our mission is to innovate, inspire, 
              and lead in our industry with passion and excellence.
            </p>

            <p className="text-center text-muted">
              Our team consists of professionals dedicated to customer satisfaction and continuous 
              improvement. We believe in integrity, creativity, and teamwork.
            </p>

            <div className="text-center">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

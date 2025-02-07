// // function ContactUs()
// // {
// //     return(
// //         <h1 style={{color:'yellow'}}>This is contactus.jsx file</h1>
// //     )
// // }
// // export default ContactUs;



// import "bootstrap/dist/css/bootstrap.min.css";

// function ContactUs() {
//   return (
//     <div className="container mt-20 bg-light">
//       <h1 className="text-center text-warning mb-4">Contact Us</h1>

//       <div className="row justify-content-center">
//         <div className="col-md-15">
//           <div className="card shadow-sm p-4">
//             <h3 className="text-primary text-center mb-3">Get in Touch</h3>
            
//             <form>
//               <div className="mb-3">
//                 <label className="form-label">Full Name</label>
//                 <input type="text" className="form-control" placeholder="Enter your name" />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">Email Address</label>
//                 <input type="email" className="form-control" placeholder="Enter your email" />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">Message</label>
//                 <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
//               </div>

//               <button type="submit" className="btn btn-primary w-100">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="text-center mt-4">
//         <p className="text-info"><i className="bi bi-envelope-fill"></i> Email: akhila123@gmail.com</p>
//         <p className="text-success"><i className="bi bi-telephone-fill"></i> Phone: +91 6567897698</p>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;



function ContactUs() {
    return (
        <div className="container mt-5 bg-info">
            <h1 className="text-danger p-3 fst-italic text-center">Contact Us</h1>
            <p className="text-center">We'd love to hear from you! Please fill out the form below.</p>

            <div className="card shadow-sm">
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs

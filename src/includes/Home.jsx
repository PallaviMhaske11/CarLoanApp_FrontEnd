import { useNavigate } from "react-router-dom";

function Home()
{

    const navigate= useNavigate();
    function enquiry(){

    navigate("/registerenquiry")

}

    return(
        <div >
        <div className="col-md-5 mt-4 mt-md-0 text-center">
            <img
              src="https://www.pikpng.com/pngl/b/80-806352_mercedes-benz-png-free-download-picsart-car-png.png"
              alt="Car"
               className="w-150 h-20 object-fit-cover"
            />
          </div>
<section className="bg-primary text-white text-center text-md-start py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">Drive Your Dream Car Today</h1>
            <p className="lead mt-3">
              Easy car loans with low interest rates and fast approvals.
            </p>
            <button className="btn btn-light btn-lg mt-3" onClick={()=>enquiry()}>Enquire Now</button>
          </div>
          <div className="col-md-5 mt-4 mt-md-0 text-center">
            <img
              src="https://www.pikpng.com/pngl/b/80-806352_mercedes-benz-png-free-download-picsart-car-png.png"
              alt="Car"
              className="img-fluid rounded-4 shadow"
              
            />
          </div>
        </div>
      </section>

          <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Why Choose Our Car Loans?</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card border-0 shadow-sm p-3">
                <div className="card-body">
                  <i className="bi bi-cash-coin text-primary fs-2"></i>
                  <h5 className="mt-3">Low Interest Rates</h5>
                  <p>Enjoy the best rates in the market for your dream car.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm p-3">
                <div className="card-body">
                  <i className="bi bi-calculator text-primary fs-2"></i>
                  <h5 className="mt-3">Easy EMI Calculator</h5>
                  <p>Get instant EMI estimates and flexible repayment options.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm p-3">
                <div className="card-body">
                  <i className="bi bi-shield-check text-primary fs-2"></i>
                  <h5 className="mt-3">Secure & Trusted</h5>
                  <p>Trusted by thousands of happy car owners across the country.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm p-3">
                <div className="card-body">
                  <i className="bi bi-car-front text-primary fs-2"></i>
                  <h5 className="mt-3">Instant Approvals</h5>
                  <p>Get pre-approved within minutes and drive away hassle-free.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<footer className="py-4 bg-dark text-white text-center">
        <p className="mb-0">
          © {new Date().getFullYear()} CarLoan Co. All rights reserved.
        </p>
      </footer>
        </div>
    )
}

export default Home;
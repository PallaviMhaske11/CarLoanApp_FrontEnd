
function About()
{
   return(
        <div>
            <h1>About Component</h1>

             
    <div>
      {/* HERO SECTION */}
      <section
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        <div className="bg-dark bg-opacity-50 p-5 rounded">
          <h1 className="display-4 fw-bold">About CarLoan Co.</h1>
          <p className="lead">Empowering your journey with flexible car finance solutions</p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Who We Are</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
            CarLoan Co. is a trusted auto financing company helping thousands of customers 
            get behind the wheel of their dream cars. With competitive interest rates, 
            simple documentation, and quick approvals, we make owning a car easier than ever.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm p-4 h-100">
                <div className="card-body">
                  <h3 className="text-primary fw-bold mb-3">Our Mission</h3>
                  <p>
                    To provide accessible, transparent, and affordable car loans 
                    that empower individuals and families to achieve mobility freedom.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm p-4 h-100">
                <div className="card-body">
                  <h3 className="text-primary fw-bold mb-3">Our Vision</h3>
                  <p>
                    To be the most trusted name in car finance by delivering 
                    outstanding customer experiences and financial solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-5">Why Choose Us?</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card border-0 shadow-sm p-3 h-100">
                <i className="bi bi-speedometer2 text-primary fs-2"></i>
                <h5 className="mt-3 fw-semibold">Fast Processing</h5>
                <p>Get instant approvals and quick disbursals with minimal paperwork.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 shadow-sm p-3 h-100">
                <i className="bi bi-cash-coin text-primary fs-2"></i>
                <h5 className="mt-3 fw-semibold">Low Interest</h5>
                <p>We offer some of the most competitive rates in the market.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 shadow-sm p-3 h-100">
                <i className="bi bi-shield-check text-primary fs-2"></i>
                <h5 className="mt-3 fw-semibold">Trusted Service</h5>
                <p>Backed by years of experience and thousands of happy customers.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 shadow-sm p-3 h-100">
                <i className="bi bi-car-front text-primary fs-2"></i>
                <h5 className="mt-3 fw-semibold">Flexible Plans</h5>
                <p>Choose repayment options that fit your lifestyle and budget.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Have Questions?</h2>
          <p className="lead mb-4">
            Our experts are here to help you choose the right car loan plan.
          </p>
          <button className="btn btn-light btn-lg bi bi-telephone"> Contact Us On +91 8598893483</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-4 bg-dark text-white text-center">
        <p className="mb-0">
          © {new Date().getFullYear()} CarLoan Co. | All Rights Reserved
        </p>
      </footer>
    </div>
        </div>
    )
}
    


export default About;
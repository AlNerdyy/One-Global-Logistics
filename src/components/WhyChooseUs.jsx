function WhyChooseUs() {
  return (
    <section className="split-section" id="why">
      <div className="container">
        <div className="split-grid">
          <div className="feature-image">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              alt="Logistics team"
            />
          </div>

          <div className="text-block">
            <p>
              We provide logistics expertise to help improve business operations and reduce
              avoidable delays through organized handling, process visibility, and dependable
              transport support.
            </p>
            <p>
              Our team is committed to streamlining shipping and logistics experiences for
              clients through practical coordination, responsive communication, and service discipline.
            </p>
            <p>
              We work to meet client expectations with consistency, reliability, and fast execution.
              Our goal is to support businesses with service that remains competitive, efficient,
              and results-focused.
            </p>
            <a href="#contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>

        <div className="gallery">
          <div className="img-box">
            <img
              src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&w=900&q=80"
              alt="Ships at port"
            />
          </div>
          <div className="img-box">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80"
              alt="Containers"
            />
          </div>
          <div className="img-box">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80"
              alt="Truck and cargo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
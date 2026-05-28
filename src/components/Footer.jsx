function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3 className="footer-brand">One Global Logistics</h3>
          <p>
            Reliable logistics solutions designed to support efficient operations,
            organized delivery, and long-term business partnerships.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#why">Why Choose Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>+63 2 1234-5678</p>
          <p>info@company.com</p>
          <p>Metro Manila, Philippines</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} One Global Logistics. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
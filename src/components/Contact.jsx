import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

    setStatus({
      submitting: false,
      success: false,
      error: '',
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

    if (!endpoint) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Form endpoint is missing. Please check your .env file.',
      })
      return
    }

    setStatus({
      submitting: true,
      success: false,
      error: '',
    })

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.')
      }

      setStatus({
        submitting: false,
        success: true,
        error: '',
      })

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: error.message || 'Unable to send your message right now.',
      })
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrap">
        <div className="contact-layout">
          <div className="contact-info">
            <h2 className="contact-title">Contact Us</h2>
            <div className="contact-header-line"></div>

            <div className="contact-group">
              <p>If you have any questions, please feel free to contact us.</p>
            </div>

            <div className="contact-group">
              <p><strong>Phone:</strong> +63 2 1234-5678 / +63 2 9876-5432</p>
              <p><strong>Email:</strong></p>
              <ul>
                <li><a href="mailto:info@company.com">info@company.com</a></li>
                <li><a href="mailto:support@company.com">support@company.com</a></li>
                <li><a href="mailto:operations@company.com">operations@company.com</a></li>
                <li><a href="mailto:sales@company.com">sales@company.com</a></li>
              </ul>
            </div>

            <div className="contact-group">
              <h2 className="contact-title office-title">Office Location</h2>
              <p>Unit C12 Ground Floor, Business Center, Metro Manila, Philippines</p>
            </div>

            <div className="contact-group">
              <div className="hours">Hours</div>
              <p>Open today 08:00 am - 05:30 pm</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>
            <p className="form-intro">
              Share your inquiry and our team will get back to you as soon as possible.
            </p>

            {status.success && (
              <div className="form-success">
                Thank you. Your message has been submitted.
              </div>
            )}

            {status.error && (
              <div className="form-error">
                {status.error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Needed</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Freight Handling">Freight Handling</option>
                <option value="Cargo Coordination">Cargo Coordination</option>
                <option value="Transport Planning">Transport Planning</option>
                <option value="Delivery Management">Delivery Management</option>
                <option value="Warehousing Support">Warehousing Support</option>
                <option value="Documentation Support">Documentation Support</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us how we can help"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Submit Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
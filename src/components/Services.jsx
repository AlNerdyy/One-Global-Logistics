const services = [
  {
    title: 'Freight Handling',
    description:
      'Coordinated freight movement support for goods that need reliable pickup, handling, and delivery.',
  },
  {
    title: 'Cargo Coordination',
    description:
      'Organized cargo planning and monitoring to help clients manage shipments across different points.',
  },
  {
    title: 'Transport Planning',
    description:
      'Practical transport support designed around route planning, scheduling, and operational needs.',
  },
  {
    title: 'Delivery Management',
    description:
      'End-to-end delivery coordination focused on timely execution and clear communication.',
  },
  {
    title: 'Warehousing Support',
    description:
      'Support for storage, inventory movement, and warehouse-related logistics coordination.',
  },
  {
    title: 'Documentation Support',
    description:
      'Assistance with shipment-related documentation to help keep logistics processes organized.',
  },
]

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <span className="eyebrow">Our Services</span>
          <h2>Reliable logistics support for your business operations</h2>
          <p>
            We help businesses move goods efficiently through practical transport,
            cargo coordination, delivery management, and logistics support.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
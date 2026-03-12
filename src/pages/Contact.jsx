import Hero from '../components/Hero'
import { contactContent, contactDetails } from '../data/siteContent'

function Contact() {
  return (
    <>
      <Hero
        description="Connect with our sales, service, and engineering teams for product consultations, software demos, or support planning."
        eyebrow="Customer Support"
        image={contactContent.heroImage}
        imageAlt="Contact support placeholder"
        theme="mist"
        title="Contact Us"
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-stack">
            <article className="contact-card">
              <h3>Address</h3>
              <div className="contact-detail-groups">
                {contactDetails.addresses.map((address) => (
                  <div key={address.title} className="contact-detail-block">
                    <h4>{address.title}</h4>
                    {address.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                ))}
              </div>
            </article>

            <article className="contact-card">
              <h3>Contact Info</h3>
              <div className="contact-detail-groups">
                <div className="contact-detail-block">
                  <h4>Phone</h4>
                  {contactDetails.phones.map((phone) => (
                    <p key={phone}>
                      <a className="contact-detail-link" href={`tel:${phone.replace(/\s+/g, '')}`}>
                        {phone}
                      </a>
                    </p>
                  ))}
                </div>

                <div className="contact-detail-block">
                  <h4>Email</h4>
                  {contactDetails.emails.map((email) => (
                    <p key={email}>
                      <a className="contact-detail-link" href={`mailto:${email}`}>
                        {email}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <form className="contact-form">
            <div className="contact-form__grid">
              <div className="contact-form__field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="Your full name" type="text" />
              </div>

              <div className="contact-form__field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" placeholder="name@company.com" type="email" />
              </div>

              <div className="contact-form__field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" placeholder="+91 ..." type="tel" />
              </div>

              <div className="contact-form__field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" placeholder="Organization" type="text" />
              </div>

              <div className="contact-form__field contact-form__field--full">
                <label htmlFor="message">Project Brief</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about the chamber, software, or support requirement."
                />
              </div>
            </div>

            <div className="hero__actions">
              <button className="button button--solid" type="button">
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="section">
        <div className="container location-grid">
          {contactContent.locations.map((location) => (
            <article key={location.title} className="contact-card">
              <h3>{location.title}</h3>
              <p>{location.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="map-card">
            <img src={contactContent.mapImage} alt="Facility map placeholder" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

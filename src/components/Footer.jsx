import { contactDetails, navLinks } from '../data/siteContent'
import logo from '../assets/images/logo.svg'

function Footer({ navigate }) {
  const footerNavLinks = navLinks.filter((link) => link.path !== '/')

  return (
    <footer className="footer">
      <section className="footer-main">
        <div className="container container--wide footer-main__layout">
          <nav className="footer-links" aria-label="Footer navigation">
            {footerNavLinks.map((link) => (
              <button
                key={link.path}
                className="footer-link"
                type="button"
                onClick={() => navigate(link.path)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="footer-main__grid">
            <div className="footer-main__column">
              <div className="footer-contact-group">
                <h3 className="footer-contact-group__title">Address</h3>
                <div className="footer-panel footer-panel--stack">
                  {contactDetails.addresses.map((address) => (
                    <div key={address.title} className="footer-panel__section">
                      <strong>{address.title}</strong>
                      {address.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="footer-main__column footer-main__column--center">
              <div className="footer-brand">
                <img className="footer-brand__logo" src={logo} alt="Indo Climatecare Pvt Ltd." />
              </div>

              <div className="footer-socials" aria-label="Social links">
                <span className="footer-social" aria-hidden="true">
                  YT
                </span>
                <span className="footer-social" aria-hidden="true">
                  in
                </span>
              </div>
            </div>

            <div className="footer-main__column">
              <div className="footer-contact-group">
                <h3 className="footer-contact-group__title">Contact Info</h3>
                <div className="footer-panel footer-panel--stack">
                  <div className="footer-panel__section">
                    <strong>Phone</strong>
                    {contactDetails.phones.map((phone) => (
                      <a
                        key={phone}
                        className="footer-contact-link"
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                      >
                        {phone}
                      </a>
                    ))}
                  </div>

                  <div className="footer-panel__section">
                    <strong>Email</strong>
                    {contactDetails.emails.map((email) => (
                      <a key={email} className="footer-contact-link" href={`mailto:${email}`}>
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">© 2026 Indo Climatecare Pvt Ltd. All rights reserved.</p>
            <div className="footer-legal" aria-label="Legal links">
              <span>Privacy Policy</span>
              <span>Disclaimer</span>
              <span>Catalogue</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer

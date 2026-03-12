import {
  contactDetails,
  footerKeywords,
  footerPromos,
  navLinks,
} from '../data/siteContent'
import logo from '../assets/images/logo.svg'

function Footer({ navigate }) {
  const repeatedKeywords = [...footerKeywords, ...footerKeywords]

  return (
    <footer className="footer">
      <section className="footer-promo">
        {footerPromos.map((promo) => (
          <div
            key={promo.title}
            className={`footer-promo__card footer-promo__card--${promo.tone}`}
          >
            <p className="footer-promo__eyebrow">{promo.eyebrow}</p>
            <h2 className="footer-promo__title">{promo.title}</h2>
            <button
              className="button button--outline"
              type="button"
              onClick={() => navigate(promo.path)}
            >
              View All
            </button>
          </div>
        ))}
      </section>

      <div className="ticker" aria-label="Company highlights">
        <div className="ticker__track">
          {repeatedKeywords.map((keyword, index) => (
            <span key={`${keyword}-${index}`} className="ticker__item">
              {keyword}
            </span>
          ))}
        </div>
      </div>

      <section className="footer-main">
        <div className="container footer-main__grid">
          <div className="footer-main__column">
            <div className="footer-contact-group">
              <h3 className="footer-contact-group__title">Address</h3>
              <div className="footer-contact-stack">
                {contactDetails.addresses.map((address) => (
                  <div key={address.title} className="footer-box footer-box--contact">
                    <strong>{address.title}</strong>
                    {address.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <p className="footer-copy">© 2026 Indo Climatecare Pvt Ltd. All rights reserved.</p>
          </div>

          <div className="footer-main__column footer-main__column--center">
            <div className="footer-box footer-box--nav">
              <div className="footer-links">
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    className="footer-link"
                    type="button"
                    onClick={() => navigate(link.path)}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="footer-box footer-box--cta">
              <button
                className="footer-contact-button"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </button>
            </div>

            <div className="footer-box footer-box--logo">
              <div className="footer-brand">
                <img className="footer-brand__logo" src={logo} alt="Indo Climatecare Pvt Ltd." />
              </div>
            </div>

            <div className="footer-box footer-box--social">
              <div className="footer-socials" aria-label="Social links">
                <span className="footer-social">YT</span>
                <span className="footer-social">IN</span>
              </div>
            </div>
          </div>

          <div className="footer-main__column">
            <div className="footer-contact-group">
              <h3 className="footer-contact-group__title">Contact Info</h3>
              <div className="footer-contact-stack">
                <div className="footer-box footer-box--contact">
                  <strong>Phone</strong>
                  {contactDetails.phones.map((phone) => (
                    <a key={phone} className="footer-contact-link" href={`tel:${phone.replace(/\s+/g, '')}`}>
                      {phone}
                    </a>
                  ))}
                </div>

                <div className="footer-box footer-box--contact">
                  <strong>Email</strong>
                  {contactDetails.emails.map((email) => (
                    <a key={email} className="footer-contact-link" href={`mailto:${email}`}>
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="footer-legal">
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

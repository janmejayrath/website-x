import Hero from '../components/Hero'
import { softwareContent } from '../data/siteContent'

function Software({ navigate }) {
  return (
    <>
      <Hero
        description="We provide precise and innovative software solutions for stability operations, task visibility, and validated records."
        image={softwareContent.heroImage}
        primaryAction={{ label: 'Request Demo', onClick: () => navigate('/contact') }}
        title="Software"
        variant="overlay"
      />

      <section className="section section--tight">
        <div className="container software-tabs" aria-label="Software suite">
          {softwareContent.tabs.map((tab, index) => (
            <span
              key={tab}
              className={`software-tabs__item ${index === 0 ? 'is-active' : ''}`}
            >
              {tab}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container content-split">
          <div className="software-copy">
            <h2>ICDAS 3.1</h2>
            <h3>Access Anywhere Anytime.</h3>
            <p>
              The ICDAS platform centralizes chamber management, improves operational
              visibility, and supports paperless monitoring across local and remote
              teams.
            </p>

            <h3>Key Benefits</h3>
            <ul className="bullet-grid">
              {softwareContent.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="diagram-panel">
            <img src={softwareContent.diagramImage} alt="ICDAS software diagram placeholder" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-hub">
          <div className="feature-stack">
            {softwareContent.featureGroups.left.map((item) => (
              <div
                key={item.label}
                className={`feature-stack__item ${item.active ? 'is-active' : ''}`}
              >
                <span>{item.label}</span>
                <span className="feature-stack__icon">{item.code}</span>
              </div>
            ))}
          </div>

          <article className="feature-hub__core">
            <div className="feature-hub__icon">{softwareContent.activeFeature.icon}</div>
            <h3>{softwareContent.activeFeature.title}</h3>
            <p>{softwareContent.activeFeature.text}</p>

            <ul className="feature-hub__list">
              {softwareContent.activeFeature.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>

          <div className="feature-stack">
            {softwareContent.featureGroups.right.map((item) => (
              <div key={item.label} className="feature-stack__item">
                <span>{item.label}</span>
                <span className="feature-stack__icon">{item.code}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-header__eyebrow">Software</p>
            <h2 className="section-header__title">Architecture</h2>
          </div>

          <div className="map-card">
            <img
              src={softwareContent.architectureImage}
              alt="Software architecture placeholder"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Software

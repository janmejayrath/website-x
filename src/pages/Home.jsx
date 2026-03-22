import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { homeContent } from '../data/siteContent'

function Home({ navigate }) {
  return (
    <>
      <Hero
        variant="carousel"
        eyebrow="Precision Controlled"
        description="Validated environmental systems for pharmaceutical, research, and quality-critical operations."
        primaryAction={{ label: 'Explore Products', onClick: () => navigate('/products') }}
        title="Walk In Chambers"
      />

      <section className="section section--tight">
        <div className="container action-strip">
          <button className="button button--outline" type="button">
            Catalogues
          </button>
          <button className="button button--outline" type="button">
            Form 483
          </button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-preview">
            <div className="about-preview__media">
              <img src={homeContent.aboutImage} alt="Indo Climatecare Pvt Ltd. overview" />
            </div>
            <div className="about-preview__body">
              <p className="section-header__eyebrow">About Us</p>
              <h2>Established In 1980</h2>
              <p>
                Indo Climatecare Pvt Ltd. has grown into a trusted laboratory equipment
                manufacturer by combining controlled engineering, disciplined process
                execution, and dependable after-sales support.
              </p>
              <div className="hero__actions">
                <button className="button button--outline" type="button" onClick={() => navigate('/about')}>
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-header__eyebrow">Our Cutting Edge</p>
            <h2 className="section-header__title">Technology</h2>
          </div>

          <div className="technology-grid">
            {homeContent.technologies.map((item) => (
              <article key={item.title} className="technology-card">
                <div className="technology-card__icon">{item.badge}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            className="video-banner"
            style={{ backgroundImage: `url(${homeContent.videoImage})` }}
          >
            <div className="video-banner__content">
              <button className="video-banner__play" type="button" aria-label="Play corporate presentation">
                ▶
              </button>
              <h3>Watch Corporate Presentation</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-header__eyebrow">Our Cutting Edge</p>
            <h2 className="section-header__title">Products</h2>
          </div>

          <div className="tab-row" aria-label="Product categories">
            {homeContent.productTabs.map((tab, index) => (
              <span
                key={tab}
                className={`tab-row__item ${index === 0 ? 'is-active' : ''}`}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="product-grid section--tight">
            {homeContent.featuredProducts.map((product) => (
              <ProductCard
                key={product.title}
                ctaLabel="View Range"
                image={product.image}
                onCtaClick={() => navigate('/products')}
                subtitle={product.subtitle}
                title={product.title}
              />
            ))}
          </div>

          <div className="action-strip">
            <button className="button button--outline" type="button" onClick={() => navigate('/products')}>
              View All
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

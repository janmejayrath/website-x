import Hero from '../components/Hero'
import { aboutContent } from '../data/siteContent'

const applicationAreas = [
  'Pharmaceuticals',
  'Biotechnology',
  'Food',
  'Cosmetics',
  'Bulk drugs',
  'Life sciences',
  'Chemicals',
  'Blood banks',
  'Hospitals',
  'Colleges',
  'Agriculture',
  'Tissue culture research',
  'Research laboratories',
]

const coreValues = [
  'Innovation',
  'Customer delight',
  'Teamwork',
  'Integrity',
  'Leadership by example',
  'Professionalism',
]

function About() {
  return (
    <main className="about-page">
      <Hero
        description="Indo Climatecare Pvt. Ltd. manufactures and supplies laboratory and clean room equipment for pharmaceutical, research, and process-critical environments."
        eyebrow="Indo Climatecare Pvt. Ltd."
        image={aboutContent.heroImage}
        imageAlt="Indo Climatecare Pvt Ltd. building placeholder"
        theme="mist"
        title="About Us"
      />

      <section className="section" aria-labelledby="about-overview-title">
        <div className="container about-page__stack">
          <header className="section-header section-header--left">
            <p className="section-header__eyebrow">About Us</p>
            <h2 id="about-overview-title" className="section-header__title">
              Laboratory and Clean Room Equipment
            </h2>
          </header>

          <div className="about-page__copy">
            <p>
              Indo Climatecare Pvt. Ltd. is a manufacturer and supplier of laboratory and
              clean room equipment, including stability chambers, low temperature chambers,
              ovens, laboratory refrigerators, environmental chambers, dehumidifiers,
              laminar airflow units, and related clean room systems.
            </p>
            <p>
              Its plant and process equipment supports operational, process, storage, and
              shelf-life study requirements across regulated and research-driven
              industries.
            </p>
            <p>
              These applications span pharmaceuticals, biotechnology, food, cosmetics,
              bulk drugs, life sciences, chemicals, blood banks, hospitals, colleges,
              agriculture, tissue culture research, and research laboratories.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="application-areas-title">
        <div className="container about-page__stack">
          <header className="section-header section-header--left">
            <p className="section-header__eyebrow">Application Area</p>
            <h2 id="application-areas-title" className="section-header__title">
              Industries We Serve
            </h2>
          </header>

          <p className="about-page__lead">
            Indo Climatecare offers laboratory and clean room equipment for a wide range
            of industries and use cases, including:
          </p>

          <ul className="about-list">
            {applicationAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="company-principles-title">
        <div className="container about-page__stack">
          <header className="section-header section-header--left">
            <p className="section-header__eyebrow">Storage Solutions</p>
            <h2 id="company-principles-title" className="section-header__title">
              Engineered for the Future of Pharma
            </h2>
          </header>

          <div className="about-page__sections">
            <article className="about-card">
              <h3>Vision</h3>
              <p>
                To become one of the world&apos;s leading laboratory equipment manufacturers
                through cutting-edge technology and complete customer satisfaction.
              </p>
            </article>

            <article className="about-card">
              <h3>Core Values</h3>
              <p>
                Built on more than 40 years of legacy, the company highlights the values
                that have helped it earn long-term trust.
              </p>
              <ul className="about-list about-list--compact">
                {coreValues.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </article>

            <article className="about-card">
              <h3>The Team</h3>
              <p>
                Indo Climatecare describes its team as united by leadership,
                collaboration, and innovation.
              </p>
              <p>
                The company emphasizes the respect, sincerity, and experience of its
                people, along with a culture of sharing and openness that encourages team
                members to perform at their highest level.
              </p>
            </article>

            <article className="about-card">
              <h3>Services</h3>
              <p>
                Alongside engineering and product excellence, Indo Climatecare focuses on
                creating a positive customer experience through prompt and efficient
                service.
              </p>
              <p>
                It views customers as its greatest asset and seeks growth by
                understanding and meeting their needs, requirements, and expectations.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About

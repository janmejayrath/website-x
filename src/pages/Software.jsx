import { useState } from 'react'
import Hero from '../components/Hero'
import { softwareContent } from '../data/siteContent'

function getDefaultFeatureCode(tab) {
  const leftActive = tab?.featureGroups?.left?.find((item) => item.active)?.code
  const rightActive = tab?.featureGroups?.right?.find((item) => item.active)?.code
  const leftFirst = tab?.featureGroups?.left?.[0]?.code
  const rightFirst = tab?.featureGroups?.right?.[0]?.code

  return leftActive || rightActive || leftFirst || rightFirst || ''
}

function Software({ navigate }) {
  const tabs = softwareContent.tabs
  const [activeTabKey, setActiveTabKey] = useState(() => softwareContent.tabs[0]?.key ?? '')
  const activeTab =
    tabs.find((tab) => tab.key === activeTabKey) ?? tabs[0] ?? null
  const [activeFeatureCode, setActiveFeatureCode] = useState(() =>
    getDefaultFeatureCode(softwareContent.tabs[0]),
  )

  if (!activeTab) {
    return null
  }

  const activeFeature =
    activeTab.features?.[activeFeatureCode] ??
    activeTab.features?.[getDefaultFeatureCode(activeTab)] ??
    activeTab.activeFeature

  return (
    <div className="software-page">
      <Hero
        description="We provide precise and innovative software solutions for stability operations, task visibility, and validated records."
        image={softwareContent.heroImage}
        primaryAction={{ label: 'Request Demo', onClick: () => navigate('/contact') }}
        title="Software"
        variant="overlay"
      />

      <section className="section section--tight">
        <div className="container software-tabs" role="tablist" aria-label="Software suite">
          {softwareContent.tabs.map((tab) => (
            <button
              key={tab.key}
              id={`software-tab-${tab.key}`}
              className={`software-tabs__item ${tab.key === activeTab.key ? 'is-active' : ''}`}
              type="button"
              role="tab"
              aria-selected={tab.key === activeTab.key}
              aria-controls="software-panel"
              onClick={() => {
                setActiveTabKey(tab.key)
                setActiveFeatureCode(getDefaultFeatureCode(tab))
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      <div id="software-panel" role="tabpanel" aria-labelledby={`software-tab-${activeTab.key}`}>
        <section className="section">
          <div className="container content-split">
            <div className="software-copy">
              <h2>{activeTab.title}</h2>
              {activeTab.subtitle ? <h3>{activeTab.subtitle}</h3> : null}
              {(Array.isArray(activeTab.description) ? activeTab.description : [activeTab.description])
                .filter(Boolean)
                .map((text, index) => (
                  <p key={`${activeTab.key}-description-${index}`}>{text}</p>
                ))}

              <h3>Key Benefits</h3>
              <ul className="bullet-grid">
                {activeTab.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="diagram-panel diagram-panel--contain">
              <img src={activeTab.diagramImage} alt={activeTab.diagramAlt} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container feature-hub">
            <div className="feature-stack">
              {activeTab.featureGroups.left.map((item) => (
                <button
                  key={item.code}
                  className={`feature-stack__item ${item.code === activeFeatureCode ? 'is-active' : ''}`}
                  type="button"
                  aria-pressed={item.code === activeFeatureCode}
                  onClick={() => setActiveFeatureCode(item.code)}
                >
                  <span>{item.label}</span>
                  <span className="feature-stack__icon">{item.code}</span>
                </button>
              ))}
            </div>

            {activeFeature ? (
              <article className="feature-hub__core">
                <div className="feature-hub__icon">{activeFeature.icon}</div>
                <h3>{activeFeature.title}</h3>
                {activeFeature.text ? <p>{activeFeature.text}</p> : null}

                {activeFeature.bullets?.length ? (
                  <ul className="feature-hub__list">
                    {activeFeature.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ) : null}

            <div className="feature-stack">
              {activeTab.featureGroups.right.map((item) => (
                <button
                  key={item.code}
                  className={`feature-stack__item ${item.code === activeFeatureCode ? 'is-active' : ''}`}
                  type="button"
                  aria-pressed={item.code === activeFeatureCode}
                  onClick={() => setActiveFeatureCode(item.code)}
                >
                  <span>{item.label}</span>
                  <span className="feature-stack__icon">{item.code}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <p className="section-header__eyebrow">{activeTab.label}</p>
              <h2 className="section-header__title">Architecture</h2>
            </div>

            <div className="map-card">
              <img src={activeTab.architectureImage} alt={activeTab.architectureAlt} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Software

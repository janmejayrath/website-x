import { useEffect, useState } from 'react'
import hero1 from '../assets/images/hero1.jpg'
import hero2 from '../assets/images/hero2.jpg'
import hero3 from '../assets/images/hero3.jpg'

const carouselImages = [hero1, hero2, hero3]

function Hero({
  variant = 'split',
  theme = 'lilac',
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  visual,
  primaryAction,
  secondaryAction,
  overlayText,
  children,
}) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (variant !== 'carousel') {
      return undefined
    }

    const rotation = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % carouselImages.length)
    }, 3000)

    return () => {
      window.clearInterval(rotation)
    }
  }, [variant])

  if (variant === 'carousel') {
    return (
      <section className={`hero hero--carousel hero--${theme}`}>
        <div className="hero__carousel" aria-hidden="true">
          {carouselImages.map((carouselImage, index) => (
            <div
              key={carouselImage}
              className={`hero__carousel-slide ${index === activeSlide ? 'is-active' : ''}`}
              style={{ backgroundImage: `url(${carouselImage})` }}
            />
          ))}
        </div>

        <div className="container hero__inner">
          <div className="hero__carousel-layout">
            <div className="hero__carousel-content">
              {eyebrow ? <p className="hero__eyebrow">{eyebrow}</p> : null}
              <h1 className="hero__title">{title}</h1>
              {description ? <p className="hero__description">{description}</p> : null}

              {(primaryAction || secondaryAction) && (
                <div className="hero__actions">
                  {primaryAction ? (
                    <button className="button button--ghost" type="button" onClick={primaryAction.onClick}>
                      {primaryAction.label}
                    </button>
                  ) : null}
                  {secondaryAction ? (
                    <button className="button button--outline" type="button" onClick={secondaryAction.onClick}>
                      {secondaryAction.label}
                    </button>
                  ) : null}
                </div>
              )}

              <div className="hero__carousel-nav" aria-label="Hero slide controls">
                <button
                  className="hero__slider-button"
                  type="button"
                  onClick={() =>
                    setActiveSlide((currentSlide) =>
                      currentSlide === 0 ? carouselImages.length - 1 : currentSlide - 1,
                    )
                  }
                >
                  ‹
                </button>
                <button
                  className="hero__slider-button"
                  type="button"
                  onClick={() =>
                    setActiveSlide((currentSlide) => (currentSlide + 1) % carouselImages.length)
                  }
                >
                  ›
                </button>
              </div>

              <div className="hero__carousel-dots" aria-hidden="true">
                {carouselImages.map((carouselImage, index) => (
                  <span
                    key={`${carouselImage}-dot`}
                    className={`hero__carousel-dot ${index === activeSlide ? 'is-active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'overlay') {
    return (
      <section className={`hero hero--overlay hero--${theme}`}>
        <div className="hero__background" style={{ backgroundImage: `url(${image})` }} />
        <div className="container hero__inner">
          <div className="hero__overlay-panel">
            {eyebrow ? <p className="hero__eyebrow">{eyebrow}</p> : null}
            <h1 className="hero__overlay-title">{title}</h1>
            {overlayText || description ? (
              <p className="hero__description">{overlayText || description}</p>
            ) : null}
            {(primaryAction || secondaryAction) && (
              <div className="hero__actions">
                {primaryAction ? (
                  <button className="button button--ghost" type="button" onClick={primaryAction.onClick}>
                    {primaryAction.label}
                  </button>
                ) : null}
                {secondaryAction ? (
                  <button className="button button--outline" type="button" onClick={secondaryAction.onClick}>
                    {secondaryAction.label}
                  </button>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`hero hero--split hero--${theme}`}>
      <div className="container hero__inner">
        <div className="hero__grid">
          <div className="hero__content">
            {eyebrow ? <p className="hero__eyebrow">{eyebrow}</p> : null}
            <h1 className="hero__title">{title}</h1>
            {description ? <p className="hero__description">{description}</p> : null}

            {(primaryAction || secondaryAction) && (
              <div className="hero__actions">
                {primaryAction ? (
                  <button className="button button--outline" type="button" onClick={primaryAction.onClick}>
                    {primaryAction.label}
                  </button>
                ) : null}
                {secondaryAction ? (
                  <button className="button button--solid" type="button" onClick={secondaryAction.onClick}>
                    {secondaryAction.label}
                  </button>
                ) : null}
              </div>
            )}

            {children}
          </div>

          <div className="hero__visual">
            <div className="hero__visual-card">
              {visual ?? (image ? <img src={image} alt={imageAlt} /> : null)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

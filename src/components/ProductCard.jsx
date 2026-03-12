function ProductCard({
  image,
  title,
  subtitle,
  variant = 'feature',
  ctaLabel,
  onCtaClick,
}) {
  return (
    <article className={`product-card product-card--${variant}`}>
      <div className="product-card__media">
        <img src={image} alt={title} />
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{title}</h3>
        {subtitle ? <p className="product-card__subtitle">{subtitle}</p> : null}
        {ctaLabel ? (
          <button className="button button--outline" type="button" onClick={onCtaClick}>
            {ctaLabel}
          </button>
        ) : null}
      </div>
    </article>
  )
}

export default ProductCard

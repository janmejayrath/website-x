import { useMemo, useState } from 'react'
import deepFreezer from '../assets/products/Deep-Freezer.jpg'
import deepFreezerMinus30 from '../assets/products/Deep-Freezer-1.jpg'
import dualBodIncubator from '../assets/products/Dual-BOD-Incubator.jpg'
import hotAirOven from '../assets/products/Hot-Air-Oven-new.jpg'
import incubator from '../assets/products/Incubator.jpg'
import pharmaRefrigerator from '../assets/products/Pharma-Refrigerator.jpg'
import photostabilityChamber from '../assets/products/Photostability-Chamber-rcfvg.jpg'
import reachInBodChamber from '../assets/products/Reach-in-BOD-Chamber.jpg'
import uvSterilizationChamber from '../assets/products/UV-STERILIZATION-Chamber.jpg'
import vacuumOven from '../assets/products/Vacuum-Oven.jpg'
import walkinCoolingChamber from '../assets/products/Walkin-Cooling-Chamber.jpg'
import walkinHumidityChamber from '../assets/products/Walkin-Humidity-Chamber.jpg'
import productPlaceholder from '../assets/products/woocommerce-placeholder.png'

const catalogItems = [
  {
    title: 'Reach In – Stability (Humidity) Chamber',
    description:
      'Stability chambers are designed to create artificially replicating conditions for the medicines that might be exposed in various environmental conditions. Sometimes it is used to accelerate the effects of exposure to atmospheric conditions that may be adverse in any area where this medicine may store. Atom make Stability(Humidity) Chambers are perfectly designed for the requirements of stability studies and climatic tests. These Stability Chambers are specifically developed to meet FDA/ICH stability requirements for accurate control and uniformity of both temperature and humidity. Atom make Stability Chambers feature’s various safety, audio visual alarms, 21 CFR part 11 software and a vast range of options and is the most preferred choice for stability studies. Each Atom make Stability Chamber’s have been specifically developed to meet the requirements of test laboratories in the pharmaceutical industries.',
    image: reachInBodChamber,
    badge: 'New',
  },
  {
    title: 'Walk In – Stability (Humidity) Chamber',
    description:
      'Walk-In Stability chambers are designed to create artificially replicating conditions for the medicines that might be exposed in various environmental conditions. Sometimes it is used to accelerate the effects of exposure to atmospheric conditions that may be adverse in any area where this medicine may store. Atom make Walk-In Stability(Humidity) Chambers are perfectly designed for the requirements of stability studies and climatic tests. These Walk-In Stability Chambers are specifically developed to meet FDA/ICH stability requirements for accurate control and uniformity of both temperature and humidity. Atom make Walk-In Stability Chambers feature’s various safety, audio visual alarms, 21 CFR part 11 software and a vast range of options and is the most preferred choice for stability studies. Each Atom make Walk-In Stability Chamber’s have been specifically developed to meet the requirements of test laboratories in the pharmaceutical industries.',
    image: walkinHumidityChamber,
  },
  {
    title: 'Reach In – Incubator',
    description:
      'An incubator is a device used to grow and maintain microbiological cultures or cell cultures. The incubator maintains optimal temperature, humidity and other conditions such as the CO2 and oxygen content of the atmosphere inside. Incubators are essential for much experimental work in cell biology, microbiology and molecular biology and are used to culture both bacterial and eukaryotic cells. Atom make Incubator’s are perfectly designed for the growth & storage of bacterial cultures, gentle incubation & conditioning and Media Preparation. These Incubator’s are specifically developed to meet FDA/ICH stability requirements for accurate control and uniformity of temperature. Atom make Incubator’s ensure consistent performance at any temperature within a range of 5°C to 60°C at an accuracy of ±0.5°C & at an uniformity of ±1°C. Atom make Incubator’s feature’s various safety, audio visual alarms, 21 CFR part 11 software and a vast range of options.',
    image: reachInBodChamber,
  },
  {
    title: 'Walk In – Incubator',
    description:
      'An incubator is a device used to grow and maintain microbiological cultures or cell cultures. The incubator maintains optimal temperature, humidity and other conditions such as the CO2 and oxygen content of the atmosphere inside. Incubators are essential for much experimental work in cell biology, microbiology and molecular biology and are used to culture both bacterial and eukaryotic cells. Atom make Walk In Incubator’s are perfectly designed for the growth & storage of bacterial cultures, gentle incubation & conditioning and Media Preparation. These Incubator’s are specifically developed to meet FDA/ICH stability requirements for accurate control and uniformity of temperature. Atom make Walk In Incubator’s ensure consistent performance at any temperature within a range of 5°C to 60°C at an accuracy of ±0.5°C & at an uniformity of ±1°C. Atom make Walk In Incubator’s feature’s various safety, audio visual alarms, 21 CFR part software and a vast range of options.',
    image: incubator,
  },
  {
    title: 'Dual BOD Incubators',
    description:
      'Atom make Dual BOD Incubator’s are perfectly designed for the growth & storage of bacterial cultures, gentle incubation & conditioning and Media Preparation. These Incubator’s are specifically developed to meet FDA/ICH stability requirements for accurate control and uniformity of temperature. Atom make Dual BOD Incubator’s ensure consistent performance at any temperature within a range of 5°C to 60°C at an accuracy of ±0.5°C & at an uniformity of ±1°C. Atom make Dual BOD Incubator’s feature’s various safety, audio visual alarms, 21 CFR part 11 software and a vast range of options.',
    image: dualBodIncubator,
  },
  {
    title: 'Plant Growth Chamber',
    description:
      'Atom make Plant Growth Chambers are designed to provide an artificial environment for the growth of plants. They provide the correct illumination and temperature. Various types of plants can be studied at many stages of growth. These chambers are widely used for studies of physiology, genetics and propagation. Plant Growth Chambers are controlled by microprocessor. Plant Growth Chambers are manufactured in exacting standards for accurate simulation of light and temperature. Plant Growth Chambers are designed to provide a controlled environment for plants and in agriculture for a variety of applications.',
    image: photostabilityChamber,
  },
  {
    title: 'Walk In Stability Chamber',
    description:
      'Atom make Walk-in Stability Chambers are designed to create artificially replicating conditions for the medicines that might be exposed in various environmental conditions. Sometimes it is used to accelerate the effects of exposure to atmospheric conditions that may be adverse in any area where this medicine may store. Atom make Walk-in Stability Chambers are perfectly designed for the requirements of stability studies and climatic tests. These Walk-in Stability Chambers are specifically developed to meet FDA/ICH stability requirements for accurate control and uniformity of both temperature and humidity. Atom make Walk-in Stability Chambers feature’s various safety, audio visual alarms, 21 CFR part 11 software and a vast range of options and is the most preferred choice for stability studies. Each Atom make Walk-in Stability Chamber’s have been specifically developed to meet the requirements of test laboratories in the pharmaceutical industries.',
    image: walkinCoolingChamber,
  },
  {
    title: 'Pharma Refrigerator',
    description:
      'Atom make Pharma Refrigerators are designed for the storage of medicines, vaccines, blood, biological samples etc. These refrigerators are specifically developed to meet the requirements of storage at 2°C to 8°C with an accuracy of ±2°C & uniformity of ±3°C. Atom make Pharma Refrigerators features various safety, audio visual alarms, 21 CFR part 11 software and a vast range of options. Atom make Pharma Refrigerators are most preferred choice for the storage of medicines, vaccines, blood, biological samples etc. These refrigerators are designed to store at 2°C to 8°C with high reliability.',
    image: pharmaRefrigerator,
  },
  {
    title: 'Deep Freezer',
    description:
      'Atom make Deep Freezers are designed for the storage of medicines, vaccines, blood, biological samples etc. These freezers are specifically developed to meet the requirements of storage at -20°C to -30°C with an accuracy of ±2°C & uniformity of ±3°C. Atom make Deep Freezers features various safety, audio visual alarms, 21 CFR part 11 software and a vast range of options. Atom make Deep Freezers are most preferred choice for the storage of medicines, vaccines, blood, biological samples etc. These freezers are designed to store at -20°C to -30°C with high reliability.',
    image: deepFreezer,
  },
  {
    title: 'Photostability Chamber',
    description:
      'Atom make Photostability Chambers are designed to create artificially replicating conditions for the medicines that might be exposed in various environmental conditions. These chambers provide the correct illumination and temperature. Atom make Photostability Chambers are perfectly designed for the requirements of photostability studies. These Photostability Chambers are specifically developed to meet FDA/ICH stability requirements for accurate control and uniformity of both temperature and illumination. Atom make Photostability Chambers feature’s various safety, audio visual alarms, 21 CFR part 11 software and a vast range of options and is the most preferred choice for photostability studies.',
    image: photostabilityChamber,
  },
  {
    title: 'Vacuum Oven',
    description:
      'Atom make Vacuum Ovens are designed for the drying of heat sensitive materials. Vacuum drying is a gentle and safe method for drying materials. Vacuum drying can also be used for drying materials that contain solvents. Vacuum drying is achieved by lowering the pressure and temperature. This method ensures that a high-grade product that contains water or a solvent is gently dried without endangering the materials. Vacuum drying in a vacuum drying chamber is particularly recommended for compounds containing flammable solvents. Due to the oxygen in the air in particular, these compounds often develop an explosive atmosphere during the drying process. This is prevented when dried in a vacuum drying chamber. Vacuum drying also minimises the risk of scaling or oxidation residue.',
    image: vacuumOven,
    badge: 'Sale',
  },
  {
    title: 'Deep freezer (-30ºC)',
    description:
      'Double-walled with PUF insulation Interior: SS 304, Exterior: Mild Steel Stainless Steel trays Leak-proof door with magnetic gasket Forced air circulation for uniform temperature PU wheels for easy movement CFC-free cooling system with sealed compressor, evaporation coil & condenser PID control with data logging (up to 1,000 readings) Ethernet-based communication PT-100 sensor for precise temperature monitoring Safety features: Low temp cut-off, audio/visual alarms Documentation: Includes DQ, IQ, OQ, PQ, SOP & Maintenance Manual Power supply: 230V 50 Hz (optional 60 Hz available).',
    image: deepFreezerMinus30,
  },
  {
    title: 'Laboratory Oven',
    description:
      'Equipment Specifications: Double-walled construction with PUF insulation for thermal efficiency. Interior: SS 304 stainless steel; Exterior: SS 304 or Mild Steel. Stainless steel trays for durability and hygiene. Ethernet-based communication for remote operation. -4-inch/7-inch color touch screen interface for centralized control. High-precision PT-100 sensor for real-time monitoring. Inner glass door with outer metal door, gasket, and lock for airtight sealing. Adjustable thermostats for temperature cut-offs and safety. -Forced air circulation for uniform temperature. PU wheels for easy movement. Auto-tune PLC/Digital control with data logging for up to 1,000 readings. Audio-visual alarms for deviations. Comes with DQ, IQ, OQ, PQ, SOP & maintenance manual. Power supply: 230V, 50 Hz (also available in 60 Hz).',
    image: hotAirOven,
  },
  {
    title: 'Freeze Thaw Chamber',
    description:
      'Equipment Specifications: Temperature Range: -20°C to 50°C -Double wall PUF insulation Interior: SS 304, Exterior: Mild Steel Magnetic gasket doors for airtight sealing Forced air circulation for uniform temperature control CFC-free cooling system with sealed compressor & condenser Integrated heating system for controlled thawing PLC-controlled operation with data logging (up to 1000 readings) PT-100 sensors for precise temperature monitoring PU wheels for easy movement Adjustable temperature cut-off thermostats Audio/visual alarms for temperature deviations Automatic defrost system High-speed Ethernet-based communication for remote monitoring Documentation: Includes DQ, IQ, OQ, PQ, SOP & Maintenance Manual Storage conditions must be structured to ensure that product quality remains unaffected. Except for brief transit periods within the same climate zone, it is nearly impossible to validate shipping methods for all environmental conditions. Therefore, distribution stability studies are conducted to provide supplementary data, complementing preformulation development and standard ICH Q1A(R2) studies.',
    image: deepFreezerMinus30,
  },
  {
    title: 'Combined Refrigerators (2-8ºC/-25ºC)',
    description: '',
    image: dualBodIncubator,
  },
  {
    title: 'UV Sterilisation Chamber( Surface Dis-infectant )',
    description: '',
    image: uvSterilizationChamber,
  },
  {
    title: 'Dual Cooling Chamber',
    description: '',
    image: dualBodIncubator,
  },
  {
    title: 'Dual Humidity Chamber',
    description: '',
    image: dualBodIncubator,
  },
  {
    title: 'Web Desk- a 21 CFR Part 11 Ready Softwares',
    description: '',
    image: productPlaceholder,
  },
  {
    title: 'Alarm Systems 4 and 8 Channel',
    description: '',
    image: productPlaceholder,
  },
  {
    title: 'Display based Remote Alarm System',
    description: '',
    image: productPlaceholder,
  },
]

function getCatalogCategory(title) {
  const normalizedTitle = title.toLowerCase()

  if (normalizedTitle.includes('software') || normalizedTitle.includes('web desk')) {
    return 'Software'
  }

  if (normalizedTitle.includes('alarm')) {
    return 'Monitoring'
  }

  if (normalizedTitle.includes('incubator')) {
    return 'Incubators'
  }

  if (normalizedTitle.includes('oven')) {
    return 'Ovens'
  }

  if (normalizedTitle.includes('refrigerator') || normalizedTitle.includes('freezer')) {
    return 'Refrigeration'
  }

  if (normalizedTitle.includes('chamber')) {
    return 'Chambers'
  }

  return 'Other'
}

function truncateText(text, maxLength) {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return `${text.slice(0, Math.max(0, maxLength - 1)).trim()}…`
}

const catalogProducts = catalogItems.map((item, index) => {
  const category = getCatalogCategory(item.title)
  const rating = item.description ? 5 : 4

  return {
    id: `${category}-${index}`,
    ...item,
    category,
    rating,
    meta: 'Request Quote',
  }
})

const catalogCategories = (() => {
  const counts = new Map()

  for (const product of catalogProducts) {
    counts.set(product.category, (counts.get(product.category) ?? 0) + 1)
  }

  return [
    { label: 'All Products', value: 'All', count: catalogProducts.length },
    ...Array.from(counts.entries())
      .sort(([categoryA], [categoryB]) => categoryA.localeCompare(categoryB))
      .map(([category, count]) => ({ label: category, value: category, count })),
  ]
})()

const PAGE_SIZES = [9, 12, 24]

function Products({ navigate }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortKey, setSortKey] = useState('featured')
  const [viewMode, setViewMode] = useState('grid')
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0])
  const [page, setPage] = useState(1)

  const filteredProducts = useMemo(() => {
    const nextProducts =
      activeCategory === 'All'
        ? catalogProducts
        : catalogProducts.filter((product) => product.category === activeCategory)

    const sortedProducts = [...nextProducts]

    if (sortKey === 'name-asc') {
      sortedProducts.sort((productA, productB) => productA.title.localeCompare(productB.title))
    }

    if (sortKey === 'name-desc') {
      sortedProducts.sort((productA, productB) => productB.title.localeCompare(productA.title))
    }

    if (sortKey === 'rating-desc') {
      sortedProducts.sort((productA, productB) => productB.rating - productA.rating)
    }

    if (sortKey === 'category') {
      sortedProducts.sort((productA, productB) => {
        const categoryComparison = productA.category.localeCompare(productB.category)
        if (categoryComparison !== 0) return categoryComparison
        return productA.title.localeCompare(productB.title)
      })
    }

    return sortedProducts
  }, [activeCategory, sortKey])

  const totalResults = filteredProducts.length
  const totalPages = Math.max(1, Math.ceil(totalResults / pageSize))
  const safePage = Math.min(page, totalPages)
  const startIndex = (safePage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize, totalResults)
  const pageProducts = filteredProducts.slice(startIndex, endIndex)

  const showingFrom = totalResults === 0 ? 0 : startIndex + 1
  const showingTo = endIndex

  const paginationPages = Array.from({ length: totalPages }, (_, index) => index + 1)

  const handleCategoryChange = (categoryValue) => {
    setActiveCategory(categoryValue)
    setPage(1)
  }

  const handleSortChange = (event) => {
    setSortKey(event.target.value)
    setPage(1)
  }

  const handlePageSizeChange = (nextSize) => {
    setPageSize(nextSize)
    setPage(1)
  }

  return (
    <section className="product-catalog">
      <div className="container product-catalog__layout">
        <aside className="product-catalog__sidebar" aria-label="Product filters">
          <details className="product-filter" open>
            <summary className="product-filter__summary">
              <span className="product-filter__title">Categories</span>
            </summary>
            <ul className="product-filter__list" aria-label="Product categories">
              {catalogCategories.map((category) => (
                <li key={category.value} className="product-filter__item">
                  <button
                    className={`product-filter__option ${activeCategory === category.value ? 'is-active' : ''}`}
                    type="button"
                    onClick={() => handleCategoryChange(category.value)}
                  >
                    <span>{category.label}</span>
                    <span className="product-filter__count" aria-hidden="true">
                      {category.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </details>

          <details className="product-filter" open>
            <summary className="product-filter__summary">
              <span className="product-filter__title">Price</span>
            </summary>
            <div className="product-filter__body">
              <div className="product-filter__range">
                <input aria-label="Price range" type="range" min="0" max="100" defaultValue="70" />
                <div className="product-filter__range-meta">
                  <span>Min</span>
                  <span>Max</span>
                </div>
              </div>
              <button className="product-filter__action" type="button" onClick={() => navigate('/contact')}>
                Filter
              </button>
            </div>
          </details>

          <details className="product-filter">
            <summary className="product-filter__summary">
              <span className="product-filter__title">Color Options</span>
            </summary>
            <div className="product-filter__swatches" aria-label="Color options">
              <button className="product-filter__swatch product-filter__swatch--ink" type="button" aria-label="Ink" />
              <button className="product-filter__swatch product-filter__swatch--stone" type="button" aria-label="Stone" />
              <button className="product-filter__swatch product-filter__swatch--leaf" type="button" aria-label="Leaf" />
              <button className="product-filter__swatch product-filter__swatch--plum" type="button" aria-label="Plum" />
            </div>
          </details>

          <details className="product-filter">
            <summary className="product-filter__summary">
              <span className="product-filter__title">Size Options</span>
            </summary>
            <ul className="product-filter__chips" aria-label="Size options">
              {['Small', 'Medium', 'Large', 'XL'].map((size) => (
                <li key={size}>
                  <button className="product-filter__chip" type="button">
                    {size}
                  </button>
                </li>
              ))}
            </ul>
          </details>

          <details className="product-filter">
            <summary className="product-filter__summary">
              <span className="product-filter__title">Compass</span>
            </summary>
            <div className="product-filter__body">
              <p className="product-filter__note">
                Browse the catalog grid and tap a product to start an enquiry.
              </p>
            </div>
          </details>
        </aside>

        <div className="product-catalog__content">
          <div className="product-catalog__banner" aria-label="Catalog banner">
            <p className="product-catalog__eyebrow">New Range 2026</p>
            <h1 className="product-catalog__title">Products</h1>
            <p className="product-catalog__subtitle">
              Precision environmental control equipment built for regulated laboratories.
            </p>
          </div>

          <div className="product-toolbar" role="region" aria-label="Catalog controls">
            <div className="product-toolbar__left">
              <div className="product-toolbar__views" aria-label="View mode">
                <button
                  aria-pressed={viewMode === 'grid'}
                  className={`product-toolbar__view ${viewMode === 'grid' ? 'is-active' : ''}`}
                  type="button"
                  onClick={() => setViewMode('grid')}
                >
                  ▦
                </button>
                <button
                  aria-pressed={viewMode === 'list'}
                  className={`product-toolbar__view ${viewMode === 'list' ? 'is-active' : ''}`}
                  type="button"
                  onClick={() => setViewMode('list')}
                >
                  ≡
                </button>
              </div>

              <div className="product-toolbar__sizes" aria-label="Items per page">
                <span className="product-toolbar__label">Show</span>
                {PAGE_SIZES.map((size) => (
                  <button
                    key={size}
                    className={`product-toolbar__size ${pageSize === size ? 'is-active' : ''}`}
                    type="button"
                    onClick={() => handlePageSizeChange(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-toolbar__right">
              <span className="product-toolbar__count">
                Showing {showingFrom}–{showingTo} of {totalResults} results
              </span>
              <label className="product-toolbar__sort">
                <span className="product-toolbar__label">Sort by</span>
                <select value={sortKey} onChange={handleSortChange}>
                  <option value="featured">Featured</option>
                  <option value="name-asc">Name: A → Z</option>
                  <option value="name-desc">Name: Z → A</option>
                  <option value="rating-desc">Rating</option>
                  <option value="category">Category</option>
                </select>
              </label>
            </div>
          </div>

          <div
            className={`product-catalog__grid ${viewMode === 'list' ? 'product-catalog__grid--list' : ''}`}
            aria-label="Product results"
          >
            {pageProducts.map((product) => (
              <article key={product.id} className="catalog-card">
                <div className="catalog-card__media">
                  {product.badge ? <span className="catalog-card__badge">{product.badge}</span> : null}
                  <img src={product.image} alt={product.title} loading="lazy" />
                </div>

                <div className="catalog-card__body">
                  <p className="catalog-card__category">{product.category}</p>
                  <h3 className="catalog-card__name">{product.title}</h3>
                  <div className="catalog-card__rating" aria-label={`Rated ${product.rating} out of 5`}>
                    <span aria-hidden="true">{'★'.repeat(product.rating)}</span>
                    <span className="catalog-card__meta">{product.meta}</span>
                  </div>
                  {product.description ? (
                    <p className="catalog-card__description">
                      {truncateText(product.description, 260)}
                    </p>
                  ) : null}
                  <button
                    className="catalog-card__cta"
                    type="button"
                    onClick={() => navigate('/contact')}
                  >
                    Enquire
                  </button>
                </div>
              </article>
            ))}
          </div>

          <nav className="product-pagination" aria-label="Pagination">
            <button
              className="product-pagination__button"
              type="button"
              disabled={safePage === 1}
              onClick={() => setPage((current) => Math.max(1, current - 1))}
            >
              Back
            </button>

            <div className="product-pagination__pages">
              {paginationPages.map((pageNumber) => (
                <button
                  key={pageNumber}
                  className={`product-pagination__page ${safePage === pageNumber ? 'is-active' : ''}`}
                  type="button"
                  onClick={() => setPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
            </div>

            <button
              className="product-pagination__button"
              type="button"
              disabled={safePage === totalPages}
              onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Products

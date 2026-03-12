import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { productsContent } from '../data/siteContent'
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

const productGalleryItems = [
  {
    title: 'Reach In – Stability (Humidity) Chamber',
    subtitle:
      'Stability chambers are designed to create artificially replicating conditions for the medicines that might be exposed in various environmental conditions. Sometimes it is used to accelerate the effects of exposure to atmospheric conditions that may be adverse in any area where this medicine may store. Atom make Stability(Humidity) Chambers are perfectly designed for the requirements of stability studies and climatic tests. These Stability Chambers are specifically developed to meet FDA/ICH stability requirements for accurate control and uniformity of both temperature and humidity. Atom make Stability Chambers feature’s various safety, audio visual alarms, 21 CFR part 11 software and a vast range of options and is the most preferred choice for stability studies. Each Atom make Stability Chamber’s have been specifically developed to meet the requirements of test laboratories in the pharmaceutical industries.',
    image: reachInBodChamber,
  },
  {
    title: 'Walk In – Stability (Humidity) Chamber',
    subtitle:
      'Walk-In Stability chambers are designed to create artificially replicating conditions for the medicines that might be exposed in various environmental conditions. Sometimes it is used to accelerate the effects of exposure to atmospheric conditions that may be adverse in any area where this medicine may store. Atom make Walk-In Stability(Humidity) Chambers are perfectly designed for the requirements of stability studies and climatic tests. These Walk-In Stability Chambers are specifically developed to meet FDA/ICH stability requirements for accurate control and uniformity of both temperature and humidity. Atom make Walk-In Stability Chambers feature’s various safety, audio visual alarms, 21 CFR part 11 software and a vast range of options and is the most preferred choice for stability studies. Each Atom make Walk-In Stability Chamber’s have been specifically developed to meet the requirements of test laboratories in the pharmaceutical industries.',
    image: walkinHumidityChamber,
  },
  {
    title: 'Reach In – Incubator',
    subtitle:
      'An incubator is a device used to grow and maintain microbiological cultures or cell cultures. The incubator maintains optimal temperature, humidity and other conditions such as the CO2 and oxygen content of the atmosphere inside. Incubators are essential for much experimental work in cell biology, microbiology and molecular biology and are used to culture both bacterial and eukaryotic cells. Atom make Incubator’s are perfectly designed for the growth & storage of bacterial cultures, gentle incubation & conditioning and Media Preparation. These Incubator’s are specifically developed to meet FDA/ICH stability requirements for accurate control and uniformity of temperature. Atom make Incubator’s ensure consistent performance at any temperature within a range of 5°C to 60°C at an accuracy of ±0.5°C & at an uniformity of ±1°C. Atom make Incubator’s feature’s various safety, audio visual alarms, 21 CFR part 11 software and a vast range of options.',
    image: reachInBodChamber,
  },
  {
    title: 'Walk In – Incubator',
    subtitle:
      'An incubator is a device used to grow and maintain microbiological cultures or cell cultures. The incubator maintains optimal temperature, humidity and other conditions such as the CO2 and oxygen content of the atmosphere inside. Incubators are essential for much experimental work in cell biology, microbiology and molecular biology and are used to culture both bacterial and eukaryotic cells. Atom make Walk In Incubator’s are perfectly designed for the growth & storage of bacterial cultures, gentle incubation & conditioning and Media Preparation. These Incubator’s are specifically developed to meet FDA/ICH stability requirements for accurate control and uniformity of temperature. Atom make Walk In Incubator’s ensure consistent performance at any temperature within a range of 5°C to 60°C at an accuracy of ±0.5°C & at an uniformity of ±1°C. Atom make Walk In Incubator’s feature’s various safety, audio visual alarms, 21 CFR part software and a vast range of options.',
    image: incubator,
  },
  {
    title: 'Dual BOD Incubators',
    subtitle:
      'Atom make Dual BOD Incubator’s are perfectly designed for the growth & storage of bacterial cultures, gentle incubation & conditioning and Media Preparation. These Incubator’s are specifically developed to meet FDA/ICH stability requirements for accurate control and uniformity of temperature. Atom make Dual BOD Incubator’s ensure consistent performance at any temperature within a range of 5°C to 60°C at an accuracy of ±0.5°C & at an uniformity of ±1°C. Atom make Dual BOD Incubator’s feature’s various safety, audio visual alarms, 21 CFR part 11 software and a vast range of options.',
    image: dualBodIncubator,
  },
  {
    title: 'Reach In – Cooling Chmber',
    subtitle:
      'Cooling chambers are known as Pharma Refrigerator, Cooling cabinet etc. and the equipment will maintain the set temperature between 2 to 8⁰C. Atom make Pharma Refrigerator are comply with the CGMP lab standard as per Pharma guidelines. Equipment is available in standard models with different size and dimension from 150 liter to 2000 liter. Custom built chambers also can construct as per the requirement. Atom make Cooling Chambers are perfectly designed and are specifically developed to meet FDA/ICH requirements for accurate control and uniformity of temperature.Atom make Cooling Chambers feature’s various safety, audio visual alarms, 21 CFR part 11 software and a vast range of options and is the most preferred choice for your studies. Each Atom make Stability Chamber’s have been specifically developed to meet the requirements of test laboratories in the pharmaceutical industries.',
    image: reachInBodChamber,
  },
  {
    title: 'Walk In – Cooling Chamber',
    subtitle:
      'Walk In Cooling chambers are known as Pharma Refrigerator, Cooling cabinet etc. and the equipment will maintain the set temperature between 2 to 8⁰C. Atom make Pharma Refrigerator are comply with the CGMP lab standard as per Pharma guidelines. Equipment is available in standard models with different size and dimension from 150 liter to 2000 liter. Custom built chambers also can construct as per the requirement. Atom make Walk In Cooling Chambers are perfectly designed and are specifically developed to meet FDA/ICH requirements for accurate control and uniformity of temperature. Atom make Walk In Cooling Chambers feature’s various safety, audio visual alarms, 21 CFR part 11 software and a vast range of options and is the most preferred choice for your studies. Each Atom make Stability Chamber’s have been specifically developed to meet the requirements of test laboratories in the pharmaceutical industries.',
    image: walkinCoolingChamber,
  },
  {
    title: 'BOD Chamber',
    subtitle:
      'Equipment Specifications: 60mm PUF insulated modular panels for enhanced thermal efficiency. Interior: SS 304 stainless steel. Exterior: Choice of SS 304 or Pre-coated GI (Galvanized Iron). Stainless Steel Trays: Provides durability and hygiene, ideal for long-term use. Observation Window: 300 x 300 mm window for easy viewing without opening the chamber. -PVC Strip Curtain: Reduces temperature leakages when the door is opened. (Optional) -Illuminated Working Area: Internal lighting for clear visibility during operation. Flooring: Linoleum carpet for easy maintenance and hygiene. Heater Line Along Door: Prevents condensation around the door area. U-Shaped SS Tubular Heaters: Efficient heating for maintaining desired temperatures. Forced Air Circulation: Ensures uniform temperature distribution throughout the chamber. Cooling System: CFC-free system with hermetically sealed compressor, coupled with an evaporation coil and condenser. Split-type condenser unit placed in a well-ventilated area to avoid hot air emission inside the room. Control System: PLC-driven operations with data logging capacity for up to 1,000 readings. All operations managed through a 4-inch color touch screen. High-quality imported Temperature/Rh combo sensor with 4-20 mA output for precise monitoring. Ethernet-based communication for seamless data access and remote control. Safety Features: Low & High temperature cut-off thermostats for protection. Audio/visual alarms to alert operators in case of any deviations from set parameters. Supplied with DQ, IQ, OQ, PQ, SOP, and a Maintenance Manual. Power Supply: 230/415V, 50 Hz main supply. Option available for 60 Hz cycle.',
    image: walkinHumidityChamber,
  },
  {
    title: 'Photostability Chamber',
    subtitle:
      'Photostability chambers are utilised for light exposure testing of drug products in the pharmaceutical industry according to ICH Q1B FDA Photostability Testing of New Drug Substances and Products. Our photostability test chambers are designed to meet option 2 of this guideline. Our chambers are available in two sizes featuring a compact benchtop and a spacious upright model with uniform light, temperature and humidity distribution. The photostability testing chambers utilise cool white and ultraviolet-A fluorescent lamps with power levels that allow photostability tests to be carried out in less than 100 hours. Exceptional quality, innovative product features, high accuracy sensors and smart touchscreen controls provide optimum conditions for your photostability testing.',
    image: photostabilityChamber,
  },
  {
    title: 'Deep Freezer',
    subtitle:
      'The Pharmaceutical & allied industries use Deep freezers for effective storage of drug products, life-saving vaccines and samples for diagnosis, but are also perfectly suited for temperature tests and aging subjected at sub-zero temperatures. They can be used for storage of fresh and frozen blood supplies and vaccines, also they can be used for storage of enzymes for research. Atom Make Deep freezers are available as an upright freezer or chest freezer, for your need for a precision-controlled storage equipment as low as 0 to -20°C. Our deep freezers have great safety features and are trustworthy & reliable to use.',
    image: deepFreezer,
  },
  {
    title: 'Pharma Refrigerator',
    subtitle:
      'Equipment Specifications: Double-walled construction with PUF insulation for excellent thermal efficiency. Interior: SS 304, with Exterior options in SS 304 or Mild Steel. • Stainless steel trays for durability and hygiene. Full-length inner glass door and outer metal door with gasket for airtight sealing. Internal LED lighting for clear visibility. Forced air circulation ensures uniform temperature. PU wheels for easy movement and portability. CFC-free cooling system with sealed compressor, efficient evaporation coil, and condenser. PLC control system with data logging (up to 1,000 readings) for precise monitoring. Ethernet connectivity for remote operation & seamless communication. • 4″/7″ color touch-screen interface for intuitive control. PT-100 sensor for real-time temperature monitoring. Safety features include adjustable thermostats & audio-visual alarms. Supplied with DQ, IQ, OQ, PQ, SOP & maintenance manual. Power supply: 230V 50 Hz (optional 60 Hz available).',
    image: pharmaRefrigerator,
  },
  {
    title: 'Hot Air Oven',
    subtitle:
      'Laboratory Oven (Hot Air Oven) are used in Pharma industry for curing, rapid drying and exposures for high temperature testing with high accuracy and sterilisation. Oven will maintain its set value with a Microprocessor or PLC based controller and using Pt-100 sensor as a measuring device. Standard models are available in different size and volume and custom built Ovens are available as per the requirement of customer. Atom Make Hot Air oven can maintain the temperature values from 60⁰C to 280⁰C with the accuracy of ± 2⁰C.',
    image: hotAirOven,
  },
  {
    title: 'Hot Air Oven Profiling based',
    subtitle: '',
    image: hotAirOven,
  },
  {
    title: 'Vacuum Oven',
    subtitle:
      'Vacuum oven also referred as Vacuum Drying Oven & Vacuum Dryer, is used for performing drying operations which generally comprise of removal of moisture from materials which are heat sensitive &/or highly hygroscopic in nature The vacuum ovens avoids damage to the sensitive material while drying in vacuum as rapid temperature overshooting is avoided as the working principle behind the operation of a vacuum oven involves substantially lowering the ambient pressure to decrease the boiling point of the liquid in the substance via the use of a vacuum pump. Vacuum drying is one of the most effective and gentle drying methods available. The aim of this method is to gently dry a high-grade product that contains water or a solvent without endangering the materials. Drying in a vacuum drying chamber is particularly recommended for compounds containing flammable solvents. Due to the oxygen in the air in particular, these compounds often develop an explosive atmosphere during the drying process. This is prevented when dried in a vacuum drying chamber. Vacuum drying also minimises the risk of scaling or oxidation residue.',
    image: vacuumOven,
  },
  {
    title: 'Deep freezer (-30ºC)',
    subtitle:
      'Double-walled with PUF insulation Interior: SS 304, Exterior: Mild Steel Stainless Steel trays Leak-proof door with magnetic gasket Forced air circulation for uniform temperature PU wheels for easy movement CFC-free cooling system with sealed compressor, evaporation coil & condenser PID control with data logging (up to 1,000 readings) Ethernet-based communication PT-100 sensor for precise temperature monitoring Safety features: Low temp cut-off, audio/visual alarms Documentation: Includes DQ, IQ, OQ, PQ, SOP & Maintenance Manual Power supply: 230V 50 Hz (optional 60 Hz available).',
    image: deepFreezerMinus30,
  },
  {
    title: 'Laboratory Oven',
    subtitle:
      'Equipment Specifications: Double-walled construction with PUF insulation for thermal efficiency. Interior: SS 304 stainless steel; Exterior: SS 304 or Mild Steel. Stainless steel trays for durability and hygiene. Ethernet-based communication for remote operation. -4-inch/7-inch color touch screen interface for centralized control. High-precision PT-100 sensor for real-time monitoring. Inner glass door with outer metal door, gasket, and lock for airtight sealing. Adjustable thermostats for temperature cut-offs and safety. -Forced air circulation for uniform temperature. PU wheels for easy movement. Auto-tune PLC/Digital control with data logging for up to 1,000 readings. Audio-visual alarms for deviations. Comes with DQ, IQ, OQ, PQ, SOP & maintenance manual. Power supply: 230V, 50 Hz (also available in 60 Hz).',
    image: hotAirOven,
  },
  {
    title: 'Freeze Thaw Chamber',
    subtitle:
      'Equipment Specifications: Temperature Range: -20°C to 50°C -Double wall PUF insulation Interior: SS 304, Exterior: Mild Steel Magnetic gasket doors for airtight sealing Forced air circulation for uniform temperature control CFC-free cooling system with sealed compressor & condenser Integrated heating system for controlled thawing PLC-controlled operation with data logging (up to 1000 readings) PT-100 sensors for precise temperature monitoring PU wheels for easy movement Adjustable temperature cut-off thermostats Audio/visual alarms for temperature deviations Automatic defrost system High-speed Ethernet-based communication for remote monitoring Documentation: Includes DQ, IQ, OQ, PQ, SOP & Maintenance Manual Storage conditions must be structured to ensure that product quality remains unaffected. Except for brief transit periods within the same climate zone, it is nearly impossible to validate shipping methods for all environmental conditions. Therefore, distribution stability studies are conducted to provide supplementary data, complementing preformulation development and standard ICH Q1A(R2) studies.',
    image: deepFreezerMinus30,
  },
  {
    title: 'Combined Refrigerators (2-8ºC/-25ºC)',
    subtitle: '',
    image: dualBodIncubator,
  },
  {
    title: 'UV Sterilisation Chamber( Surface Dis-infectant )',
    subtitle: '',
    image: uvSterilizationChamber,
  },
  {
    title: 'Dual Cooling Chamber',
    subtitle: '',
    image: dualBodIncubator,
  },
  {
    title: 'Dual Humidity Chamber',
    subtitle: '',
    image: dualBodIncubator,
  },
  {
    title: 'Web Desk- a 21 CFR Part 11 Ready Softwares',
    subtitle: '',
    image: productPlaceholder,
  },
  {
    title: 'Alarm Systems 4 and 8 Channel',
    subtitle: '',
    image: productPlaceholder,
  },
  {
    title: 'Display based Remote Alarm System',
    subtitle: '',
    image: productPlaceholder,
  },
]

function Products({ navigate }) {
  const productNames = productGalleryItems.map((item) => item.title)

  return (
    <>
      <Hero
        description="At Indo Climatecare Pvt Ltd., our product range is engineered for stable performance, documentation-ready workflows, and precision environmental control."
        image={productsContent.heroImage}
        overlayText="At Indo Climatecare Pvt Ltd., it is our endeavor to become a global leader in manufacturing equipment driven by innovation."
        primaryAction={{ label: 'Contact Sales', onClick: () => navigate('/contact') }}
        title="Products"
        variant="overlay"
      />

      <section className="section">
        <div className="container container--wide">
          <div className="section-header">
            <p className="section-header__eyebrow">Product Range</p>
            <h2 className="section-header__title">Product Grid</h2>
            <p className="section-header__description">
              Select a product from the list to preview a focused set of tiles.
            </p>
          </div>

        <div className="product-showcase section--tight">
          <div className="product-gallery-grid product-gallery-grid--center">
            {productGalleryItems.map((item) => (
              <ProductCard
                key={item.title}
                image={item.image}
                subtitle={item.subtitle}
                title={item.title}
                variant="gallery"
              />
            ))}
          </div>
        </div>

        <div className="product-name-list">
          <p className="product-name-list__eyebrow">All Product Names</p>
          <ul className="product-name-list__list">
            {productNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </>
)
}

export default Products

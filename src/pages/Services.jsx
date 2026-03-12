import Hero from '../components/Hero'
import servicesHeroImage from '../assets/services/footer.jpg'
import annualMaintenanceImage from '../assets/services/ANNUAL-MAINTENANCE-CONTRACT-PACKAGE.jpg'
import comprehensiveMaintenanceImage from '../assets/services/Comprehensive-Maintenance-Contract-Packages.jpg'
import onlineSupportImage from '../assets/services/Online-Support.jpg'
import upGradationImage from '../assets/services/UP-GRADATION.jpg'
import upGradationServicesImage from '../assets/services/UP-GRADATION-SERVICES.jpg'
import onsiteCalibrationImage from '../assets/services/ONSITE-CALIBRATION.jpg'
import auditSupportImage from '../assets/services/AUDIT-SUPPORT.jpg'
import certificationTrainingImage from '../assets/services/CERTIFICATION-TRAINING-PROGRAM.jpg'
import advantagesImage from '../assets/services/Your-advantages-with-indo-Service.jpg'
import extraServiceImage from '../assets/services/Would-you-like-extra-service-for-your-devices.jpg'
import contactImage from '../assets/services/Contact.jpg'

function Services() {
  return (
    <>
      <Hero
        image={servicesHeroImage}
        imageAlt="Services & Support"
        title="Services & Support"
        variant="overlay"
      />

      <section className="section section--tight">
        <div className="container content-split">
          <div className="diagram-panel">
            <img
              src={annualMaintenanceImage}
              alt="Annual Maintenance Contract Package"
            />
          </div>

          <div className="software-copy">
            <h2>Annual Maintenance Contract Package</h2>
            <ul>
              <li>Software update</li>
              <li>Breakdown</li>
              <li>Re-Calibration / Validation</li>
              <li>Preventive maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container content-split">
          <div className="software-copy">
            <h2>Comprehensive Maintenance Contract Packages</h2>
            <ul>
              <li>Replacement of critical part</li>
              <li>Easy spare replacement</li>
              <li>Contract for 1,3,5 years</li>
              <li>Repair of faulty part</li>
              <li>Consumables at low cost</li>
            </ul>
          </div>

          <div className="diagram-panel">
            <img
              src={comprehensiveMaintenanceImage}
              alt="Comprehensive Maintenance Contract Packages"
            />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container content-split">
          <div className="diagram-panel">
            <img src={onlineSupportImage} alt="Online Support" />
          </div>

          <div className="software-copy">
            <h2>Online Support</h2>
            <ul>
              <li>Software update</li>
              <li>Troubleshooting</li>
              <li>Technical call support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container content-split">
          <div className="software-copy">
            <h2>Up-Gradation</h2>
            <p>
              If your Walk-In stability or Cold Chamber is giving you trouble while in
              operation, Its time you should upgrade it with Indo Climatecare.
            </p>
          </div>

          <div className="diagram-panel">
            <img src={upGradationImage} alt="Up-Gradation" />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container content-split">
          <div className="diagram-panel">
            <img src={upGradationServicesImage} alt="Up-gradation Services" />
          </div>

          <div className="software-copy">
            <h2>Up-gradation Services</h2>
            <ul>
              <li>Controlling system</li>
              <li>Cooling system</li>
              <li>Both Controlling and Cooling system</li>
              <li>Software</li>
              <li>Energy Optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container content-split">
          <div className="software-copy">
            <h2>Onsite Calibration</h2>
            <ul>
              <li>Hardware / Software Qualification</li>
              <li>Audit Quality Compliance</li>
              <li>On site Calibration and Validation</li>
            </ul>
          </div>

          <div className="diagram-panel">
            <img src={onsiteCalibrationImage} alt="Onsite Calibration" />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container content-split">
          <div className="diagram-panel">
            <img src={auditSupportImage} alt="Audit Support" />
          </div>

          <div className="software-copy">
            <h2>Audit Support</h2>
            <p>Technical audit support by our team of highly experienced engineers.</p>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container content-split">
          <div className="software-copy">
            <h2>Certification &amp; Training Program</h2>
            <ul>
              <li>Product Training to Employee / Client</li>
              <li>Service Training to Employee / Client</li>
            </ul>
          </div>

          <div className="diagram-panel">
            <img
              src={certificationTrainingImage}
              alt="Certification & Training Program"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-split">
          <div className="diagram-panel">
            <img
              src={advantagesImage}
              alt="Your advantages with Indo Climatecare Service"
            />
          </div>

          <div className="software-copy">
            <h2>Your advantages with Indo Climatecare Service:</h2>
            <ul>
              <li>
                <strong>Preferred service processing on weekdays, usually in just 48 hours</strong>{' '}
                In time-critical cases, we can be on site for you more quickly, thereby
                minimising the downtime and shutdowns.
              </li>
              <li>
                <strong>Easy made contract conditions</strong> Maintenance work is cheaper
                for contract based customers because it is tailored to the equipment and
                operation &ndash; this saves money in the long run.
              </li>
              <li>
                <strong>Reminder service for maintenance and calibration of your devices</strong>{' '}
                We will inform you in advance about upcoming maintenance, calibration and
                qualification dates and take care of the processing so that you can
                concentrate on your work.
              </li>
              <li>
                <strong>Detailed documentation</strong> Our qualification and maintenance is
                documented in detail by us and offers you verifiable process reliability.
              </li>
              <li>
                <strong>Device security</strong> Regular technical updates give you security
                in quality management and work processes.
              </li>
              <li>
                <strong>Service from the ATOM professionals</strong> All our services are
                carried out by our qualified specialist technicians with calibrated
                measuring equipment&apos;s.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container content-split">
          <div className="software-copy">
            <h2>Would you like extra service for your devices?</h2>
            <p>
              We would be happy to develop your individual Service concept and work with
              you to determine the precise service requirements for a service that suits
              your devices and your work. This pays off for you in the long run.
            </p>
          </div>

          <div className="diagram-panel">
            <img
              src={extraServiceImage}
              alt="Would you like extra service for your devices?"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-split">
          <div className="diagram-panel">
            <img src={contactImage} alt="Contact" />
          </div>

          <div className="software-copy">
            <h2>Contact</h2>
            <p>
              You can reach us by telephone on +91 8830561339 or by email at{' '}
              <a href="mailto:info@indoclimatecare.com">info@indoclimatecare.com</a> Or
              simply send us your inquiry using the form below. We will then contact you
              as soon as possible.
            </p>
            <p>
              <strong>Interested?</strong>
            </p>
            <p>
              For further information, request a quick &amp; uncomplicated personal callback
              from our service staff.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services

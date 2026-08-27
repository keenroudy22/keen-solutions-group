import Image from 'next/image';

const services = [
  {
    title: 'Business Internet',
    description: 'Internet service sized for the way your business actually works.',
    items: ['Fiber and cable options', 'Carrier and availability comparisons', 'Backup connection planning'],
  },
  {
    title: 'Business Phone',
    description: 'Straightforward phone systems for the office, remote staff, or both.',
    items: ['VoIP phone systems', 'Number transfers', 'Auto attendants and call routing'],
  },
  {
    title: 'Moves & New Locations',
    description: 'One person coordinating the details before opening day.',
    items: ['New office setup', 'Service transfers', 'Installation coordination'],
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Keen Solutions Group home">
          <Image src="/ksg-logo.png" alt="" width={50} height={50} priority />
          <span>Keen Solutions Group</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a className="header-contact" href="mailto:info@keensolutionsgroup.com?subject=KSG%20Project%20Inquiry">Contact us</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="kicker">Internet and phone solutions for Central Indiana businesses</p>
            <h1>Get connected without the runaround.</h1>
            <p className="hero-lede">
              Keen Solutions Group helps businesses find the right internet and phone service,
              then stays involved through installation and go-live.
            </p>
            <a className="primary-button" href="mailto:info@keensolutionsgroup.com?subject=KSG%20Project%20Inquiry">
              Talk with KSG
            </a>
          </div>
          <div className="hero-side">
            <Image src="/ksg-logo.png" alt="KSG" width={260} height={260} priority />
            <p>Local help from quote to installation.</p>
          </div>
        </div>
      </section>

      <section className="intro section" id="about">
        <p className="section-label">What we do</p>
        <div className="intro-grid">
          <h2>One local contact for your business connectivity.</h2>
          <div>
            <p>
              Comparing providers and coordinating an installation takes time. We handle the
              legwork, explain the options plainly, and keep the project moving.
            </p>
            <p>
              Whether you are opening a location, moving an office, or replacing an old setup,
              KSG helps you make a practical decision without sales pressure.
            </p>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <p className="section-label">Services</p>
        <h2>What can we help with?</h2>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="work-band">
        <div className="section work-grid">
          <div>
            <p className="section-label section-label-light">How KSG helps</p>
            <h2>A real person stays with the project.</h2>
          </div>
          <div className="work-copy">
            <p><strong>We listen.</strong> Tell us about the location, your team, and your timeline.</p>
            <p><strong>We compare.</strong> We check the available providers and explain the tradeoffs.</p>
            <p><strong>We coordinate.</strong> We help manage the order, installation, and activation.</p>
          </div>
        </div>
      </section>

      <section className="partners section">
        <div>
          <p className="section-label">Commercial partners</p>
          <h2>Bring us in before connectivity becomes a last-minute problem.</h2>
        </div>
        <div className="partner-copy">
          <p>
            KSG works with commercial real estate professionals, property managers, and business
            advisors to help their clients open or move with fewer surprises.
          </p>
          <a href="mailto:info@keensolutionsgroup.com?subject=Commercial%20Partner%20Inquiry">Start a conversation →</a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section contact-inner">
          <div>
            <p className="section-label section-label-light">Let&apos;s talk</p>
            <h2>Opening, moving, or ready for a better setup?</h2>
          </div>
          <a href="mailto:info@keensolutionsgroup.com?subject=KSG%20Project%20Inquiry">
            info@keensolutionsgroup.com
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <Image src="/ksg-logo.png" alt="" width={44} height={44} />
          <span>Keen Solutions Group</span>
        </div>
        <p>Noblesville, Indiana · Serving businesses throughout Central Indiana</p>
        <p>© {new Date().getFullYear()} Keen Solutions Group</p>
      </footer>
    </main>
  );
}

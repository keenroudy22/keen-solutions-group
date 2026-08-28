import Image from 'next/image';

const services = [
  'Business internet',
  'Business phone systems',
  'New locations and office moves',
  'Backup and better-fit service reviews',
];

const steps = [
  ['Tell us what is changing.', 'Opening a location, moving an office, replacing phones, or reviewing the service you already have.'],
  ['We check the available options.', 'KSG compares the options and explains the practical tradeoffs in plain language.'],
  ['We help coordinate the next step.', 'Once you choose a fit, KSG helps keep the order, installation, and activation moving.'],
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Keen Solutions Group home">
          <Image className="brand-mark" src="/ksg-mark-transparent.png" alt="KSG" width={48} height={48} priority />
          <span>Keen Solutions Group</span>
        </a>
        <div className="header-actions">
          <a className="header-review" href="#contact">Free service review</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Central Indiana business connectivity</p>
          <h1>Business internet and phone service, made simple.</h1>
          <p className="hero-lede">KSG helps you compare options, choose the right fit, and coordinate installation.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">Request a free service review</a>
          </div>
        </div>
      </section>

      <section className="services section" aria-labelledby="services-title">
        <p className="eyebrow">What we do</p>
        <h2 id="services-title">Straightforward help for business connectivity.</h2>
        <ul>
          {services.map((service) => <li key={service}>{service}</li>)}
        </ul>
      </section>

      <section className="process section" aria-labelledby="process-title">
        <div>
          <p className="eyebrow">How KSG helps</p>
          <h2 id="process-title">A simple place to start.</h2>
        </div>
        <ol>
          {steps.map(([title, description], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><strong>{title}</strong><p>{description}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="network section">
        <p className="eyebrow">Independent advice, broader support</p>
        <p>KSG is an independent technology advisor backed by a nationwide supplier and engineering network.</p>
      </section>

      <section className="contact" id="contact">
        <div className="section contact-inner">
          <div>
            <p className="eyebrow eyebrow-light">Get in touch</p>
            <h2>Need to talk through your internet or phone service?</h2>
            <p>Reach out for a no-cost service review. We will start with what is changing and what you need the service to do.</p>
          </div>
          <div className="contact-actions">
            <a className="contact-email" href="mailto:info@keensolutionsgroup.com?subject=Free%20Business%20Connectivity%20Review">info@keensolutionsgroup.com</a>
          </div>
          <Image className="contact-logo" src="/ksg-logo-transparent.png" alt="Keen Solutions Group" width={270} height={270} />
        </div>
      </section>

      <footer>
        <div className="footer-brand"><Image src="/ksg-mark-transparent.png" alt="" width={32} height={32} /><span>Keen Solutions Group</span></div>
        <a href="mailto:info@keensolutionsgroup.com">info@keensolutionsgroup.com</a>
        <p>© {new Date().getFullYear()} Keen Solutions Group</p>
      </footer>
    </main>
  );
}

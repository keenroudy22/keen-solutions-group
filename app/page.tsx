import Image from 'next/image';
import ReviewRequest from './review-request';

const services = ['Business internet', 'Business phone systems', 'New locations and office moves', 'Backup and service reviews'];
const steps = ['Tell us what is changing.', 'We review the available options with you.', 'We help coordinate the service you choose.'];
export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Keen Solutions Group home">
          <Image className="brand-mark" src="/ksg-mark-transparent.png" alt="KSG" width={48} height={48} priority />
          <span>Keen Solutions Group</span>
        </a>
        <ReviewRequest />
      </header>

      <section className="hero">
        <div className="content hero-inner">
          <p className="eyebrow">Central Indiana business connectivity</p>
          <h1>Business internet and phone service, made simple.</h1>
          <p>KSG helps businesses compare options, choose the right fit, and coordinate installation.</p>
          <ReviewRequest />
        </div>
      </section>

      <section className="content services" aria-labelledby="services-title">
        <p className="eyebrow">What KSG helps with</p>
        <h2 id="services-title">The service you need. Clear next steps.</h2>
        <ul>{services.map((service) => <li key={service}>{service}</li>)}</ul>
      </section>

      <section className="content process" aria-labelledby="process-title">
        <div><p className="eyebrow">How it works</p><h2 id="process-title">A simple place to start.</h2></div>
        <ol>{steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol>
      </section>

      <section className="review-callout">
        <div className="content">
          <p>Planning a change or want a second look at what you have?</p>
          <ReviewRequest />
        </div>
      </section>

      <footer>
        <div className="footer-brand"><Image src="/ksg-mark-transparent.png" alt="" width={30} height={30} /><span>Keen Solutions Group</span></div>
        <p>© {new Date().getFullYear()} Keen Solutions Group</p>
      </footer>
    </main>
  );
}
